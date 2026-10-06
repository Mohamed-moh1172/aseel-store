import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { BrandPicture } from "@/components/picture";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/catalog";
import { formatEgp } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const add = useCart((s) => s.add);

  return (
    <article className="group flex flex-col overflow-hidden rounded-[20px] border border-gold/35 bg-ivory shadow-[0_18px_40px_-28px_rgb(42_36_24_/_0.45)]">
      <Link to="/product/$id" params={{ id: product.id }} className="relative block">
        <BrandPicture
          src={product.image}
          alt={product.nameAr}
          watermark
          className="aspect-square"
          imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {product.badge ? (
          <span className="absolute top-3 right-3 rounded-full bg-forest px-3 py-1 text-xs text-cream">
            {product.badge}
          </span>
        ) : product.isNew ? (
          <span className="absolute top-3 right-3 rounded-full bg-gold px-3 py-1 text-xs text-forest-deep">
            وصل حديثاً
          </span>
        ) : null}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="font-english text-[11px] tracking-[0.18em] text-gold-deep uppercase">{product.nameEn}</p>
        <Link to="/product/$id" params={{ id: product.id }}>
          <h3 className="font-display text-lg leading-snug text-forest">{product.nameAr}</h3>
        </Link>
        <p className="text-sm text-muted">{product.blurb}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-3">
          <p className="tabular-nums">
            <span className="text-base font-semibold text-forest">{formatEgp(product.price)}</span>
            {product.compareAt ? (
              <span className="mr-2 text-sm text-muted line-through">{formatEgp(product.compareAt)}</span>
            ) : null}
          </p>
          <Button
            size="sm"
            variant="solid"
            className="rounded-full"
            onClick={() => add(product.id)}
            aria-label={`أضف ${product.nameAr} للسلة`}
          >
            <ShoppingBag className="size-4" />
            أضف
          </Button>
        </div>
      </div>
    </article>
  );
}

export function EmptyCategory() {
  return (
    <div className="mx-auto max-w-3xl">
      <BrandPicture src="/brand/empty" alt="لا توجد منتجات حالياً — تابعنا لمعرفة كل جديد" className="rounded-[20px] border border-gold/30" />
    </div>
  );
}
