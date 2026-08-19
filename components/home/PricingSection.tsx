"use client";

import { useState } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { WORDPRESS_PLANS } from "@/data/pricing";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="planes" className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16 space-y-4">
          <p className="text-[11px] uppercase tracking-widest font-normal text-white/40">
            Planes y precios
          </p>
          <h2 className="font-heading font-semibold text-white" style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}>
            Hosting diseñado para cada escala
          </h2>
          <p className="text-white/50 font-light text-base leading-relaxed max-w-lg">
            Infraestructura con LiteSpeed y NVMe. Sin costos ocultos, SSL gratis ilimitado y activación en segundos.
          </p>

          {/* Toggle */}
          <div className="pt-4 inline-flex items-center bg-white/[0.04] border border-white/[0.08] rounded-full p-1">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-normal transition-all ${
                !isAnnual ? "bg-white text-black" : "text-white/50 hover:text-white/80"
              }`}
            >
              Mensual
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-normal transition-all ${
                isAnnual ? "bg-white text-black" : "text-white/50 hover:text-white/80"
              }`}
            >
              Anual
              <span className="text-[10px] font-normal text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded-full">
                −20%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
          {WORDPRESS_PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPriceMonthly : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between border transition-all duration-300 ${
                  plan.popular
                    ? "bg-white/[0.04] border-white/20 shadow-[0_0_40px_-10px_rgba(255,255,255,0.08)]"
                    : "bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.03]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-normal uppercase tracking-widest bg-white text-black">
                      <Sparkles className="w-3 h-3" />
                      Más popular
                    </span>
                  </div>
                )}

                <div>
                  <div className="pb-6 mb-6 border-b border-white/[0.06]">
                    <h3 className="font-heading font-semibold text-white text-xl">{plan.name}</h3>
                    <p className="text-white/40 font-light text-sm mt-2 leading-relaxed min-h-[40px]">
                      {plan.description}
                    </p>
                    <div className="mt-6 flex items-baseline gap-2">
                      <span className="font-heading font-semibold text-white text-5xl">${price.toFixed(2)}</span>
                      <span className="text-white/30 font-light text-sm">/mes</span>
                    </div>
                    {isAnnual && plan.specs.freeDomain && (
                      <p className="mt-1.5 text-[12px] font-light text-emerald-400/80">
                        ✓ Dominio .COM gratis incluido
                      </p>
                    )}
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {[
                      { label: "Sitios", val: plan.specs.websites },
                      { label: "Disco", val: plan.specs.storage },
                      { label: "RAM", val: plan.specs.ram },
                      { label: "Backups", val: plan.specs.backups },
                    ].map((s) => (
                      <div key={s.label} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                        <span className="block text-[10px] font-light text-white/30 uppercase tracking-wider">{s.label}</span>
                        <span className="block text-sm font-normal text-white mt-0.5">{s.val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-8">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm font-light text-white/60">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={plan.whmcsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-normal transition-all ${
                    plan.popular
                      ? "bg-white text-black hover:bg-white/90"
                      : "bg-white/[0.06] text-white hover:bg-white/[0.1] border border-white/[0.08]"
                  }`}
                >
                  Contratar ahora
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
