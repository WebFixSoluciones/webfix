"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Server,
  Globe,
  Mail,
  Layout,
  FileText,
  ChevronDown,
  Menu,
  X,
  User,
  ShieldCheck,
  Zap,
  Sparkles,
  ArrowUpRight
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [resourcesDropdown, setResourcesDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdown(false);
    setResourcesDropdown(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/[0.08] shadow-lg py-3"
          : "bg-black/40 backdrop-blur-md border-b border-white/[0.06] py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="relative w-36 sm:w-40 h-8">
                <Image
                  src="/assets/logo-white.svg"
                  alt="Web Fix"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-zinc-300">
              <a
                href="/#planes"
                className="hover:text-white transition-colors"
              >
                Precios
              </a>

              {/* Productos Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProductsDropdown(true)}
                onMouseLeave={() => setProductsDropdown(false)}
              >
                <button
                  className={`flex items-center gap-1 hover:text-white transition-colors ${
                    pathname.startsWith("/hosting") || pathname === "/servidor-dedicado"
                      ? "text-white"
                      : "text-zinc-300"
                  }`}
                >
                  <span>Productos</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${productsDropdown ? "rotate-180 text-white" : "opacity-60"}`} />
                </button>

                {productsDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-zinc-950/95 backdrop-blur-2xl p-2 shadow-2xl border border-white/[0.1] animate-in fade-in zoom-in-95 duration-100">
                    <div className="space-y-0.5 font-normal">
                      <Link
                        href="/hosting-wordpress"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">
                            Hosting WordPress
                          </div>
                          <div className="text-[11px] text-zinc-400">
                            LiteSpeed + NVMe con 45ms TTFB.
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/hosting-reseller"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Server className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-purple-400 transition-colors">
                            Hosting Reseller WHM
                          </div>
                          <div className="text-[11px] text-zinc-400">
                            Marca blanca para agencias.
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/servidor-dedicado"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            Servidores Dedicados
                          </div>
                          <div className="text-[11px] text-zinc-400">
                            AMD EPYC e Intel Xeon.
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/hosting-gratis"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors">
                            Hosting Gratis (Free Tier)
                          </div>
                          <div className="text-[11px] text-zinc-400">
                            Empieza tu web sin costo.
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/registro-de-dominios"
                className="hover:text-white transition-colors"
              >
                Dominios
              </Link>

              <Link
                href="/correos-empresarial"
                className="hover:text-white transition-colors"
              >
                Correos
              </Link>

              <Link
                href="/diseno-de-paginas-web"
                className="hover:text-white transition-colors"
              >
                Diseño Web
              </Link>

              {/* Recursos Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setResourcesDropdown(true)}
                onMouseLeave={() => setResourcesDropdown(false)}
              >
                <button
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>Recursos</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${resourcesDropdown ? "rotate-180 text-white" : "opacity-60"}`} />
                </button>

                {resourcesDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-60 rounded-2xl bg-zinc-950/95 backdrop-blur-2xl p-2 shadow-2xl border border-white/[0.1] animate-in fade-in zoom-in-95 duration-100 font-normal">
                    <div className="space-y-0.5">
                      <Link
                        href="/hosting-en-ecuador"
                        className="flex items-center gap-2.5 p-2 rounded-lg text-xs text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors"
                      >
                        <Globe className="w-3.5 h-3.5 text-amber-400" />
                        <span>Hosting en Ecuador</span>
                      </Link>
                      <Link
                        href="/terminos-y-condiciones"
                        className="flex items-center gap-2.5 p-2 rounded-lg text-xs text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Términos y Condiciones</span>
                      </Link>
                      <Link
                        href="/politica-de-uso-aceptable"
                        className="flex items-center gap-2.5 p-2 rounded-lg text-xs text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Política de Uso (PUA)</span>
                      </Link>
                      <Link
                        href="/terminos-y-condiciones/formulario-de-aceptacion"
                        className="flex items-center gap-2.5 p-2 rounded-lg text-xs text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 transition-colors font-medium"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Formulario de Aceptación</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-4 text-xs font-semibold">
            <span className="flex items-center gap-1 text-zinc-300">
              <span>🇪🇨 ES</span>
            </span>

            <a
              href="https://webfixsoluciones.net/cliente/clientarea.php"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-xs text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.12] transition-colors shadow-sm"
            >
              <User className="w-3.5 h-3.5" />
              <span>Ingresar</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://webfixsoluciones.net/cliente/clientarea.php"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-white text-black text-xs font-bold"
            >
              Ingresar
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/[0.06] text-zinc-300 hover:text-white"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[56px] bottom-0 bg-black/98 backdrop-blur-2xl border-t border-white/[0.08] px-6 py-6 overflow-y-auto z-50">
          <div className="space-y-4">
            <a
              href="/#planes"
              className="block px-4 py-2.5 rounded-xl bg-white/[0.04] text-white font-semibold text-sm"
            >
              Precios
            </a>

            <div className="space-y-1 pt-1">
              <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 px-4">
                Productos
              </div>
              <Link
                href="/hosting-wordpress"
                className="flex items-center gap-3 px-4 py-2 text-zinc-300 hover:text-white text-sm"
              >
                <Zap className="w-4 h-4 text-blue-400" />
                <span>Hosting WordPress</span>
              </Link>
              <Link
                href="/hosting-reseller"
                className="flex items-center gap-3 px-4 py-2 text-zinc-300 hover:text-white text-sm"
              >
                <Server className="w-4 h-4 text-purple-400" />
                <span>Hosting Reseller WHM</span>
              </Link>
              <Link
                href="/servidor-dedicado"
                className="flex items-center gap-3 px-4 py-2 text-zinc-300 hover:text-white text-sm"
              >
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Servidores Dedicados</span>
              </Link>
              <Link
                href="/hosting-gratis"
                className="flex items-center gap-3 px-4 py-2 text-zinc-300 hover:text-white text-sm"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Hosting Gratis</span>
              </Link>
            </div>

            <div className="space-y-1 pt-2 border-t border-white/[0.06]">
              <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 px-4">
                Servicios
              </div>
              <Link
                href="/registro-de-dominios"
                className="flex items-center gap-3 px-4 py-2 text-zinc-300 hover:text-white text-sm"
              >
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Dominios</span>
              </Link>
              <Link
                href="/correos-empresarial"
                className="flex items-center gap-3 px-4 py-2 text-zinc-300 hover:text-white text-sm"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Correos</span>
              </Link>
              <Link
                href="/diseno-de-paginas-web"
                className="flex items-center gap-3 px-4 py-2 text-zinc-300 hover:text-white text-sm"
              >
                <Layout className="w-4 h-4 text-blue-400" />
                <span>Diseño Web</span>
              </Link>
            </div>

            <div className="pt-4">
              <a
                href="https://webfixsoluciones.net/cliente/clientarea.php"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-black bg-white shadow-lg text-sm"
              >
                <User className="w-4 h-4" />
                <span>Ingresar al Área de Clientes</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
