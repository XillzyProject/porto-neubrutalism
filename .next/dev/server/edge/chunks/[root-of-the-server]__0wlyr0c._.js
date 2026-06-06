(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push(["chunks/[root-of-the-server]__0wlyr0c._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/OneDrive/Documents/portfolio-improved/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/portfolio-improved/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/portfolio-improved/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
;
const locales = [
    "id",
    "en"
];
const defaultLocale = "id";
// Fungsi native untuk mendeteksi bahasa browser tanpa eksternal library
function getLocale(request) {
    const acceptLanguage = request.headers.get("accept-language");
    if (!acceptLanguage) return defaultLocale;
    // Membaca string header browser, contoh: "en-US,en;q=0.9,id;q=0.8"
    const detectedLocale = acceptLanguage.split(",").map((lang)=>lang.split(";")[0].trim().toLowerCase()).find((lang)=>lang.startsWith("id") || lang.startsWith("en"));
    // Jika browser dominan bahasa Inggris, arahkan ke 'en'
    if (detectedLocale?.startsWith("en")) return "en";
    // Default kembali ke bahasa Indonesia
    return defaultLocale;
}
function middleware(request) {
    const pathname = request.nextUrl.pathname;
    // Cek apakah URL sudah memiliki locale (/id atau /en)
    const pathnameIsMissingLocale = locales.every((locale)=>!pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);
    // Jika belum ada locale di URL, lakukan redirect otomatis
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$portfolio$2d$improved$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url));
    }
}
const config = {
    // Amankan folder statis dari incaran middleware
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|projects|images|content|CV-MNaufalKasfyaJamal.pdf).*)"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__0wlyr0c._.js.map