import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, FileText, ArrowRight, Sparkles } from "lucide-react";
import { ACCEPTABLE_USE_POLICY } from "@/data/legal";

export const metadata: Metadata = {
  title: "Política de Uso Aceptable (PUA) | WebFix Hosting y Dominios",
  description: "Normativas de uso de servidores, política antispam, contenidos prohibidos y seguridad en la red de WebFix.",
};

export default function PoliticaDeUsoAceptablePage() {
  return (
    <div className="pt-28 pb-20 bg-tech-grid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 space-y-4 border-b border-slate-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-xs font-semibold text-cyan-300">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Seguridad & Uso de Red</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {ACCEPTABLE_USE_POLICY.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span>Empresa: <strong className="text-white">{ACCEPTABLE_USE_POLICY.company}</strong></span>
            <span>Sitio: <strong className="text-white">{ACCEPTABLE_USE_POLICY.website}</strong></span>
            <span>Actualizado: <strong className="text-emerald-400">{ACCEPTABLE_USE_POLICY.lastUpdated}</strong></span>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-3">
            <Link
              href="/terminos-y-condiciones"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-brand-400" />
              <span>Ver Términos y Condiciones</span>
            </Link>
            <Link
              href="/terminos-y-condiciones/formulario-de-aceptacion"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-xs font-semibold text-emerald-300 border border-emerald-500/30 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Formulario de Aceptación</span>
            </Link>
          </div>
        </div>

        <div className="py-12 space-y-8">
          {ACCEPTABLE_USE_POLICY.sections.map((sec, idx) => (
            <div key={idx} className="p-8 rounded-3xl glass-card border border-slate-800 space-y-4">
              <h2 className="text-xl font-bold text-white">
                {sec.title}
              </h2>
              <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                {sec.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
