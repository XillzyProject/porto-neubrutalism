(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Documents/portfolio-improved/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/portfolio-improved/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/portfolio-improved/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/portfolio-improved/node_modules/lucide-react/dist/esm/icons/house.mjs [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/portfolio-improved/node_modules/lucide-react/dist/esm/icons/user.mjs [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/portfolio-improved/node_modules/lucide-react/dist/esm/icons/briefcase.mjs [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/portfolio-improved/node_modules/lucide-react/dist/esm/icons/folder.mjs [app-client] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/portfolio-improved/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/portfolio-improved/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-client] (ecmascript) <export default as Globe>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Navbar({ locale }) {
    _s();
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    const isClickScrolling = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleIntersection = {
                "Navbar.useEffect.handleIntersection": (entries)=>{
                    if (isClickScrolling.current) return;
                    entries.forEach({
                        "Navbar.useEffect.handleIntersection": (entry)=>{
                            if (entry.isIntersecting) setActiveSection(entry.target.id);
                        }
                    }["Navbar.useEffect.handleIntersection"]);
                }
            }["Navbar.useEffect.handleIntersection"];
            const observer = new IntersectionObserver(handleIntersection, {
                root: null,
                rootMargin: "-20% 0px -50% 0px",
                threshold: 0.1
            });
            const sections = [
                "home",
                "about",
                "experience",
                "projects",
                "contact"
            ];
            sections.forEach({
                "Navbar.useEffect": (id)=>{
                    const element = document.getElementById(id);
                    if (element) observer.observe(element);
                }
            }["Navbar.useEffect"]);
            return ({
                "Navbar.useEffect": ()=>{
                    observer.disconnect();
                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const handleLanguageToggle = ()=>{
        const nextLocale = locale === "id" ? "en" : "id";
        window.location.href = `/${nextLocale}${window.location.hash}`;
    };
    const handleNavLinkClick = (id)=>{
        setActiveSection(id);
        isClickScrolling.current = true;
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(()=>{
            isClickScrolling.current = false;
        }, 1000);
    };
    const menuItems = [
        {
            id: "home",
            name: locale === "id" ? "Beranda" : "Home",
            path: "#home",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
            bg: "bg-brand-yellow"
        },
        {
            id: "about",
            name: locale === "id" ? "Tentang" : "About",
            path: "#about",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
            bg: "bg-[#FBCFE8]"
        },
        {
            id: "experience",
            name: locale === "id" ? "Pengalaman" : "Experience",
            path: "#experience",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
            bg: "bg-[#BFDBFE]"
        },
        {
            id: "projects",
            name: locale === "id" ? "Proyek" : "Projects",
            path: "#projects",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"],
            bg: "bg-[#A7F3D0]"
        },
        {
            id: "contact",
            name: locale === "id" ? "Kontak" : "Contact",
            path: "#contact",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
            bg: "bg-[#DDD6FE]"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed bottom-5 md:top-5 md:bottom-auto inset-x-0 z-50 flex justify-center px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "flex items-center gap-1 bg-white px-2 md:px-3 py-2",
            style: {
                border: '3px solid #0A0A0A',
                boxShadow: '6px 6px 0px #0A0A0A'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#home",
                    onClick: ()=>handleNavLinkClick("home"),
                    className: "font-display text-2xl px-2 text-brand-text hover:text-brand-pink transition-colors tracking-wider",
                    children: [
                        "NK",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-brand-pink",
                            children: "."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/portfolio-improved/components/Navbar.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/portfolio-improved/components/Navbar.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-6 w-[2px] bg-brand-text mx-1 opacity-30"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/portfolio-improved/components/Navbar.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                menuItems.map((item)=>{
                    const isActive = activeSection === item.id;
                    const Icon = item.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: item.path,
                        onClick: ()=>handleNavLinkClick(item.id),
                        className: `relative px-3 md:px-4 py-2 text-sm font-black flex items-center gap-2 transition-all text-brand-text ${isActive ? `${item.bg}` : "hover:bg-brand-yellow/40"}`,
                        style: isActive ? {
                            border: '2px solid #0A0A0A',
                            boxShadow: '2px 2px 0px #0A0A0A'
                        } : {},
                        title: item.name,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/portfolio-improved/components/Navbar.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden lg:block",
                                children: item.name
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/portfolio-improved/components/Navbar.tsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/OneDrive/Documents/portfolio-improved/components/Navbar.tsx",
                        lineNumber: 84,
                        columnNumber: 13
                    }, this);
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-6 w-[2px] bg-brand-text mx-1 opacity-30"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/portfolio-improved/components/Navbar.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleLanguageToggle,
                    className: "flex items-center gap-1.5 px-3 py-2 text-xs font-black text-brand-text nb-btn bg-brand-yellow",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                            className: "w-3.5 h-3.5"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/portfolio-improved/components/Navbar.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: locale.toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/portfolio-improved/components/Navbar.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/portfolio-improved/components/Navbar.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documents/portfolio-improved/components/Navbar.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/portfolio-improved/components/Navbar.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(Navbar, "pWDPIJAuSYPNYRylBs52jISOSXU=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/portfolio-improved/components/Preloader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Preloader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/portfolio-improved/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/portfolio-improved/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/portfolio-improved/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/portfolio-improved/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const words = [
    "Halo",
    "Hello",
    "Bonjour",
    "Ciao",
    "안녕하세요",
    "你好",
    "こんにちは",
    "Привет"
];
const bgColors = [
    "bg-brand-yellow",
    "bg-[#BFDBFE]",
    "bg-[#FBCFE8]",
    "bg-[#A7F3D0]",
    "bg-[#DDD6FE]",
    "bg-brand-yellow",
    "bg-[#BFDBFE]",
    "bg-[#FBCFE8]"
];
const textColors = [
    "text-brand-blue",
    "text-brand-purple",
    "text-brand-pink",
    "text-brand-mint",
    "text-brand-amber",
    "text-brand-blue",
    "text-brand-purple",
    "text-brand-pink"
];
function Preloader() {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Preloader.useEffect": ()=>{
            if (index === words.length - 1) {
                const timeout = setTimeout({
                    "Preloader.useEffect.timeout": ()=>setIsVisible(false)
                }["Preloader.useEffect.timeout"], 500);
                return ({
                    "Preloader.useEffect": ()=>clearTimeout(timeout)
                })["Preloader.useEffect"];
            }
            const interval = setInterval({
                "Preloader.useEffect.interval": ()=>setIndex({
                        "Preloader.useEffect.interval": (prev)=>prev + 1
                    }["Preloader.useEffect.interval"])
            }["Preloader.useEffect.interval"], 200);
            return ({
                "Preloader.useEffect": ()=>clearInterval(interval)
            })["Preloader.useEffect"];
        }
    }["Preloader.useEffect"], [
        index
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Preloader.useEffect": ()=>{
            document.body.style.overflow = isVisible ? "hidden" : "unset";
            return ({
                "Preloader.useEffect": ()=>{
                    document.body.style.overflow = "unset";
                }
            })["Preloader.useEffect"];
        }
    }["Preloader.useEffect"], [
        isVisible
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 1
            },
            exit: {
                y: "-100%",
                transition: {
                    duration: 0.8,
                    ease: [
                        0.76,
                        0,
                        0.24,
                        1
                    ],
                    delay: 0.2
                }
            },
            className: `fixed inset-0 ${bgColors[index]} z-[9999] flex flex-col items-center justify-center transition-colors duration-100`,
            style: {
                borderBottom: '4px solid #0A0A0A'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 opacity-10",
                    style: {
                        backgroundImage: 'linear-gradient(rgba(10,10,10,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,10,0.3) 1px, transparent 1px)',
                        backgroundSize: '32px 32px'
                    }
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/portfolio-improved/components/Preloader.tsx",
                    lineNumber: 38,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-hidden flex items-center justify-center relative z-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            y: 60,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: 1
                        },
                        exit: {
                            y: -60,
                            opacity: 0
                        },
                        transition: {
                            duration: 0.25,
                            ease: "easeOut"
                        },
                        className: "bg-white px-10 py-5 nb-card",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `font-display text-6xl md:text-8xl tracking-wide ${textColors[index]}`,
                            children: [
                                words[index],
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-brand-text",
                                    children: "."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/portfolio-improved/components/Preloader.tsx",
                                    lineNumber: 56,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/portfolio-improved/components/Preloader.tsx",
                            lineNumber: 54,
                            columnNumber: 15
                        }, this)
                    }, index, false, {
                        fileName: "[project]/OneDrive/Documents/portfolio-improved/components/Preloader.tsx",
                        lineNumber: 46,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/portfolio-improved/components/Preloader.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-0 left-0 right-0 h-1.5 bg-brand-text/20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "h-full bg-brand-text",
                        initial: {
                            width: "0%"
                        },
                        animate: {
                            width: `${(index + 1) / words.length * 100}%`
                        },
                        transition: {
                            duration: 0.2
                        }
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/portfolio-improved/components/Preloader.tsx",
                        lineNumber: 63,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/portfolio-improved/components/Preloader.tsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documents/portfolio-improved/components/Preloader.tsx",
            lineNumber: 31,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/portfolio-improved/components/Preloader.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(Preloader, "rlEJzSUrtu8ccaTJkFuch9a+1Ao=");
_c = Preloader;
var _c;
__turbopack_context__.k.register(_c, "Preloader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Documents_portfolio-improved_components_0fiezvy._.js.map