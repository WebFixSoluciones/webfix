import Link from "next/link";
import Image from "next/image";
import { Zap, ShieldCheck, CheckCircle2, ArrowRight, Server, Sparkles, Terminal, Activity, Lock } from "lucide-react";
import DomainSearchBox from "./DomainSearchBox";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden vercel-spotlight vercel-grid">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[380px] bg-gradient-to-b from-blue-600/20 via-cyan-500/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 -left-40 w-[450px] h-[450px] bg-purple-600/10 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Vercel-Style Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.1] backdrop-blur-xl text-xs text-zinc-300 shadow-inner group hover:border-white/[0.2] transition-colors">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="font-medium">Infraestructura Cloud LiteSpeed NVMe en Ecuador</span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          </div>

          {/* Vercel Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] text-shine">
            La Plataforma de Hosting <br />
            <span className="text-gradient-electric">Creada para la Velocidad.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Servidores LiteSpeed Enterprise con discos NVMe PCIe 4.0, cPanel en español, copias automáticas y seguridad Imunify360. Rendimiento extremo y 99.9% de uptime garantizado.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="#planes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-black bg-white hover:bg-zinc-200 shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)] transition-all transform hover:scale-[1.02]"
            >
              <Zap className="w-4 h-4 fill-black" />
              <span>Ver Planes desde $3.75/mes</span>
            </a>

            <Link
              href="/registro-de-dominios"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-zinc-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.18] backdrop-blur-xl transition-all"
            >
              <span>Buscar Dominio</span>
              <ArrowRight className="w-4 h-4 text-zinc-400" />
            </Link>
          </div>

          {/* Minimal Key Points */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-4 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Dominio .COM Gratis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>SSL Ilimitado</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Migración 100% Gratis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Factura SRI Ecuador</span>
            </div>
          </div>
        </div>

        {/* Floating Domain Search Capsule */}
        <div className="mt-16 max-w-4xl mx-auto">
          <DomainSearchBox />
        </div>
      </div>
    </section>
  );
}
