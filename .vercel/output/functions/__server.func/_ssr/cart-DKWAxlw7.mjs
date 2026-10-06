import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Minus, i as Trash2, l as Plus } from "../_libs/lucide-react.mjs";
import { b as formatEgp, d as Button, f as BrandPicture, l as resolveLines, s as cartTotals, u as useCart, v as BRAND } from "./router-B6Fg_VCg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-DKWAxlw7.js
var import_jsx_runtime = require_jsx_runtime();
function CartPage() {
	const items = useCart((s) => s.items);
	const setQty = useCart((s) => s.setQty);
	const remove = useCart((s) => s.remove);
	const lines = resolveLines(items);
	const { subtotal, shipping, total } = cartTotals(items);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl px-4 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "سلة التسوق"
		}), lines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 rounded-[24px] border border-gold/30 bg-ivory p-10 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted",
				children: "سلتك فارغة"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-4",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					children: "تسوّقي الآن"
				})
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-8 lg:grid-cols-[1fr_20rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-4",
				children: lines.map(({ product, qty }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-4 rounded-[20px] border border-gold/30 bg-ivory p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
						src: product.image,
						alt: product.nameAr,
						watermark: true,
						className: "size-24 rounded-2xl"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/product/$id",
								params: { id: product.id },
								className: "font-display text-xl text-forest",
								children: product.nameAr
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "tabular-nums text-muted",
								children: formatEgp(product.price)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "grid size-9 place-items-center rounded-full border border-gold/40",
										onClick: () => setQty(product.id, qty - 1),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-6 text-center tabular-nums",
										children: qty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "grid size-9 place-items-center rounded-full border border-gold/40",
										onClick: () => setQty(product.id, qty + 1),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "mr-auto text-muted",
										onClick: () => remove(product.id),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
									})
								]
							})
						]
					})]
				}, product.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "h-fit rounded-[20px] border border-gold/30 bg-ivory p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "المجموع" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: formatEgp(subtotal)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 flex justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الشحن" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: shipping === 0 ? "مجاني" : formatEgp(shipping) })]
					}),
					subtotal < BRAND.freeShippingMin ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-xs text-forest",
						children: [
							"تبقّى ",
							formatEgp(BRAND.freeShippingMin - subtotal),
							" للشحن المجاني"
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 flex justify-between text-lg font-semibold text-forest",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الإجمالي" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: formatEgp(total)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "solid",
						className: "mt-5 w-full",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/checkout",
							children: "إتمام الطلب"
						})
					})
				]
			})]
		})]
	});
}
//#endregion
export { CartPage as component };
