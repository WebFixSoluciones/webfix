import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { TERMS_AND_CONDITIONS } from "@/data/legal";

export const metadata: Metadata = {
  title: "Términos y Condiciones Generales de Prestación de Servicios | WebFix",
  description: "Términos y condiciones legales de contratación de servicios de hosting, dominios y correo en WebFix. Cumplimiento con la Ley LOPDP Ecuador 2021.",
};

export default function TerminosYCondicionesPage() {
  return (
    <div className="pt-28 pb-20 bg-tech-grid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-12 space-y-4 border-b border-slate-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950 border border-brand-500/30 text-xs font-semibold text-brand-300">
            <FileText className="w-3.5 h-3.5 text-brand-400" />
            <span>Marco Contractual Legal</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {TERMS_AND_CONDITIONS.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span>Empresa: <strong className="text-white">{TERMS_AND_CONDITIONS.company}</strong></span>
            <span>Sitio: <strong className="text-white">{TERMS_AND_CONDITIONS.website}</strong></span>
            <span>Vigencia: <strong className="text-emerald-400">{TERMS_AND_CONDITIONS.lastUpdated}</strong></span>
          </div>

          {/* Quick links banner */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <Link
              href="/politica-de-uso-aceptable"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />
              <span>Ver Política de Uso Aceptable (PUA)</span>
            </Link>
            <Link
              href="/terminos-y-condiciones/formulario-de-aceptacion"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-xs font-semibold text-emerald-300 border border-emerald-500/30 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Formulario de Aceptación Digital</span>
            </Link>
          </div>
        </div>

        {/* Chapters Content */}
        <div className="py-12 space-y-10">
          {TERMS_AND_CONDITIONS.chapters.map((chapter) => (
            <div key={chapter.number} className="p-8 rounded-3xl glass-card border border-slate-800 space-y-4">
              <h2 className="text-xl font-bold text-white flex items-baseline gap-2">
                <span className="text-brand-400 font-mono text-sm px-2.5 py-0.5 rounded-md bg-brand-950/80 border border-brand-500/30">
                  Capítulo {chapter.number}
                </span>
                <span>{chapter.title}</span>
              </h2>
              <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                {chapter.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
