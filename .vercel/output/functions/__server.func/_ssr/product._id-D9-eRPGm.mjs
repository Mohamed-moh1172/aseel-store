import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as formatEgp, d as Button, f as BrandPicture, n as Route, u as useCart, y as waLink } from "./router-B6Fg_VCg.mjs";
import { n as ProductCard } from "./product-card-Diw491vH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._id-D9-eRPGm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { product, related, category } = Route.useLoaderData();
	const add = useCart((s) => s.add);
	const [active, setActive] = (0, import_react.useState)(product.image);
	const [qty, setQty] = (0, import_react.useState)(1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-4 text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:text-forest",
						children: "الرئيسية"
					}),
					category ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [" / ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/category/$slug",
						params: { slug: category.slug },
						className: "hover:text-forest",
						children: category.nameAr
					})] }) : null,
					" / ",
					product.nameAr
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
					src: active,
					alt: product.nameAr,
					watermark: true,
					priority: true,
					className: "aspect-square rounded-[24px] border border-gold/30"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid grid-cols-4 gap-2",
					children: product.gallery.map((src) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActive(src),
						className: `overflow-hidden rounded-xl border ${active === src ? "border-gold" : "border-gold/25"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
							src,
							alt: `${product.nameAr} — صورة إضافية`,
							watermark: true,
							className: "aspect-square"
						})
					}, src))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-english tracking-[0.22em] text-gold-deep",
						children: product.nameEn
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 font-display text-4xl",
						children: product.nameAr
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-baseline gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl font-semibold text-forest tabular-nums",
							children: formatEgp(product.price)
						}), product.compareAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted line-through tabular-nums",
							children: formatEgp(product.compareAt)
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 leading-relaxed text-muted",
						children: product.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-1 text-sm text-forest",
						children: product.details.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["• ", d] }, d))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center rounded-full border border-gold/50",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "size-11",
										onClick: () => setQty((q) => Math.max(1, q - 1)),
										"aria-label": "إنقاص",
										children: "−"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-8 text-center tabular-nums",
										children: qty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "size-11",
										onClick: () => setQty((q) => q + 1),
										"aria-label": "زيادة",
										children: "+"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "solid",
								size: "lg",
								onClick: () => add(product.id, qty),
								children: "أضيفي للسلة"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: waLink(`أريد طلب: ${product.nameAr} × ${qty}`),
									target: "_blank",
									rel: "noreferrer",
									children: "اطلب عبر واتساب"
								})
							})
						]
					})
				] })]
			}),
			related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-6 font-display text-3xl",
					children: "قد يعجبكِ أيضاً"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
				})]
			}) : null
		]
	});
}
//#endregion
export { ProductPage as component };
