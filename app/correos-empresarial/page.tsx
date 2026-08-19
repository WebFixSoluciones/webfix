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
    <div className="pt-28 pb-20 vercel-grid">
      <section className="py-16 md:py-24 relative overflow-hidden vercel-spotlight">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl text-xs font-mono text-cyan-400">
            <Mail className="w-3.5 h-3.5" />
            <span>Presencia & Comunicación Corporativa</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight text-shine">
            Correo Profesional con <br />
            <span className="text-gradient-electric">tu Propio Dominio</span>
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Transmite seriedad y confianza absoluta utilizando cuentas como <strong className="text-cyan-300">contacto@tuempresa.com</strong> con filtros antispam avanzados e integración total en móviles.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EMAIL_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all ${
                plan.popular
                  ? "bg-zinc-950/90 border-2 border-blue-500/80 shadow-[0_0_40px_rgba(0,102,255,0.3)]"
                  : "glass-panel-interactive"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-blue-600 text-white shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="border-b border-white/[0.08] pb-6 mb-6">
                  <h3 className="text-xl font-bold text-white mb-1.5">{plan.name}</h3>
                  <p className="text-xs text-zinc-400 min-h-[34px]">
                    {plan.description}
                  </p>

                  <div className="mt-4 flex items-baseline gap-1.5 font-mono">
                    <span className="text-4xl font-extrabold text-white">
                      ${plan.annualPriceMonthly.toFixed(2)}
                    </span>
                    <span className="text-zinc-500 text-xs">/mes</span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-8 text-xs text-zinc-300">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={plan.whmcsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-xs text-black bg-white hover:bg-zinc-200 shadow-md transition-all"
              >
                <span>CONTRATAR CORREO</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Bento Grid */}
      <section className="py-20 border-y border-white/[0.06] bg-zinc-950/40 my-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl glass-panel-interactive space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Sincronización Total</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Accede desde Outlook, iOS, Android y clientes de escritorio con protocolo IMAP seguro.
              </p>
            </div>

            <div className="p-7 rounded-3xl glass-panel-interactive space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Filtro Antispam con IA</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Bloqueo autónomo de spam, virus y enlaces maliciosos antes de llegar a la bandeja de entrada.
              </p>
            </div>

            <div className="p-7 rounded-3xl glass-panel-interactive space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                <Inbox className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Webmail Moderno</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Acceso web rápido desde cualquier navegador con libreta de contactos y respuestas automáticas.
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
