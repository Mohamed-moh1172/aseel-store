import { createFileRoute } from "@tanstack/react-router";
import { BrandPicture } from "@/components/picture";
import { BRAND } from "@/lib/brand";

export const Route = createFileRoute("/policies/shipping")({
  head: () => ({
    meta: [
      { title: "الشحن والتوصيل | أسيل ASEEL" },
      { name: "description", content: `شحن مجاني للطلبات فوق ${BRAND.freeShippingMin}ج وتوصيل خلال ${BRAND.delivery}` },
    ],
  }),
  component: ShippingPage,
});

function ShippingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <BrandPicture src="/brand/shipping" alt="الشحن والتوصيل — شحن مجاني فوق 500ج خلال 2-4 أيام عمل" className="rounded-[24px] border border-gold/30" priority />
      <div className="mt-8 space-y-4 leading-relaxed text-muted">
        <h1 className="font-display text-4xl text-forest">الشحن والتوصيل</h1>
        <p>شحن مجاني للطلبات فوق {BRAND.freeShippingMin} ج.م. أقل من ذلك رسوم شحن {BRAND.shippingFee} ج.م.</p>
        <p>التوصيل خلال {BRAND.delivery} داخل مصر.</p>
        <p>تغليف فاخر وآمن، مع متابعة الطلب عبر واتساب.</p>
        <p>
          للاستفسار:{" "}
          <a href={BRAND.whatsappUrl} className="text-forest" dir="ltr">
            {BRAND.phoneDisplay}
          </a>
        </p>
      </div>
    </div>
  );
}
