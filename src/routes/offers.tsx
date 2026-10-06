import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { BrandPicture } from "@/components/picture";
import { ProductCard } from "@/components/product-card";
import { BRAND } from "@/lib/brand";
import { setLiveProducts, type Product } from "@/lib/catalog";
import { listProducts } from "@/lib/products";

export const Route = createFileRoute("/offers")({
  loader: () => listProducts(),
  head: () => ({
    meta: [
      { title: "عروض أسيل | خصم حتى 30٪ وشحن مجاني" },
      { name: "description", content: `خصم حتى 30٪ + شحن مجاني للطلبات فوق ${BRAND.freeShippingMin} ج.م` },
    ],
  }),
  component: OffersPage,
});

function OffersPage() {
  const catalog = Route.useLoaderData();
  useEffect(() => {
    setLiveProducts(catalog);
  }, [catalog]);
  const items = catalog.filter((p: Product) => p.compareAt && p.compareAt > p.price);

  return (
    <div>
      <BrandPicture src="/brand/offers-hero" alt="عروض أسيل — خصم حتى 30٪ + شحن مجاني" priority className="aspect-[16/9] max-h-[420px] w-full" />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-center font-display text-4xl">عروض أسيل</h1>
        <p className="mt-2 text-center text-muted">خصم حتى 30٪ + شحن مجاني فوق {BRAND.freeShippingMin} ج.م</p>
        <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
          <BrandPicture src="/brand/story-today" alt="عرض اليوم — تسوق الآن" className="rounded-[24px] border border-gold/30" />
          <BrandPicture src="/brand/story-shipping" alt={`شحن مجاني للطلبات فوق ${BRAND.freeShippingMin}ج`} className="rounded-[24px] border border-gold/30" />
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
