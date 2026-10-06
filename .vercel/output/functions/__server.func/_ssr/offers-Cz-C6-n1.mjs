import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as BrandPicture, h as offerProducts, v as BRAND } from "./router-B6Fg_VCg.mjs";
import { n as ProductCard } from "./product-card-Diw491vH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/offers-Cz-C6-n1.js
var import_jsx_runtime = require_jsx_runtime();
function OffersPage() {
	const items = offerProducts();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
		src: "/brand/offers-hero",
		alt: "عروض أسيل — خصم حتى 30٪ + شحن مجاني",
		priority: true,
		className: "aspect-[16/9] max-h-[420px] w-full"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-center font-display text-4xl",
				children: "عروض أسيل"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-center text-muted",
				children: [
					"خصم حتى 30٪ + شحن مجاني فوق ",
					BRAND.freeShippingMin,
					" ج.م"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
					src: "/brand/story-today",
					alt: "عرض اليوم — تسوق الآن",
					className: "rounded-[24px] border border-gold/30"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
					src: "/brand/story-shipping",
					alt: `شحن مجاني للطلبات فوق ${BRAND.freeShippingMin}ج`,
					className: "rounded-[24px] border border-gold/30"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
			})
		]
	})] });
}
//#endregion
export { OffersPage as component };
