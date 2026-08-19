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
    <div className="pt-28 pb-20 vercel-grid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-12 space-y-4 border-b border-white/[0.08]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl text-xs font-mono text-cyan-400">
            <FileText className="w-3.5 h-3.5" />
            <span>Marco Contractual Legal</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight text-shine">
            {TERMS_AND_CONDITIONS.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500">
            <span>Empresa: <strong className="text-zinc-300">{TERMS_AND_CONDITIONS.company}</strong></span>
            <span>Sitio: <strong className="text-zinc-300">{TERMS_AND_CONDITIONS.website}</strong></span>
            <span>Vigencia: <strong className="text-emerald-400">{TERMS_AND_CONDITIONS.lastUpdated}</strong></span>
          </div>

          {/* Quick links */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <Link
              href="/politica-de-uso-aceptable"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-zinc-300 border border-white/[0.08] transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
              <span>Ver Política de Uso Aceptable (PUA)</span>
            </Link>
            <Link
              href="/terminos-y-condiciones/formulario-de-aceptacion"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-xs font-medium text-emerald-300 border border-emerald-500/30 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Formulario de Aceptación Digital</span>
            </Link>
          </div>
        </div>

        {/* Chapters */}
        <div className="py-12 space-y-6">
          {TERMS_AND_CONDITIONS.chapters.map((chapter) => (
            <div key={chapter.number} className="p-7 sm:p-8 rounded-3xl glass-panel space-y-3">
              <h2 className="text-lg font-bold text-white flex items-baseline gap-2">
                <span className="text-cyan-400 font-mono text-xs px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                  Capítulo {chapter.number}
                </span>
                <span>{chapter.title}</span>
              </h2>
              <div className="text-xs sm:text-sm text-zinc-400 leading-relaxed whitespace-pre-line">
                {chapter.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
