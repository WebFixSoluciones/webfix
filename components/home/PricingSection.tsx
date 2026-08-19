"use client";

import { useState } from "react";
import { Check, Zap, Sparkles, ArrowRight, Server, ShieldCheck } from "lucide-react";
import { WORDPRESS_PLANS } from "@/data/pricing";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="planes" className="py-24 relative overflow-hidden vercel-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl text-xs font-mono text-cyan-400">
            <Zap className="w-3.5 h-3.5" />
            <span>Planes Transparentes y Flexibles</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight text-shine">
            Hosting Diseñado para Cada Escala
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            Infraestructura con LiteSpeed y NVMe. Cero costos ocultos, SSL gratis ilimitado y activación en segundos.
          </p>

          {/* Vercel-Style Toggle Switch */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex items-center p-1 rounded-full bg-zinc-950/90 border border-white/[0.1] backdrop-blur-xl">
              <button
                type="button"
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  !isAnnual
                    ? "bg-white text-black shadow-md font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Mensual
              </button>
              <button
                type="button"
                onClick={() => setIsAnnual(true)}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isAnnual
                    ? "bg-white text-black shadow-md font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <span>Anual</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.2 rounded-full font-bold">
                  -20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {WORDPRESS_PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPriceMonthly : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "bg-zinc-950/90 border-2 border-blue-500/80 shadow-[0_0_50px_-10px_rgba(0,102,255,0.3)] lg:-translate-y-2"
                    : "glass-panel-interactive"
                }`}
              >
                {/* Popular Highlight Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-blue-600 text-white shadow-[0_0_20px_rgba(0,102,255,0.6)]">
                      <Sparkles className="w-3 h-3" />
                      MÁS POPULAR
                    </span>
                  </div>
                )}

                <div>
                  <div className="border-b border-white/[0.08] pb-6 mb-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white tracking-tight">{plan.name}</h3>
                      {plan.id === "wp-expert" && (
                        <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full">
                          ENTERPRISE
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-400 mt-2 min-h-[34px] leading-relaxed">
                      {plan.description}
                    </p>

                    <div className="mt-5 flex items-baseline gap-1.5">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
                        ${price.toFixed(2)}
                      </span>
                      <span className="text-zinc-500 text-xs font-mono">/mes</span>
                    </div>

                    {isAnnual && (
                      <div className="mt-1 text-[11px] font-mono text-emerald-400">
                        {plan.specs.freeDomain ? "✓ Incluye Dominio .COM Gratis" : "✓ Facturado Anualmente"}
                      </div>
                    )}
                  </div>

                  {/* Specs Matrix */}
                  <div className="grid grid-cols-2 gap-2 mb-6 text-xs font-mono">
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <span className="text-zinc-500 block text-[10px] uppercase">Sitios</span>
                      <span className="text-white font-semibold">{plan.specs.websites}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <span className="text-zinc-500 block text-[10px] uppercase">Disco</span>
                      <span className="text-white font-semibold">{plan.specs.storage}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <span className="text-zinc-500 block text-[10px] uppercase">RAM</span>
                      <span className="text-white font-semibold">{plan.specs.ram}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <span className="text-zinc-500 block text-[10px] uppercase">Backups</span>
                      <span className="text-white font-semibold">{plan.specs.backups}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                      Incluye:
                    </div>
                    <ul className="space-y-2 text-xs text-zinc-300">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <a
                    href={plan.whmcsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-xs transition-all ${
                      plan.popular
                        ? "text-black bg-white hover:bg-zinc-200 shadow-[0_0_25px_rgba(255,255,255,0.4)] transform hover:scale-[1.02]"
                        : "text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1]"
                    }`}
                  >
                    <span>CONTRATAR AHORA</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <div className="mt-2 text-center text-[10px] font-mono text-zinc-500">
                    Activación automática instantánea
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reseller & Custom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl glass-panel-interactive max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">¿Buscas revender o servidores Bare Metal?</h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                Accede a planes <strong>Hosting Reseller WHM</strong> con marca blanca o servidores <strong>Dedicados AMD EPYC</strong>.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/hosting-reseller"
              className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 hover:text-white text-xs font-medium border border-white/[0.08] transition-colors"
            >
              Reseller WHM
            </a>
            <a
              href="/servidor-dedicado"
              className="px-4 py-2 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-semibold shadow-md transition-colors"
            >
              Servidores Dedicados
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
