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
  const [hostingDropdown, setHostingDropdown] = useState(false);
  const [legalDropdown, setLegalDropdown] = useState(false);
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
    setHostingDropdown(false);
    setLegalDropdown(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-36 sm:w-44 h-8 transition-opacity duration-200 group-hover:opacity-90">
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
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.02] border border-white/[0.06] rounded-full px-3 py-1 backdrop-blur-xl shadow-inner">
            <Link
              href="/"
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150 ${
                pathname === "/"
                  ? "text-white bg-white/[0.08] shadow-sm"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              Inicio
            </Link>

            {/* Hosting Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHostingDropdown(true)}
              onMouseLeave={() => setHostingDropdown(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150 ${
                  pathname.startsWith("/hosting") || pathname === "/servidor-dedicado"
                    ? "text-white bg-white/[0.08] shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <span>Hosting</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${hostingDropdown ? "rotate-180 text-white" : "opacity-60"}`} />
              </button>

              {hostingDropdown && (
                <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-zinc-950/90 backdrop-blur-2xl p-2 shadow-2xl border border-white/[0.1] animate-in fade-in zoom-in-95 duration-150">
                  <div className="space-y-0.5">
                    <Link
                      href="/hosting-wordpress"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                          Hosting WordPress
                          <span className="text-[9px] bg-blue-500/20 text-blue-300 px-1.5 py-0.2 rounded-full">NVMe</span>
                        </div>
                        <div className="text-[11px] text-zinc-400">
                          LiteSpeed + LSCache con 45ms TTFB.
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/hosting-reseller"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <Server className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white group-hover:text-purple-400 transition-colors">
                          Hosting Reseller WHM
                        </div>
                        <div className="text-[11px] text-zinc-400">
                          Marca blanca para agencias y revendedores.
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/servidor-dedicado"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          Servidores Dedicados
                        </div>
                        <div className="text-[11px] text-zinc-400">
                          AMD EPYC e Intel Xeon Bare Metal.
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/hosting-gratis"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors">
                          Hosting Gratis (Free Tier)
                        </div>
                        <div className="text-[11px] text-zinc-400">
                          Empieza tu proyecto sin costo mensual.
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/hosting-en-ecuador"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group border-t border-white/[0.06] pt-2"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white group-hover:text-amber-400 transition-colors">
                          Hosting en Ecuador
                        </div>
                        <div className="text-[11px] text-zinc-400">
                          Baja latencia y facturación SRI Ecuador.
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/registro-de-dominios"
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150 ${
                pathname === "/registro-de-dominios"
                  ? "text-white bg-white/[0.08] shadow-sm"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              Dominios
            </Link>

            <Link
              href="/correos-empresarial"
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150 ${
                pathname === "/correos-empresarial"
                  ? "text-white bg-white/[0.08] shadow-sm"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              Correos
            </Link>

            <Link
              href="/diseno-de-paginas-web"
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150 ${
                pathname === "/diseno-de-paginas-web"
                  ? "text-white bg-white/[0.08] shadow-sm"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              Diseño Web
            </Link>

            {/* Legal */}
            <div
              className="relative"
              onMouseEnter={() => setLegalDropdown(true)}
              onMouseLeave={() => setLegalDropdown(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150 ${
                  pathname.startsWith("/terminos") || pathname.startsWith("/politica")
                    ? "text-white bg-white/[0.08] shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <span>Legal</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${legalDropdown ? "rotate-180 text-white" : "opacity-60"}`} />
              </button>

              {legalDropdown && (
                <div className="absolute top-full right-0 mt-2 w-60 rounded-2xl bg-zinc-950/90 backdrop-blur-2xl p-2 shadow-2xl border border-white/[0.1] animate-in fade-in zoom-in-95 duration-150">
                  <div className="space-y-0.5">
                    <Link
                      href="/terminos-y-condiciones"
                      className="flex items-center gap-2 p-2 rounded-lg text-xs text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Términos y Condiciones</span>
                    </Link>
                    <Link
                      href="/politica-de-uso-aceptable"
                      className="flex items-center gap-2 p-2 rounded-lg text-xs text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Política de Uso Aceptable</span>
                    </Link>
                    <Link
                      href="/terminos-y-condiciones/formulario-de-aceptacion"
                      className="flex items-center gap-2 p-2 rounded-lg text-xs text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 transition-colors font-medium"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Formulario de Aceptación</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action: Vercel-Style Pill Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://webfixsoluciones.net/cliente/cart.php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Tienda
            </a>
            <a
              href="https://webfixsoluciones.net/cliente/clientarea.php"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-black bg-white hover:bg-zinc-200 shadow-[0_0_20px_-3px_rgba(255,255,255,0.4)] transition-all duration-150 transform hover:scale-[1.02]"
            >
              <User className="w-3.5 h-3.5" />
              <span>Área de Clientes</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://webfixsoluciones.net/cliente/clientarea.php"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full bg-white text-black text-xs font-semibold"
            >
              Clientes
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-zinc-300 hover:text-white"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-black/95 backdrop-blur-2xl border-t border-white/[0.08] px-6 py-6 overflow-y-auto z-50">
          <div className="space-y-4">
            <Link
              href="/"
              className="block px-4 py-2.5 rounded-xl bg-white/[0.04] text-white font-medium text-sm"
            >
              Inicio
            </Link>

            <div className="space-y-1.5 pt-2">
              <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 px-4">
                Hosting & Servidores
              </div>
              <Link
                href="/hosting-wordpress"
                className="flex items-center gap-3 px-4 py-2 rounded-xl text-zinc-300 hover:text-white text-sm"
              >
                <Zap className="w-4 h-4 text-blue-400" />
                <span>Hosting WordPress</span>
              </Link>
              <Link
                href="/hosting-reseller"
                className="flex items-center gap-3 px-4 py-2 rounded-xl text-zinc-300 hover:text-white text-sm"
              >
                <Server className="w-4 h-4 text-purple-400" />
                <span>Hosting Reseller WHM</span>
              </Link>
              <Link
                href="/servidor-dedicado"
                className="flex items-center gap-3 px-4 py-2 rounded-xl text-zinc-300 hover:text-white text-sm"
              >
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Servidores Dedicados</span>
              </Link>
              <Link
                href="/hosting-gratis"
                className="flex items-center gap-3 px-4 py-2 rounded-xl text-zinc-300 hover:text-white text-sm"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Hosting Gratis</span>
              </Link>
              <Link
                href="/hosting-en-ecuador"
                className="flex items-center gap-3 px-4 py-2 rounded-xl text-zinc-300 hover:text-white text-sm"
              >
                <Globe className="w-4 h-4 text-amber-400" />
                <span>Hosting en Ecuador</span>
              </Link>
            </div>

            <div className="space-y-1.5 pt-3 border-t border-white/[0.06]">
              <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 px-4">
                Servicios
              </div>
              <Link
                href="/registro-de-dominios"
                className="flex items-center gap-3 px-4 py-2 rounded-xl text-zinc-300 hover:text-white text-sm"
              >
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Registro de Dominios</span>
              </Link>
              <Link
                href="/correos-empresarial"
                className="flex items-center gap-3 px-4 py-2 rounded-xl text-zinc-300 hover:text-white text-sm"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Correos Corporativos</span>
              </Link>
              <Link
                href="/diseno-de-paginas-web"
                className="flex items-center gap-3 px-4 py-2 rounded-xl text-zinc-300 hover:text-white text-sm"
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
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-black bg-white shadow-lg text-sm"
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
