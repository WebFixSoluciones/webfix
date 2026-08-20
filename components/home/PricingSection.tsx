"use client";

import { useState } from "react";
import { Check, Sparkles, Zap, ArrowRight } from "lucide-react";
import { WORDPRESS_PLANS } from "@/data/pricing";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="planes" className="py-24 bg-[#070B18]">
      <div className="w-[90%] max-w-[1700px] mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-[11px] uppercase tracking-widest font-mono text-[#00E4B8]">
            Planes de Hosting WordPress
          </p>
          <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white">
            Hosting de Alta Velocidad LiteSpeed
          </h2>
          <p className="text-white/60 font-light text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Almacenamiento NVMe PCIe 4.0, SSL ilimitado gratis, copias automáticas y soporte técnico 24/7.
          </p>

          {/* Toggle */}
          <div className="pt-4 inline-flex items-center bg-[#140c24] border border-purple-900/40 rounded-full p-1">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-xs font-medium transition-all ${
                !isAnnual ? "bg-[#1C40F2] text-white shadow-md" : "text-white/60 hover:text-white"
              }`}
            >
              Mensual
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-xs font-medium transition-all ${
                isAnnual ? "bg-[#1C40F2] text-white shadow-md" : "text-white/60 hover:text-white"
              }`}
            >
              <span>Anual</span>
              <span className="text-[10px] font-bold text-[#00E4B8] bg-[#00E4B8]/15 px-2 py-0.5 rounded-full font-mono">
                −20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {WORDPRESS_PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPriceMonthly : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between relative bg-gradient-to-b from-[#180d2d] via-[#120822] to-[#0b0e1b] border transition-all duration-300 ${
                  plan.popular
                    ? "border-[#00E4B8]/60 shadow-[0_0_45px_rgba(0,228,184,0.15)] lg:-translate-y-2"
                    : "border-purple-900/30 hover:border-purple-800/60"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-[#00E4B8] text-[#070B18] shadow-lg">
                      <Sparkles className="w-3.5 h-3.5" />
                      MÁS POPULAR
                    </span>
                  </div>
                )}

                <div>
                  <div className="border-b border-white/[0.08] pb-6 mb-6">
                    <h3 className="font-heading font-semibold text-2xl text-white">{plan.name}</h3>
                    <p className="text-white/60 font-light text-xs sm:text-sm mt-2 min-h-[36px] leading-relaxed">
                      {plan.description}
                    </p>

                    <div className="mt-6 flex items-baseline gap-1.5">
                      <span className="text-4xl sm:text-5xl font-extrabold text-[#00E4B8] font-mono">
                        ${price.toFixed(2)}
                      </span>
                      <span className="text-white/50 text-xs font-mono">/mes</span>
                    </div>

                    {isAnnual && (
                      <div className="mt-2 text-xs text-[#00E4B8] font-light">
                        {plan.specs.freeDomain ? "✓ Incluye Dominio .COM Gratis" : "✓ Facturado anualmente"}
                      </div>
                    )}
                  </div>

                  {/* Specs Matrix */}
                  <div className="grid grid-cols-2 gap-2.5 mb-6 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-black/40 border border-white/[0.05]">
                      <span className="text-white/40 block text-[10px] uppercase font-mono">Sitios</span>
                      <span className="text-white font-medium">{plan.specs.websites}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-black/40 border border-white/[0.05]">
                      <span className="text-white/40 block text-[10px] uppercase font-mono">Disco</span>
                      <span className="text-white font-medium">{plan.specs.storage}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-black/40 border border-white/[0.05]">
                      <span className="text-white/40 block text-[10px] uppercase font-mono">RAM</span>
                      <span className="text-white font-medium">{plan.specs.ram}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-black/40 border border-white/[0.05]">
                      <span className="text-white/40 block text-[10px] uppercase font-mono">Backups</span>
                      <span className="text-white font-medium">{plan.specs.backups}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8 text-xs sm:text-[13px] font-light text-white/80">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#00E4B8] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={plan.whmcsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-5 rounded-xl font-medium text-xs sm:text-sm text-center transition-all ${
                    plan.popular
                      ? "bg-[#1C40F2] text-white hover:bg-[#1534c9] shadow-[0_0_25px_rgba(28,64,242,0.4)] transform hover:scale-[1.02]"
                      : "bg-[#140c24] text-white hover:bg-[#1a0f30] border border-purple-900/40"
                  }`}
                >
                  Contratar Plan
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
