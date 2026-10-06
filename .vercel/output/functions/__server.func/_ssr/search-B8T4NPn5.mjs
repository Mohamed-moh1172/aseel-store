import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as searchProducts, i as Route$5 } from "./router-B6Fg_VCg.mjs";
import { n as ProductCard, t as EmptyCategory } from "./product-card-Diw491vH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-B8T4NPn5.js
var import_jsx_runtime = require_jsx_runtime();
function SearchPage() {
	const { q = "" } = Route$5.useSearch();
	const items = searchProducts(q);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "نتائج البحث"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: q ? `عن «${q}» — ${items.length} منتج` : "اكتبي كلمة البحث من الأيقونة أعلى الصفحة"
			}),
			items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyCategory, {})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
			})
		]
	});
}
//#endregion
export { SearchPage as component };
