import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { C as require_jsx_runtime, b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as Input, b as formatEgp, d as Button, l as resolveLines, o as Textarea, s as cartTotals, u as useCart } from "./router-B6Fg_VCg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-BZMh1g2s.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var payments = [
	"الدفع عند الاستلام",
	"فودافون كاش",
	"فوري",
	"فيزا",
	"ماستركارد"
];
function CheckoutPage() {
	const items = useCart((s) => s.items);
	const placeOrder = useCart((s) => s.placeOrder);
	const lines = resolveLines(items);
	const { subtotal, shipping, total } = cartTotals(items);
	const navigate = useNavigate();
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		phone: "",
		email: "",
		city: "القاهرة",
		address: "",
		notes: "",
		payment: payments[0]
	});
	function update(key, value) {
		setForm((f) => ({
			...f,
			[key]: value
		}));
	}
	function submit(e) {
		e.preventDefault();
		if (lines.length === 0) {
			toast("السلة فارغة");
			return;
		}
		if (!form.name.trim() || !form.phone.trim() || !form.address.trim()) {
			toast("من فضلك أكملي الاسم والهاتف والعنوان");
			return;
		}
		placeOrder(form);
		navigate({ to: "/thank-you" });
	}
	if (lines.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg px-4 py-16 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "لا يوجد طلب بعد"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "mt-4",
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				children: "العودة للمتجر"
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-5xl gap-8 px-4 py-10 lg:grid-cols-[1fr_20rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "space-y-4 rounded-[24px] border border-gold/30 bg-ivory p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl",
					children: "بيانات التوصيل"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm",
					children: ["الاسم", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "mt-1",
						value: form.name,
						onChange: (e) => update("name", e.target.value),
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm",
					children: ["الهاتف", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "mt-1",
						dir: "ltr",
						value: form.phone,
						onChange: (e) => update("phone", e.target.value),
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm",
					children: ["البريد الإلكتروني (اختياري — لإيصال الطلب)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "mt-1",
						type: "email",
						dir: "ltr",
						value: form.email,
						onChange: (e) => update("email", e.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm",
					children: ["المدينة", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "mt-1",
						value: form.city,
						onChange: (e) => update("city", e.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm",
					children: ["العنوان بالتفصيل", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						className: "mt-1",
						value: form.address,
						onChange: (e) => update("address", e.target.value),
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm",
					children: ["ملاحظات", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						className: "mt-1",
						value: form.notes,
						onChange: (e) => update("notes", e.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "mb-2 text-sm",
					children: "طريقة الدفع"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2",
					children: payments.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 rounded-xl border border-gold/30 bg-cream px-3 py-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "radio",
							name: "pay",
							checked: form.payment === p,
							onChange: () => update("payment", p)
						}), p]
					}, p))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					variant: "solid",
					size: "lg",
					className: "w-full",
					children: "تأكيد الطلب عبر واتساب"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "h-fit rounded-[24px] border border-gold/30 bg-cream p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "ملخص الطلب"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: lines.map(({ product, qty }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							product.nameAr,
							" × ",
							qty
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: formatEgp(product.price * qty)
						})]
					}, product.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 flex justify-between text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الشحن" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: shipping === 0 ? "مجاني" : formatEgp(shipping) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 flex justify-between font-semibold text-forest",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الإجمالي" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums",
						children: formatEgp(total)
					})]
				})
			]
		})]
	});
}
//#endregion
export { CheckoutPage as component };
