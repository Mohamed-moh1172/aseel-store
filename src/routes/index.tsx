import { createFileRoute, Link } from "@tanstack/react-router";
import { RotateCcw, ShieldCheck, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandPicture } from "@/components/picture";
import { ProductCard } from "@/components/product-card";
import { BRAND } from "@/lib/brand";
import { categories, setLiveProducts, type CategorySlug, type Product } from "@/lib/catalog";
import { listProducts } from "@/lib/products";

export const Route = createFileRoute("/")({
  loader: () => listProducts(),
  head: () => ({
    meta: [
      { title: "أسيل ASEEL | عطور واكسسوارات" },
      { name: "description", content: "متجر أسيل الفاخر للعطور النسائية والرجالية وإكسسوارات الجولد بليتد والستانلس ستيل. شحن مجاني فوق 500 جنيه." },
    ],
  }),
  component: Home,
});

const slides: { src: string; alt: string; slug?: CategorySlug; offers?: boolean }[] = [
  { src: "/brand/offers-hero", alt: "عروض أسيل — خصم حتى 30٪ + شحن مجاني", offers: true },
  { src: "/categories/women-banner", alt: "عطور نسائية من أسيل", slug: "women" },
  { src: "/categories/men-banner", alt: "عطور رجالية من أسيل", slug: "men" },
  { src: "/categories/gold-banner", alt: "جولد بليتد من أسيل", slug: "gold-plated" },
  { src: "/categories/stainless-banner", alt: "ستانلس ستيل من أسيل", slug: "stainless" },
];

function Home() {
  const catalog = Route.useLoaderData();
  const [index, setIndex] = useState(0);
  const arrivals = catalog.filter((p: Product) => p.isNew);

  useEffect(() => {
    setLiveProducts(catalog);
  }, [catalog]);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 5600);
    return () => window.clearInterval(id);
  }, []);

  const slide = slides[index]!;
  const slideClass = slide.offers ? "w-full aspect-[16/9]" : "w-full aspect-[21/9]";

  return (
    <div>
      <section className="relative">
        {slide.offers ? (
          <Link to="/offers" aria-label={slide.alt} className="block">
            <BrandPicture src={slide.src} alt={slide.alt} priority className={slideClass} />
          </Link>
        ) : (
          <Link to="/category/$slug" params={{ slug: slide.slug! }} aria-label={slide.alt} className="block">
            <BrandPicture src={slide.src} alt={slide.alt} priority className={slideClass} />
          </Link>
        )}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              aria-label={`شريحة ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-forest" : "w-2.5 bg-cream/80"}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <header className="mb-8 text-center">
          <p className="font-english tracking-[0.28em] text-gold-deep">SHOP BY CATEGORY</p>
          <h2 className="mt-1 font-display text-4xl">تسوق حسب القسم</h2>
        </header>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((c) => (
            <Link key={c.slug} to="/category/$slug" params={{ slug: c.slug }} className="group overflow-hidden rounded-[20px] border border-gold/35 bg-ivory">
              <BrandPicture src={c.tile} alt={c.nameAr} className="aspect-square" imgClassName="transition-transform duration-500 group-hover:scale-[1.03]" />
            </Link>
          ))}
        </div>
        <div className="mt-8 grid gap-5">
          {categories.map((c) => (
            <Link key={c.slug} to="/category/$slug" params={{ slug: c.slug }} className="overflow-hidden rounded-[20px] border border-gold/30">
              <BrandPicture src={c.banner} alt={`${c.nameAr} — ${c.blurb}`} className="aspect-[21/9] w-full" />
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-ivory/70 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <header className="mb-8 text-center">
            <p className="font-english tracking-[0.28em] text-gold-deep">NEW IN</p>
            <h2 className="mt-1 font-display text-4xl">وصل حديثاً</h2>
          </header>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {arrivals.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <header className="mb-8 text-center">
          <h2 className="font-display text-4xl">ليه أسيل؟</h2>
          <p className="mt-2 text-muted">شحن موثوق، تغليف فاخر، وخدمة تكمّل أناقتك</p>
        </header>
        <div className="grid gap-4 md:grid-cols-3">
          <Feature icon={Truck} title="شحن مجاني" text={`للطلبات فوق ${BRAND.freeShippingMin} ج.م • توصيل خلال ${BRAND.delivery}`} />
          <Feature icon={RotateCcw} title={`استرجاع ${BRAND.returnDays} يوم`} text="المنتج بحالته الأصلية — تواصل واتساب" />
          <Feature icon={ShieldCheck} title="الدفع عند الاستلام" text="فودافون كاش، فوري، فيزا وماستركارد" />
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Link to="/policies/shipping" className="overflow-hidden rounded-[20px] border border-gold/30">
            <BrandPicture src="/brand/shipping" alt="الشحن والتوصيل" className="aspect-[16/9]" />
          </Link>
          <Link to="/policies/returns" className="overflow-hidden rounded-[20px] border border-gold/30">
            <BrandPicture src="/brand/returns" alt="سياسة الاسترجاع" className="aspect-[16/9]" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function Feature({ icon: Icon, title, text }: { icon: typeof Truck; title: string; text: string }) {
  return (
    <div className="rounded-[20px] border border-gold/30 bg-ivory px-5 py-6 text-center">
      <Icon className="mx-auto size-8 text-gold-deep" strokeWidth={1.5} />
      <h3 className="mt-3 font-display text-2xl">{title}</h3>
      <p className="mt-2 text-sm text-muted">{text}</p>
    </div>
  );
}
