import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as BrandPicture, v as BRAND } from "./router-B6Fg_VCg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/policies.shipping-BapnwlcT.js
var import_jsx_runtime = require_jsx_runtime();
function ShippingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-4 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
			src: "/brand/shipping",
			alt: "الشحن والتوصيل — شحن مجاني فوق 500ج خلال 2-4 أيام عمل",
			className: "rounded-[24px] border border-gold/30",
			priority: true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 space-y-4 leading-relaxed text-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl text-forest",
					children: "الشحن والتوصيل"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"شحن مجاني للطلبات فوق ",
					BRAND.freeShippingMin,
					" ج.م. أقل من ذلك رسوم شحن ",
					BRAND.shippingFee,
					" ج.م."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"التوصيل خلال ",
					BRAND.delivery,
					" داخل مصر."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "تغليف فاخر وآمن، مع متابعة الطلب عبر واتساب." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"للاستفسار:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: BRAND.whatsappUrl,
						className: "text-forest",
						dir: "ltr",
						children: BRAND.phoneDisplay
					})
				] })
			]
		})]
	});
}
//#endregion
export { ShippingPage as component };
