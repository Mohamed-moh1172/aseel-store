import { createFileRoute, Link } from "@tanstack/react-router";
import { BrandPicture } from "@/components/picture";
import { Button } from "@/components/ui/button";
import { BRAND, waLink } from "@/lib/brand";
import { orderWhatsAppText, useCart } from "@/lib/cart";
import { formatEgp } from "@/lib/utils";

export const Route = createFileRoute("/thank-you")({
  head: () => ({ meta: [{ title: "شكراً لطلبك | أسيل ASEEL" }] }),
  component: ThankYouPage,
});

function ThankYouPage() {
  const order = useCart((s) => s.lastOrder);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <BrandPicture src="/brand/thank-you" alt="شكراً لطلبك من أسيل — سيتم التواصل معك عبر واتساب لتأكيد الطلب" className="rounded-[24px] border border-gold/30" priority />

      {order ? (
        <article className="mt-8 overflow-hidden rounded-[24px] border border-gold/30 bg-ivory">
          <BrandPicture src="/brand/email-header" alt="أسيل — عطور و اكسسوارات" className="aspect-[3/1] w-full" />
          <div className="p-6">
            <p className="text-sm text-muted">إيصال الطلب</p>
            <h2 className="font-display text-3xl">طلب {order.id}</h2>
            <p className="mt-2 text-sm text-muted">
              {order.name} — {order.phone}
            </p>
            <ul className="mt-4 space-y-1 text-sm">
              {order.items.map((i) => (
                <li key={i.id} className="flex justify-between">
                  <span>
                    {i.nameAr} × {i.qty}
                  </span>
                  <span className="tabular-nums">{formatEgp(i.price * i.qty)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 flex justify-between font-semibold text-forest">
              <span>الإجمالي</span>
              <span className="tabular-nums">{formatEgp(order.total)}</span>
            </p>
            <p className="mt-4 text-sm text-muted">سيتم التواصل معك عبر واتساب {BRAND.phoneDisplay} لتأكيد الطلب.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="solid" asChild>
                <a href={waLink(orderWhatsAppText(order))} target="_blank" rel="noreferrer">
                  فتح واتساب
                </a>
              </Button>
              {order.email ? (
                <Button asChild>
                  <a
                    href={`mailto:${order.email}?subject=${encodeURIComponent(`تأكيد طلب أسيل ${order.id}`)}&body=${encodeURIComponent(`شكراً لطلبك من أسيل. رقم الطلب ${order.id}. الإجمالي ${order.total} ج.م.`)}`}
                  >
                    إرسال الإيصال للبريد
                  </a>
                </Button>
              ) : null}
            </div>
          </div>
        </article>
      ) : (
        <p className="mt-6 text-center text-muted">لا يوجد طلب حديث. لو تم تأكيد طلبك هيظهر هنا.</p>
      )}

      <div className="mt-8 flex justify-center">
        <Button asChild>
          <Link to="/">العودة للمتجر</Link>
        </Button>
      </div>
    </div>
  );
}
