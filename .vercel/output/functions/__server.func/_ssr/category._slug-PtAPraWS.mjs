import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as BrandPicture, r as Route$3 } from "./router-B6Fg_VCg.mjs";
import { n as ProductCard, t as EmptyCategory } from "./product-card-Diw491vH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category._slug-PtAPraWS.js
var import_jsx_runtime = require_jsx_runtime();
function CategoryPage() {
	const { category, items } = Route$3.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
		src: category.banner,
		alt: `${category.nameAr} — ${category.cta}`,
		priority: true,
		className: "aspect-[21/9] w-full"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-english tracking-[0.22em] text-gold-deep",
				children: category.nameEn
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: category.nameAr
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: category.blurb
			}),
			items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyCategory, {})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
			})
		]
	})] });
}
//#endregion
export { CategoryPage as component };
