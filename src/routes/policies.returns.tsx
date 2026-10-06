import { createFileRoute } from "@tanstack/react-router";
import { BrandPicture } from "@/components/picture";
import { BRAND } from "@/lib/brand";

export const Route = createFileRoute("/policies/returns")({
  head: () => ({
    meta: [
      { title: "سياسة الاسترجاع | أسيل ASEEL" },
      { name: "description", content: `استرجاع خلال ${BRAND.returnDays} يوماً والمنتج بحالته الأصلية. تواصل واتساب ${BRAND.phoneDisplay}` },
    ],
  }),
  component: ReturnsPage,
});

function ReturnsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <BrandPicture src="/brand/returns" alt="سياسة الاسترجاع — 14 يوم والمنتج بحالته الأصلية" className="rounded-[24px] border border-gold/30" priority />
      <div className="mt-8 space-y-4 leading-relaxed text-muted">
        <h1 className="font-display text-4xl text-forest">سياسة الاسترجاع</h1>
        <p>1 — يمكنك الاسترجاع خلال {BRAND.returnDays} يوماً من الاستلام.</p>
        <p>2 — المنتج بحالته الأصلية، مع التغليف ودون استخدام للعطور المفتوحة.</p>
        <p>
          3 — تواصل واتساب{" "}
          <a href={BRAND.whatsappUrl} className="text-forest" dir="ltr">
            {BRAND.phoneDisplay}
          </a>{" "}
          لبدء طلب الاسترجاع.
        </p>
      </div>
    </div>
  );
}
