import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { z } from "zod";
import { EmptyCategory, ProductCard } from "@/components/product-card";
import { searchProducts, setLiveProducts } from "@/lib/catalog";
import { listProducts } from "@/lib/products";

const searchSchema = z.object({
  q: z.string().optional(),
});

export const Route = createFileRoute("/search")({
  validateSearch: searchSchema,
  loader: () => listProducts(),
  head: () => ({
    meta: [
      { title: "بحث | أسيل ASEEL" },
      { name: "description", content: "ابحث في عطور وإكسسوارات أسيل" },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const catalog = Route.useLoaderData();
  const { q = "" } = Route.useSearch();
  useEffect(() => {
    setLiveProducts(catalog);
  }, [catalog]);
  const items = searchProducts(q);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-display text-4xl">نتائج البحث</h1>
      <p className="mt-2 text-muted">{q ? `عن «${q}» — ${items.length} منتج` : "اكتب كلمة البحث من الأيقونة أعلى الصفحة"}</p>
      {items.length === 0 ? (
        <div className="mt-8">
          <EmptyCategory />
        </div>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
