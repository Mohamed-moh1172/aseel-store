import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as formatEgp, c as orderWhatsAppText, d as Button, f as BrandPicture, u as useCart, v as BRAND, y as waLink } from "./router-B6Fg_VCg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/thank-you-DAO1sAnJ.js
var import_jsx_runtime = require_jsx_runtime();
function ThankYouPage() {
	const order = useCart((s) => s.lastOrder);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
				src: "/brand/thank-you",
				alt: "شكراً لطلبك من أسيل — سيتم التواصل معك عبر واتساب لتأكيد الطلب",
				className: "rounded-[24px] border border-gold/30",
				priority: true
			}),
			order ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mt-8 overflow-hidden rounded-[24px] border border-gold/30 bg-ivory",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
					src: "/brand/email-header",
					alt: "أسيل — عطور و اكسسوارات",
					className: "aspect-[3/1] w-full"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "إيصال الطلب"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-3xl",
							children: ["طلب ", order.id]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted",
							children: [
								order.name,
								" — ",
								order.phone
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-1 text-sm",
							children: order.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									i.nameAr,
									" × ",
									i.qty
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: formatEgp(i.price * i.qty)
								})]
							}, i.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 flex justify-between font-semibold text-forest",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الإجمالي" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: formatEgp(order.total)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-muted",
							children: [
								"سيتم التواصل معك عبر واتساب ",
								BRAND.phoneDisplay,
								" لتأكيد الطلب."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "solid",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: waLink(orderWhatsAppText(order)),
									target: "_blank",
									rel: "noreferrer",
									children: "فتح واتساب"
								})
							}), order.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${order.email}?subject=${encodeURIComponent(`تأكيد طلب أسيل ${order.id}`)}&body=${encodeURIComponent(`شكراً لطلبك من أسيل. رقم الطلب ${order.id}. الإجمالي ${order.total} ج.م.`)}`,
									children: "إرسال الإيصال للبريد"
								})
							}) : null]
						})
					]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-center text-muted",
				children: "لا يوجد طلب حديث. لو تم تأكيد طلبك هيظهر هنا."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: "العودة للمتجر"
					})
				})
			})
		]
	});
}
//#endregion
export { ThankYouPage as component };
