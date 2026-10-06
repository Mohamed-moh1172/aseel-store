import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as RotateCcw, n as Truck, o as ShieldCheck } from "../_libs/lucide-react.mjs";
import { f as BrandPicture, m as newArrivals, p as categories, v as BRAND } from "./router-B6Fg_VCg.mjs";
import { n as ProductCard } from "./product-card-Diw491vH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CSHheG7S.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var slides = [
	{
		src: "/brand/offers-hero",
		alt: "عروض أسيل — خصم حتى 30٪ + شحن مجاني",
		offers: true
	},
	{
		src: "/categories/women-banner",
		alt: "عطور نسائية من أسيل",
		slug: "women"
	},
	{
		src: "/categories/men-banner",
		alt: "عطور رجالية من أسيل",
		slug: "men"
	},
	{
		src: "/categories/gold-banner",
		alt: "جولد بليتد من أسيل",
		slug: "gold-plated"
	},
	{
		src: "/categories/stainless-banner",
		alt: "ستانلس ستيل من أسيل",
		slug: "stainless"
	}
];
function Home() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const arrivals = newArrivals();
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 5600);
		return () => window.clearInterval(id);
	}, []);
	const slide = slides[index];
	const slideClass = slide.offers ? "w-full aspect-[16/9]" : "w-full aspect-[21/9]";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative",
			children: [slide.offers ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/offers",
				"aria-label": slide.alt,
				className: "block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
					src: slide.src,
					alt: slide.alt,
					priority: true,
					className: slideClass
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/category/$slug",
				params: { slug: slide.slug },
				"aria-label": slide.alt,
				className: "block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
					src: slide.src,
					alt: slide.alt,
					priority: true,
					className: slideClass
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2",
				children: slides.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": `شريحة ${i + 1}`,
					className: `h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-forest" : "w-2.5 bg-cream/80"}`,
					onClick: () => setIndex(i)
				}, s.src))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "mb-8 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-english tracking-[0.28em] text-gold-deep",
						children: "SHOP BY CATEGORY"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-4xl",
						children: "تسوقي حسب القسم"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-4 md:grid-cols-4",
					children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/category/$slug",
						params: { slug: c.slug },
						className: "group overflow-hidden rounded-[20px] border border-gold/35 bg-ivory",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
							src: c.tile,
							alt: c.nameAr,
							className: "aspect-square",
							imgClassName: "transition-transform duration-500 group-hover:scale-[1.03]"
						})
					}, c.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-5",
					children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/category/$slug",
						params: { slug: c.slug },
						className: "overflow-hidden rounded-[20px] border border-gold/30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
							src: c.banner,
							alt: `${c.nameAr} — ${c.blurb}`,
							className: "aspect-[21/9] w-full"
						})
					}, c.slug))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ivory/70 py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "mb-8 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-english tracking-[0.28em] text-gold-deep",
						children: "NEW IN"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-4xl",
						children: "وصل حديثاً"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: arrivals.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "mb-8 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl",
						children: "ليه أسيل؟"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted",
						children: "شحن موثوق، تغليف فاخر، وخدمة تكمّل أناقتك"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
							icon: Truck,
							title: "شحن مجاني",
							text: `للطلبات فوق ${BRAND.freeShippingMin} ج.م • توصيل خلال ${BRAND.delivery}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
							icon: RotateCcw,
							title: `استرجاع ${BRAND.returnDays} يوم`,
							text: "المنتج بحالته الأصلية — تواصلي واتساب"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
							icon: ShieldCheck,
							title: "الدفع عند الاستلام",
							text: "فودافون كاش، فوري، فيزا وماستركارد"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-5 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/policies/shipping",
						className: "overflow-hidden rounded-[20px] border border-gold/30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
							src: "/brand/shipping",
							alt: "الشحن والتوصيل",
							className: "aspect-[16/9]"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/policies/returns",
						className: "overflow-hidden rounded-[20px] border border-gold/30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
							src: "/brand/returns",
							alt: "سياسة الاسترجاع",
							className: "aspect-[16/9]"
						})
					})]
				})
			]
		})
	] });
}
function Feature({ icon: Icon, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[20px] border border-gold/30 bg-ivory px-5 py-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "mx-auto size-8 text-gold-deep",
				strokeWidth: 1.5
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-display text-2xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: text
			})
		]
	});
}
//#endregion
export { Home as component };
