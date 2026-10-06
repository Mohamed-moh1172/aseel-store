export const BRAND = {
  nameAr: "أسيل",
  nameEn: "ASEEL",
  tagline: "عطور و اكسسوارات تكمّل أناقتك",
  phoneDisplay: "01014699419",
  phoneTel: "+201014699419",
  whatsapp: "201014699419",
  whatsappUrl: "https://wa.me/201014699419",
  freeShippingMin: 500,
  shippingFee: 55,
  delivery: "2–4 أيام عمل",
  returnDays: 14,
} as const;

export function waLink(text?: string) {
  const base = BRAND.whatsappUrl;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}
