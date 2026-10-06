import { createFileRoute, Link } from "@tanstack/react-router";
import { BrandPicture } from "@/components/picture";
import { products } from "@/lib/catalog";

export const Route = createFileRoute("/follow")({
  head: () => ({
    meta: [
      { title: "تابعنا | أسيل ASEEL" },
      { name: "description", content: "تابعوا أسيل لأحدث العطور والإكسسوارات والعروض." },
    ],
  }),
  component: FollowPage,
});

function FollowPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-center font-display text-4xl">تابعنا</h1>
      <p className="mt-2 text-center text-muted">قوالب أسيل للمنتجات والعروض — احفظيها وشاركينا ذوقك</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {products.slice(0, 4).map((p) => (
          <Link key={p.id} to="/product/$id" params={{ id: p.id }} className="overflow-hidden rounded-[20px] border border-gold/30">
            <BrandPicture src={p.image} alt={p.nameAr} watermark className="aspect-square" />
          </Link>
        ))}
      </div>
      <div className="mx-auto mt-6 grid max-w-3xl gap-4 sm:grid-cols-2">
        <BrandPicture src="/brand/story-today" alt="ستوري عرض اليوم" className="rounded-[20px] border border-gold/30" />
        <BrandPicture src="/brand/story-shipping" alt="ستوري الشحن المجاني" className="rounded-[20px] border border-gold/30" />
      </div>
      <BrandPicture src="/products/grid" alt="منتجات أسيل" className="mt-6 rounded-[20px] border border-gold/30" />
    </div>
  );
}
