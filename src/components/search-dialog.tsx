import { Link, useNavigate } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { BrandPicture } from "@/components/picture";
import { Input } from "@/components/ui/input";
import { useCart } from "@/lib/cart";
import { searchProducts } from "@/lib/catalog";
import { formatEgp } from "@/lib/utils";

export function SearchDialog() {
  const open = useCart((s) => s.searchOpen);
  const setSearch = useCart((s) => s.setSearch);
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const results = useMemo(() => (q.trim() ? searchProducts(q).slice(0, 6) : []), [q]);

  useEffect(() => {
    if (!open) setQ("");
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button type="button" className="absolute inset-0 bg-ink/40" aria-label="إغلاق البحث" onClick={() => setSearch(false)} />
      <div className="relative mx-auto mt-16 w-[min(92vw,36rem)] rounded-[24px] border border-gold/40 bg-cream p-5 shadow-2xl">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-display text-xl">بحث في أسيل</h2>
          <button type="button" className="grid size-10 place-items-center rounded-full border border-gold/40" onClick={() => setSearch(false)} aria-label="إغلاق">
            <X className="size-5" />
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!q.trim()) return;
            setSearch(false);
            void navigate({ to: "/search", search: { q } });
          }}
        >
          <label className="relative block">
            <Search className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted" />
            <Input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="ابحث عن عطر أو إكسسوار..." className="pr-10" />
          </label>
        </form>
        <ul className="mt-4 space-y-2">
          {results.map((p) => (
            <li key={p.id}>
              <Link
                to="/product/$id"
                params={{ id: p.id }}
                onClick={() => setSearch(false)}
                className="flex items-center gap-3 rounded-2xl p-2 hover:bg-cream-deep"
              >
                <BrandPicture src={p.image} alt={p.nameAr} watermark className="size-14 rounded-xl" />
                <span className="flex-1">
                  <span className="block text-forest">{p.nameAr}</span>
                  <span className="text-sm text-muted">{formatEgp(p.price)}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
