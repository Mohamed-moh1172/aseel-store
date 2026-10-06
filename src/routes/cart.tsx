import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { BrandPicture } from "@/components/picture";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";
import { cartTotals, resolveLines, useCart } from "@/lib/cart";
import { formatEgp } from "@/lib/utils";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "السلة | أسيل ASEEL" }] }),
  component: CartPage,
});

function CartPage() {
  const items = useCart((s) => s.items);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const lines = resolveLines(items);
  const { subtotal, shipping, total } = cartTotals(items);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="font-display text-4xl">سلة التسوق</h1>
      {lines.length === 0 ? (
        <div className="mt-8 rounded-[24px] border border-gold/30 bg-ivory p-10 text-center">
          <p className="text-muted">سلتك فارغة</p>
          <Button className="mt-4" asChild>
            <Link to="/">تسوّق الآن</Link>
          </Button>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_20rem]">
          <ul className="space-y-4">
            {lines.map(({ product, qty }) => (
              <li key={product.id} className="flex gap-4 rounded-[20px] border border-gold/30 bg-ivory p-4">
                <BrandPicture src={product.image} alt={product.nameAr} watermark className="size-24 rounded-2xl" />
                <div className="flex-1">
                  <Link to="/product/$id" params={{ id: product.id }} className="font-display text-xl text-forest">
                    {product.nameAr}
                  </Link>
                  <p className="tabular-nums text-muted">{formatEgp(product.price)}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <button type="button" className="grid size-9 place-items-center rounded-full border border-gold/40" onClick={() => setQty(product.id, qty - 1)}>
                      <Minus className="size-4" />
                    </button>
                    <span className="w-6 text-center tabular-nums">{qty}</span>
                    <button type="button" className="grid size-9 place-items-center rounded-full border border-gold/40" onClick={() => setQty(product.id, qty + 1)}>
                      <Plus className="size-4" />
                    </button>
                    <button type="button" className="mr-auto text-muted" onClick={() => remove(product.id)}>
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <aside className="h-fit rounded-[20px] border border-gold/30 bg-ivory p-5">
            <p className="flex justify-between text-sm">
              <span>المجموع</span>
              <span className="tabular-nums">{formatEgp(subtotal)}</span>
            </p>
            <p className="mt-2 flex justify-between text-sm">
              <span>الشحن</span>
              <span>{shipping === 0 ? "مجاني" : formatEgp(shipping)}</span>
            </p>
            {subtotal < BRAND.freeShippingMin ? (
              <p className="mt-2 text-xs text-forest">تبقّى {formatEgp(BRAND.freeShippingMin - subtotal)} للشحن المجاني</p>
            ) : null}
            <p className="mt-4 flex justify-between text-lg font-semibold text-forest">
              <span>الإجمالي</span>
              <span className="tabular-nums">{formatEgp(total)}</span>
            </p>
            <Button variant="solid" className="mt-5 w-full" asChild>
              <Link to="/checkout">إتمام الطلب</Link>
            </Button>
          </aside>
        </div>
      )}
    </div>
  );
}
