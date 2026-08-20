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
  Cpu,
  RefreshCw,
  HelpCircle,
  Terminal,
  Bot,
  Layers,
  ArrowUpRight,
  Shield
} from "lucide-react";

type ActiveDropdown = "productos" | "desarrolladores" | "recursos" | null;
type ProductTab = "wordpress" | "servidores" | "dominios" | "web" | "email" | "agencias";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<ActiveDropdown>(null);
  const [activeTab, setActiveTab] = useState<ProductTab>("wordpress");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (menu: ActiveDropdown) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled || activeDropdown !== null
          ? "bg-[#05070B]/98 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl py-3"
          : "bg-[#05070B]/70 backdrop-blur-md border-b border-white/[0.04] py-3.5"
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-[90%] max-w-[1700px] mx-auto">
        <div className="flex items-center justify-between h-11">
          {/* Logo & Navigation Links */}
          <div className="flex items-center gap-10">
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

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-normal text-white/80">
              <a
                href="/#planes"
                className="hover:text-white transition-colors"
              >
                Precios
              </a>

              {/* Mega Menu Trigger: Productos (Hostinger style) */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("productos")}
              >
                <button
                  className={`flex items-center gap-1.5 transition-colors cursor-pointer py-1 ${
                    activeDropdown === "productos" || pathname.startsWith("/hosting") || pathname === "/servidor-dedicado"
                      ? "text-white font-medium"
                      : "hover:text-white"
                  }`}
                >
                  <span>Productos</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === "productos" ? "rotate-180 text-white" : "opacity-60"
                    }`}
                  />
                </button>
              </div>

              {/* Desarrolladores Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("desarrolladores")}
              >
                <button
                  className={`flex items-center gap-1.5 transition-colors cursor-pointer py-1 ${
                    activeDropdown === "desarrolladores" ? "text-white font-medium" : "hover:text-white"
                  }`}
                >
                  <span>Desarrolladores</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === "desarrolladores" ? "rotate-180 text-white" : "opacity-60"
                    }`}
                  />
                </button>
              </div>

              {/* Recursos Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("recursos")}
              >
                <button
                  className={`flex items-center gap-1.5 transition-colors cursor-pointer py-1 ${
                    activeDropdown === "recursos" || pathname.startsWith("/terminos") || pathname.startsWith("/politica")
                      ? "text-white font-medium"
                      : "hover:text-white"
                  }`}
                >
                  <span>Recursos</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === "recursos" ? "rotate-180 text-white" : "opacity-60"
                    }`}
                  />
                </button>
              </div>
            </nav>
          </div>

          {/* Right Action Icons & Button (Hostinger style) */}
          <div className="hidden lg:flex items-center gap-5 text-xs font-normal">
            {/* AI / Soporte Pill Button */}
            <a
              href="https://webfixsoluciones.net/cliente/contact.php"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] text-white/90 transition-colors shadow-sm group"
            >
              <Bot className="w-3.5 h-3.5 text-[#00E4B8] group-hover:scale-110 transition-transform" />
              <span>Soporte 24/7 & Asistente</span>
            </a>

            {/* Language & Currency */}
            <div className="flex items-center gap-3 text-white/60">
              <span className="flex items-center gap-1.5">
                <span>🇪🇨</span>
                <span>ES</span>
              </span>
            </div>

            {/* Iniciar Sesión / Ingresar */}
            <a
              href="https://webfixsoluciones.net/cliente/clientarea.php"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs text-white bg-[#1C40F2] hover:bg-[#1534c9] transition-all shadow-[0_0_20px_rgba(28,64,242,0.4)] transform hover:scale-[1.02]"
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

      {/* ── 1. HOSTINGER-STYLE 3-PANE MEGA MENU (PRODUCTOS) ────────────── */}
      {activeDropdown === "productos" && (
        <div
          className="hidden lg:block absolute top-full inset-x-0 bg-[#080A10]/98 backdrop-blur-3xl border-b border-white/[0.08] shadow-[0_40px_90px_-20px_rgba(0,0,0,0.98)] animate-in fade-in slide-in-from-top-2 duration-150"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-[90%] max-w-[1700px] mx-auto py-8">
            <div className="grid grid-cols-12 gap-8 items-stretch">

              {/* ── PANE 1: LEFT VERTICAL CATEGORY TABS ─────────────────── */}
              <div className="col-span-3 space-y-1.5 border-r border-white/[0.06] pr-6">
                <div className="text-[11px] font-mono uppercase tracking-widest text-white/40 pb-2 px-3">
                  Productos
                </div>

                {[
                  { id: "wordpress", label: "WordPress & Cloud", icon: <Zap className="w-4 h-4" /> },
                  { id: "servidores", label: "Servidores & Bare Metal", icon: <Server className="w-4 h-4" /> },
                  { id: "dominios", label: "Dominios & DNS", icon: <Globe className="w-4 h-4" /> },
                  { id: "web", label: "Crear una página web", icon: <Layout className="w-4 h-4" /> },
                  { id: "email", label: "Email Corporativo", icon: <Mail className="w-4 h-4" /> },
                  { id: "agencias", label: "Para agencias (Reseller)", icon: <Layers className="w-4 h-4" /> },
                ].map((tab) => {
                  const isCurrent = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onMouseEnter={() => setActiveTab(tab.id as ProductTab)}
                      className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all text-left cursor-pointer ${
                        isCurrent
                          ? "bg-[#1C40F2] text-white shadow-md shadow-[#1C40F2]/30"
                          : "text-white/70 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      <span className={`${isCurrent ? "text-white" : "text-white/50"}`}>
                        {tab.icon}
                      </span>
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* ── PANE 2: MIDDLE MULTI-COLUMN CONTENT ──────────────────── */}
              <div className="col-span-6 px-2 space-y-6">
                {activeTab === "wordpress" && (
                  <div className="space-y-6">
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-3">
                        Optimizar y Desplegar
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Link
                          href="/hosting-wordpress"
                          className="p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-semibold text-white group-hover:text-white transition-colors">
                              Hosting WordPress
                            </span>
                            <span className="text-[9px] font-bold bg-[#1C40F2]/20 text-[#1C40F2] px-1.5 py-0.2 rounded font-mono">
                              NVMe
                            </span>
                          </div>
                          <p className="text-[11px] font-light text-white/50 leading-relaxed">
                            LiteSpeed Cache en RAM con 45ms TTFB y discos NVMe PCIe 4.0.
                          </p>
                        </Link>

                        <Link
                          href="/hosting-en-ecuador"
                          className="p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-semibold text-white group-hover:text-white transition-colors">
                              Hosting en Ecuador
                            </span>
                            <span className="text-[9px] font-bold bg-[#00E4B8]/15 text-[#00E4B8] px-1.5 py-0.2 rounded font-mono">
                              SRI
                            </span>
                          </div>
                          <p className="text-[11px] font-light text-white/50 leading-relaxed">
                            Ultra-baja latencia local con facturación electrónica SRI autorizada.
                          </p>
                        </Link>
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-3">
                        Crear y Crecer
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Link
                          href="/hosting-gratis"
                          className="p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-semibold text-white group-hover:text-white transition-colors">
                              Hosting Gratis
                            </span>
                            <span className="text-[9px] font-bold bg-[#00E4B8]/15 text-[#00E4B8] px-1.5 py-0.2 rounded font-mono">
                              $0/mes
                            </span>
                          </div>
                          <p className="text-[11px] font-light text-white/50 leading-relaxed">
                            Inicia tu primer sitio web sin ningún costo mensual.
                          </p>
                        </Link>

                        <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-semibold text-white">
                              Migración Gratuita
                            </span>
                            <span className="text-[9px] font-bold bg-white/10 text-white px-1.5 py-0.2 rounded font-mono">
                              100% Gratis
                            </span>
                          </div>
                          <p className="text-[11px] font-light text-white/50 leading-relaxed">
                            Trasladamos tu sitio web y correos desde otro proveedor sin cortes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "servidores" && (
                  <div className="space-y-6">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-3">
                      Infraestructura de Alto Rendimiento
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        href="/servidor-dedicado"
                        className="p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold text-white">
                            Servidores Dedicados Bare Metal
                          </span>
                          <span className="text-[9px] font-bold bg-[#1C40F2]/20 text-[#1C40F2] px-1.5 py-0.2 rounded font-mono">
                            AMD EPYC
                          </span>
                        </div>
                        <p className="text-[11px] font-light text-white/50 leading-relaxed">
                          Hardware 100% dedicado con acceso IPMI / KVM sobre IP y red 1Gbps.
                        </p>
                      </Link>

                      <Link
                        href="/hosting-reseller"
                        className="p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold text-white">
                            Hosting Reseller WHM
                          </span>
                          <span className="text-[9px] font-bold bg-[#00E4B8]/15 text-[#00E4B8] px-1.5 py-0.2 rounded font-mono">
                            Marca Blanca
                          </span>
                        </div>
                        <p className="text-[11px] font-light text-white/50 leading-relaxed">
                          Crea tus propios paquetes y revende hosting bajo tu marca propia.
                        </p>
                      </Link>
                    </div>
                  </div>
                )}

                {activeTab === "dominios" && (
                  <div className="space-y-6">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-3">
                      Registro y Gestión de Dominios
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        href="/registro-de-dominios"
                        className="p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold text-white">
                            Buscador de Dominios
                          </span>
                          <span className="text-[9px] font-bold bg-[#00E4B8]/15 text-[#00E4B8] px-1.5 py-0.2 rounded font-mono">
                            .COM $14.50
                          </span>
                        </div>
                        <p className="text-[11px] font-light text-white/50 leading-relaxed">
                          Registra dominios .com, .ec, .net, .org, .shop con activación inmediata.
                        </p>
                      </Link>

                      <a
                        href="https://webfixsoluciones.net/cliente/cart.php?a=add&domain=transfer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold text-white">
                            Transferir Dominio
                          </span>
                        </div>
                        <p className="text-[11px] font-light text-white/50 leading-relaxed">
                          Renovación transparente y gestión centralizada en WebFix.
                        </p>
                      </a>
                    </div>
                  </div>
                )}

                {activeTab === "web" && (
                  <div className="space-y-6">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-3">
                      Desarrollo Digital Profesional
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        href="/diseno-de-paginas-web"
                        className="p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold text-white">
                            Diseño de Páginas Web
                          </span>
                          <span className="text-[9px] font-bold bg-[#1C40F2]/20 text-[#1C40F2] px-1.5 py-0.2 rounded font-mono">
                            Hosting Incluido
                          </span>
                        </div>
                        <p className="text-[11px] font-light text-white/50 leading-relaxed">
                          Sitios corporativos y tiendas online con 1 año de hosting y dominio gratis.
                        </p>
                      </Link>

                      <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                        <span className="text-xs font-semibold text-white block mb-1">
                          Optimización Core Web Vitals
                        </span>
                        <p className="text-[11px] font-light text-white/50 leading-relaxed">
                          Diseños 100% responsivos y preparados para posicionar en Google.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "email" && (
                  <div className="space-y-6">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-3">
                      Comunicación Corporativa
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        href="/correos-empresarial"
                        className="p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold text-white">
                            Correo Profesional
                          </span>
                          <span className="text-[9px] font-bold bg-[#00E4B8]/15 text-[#00E4B8] px-1.5 py-0.2 rounded font-mono">
                            Antispam AI
                          </span>
                        </div>
                        <p className="text-[11px] font-light text-white/50 leading-relaxed">
                          Cuentas personalizadas (nombre@tuempresa.com) con Webmail y sync móvil.
                        </p>
                      </Link>

                      <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                        <span className="text-xs font-semibold text-white block mb-1">
                          Configuración DNS SPF / DKIM
                        </span>
                        <p className="text-[11px] font-light text-white/50 leading-relaxed">
                          Garantiza que tus correos lleguen a la bandeja de entrada principal.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "agencias" && (
                  <div className="space-y-6">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-3">
                      Soluciones para Agencias y Revendedores
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        href="/hosting-reseller"
                        className="p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold text-white">
                            Panel WHM Marca Blanca
                          </span>
                        </div>
                        <p className="text-[11px] font-light text-white/50 leading-relaxed">
                          DNS privados personalizados y administración ilimitada de clientes.
                        </p>
                      </Link>

                      <Link
                        href="/servidor-dedicado"
                        className="p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                      >
                        <span className="text-xs font-semibold text-white block mb-1">
                          Servidores Dedicados
                        </span>
                        <p className="text-[11px] font-light text-white/50 leading-relaxed">
                          Aislamiento total y recursos de cómputo para proyectos de alta demanda.
                        </p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* ── PANE 3: RIGHT FEATURED PROMO CARD (Hostinger style) ──── */}
              <div className="col-span-3">
                <div className="h-full p-6 rounded-3xl bg-gradient-to-b from-[#0D0F16] via-[#090B10] to-[#05070B] border border-white/[0.08] flex flex-col justify-between relative overflow-hidden group">
                  {/* Subtle Top Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#1C40F2]/20 rounded-full blur-3xl pointer-events-none" />

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-white/40">
                      <span>LITESPEED CLOUD NVME</span>
                      <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                    </div>

                    {/* Central Glowing Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1C40F2] to-[#00E4B8] p-0.5 shadow-lg shadow-[#1C40F2]/20">
                      <div className="w-full h-full bg-[#090B10] rounded-2xl flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-[#00E4B8]" />
                      </div>
                    </div>

                    <h4 className="font-heading font-semibold text-white text-base leading-snug">
                      Hasta 10× más rápido con LiteSpeed y NVMe.
                    </h4>

                    <p className="text-[12px] font-light text-white/50 leading-relaxed">
                      El ecosistema de hosting cloud más potente en Ecuador. Activación automática en segundos.
                    </p>
                  </div>

                  <div className="pt-4 relative z-10">
                    <a
                      href="/#planes"
                      className="w-full py-2.5 rounded-xl font-medium text-xs text-black bg-white hover:bg-zinc-200 transition-all text-center block shadow-md"
                    >
                      Explorar los Planes
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ── 2. DESARROLLADORES DROPDOWN ───────────────────────────────── */}
      {activeDropdown === "desarrolladores" && (
        <div
          className="hidden lg:block absolute top-full inset-x-0 bg-[#080A10]/98 backdrop-blur-3xl border-b border-white/[0.08] shadow-[0_40px_90px_-20px_rgba(0,0,0,0.98)] animate-in fade-in slide-in-from-top-2 duration-150"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-[90%] max-w-[1700px] mx-auto py-8">
            <div className="grid grid-cols-3 gap-6">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Terminal className="w-4 h-4 text-[#00E4B8]" />
                  <span>Acceso SSH & WP-CLI</span>
                </div>
                <p className="text-xs font-light text-white/50 leading-relaxed">
                  Administra plugins, temas y bases de datos desde la línea de comandos con control total.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Cpu className="w-4 h-4 text-[#1C40F2]" />
                  <span>Control de Versiones Git</span>
                </div>
                <p className="text-xs font-light text-white/50 leading-relaxed">
                  Despliega repositorios de GitHub directamente a tu entorno de hosting en producción.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <ShieldCheck className="w-4 h-4 text-[#00E4B8]" />
                  <span>PHP 8.x con OPcache</span>
                </div>
                <p className="text-xs font-light text-white/50 leading-relaxed">
                  Selector de versiones PHP independientes por cada dominio alojado en tu cuenta cPanel.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── 3. RECURSOS DROPDOWN ──────────────────────────────────────── */}
      {activeDropdown === "recursos" && (
        <div
          className="hidden lg:block absolute top-full inset-x-0 bg-[#080A10]/98 backdrop-blur-3xl border-b border-white/[0.08] shadow-[0_40px_90px_-20px_rgba(0,0,0,0.98)] animate-in fade-in slide-in-from-top-2 duration-150"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-[90%] max-w-[1700px] mx-auto py-8">
            <div className="grid grid-cols-3 gap-6">
              <Link
                href="/terminos-y-condiciones"
                className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] space-y-1.5 transition-colors"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <FileText className="w-4 h-4 text-white/60" />
                  <span>Términos y Condiciones Generales</span>
                </div>
                <p className="text-xs font-light text-white/50 leading-relaxed">
                  Marco contractual legal estructurado en 8 capítulos claros.
                </p>
              </Link>

              <Link
                href="/politica-de-uso-aceptable"
                className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] space-y-1.5 transition-colors"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Shield className="w-4 h-4 text-white/60" />
                  <span>Política de Uso Aceptable (PUA)</span>
                </div>
                <p className="text-xs font-light text-white/50 leading-relaxed">
                  Normativas sobre seguridad de red, antispam y contenidos.
                </p>
              </Link>

              <Link
                href="/terminos-y-condiciones/formulario-de-aceptacion"
                className="p-4 rounded-2xl bg-[#00E4B8]/10 hover:bg-[#00E4B8]/15 border border-[#00E4B8]/30 space-y-1.5 transition-colors"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-[#00E4B8]">
                  <Sparkles className="w-4 h-4 text-[#00E4B8]" />
                  <span>Formulario de Aceptación Digital</span>
                </div>
                <p className="text-xs font-light text-white/60 leading-relaxed">
                  Cumplimiento con la Ley LOPDP de Protección de Datos en Ecuador.
                </p>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── MOBILE DRAWER ─────────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[56px] bottom-0 bg-[#05070B]/98 border-t border-white/[0.08] overflow-y-auto z-50 px-6 py-6 space-y-6">
          <div className="space-y-3 text-sm">
            <a href="/#planes" className="block py-2 text-white font-medium">Precios</a>
            <Link href="/hosting-wordpress" className="block py-2 text-white/80 hover:text-white">Hosting WordPress</Link>
            <Link href="/hosting-reseller" className="block py-2 text-white/80 hover:text-white">Hosting Reseller</Link>
            <Link href="/servidor-dedicado" className="block py-2 text-white/80 hover:text-white">Servidores Dedicados</Link>
            <Link href="/registro-de-dominios" className="block py-2 text-white/80 hover:text-white">Dominios</Link>
            <Link href="/correos-empresarial" className="block py-2 text-white/80 hover:text-white">Correos</Link>
            <Link href="/diseno-de-paginas-web" className="block py-2 text-white/80 hover:text-white">Diseño Web</Link>
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
