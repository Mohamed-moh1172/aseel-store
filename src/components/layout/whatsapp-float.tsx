import { BRAND } from "@/lib/brand";

export function WhatsappFloat() {
  return (
    <a
      href={BRAND.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="تواصل معنا على واتساب"
      className="fixed bottom-5 left-5 z-50 size-16 overflow-hidden rounded-full shadow-[0_12px_28px_-8px_rgb(37_211_102_/_0.55)] transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold md:bottom-7 md:left-7 md:size-[4.5rem]"
    >
      <img src="/ui/whatsapp.webp" alt="" className="size-full object-cover" />
    </a>
  );
}
