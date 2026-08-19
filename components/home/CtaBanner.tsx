import Link from "next/link";
import { Zap, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 bg-gradient-to-r from-brand-900 via-blue-900 to-slate-900 border border-brand-500/40 shadow-2xl shadow-brand-950/80 text-center space-y-6">
          {/* Background Decorative Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950/80 border border-brand-400/30 text-xs font-bold text-brand-300">
            <Zap className="w-3.5 h-3.5 text-brand-400" />
            <span>Migración Gratuita & Activación Inmediata</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto">
            ¿Listo para llevar tu sitio web al siguiente nivel de velocidad?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Únete a cientos de empresas y desarrolladores que confían en WebFix para hospedar sus proyectos más importantes.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#planes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-brand-600 hover:bg-brand-500 shadow-xl shadow-brand-600/40 transition-all transform hover:-translate-y-0.5"
            >
              <Zap className="w-5 h-5" />
              <span>Comenzar Ahora</span>
            </a>
            <Link
              href="/registro-de-dominios"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600 transition-all"
            >
              <span>Registrar Dominio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300">
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
              <span>Soporte 24/7 en Español</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
