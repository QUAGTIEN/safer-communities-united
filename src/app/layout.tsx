import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageTransition } from "@/components/layout/page-transition";
import { NotAvailableProvider } from "@/components/layout/not-available";
import { a11y, site } from "@/content/site";
import "./globals.css";

// Approved font files (TXT:22, D-015): Inter body, Merriweather headings, both OFL 1.1 via Fontsource.
const inter = localFont({
  src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-inter", weight: "100 900", display: "swap",
});
const merriweather = localFont({
  src: "../../node_modules/@fontsource-variable/merriweather/files/merriweather-latin-standard-normal.woff2",
  variable: "--font-merriweather", weight: "300 900", display: "swap",
});

export const metadata: Metadata = {
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.slogan,
  // A blank favicon avoids requesting an invented logo or a missing /favicon.ico.
  icons: { icon: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%2F%3E" },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <NotAvailableProvider>
          <a href="#main-content" className="skip-link">{a11y.skipLink}</a>
          <SiteHeader />
          <main id="main-content" tabIndex={-1} className="flex-1 outline-none"><PageTransition>{children}</PageTransition></main>
          <SiteFooter />
        </NotAvailableProvider>
      </body>
    </html>
  );
}
