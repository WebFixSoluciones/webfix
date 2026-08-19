import Link from "next/link";
import { Zap, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-24 relative overflow-hidden vercel-spotlight vercel-grid">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 bg-zinc-950/90 border border-white/[0.1] shadow-[0_20px_70px_rgba(0,0,0,0.9)] text-center space-y-6">
          {/* Subtle Top Shine */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-cyan-300">
            <Zap className="w-3 h-3 text-cyan-400" />
            <span>Migración Gratuita & Activación Inmediata</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight text-shine max-w-3xl mx-auto">
            Impulsa la Velocidad de tu Proyecto Hoy Mismo.
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            Disfruta de la potencia de LiteSpeed NVMe con garantía de 30 días, SSL gratis ilimitado y soporte técnico especializado 24/7 en español.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#planes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-black bg-white hover:bg-zinc-200 shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)] transition-all transform hover:scale-[1.02]"
            >
              <Zap className="w-4 h-4 fill-black" />
              <span>Comenzar Ahora</span>
            </a>
            <Link
              href="/registro-de-dominios"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-zinc-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] backdrop-blur-xl transition-all"
            >
              <span>Registrar Dominio</span>
              <ArrowRight className="w-4 h-4 text-zinc-400" />
            </Link>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Garantía de 30 días</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Sin contratos forzosos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Soporte 24/7 Humano</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
