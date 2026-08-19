import type { Metadata } from "next";
import Image from "next/image";
import { Server, Check, ArrowRight, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { RESELLER_PLANS } from "@/data/pricing";
import FaqAccordion from "@/components/home/FaqAccordion";
import { FAQItem } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Hosting Reseller WHM en Ecuador | Inicia tu Negocio de Hosting",
  description: "Hosting Reseller con panel WHM en español, 100% marca blanca, discos NVMe, servidores LiteSpeed y migración gratuita para revendedores.",
};

const RESELLER_FAQS: FAQItem[] = [
  {
    question: "¿Qué es el Hosting Reseller y cómo funciona?",
    answer: "El Hosting Reseller te permite revender planes de alojamiento web a tus propios clientes bajo tu propia marca y precios. Recibes acceso al panel WHM (WebHost Manager) donde puedes crear, modificar y suspender cuentas cPanel independientes para cada uno de tus clientes.",
  },
  {
    question: "¿Es 100% marca blanca?",
    answer: "Sí. Tus clientes nunca sabrán que estás utilizando la infraestructura de WebFix. Puedes configurar tus propios DNS personalizados (ns1.tudominio.com y ns2.tudominio.com) y personalizar los logos de cPanel.",
  },
  {
    question: "¿Puedo migrar las cuentas cPanel de mis clientes actuales?",
    answer: "¡Por supuesto! Nuestro equipo de ingenieros migra todas las cuentas cPanel de tus clientes de forma completamente gratuita y transparente.",
  }
];

export default function HostingResellerPage() {
  return (
    <div className="pt-28 pb-20 vercel-grid">
      <section className="py-16 md:py-24 relative overflow-hidden vercel-spotlight-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl text-xs font-mono text-purple-300">
                <Server className="w-3.5 h-3.5 text-purple-400" />
                <span>Panel WHM + 100% Marca Blanca</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight text-shine">
                Inicia tu Propio Negocio de <br />
                <span className="text-gradient-electric">Hosting Reseller</span>
              </h1>

              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Crea tus propios paquetes de hosting, asigna recursos a tus clientes y administra todo desde un potente panel WHM con servidores LiteSpeed y discos NVMe de ultra velocidad.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <a
                  href="#planes-reseller"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-black bg-white hover:bg-zinc-200 shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)] transition-all transform hover:scale-[1.02]"
                >
                  <Server className="w-4 h-4" />
                  <span>Ver Planes Reseller</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
                <div>✓ Nameservers Privados</div>
                <div>✓ Cuentas cPanel Ilimitadas</div>
                <div>✓ Migración Gratuita</div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="p-6 rounded-3xl glass-panel-interactive border border-purple-500/20 shadow-2xl relative">
                <div className="relative w-full h-64 sm:h-72">
                  <Image
                    src="/assets/vps.png"
                    alt="Hosting Reseller WebFix"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="planes-reseller" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-shine">
              Planes Reseller WHM
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm">
              Escala la infraestructura a medida que crecen tus clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {RESELLER_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all ${
                  plan.popular
                    ? "bg-zinc-950/90 border-2 border-purple-500/80 shadow-[0_0_40px_rgba(168,85,247,0.3)]"
                    : "glass-panel-interactive"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-purple-600 text-white shadow-lg">
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
                      <span className="text-zinc-500 text-xs">/mes (anual)</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-8 text-xs text-zinc-300">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={plan.whmcsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-xs text-white bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-600/30 transition-all"
                >
                  <span>CONTRATAR PLAN RESELLER</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion faqs={RESELLER_FAQS} title="Preguntas Frecuentes sobre Hosting Reseller" />
    </div>
  );
}
