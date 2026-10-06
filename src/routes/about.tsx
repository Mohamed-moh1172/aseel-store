import { createFileRoute } from "@tanstack/react-router";
import { BrandPicture } from "@/components/picture";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن | أسيل ASEEL" },
      { name: "description", content: "أسيل — عطور واكسسوارات تكمّل أناقتك. علامة مصرية فاخرة للعطور والإكسسوارات." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <BrandPicture src="/brand/about" alt="أسيل - عطور واكسسوارات تكمّل أناقتك" className="rounded-[24px] border border-gold/30" priority />
      <div className="prose-none mt-8 space-y-4 leading-relaxed text-muted">
        <h1 className="font-display text-4xl text-forest">من نحن</h1>
        <p>
          أسيل علامة مصرية للعطور والإكسسوارات الفاخرة. نختار لك قطعاً تدوم: عطوراً بثبات واضح، وإكسسوارات جولد بليتد وستانلس ستيل بلمعان راقٍ لا يبهت بسرعة.
        </p>
        <p>نؤمن أن الأناقة في التفاصيل الصغيرة — زجاجة تعبّر عنك، وسلسلة تكمل إطلالتك، وتغليف يليق بالهدية.</p>
        <p>طلبك يصل خلال 2–4 أيام عمل، مع شحن مجاني فوق 500 جنيه، واسترجاع خلال 14 يوماً والمنتج بحالته الأصلية.</p>
      </div>
    </div>
  );
}
