import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as BrandPicture, v as BRAND } from "./router-B6Fg_VCg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/policies.returns-BYKrcaqB.js
var import_jsx_runtime = require_jsx_runtime();
function ReturnsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-4 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
			src: "/brand/returns",
			alt: "سياسة الاسترجاع — 14 يوم والمنتج بحالته الأصلية",
			className: "rounded-[24px] border border-gold/30",
			priority: true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 space-y-4 leading-relaxed text-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl text-forest",
					children: "سياسة الاسترجاع"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"1 — يمكنكِ الاسترجاع خلال ",
					BRAND.returnDays,
					" يوماً من الاستلام."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "2 — المنتج بحالته الأصلية، مع التغليف ودون استخدام للعطور المفتوحة." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"3 — تواصلي واتساب",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: BRAND.whatsappUrl,
						className: "text-forest",
						dir: "ltr",
						children: BRAND.phoneDisplay
					}),
					" ",
					"لبدء طلب الاسترجاع."
				] })
			]
		})]
	});
}
//#endregion
export { ReturnsPage as component };
