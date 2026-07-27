import type { Metadata } from "next";
import { Outfit, Nunito_Sans } from "next/font/google";
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

const title = "BELSA — Sportpark De Smeltkroes";
const description =
  "Stichting Beheer en Exploitatie Liesselse Sport Accommodatie — thuis van RKSV Liessel, Livoc, De Eendracht en Tennisclub Liessel in Liessel.";

export const metadata: Metadata = {
  metadataBase: new URL("https://belsa.vercel.app"),
  title,
  description,
  // Pre-launch: keep noindex on. Remove this line (and see src/app/robots.ts)
  // at go-live to make the site indexable.
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    siteName: "BELSA",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${nunitoSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
