"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Server, Globe, Mail, Layout, FileText,
  ChevronDown, Menu, X, User, ShieldCheck, Zap, Sparkles,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
    setResourcesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.06] py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-11">
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center">
          <div className="relative w-36 h-8">
            <Image src="/assets/logo-white.svg" alt="WebFix" fill className="object-contain object-left" priority />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {/* Hosting */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-normal text-white/75 hover:text-white transition-colors">
              Hosting web
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
            </button>

            {productsOpen && (
              <div className="absolute top-full left-0 mt-3 w-64 rounded-2xl bg-zinc-950/95 backdrop-blur-2xl border border-white/[0.08] shadow-2xl p-2 animate-in fade-in zoom-in-95 duration-100">
                {[
                  { href: "/hosting-wordpress", icon: <Zap className="w-4 h-4 text-blue-400" />, label: "Hosting WordPress", sub: "LiteSpeed + NVMe" },
                  { href: "/hosting-reseller", icon: <Server className="w-4 h-4 text-purple-400" />, label: "Hosting Reseller", sub: "Marca blanca WHM" },
                  { href: "/servidor-dedicado", icon: <ShieldCheck className="w-4 h-4 text-cyan-400" />, label: "Servidores Dedicados", sub: "AMD EPYC / Intel Xeon" },
                  { href: "/hosting-gratis", icon: <Sparkles className="w-4 h-4 text-emerald-400" />, label: "Hosting Gratis", sub: "Sin costo mensual" },
                  { href: "/hosting-en-ecuador", icon: <Globe className="w-4 h-4 text-amber-400" />, label: "Hosting en Ecuador", sub: "Factura SRI" },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group">
                    <div className="shrink-0">{item.icon}</div>
                    <div>
                      <div className="text-[13px] font-normal text-white group-hover:text-white/90">{item.label}</div>
                      <div className="text-[11px] font-light text-white/40 mt-0.5">{item.sub}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/registro-de-dominios" className="text-sm font-normal text-white/75 hover:text-white transition-colors">
            Dominios
          </Link>

          <Link href="/correos-empresarial" className="text-sm font-normal text-white/75 hover:text-white transition-colors">
            Email
          </Link>

          <Link href="/diseno-de-paginas-web" className="text-sm font-normal text-white/75 hover:text-white transition-colors">
            Diseño Web
          </Link>

          {/* Recursos */}
          <div
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-normal text-white/75 hover:text-white transition-colors">
              Recursos
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`} />
            </button>

            {resourcesOpen && (
              <div className="absolute top-full right-0 mt-3 w-56 rounded-2xl bg-zinc-950/95 backdrop-blur-2xl border border-white/[0.08] shadow-2xl p-2 animate-in fade-in zoom-in-95 duration-100">
                {[
                  { href: "/terminos-y-condiciones", icon: <FileText className="w-3.5 h-3.5" />, label: "Términos y Condiciones" },
                  { href: "/politica-de-uso-aceptable", icon: <ShieldCheck className="w-3.5 h-3.5" />, label: "Política de Uso (PUA)" },
                  { href: "/terminos-y-condiciones/formulario-de-aceptacion", icon: <Sparkles className="w-3.5 h-3.5 text-emerald-400" />, label: "Formulario de Aceptación" },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="flex items-center gap-2.5 p-2 rounded-xl text-[13px] font-normal text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors">
                    <span className="text-white/40">{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://webfixsoluciones.net/cliente/clientarea.php"
            target="_blank" rel="noopener noreferrer"
            className="text-sm font-normal text-white/70 hover:text-white transition-colors"
          >
            Iniciar sesión
          </a>
          <a
            href="https://webfixsoluciones.net/cliente/cart.php"
            target="_blank" rel="noopener noreferrer"
            className="px-4 py-2 rounded-full text-sm font-normal text-black bg-white hover:bg-white/90 transition-colors shadow-sm"
          >
            Contratar
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white/70 hover:text-white"
          aria-label="Menú"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-black/98 border-t border-white/[0.06] overflow-y-auto z-50 px-6 py-8">
          <div className="space-y-6">
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-widest text-white/30 font-normal mb-2">Hosting</p>
              {[
                { href: "/hosting-wordpress", label: "Hosting WordPress" },
                { href: "/hosting-reseller", label: "Hosting Reseller WHM" },
                { href: "/servidor-dedicado", label: "Servidores Dedicados" },
                { href: "/hosting-gratis", label: "Hosting Gratis" },
                { href: "/hosting-en-ecuador", label: "Hosting en Ecuador" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="block py-2 text-sm font-normal text-white/70 hover:text-white transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="space-y-1 border-t border-white/[0.06] pt-6">
              <p className="text-[11px] uppercase tracking-widest text-white/30 font-normal mb-2">Servicios</p>
              <Link href="/registro-de-dominios" className="block py-2 text-sm font-normal text-white/70 hover:text-white transition-colors">Dominios</Link>
              <Link href="/correos-empresarial" className="block py-2 text-sm font-normal text-white/70 hover:text-white transition-colors">Email Corporativo</Link>
              <Link href="/diseno-de-paginas-web" className="block py-2 text-sm font-normal text-white/70 hover:text-white transition-colors">Diseño Web</Link>
            </div>

            <div className="border-t border-white/[0.06] pt-6 flex flex-col gap-3">
              <a href="https://webfixsoluciones.net/cliente/clientarea.php" target="_blank" rel="noopener noreferrer"
                className="py-3 rounded-xl text-center text-sm font-normal text-white/70 border border-white/[0.1] hover:text-white hover:border-white/20 transition-colors">
                Iniciar sesión
              </a>
              <a href="https://webfixsoluciones.net/cliente/cart.php" target="_blank" rel="noopener noreferrer"
                className="py-3 rounded-xl text-center text-sm font-normal text-black bg-white hover:bg-white/90 transition-colors">
                Contratar ahora
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
