import type { Metadata } from "next";
import { Sparkles, Check, ArrowRight, ShieldCheck, Zap, Server } from "lucide-react";
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
    <div className="pt-28 pb-20 bg-tech-grid">
      <section className="py-16 md:py-24 text-center space-y-6 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-bold text-emerald-300">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Plan 100% Gratuito</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Hosting Gratis <span className="text-gradient-blue">Rápido y Confiable</span>
        </h1>

        <p className="text-slate-300 text-lg sm:text-xl leading-relaxed">
          Diseña y publica tu sitio web sin costo mensual. Alojamiento web profesional, Uptime garantizado, panel cPanel en español y certificado SSL gratuito.
        </p>

        {/* Free Card */}
        <div className="pt-10 max-w-lg mx-auto">
          <div className="relative rounded-3xl p-8 glass-card border-2 border-emerald-500 shadow-2xl shadow-emerald-950/80 text-left space-y-6">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs uppercase font-extrabold text-emerald-400 tracking-wider">
                  MÁS VENDIDO FREE
                </span>
                <h3 className="text-2xl font-bold text-white">Plan Free Starter</h3>
              </div>
              <div className="text-right">
                <span className="text-3xl font-extrabold text-white">$0</span>
                <span className="text-slate-400 text-xs block">/mes</span>
              </div>
            </div>

            <p className="text-xs text-slate-400">
              Ideal para empresas o personas iniciando en el mundo digital.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              {FREE_HOSTING_PLAN.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <a
              href={FREE_HOSTING_PLAN.whmcsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
            >
              <span>ACTIVAR HOSTING GRATIS</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion faqs={FREE_FAQS} title="Preguntas Frecuentes sobre Hosting Gratis" />
    </div>
  );
}
