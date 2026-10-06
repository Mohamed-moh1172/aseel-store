import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { BrandPicture } from "@/components/picture";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/brand";
import { useCart } from "@/lib/cart";
import { getCategory, setLiveProducts } from "@/lib/catalog";
import { listProducts } from "@/lib/products";
import { formatEgp } from "@/lib/utils";

export const Route = createFileRoute("/product/$id")({
  loader: async ({ params }) => {
    const catalog = await listProducts();
    setLiveProducts(catalog);
    const product = catalog.find((p) => p.id === params.id);
    if (!product) throw notFound();
    const related = catalog.filter((p) => p.category === product.category && p.id !== product.id);
    return { product, related, category: getCategory(product.category) };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.nameAr ?? "منتج"} | أسيل ASEEL` },
      { name: "description", content: loaderData?.product.description ?? "" },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  const { product, related, category } = Route.useLoaderData();
  const add = useCart((s) => s.add);
  const [active, setActive] = useState(product.image);
  const [qty, setQty] = useState(1);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="mb-4 text-sm text-muted">
        <Link to="/" className="hover:text-forest">
          الرئيسية
        </Link>
        {category ? (
          <>
            {" / "}
            <Link to="/category/$slug" params={{ slug: category.slug }} className="hover:text-forest">
              {category.nameAr}
            </Link>
          </>
        ) : null}
        {" / "}
        {product.nameAr}
      </p>

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <BrandPicture src={active} alt={product.nameAr} watermark priority className="aspect-square rounded-[24px] border border-gold/30" />
          <div className="mt-3 grid grid-cols-4 gap-2">
            {product.gallery.map((src) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(src)}
                className={`overflow-hidden rounded-xl border ${active === src ? "border-gold" : "border-gold/25"}`}
              >
                <BrandPicture src={src} alt={`${product.nameAr} — صورة إضافية`} watermark className="aspect-square" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="font-english tracking-[0.22em] text-gold-deep">{product.nameEn}</p>
          <h1 className="mt-1 font-display text-4xl">{product.nameAr}</h1>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-2xl font-semibold text-forest tabular-nums">{formatEgp(product.price)}</span>
            {product.compareAt ? <span className="text-muted line-through tabular-nums">{formatEgp(product.compareAt)}</span> : null}
          </div>
          <p className="mt-5 leading-relaxed text-muted">{product.description}</p>
          <ul className="mt-5 space-y-1 text-sm text-forest">
            {product.details.map((d) => (
              <li key={d}>• {d}</li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex items-center rounded-full border border-gold/50">
              <button type="button" className="size-11" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="إنقاص">
                −
              </button>
              <span className="w-8 text-center tabular-nums">{qty}</span>
              <button type="button" className="size-11" onClick={() => setQty((q) => q + 1)} aria-label="زيادة">
                +
              </button>
            </div>
            <Button variant="solid" size="lg" onClick={() => add(product.id, qty)}>
              أضف للسلة
            </Button>
            <Button size="lg" asChild>
              <a href={waLink(`أريد طلب: ${product.nameAr} × ${qty}`)} target="_blank" rel="noreferrer">
                اطلب عبر واتساب
              </a>
            </Button>
          </div>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="mb-6 font-display text-3xl">قد يعجبك أيضاً</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
