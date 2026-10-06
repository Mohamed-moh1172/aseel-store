import { createFileRoute, notFound } from "@tanstack/react-router";
import { BrandPicture } from "@/components/picture";
import { EmptyCategory, ProductCard } from "@/components/product-card";
import { getCategory, setLiveProducts, type CategorySlug } from "@/lib/catalog";
import { listProducts } from "@/lib/products";

export const Route = createFileRoute("/category/$slug")({
  loader: async ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    const catalog = await listProducts();
    setLiveProducts(catalog);
    return { category, items: catalog.filter((p) => p.category === (params.slug as CategorySlug)) };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.category.nameAr ?? "قسم"} | أسيل ASEEL` },
      { name: "description", content: loaderData?.category.blurb ?? "تسوق من أسيل" },
    ],
  }),
  component: CategoryPage,
});

function CategoryPage() {
  const { category, items } = Route.useLoaderData();

  return (
    <div>
      <BrandPicture src={category.banner} alt={`${category.nameAr} — ${category.cta}`} priority className="aspect-[21/9] w-full" />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="font-english tracking-[0.22em] text-gold-deep">{category.nameEn}</p>
        <h1 className="font-display text-4xl">{category.nameAr}</h1>
        <p className="mt-2 text-muted">{category.blurb}</p>
        {items.length === 0 ? (
          <div className="mt-10">
            <EmptyCategory />
          </div>
        ) : (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
