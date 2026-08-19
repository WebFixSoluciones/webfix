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
  Sparkles
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hostingDropdown, setHostingDropdown] = useState(false);
  const [legalDropdown, setLegalDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
    setHostingDropdown(false);
    setLegalDropdown(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080c14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-40 sm:w-48 h-10 transition-transform group-hover:scale-105">
              <Image
                src="/assets/logo-white.svg"
                alt="Web Fix Hosting y Dominios"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/" ? "text-brand-400 bg-brand-950/50" : "text-slate-300 hover:text-white hover:bg-slate-800/50"
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
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname.startsWith("/hosting") || pathname === "/servidor-dedicado"
                    ? "text-brand-400 bg-brand-950/50"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <span>Hosting & Servidores</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${hostingDropdown ? "rotate-180 text-brand-400" : ""}`} />
              </button>

              {/* Hosting Dropdown Menu */}
              {hostingDropdown && (
                <div className="absolute top-full left-0 mt-1 w-72 rounded-2xl glass-card p-3 shadow-2xl shadow-black/80 border border-slate-700/60 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="space-y-1">
                    <Link
                      href="/hosting-wordpress"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-brand-600/20 text-brand-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-brand-300 transition-colors">
                          Hosting WordPress
                        </div>
                        <div className="text-xs text-slate-400">
                          LiteSpeed + NVMe con 10x más velocidad.
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/hosting-reseller"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-600/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <Server className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                          Hosting Reseller WHM
                        </div>
                        <div className="text-xs text-slate-400">
                          Marca blanca para agencias y revendedores.
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/servidor-dedicado"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-cyan-600/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          Servidores Dedicados
                        </div>
                        <div className="text-xs text-slate-400">
                          Potencia Bare Metal con recursos 100% dedicados.
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/hosting-gratis"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                          Hosting Gratis (Free Tier)
                        </div>
                        <div className="text-xs text-slate-400">
                          Comienza tu proyecto sin costo mensual.
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/hosting-en-ecuador"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group border-t border-slate-800/60 pt-2"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-600/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                          Hosting en Ecuador
                        </div>
                        <div className="text-xs text-slate-400">
                          Baja latencia y facturación local SRI.
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Dominios */}
            <Link
              href="/registro-de-dominios"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/registro-de-dominios" ? "text-brand-400 bg-brand-950/50" : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Globe className="w-4 h-4 text-brand-400" />
              <span>Dominios</span>
            </Link>

            {/* Correos */}
            <Link
              href="/correos-empresarial"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/correos-empresarial" ? "text-brand-400 bg-brand-950/50" : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Mail className="w-4 h-4 text-brand-400" />
              <span>Correos</span>
            </Link>

            {/* Diseño Web */}
            <Link
              href="/diseno-de-paginas-web"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/diseno-de-paginas-web" ? "text-brand-400 bg-brand-950/50" : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Layout className="w-4 h-4 text-brand-400" />
              <span>Diseño Web</span>
            </Link>

            {/* Legal Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLegalDropdown(true)}
              onMouseLeave={() => setLegalDropdown(false)}
            >
              <button
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname.startsWith("/terminos") || pathname.startsWith("/politica")
                    ? "text-brand-400 bg-brand-950/50"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <span>Legal</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${legalDropdown ? "rotate-180 text-brand-400" : ""}`} />
              </button>

              {legalDropdown && (
                <div className="absolute top-full right-0 mt-1 w-64 rounded-2xl glass-card p-3 shadow-2xl shadow-black/80 border border-slate-700/60 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="space-y-1">
                    <Link
                      href="/terminos-y-condiciones"
                      className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-800/80 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                    >
                      <FileText className="w-4 h-4 text-brand-400" />
                      Términos y Condiciones
                    </Link>
                    <Link
                      href="/politica-de-uso-aceptable"
                      className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-800/80 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                    >
                      <ShieldCheck className="w-4 h-4 text-brand-400" />
                      Política de Uso Aceptable (PUA)
                    </Link>
                    <Link
                      href="/terminos-y-condiciones/formulario-de-aceptacion"
                      className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-800/80 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                    >
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      Formulario de Aceptación Legal
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action: WHMCS Client Area Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://webfixsoluciones.net/cliente/clientarea.php"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 shadow-md shadow-brand-600/30 hover:shadow-brand-500/50 transition-all transform hover:-translate-y-0.5"
            >
              <User className="w-4 h-4" />
              <span>Área de Clientes</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://webfixsoluciones.net/cliente/clientarea.php"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-brand-600/20 text-brand-400 hover:bg-brand-600 hover:text-white transition-colors text-xs font-semibold flex items-center gap-1"
            >
              <User className="w-3.5 h-3.5" />
              <span>Clientes</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 focus:outline-none"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] bottom-0 bg-[#080c14]/98 backdrop-blur-xl border-t border-slate-800 px-6 py-6 overflow-y-auto z-40 animate-in fade-in duration-200">
          <div className="space-y-4">
            <Link
              href="/"
              className="block px-4 py-3 rounded-xl bg-slate-900/60 text-white font-medium hover:bg-brand-900/30"
            >
              Inicio
            </Link>

            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 px-4">
                Hosting & Servidores
              </div>
              <div className="grid grid-cols-1 gap-1 pl-2">
                <Link
                  href="/hosting-wordpress"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900/60"
                >
                  <Zap className="w-4 h-4 text-brand-400" />
                  <span>Hosting WordPress</span>
                </Link>
                <Link
                  href="/hosting-reseller"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900/60"
                >
                  <Server className="w-4 h-4 text-purple-400" />
                  <span>Hosting Reseller WHM</span>
                </Link>
                <Link
                  href="/servidor-dedicado"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900/60"
                >
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Servidores Dedicados</span>
                </Link>
                <Link
                  href="/hosting-gratis"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900/60"
                >
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Hosting Gratis</span>
                </Link>
                <Link
                  href="/hosting-en-ecuador"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900/60"
                >
                  <Globe className="w-4 h-4 text-amber-400" />
                  <span>Hosting en Ecuador</span>
                </Link>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 px-4">
                Servicios
              </div>
              <div className="grid grid-cols-1 gap-1 pl-2">
                <Link
                  href="/registro-de-dominios"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900/60"
                >
                  <Globe className="w-4 h-4 text-brand-400" />
                  <span>Registro de Dominios</span>
                </Link>
                <Link
                  href="/correos-empresarial"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900/60"
                >
                  <Mail className="w-4 h-4 text-brand-400" />
                  <span>Correos Corporativos</span>
                </Link>
                <Link
                  href="/diseno-de-paginas-web"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900/60"
                >
                  <Layout className="w-4 h-4 text-brand-400" />
                  <span>Diseño de Páginas Web</span>
                </Link>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 px-4">
                Marco Legal
              </div>
              <div className="grid grid-cols-1 gap-1 pl-2">
                <Link
                  href="/terminos-y-condiciones"
                  className="flex items-center gap-3 px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Términos y Condiciones</span>
                </Link>
                <Link
                  href="/politica-de-uso-aceptable"
                  className="flex items-center gap-3 px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Política de Uso Aceptable</span>
                </Link>
                <Link
                  href="/terminos-y-condiciones/formulario-de-aceptacion"
                  className="flex items-center gap-3 px-4 py-2 rounded-xl text-xs text-emerald-400 hover:text-emerald-300"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Formulario de Aceptación Legal</span>
                </Link>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://webfixsoluciones.net/cliente/clientarea.php"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white bg-brand-600 hover:bg-brand-500 shadow-lg shadow-brand-600/30 text-center"
              >
                <User className="w-5 h-5" />
                <span>Ingresar al Área de Clientes</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
