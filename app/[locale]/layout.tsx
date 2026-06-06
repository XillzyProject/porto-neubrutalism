import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import { Locale } from "@/lib/dictionary";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ell-ksyfa | Portfolio",
  description:
    "Website portofolio personal M. Naufal Kasyfa Jamal, seorang Full Stack Web Developer yang berfokus pada Laravel, PHP, dan MySQL.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.className} bg-brand-bg text-brand-text antialiased selection:bg-brand-yellow selection:text-brand-text`}
      >
        <Preloader />
        <Navbar locale={locale as Locale} />
        <main className="pt-14 min-h-screen px-6 md:px-12 max-w-6xl mx-auto w-full overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
