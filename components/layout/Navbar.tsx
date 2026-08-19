"use client";

import { useState, useEffect, useRef } from "react";
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
  ArrowRight,
  Headphones,
  Cpu,
  RefreshCw,
  HelpCircle
} from "lucide-react";

type ActiveMenu = "hosting" | "dominios" | "recursos" | null;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  const handleMouseEnter = (menu: ActiveMenu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled || activeMenu !== null
          ? "bg-[#070B18]/95 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl py-3"
          : "bg-[#070B18]/60 backdrop-blur-md border-b border-white/[0.04] py-4"
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="shrink-0 flex items-center">
              <div className="relative w-32 sm:w-36 h-8">
                <Image
                  src="/assets/logo-white.svg"
                  alt="WebFix"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-normal text-white/80">
              <Link
                href="/"
                className={`transition-colors ${pathname === "/" ? "text-white font-medium" : "hover:text-white"}`}
              >
                Home
              </Link>

              {/* Dominios Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("dominios")}
              >
                <button
                  className={`flex items-center gap-1 transition-colors cursor-pointer ${
                    activeMenu === "dominios" || pathname === "/registro-de-dominios"
                      ? "text-[#00E4B8]"
                      : "hover:text-white"
                  }`}
                >
                  <span>Dominios</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "dominios" ? "rotate-180 text-[#00E4B8]" : "opacity-60"}`} />
                </button>
              </div>

              {/* Hosting Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("hosting")}
              >
                <button
                  className={`flex items-center gap-1 transition-colors cursor-pointer ${
                    activeMenu === "hosting" || pathname.startsWith("/hosting") || pathname === "/servidor-dedicado"
                      ? "text-[#00E4B8]"
                      : "hover:text-white"
                  }`}
                >
                  <span>Hosting</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "hosting" ? "rotate-180 text-[#00E4B8]" : "opacity-60"}`} />
                </button>
              </div>

              <Link
                href="/correos-empresarial"
                className={`transition-colors ${pathname === "/correos-empresarial" ? "text-[#00E4B8]" : "hover:text-white"}`}
              >
                Correos Empresarial
              </Link>

              <Link
                href="/diseno-de-paginas-web"
                className={`transition-colors ${pathname === "/diseno-de-paginas-web" ? "text-[#00E4B8]" : "hover:text-white"}`}
              >
                Diseño Web
              </Link>

              {/* Recursos */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("recursos")}
              >
                <button
                  className={`flex items-center gap-1 transition-colors cursor-pointer ${
                    activeMenu === "recursos" || pathname.startsWith("/terminos") || pathname.startsWith("/politica")
                      ? "text-[#00E4B8]"
                      : "hover:text-white"
                  }`}
                >
                  <span>Recursos</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "recursos" ? "rotate-180 text-[#00E4B8]" : "opacity-60"}`} />
                </button>
              </div>
            </nav>
          </div>

          {/* Right Action Icons & Button */}
          <div className="hidden lg:flex items-center gap-4 text-xs font-normal">
            <a
              href="https://webfixsoluciones.net/cliente/contact.php"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] flex items-center justify-center text-white/70 hover:text-white transition-colors"
              title="Soporte y Contacto"
            >
              <HelpCircle className="w-4 h-4" />
            </a>

            <a
              href="https://webfixsoluciones.net/cliente/clientarea.php"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl font-medium text-xs text-white bg-[#1C40F2] hover:bg-[#1534c9] transition-all shadow-[0_0_20px_rgba(28,64,242,0.4)] transform hover:scale-[1.02]"
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
              className="px-3.5 py-1.5 rounded-lg bg-[#1C40F2] text-white text-xs font-medium"
            >
              Ingresar
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white/70 hover:text-white bg-white/[0.04]"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mega Menu Flyout Panels (Dark Purple & Mint) ────────────────── */}
      {activeMenu && (
        <div
          className="hidden lg:block absolute top-full inset-x-0 bg-[#070B18]/98 backdrop-blur-3xl border-b border-white/[0.08] shadow-[0_35px_80px_-20px_rgba(0,0,0,0.95)] animate-in fade-in slide-in-from-top-2 duration-150"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
            {/* HOSTING MEGA MENU */}
            {activeMenu === "hosting" && (
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-4 space-y-3">
                  <div className="text-[11px] font-normal uppercase tracking-widest text-[#00E4B8] pb-1 border-b border-white/[0.06]">
                    Hosting Optimizado
                  </div>
                  <div className="space-y-1.5">
                    <Link
                      href="/hosting-wordpress"
                      className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#1D0C3C]/60 hover:bg-[#240E48] border border-purple-900/30 hover:border-[#00E4B8]/40 transition-all group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-[#00E4B8] transition-colors flex items-center gap-2">
                          Hosting WordPress
                          <span className="text-[10px] bg-[#00E4B8]/15 text-[#00E4B8] px-1.5 py-0.2 rounded font-mono">
                            NVMe
                          </span>
                        </div>
                        <div className="text-[12px] font-light text-white/50 leading-relaxed mt-0.5">
                          LiteSpeed + LSCache a nivel de kernel y 45ms TTFB.
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/hosting-en-ecuador"
                      className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#1D0C3C]/60 hover:bg-[#240E48] border border-purple-900/30 hover:border-[#00E4B8]/40 transition-all group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-[#00E4B8] transition-colors">
                          Hosting en Ecuador
                        </div>
                        <div className="text-[12px] font-light text-white/50 leading-relaxed mt-0.5">
                          Facturación SRI autorizada y pagos en bancos locales.
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/hosting-gratis"
                      className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#1D0C3C]/60 hover:bg-[#240E48] border border-purple-900/30 hover:border-[#00E4B8]/40 transition-all group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-[#00E4B8] transition-colors">
                          Hosting Gratis (Free Tier)
                        </div>
                        <div className="text-[12px] font-light text-white/50 leading-relaxed mt-0.5">
                          Inicia tu primer sitio web sin costo mensual.
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="col-span-4 space-y-3">
                  <div className="text-[11px] font-normal uppercase tracking-widest text-[#00E4B8] pb-1 border-b border-white/[0.06]">
                    Avanzado & Bare Metal
                  </div>
                  <div className="space-y-1.5">
                    <Link
                      href="/hosting-reseller"
                      className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#1D0C3C]/60 hover:bg-[#240E48] border border-purple-900/30 hover:border-[#00E4B8]/40 transition-all group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Server className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-[#00E4B8] transition-colors">
                          Hosting Reseller WHM
                        </div>
                        <div className="text-[12px] font-light text-white/50 leading-relaxed mt-0.5">
                          Marca blanca 100%, DNS privados y panel WHM.
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/servidor-dedicado"
                      className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#1D0C3C]/60 hover:bg-[#240E48] border border-purple-900/30 hover:border-[#00E4B8]/40 transition-all group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-[#00E4B8] transition-colors">
                          Servidores Dedicados
                        </div>
                        <div className="text-[12px] font-light text-white/50 leading-relaxed mt-0.5">
                          AMD EPYC e Intel Xeon con control IPMI / KVM.
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="col-span-4">
                  <div className="h-full p-6 rounded-3xl bg-gradient-to-br from-[#240E48] to-[#15082C] border border-purple-800/40 flex flex-col justify-between">
                    <div className="space-y-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-[#00E4B8]/15 text-[#00E4B8] border border-[#00E4B8]/30">
                        <Sparkles className="w-3 h-3 text-[#00E4B8]" />
                        Descuento Especial
                      </span>
                      <h4 className="font-heading font-semibold text-white text-lg leading-snug">
                        20% OFF en Planes Anuales
                      </h4>
                      <p className="text-[12px] font-light text-white/60 leading-relaxed">
                        Incluye <strong className="text-[#00E4B8]">Dominio .COM gratis por 1 año</strong>, SSL ilimitado y migración sin costo.
                      </p>
                    </div>
                    <div className="pt-4">
                      <a
                        href="/#planes"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium text-white bg-[#1C40F2] hover:bg-[#1534c9] transition-all shadow-md"
                      >
                        <span>Ver Planes y Precios</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* DOMINIOS MEGA MENU */}
            {activeMenu === "dominios" && (
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-6 space-y-3">
                  <div className="text-[11px] font-normal uppercase tracking-widest text-[#00E4B8] pb-1 border-b border-white/[0.06]">
                    Gestión & Registro
                  </div>
                  <div className="space-y-1.5">
                    <Link
                      href="/registro-de-dominios"
                      className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#1D0C3C]/60 hover:bg-[#240E48] border border-purple-900/30 hover:border-[#00E4B8]/40 transition-all group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-[#00E4B8] transition-colors">
                          Buscador & Registro de Dominios
                        </div>
                        <div className="text-[12px] font-light text-white/50 leading-relaxed mt-0.5">
                          Encuentra el nombre ideal con extensiones .COM, .EC, .NET, .ORG, .SHOP.
                        </div>
                      </div>
                    </Link>

                    <a
                      href="https://webfixsoluciones.net/cliente/cart.php?a=add&domain=transfer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#1D0C3C]/60 hover:bg-[#240E48] border border-purple-900/30 hover:border-[#00E4B8]/40 transition-all group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                        <RefreshCw className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-[#00E4B8] transition-colors">
                          Transferir Dominio a WebFix
                        </div>
                        <div className="text-[12px] font-light text-white/50 leading-relaxed mt-0.5">
                          Renovación transparente y soporte en español.
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-span-6">
                  <div className="h-full p-6 rounded-3xl bg-[#1D0C3C] border border-purple-900/30 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono text-[#00E4B8] uppercase tracking-wider block mb-2">
                        Precios de Dominios Populares
                      </span>
                      <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                        <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.05]">
                          <span className="text-white font-bold block">.COM</span>
                          <span className="text-[#00E4B8] font-semibold">$14.50/año</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.05]">
                          <span className="text-white font-bold block">.EC</span>
                          <span className="text-[#00E4B8] font-semibold">$35.00/año</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.05]">
                          <span className="text-white font-bold block">.SHOP</span>
                          <span className="text-[#00E4B8] font-semibold">$4.99/año</span>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/registro-de-dominios"
                      className="inline-flex items-center gap-1.5 text-xs text-[#00E4B8] hover:underline pt-4"
                    >
                      <span>Ver todas las extensiones disponibles</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* RECURSOS MEGA MENU */}
            {activeMenu === "recursos" && (
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-6 space-y-3">
                  <div className="text-[11px] font-normal uppercase tracking-widest text-[#00E4B8] pb-1 border-b border-white/[0.06]">
                    Marco Legal & Normativa
                  </div>
                  <div className="space-y-1.5">
                    <Link
                      href="/terminos-y-condiciones"
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#1D0C3C]/60 hover:bg-[#240E48] text-xs font-normal text-white/80 hover:text-white transition-colors border border-purple-900/30"
                    >
                      <FileText className="w-4 h-4 text-white/40" />
                      <span>Términos y Condiciones Generales (8 Capítulos)</span>
                    </Link>
                    <Link
                      href="/politica-de-uso-aceptable"
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#1D0C3C]/60 hover:bg-[#240E48] text-xs font-normal text-white/80 hover:text-white transition-colors border border-purple-900/30"
                    >
                      <ShieldCheck className="w-4 h-4 text-white/40" />
                      <span>Política de Uso Aceptable (PUA)</span>
                    </Link>
                    <Link
                      href="/terminos-y-condiciones/formulario-de-aceptacion"
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#00E4B8]/10 hover:bg-[#00E4B8]/15 text-xs font-medium text-[#00E4B8] transition-colors border border-[#00E4B8]/30"
                    >
                      <Sparkles className="w-4 h-4 text-[#00E4B8]" />
                      <span>Formulario de Aceptación Digital (LOPDP)</span>
                    </Link>
                  </div>
                </div>

                <div className="col-span-6">
                  <div className="h-full p-6 rounded-3xl bg-[#1D0C3C] border border-purple-900/30 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h4 className="font-heading font-semibold text-white text-base">
                        Portal de Clientes WHMCS
                      </h4>
                      <p className="text-[12px] font-light text-white/50 leading-relaxed">
                        Gestiona facturación electrónica, tickets de soporte 24/7 y administración de cPanel en un solo lugar.
                      </p>
                    </div>
                    <a
                      href="https://webfixsoluciones.net/cliente/clientarea.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium text-white bg-[#1C40F2] hover:bg-[#1534c9] transition-all self-start mt-4 shadow-md"
                    >
                      <User className="w-3.5 h-3.5" />
                      <span>Ingresar al Portal</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[56px] bottom-0 bg-[#070B18]/98 border-t border-white/[0.08] overflow-y-auto z-50 px-6 py-6 space-y-6">
          <div className="space-y-3 text-sm">
            <Link href="/" className="block py-2 text-white font-medium">Home</Link>
            <Link href="/registro-de-dominios" className="block py-2 text-white/80 hover:text-white">Dominios</Link>
            <Link href="/hosting-wordpress" className="block py-2 text-white/80 hover:text-white">Hosting WordPress</Link>
            <Link href="/hosting-reseller" className="block py-2 text-white/80 hover:text-white">Hosting Reseller</Link>
            <Link href="/correos-empresarial" className="block py-2 text-white/80 hover:text-white">Correos Empresarial</Link>
            <Link href="/diseno-de-paginas-web" className="block py-2 text-white/80 hover:text-white">Diseño Web</Link>
            <Link href="/servidor-dedicado" className="block py-2 text-white/80 hover:text-white">Servidores Dedicados</Link>
            <Link href="/terminos-y-condiciones" className="block py-2 text-white/80 hover:text-white">Términos y Condiciones</Link>
          </div>

          <div className="pt-4 border-t border-white/[0.08]">
            <a
              href="https://webfixsoluciones.net/cliente/clientarea.php"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-xs text-white bg-[#1C40F2] shadow-lg"
            >
              <User className="w-4 h-4" />
              <span>Ingresar al Área de Clientes</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
