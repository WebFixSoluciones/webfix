import type { Metadata } from "next";
import { Mail, Check, ArrowRight, ShieldCheck, Sparkles, Lock, Smartphone, Inbox } from "lucide-react";
import { EMAIL_PLANS } from "@/data/pricing";
import FaqAccordion from "@/components/home/FaqAccordion";
import { FAQItem } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Correo Electrónico Empresarial con Dominio Propio en Ecuador",
  description: "Crea correos corporativos seguros con tu propio dominio (nombre@tuempresa.com). Antispam con Inteligencia Artificial, Webmail, IMAP y soporte 24/7.",
};

const EMAIL_FAQS: FAQItem[] = [
  {
    question: "¿Puedo configurar mis correos en mi celular y Outlook?",
    answer: "Sí, todos los correos son 100% compatibles con iPhone (iOS), Android, Microsoft Outlook, Thunderbird, Apple Mail y cualquier cliente de correo mediante protocolos IMAP, POP3 y SMTP seguro.",
  },
  {
    question: "¿Cómo garantizan que mis correos no lleguen a la carpeta de Spam?",
    answer: "Configuramos de forma automatizada los registros SPF, DKIM y DMARC en tus servidores DNS, además de utilizar direcciones IP limpias y filtrado saliente con reputación verificada.",
  },
  {
    question: "¿Qué es el Webmail y cómo accedo a él?",
    answer: "El Webmail es una interfaz web intuitiva que te permite leer, redactar y gestionar tus correos y contactos desde cualquier navegador web sin necesidad de instalar ningún programa adicional.",
  }
];

export default function CorreosEmpresarialPage() {
  return (
    <div className="pt-28 pb-20 bg-tech-grid">
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950/80 border border-brand-500/30 text-xs font-bold text-brand-300">
            <Mail className="w-3.5 h-3.5 text-brand-400" />
            <span>Imagen Corporativa & Confianza Comercial</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Correo Electrónico Profesional con <span className="text-gradient-blue">tu Propio Dominio</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed">
            Transmite seriedad y confianza a tus clientes utilizando correos como <strong className="text-brand-300">contacto@tuempresa.com</strong>. Con protección antispam avanzada y acceso desde cualquier dispositivo.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {EMAIL_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between glass-card border transition-all ${
                  plan.popular
                    ? "border-2 border-brand-500 shadow-2xl shadow-brand-950/80"
                    : "border-slate-800 hover:border-slate-700"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full text-xs font-extrabold uppercase bg-brand-600 text-white shadow-lg">
                      <Sparkles className="w-3.5 h-3.5" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="border-b border-slate-800 pb-6 mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-xs sm:text-sm text-slate-400 min-h-[38px]">
                      {plan.description}
                    </p>

                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white">
                        ${plan.annualPriceMonthly.toFixed(2)}
                      </span>
                      <span className="text-slate-400 text-sm font-medium">/mes</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 text-xs sm:text-sm text-slate-300">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={plan.whmcsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-brand-600 hover:bg-brand-500 shadow-lg shadow-brand-600/30 transition-all"
                >
                  <span>CONTRATAR CORREO</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16 bg-slate-950/60 border-y border-slate-800 my-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-600/20 text-brand-400 flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">Sincronización Total</h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Accede a tus correos desde tu computadora, tablet o teléfono móvil en cualquier momento mediante IMAP sincronizado.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">Filtro Antispam con IA</h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Bloquea el 99.9% de los correos basura, phishing y archivos infectados antes de que lleguen a tu bandeja de entrada.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center">
                <Inbox className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">Webmail Moderno</h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Interfaz web rápida, con libreta de contactos, calendario integrado, respuestas automáticas y filtros personalizados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion faqs={EMAIL_FAQS} title="Preguntas Frecuentes sobre Correos Corporativos" />
    </div>
  );
}
