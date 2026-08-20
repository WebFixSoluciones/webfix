"use client";

import { useState } from "react";
import { Gavel, Check, ArrowRight, ShieldCheck, Sparkles, TrendingUp, DollarSign, Award, Clock, Search } from "lucide-react";
import FaqAccordion from "@/components/home/FaqAccordion";
import { FAQItem } from "@/data/faqs";

const AUCTION_FAQS: FAQItem[] = [
  {
    question: "¿Qué es una subasta de dominios y cómo funciona?",
    answer: "Las subastas de dominios permiten adquirir nombres de dominio premium que ya han sido registrados anteriormente pero que sus dueños han puesto a la venta o han expirado, permitiendo comprar marcas cortas, memorables y con antigüedad SEO.",
  },
  {
    question: "¿Es seguro el proceso de compra de dominios en subasta?",
    answer: "Sí. WebFix actúa como custodio y mediador de depósito en garantía (Escrow), garantizando que los fondos solo se liberen cuando el dominio haya sido transferido de forma exitosa y verificada a tu cuenta.",
  },
  {
    question: "¿Puedo poner mis propios dominios en subasta en WebFix?",
    answer: "Sí, a través de nuestro portal de clientes puedes listar tus nombres de dominio con precio fijo o en modalidad de puja para revenderlos a otros compradores interesados.",
  },
];

const AUCTION_PLANS = [
  {
    name: "Membresía Comprador",
    price: 0.0,
    period: "/gratis",
    desc: "Acceso libre para explorar y pujar en subastas de dominios públicas.",
    features: [
      "Búsqueda ilimitada en el catálogo de subastas",
      "Pujas en tiempo real sin comisión de entrada",
      "Transferencia asistida a tu cuenta WebFix",
      "Protección de pago mediante Escrow seguro",
      "Whois Privacy gratis en todos los dominios ganados"
    ],
    popular: false,
    cta: "Registrarme Gratis"
  },
  {
    name: "Brokerage & Caza de Dominios",
    price: 49.0,
    period: "/por gestión exitosa",
    desc: "Negociamos y adquirimos dominios ocupados directamente con su dueño.",
    features: [
      "Agente negociador exclusivo asignado",
      "Contacto anónimo con el titular actual",
      "Negociación de precio y contrato legal de cesión",
      "Transferencia técnica y verificación de titularidad",
      "Solo pagas si conseguimos el dominio"
    ],
    popular: true,
    cta: "Contratar Broker VIP"
  },
  {
    name: "Portafolio Inversionista (Domaining)",
    price: 99.0,
    period: "/año",
    desc: "Para inversores de dominios con acceso a subastas privadas y liquidaciones.",
    features: [
      "Acceso anticipado a dominios en expiración (Drop Catching)",
      "Comisiones reducidas por venta en marketplace (5%)",
      "Valoración automatizada de dominios por IA",
      "Subastas destacadas en primera plana de WebFix",
      "Línea de crédito para pujas de alto volumen"
    ],
    popular: false,
    cta: "Acceder a Cuenta Inversionista"
  }
];

export default function SubastaDeDominiosPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="pt-28 pb-20 bg-[#05070B] text-white">
      {/* ── 1. HERO SECTION ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono text-[#00E4B8] border border-[#00E4B8]/30 bg-[#00E4B8]/5">
            <Gavel className="w-4 h-4" />
            <span>Mercado de Dominios Premium & Subastas</span>
          </div>

          <h1 className="font-heading font-semibold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Subasta de Dominios Premium <br />
            <span className="text-[#00E4B8]">& Nombres de Alta Autoridad</span>
          </h1>

          <p className="text-white/60 font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Consigue marcas memorables, dominios cortos y nombres con tráfico y antigüedad SEO listos para impulsar tu negocio.
          </p>

          <div className="max-w-2xl mx-auto pt-4">
            <div className="flex items-center bg-[#0D0F16] border border-white/[0.12] focus-within:border-[#00E4B8]/60 rounded-2xl p-2 shadow-2xl">
              <Search className="w-5 h-5 text-white/40 ml-3" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar dominios en subasta o palabras clave..."
                className="w-full bg-transparent text-white text-sm focus:outline-none pl-3 placeholder-white/40"
              />
              <button
                type="button"
                className="px-7 py-3 rounded-xl font-medium text-xs sm:text-sm text-white bg-[#1C40F2] hover:bg-[#1534c9] transition-all shadow-[0_0_20px_rgba(28,64,242,0.4)] shrink-0"
              >
                Explorar Subastas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. BENEFICIOS / QUÉ GANA EL CLIENTE ──────────────────────── */}
      <section className="py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-[11px] uppercase tracking-widest font-mono text-[#00E4B8]">
              ¿Por Qué Comprar en Subasta?
            </p>
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white">
              El Valor de un Dominio Premium
            </h2>
            <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed">
              Un buen nombre de dominio es un activo digital que se revaloriza con el tiempo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00E4B8]/10 border border-[#00E4B8]/20 flex items-center justify-center text-[#00E4B8]">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Autoridad SEO Inmediata
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Muchos dominios en subasta cuentan con backlinks y antigüedad en Google, posicionando tus proyectos mucho más rápido que un dominio nuevo.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1C40F2]/10 border border-[#1C40F2]/20 text-[#1C40F2] flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Marcas Cortas y Memorables
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Adquiere nombres de 1 o 2 palabras fáciles de recordar para tus clientes, generando confianza y estatus instantáneo para tu marca.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Transacciones Seguras con Escrow
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Custodiamos el dinero y verificamos la transferencia antes de liquidar los fondos, protegiendo tanto al comprador como al vendedor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. CAJAS DE ICONOS / TECNOLOGÍA ─────────────────────────── */}
      <section className="py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-white">
              Herramientas de Subastas y Brokerage
            </h2>
            <p className="text-white/60 font-light text-xs sm:text-sm">
              Infraestructura diseñada para inversores y compradores de dominios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: <Clock className="w-5 h-5 text-[#00E4B8]" />, title: "Pujas en Tiempo Real", desc: "Cronómetro de subasta automatizado con extensiones anti-sniper." },
              { icon: <DollarSign className="w-5 h-5 text-blue-400" />, title: "Depósito en Garantía", desc: "Custodia transparente de fondos sin riesgo de estafa." },
              { icon: <Sparkles className="w-5 h-5 text-purple-400" />, title: "Tasación de Dominios", desc: "Algoritmos para evaluar valor comercial y tráfico potencial." },
              { icon: <Gavel className="w-5 h-5 text-amber-400" />, title: "Transferencia Express", desc: "Asignación directa a tu cuenta de cPanel en minutos." },
            ].map((box, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center">
                  {box.icon}
                </div>
                <h4 className="font-heading font-semibold text-base text-white">{box.title}</h4>
                <p className="text-xs font-light text-white/50 leading-relaxed">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PLANES DE SERVICIOS (3 PLANES) ───────────────────────── */}
      <section className="py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-[11px] uppercase tracking-widest font-mono text-[#00E4B8]">
              Modalidades de Servicio
            </p>
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white">
              Servicios de Adquisición de Dominios
            </h2>
            <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed">
              Elige cómo deseas participar en el mercado de dominios.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {AUCTION_PLANS.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between bg-gradient-to-b from-[#0D0F16] via-[#090B10] to-[#05070B] border transition-all ${
                  plan.popular
                    ? "border-[#00E4B8]/60 shadow-[0_0_40px_rgba(0,228,184,0.15)] lg:-translate-y-2"
                    : "border-white/[0.08]"
                }`}
              >
                <div>
                  <div className="border-b border-white/[0.08] pb-6 mb-6">
                    <h3 className="font-heading font-semibold text-2xl text-white">{plan.name}</h3>
                    <p className="text-white/60 font-light text-xs sm:text-sm mt-2 min-h-[36px]">
                      {plan.desc}
                    </p>
                    <div className="mt-6 flex items-baseline gap-1.5">
                      <span className="text-4xl sm:text-5xl font-extrabold text-[#00E4B8] font-mono">
                        ${plan.price.toFixed(2)}
                      </span>
                      <span className="text-white/50 text-xs font-mono">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 text-xs sm:text-[13px] font-light text-white/80">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#00E4B8] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://webfixsoluciones.net/cliente/contact.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-xl font-medium text-xs sm:text-sm text-center text-white bg-[#1C40F2] hover:bg-[#1534c9] transition-all shadow-[0_0_20px_rgba(28,64,242,0.4)]"
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PREGUNTAS FRECUENTES ─────────────────────────────────── */}
      <FaqAccordion faqs={AUCTION_FAQS} title="Preguntas Frecuentes sobre Subastas" />

      {/* ── 6. CTA BANNER ───────────────────────────────────────────── */}
      <section className="py-20">
        <div className="w-[90%] max-w-[1700px] mx-auto">
          <div className="rounded-3xl p-10 sm:p-14 text-center space-y-6 bg-gradient-to-b from-[#0D0F16] to-[#05070B] border border-white/[0.08]">
            <h3 className="font-heading font-semibold text-2xl sm:text-4xl text-white">
              ¿Buscas un Dominio en Específico que ya está Registrado?
            </h3>
            <p className="text-white/60 font-light text-sm max-w-lg mx-auto">
              Nuestros brokers de dominios negocian de forma anónima y segura con el propietario actual.
            </p>
            <div className="pt-2">
              <a
                href="https://webfixsoluciones.net/cliente/contact.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm text-white bg-[#1C40F2] hover:bg-[#1534c9] shadow-[0_0_20px_rgba(28,64,242,0.4)] transition-all"
              >
                <span>Solicitar Asesoría de Dominio</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
