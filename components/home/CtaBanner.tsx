import Link from "next/link";
import { ArrowRight, Zap, Check } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-24 bg-[#070B18] border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-purple rounded-3xl p-8 sm:p-14 text-center space-y-6 relative overflow-hidden border border-purple-900/40">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00E4B8]/10 border border-[#00E4B8]/30 text-xs font-mono text-[#00E4B8]">
            <Zap className="w-3.5 h-3.5" />
            <span>Activación Instantánea</span>
          </div>

          <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-white leading-tight max-w-2xl mx-auto">
            Impulsa el Rendimiento de tu Sitio Web Hoy Mismo
          </h2>

          <p className="text-white/60 font-light text-sm max-w-md mx-auto leading-relaxed">
            LiteSpeed NVMe con garantía de 30 días, SSL gratis y atención al cliente humana 24/7 en español.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="#planes"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium text-xs text-white bg-[#1C40F2] hover:bg-[#1534c9] transition-all shadow-[0_0_20px_rgba(28,64,242,0.4)]"
            >
              Comenzar Ahora
            </a>
            <Link
              href="/registro-de-dominios"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium text-xs text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] transition-all"
            >
              Registrar Dominio
            </Link>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-white/50 font-light">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#00E4B8]" />
              Garantía de reembolso de 30 días
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#00E4B8]" />
              Sin contratos forzosos
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#00E4B8]" />
              Migración 100% gratuita
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
