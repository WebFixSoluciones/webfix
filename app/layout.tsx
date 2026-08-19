import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TawkToChat from "@/components/layout/TawkToChat";

export const metadata: Metadata = {
  metadataBase: new URL("https://webfixsoluciones.net"),
  title: {
    default: "Web Fix — Hosting y Dominios | Hosting WordPress Económico en Ecuador",
    template: "%s | Web Fix Soluciones"
  },
  description: "Hosting en Ecuador de óptima calidad, Registro de Dominios Ecuador, Servidores LiteSpeed NVMe, cPanel, SSL Gratis y Soporte 24/7.",
  keywords: [
    "Hosting Ecuador",
    "Hosting WordPress",
    "Dominios Ecuador",
    "Registro de dominios",
    "Hosting Reseller",
    "Correos corporativos",
    "Servidores dedicados",
    "cPanel Ecuador",
    "LiteSpeed",
    "Web Fix"
  ],
  authors: [{ name: "Web Fix Soluciones" }],
  creator: "Web Fix Soluciones",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://webfixsoluciones.net",
    siteName: "Web Fix",
    title: "Web Fix — Hosting y Dominios | Hosting WordPress Económico en Ecuador",
    description: "Hosting en Ecuador de óptima calidad, Registro de Dominios Ecuador, Servidores LiteSpeed NVMe, cPanel, SSL Gratis y Soporte 24/7.",
    images: [
      {
        url: "/assets/hero-hosting.png",
        width: 768,
        height: 560,
        alt: "Web Fix Hosting y Dominios"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Fix — Hosting y Dominios",
    description: "Hosting en Ecuador de óptima calidad, Registro de Dominios y Soporte 24/7.",
    images: ["/assets/hero-hosting.png"]
  },
  icons: {
    icon: "/assets/logo-white.svg",
    apple: "/assets/logo-white.svg"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/assets/logo-white.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#080c14] text-slate-100 antialiased selection:bg-brand-600 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <TawkToChat />
      </body>
    </html>
  );
}
