import { Link } from "@tanstack/react-router";
import { Menu, Phone, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { cartCount, useCart, useHasHydrated } from "@/lib/cart";
import { BRAND } from "@/lib/brand";
import { categories } from "@/lib/catalog";

export function Header() {
  const items = useCart((s) => s.items);
  const setDrawer = useCart((s) => s.setDrawer);
  const setSearch = useCart((s) => s.setSearch);
  const hydrated = useHasHydrated();
  const count = hydrated ? cartCount(items) : 0;
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gold/30 bg-cream/95 backdrop-blur-md">
      <div className="bg-forest text-cream">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-1.5 text-xs md:text-sm">
          <p>شحن مجاني للطلبات فوق {BRAND.freeShippingMin} ج.م • توصيل خلال {BRAND.delivery}</p>
          <a href={`tel:${BRAND.phoneTel}`} className="hidden items-center gap-1 sm:inline-flex" dir="ltr">
            <Phone className="size-3.5" />
            {BRAND.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-gold/40 text-forest lg:hidden"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <Link to="/" className="flex items-center gap-2">
          <img src="/brand/logo.webp" alt="أسيل ASEEL" className="size-12 rounded-full border border-gold/50 object-cover md:size-14" />
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-xl text-forest">أسيل</span>
            <span className="font-english text-xs tracking-[0.28em] text-gold-deep">ASEEL</span>
          </span>
        </Link>

        <nav className="mx-auto hidden items-center gap-1 lg:flex">
          <Link to="/" className="rounded-full px-3 py-2 text-sm text-forest transition-colors hover:bg-cream-deep" activeOptions={{ exact: true }} activeProps={{ className: "bg-cream-deep font-semibold" }}>
            الرئيسية
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="rounded-full px-3 py-2 text-sm text-forest transition-colors hover:bg-cream-deep"
              activeProps={{ className: "bg-cream-deep font-semibold" }}
            >
              {c.nameAr}
            </Link>
          ))}
          <Link to="/offers" className="rounded-full px-3 py-2 text-sm text-forest transition-colors hover:bg-cream-deep" activeProps={{ className: "bg-cream-deep font-semibold" }}>
            العروض
          </Link>
        </nav>

        <div className="ms-auto flex items-center gap-2">
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1 rounded-full border border-gold/50 px-3 py-2 text-xs text-forest md:inline-flex"
            dir="ltr"
          >
            {BRAND.phoneDisplay}
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-gold/40 text-forest"
            aria-label="بحث"
            onClick={() => setSearch(true)}
          >
            <Search className="size-5" />
          </button>
          <button
            type="button"
            className="relative inline-flex size-11 items-center justify-center rounded-full border border-gold/40 text-forest"
            aria-label="السلة"
            onClick={() => setDrawer(true)}
          >
            <ShoppingBag className="size-5" />
            {count > 0 ? (
              <span className="absolute -top-1 -left-1 grid min-w-5 place-items-center rounded-full bg-forest px-1 text-[10px] text-cream tabular-nums">
                {count}
              </span>
            ) : null}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-gold/20 bg-ivory px-4 py-3 lg:hidden">
          <ul className="grid gap-1">
            <li>
              <Link to="/" className="block rounded-xl px-3 py-3 text-forest hover:bg-cream-deep" onClick={() => setOpen(false)}>
                الرئيسية
              </Link>
            </li>
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/category/$slug"
                  params={{ slug: c.slug }}
                  className="block rounded-xl px-3 py-3 text-forest hover:bg-cream-deep"
                  onClick={() => setOpen(false)}
                >
                  {c.nameAr}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/offers" className="block rounded-xl px-3 py-3 text-forest hover:bg-cream-deep" onClick={() => setOpen(false)}>
                العروض
              </Link>
            </li>
            <li>
              <Link to="/about" className="block rounded-xl px-3 py-3 text-forest hover:bg-cream-deep" onClick={() => setOpen(false)}>
                من نحن
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block rounded-xl px-3 py-3 text-forest hover:bg-cream-deep" onClick={() => setOpen(false)}>
                تواصل معنا
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
