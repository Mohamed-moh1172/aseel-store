import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as Input, d as Button, f as BrandPicture, o as Textarea, v as BRAND, y as waLink } from "./router-B6Fg_VCg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BCz8Ckvh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [name, setName] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-4 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
			src: "/brand/contact",
			alt: `تواصل معنا — واتساب ${BRAND.phoneDisplay}`,
			className: "rounded-[24px] border border-gold/30",
			priority: true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-8 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl",
					children: "تواصل معنا"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: "نحن هنا لخدمتك"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: BRAND.whatsappUrl,
					className: "mt-4 block text-2xl text-forest",
					dir: "ltr",
					children: BRAND.phoneDisplay
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-4",
					variant: "solid",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: BRAND.whatsappUrl,
						target: "_blank",
						rel: "noreferrer",
						children: "راسلينا واتساب"
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-3 rounded-[20px] border border-gold/30 bg-ivory p-5",
				onSubmit: (e) => {
					e.preventDefault();
					if (!name.trim() || !message.trim()) {
						toast("اكتبي اسمك ورسالتك");
						return;
					}
					window.open(waLink(`رسالة من ${name}: ${message}`), "_blank", "noopener,noreferrer");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm",
						children: ["الاسم", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							className: "mt-1",
							value: name,
							onChange: (e) => setName(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm",
						children: ["الرسالة", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							className: "mt-1",
							value: message,
							onChange: (e) => setMessage(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						variant: "solid",
						className: "w-full",
						children: "إرسال عبر واتساب"
					})
				]
			})]
		})]
	});
}
//#endregion
export { ContactPage as component };
