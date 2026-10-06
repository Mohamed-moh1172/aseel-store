import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { type FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";
import { BrandPicture } from "@/components/picture";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { SignInGate, UserButton } from "@/lib/auth/gates";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { categories, setLiveProducts, type CategorySlug, type Product } from "@/lib/catalog";
import { deleteProduct, ensureAdmin, listProducts, saveProduct } from "@/lib/products";
import { formatEgp } from "@/lib/utils";

export const Route = createFileRoute("/admin")({
  loader: () => listProducts(),
  head: () => ({ meta: [{ title: "لوحة التحكم | أسيل ASEEL" }] }),
  component: AdminPage,
});

const emptyForm = {
  id: "",
  nameAr: "",
  nameEn: "",
  category: "women" as CategorySlug,
  price: "",
  compareAt: "",
  image: "",
  blurb: "",
  description: "",
  details: "",
  isNew: true,
  badge: "",
};

function AdminPage() {
  const seeded = Route.useLoaderData();
  const router = useRouter();
  const [items, setItems] = useState<Product[]>(seeded);
  const [form, setForm] = useState(emptyForm);
  const [allowed, setAllowed] = useState<"pending" | "yes" | "no">("pending");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setLiveProducts(seeded);
  }, [seeded]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <SignInGate
        fallback={
          <div className="mx-auto max-w-md rounded-[24px] border border-gold/40 bg-ivory p-8 text-center">
            <h1 className="font-display text-3xl text-forest">دخول الأدمن</h1>
            <p className="mt-3 text-sm text-muted">المتجر يعرفك كأدمن بعد تسجيل الدخول. أول حساب يدخل هنا يبقى صاحب المتجر.</p>
            <div className="mt-6 space-y-3">
              {authEnabled
                ? GROK_PROVIDERS.map((p) => (
                    <Button
                      key={p.providerId}
                      type="button"
                      variant="solid"
                      className="w-full"
                      onClick={() => signIn(p.providerId, { callbackURL: "/admin" })}
                    >
                      متابعة عبر {p.label}
                    </Button>
                  ))
                : null}
            </div>
          </div>
        }
      >
        <AdminDesk
          items={items}
          setItems={setItems}
          form={form}
          setForm={setForm}
          allowed={allowed}
          setAllowed={setAllowed}
          saving={saving}
          setSaving={setSaving}
          onSaved={async (next) => {
            setLiveProducts(next);
            await router.invalidate();
          }}
        />
      </SignInGate>
    </div>
  );
}

function AdminDesk({
  items,
  setItems,
  form,
  setForm,
  allowed,
  setAllowed,
  saving,
  setSaving,
  onSaved,
}: {
  items: Product[];
  setItems: (items: Product[]) => void;
  form: typeof emptyForm;
  setForm: (form: typeof emptyForm) => void;
  allowed: "pending" | "yes" | "no";
  setAllowed: (v: "pending" | "yes" | "no") => void;
  saving: boolean;
  setSaving: (v: boolean) => void;
  onSaved: (items: Product[]) => Promise<void>;
}) {
  useEffect(() => {
    void ensureAdmin()
      .then((result) => setAllowed(result.ok ? "yes" : "no"))
      .catch(() => setAllowed("no"));
  }, [setAllowed]);

  if (allowed === "pending") {
    return <div className="h-40 animate-pulse rounded-[24px] bg-ivory" />;
  }

  if (allowed === "no") {
    return (
      <div className="rounded-[24px] border border-gold/40 bg-ivory p-8 text-center">
        <h1 className="font-display text-3xl">ليست لديك صلاحية الأدمن</h1>
        <p className="mt-3 text-muted">لوحة التحكم مرتبطة بأول حساب سجّل دخول. تواصل مع صاحب المتجر.</p>
        <div className="mt-6 flex justify-center">
          <UserButton />
        </div>
      </div>
    );
  }

  async function persist(e: FormEvent) {
    e.preventDefault();
    const price = Number(form.price);
    const compareAt = form.compareAt ? Number(form.compareAt) : undefined;
    if (!form.nameAr.trim() || !form.nameEn.trim() || !form.image || !price) {
      toast("أكمل الاسم والسعر والصورة");
      return;
    }
    setSaving(true);
    try {
      const next = await saveProduct({
        data: {
          id: form.id || undefined,
          nameAr: form.nameAr.trim(),
          nameEn: form.nameEn.trim(),
          category: form.category,
          price,
          compareAt,
          image: form.image,
          blurb: form.blurb.trim() || form.nameAr,
          description: form.description.trim() || form.blurb.trim() || form.nameAr,
          details: form.details
            .split("\n")
            .map((line) => line.trim())
            .filter(Boolean),
          isNew: form.isNew,
          badge: form.badge.trim() || undefined,
        },
      });
      setItems(next);
      setForm(emptyForm);
      await onSaved(next);
      toast("تم حفظ المنتج");
    } catch {
      toast("تعذر الحفظ — تأكد أنك مسجّل كأدمن");
    } finally {
      setSaving(false);
    }
  }

  async function remove(id: string) {
    if (!window.confirm("حذف هذا المنتج من المتجر؟")) return;
    try {
      const next = await deleteProduct({ data: { id } });
      setItems(next);
      if (form.id === id) setForm(emptyForm);
      await onSaved(next);
      toast("تم حذف المنتج");
    } catch {
      toast("تعذر الحذف");
    }
  }

  function edit(product: Product) {
    setForm({
      id: product.id,
      nameAr: product.nameAr,
      nameEn: product.nameEn,
      category: product.category,
      price: String(product.price),
      compareAt: product.compareAt ? String(product.compareAt) : "",
      image: product.image,
      blurb: product.blurb,
      description: product.description,
      details: product.details.join("\n"),
      isNew: Boolean(product.isNew),
      badge: product.badge ?? "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function onFile(file: File | undefined) {
    if (!file) return;
    try {
      const image = await compressImage(file);
      setForm({ ...form, image });
    } catch {
      toast("تعذر قراءة الصورة");
    }
  }

  return (
    <div className="space-y-10">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-english tracking-[0.22em] text-gold-deep">STORE ADMIN</p>
          <h1 className="font-display text-4xl text-forest">لوحة التحكم</h1>
          <p className="mt-1 text-sm text-muted">أضف، عدّل، أو احذف المنتجات. العلامة المائية تُوضع تلقائياً على صور المنتجات.</p>
        </div>
        <UserButton />
      </header>

      <form onSubmit={persist} className="grid gap-4 rounded-[24px] border border-gold/30 bg-ivory p-6 md:grid-cols-2">
        <h2 className="font-display text-2xl md:col-span-2">{form.id ? "تعديل منتج" : "إضافة منتج جديد"}</h2>
        <label className="block text-sm">
          الاسم بالعربي
          <Input className="mt-1" value={form.nameAr} onChange={(e) => setForm({ ...form, nameAr: e.target.value })} required />
        </label>
        <label className="block text-sm">
          الاسم بالإنجليزي
          <Input className="mt-1" dir="ltr" value={form.nameEn} onChange={(e) => setForm({ ...form, nameEn: e.target.value })} required />
        </label>
        <label className="block text-sm">
          القسم
          <select
            className="mt-1 h-11 w-full rounded-[12px] border border-gold/40 bg-ivory px-3 text-sm"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value as CategorySlug })}
          >
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.nameAr}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          السعر (ج.م)
          <Input className="mt-1" dir="ltr" type="number" min={1} value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required />
        </label>
        <label className="block text-sm">
          السعر قبل الخصم (اختياري)
          <Input className="mt-1" dir="ltr" type="number" min={1} value={form.compareAt} onChange={(e) => setForm({ ...form, compareAt: e.target.value })} />
        </label>
        <label className="block text-sm">
          شارة (عرض / جديد)
          <Input className="mt-1" value={form.badge} onChange={(e) => setForm({ ...form, badge: e.target.value })} />
        </label>
        <label className="block text-sm md:col-span-2">
          نبذة قصيرة
          <Input className="mt-1" value={form.blurb} onChange={(e) => setForm({ ...form, blurb: e.target.value })} />
        </label>
        <label className="block text-sm md:col-span-2">
          الوصف
          <Textarea className="mt-1" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        </label>
        <label className="block text-sm md:col-span-2">
          التفاصيل (سطر لكل نقطة)
          <Textarea className="mt-1" value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} />
        </label>
        <label className="flex items-center gap-2 text-sm md:col-span-2">
          <input type="checkbox" checked={form.isNew} onChange={(e) => setForm({ ...form, isNew: e.target.checked })} />
          إظهار في «وصل حديثاً»
        </label>
        <label className="block text-sm md:col-span-2">
          صورة المنتج
          <input
            className="mt-2 block w-full text-sm"
            type="file"
            accept="image/*"
            onChange={(e) => void onFile(e.target.files?.[0])}
          />
        </label>
        {form.image ? (
          <div className="md:col-span-2 max-w-xs">
            <BrandPicture src={form.image} alt={form.nameAr || "معاينة المنتج"} watermark className="aspect-square rounded-[16px] border border-gold/30" />
          </div>
        ) : null}
        <div className="flex flex-wrap gap-3 md:col-span-2">
          <Button type="submit" variant="solid" disabled={saving}>
            <Plus className="size-4" />
            {form.id ? "حفظ التعديل" : "إضافة المنتج"}
          </Button>
          {form.id ? (
            <Button type="button" variant="ghost" onClick={() => setForm(emptyForm)}>
              إلغاء التعديل
            </Button>
          ) : null}
        </div>
      </form>

      <section>
        <h2 className="mb-4 font-display text-2xl">المنتجات ({items.length})</h2>
        <ul className="grid gap-4">
          {items.map((product) => (
            <li key={product.id} className="flex flex-wrap items-center gap-4 rounded-[20px] border border-gold/30 bg-ivory p-4">
              <BrandPicture src={product.image} alt={product.nameAr} watermark className="size-20 rounded-2xl" />
              <div className="min-w-0 flex-1">
                <p className="font-display text-lg text-forest">{product.nameAr}</p>
                <p className="text-sm text-muted">
                  {categories.find((c) => c.slug === product.category)?.nameAr} • {formatEgp(product.price)}
                </p>
              </div>
              <div className="flex gap-2">
                <Button type="button" size="sm" variant="outline" onClick={() => edit(product)}>
                  <Pencil className="size-4" />
                  تعديل
                </Button>
                <Button type="button" size="sm" variant="ghost" onClick={() => void remove(product.id)}>
                  <Trash2 className="size-4" />
                  حذف
                </Button>
                <Button type="button" size="sm" asChild>
                  <Link to="/product/$id" params={{ id: product.id }}>
                    عرض
                  </Link>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

async function compressImage(file: File) {
  const bitmap = await createImageBitmap(file);
  const max = 900;
  const scale = Math.min(1, max / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas");
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/jpeg", 0.82);
}
