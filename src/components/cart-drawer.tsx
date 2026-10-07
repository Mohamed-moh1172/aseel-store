import { Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { BrandPicture } from "@/components/picture";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";
import { cartCount, cartTotals, resolveLines, useCart } from "@/lib/cart";
import { formatEgp } from "@/lib/utils";

export function CartDrawer() {
  const open = useCart((s) => s.drawerOpen);
  const setDrawer = useCart((s) => s.setDrawer);
  const items = useCart((s) => s.items);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const lines = resolveLines(items);
  const { subtotal, shipping, total } = cartTotals(items);
  const count = cartCount(items);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button type="button" className="absolute inset-0 bg-ink/40" aria-label="إغلاق السلة" onClick={() => setDrawer(false)} />
      <aside className="absolute inset-y-0 left-0 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl">
        <div className="flex items-center justify-between border-b border-gold/30 px-5 py-4">
          <h2 className="font-display text-2xl">السلة ({count})</h2>
          <button type="button" className="grid size-10 place-items-center rounded-full border border-gold/40" onClick={() => setDrawer(false)} aria-label="إغلاق">
            <X className="size-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {lines.length === 0 ? (
            <div className="py-10 text-center">
              <p className="text-muted">سلة التسوق فارغة حالياًاً</p>
              <Button className="mt-4" onClick={() => setDrawer(false)} asChild>
                <Link to="/">تسوّق الآن</Link>
              </Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {lines.map(({ product, qty }) => (
                <li key={product.id} className="flex gap-3 rounded-2xl border border-gold/25 bg-ivory p-3">
                  <BrandPicture src={product.image} alt={product.nameAr} watermark className="size-20 shrink-0 rounded-xl" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium text-forest">{product.nameAr}</p>
                    <p className="tabular-nums text-sm text-muted">{formatEgp(product.price)}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button type="button" className="grid size-8 place-items-center rounded-full border border-gold/40" onClick={() => setQty(product.id, qty - 1)} aria-label="إنقاص">
                        <Minus className="size-3.5" />
                      </button>
                      <span className="w-6 text-center tabular-nums">{qty}</span>
                      <button type="button" className="grid size-8 place-items-center rounded-full border border-gold/40" onClick={() => setQty(product.id, qty + 1)} aria-label="زيادة">
                        <Plus className="size-3.5" />
                      </button>
                      <button type="button" className="mr-auto grid size-8 place-items-center text-muted hover:text-forest" onClick={() => remove(product.id)} aria-label="حذف">
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {lines.length > 0 ? (
          <div className="border-t border-gold/30 bg-ivory px-5 py-4">
            <p className="flex justify-between text-sm text-muted">
              <span>المجموع</span>
              <span className="tabular-nums">{formatEgp(subtotal)}</span>
            </p>
            <p className="mt-1 flex justify-between text-sm text-muted">
              <span>الشحن</span>
              <span>{shipping === 0 ? "مجاني" : formatEgp(shipping)}</span>
            </p>
            {subtotal < BRAND.freeShippingMin ? (
              <p className="mt-2 text-xs text-forest">أضف {formatEgp(BRAND.freeShippingMin - subtotal)} للشحن المجاني</p>
            ) : null}
            <p className="mt-3 flex justify-between font-semibold text-forest">
              <span>الإجمالي</span>
              <span className="tabular-nums">{formatEgp(total)}</span>
            </p>
            <Button variant="solid" className="mt-4 w-full" asChild>
              <Link to="/checkout" onClick={() => setDrawer(false)}>
                إتمام الطلب
              </Link>
            </Button>
            <Button variant="ghost" className="mt-2 w-full" asChild>
              <Link to="/cart" onClick={() => setDrawer(false)}>
                عرض السلة
              </Link>
            </Button>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
