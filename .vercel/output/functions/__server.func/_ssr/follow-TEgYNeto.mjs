import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as BrandPicture, g as products } from "./router-B6Fg_VCg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/follow-TEgYNeto.js
var import_jsx_runtime = require_jsx_runtime();
function FollowPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-center font-display text-4xl",
				children: "تابعنا"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-center text-muted",
				children: "قوالب أسيل للمنتجات والعروض — احفظيها وشاركينا ذوقك"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2",
				children: products.slice(0, 4).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/product/$id",
					params: { id: p.id },
					className: "overflow-hidden rounded-[20px] border border-gold/30",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
						src: p.image,
						alt: p.nameAr,
						watermark: true,
						className: "aspect-square"
					})
				}, p.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-6 grid max-w-3xl gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
					src: "/brand/story-today",
					alt: "ستوري عرض اليوم",
					className: "rounded-[20px] border border-gold/30"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
					src: "/brand/story-shipping",
					alt: "ستوري الشحن المجاني",
					className: "rounded-[20px] border border-gold/30"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
				src: "/products/grid",
				alt: "منتجات أسيل",
				className: "mt-6 rounded-[20px] border border-gold/30"
			})
		]
	});
}
//#endregion
export { FollowPage as component };
