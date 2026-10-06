import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ShoppingBag } from "../_libs/lucide-react.mjs";
import { b as formatEgp, d as Button, f as BrandPicture, u as useCart } from "./router-B6Fg_VCg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-Diw491vH.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product }) {
	const add = useCart((s) => s.add);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex flex-col overflow-hidden rounded-[20px] border border-gold/35 bg-ivory shadow-[0_18px_40px_-28px_rgb(42_36_24_/_0.45)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/product/$id",
			params: { id: product.id },
			className: "relative block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
				src: product.image,
				alt: product.nameAr,
				watermark: true,
				className: "aspect-square",
				imgClassName: "transition-transform duration-500 group-hover:scale-[1.03]"
			}), product.badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-3 right-3 rounded-full bg-forest px-3 py-1 text-xs text-cream",
				children: product.badge
			}) : product.isNew ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-3 right-3 rounded-full bg-gold px-3 py-1 text-xs text-forest-deep",
				children: "وصل حديثاً"
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-2 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-english text-[11px] tracking-[0.18em] text-gold-deep uppercase",
					children: product.nameEn
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/product/$id",
					params: { id: product.id },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg leading-snug text-forest",
						children: product.nameAr
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: product.blurb
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex items-center justify-between gap-3 pt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "tabular-nums",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-base font-semibold text-forest",
							children: formatEgp(product.price)
						}), product.compareAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mr-2 text-sm text-muted line-through",
							children: formatEgp(product.compareAt)
						}) : null]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "solid",
						className: "rounded-full",
						onClick: () => add(product.id),
						"aria-label": `أضيفي ${product.nameAr} للسلة`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-4" }), "أضيفي"]
					})]
				})
			]
		})]
	});
}
function EmptyCategory() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-3xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
			src: "/brand/empty",
			alt: "لا توجد منتجات حالياً — تابعنا لمعرفة كل جديد",
			className: "rounded-[20px] border border-gold/30"
		})
	});
}
//#endregion
export { ProductCard as n, EmptyCategory as t };
