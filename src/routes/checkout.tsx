import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { cartTotals, resolveLines, useCart } from "@/lib/cart";
import { formatEgp } from "@/lib/utils";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "إتمام الطلب | أسيل ASEEL" }] }),
  component: CheckoutPage,
});

const payments = ["الدفع عند الاستلام", "فودافون كاش", "فوري", "فيزا", "ماستركارد"];

function CheckoutPage() {
  const items = useCart((s) => s.items);
  const placeOrder = useCart((s) => s.placeOrder);
  const lines = resolveLines(items);
  const { subtotal, shipping, total } = cartTotals(items);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "القاهرة",
    address: "",
    notes: "",
    payment: payments[0]!,
  });

  function update(key: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    if (lines.length === 0) {
      toast("السلة فارغة");
      return;
    }
    if (!form.name.trim() || !form.phone.trim() || !form.address.trim()) {
      toast("من فضلك أكمل الاسم والهاتف والعنوان");
      return;
    }
    placeOrder(form);
    void navigate({ to: "/thank-you" });
  }

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <h1 className="font-display text-3xl">لا يوجد طلب بعد</h1>
        <Button className="mt-4" asChild>
          <Link to="/">العودة للمتجر</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 lg:grid-cols-[1fr_20rem]">
      <form onSubmit={submit} className="space-y-4 rounded-[24px] border border-gold/30 bg-ivory p-6">
        <h1 className="font-display text-3xl">بيانات التوصيل</h1>
        <label className="block text-sm">
          الاسم
          <Input className="mt-1" value={form.name} onChange={(e) => update("name", e.target.value)} required />
        </label>
        <label className="block text-sm">
          الهاتف
          <Input className="mt-1" dir="ltr" value={form.phone} onChange={(e) => update("phone", e.target.value)} required />
        </label>
        <label className="block text-sm">
          البريد الإلكتروني (اختياري — لإيصال الطلب)
          <Input className="mt-1" type="email" dir="ltr" value={form.email} onChange={(e) => update("email", e.target.value)} />
        </label>
        <label className="block text-sm">
          المدينة
          <Input className="mt-1" value={form.city} onChange={(e) => update("city", e.target.value)} />
        </label>
        <label className="block text-sm">
          العنوان بالتفصيل
          <Textarea className="mt-1" value={form.address} onChange={(e) => update("address", e.target.value)} required />
        </label>
        <label className="block text-sm">
          ملاحظات
          <Textarea className="mt-1" value={form.notes} onChange={(e) => update("notes", e.target.value)} />
        </label>
        <fieldset>
          <legend className="mb-2 text-sm">طريقة الدفع</legend>
          <div className="grid gap-2">
            {payments.map((p) => (
              <label key={p} className="flex items-center gap-2 rounded-xl border border-gold/30 bg-cream px-3 py-2 text-sm">
                <input type="radio" name="pay" checked={form.payment === p} onChange={() => update("payment", p)} />
                {p}
              </label>
            ))}
          </div>
        </fieldset>
        <Button type="submit" variant="solid" size="lg" className="w-full">
          تأكيد الطلب عبر واتساب
        </Button>
      </form>

      <aside className="h-fit rounded-[24px] border border-gold/30 bg-cream p-5">
        <h2 className="font-display text-2xl">ملخص الطلب</h2>
        <ul className="mt-4 space-y-2 text-sm">
          {lines.map(({ product, qty }) => (
            <li key={product.id} className="flex justify-between gap-2">
              <span>
                {product.nameAr} × {qty}
              </span>
              <span className="tabular-nums">{formatEgp(product.price * qty)}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 flex justify-between text-sm">
          <span>الشحن</span>
          <span>{shipping === 0 ? "مجاني" : formatEgp(shipping)}</span>
        </p>
        <p className="mt-2 flex justify-between font-semibold text-forest">
          <span>الإجمالي</span>
          <span className="tabular-nums">{formatEgp(total)}</span>
        </p>
      </aside>
    </div>
  );
}
