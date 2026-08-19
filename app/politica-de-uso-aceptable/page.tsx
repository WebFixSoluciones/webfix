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
    <div className="pt-28 pb-20 vercel-grid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 space-y-4 border-b border-white/[0.08]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl text-xs font-mono text-cyan-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Seguridad & Uso de Red</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight text-shine">
            {ACCEPTABLE_USE_POLICY.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500">
            <span>Empresa: <strong className="text-zinc-300">{ACCEPTABLE_USE_POLICY.company}</strong></span>
            <span>Sitio: <strong className="text-zinc-300">{ACCEPTABLE_USE_POLICY.website}</strong></span>
            <span>Actualizado: <strong className="text-emerald-400">{ACCEPTABLE_USE_POLICY.lastUpdated}</strong></span>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-3">
            <Link
              href="/terminos-y-condiciones"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-zinc-300 border border-white/[0.08] transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-400" />
              <span>Ver Términos y Condiciones</span>
            </Link>
            <Link
              href="/terminos-y-condiciones/formulario-de-aceptacion"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-xs font-medium text-emerald-300 border border-emerald-500/30 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Formulario de Aceptación</span>
            </Link>
          </div>
        </div>

        <div className="py-12 space-y-6">
          {ACCEPTABLE_USE_POLICY.sections.map((sec, idx) => (
            <div key={idx} className="p-7 sm:p-8 rounded-3xl glass-panel space-y-3">
              <h2 className="text-lg font-bold text-white">
                {sec.title}
              </h2>
              <div className="text-xs sm:text-sm text-zinc-400 leading-relaxed whitespace-pre-line">
                {sec.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
