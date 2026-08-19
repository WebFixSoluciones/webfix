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
  CheckCircle2,
  HardDrive,
  Cpu,
  RefreshCw,
  Building2,
  Lock,
  ShoppingCart
} from "lucide-react";

type ActiveMenu = "hosting" | "dominios" | "soluciones" | "recursos" | null;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
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
    setMobileExpanded(null);
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

  const toggleMobileCategory = (cat: string) => {
    setMobileExpanded(mobileExpanded === cat ? null : cat);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled || activeMenu !== null
          ? "bg-black/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl py-3"
          : "bg-transparent py-4"
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="shrink-0 flex items-center">
              <div className="relative w-36 sm:w-40 h-8">
                <Image
                  src="/assets/logo-white.svg"
                  alt="WebFix"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Mega Navigation */}
            <nav className="hidden lg:flex items-center gap-1 text-sm font-normal text-white/70">
              {/* 1. Hosting Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("hosting")}
              >
                <button
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                    activeMenu === "hosting" || pathname.startsWith("/hosting") || pathname === "/servidor-dedicado"
                      ? "text-white bg-white/[0.06]"
                      : "hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  <span>Hosting Web</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMenu === "hosting" ? "rotate-180 text-white" : "opacity-60"
                    }`}
                  />
                </button>
              </div>

              {/* 2. Dominios Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("dominios")}
              >
                <button
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                    activeMenu === "dominios" || pathname === "/registro-de-dominios"
                      ? "text-white bg-white/[0.06]"
                      : "hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  <span>Dominios</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMenu === "dominios" ? "rotate-180 text-white" : "opacity-60"
                    }`}
                  />
                </button>
              </div>

              {/* 3. Soluciones & Servicios Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("soluciones")}
              >
                <button
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                    activeMenu === "soluciones" || pathname === "/correos-empresarial" || pathname === "/diseno-de-paginas-web"
                      ? "text-white bg-white/[0.06]"
                      : "hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  <span>Servicios</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMenu === "soluciones" ? "rotate-180 text-white" : "opacity-60"
                    }`}
                  />
                </button>
              </div>

              {/* 4. Recursos & Legal Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("recursos")}
              >
                <button
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                    activeMenu === "recursos" || pathname.startsWith("/terminos") || pathname.startsWith("/politica")
                      ? "text-white bg-white/[0.06]"
                      : "hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  <span>Recursos</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMenu === "recursos" ? "rotate-180 text-white" : "opacity-60"
                    }`}
                  />
                </button>
              </div>

              {/* 5. Precios Direct Link */}
              <a
                href="/#planes"
                className="px-3 py-2 rounded-lg hover:text-white hover:bg-white/[0.03] transition-colors"
              >
                Precios
              </a>
            </nav>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-4 text-xs font-normal">
            <span className="flex items-center gap-1.5 text-white/50 font-light">
              <span>🇪🇨</span>
              <span>Ecuador</span>
            </span>

            <a
              href="https://webfixsoluciones.net/cliente/cart.php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              Tienda WHMCS
            </a>

            <a
              href="https://webfixsoluciones.net/cliente/clientarea.php"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-normal text-xs text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.12] transition-colors shadow-sm"
            >
              <User className="w-3.5 h-3.5 text-white/70" />
              <span>Área de Clientes</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://webfixsoluciones.net/cliente/clientarea.php"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-white text-black text-xs font-normal"
            >
              Clientes
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

      {/* ── Desktop Mega Menu Flyout Panels ─────────────────────────── */}
      {activeMenu && (
        <div
          className="hidden lg:block absolute top-full inset-x-0 bg-black/95 backdrop-blur-3xl border-b border-white/[0.08] shadow-[0_35px_80px_-20px_rgba(0,0,0,0.95)] animate-in fade-in slide-in-from-top-2 duration-150"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
            {/* 1. HOSTING MEGA MENU */}
            {activeMenu === "hosting" && (
              <div className="grid grid-cols-12 gap-8">
                {/* Left Category 1: Hosting Compartido & WordPress */}
                <div className="col-span-4 space-y-4">
                  <div className="text-[11px] font-normal uppercase tracking-widest text-white/40 pb-1 border-b border-white/[0.06]">
                    Hosting Optimizado
                  </div>
                  <div className="space-y-2">
                    <Link
                      href="/hosting-wordpress"
                      className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/[0.04] border border-transparent hover:border-white/[0.06] transition-all group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors flex items-center gap-2">
                          Hosting WordPress
                          <span className="text-[10px] font-light bg-blue-500/20 text-blue-300 px-1.5 py-0.2 rounded-full">
                            LiteSpeed NVMe
                          </span>
                        </div>
                        <div className="text-[12px] font-light text-white/50 leading-relaxed mt-0.5">
                          Aceleración LSCache a nivel de kernel y 45ms de TTFB.
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/hosting-en-ecuador"
                      className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/[0.04] border border-transparent hover:border-white/[0.06] transition-all group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors flex items-center gap-2">
                          Hosting en Ecuador
                          <span className="text-[10px] font-light bg-amber-500/20 text-amber-300 px-1.5 py-0.2 rounded-full">
                            SRI
                          </span>
                        </div>
                        <div className="text-[12px] font-light text-white/50 leading-relaxed mt-0.5">
                          Ultra baja latencia, pagos en bancos locales y factura electrónica.
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/hosting-gratis"
                      className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/[0.04] border border-transparent hover:border-white/[0.06] transition-all group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors flex items-center gap-2">
                          Hosting Gratis (Free Tier)
                          <span className="text-[10px] font-light bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded-full">
                            $0/mes
                          </span>
                        </div>
                        <div className="text-[12px] font-light text-white/50 leading-relaxed mt-0.5">
                          Inicia tu primer sitio web o proyecto personal sin costo mensual.
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Center Category 2: Hosting Avanzado & Bare Metal */}
                <div className="col-span-4 space-y-4">
                  <div className="text-[11px] font-normal uppercase tracking-widest text-white/40 pb-1 border-b border-white/[0.06]">
                    Avanzado & Empresas
                  </div>
                  <div className="space-y-2">
                    <Link
                      href="/hosting-reseller"
                      className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/[0.04] border border-transparent hover:border-white/[0.06] transition-all group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                        <Server className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors flex items-center gap-2">
                          Hosting Reseller WHM
                        </div>
                        <div className="text-[12px] font-light text-white/50 leading-relaxed mt-0.5">
                          Marca blanca 100%, DNS privados y gestión de cuentas cPanel.
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/servidor-dedicado"
                      className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/[0.04] border border-transparent hover:border-white/[0.06] transition-all group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                          Servidores Dedicados
                          <span className="text-[10px] font-light bg-cyan-500/20 text-cyan-300 px-1.5 py-0.2 rounded-full">
                            Bare Metal
                          </span>
                        </div>
                        <div className="text-[12px] font-light text-white/50 leading-relaxed mt-0.5">
                          Procesadores AMD EPYC e Intel Xeon con IPMI / KVM dedicado.
                        </div>
                      </div>
                    </Link>

                    <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between">
                      <div className="flex items-center gap-2.5 text-xs text-white/70">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Imunify360 + SSL Gratis en todos los planes</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Promo Box */}
                <div className="col-span-4">
                  <div className="h-full p-6 rounded-3xl bg-gradient-to-br from-blue-950/40 via-zinc-950/80 to-zinc-950 border border-blue-500/20 flex flex-col justify-between relative overflow-hidden">
                    <div className="space-y-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-normal uppercase tracking-widest bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        <Sparkles className="w-3 h-3 text-blue-400" />
                        Oferta Destacada
                      </span>
                      <h4 className="font-heading font-semibold text-white text-lg leading-snug">
                        20% de Descuento en Planes Anuales
                      </h4>
                      <p className="text-[12px] font-light text-white/60 leading-relaxed">
                        Incluye <strong>Dominio .COM gratis por 1 año</strong>, certificado SSL ilimitado y migración express sin costo.
                      </p>
                    </div>

                    <div className="pt-4">
                      <a
                        href="/#planes"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-normal text-black bg-white hover:bg-white/90 transition-all shadow-md"
                      >
                        <span>Ver Planes y Precios</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. DOMINIOS MEGA MENU */}
            {activeMenu === "dominios" && (
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-5 space-y-4">
                  <div className="text-[11px] font-normal uppercase tracking-widest text-white/40 pb-1 border-b border-white/[0.06]">
                    Gestión de Dominios
                  </div>
                  <div className="space-y-2">
                    <Link
                      href="/registro-de-dominios"
                      className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/[0.04] border border-transparent hover:border-white/[0.06] transition-all group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
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
                      className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/[0.04] border border-transparent hover:border-white/[0.06] transition-all group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                        <RefreshCw className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                          Transferir Dominio a WebFix
                        </div>
                        <div className="text-[12px] font-light text-white/50 leading-relaxed mt-0.5">
                          Renovación transparente y soporte especializado en español.
                        </div>
                      </div>
                    </a>

                    <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-[12px] font-light text-white/60 space-y-1">
                      <div className="flex items-center gap-2 text-white/80 font-normal">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Whois Privacy Gratis</span>
                      </div>
                      <p className="text-white/40 text-[11px]">
                        Tus datos personales y de empresa protegidos contra spam y bases de datos públicas.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center: Popular TLDs */}
                <div className="col-span-4 space-y-4">
                  <div className="text-[11px] font-normal uppercase tracking-widest text-white/40 pb-1 border-b border-white/[0.06]">
                    Extensiones Principales
                  </div>
                  <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                    {[
                      { tld: ".com", price: "$14.50", sub: "Global", popular: true },
                      { tld: ".ec", price: "$35.00", sub: "Ecuador Oficial" },
                      { tld: ".net", price: "$15.99", sub: "Tecnología" },
                      { tld: ".org", price: "$16.50", sub: "Organizaciones" },
                      { tld: ".shop", price: "$4.99", sub: "E-Commerce" },
                      { tld: ".pro", price: "$5.99", sub: "Profesionales" },
                    ].map((item) => (
                      <a
                        key={item.tld}
                        href={`https://webfixsoluciones.net/cliente/cart.php?a=add&domain=register&tld=${item.tld}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {item.tld}
                          </span>
                          <span className="text-emerald-400 font-semibold">{item.price}</span>
                        </div>
                        <span className="text-[10px] text-white/40 font-sans block mt-1">{item.sub}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Right Promo */}
                <div className="col-span-3">
                  <div className="h-full p-6 rounded-3xl bg-zinc-950 border border-white/[0.08] flex flex-col justify-between">
                    <div className="space-y-2">
                      <h4 className="font-heading font-semibold text-white text-base">
                        DNS Anycast Ultra-Rápido
                      </h4>
                      <p className="text-[12px] font-light text-white/50 leading-relaxed">
                        Administra zonas DNS, registros SPF, DKIM, TXT y redirecciones con propagación mundial en minutos.
                      </p>
                    </div>
                    <Link
                      href="/registro-de-dominios"
                      className="text-xs font-normal text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 mt-4"
                    >
                      <span>Ver todas las extensiones</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* 3. SOLUCIONES & SERVICIOS MEGA MENU */}
            {activeMenu === "soluciones" && (
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-4 space-y-4">
                  <div className="text-[11px] font-normal uppercase tracking-widest text-white/40 pb-1 border-b border-white/[0.06]">
                    Comunicación & Presencia
                  </div>
                  <div className="space-y-2">
                    <Link
                      href="/correos-empresarial"
                      className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/[0.04] border border-transparent hover:border-white/[0.06] transition-all group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                          Correo Corporativo
                        </div>
                        <div className="text-[12px] font-light text-white/50 leading-relaxed mt-0.5">
                          Cuentas personalizadas con tu dominio (nombre@tuempresa.com) y antispam.
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/diseno-de-paginas-web"
                      className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/[0.04] border border-transparent hover:border-white/[0.06] transition-all group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Layout className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                          Diseño de Páginas Web
                        </div>
                        <div className="text-[12px] font-light text-white/50 leading-relaxed mt-0.5">
                          Sitios corporativos, landing pages y tiendas online con hosting y dominio incluido.
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="col-span-4 space-y-4">
                  <div className="text-[11px] font-normal uppercase tracking-widest text-white/40 pb-1 border-b border-white/[0.06]">
                    Servicios Especiales
                  </div>
                  <div className="space-y-2">
                    <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-semibold text-white">
                        <RefreshCw className="w-4 h-4 text-emerald-400" />
                        <span>Migración Gratuita sin Cortes</span>
                      </div>
                      <p className="text-[12px] font-light text-white/50 leading-relaxed">
                        Nuestros ingenieros transfieren tu web, bases de datos y correos desde tu proveedor actual sin tiempo de inactividad.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-1.5">
                      <div className="flex items-center gap-2 text-sm font-semibold text-white">
                        <Building2 className="w-4 h-4 text-amber-400" />
                        <span>Factura Electrónica SRI</span>
                      </div>
                      <p className="text-[12px] font-light text-white/50 leading-relaxed">
                        Emisión automática de comprobantes con RUC para deducción legal en Ecuador.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Promo */}
                <div className="col-span-4">
                  <div className="h-full p-6 rounded-3xl bg-zinc-950 border border-white/[0.08] flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="w-8 h-8 rounded-xl bg-white/[0.05] text-white flex items-center justify-center">
                        <Headphones className="w-4 h-4" />
                      </div>
                      <h4 className="font-heading font-semibold text-white text-base">
                        Soporte Humano 24/7 en Español
                      </h4>
                      <p className="text-[12px] font-light text-white/50 leading-relaxed">
                        ¿Tienes dudas sobre qué plan o servicio elegir? Nuestro equipo técnico está listo para asesorarte en tiempo real.
                      </p>
                    </div>
                    <a
                      href="https://webfixsoluciones.net/cliente/contact.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-normal text-white hover:text-white/80 transition-colors pt-3"
                    >
                      <span>Contactar a un Ingeniero</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* 4. RECURSOS & LEGAL MEGA MENU */}
            {activeMenu === "recursos" && (
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-4 space-y-4">
                  <div className="text-[11px] font-normal uppercase tracking-widest text-white/40 pb-1 border-b border-white/[0.06]">
                    Marco Legal & Contratos
                  </div>
                  <div className="space-y-1.5">
                    <Link
                      href="/terminos-y-condiciones"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.04] text-xs font-normal text-white/70 hover:text-white transition-colors"
                    >
                      <FileText className="w-4 h-4 text-white/40" />
                      <span>Términos y Condiciones Generales (8 Capítulos)</span>
                    </Link>

                    <Link
                      href="/politica-de-uso-aceptable"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.04] text-xs font-normal text-white/70 hover:text-white transition-colors"
                    >
                      <ShieldCheck className="w-4 h-4 text-white/40" />
                      <span>Política de Uso Aceptable (PUA)</span>
                    </Link>

                    <Link
                      href="/terminos-y-condiciones/formulario-de-aceptacion"
                      className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/15 text-xs font-normal text-emerald-300 border border-emerald-500/20 transition-colors"
                    >
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      <span>Formulario de Aceptación Digital (LOPDP)</span>
                    </Link>
                  </div>
                </div>

                <div className="col-span-4 space-y-4">
                  <div className="text-[11px] font-normal uppercase tracking-widest text-white/40 pb-1 border-b border-white/[0.06]">
                    Normativa & Protección de Datos
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-white">
                      <Lock className="w-4 h-4 text-cyan-400" />
                      <span>Ley Orgánica de Protección de Datos (2021)</span>
                    </div>
                    <p className="text-[11px] font-light text-white/40 leading-relaxed">
                      Garantizamos el tratamiento confidencial y seguro de los datos personales de todos nuestros clientes en territorio ecuatoriano e internacional.
                    </p>
                  </div>
                </div>

                <div className="col-span-4">
                  <div className="h-full p-6 rounded-3xl bg-zinc-950 border border-white/[0.08] flex flex-col justify-between">
                    <div className="space-y-2">
                      <h4 className="font-heading font-semibold text-white text-base">
                        Área de Clientes WHMCS
                      </h4>
                      <p className="text-[12px] font-light text-white/50 leading-relaxed">
                        Gestiona tus facturas, tickets de soporte técnico, renovación de servicios y accesos cPanel desde un solo panel.
                      </p>
                    </div>
                    <a
                      href="https://webfixsoluciones.net/cliente/clientarea.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-normal text-black bg-white hover:bg-white/90 transition-colors self-start mt-4"
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

      {/* ── Mobile Drawer with Accordion Mega Menu ────────────────── */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[56px] bottom-0 bg-black/98 border-t border-white/[0.08] overflow-y-auto z-50 px-6 py-6 space-y-6">
          {/* Quick links */}
          <div className="space-y-3">
            {/* Hosting Accordion */}
            <div className="border-b border-white/[0.06] pb-3">
              <button
                onClick={() => toggleMobileCategory("hosting")}
                className="w-full flex items-center justify-between text-sm font-semibold text-white py-2"
              >
                <span>Hosting & Servidores</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "hosting" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "hosting" && (
                <div className="pl-3 pt-2 space-y-2.5 text-xs font-light text-white/70">
                  <Link href="/hosting-wordpress" className="flex items-center gap-2 py-1">
                    <Zap className="w-3.5 h-3.5 text-blue-400" />
                    <span>Hosting WordPress (LiteSpeed NVMe)</span>
                  </Link>
                  <Link href="/hosting-reseller" className="flex items-center gap-2 py-1">
                    <Server className="w-3.5 h-3.5 text-purple-400" />
                    <span>Hosting Reseller WHM</span>
                  </Link>
                  <Link href="/servidor-dedicado" className="flex items-center gap-2 py-1">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Servidores Dedicados Bare Metal</span>
                  </Link>
                  <Link href="/hosting-gratis" className="flex items-center gap-2 py-1">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Hosting Gratis ($0/mes)</span>
                  </Link>
                  <Link href="/hosting-en-ecuador" className="flex items-center gap-2 py-1">
                    <Globe className="w-3.5 h-3.5 text-amber-400" />
                    <span>Hosting en Ecuador (Factura SRI)</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Dominios Accordion */}
            <div className="border-b border-white/[0.06] pb-3">
              <button
                onClick={() => toggleMobileCategory("dominios")}
                className="w-full flex items-center justify-between text-sm font-semibold text-white py-2"
              >
                <span>Dominios</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "dominios" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "dominios" && (
                <div className="pl-3 pt-2 space-y-2.5 text-xs font-light text-white/70">
                  <Link href="/registro-de-dominios" className="flex items-center gap-2 py-1">
                    <Globe className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Buscador de Dominios (.COM, .EC, .NET)</span>
                  </Link>
                  <a href="https://webfixsoluciones.net/cliente/cart.php?a=add&domain=transfer" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-1">
                    <RefreshCw className="w-3.5 h-3.5 text-purple-400" />
                    <span>Transferir Dominio a WebFix</span>
                  </a>
                </div>
              )}
            </div>

            {/* Servicios Accordion */}
            <div className="border-b border-white/[0.06] pb-3">
              <button
                onClick={() => toggleMobileCategory("servicios")}
                className="w-full flex items-center justify-between text-sm font-semibold text-white py-2"
              >
                <span>Servicios</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "servicios" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "servicios" && (
                <div className="pl-3 pt-2 space-y-2.5 text-xs font-light text-white/70">
                  <Link href="/correos-empresarial" className="flex items-center gap-2 py-1">
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    <span>Correos Corporativos con Antispam</span>
                  </Link>
                  <Link href="/diseno-de-paginas-web" className="flex items-center gap-2 py-1">
                    <Layout className="w-3.5 h-3.5 text-purple-400" />
                    <span>Diseño de Páginas Web Profesionales</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Legal Accordion */}
            <div className="border-b border-white/[0.06] pb-3">
              <button
                onClick={() => toggleMobileCategory("legal")}
                className="w-full flex items-center justify-between text-sm font-semibold text-white py-2"
              >
                <span>Legal & Normativa LOPDP</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "legal" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "legal" && (
                <div className="pl-3 pt-2 space-y-2.5 text-xs font-light text-white/70">
                  <Link href="/terminos-y-condiciones" className="flex items-center gap-2 py-1">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Términos y Condiciones</span>
                  </Link>
                  <Link href="/politica-de-uso-aceptable" className="flex items-center gap-2 py-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Política de Uso Aceptable (PUA)</span>
                  </Link>
                  <Link href="/terminos-y-condiciones/formulario-de-aceptacion" className="flex items-center gap-2 py-1 text-emerald-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Formulario de Aceptación Digital</span>
                  </Link>
                </div>
              )}
            </div>

            <a
              href="/#planes"
              className="block text-sm font-semibold text-white py-2"
            >
              Precios de Hosting
            </a>
          </div>

          {/* Bottom Actions */}
          <div className="space-y-3 pt-4 border-t border-white/[0.08]">
            <a
              href="https://webfixsoluciones.net/cliente/clientarea.php"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-normal text-white bg-white/[0.08] border border-white/[0.12]"
            >
              <User className="w-4 h-4" />
              <span>Ingresar al Área de Clientes</span>
            </a>
            <a
              href="https://webfixsoluciones.net/cliente/cart.php"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-normal text-black bg-white shadow-lg"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Ver Carrito de Compras</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
