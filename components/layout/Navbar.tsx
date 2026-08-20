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
  Search,
  Gavel,
  ShoppingBag,
  Code2,
  Smartphone,
  GraduationCap,
  MessageSquare,
  Cloud,
  Layers,
  ArrowUpRight,
  Bot
} from "lucide-react";

type ActiveDropdown = "dominios" | "hosting" | "diseno" | null;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<ActiveDropdown>(null);
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
          {/* Logo & Main Nav (EXACT 5 ITEMS ONLY) */}
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

            {/* Main Navigation Bar: 1. Home, 2. Dominios, 3. Hosting, 4. Correos Empresarial, 5. Diseño Web */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-normal text-white/80">
              {/* 1. Home */}
              <Link
                href="/"
                className={`transition-colors ${pathname === "/" ? "text-white font-medium" : "hover:text-white"}`}
              >
                Home
              </Link>

              {/* 2. Dominios Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("dominios")}
              >
                <button
                  className={`flex items-center gap-1.5 transition-colors cursor-pointer py-1 ${
                    activeDropdown === "dominios" ||
                    pathname.startsWith("/registro-de-dominios") ||
                    pathname.startsWith("/whois") ||
                    pathname.startsWith("/transferencia") ||
                    pathname.startsWith("/subasta")
                      ? "text-white font-medium"
                      : "hover:text-white"
                  }`}
                >
                  <span>Dominios</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === "dominios" ? "rotate-180 text-white" : "opacity-60"
                    }`}
                  />
                </button>
              </div>

              {/* 3. Hosting Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("hosting")}
              >
                <button
                  className={`flex items-center gap-1.5 transition-colors cursor-pointer py-1 ${
                    activeDropdown === "hosting" || pathname.startsWith("/hosting")
                      ? "text-white font-medium"
                      : "hover:text-white"
                  }`}
                >
                  <span>Hosting</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === "hosting" ? "rotate-180 text-white" : "opacity-60"
                    }`}
                  />
                </button>
              </div>

              {/* 4. Correos Empresarial */}
              <Link
                href="/correos-empresarial"
                className={`transition-colors ${
                  pathname === "/correos-empresarial" ? "text-white font-medium" : "hover:text-white"
                }`}
              >
                Correos Empresarial
              </Link>

              {/* 5. Diseño Web Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("diseno")}
              >
                <button
                  className={`flex items-center gap-1.5 transition-colors cursor-pointer py-1 ${
                    activeDropdown === "diseno" ||
                    pathname.startsWith("/diseno") ||
                    pathname.startsWith("/desarrollo") ||
                    pathname.startsWith("/aulas") ||
                    pathname.startsWith("/crm")
                      ? "text-white font-medium"
                      : "hover:text-white"
                  }`}
                >
                  <span>Diseño Web</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === "diseno" ? "rotate-180 text-white" : "opacity-60"
                    }`}
                  />
                </button>
              </div>
            </nav>
          </div>

          {/* Right Action Icons & Button */}
          <div className="hidden lg:flex items-center gap-5 text-xs font-normal">
            <a
              href="https://webfixsoluciones.net/cliente/contact.php"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] text-white/90 transition-colors shadow-sm group"
            >
              <Bot className="w-3.5 h-3.5 text-[#00E4B8] group-hover:scale-110 transition-transform" />
              <span>Soporte 24/7 & Asistente</span>
            </a>

            <div className="flex items-center gap-1.5 text-white/60">
              <span>🇪🇨</span>
              <span>ES</span>
            </div>

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

      {/* ── 1. DOMINIOS MEGA MENU ────────────────────────────────────── */}
      {activeDropdown === "dominios" && (
        <div
          className="hidden lg:block absolute top-full inset-x-0 bg-[#080A10]/98 backdrop-blur-3xl border-b border-white/[0.08] shadow-[0_40px_90px_-20px_rgba(0,0,0,0.98)] animate-in fade-in slide-in-from-top-2 duration-150"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-[90%] max-w-[1700px] mx-auto py-8">
            <div className="grid grid-cols-12 gap-8 items-stretch">
              <div className="col-span-8">
                <div className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-4 pb-1 border-b border-white/[0.06]">
                  Servicios de Dominios
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    href="/registro-de-dominios"
                    className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Globe className="w-4 h-4 text-[#00E4B8]" />
                      <span className="text-sm font-semibold text-white group-hover:text-[#00E4B8] transition-colors">
                        Registro de Dominios
                      </span>
                      <span className="text-[9px] font-bold bg-[#00E4B8]/15 text-[#00E4B8] px-1.5 py-0.2 rounded font-mono">
                        .COM $14.50
                      </span>
                    </div>
                    <p className="text-xs font-light text-white/50 leading-relaxed">
                      Busca y registra tu dominio (.com, .ec, .net, .org, .shop) con activación inmediata.
                    </p>
                  </Link>

                  <Link
                    href="/whois"
                    className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Search className="w-4 h-4 text-[#1C40F2]" />
                      <span className="text-sm font-semibold text-white group-hover:text-white transition-colors">
                        Buscador Whois
                      </span>
                      <span className="text-[9px] font-bold bg-white/10 text-white px-1.5 py-0.2 rounded font-mono">
                        Privacidad
                      </span>
                    </div>
                    <p className="text-xs font-light text-white/50 leading-relaxed">
                      Consulta la información pública de cualquier dominio y protege tu identidad gratis.
                    </p>
                  </Link>

                  <Link
                    href="/transferencia-de-dominios"
                    className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <RefreshCw className="w-4 h-4 text-purple-400" />
                      <span className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                        Transferencia de Dominios
                      </span>
                    </div>
                    <p className="text-xs font-light text-white/50 leading-relaxed">
                      Migra tu dominio hacia WebFix con 1 año de renovación y soporte en español.
                    </p>
                  </Link>

                  <Link
                    href="/subasta-de-dominios"
                    className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Gavel className="w-4 h-4 text-amber-400" />
                      <span className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                        Subasta de Dominios
                      </span>
                      <span className="text-[9px] font-bold bg-amber-500/15 text-amber-300 px-1.5 py-0.2 rounded font-mono">
                        Premium
                      </span>
                    </div>
                    <p className="text-xs font-light text-white/50 leading-relaxed">
                      Adquiere dominios premium de alta autoridad y marcas cortas listas para producción.
                    </p>
                  </Link>
                </div>
              </div>

              {/* Promo Card */}
              <div className="col-span-4">
                <div className="h-full p-6 rounded-3xl bg-gradient-to-b from-[#0D0F16] via-[#090B10] to-[#05070B] border border-white/[0.08] flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-[11px] font-mono text-[#00E4B8] uppercase tracking-wider block">
                      DNS Anycast Global
                    </span>
                    <h4 className="font-heading font-semibold text-white text-lg leading-snug">
                      Propagación en Segundos & Privacidad Whois
                    </h4>
                    <p className="text-xs font-light text-white/50 leading-relaxed">
                      Todos los dominios registrados en WebFix incluyen gestión DNS en tiempo real y protección de datos gratuita.
                    </p>
                  </div>
                  <Link
                    href="/registro-de-dominios"
                    className="w-full py-2.5 rounded-xl font-medium text-xs text-black bg-white hover:bg-zinc-200 transition-all text-center block shadow-md mt-4"
                  >
                    Buscar Dominio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── 2. HOSTING MEGA MENU ─────────────────────────────────────── */}
      {activeDropdown === "hosting" && (
        <div
          className="hidden lg:block absolute top-full inset-x-0 bg-[#080A10]/98 backdrop-blur-3xl border-b border-white/[0.08] shadow-[0_40px_90px_-20px_rgba(0,0,0,0.98)] animate-in fade-in slide-in-from-top-2 duration-150"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-[90%] max-w-[1700px] mx-auto py-8">
            <div className="grid grid-cols-12 gap-8 items-stretch">
              <div className="col-span-8">
                <div className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-4 pb-1 border-b border-white/[0.06]">
                  Plataformas de Hosting
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <Link
                    href="/hosting-wordpress"
                    className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Zap className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-semibold text-white group-hover:text-white">Hosting WordPress</span>
                    </div>
                    <p className="text-[11px] font-light text-white/50 leading-relaxed">
                      LiteSpeed + LSCache con 45ms TTFB y discos NVMe.
                    </p>
                  </Link>

                  <Link
                    href="/hosting-gratis"
                    className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Sparkles className="w-4 h-4 text-[#00E4B8]" />
                      <span className="text-xs font-semibold text-white group-hover:text-[#00E4B8]">Hosting Gratis</span>
                    </div>
                    <p className="text-[11px] font-light text-white/50 leading-relaxed">
                      Plan $0/mes para iniciar proyectos personales.
                    </p>
                  </Link>

                  <Link
                    href="/hosting-vps"
                    className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Cpu className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-semibold text-white group-hover:text-cyan-300">Hosting VPS</span>
                    </div>
                    <p className="text-[11px] font-light text-white/50 leading-relaxed">
                      Servidores virtuales escalables con acceso root total.
                    </p>
                  </Link>

                  <Link
                    href="/hosting-reseller"
                    className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Layers className="w-4 h-4 text-purple-400" />
                      <span className="text-xs font-semibold text-white group-hover:text-purple-300">Hosting Reseller</span>
                    </div>
                    <p className="text-[11px] font-light text-white/50 leading-relaxed">
                      Marca blanca 100% con panel WHM y cPanel.
                    </p>
                  </Link>

                  <Link
                    href="/hosting-moodle"
                    className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <GraduationCap className="w-4 h-4 text-amber-400" />
                      <span className="text-xs font-semibold text-white group-hover:text-amber-300">Hosting Moodle</span>
                    </div>
                    <p className="text-[11px] font-light text-white/50 leading-relaxed">
                      Optimizado para campus virtuales y alta concurrencia.
                    </p>
                  </Link>

                  <Link
                    href="/hosting-cloud"
                    className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Cloud className="w-4 h-4 text-[#00E4B8]" />
                      <span className="text-xs font-semibold text-white group-hover:text-[#00E4B8]">Hosting Cloud</span>
                    </div>
                    <p className="text-[11px] font-light text-white/50 leading-relaxed">
                      Recursos elásticos aislados con alta disponibilidad.
                    </p>
                  </Link>
                </div>
              </div>

              {/* Promo Card */}
              <div className="col-span-4">
                <div className="h-full p-6 rounded-3xl bg-gradient-to-b from-[#0D0F16] via-[#090B10] to-[#05070B] border border-white/[0.08] flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-[11px] font-mono text-[#00E4B8] uppercase tracking-wider block">
                      LiteSpeed Enterprise
                    </span>
                    <h4 className="font-heading font-semibold text-white text-lg leading-snug">
                      Garantía de 30 días & Migración 100% Gratis
                    </h4>
                    <p className="text-xs font-light text-white/50 leading-relaxed">
                      Trasladamos tu sitio web y correos sin cortes de servicio. Todos los planes incluyen cPanel en español y SSL gratis.
                    </p>
                  </div>
                  <a
                    href="/#planes"
                    className="w-full py-2.5 rounded-xl font-medium text-xs text-white bg-[#1C40F2] hover:bg-[#1534c9] transition-all text-center block shadow-md mt-4"
                  >
                    Ver Todos los Planes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── 3. DISEÑO WEB MEGA MENU ──────────────────────────────────── */}
      {activeDropdown === "diseno" && (
        <div
          className="hidden lg:block absolute top-full inset-x-0 bg-[#080A10]/98 backdrop-blur-3xl border-b border-white/[0.08] shadow-[0_40px_90px_-20px_rgba(0,0,0,0.98)] animate-in fade-in slide-in-from-top-2 duration-150"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-[90%] max-w-[1700px] mx-auto py-8">
            <div className="grid grid-cols-12 gap-8 items-stretch">
              <div className="col-span-8">
                <div className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-4 pb-1 border-b border-white/[0.06]">
                  Soluciones de Diseño y Desarrollo
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <Link
                    href="/diseno-de-paginas-web"
                    className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Layout className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-semibold text-white group-hover:text-white">Web Corporativo</span>
                    </div>
                    <p className="text-[11px] font-light text-white/50 leading-relaxed">
                      Sitios modernos autoadministrables con hosting y dominio gratis.
                    </p>
                  </Link>

                  <Link
                    href="/diseno-ecommerce"
                    className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <ShoppingBag className="w-4 h-4 text-[#00E4B8]" />
                      <span className="text-xs font-semibold text-white group-hover:text-[#00E4B8]">Diseño E-commerce</span>
                    </div>
                    <p className="text-[11px] font-light text-white/50 leading-relaxed">
                      Tiendas online con pasarelas de pago (tarjetas, PayPal, bancos).
                    </p>
                  </Link>

                  <Link
                    href="/desarrollo-de-software"
                    className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Code2 className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-semibold text-white group-hover:text-cyan-300">Desarrollo Software</span>
                    </div>
                    <p className="text-[11px] font-light text-white/50 leading-relaxed">
                      Sistemas a medida, paneles administrativos y APIs robustas.
                    </p>
                  </Link>

                  <Link
                    href="/desarrollo-de-apps"
                    className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Smartphone className="w-4 h-4 text-purple-400" />
                      <span className="text-xs font-semibold text-white group-hover:text-purple-300">Desarrollo de APPs</span>
                    </div>
                    <p className="text-[11px] font-light text-white/50 leading-relaxed">
                      Aplicaciones móviles nativas e híbridas para iOS y Android.
                    </p>
                  </Link>

                  <Link
                    href="/aulas-virtuales"
                    className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <GraduationCap className="w-4 h-4 text-amber-400" />
                      <span className="text-xs font-semibold text-white group-hover:text-amber-300">Aulas Virtuales</span>
                    </div>
                    <p className="text-[11px] font-light text-white/50 leading-relaxed">
                      Plataformas educativas LMS Moodle listas para impartir cursos.
                    </p>
                  </Link>

                  <Link
                    href="/crm-whatsapp"
                    className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/[0.12] transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <MessageSquare className="w-4 h-4 text-[#00E4B8]" />
                      <span className="text-xs font-semibold text-white group-hover:text-[#00E4B8]">CRM WhatsApp</span>
                    </div>
                    <p className="text-[11px] font-light text-white/50 leading-relaxed">
                      Multi-agente, chatbots automáticos y embudo de ventas.
                    </p>
                  </Link>
                </div>
              </div>

              {/* Promo Card */}
              <div className="col-span-4">
                <div className="h-full p-6 rounded-3xl bg-gradient-to-b from-[#0D0F16] via-[#090B10] to-[#05070B] border border-white/[0.08] flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-[11px] font-mono text-[#00E4B8] uppercase tracking-wider block">
                      Soluciones Digitales
                    </span>
                    <h4 className="font-heading font-semibold text-white text-lg leading-snug">
                      Convierte Visitas en Clientes y Automatiza tu Empresa
                    </h4>
                    <p className="text-xs font-light text-white/50 leading-relaxed">
                      Diseñamos tu proyecto con la máxima velocidad, arquitectura escalable y soporte continuo.
                    </p>
                  </div>
                  <Link
                    href="/diseno-de-paginas-web"
                    className="w-full py-2.5 rounded-xl font-medium text-xs text-white bg-[#1C40F2] hover:bg-[#1534c9] transition-all text-center block shadow-md mt-4"
                  >
                    Cotizar Proyecto
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── MOBILE DRAWER ─────────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[56px] bottom-0 bg-[#05070B]/98 border-t border-white/[0.08] overflow-y-auto z-50 px-6 py-6 space-y-6">
          <div className="space-y-3 text-sm">
            <Link href="/" className="block py-2 text-white font-medium">Home</Link>
            
            {/* Dominios Mobile */}
            <div className="pt-2 border-t border-white/[0.06]">
              <span className="text-[11px] font-mono uppercase text-[#00E4B8] block mb-2">Dominios</span>
              <Link href="/registro-de-dominios" className="block py-1.5 text-white/70 hover:text-white">Registro de Dominios</Link>
              <Link href="/whois" className="block py-1.5 text-white/70 hover:text-white">Whois</Link>
              <Link href="/transferencia-de-dominios" className="block py-1.5 text-white/70 hover:text-white">Transferencia de Dominios</Link>
              <Link href="/subasta-de-dominios" className="block py-1.5 text-white/70 hover:text-white">Subasta de Dominios</Link>
            </div>

            {/* Hosting Mobile */}
            <div className="pt-2 border-t border-white/[0.06]">
              <span className="text-[11px] font-mono uppercase text-[#00E4B8] block mb-2">Hosting</span>
              <Link href="/hosting-wordpress" className="block py-1.5 text-white/70 hover:text-white">Hosting WordPress</Link>
              <Link href="/hosting-gratis" className="block py-1.5 text-white/70 hover:text-white">Hosting Gratis</Link>
              <Link href="/hosting-vps" className="block py-1.5 text-white/70 hover:text-white">Hosting VPS</Link>
              <Link href="/hosting-reseller" className="block py-1.5 text-white/70 hover:text-white">Hosting Reseller</Link>
              <Link href="/hosting-moodle" className="block py-1.5 text-white/70 hover:text-white">Hosting Moodle</Link>
              <Link href="/hosting-cloud" className="block py-1.5 text-white/70 hover:text-white">Hosting Cloud</Link>
            </div>

            {/* Correos Mobile */}
            <div className="pt-2 border-t border-white/[0.06]">
              <Link href="/correos-empresarial" className="block py-2 text-white/90 hover:text-white">Correos Empresarial</Link>
            </div>

            {/* Diseño Web Mobile */}
            <div className="pt-2 border-t border-white/[0.06]">
              <span className="text-[11px] font-mono uppercase text-[#00E4B8] block mb-2">Diseño Web</span>
              <Link href="/diseno-de-paginas-web" className="block py-1.5 text-white/70 hover:text-white">Diseño Web Corporativo</Link>
              <Link href="/diseno-ecommerce" className="block py-1.5 text-white/70 hover:text-white">Diseño E-commerce</Link>
              <Link href="/desarrollo-de-software" className="block py-1.5 text-white/70 hover:text-white">Desarrollo de Software</Link>
              <Link href="/desarrollo-de-apps" className="block py-1.5 text-white/70 hover:text-white">Desarrollo de APPs</Link>
              <Link href="/aulas-virtuales" className="block py-1.5 text-white/70 hover:text-white">Aulas Virtuales</Link>
              <Link href="/crm-whatsapp" className="block py-1.5 text-white/70 hover:text-white">CRM WhatsApp</Link>
            </div>
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
