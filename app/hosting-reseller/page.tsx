import type { Metadata } from "next";
import Image from "next/image";
import { Server, Check, ArrowRight, ShieldCheck, Sparkles, Zap, Users, Globe } from "lucide-react";
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
    <div className="pt-28 pb-20 bg-tech-grid">
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-xs font-bold text-purple-300">
                <Server className="w-3.5 h-3.5 text-purple-400" />
                <span>Panel WHM + 100% Marca Blanca</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Inicia tu Propio Negocio de <span className="text-gradient-blue">Hosting Reseller</span>
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Crea tus propios paquetes de hosting, asigna recursos a tus clientes y administra todo desde un potente panel WHM con servidores LiteSpeed y discos NVMe de ultra velocidad.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#planes-reseller"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-600/30 transition-all"
                >
                  <Server className="w-5 h-5" />
                  <span>Ver Planes Reseller</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
                <div>✓ Nameservers Privados</div>
                <div>✓ Cuentas cPanel Ilimitadas</div>
                <div>✓ Migración Gratuita</div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="p-6 rounded-3xl glass-card border border-purple-500/30 shadow-2xl relative">
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
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Planes Reseller WHM con Recursos Garantizados
            </h2>
            <p className="text-slate-400">
              Elige el plan que se adapte al tamaño de tu cartera de clientes y escala en cualquier momento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {RESELLER_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between glass-card border transition-all ${
                  plan.popular
                    ? "border-2 border-purple-500 shadow-2xl shadow-purple-950/80"
                    : "border-slate-800 hover:border-slate-700"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full text-xs font-extrabold uppercase bg-purple-600 text-white shadow-lg">
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
                      <span className="text-slate-400 text-sm font-medium">/mes (anual)</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 text-xs sm:text-sm text-slate-300">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={plan.whmcsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-600/30 transition-all"
                >
                  <span>CONTRATAR PLAN RESELLER</span>
                  <ArrowRight className="w-4 h-4" />
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
