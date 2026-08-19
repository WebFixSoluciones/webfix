"use client";

import { useState } from "react";
import { Check, Zap, Sparkles, ArrowRight, ShieldCheck, Server } from "lucide-react";
import { WORDPRESS_PLANS, PricingPlan } from "@/data/pricing";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="planes" className="py-20 relative overflow-hidden bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-950/80 border border-brand-500/30 text-xs font-semibold text-brand-300">
            <Zap className="w-3.5 h-3.5 text-brand-400" />
            <span>Precios Claros y Transparentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Elige el Plan de Hosting Perfecto para ti
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Alojamiento optimizado con LiteSpeed, discos NVMe y seguridad Imunify360. Todos los planes incluyen SSL gratis y cPanel.
          </p>

          {/* Monthly / Annual Switch */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <span className={`text-sm font-semibold ${!isAnnual ? "text-white" : "text-slate-400"}`}>
              Facturación Mensual
            </span>
            <button
              type="button"
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 rounded-full bg-slate-800 border border-slate-700 p-1 transition-colors focus:outline-none cursor-pointer"
              aria-label="Cambiar ciclo de facturación"
            >
              <div
                className={`w-6 h-6 rounded-full bg-brand-500 shadow-md transform transition-transform duration-200 ${
                  isAnnual ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-semibold ${isAnnual ? "text-white" : "text-slate-400"}`}>
                Facturación Anual
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold animate-pulse">
                Ahorra 20% + Dominio Gratis*
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {WORDPRESS_PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPriceMonthly : plan.monthlyPrice;
            const periodLabel = "/mes";

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "glass-card border-2 border-brand-500 shadow-2xl shadow-brand-950/80 lg:-translate-y-2"
                    : "glass-card border border-slate-800 hover:border-slate-700"
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-brand-600 to-cyan-500 text-white shadow-lg shadow-brand-600/40">
                      <Sparkles className="w-3.5 h-3.5" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Desc */}
                  <div className="border-b border-slate-800 pb-6 mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-xs sm:text-sm text-slate-400 min-h-[38px] leading-relaxed">
                      {plan.description}
                    </p>

                    {/* Price display */}
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        ${price.toFixed(2)}
                      </span>
                      <span className="text-slate-400 text-sm font-medium">{periodLabel}</span>
                    </div>

                    {isAnnual && plan.originalPrice && (
                      <div className="mt-1 text-xs text-slate-500 flex items-center gap-2">
                        <span className="line-through">Antes ${plan.originalPrice.toFixed(2)}/m</span>
                        <span className="text-emerald-400 font-semibold">Facturado anualmente</span>
                      </div>
                    )}
                  </div>

                  {/* Core Specs Pills */}
                  <div className="grid grid-cols-2 gap-2 mb-6 text-xs text-slate-300">
                    <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
                      <span className="text-slate-500 block">Sitios:</span>
                      <span className="font-semibold text-white">{plan.specs.websites}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
                      <span className="text-slate-500 block">Disco:</span>
                      <span className="font-semibold text-white">{plan.specs.storage}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
                      <span className="text-slate-500 block">RAM:</span>
                      <span className="font-semibold text-white">{plan.specs.ram}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
                      <span className="text-slate-500 block">Copias:</span>
                      <span className="font-semibold text-white">{plan.specs.backups}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Todo lo que incluye:
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Buy Button */}
                <div>
                  <a
                    href={plan.whmcsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm transition-all shadow-lg ${
                      plan.popular
                        ? "text-white bg-gradient-to-r from-brand-600 to-blue-600 hover:from-brand-500 hover:to-blue-500 shadow-brand-600/30 hover:shadow-brand-500/50 transform hover:-translate-y-0.5"
                        : "text-white bg-slate-800 hover:bg-slate-700 border border-slate-700"
                    }`}
                  >
                    <span>CONTRATAR AHORA</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <div className="mt-2 text-center text-[11px] text-slate-500">
                    Activación instantánea tras confirmar el pago
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Other products banner */}
        <div className="mt-14 p-6 rounded-3xl glass-card border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base">¿Necesitas revender hosting o correos masivos?</h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Descubre nuestros planes <strong>Hosting Reseller WHM</strong> con marca blanca o nuestros planes de <strong>Correos Corporativos</strong>.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/hosting-reseller"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
            >
              Ver Reseller WHM
            </a>
            <a
              href="/correos-empresarial"
              className="px-5 py-2.5 rounded-xl bg-brand-600/20 hover:bg-brand-600/30 text-brand-300 hover:text-white text-xs font-semibold border border-brand-500/30 transition-colors"
            >
              Ver Correos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
