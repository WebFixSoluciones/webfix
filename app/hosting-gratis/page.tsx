import type { Metadata } from "next";
import { Sparkles, Check, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { FREE_HOSTING_PLAN } from "@/data/pricing";
import FaqAccordion from "@/components/home/FaqAccordion";
import { FAQItem } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Hosting Gratis en Ecuador | Alojamiento Web Free Tier WebFix",
  description: "Obtén Hosting Gratis con panel cPanel, SSL, instalador de WordPress y 500MB de espacio. Inicia tu proyecto online sin costo mensual.",
};

const FREE_FAQS: FAQItem[] = [
  {
    question: "¿Es realmente 100% gratis el plan?",
    answer: "Sí, el plan Free Hosting Tier tiene un costo de $0.00 al mes. Está diseñado para que estudiantes, emprendedores y nuevos proyectos puedan publicar su primera web sin costo de alojamiento.",
  },
  {
    question: "¿Qué limitaciones tiene el hosting gratuito?",
    answer: "Incluye 1 sitio web, 500 MB de almacenamiento y 5 GB de transferencia mensual. Es ideal para páginas de presentación sencillas. Si tu proyecto crece y requiere más tráfico o espacio, puedes actualizar a un plan WP Starter con un solo clic.",
  },
  {
    question: "¿Puedo usar mi propio dominio en el hosting gratis?",
    answer: "Sí, puedes conectar cualquier nombre de dominio que ya poseas o registrar uno nuevo a través de nuestra plataforma.",
  }
];

export default function HostingGratisPage() {
  return (
    <div className="pt-28 pb-20 vercel-grid">
      <section className="py-16 md:py-24 text-center space-y-6 max-w-4xl mx-auto px-4 sm:px-6 vercel-spotlight">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl text-xs font-mono text-emerald-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Plan 100% Gratuito (Free Tier)</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight text-shine">
          Hosting Gratis <br />
          <span className="text-gradient-cyan">Rápido & Confiable</span>
        </h1>

        <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Publica tu sitio web sin costo mensual. Alojamiento web con cPanel en español, certificado SSL gratis y WordPress listo en 1 clic.
        </p>

        {/* Free Card */}
        <div className="pt-10 max-w-md mx-auto">
          <div className="relative rounded-3xl p-8 bg-zinc-950/90 border-2 border-emerald-500/60 shadow-[0_0_50px_rgba(16,185,129,0.2)] text-left space-y-6">
            <div className="flex justify-between items-center border-b border-white/[0.08] pb-4">
              <div>
                <span className="text-[10px] font-mono font-extrabold text-emerald-400 tracking-wider uppercase">
                  FREE TIER
                </span>
                <h3 className="text-xl font-bold text-white">Plan Free Starter</h3>
              </div>
              <div className="text-right font-mono">
                <span className="text-4xl font-extrabold text-white">$0</span>
                <span className="text-zinc-500 text-xs block">/mes</span>
              </div>
            </div>

            <p className="text-xs text-zinc-400">
              Ideal para pruebas, estudiantes o proyectos personales iniciales.
            </p>

            <ul className="space-y-2.5 text-xs text-zinc-300">
              {FREE_HOSTING_PLAN.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <a
              href={FREE_HOSTING_PLAN.whmcsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-xs text-black bg-white hover:bg-zinc-200 shadow-lg shadow-white/10 transition-all cursor-pointer"
            >
              <span>ACTIVAR HOSTING GRATIS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      <FaqAccordion faqs={FREE_FAQS} title="Preguntas Frecuentes sobre Hosting Gratis" />
    </div>
  );
}
