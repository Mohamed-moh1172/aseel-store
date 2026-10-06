export type CategorySlug = "women" | "men" | "gold-plated" | "stainless";

export type Product = {
  id: string;
  nameAr: string;
  nameEn: string;
  category: CategorySlug;
  price: number;
  compareAt?: number;
  image: string;
  gallery: string[];
  blurb: string;
  description: string;
  details: string[];
  isNew?: boolean;
  badge?: string;
};

export const categories: {
  slug: CategorySlug;
  nameAr: string;
  nameEn: string;
  banner: string;
  tile: string;
  blurb: string;
  cta: string;
  href: string;
}[] = [
  {
    slug: "women",
    nameAr: "عطور نسائية",
    nameEn: "Women",
    banner: "/categories/women-banner",
    tile: "/categories/women-tile",
    blurb: "عطور ناعمة • زهرية وفاكهية • تدوم طويلاً",
    cta: "استعرض العطور",
    href: "/category/women",
  },
  {
    slug: "men",
    nameAr: "عطور رجالية",
    nameEn: "Men",
    banner: "/categories/men-banner",
    tile: "/categories/men-tile",
    blurb: "عطور رجالية فاخرة • ثبات يدوم طوال اليوم",
    cta: "استعرض العطور",
    href: "/category/men",
  },
  {
    slug: "gold-plated",
    nameAr: "جولد بليتد",
    nameEn: "Gold Plated",
    banner: "/categories/gold-banner",
    tile: "/categories/gold-tile",
    blurb: "لمعان ذهبي فاخر يدوم معك • تصميمات راقية",
    cta: "استعرض الاكسسوارات",
    href: "/category/gold-plated",
  },
  {
    slug: "stainless",
    nameAr: "ستانلس ستيل",
    nameEn: "Stainless Steel",
    banner: "/categories/stainless-banner",
    tile: "/categories/stainless-tile",
    blurb: "جودة عالية • مقاوم للصدأ • لمعان يدوم",
    cta: "استعرض الاكسسوارات",
    href: "/category/stainless",
  },
];

export const seedProducts: Product[] = [
  {
    id: "zahra-gold",
    nameAr: "زجاجة عطر نسائي ذهبية فاخرة",
    nameEn: "Luxury Gold Feminine Bottle",
    category: "women",
    price: 489,
    compareAt: 699,
    image: "/products/women-gold-bottle",
    gallery: ["/products/women-gold-bottle", "/products/women-tile-shot", "/products/women-floral"],
    blurb: "عبير يعبر عنك بأناقة",
    description:
      "عطر نسائي فاخر بتركيبة زهرية دافئة تدوم طويلاً. زجاجة ذهبية بتاج زهري تليق بهدية أو بإطلالة مسائية. من أسيل — عبير يعبر عنك بأناقة.",
    details: ["حجم 100 مل", "تركيز أو دو بارفان", "ثبات عالٍ", "صنع لأسيل"],
    isNew: true,
    badge: "عرض",
  },
  {
    id: "ward-soft",
    nameAr: "عطر زهري ناعم",
    nameEn: "Soft Floral Eau de Parfum",
    category: "women",
    price: 429,
    image: "/products/women-floral",
    gallery: ["/products/women-floral", "/products/women-gold-bottle"],
    blurb: "عطور ناعمة • زهرية وفاكهية",
    description:
      "باقة زهرية خفيفة بلمسة فاكهية ناعمة، مناسبة لليوم كامل. ثبات مريح دون أن يطغى، ولمسة أنثوية هادئة تكمّل أناقتك.",
    details: ["حجم 100 مل", "نفحات زهرية وفاكهية", "ثبات طويل", "مناسب للاستخدام اليومي"],
  },
  {
    id: "aseel-dark",
    nameAr: "زجاجة عطر رجالي أخضر داكن",
    nameEn: "Dark Green Masculine Bottle",
    category: "men",
    price: 519,
    compareAt: 739,
    image: "/products/men-green-bottle",
    gallery: ["/products/men-green-bottle", "/products/men-tile-shot", "/products/men-amber"],
    blurb: "روائح خشبية وعطرية شرقية",
    description:
      "عطر رجالي فاخر بثبات يدوم طوال اليوم. نفحات خشبية شرقية مع لمسة عطرية عميقة في زجاجة خضراء داكنة وغطاء ذهبي.",
    details: ["حجم 100 مل", "ثبات طوال اليوم", "خشب وعود شرقي", "إصدار أسيل"],
    isNew: true,
    badge: "عرض",
  },
  {
    id: "oud-amber",
    nameAr: "عطر رجالي خشبي شرقي",
    nameEn: "Woody Oriental for Him",
    category: "men",
    price: 459,
    image: "/products/men-amber",
    gallery: ["/products/men-amber", "/products/men-green-bottle"],
    blurb: "ثبات يدوم طوال اليوم",
    description:
      "تركيبة شرقية دافئة بقاعدة خشبية وعنبر، مناسبة للمساء والمناسبات. حضور واضح دون مبالغة، بتوقيع أسيل.",
    details: ["حجم 100 مل", "عود وعنبر", "ثبات عالٍ", "لهدايا الرجالية"],
  },
  {
    id: "star-necklace",
    nameAr: "سلسلة جولد بليتد مع دلاية",
    nameEn: "Gold Plated Pendant Necklace",
    category: "gold-plated",
    price: 349,
    image: "/products/gold-necklace",
    gallery: ["/products/gold-necklace", "/products/gold-tile-shot", "/products/gold-set"],
    blurb: "لمعان ذهبي فاخر يدوم معك",
    description:
      "سلسلة جولد بليتد رقيقة مع دلاية نجمة مرصعة بلؤلؤة. تصميم راقٍ يومي لا يبهت بسهولة، ولمسة ذهبية تكتمل مع إطلالتك.",
    details: ["طلاء ذهب", "مقاومة للبهتان", "طول قابل للتعديل", "خالية من النيكل"],
    isNew: true,
  },
  {
    id: "gold-set",
    nameAr: "طقم جولد بليتد فاخر",
    nameEn: "Gold Plated Jewelry Set",
    category: "gold-plated",
    price: 629,
    compareAt: 899,
    image: "/products/gold-set",
    gallery: ["/products/gold-set", "/products/gold-necklace", "/products/gold-tile-shot"],
    blurb: "تصميمات راقية وجودة عالية",
    description:
      "طقم جولد بليتد يضم عقداً وحلقين وخواتم وانسيالاً ذهبياً. لمعان فاخر يدوم معك، جاهز للهدايا والمناسبات.",
    details: ["طقم متعدد القطع", "طلاء ذهب", "علبة فاخرة", "مناسب للإهداء"],
    badge: "عرض",
  },
  {
    id: "gold-bangle",
    nameAr: "انسيال ستانلس ستيل ذهبي بسيط",
    nameEn: "Gold Stainless Steel Bangle",
    category: "stainless",
    price: 289,
    image: "/products/gold-bangle",
    gallery: ["/products/gold-bangle", "/products/stainless-tile-shot", "/products/stainless-set"],
    blurb: "مقاوم للصدأ • لمعان يدوم",
    description:
      "انسيال ستانلس ستيل ذهبي بتصميم بسيط وأنيق. لا يصدأ، خفيف على المعصم، ويلمع يوماً بعد يوم.",
    details: ["ستانلس ستيل 316L", "لون ذهبي", "مقاوم للماء والصدأ", "مقاس قابل للفتح"],
    isNew: true,
  },
  {
    id: "stainless-set",
    nameAr: "طقم ستانلس ستيل",
    nameEn: "Stainless Steel Jewelry Set",
    category: "stainless",
    price: 679,
    compareAt: 969,
    image: "/products/stainless-set",
    gallery: ["/products/stainless-set", "/products/gold-bangle", "/products/stainless-tile-shot"],
    blurb: "جودة عالية • تصاميم راقية تدوم طويلاً",
    description:
      "طقم اكسسوارات ستانلس ستيل: سلسلة، حلق، خواتم، انسيال، وساعة. جودة عالية مقاومة للصدأ ولمعان يدوم.",
    details: ["ستانلس ستيل", "طقم كامل", "مقاوم للصدأ", "تصاميم عصرية"],
    badge: "عرض",
  },
];

let liveProducts: Product[] | null = null;

export function setLiveProducts(items: Product[]) {
  liveProducts = items;
}

export function allProducts() {
  return liveProducts ?? seedProducts;
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getProduct(id: string) {
  return allProducts().find((p) => p.id === id);
}

export function productsByCategory(slug: CategorySlug) {
  return allProducts().filter((p) => p.category === slug);
}

export function searchProducts(query: string) {
  const q = query.trim().toLowerCase();
  const list = allProducts();
  if (!q) return list;
  return list.filter((p) =>
    [p.nameAr, p.nameEn, p.blurb, p.description, p.category].join(" ").toLowerCase().includes(q),
  );
}

export function newArrivals() {
  return allProducts().filter((p) => p.isNew);
}

export function offerProducts() {
  return allProducts().filter((p) => p.compareAt && p.compareAt > p.price);
}
