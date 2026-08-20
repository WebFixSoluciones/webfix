import Link from "next/link";
import { ArrowRight, Zap, Check } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-24 bg-[#070B18] border-t border-white/[0.04]">
      <div className="w-[90%] max-w-[1700px] mx-auto">
        <div className="rounded-3xl p-10 sm:p-16 text-center space-y-7 relative overflow-hidden bg-gradient-to-b from-[#180d2d] via-[#120822] to-[#0b0e1b] border border-purple-900/30 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00E4B8]/10 border border-[#00E4B8]/30 text-xs font-mono text-[#00E4B8]">
            <Zap className="w-3.5 h-3.5" />
            <span>Activación Inmediata</span>
          </div>

          <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white leading-tight max-w-3xl mx-auto">
            Impulsa el Rendimiento de tu Sitio Web Hoy Mismo
          </h2>

          <p className="text-white/60 font-light text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            LiteSpeed NVMe con garantía de 30 días, SSL gratis y atención al cliente humana 24/7 en español.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#planes"
              className="w-full sm:w-auto px-9 py-4 rounded-xl font-medium text-sm text-white bg-[#1C40F2] hover:bg-[#1534c9] transition-all shadow-[0_0_25px_rgba(28,64,242,0.4)]"
            >
              Comenzar Ahora
            </a>
            <Link
              href="/registro-de-dominios"
              className="w-full sm:w-auto px-9 py-4 rounded-xl font-medium text-sm text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] transition-all"
            >
              Registrar Dominio
            </Link>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-8 text-xs sm:text-sm text-white/50 font-light">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#00E4B8]" />
              Garantía de reembolso de 30 días
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#00E4B8]" />
              Sin contratos forzosos
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#00E4B8]" />
              Migración 100% gratuita
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
