import type { Metadata } from "next";
import { Outfit, Nunito_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "BELSA — Sportpark De Smeltkroes",
  description:
    "Stichting Beheer en Exploitatie Liesselse Sport Accommodatie — thuis van RKSV Liessel, Livoc, De Eendracht en Tennisclub Liessel in Liessel.",
  // Tied to the same SITE_PASSWORD gate as src/proxy.ts + src/app/robots.ts —
  // remove SITE_PASSWORD at go-live to make the site indexable again.
  robots: process.env.SITE_PASSWORD ? { index: false, follow: false } : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${outfit.variable} ${nunitoSans.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
