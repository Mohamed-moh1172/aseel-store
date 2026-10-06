import { Link } from "@tanstack/react-router";
import { BRAND } from "@/lib/brand";
import { categories } from "@/lib/catalog";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-gold/30 bg-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src="/brand/logo.webp" alt="أسيل ASEEL" className="size-20 rounded-full border border-gold/50 object-cover" />
          <h2 className="mt-3 font-display text-2xl text-forest">أسيل</h2>
          <p className="font-english tracking-[0.22em] text-gold-deep">ASEEL</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{BRAND.tagline}</p>
        </div>

        <div>
          <h3 className="mb-3 font-display text-lg">الأقسام</h3>
          <ul className="space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to="/category/$slug" params={{ slug: c.slug }} className="text-muted hover:text-forest">
                  {c.nameAr}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/offers" className="text-muted hover:text-forest">
                العروض
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-display text-lg">روابط مهمة</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="text-muted hover:text-forest">
                من نحن
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-muted hover:text-forest">
                تواصل معنا
              </Link>
            </li>
            <li>
              <Link to="/policies/shipping" className="text-muted hover:text-forest">
                الشحن والتوصيل
              </Link>
            </li>
            <li>
              <Link to="/policies/returns" className="text-muted hover:text-forest">
                سياسة الاسترجاع
              </Link>
            </li>
            <li>
              <Link to="/follow" className="text-muted hover:text-forest">
                تابعنا
              </Link>
            </li>
            <li>
              <Link to="/admin" className="text-muted hover:text-forest">
                لوحة التحكم
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-display text-lg">تواصل</h3>
          <a href={BRAND.whatsappUrl} className="block text-lg text-forest" dir="ltr">
            {BRAND.phoneDisplay}
          </a>
          <p className="mt-1 text-sm text-muted">واتساب — نحن هنا لخدمتك</p>
          <p className="mt-4 text-sm text-muted">شحن مجاني فوق {BRAND.freeShippingMin} ج.م</p>
          <p className="text-sm text-muted">توصيل خلال {BRAND.delivery}</p>
        </div>
      </div>

      <div className="border-t border-gold/20 px-4 py-6">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-center text-sm text-muted">وسائل الدفع المتاحة</p>
          <img
            src="/ui/payments.webp"
            alt="فودافون كاش، فوري، فيزا، ماستركارد، الدفع عند الاستلام"
            className="mx-auto h-auto w-full max-w-3xl object-contain"
            loading="lazy"
          />
          <p className="mt-6 text-center text-xs text-muted">© {new Date().getFullYear()} أسيل ASEEL — عطور واكسسوارات</p>
        </div>
      </div>
    </footer>
  );
}
