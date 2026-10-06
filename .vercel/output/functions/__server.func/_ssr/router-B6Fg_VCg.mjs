import { i as __toESM } from "../_runtime.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { C as require_jsx_runtime, S as useRouter, Y as notFound, _ as lazyRouteComponent, b as Link, f as Scripts, g as Outlet, h as createRouter, p as HeadContent, v as createFileRoute, x as useNavigate, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ShoppingBag, d as Minus, f as Menu, i as Trash2, l as Plus, r as TriangleAlert, s as Search, t as X, u as Phone } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-QUvAUxTq.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatEgp(amount) {
	return `${amount.toLocaleString("en-EG")} ج.م`;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/brand-C7JnM_H_.js
var BRAND = {
	nameAr: "أسيل",
	nameEn: "ASEEL",
	tagline: "عطور و اكسسوارات تكمّل أناقتك",
	phoneDisplay: "01014699419",
	phoneTel: "+201014699419",
	whatsapp: "201014699419",
	whatsappUrl: "https://wa.me/201014699419",
	freeShippingMin: 500,
	shippingFee: 55,
	delivery: "2–4 أيام عمل",
	returnDays: 14
};
function waLink(text) {
	const base = BRAND.whatsappUrl;
	if (!text) return base;
	return `${base}?text=${encodeURIComponent(text)}`;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/catalog-D4p-lT5U.js
var categories = [
	{
		slug: "women",
		nameAr: "عطور نسائية",
		nameEn: "Women",
		banner: "/categories/women-banner",
		tile: "/categories/women-tile",
		blurb: "عطور ناعمة • زهرية وفاكهية • تدوم طويلاً",
		cta: "استعرض العطور",
		href: "/category/women"
	},
	{
		slug: "men",
		nameAr: "عطور رجالية",
		nameEn: "Men",
		banner: "/categories/men-banner",
		tile: "/categories/men-tile",
		blurb: "عطور رجالية فاخرة • ثبات يدوم طوال اليوم",
		cta: "استعرض العطور",
		href: "/category/men"
	},
	{
		slug: "gold-plated",
		nameAr: "جولد بليتد",
		nameEn: "Gold Plated",
		banner: "/categories/gold-banner",
		tile: "/categories/gold-tile",
		blurb: "لمعان ذهبي فاخر يدوم معك • تصميمات راقية",
		cta: "استعرض الاكسسوارات",
		href: "/category/gold-plated"
	},
	{
		slug: "stainless",
		nameAr: "ستانلس ستيل",
		nameEn: "Stainless Steel",
		banner: "/categories/stainless-banner",
		tile: "/categories/stainless-tile",
		blurb: "جودة عالية • مقاوم للصدأ • لمعان يدوم",
		cta: "استعرض الاكسسوارات",
		href: "/category/stainless"
	}
];
var products = [
	{
		id: "zahra-gold",
		nameAr: "زجاجة عطر نسائي ذهبية فاخرة",
		nameEn: "Luxury Gold Feminine Bottle",
		category: "women",
		price: 489,
		compareAt: 699,
		image: "/products/women-gold-bottle",
		gallery: [
			"/products/women-gold-bottle",
			"/products/women-tile-shot",
			"/products/women-floral"
		],
		blurb: "عبير يعبر عنكِ بأناقة",
		description: "عطر نسائي فاخر بتركيبة زهرية دافئة تدوم طويلاً. زجاجة ذهبية بتاج زهري تليق بهدية أو بإطلالة مسائية. من أسيل — عبير يعبر عنكِ بأناقة.",
		details: [
			"حجم 100 مل",
			"تركيز أو دو بارفان",
			"ثبات عالٍ",
			"صنع لأسيل"
		],
		isNew: true,
		badge: "عرض"
	},
	{
		id: "ward-soft",
		nameAr: "عطر زهري ناعم",
		nameEn: "Soft Floral Eau de Parfum",
		category: "women",
		price: 429,
		image: "/products/women-floral",
		gallery: ["/products/women-floral", "/products/women-gold-bottle"],
		blurb: "عطور ناعمة • زهرية وفاكهية",
		description: "باقة زهرية خفيفة بلمسة فاكهية ناعمة، مناسبة لليوم كامل. ثبات مريح دون أن يطغى، ولمسة أنثوية هادئة تكمّل أناقتك.",
		details: [
			"حجم 100 مل",
			"نفحات زهرية وفاكهية",
			"ثبات طويل",
			"مناسب للاستخدام اليومي"
		]
	},
	{
		id: "aseel-dark",
		nameAr: "زجاجة عطر رجالي أخضر داكن",
		nameEn: "Dark Green Masculine Bottle",
		category: "men",
		price: 519,
		compareAt: 739,
		image: "/products/men-green-bottle",
		gallery: [
			"/products/men-green-bottle",
			"/products/men-tile-shot",
			"/products/men-amber"
		],
		blurb: "روائح خشبية وعطرية شرقية",
		description: "عطر رجالي فاخر بثبات يدوم طوال اليوم. نفحات خشبية شرقية مع لمسة عطرية عميقة في زجاجة خضراء داكنة وغطاء ذهبي.",
		details: [
			"حجم 100 مل",
			"ثبات طوال اليوم",
			"خشب وعود شرقي",
			"إصدار أسيل"
		],
		isNew: true,
		badge: "عرض"
	},
	{
		id: "oud-amber",
		nameAr: "عطر رجالي خشبي شرقي",
		nameEn: "Woody Oriental for Him",
		category: "men",
		price: 459,
		image: "/products/men-amber",
		gallery: ["/products/men-amber", "/products/men-green-bottle"],
		blurb: "ثبات يدوم طوال اليوم",
		description: "تركيبة شرقية دافئة بقاعدة خشبية وعنبر، مناسبة للمساء والمناسبات. حضور واضح دون مبالغة، بتوقيع أسيل.",
		details: [
			"حجم 100 مل",
			"عود وعنبر",
			"ثبات عالٍ",
			"لهدايا الرجالية"
		]
	},
	{
		id: "star-necklace",
		nameAr: "سلسلة جولد بليتد مع دلاية",
		nameEn: "Gold Plated Pendant Necklace",
		category: "gold-plated",
		price: 349,
		image: "/products/gold-necklace",
		gallery: [
			"/products/gold-necklace",
			"/products/gold-tile-shot",
			"/products/gold-set"
		],
		blurb: "لمعان ذهبي فاخر يدوم معك",
		description: "سلسلة جولد بليتد رقيقة مع دلاية نجمة مرصعة بلؤلؤة. تصميم راقٍ يومي لا يبهت بسهولة، ولمسة ذهبية تكتمل مع إطلالتك.",
		details: [
			"طلاء ذهب",
			"مقاومة للبهتان",
			"طول قابل للتعديل",
			"خالية من النيكل"
		],
		isNew: true
	},
	{
		id: "gold-set",
		nameAr: "طقم جولد بليتد فاخر",
		nameEn: "Gold Plated Jewelry Set",
		category: "gold-plated",
		price: 629,
		compareAt: 899,
		image: "/products/gold-set",
		gallery: [
			"/products/gold-set",
			"/products/gold-necklace",
			"/products/gold-tile-shot"
		],
		blurb: "تصميمات راقية وجودة عالية",
		description: "طقم جولد بليتد يضم عقداً وحلقين وخواتم وانسيالاً ذهبياً. لمعان فاخر يدوم معك، جاهز للهدايا والمناسبات.",
		details: [
			"طقم متعدد القطع",
			"طلاء ذهب",
			"علبة فاخرة",
			"مناسب للإهداء"
		],
		badge: "عرض"
	},
	{
		id: "gold-bangle",
		nameAr: "انسيال ستانلس ستيل ذهبي بسيط",
		nameEn: "Gold Stainless Steel Bangle",
		category: "stainless",
		price: 289,
		image: "/products/gold-bangle",
		gallery: [
			"/products/gold-bangle",
			"/products/stainless-tile-shot",
			"/products/stainless-set"
		],
		blurb: "مقاوم للصدأ • لمعان يدوم",
		description: "انسيال ستانلس ستيل ذهبي بتصميم بسيط وأنيق. لا يصدأ، خفيف على المعصم، ويلمع يوماً بعد يوم.",
		details: [
			"ستانلس ستيل 316L",
			"لون ذهبي",
			"مقاوم للماء والصدأ",
			"مقاس قابل للفتح"
		],
		isNew: true
	},
	{
		id: "stainless-set",
		nameAr: "طقم ستانلس ستيل",
		nameEn: "Stainless Steel Jewelry Set",
		category: "stainless",
		price: 679,
		compareAt: 969,
		image: "/products/stainless-set",
		gallery: [
			"/products/stainless-set",
			"/products/gold-bangle",
			"/products/stainless-tile-shot"
		],
		blurb: "جودة عالية • تصاميم راقية تدوم طويلاً",
		description: "طقم اكسسوارات ستانلس ستيل: سلسلة، حلق، خواتم، انسيال، وساعة. جودة عالية مقاومة للصدأ ولمعان يدوم.",
		details: [
			"ستانلس ستيل",
			"طقم كامل",
			"مقاوم للصدأ",
			"تصاميم عصرية"
		],
		badge: "عرض"
	}
];
function getCategory(slug) {
	return categories.find((c) => c.slug === slug);
}
function getProduct(id) {
	return products.find((p) => p.id === id);
}
function productsByCategory(slug) {
	return products.filter((p) => p.category === slug);
}
function searchProducts(query) {
	const q = query.trim().toLowerCase();
	if (!q) return products;
	return products.filter((p) => [
		p.nameAr,
		p.nameEn,
		p.blurb,
		p.description,
		p.category
	].join(" ").toLowerCase().includes(q));
}
function newArrivals() {
	return products.filter((p) => p.isNew);
}
function offerProducts() {
	return products.filter((p) => p.compareAt && p.compareAt > p.price);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-B6Fg_VCg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "حدث خطأ غير متوقع. جرّبي إعادة تحميل الصفحة.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 bg-cream px-6 text-center text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-forest",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl text-forest",
				children: "حدث خطأ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-muted",
				children: errorMessage(error)
			})
		]
	});
}
function BrandPicture({ src, alt, className, imgClassName, watermark = false, priority = false }) {
	const isRaster = /\.(png|svg)$/i.test(src);
	const base = src.replace(/\.(webp|jpg|jpeg|png|svg)$/i, "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative overflow-hidden bg-cream-deep", className),
		children: [isRaster ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: cn("h-full w-full object-cover", imgClassName),
			loading: priority ? "eager" : "lazy",
			decoding: "async"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("picture", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
			type: "image/webp",
			srcSet: `${base}.webp`
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: `${base}.jpg`,
			alt,
			className: cn("h-full w-full object-cover", imgClassName),
			loading: priority ? "eager" : "lazy",
			decoding: "async",
			fetchPriority: priority ? "high" : "auto"
		})] }), watermark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/brand/logo-mark.png",
			alt: "",
			"aria-hidden": true,
			className: "pointer-events-none absolute bottom-[8%] left-[8%] w-[18%] max-w-24 select-none opacity-[0.15]"
		}) : null]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[transform,background-color,color,box-shadow,border-color] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]", {
	variants: {
		variant: {
			gold: "gold-frame px-6 py-2.5 text-forest hover:bg-cream-deep",
			solid: "bg-forest text-cream hover:bg-forest-deep border border-forest-deep",
			ghost: "text-forest hover:bg-cream-deep",
			outline: "border border-gold/70 text-forest hover:bg-cream-deep bg-transparent"
		},
		size: {
			sm: "h-10 px-4 text-sm rounded-[10px]",
			md: "h-11 px-5 text-sm rounded-[12px]",
			lg: "h-12 px-7 text-base rounded-[14px]",
			icon: "size-11 rounded-full"
		}
	},
	defaultVariants: {
		variant: "gold",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function NotFoundPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-5xl px-4 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
			src: "/brand/not-found",
			alt: "404 — عذراً.. العطر اللي بتدور عليه مش هنا",
			className: "rounded-[24px] border border-gold/30",
			priority: true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 flex justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "gold",
				size: "lg",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					children: "ارجع للرئيسية"
				})
			})
		})]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function totals(items) {
	const subtotal = items.reduce((sum, line) => {
		const product = getProduct(line.id);
		return sum + (product ? product.price * line.qty : 0);
	}, 0);
	const shipping = subtotal >= BRAND.freeShippingMin || subtotal === 0 ? 0 : BRAND.shippingFee;
	return {
		subtotal,
		shipping,
		total: subtotal + shipping
	};
}
var useCart = create()(persist((set, get) => ({
	items: [],
	drawerOpen: false,
	searchOpen: false,
	lastOrder: null,
	add: (id, qty = 1) => {
		const items = [...get().items];
		const existing = items.find((i) => i.id === id);
		if (existing) existing.qty += qty;
		else items.push({
			id,
			qty
		});
		set({
			items,
			drawerOpen: true
		});
	},
	remove: (id) => set({ items: get().items.filter((i) => i.id !== id) }),
	setQty: (id, qty) => {
		if (qty < 1) {
			set({ items: get().items.filter((i) => i.id !== id) });
			return;
		}
		set({ items: get().items.map((i) => i.id === id ? {
			...i,
			qty
		} : i) });
	},
	clear: () => set({ items: [] }),
	setDrawer: (open) => set({ drawerOpen: open }),
	setSearch: (open) => set({ searchOpen: open }),
	placeOrder: (input) => {
		const items = get().items;
		const { subtotal, shipping, total } = totals(items);
		const order = {
			...input,
			id: `ASEEL-${Date.now().toString(36).toUpperCase()}`,
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			items: items.map((line) => {
				const product = getProduct(line.id);
				if (!product) return null;
				return {
					id: product.id,
					nameAr: product.nameAr,
					qty: line.qty,
					price: product.price
				};
			}).filter(Boolean),
			subtotal,
			shipping,
			total
		};
		set({
			lastOrder: order,
			items: [],
			drawerOpen: false
		});
		return order;
	}
}), {
	name: "aseel-store",
	partialize: (state) => ({
		items: state.items,
		lastOrder: state.lastOrder
	})
}));
function useHasHydrated() {
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setHydrated(true), []);
	return hydrated;
}
function cartCount(items) {
	return items.reduce((n, i) => n + i.qty, 0);
}
function cartTotals(items) {
	return totals(items);
}
function resolveLines(items) {
	return items.map((line) => {
		const product = getProduct(line.id);
		return product ? {
			product,
			qty: line.qty
		} : null;
	}).filter(Boolean);
}
function orderWhatsAppText(order) {
	const lines = order.items.map((i) => `• ${i.nameAr} × ${i.qty} = ${i.price * i.qty} ج.م`).join("\n");
	return `طلب جديد من أسيل ASEEL
رقم الطلب: ${order.id}
الاسم: ${order.name}
الهاتف: ${order.phone}
المدينة: ${order.city}
العنوان: ${order.address}
الدفع: ${order.payment}
${order.notes ? `ملاحظات: ${order.notes}\n` : ""}
المنتجات:
${lines}

المجموع: ${order.subtotal} ج.م
الشحن: ${order.shipping === 0 ? "مجاني" : `${order.shipping} ج.م`}
الإجمالي: ${order.total} ج.م`;
}
function CartDrawer() {
	const open = useCart((s) => s.drawerOpen);
	const setDrawer = useCart((s) => s.setDrawer);
	const items = useCart((s) => s.items);
	const setQty = useCart((s) => s.setQty);
	const remove = useCart((s) => s.remove);
	const lines = resolveLines(items);
	const { subtotal, shipping, total } = cartTotals(items);
	const count = cartCount(items);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-ink/40",
			"aria-label": "إغلاق السلة",
			onClick: () => setDrawer(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "absolute inset-y-0 left-0 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-gold/30 px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-2xl",
						children: [
							"السلة (",
							count,
							")"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-10 place-items-center rounded-full border border-gold/40",
						onClick: () => setDrawer(false),
						"aria-label": "إغلاق",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-y-auto px-5 py-4",
					children: lines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-10 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted",
							children: "سلتك فارغة حالياً"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-4",
							onClick: () => setDrawer(false),
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								children: "تسوّقي الآن"
							})
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-4",
						children: lines.map(({ product, qty }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 rounded-2xl border border-gold/25 bg-ivory p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
								src: product.image,
								alt: product.nameAr,
								watermark: true,
								className: "size-20 shrink-0 rounded-xl"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate font-medium text-forest",
										children: product.nameAr
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "tabular-nums text-sm text-muted",
										children: formatEgp(product.price)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "grid size-8 place-items-center rounded-full border border-gold/40",
												onClick: () => setQty(product.id, qty - 1),
												"aria-label": "إنقاص",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3.5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "w-6 text-center tabular-nums",
												children: qty
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "grid size-8 place-items-center rounded-full border border-gold/40",
												onClick: () => setQty(product.id, qty + 1),
												"aria-label": "زيادة",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "mr-auto grid size-8 place-items-center text-muted hover:text-forest",
												onClick: () => remove(product.id),
												"aria-label": "حذف",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
											})
										]
									})
								]
							})]
						}, product.id))
					})
				}),
				lines.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-gold/30 bg-ivory px-5 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex justify-between text-sm text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "المجموع" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: formatEgp(subtotal)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 flex justify-between text-sm text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الشحن" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: shipping === 0 ? "مجاني" : formatEgp(shipping) })]
						}),
						subtotal < BRAND.freeShippingMin ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-forest",
							children: [
								"أضيفي ",
								formatEgp(BRAND.freeShippingMin - subtotal),
								" للشحن المجاني"
							]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 flex justify-between font-semibold text-forest",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "الإجمالي" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: formatEgp(total)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "solid",
							className: "mt-4 w-full",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/checkout",
								onClick: () => setDrawer(false),
								children: "إتمام الطلب"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							className: "mt-2 w-full",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/cart",
								onClick: () => setDrawer(false),
								children: "عرض السلة"
							})
						})
					]
				}) : null
			]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-16 border-t border-gold/30 bg-ivory",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/brand/logo.webp",
							alt: "أسيل ASEEL",
							className: "size-20 rounded-full border border-gold/50 object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-2xl text-forest",
							children: "أسيل"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-english tracking-[0.22em] text-gold-deep",
							children: "ASEEL"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: BRAND.tagline
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-3 font-display text-lg",
					children: "الأقسام"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm",
					children: [categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/category/$slug",
						params: { slug: c.slug },
						className: "text-muted hover:text-forest",
						children: c.nameAr
					}) }, c.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/offers",
						className: "text-muted hover:text-forest",
						children: "العروض"
					}) })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-3 font-display text-lg",
					children: "روابط مهمة"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "text-muted hover:text-forest",
							children: "من نحن"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "text-muted hover:text-forest",
							children: "تواصل معنا"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/policies/shipping",
							className: "text-muted hover:text-forest",
							children: "الشحن والتوصيل"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/policies/returns",
							className: "text-muted hover:text-forest",
							children: "سياسة الاسترجاع"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/follow",
							className: "text-muted hover:text-forest",
							children: "تابعنا"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-3 font-display text-lg",
						children: "تواصل"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: BRAND.whatsappUrl,
						className: "block text-lg text-forest",
						dir: "ltr",
						children: BRAND.phoneDisplay
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "واتساب — نحن هنا لخدمتك"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-muted",
						children: [
							"شحن مجاني فوق ",
							BRAND.freeShippingMin,
							" ج.م"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: ["توصيل خلال ", BRAND.delivery]
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-gold/20 px-4 py-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-center text-sm text-muted",
						children: "وسائل الدفع المتاحة"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/ui/payments.webp",
						alt: "فودافون كاش، فوري، فيزا، ماستركارد، الدفع عند الاستلام",
						className: "mx-auto h-auto w-full max-w-3xl object-contain",
						loading: "lazy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-center text-xs text-muted",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" أسيل ASEEL — عطور واكسسوارات"
						]
					})
				]
			})
		})]
	});
}
function Header() {
	const items = useCart((s) => s.items);
	const setDrawer = useCart((s) => s.setDrawer);
	const setSearch = useCart((s) => s.setSearch);
	const count = useHasHydrated() ? cartCount(items) : 0;
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-gold/30 bg-cream/95 backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-forest text-cream",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-1.5 text-xs md:text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"شحن مجاني للطلبات فوق ",
						BRAND.freeShippingMin,
						" ج.م • توصيل خلال ",
						BRAND.delivery
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${BRAND.phoneTel}`,
						className: "hidden items-center gap-1 sm:inline-flex",
						dir: "ltr",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5" }), BRAND.phoneDisplay]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex size-11 items-center justify-center rounded-full border border-gold/40 text-forest lg:hidden",
						"aria-label": open ? "إغلاق القائمة" : "فتح القائمة",
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/brand/logo.webp",
							alt: "أسيل ASEEL",
							className: "size-12 rounded-full border border-gold/50 object-cover md:size-14"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hidden leading-tight sm:block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-xl text-forest",
								children: "أسيل"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-english text-xs tracking-[0.28em] text-gold-deep",
								children: "ASEEL"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "mx-auto hidden items-center gap-1 lg:flex",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "rounded-full px-3 py-2 text-sm text-forest transition-colors hover:bg-cream-deep",
								activeOptions: { exact: true },
								activeProps: { className: "bg-cream-deep font-semibold" },
								children: "الرئيسية"
							}),
							categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/category/$slug",
								params: { slug: c.slug },
								className: "rounded-full px-3 py-2 text-sm text-forest transition-colors hover:bg-cream-deep",
								activeProps: { className: "bg-cream-deep font-semibold" },
								children: c.nameAr
							}, c.slug)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/offers",
								className: "rounded-full px-3 py-2 text-sm text-forest transition-colors hover:bg-cream-deep",
								activeProps: { className: "bg-cream-deep font-semibold" },
								children: "العروض"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ms-auto flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: BRAND.whatsappUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "hidden items-center gap-1 rounded-full border border-gold/50 px-3 py-2 text-xs text-forest md:inline-flex",
								dir: "ltr",
								children: BRAND.phoneDisplay
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "inline-flex size-11 items-center justify-center rounded-full border border-gold/40 text-forest",
								"aria-label": "بحث",
								onClick: () => setSearch(true),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "relative inline-flex size-11 items-center justify-center rounded-full border border-gold/40 text-forest",
								"aria-label": "السلة",
								onClick: () => setDrawer(true),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-5" }), count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -top-1 -left-1 grid min-w-5 place-items-center rounded-full bg-forest px-1 text-[10px] text-cream tabular-nums",
									children: count
								}) : null]
							})
						]
					})
				]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "border-t border-gold/20 bg-ivory px-4 py-3 lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "grid gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "block rounded-xl px-3 py-3 text-forest hover:bg-cream-deep",
							onClick: () => setOpen(false),
							children: "الرئيسية"
						}) }),
						categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/category/$slug",
							params: { slug: c.slug },
							className: "block rounded-xl px-3 py-3 text-forest hover:bg-cream-deep",
							onClick: () => setOpen(false),
							children: c.nameAr
						}) }, c.slug)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/offers",
							className: "block rounded-xl px-3 py-3 text-forest hover:bg-cream-deep",
							onClick: () => setOpen(false),
							children: "العروض"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "block rounded-xl px-3 py-3 text-forest hover:bg-cream-deep",
							onClick: () => setOpen(false),
							children: "من نحن"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "block rounded-xl px-3 py-3 text-forest hover:bg-cream-deep",
							onClick: () => setOpen(false),
							children: "تواصل معنا"
						}) })
					]
				})
			}) : null
		]
	});
}
function WhatsappFloat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: BRAND.whatsappUrl,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "تواصلي معنا على واتساب",
		className: "fixed bottom-5 left-5 z-50 size-16 overflow-hidden rounded-full shadow-[0_12px_28px_-8px_rgb(37_211_102_/_0.55)] transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold md:bottom-7 md:left-7 md:size-[4.5rem]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/ui/whatsapp.webp",
			alt: "",
			className: "size-full object-cover"
		})
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-[12px] border border-gold/40 bg-ivory px-3 text-sm text-ink placeholder:text-muted/80 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-28 w-full rounded-[12px] border border-gold/40 bg-ivory px-3 py-2 text-sm text-ink placeholder:text-muted/80 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30", className),
		...props
	});
}
function SearchDialog() {
	const open = useCart((s) => s.searchOpen);
	const setSearch = useCart((s) => s.setSearch);
	const [q, setQ] = (0, import_react.useState)("");
	const navigate = useNavigate();
	const results = (0, import_react.useMemo)(() => q.trim() ? searchProducts(q).slice(0, 6) : [], [q]);
	(0, import_react.useEffect)(() => {
		if (!open) setQ("");
	}, [open]);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-ink/40",
			"aria-label": "إغلاق البحث",
			onClick: () => setSearch(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto mt-16 w-[min(92vw,36rem)] rounded-[24px] border border-gold/40 bg-cream p-5 shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: "بحث في أسيل"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-10 place-items-center rounded-full border border-gold/40",
						onClick: () => setSearch(false),
						"aria-label": "إغلاق",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						if (!q.trim()) return;
						setSearch(false);
						navigate({
							to: "/search",
							search: { q }
						});
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "relative block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							autoFocus: true,
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "ابحثي عن عطر أو إكسسوار...",
							className: "pr-10"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: results.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/product/$id",
						params: { id: p.id },
						onClick: () => setSearch(false),
						className: "flex items-center gap-3 rounded-2xl p-2 hover:bg-cream-deep",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandPicture, {
							src: p.image,
							alt: p.nameAr,
							watermark: true,
							className: "size-14 rounded-xl"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-forest",
								children: p.nameAr
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted",
								children: formatEgp(p.price)
							})]
						})]
					}) }, p.id))
				})
			]
		})]
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-svh flex-col bg-cream text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappFloat, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchDialog, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				dir: "rtl",
				position: "top-center",
				richColors: false
			})
		]
	});
}
var styles_default = "/assets/styles-edN2ofVb.css";
var APP_NAME = "أسيل ASEEL";
var Route$13 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "أسيل ASEEL — عطور واكسسوارات تكمّل أناقتك. عطور نسائية ورجالية، جولد بليتد وستانلس ستيل."
			},
			{
				name: "theme-color",
				content: "#2D5F3F"
			},
			{
				name: "keywords",
				content: "أسيل, ASEEL, عطور, اكسسوارات, جولد بليتد, ستانلس ستيل"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cairo:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	notFoundComponent: NotFoundPage,
	component: RootComponent
});
function RootComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "ar",
		dir: "rtl",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-svh bg-cream font-sans text-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$12 = () => import("./routes-CSHheG7S.mjs");
var Route$12 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "أسيل ASEEL | عطور واكسسوارات" }, {
		name: "description",
		content: "متجر أسيل الفاخر للعطور النسائية والرجالية وإكسسوارات الجولد بليتد والستانلس ستيل. شحن مجاني فوق 500 جنيه."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./about-9SN4PxMN.mjs");
var Route$11 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "من نحن | أسيل ASEEL" }, {
		name: "description",
		content: "أسيل — عطور واكسسوارات تكمّل أناقتك. علامة مصرية فاخرة للعطور والإكسسوارات."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./cart-DKWAxlw7.mjs");
var Route$10 = createFileRoute("/cart")({
	head: () => ({ meta: [{ title: "السلة | أسيل ASEEL" }] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./checkout-BZMh1g2s.mjs");
var Route$9 = createFileRoute("/checkout")({
	head: () => ({ meta: [{ title: "إتمام الطلب | أسيل ASEEL" }] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./contact-BCz8Ckvh.mjs");
var Route$8 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "تواصل معنا | أسيل ASEEL" }, {
		name: "description",
		content: `تواصلي مع أسيل عبر واتساب ${BRAND.phoneDisplay}`
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./follow-TEgYNeto.mjs");
var Route$7 = createFileRoute("/follow")({
	head: () => ({ meta: [{ title: "تابعنا | أسيل ASEEL" }, {
		name: "description",
		content: "تابعوا أسيل لأحدث العطور والإكسسوارات والعروض."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./offers-Cz-C6-n1.mjs");
var Route$6 = createFileRoute("/offers")({
	head: () => ({ meta: [{ title: "عروض أسيل | خصم حتى 30٪ وشحن مجاني" }, {
		name: "description",
		content: `خصم حتى 30٪ + شحن مجاني للطلبات فوق ${BRAND.freeShippingMin} ج.م`
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./search-B8T4NPn5.mjs");
var searchSchema = object({ q: string().optional() });
var Route$5 = createFileRoute("/search")({
	validateSearch: searchSchema,
	head: () => ({ meta: [{ title: "بحث | أسيل ASEEL" }, {
		name: "description",
		content: "ابحثي في عطور وإكسسوارات أسيل"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./thank-you-DAO1sAnJ.mjs");
var Route$4 = createFileRoute("/thank-you")({
	head: () => ({ meta: [{ title: "شكراً لطلبك | أسيل ASEEL" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./category._slug-PtAPraWS.mjs");
var Route$3 = createFileRoute("/category/$slug")({
	loader: ({ params }) => {
		const category = getCategory(params.slug);
		if (!category) throw notFound();
		return {
			category,
			items: productsByCategory(params.slug)
		};
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.category.nameAr ?? "قسم"} | أسيل ASEEL` }, {
		name: "description",
		content: loaderData?.category.blurb ?? "تسوقي من أسيل"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./policies.returns-BYKrcaqB.mjs");
var Route$2 = createFileRoute("/policies/returns")({
	head: () => ({ meta: [{ title: "سياسة الاسترجاع | أسيل ASEEL" }, {
		name: "description",
		content: `استرجاع خلال ${BRAND.returnDays} يوماً والمنتج بحالته الأصلية. تواصلي واتساب ${BRAND.phoneDisplay}`
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./policies.shipping-BapnwlcT.mjs");
var Route$1 = createFileRoute("/policies/shipping")({
	head: () => ({ meta: [{ title: "الشحن والتوصيل | أسيل ASEEL" }, {
		name: "description",
		content: `شحن مجاني للطلبات فوق ${BRAND.freeShippingMin}ج وتوصيل خلال ${BRAND.delivery}`
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./product._id-D9-eRPGm.mjs");
var Route = createFileRoute("/product/$id")({
	loader: ({ params }) => {
		const product = getProduct(params.id);
		if (!product) throw notFound();
		return {
			product,
			related: productsByCategory(product.category).filter((p) => p.id !== product.id),
			category: getCategory(product.category)
		};
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.product.nameAr ?? "منتج"} | أسيل ASEEL` }, {
		name: "description",
		content: loaderData?.product.description ?? ""
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$12.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$13
	}),
	AboutRoute: Route$11.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$13
	}),
	CartRoute: Route$10.update({
		id: "/cart",
		path: "/cart",
		getParentRoute: () => Route$13
	}),
	CheckoutRoute: Route$9.update({
		id: "/checkout",
		path: "/checkout",
		getParentRoute: () => Route$13
	}),
	ContactRoute: Route$8.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$13
	}),
	FollowRoute: Route$7.update({
		id: "/follow",
		path: "/follow",
		getParentRoute: () => Route$13
	}),
	OffersRoute: Route$6.update({
		id: "/offers",
		path: "/offers",
		getParentRoute: () => Route$13
	}),
	SearchRoute: Route$5.update({
		id: "/search",
		path: "/search",
		getParentRoute: () => Route$13
	}),
	ThankYouRoute: Route$4.update({
		id: "/thank-you",
		path: "/thank-you",
		getParentRoute: () => Route$13
	}),
	CategorySlugRoute: Route$3.update({
		id: "/category/$slug",
		path: "/category/$slug",
		getParentRoute: () => Route$13
	}),
	PoliciesReturnsRoute: Route$2.update({
		id: "/policies/returns",
		path: "/policies/returns",
		getParentRoute: () => Route$13
	}),
	PoliciesShippingRoute: Route$1.update({
		id: "/policies/shipping",
		path: "/policies/shipping",
		getParentRoute: () => Route$13
	}),
	ProductIdRoute: Route.update({
		id: "/product/$id",
		path: "/product/$id",
		getParentRoute: () => Route$13
	})
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultNotFoundComponent: NotFoundPage,
		defaultPreload: "intent",
		scrollRestoration: true
	});
}
//#endregion
export { searchProducts as _, Input as a, formatEgp as b, orderWhatsAppText as c, Button as d, BrandPicture as f, products as g, offerProducts as h, Route$5 as i, resolveLines as l, newArrivals as m, Route as n, Textarea as o, categories as p, Route$3 as r, cartTotals as s, router_exports as t, useCart as u, BRAND as v, waLink as y };
