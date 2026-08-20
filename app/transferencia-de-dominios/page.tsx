"use client";

import { useState } from "react";
import { RefreshCw, Check, ArrowRight, ShieldCheck, Zap, Lock, DollarSign, Clock, HelpCircle, Loader2 } from "lucide-react";
import FaqAccordion from "@/components/home/FaqAccordion";
import { FAQItem } from "@/data/faqs";

const TRANSFER_FAQS: FAQItem[] = [
  {
    question: "¿Qué necesito para transferir mi dominio a WebFix?",
    answer: "Necesitas: 1) Que el dominio tenga más de 60 días de registro, 2) Desbloquear el dominio en tu registrador actual (Domain Lock = Off), 3) Obtener el código de autorización (Auth-Code o EPP) y 4) Confirmar el correo de transferencia.",
  },
  {
    question: "¿Se perderá mi sitio web o mis correos durante la transferencia?",
    answer: "No. La transferencia de dominio no interrumpe el funcionamiento de tu sitio web ni de tus correos. Si mantienes los mismos nameservers o configuras tu hosting en WebFix antes de transferir, el cambio será 100% transparente.",
  },
  {
    question: "¿La transferencia incluye 1 año adicional de renovación?",
    answer: "Sí, al transferir la mayoría de extensiones como .COM, .NET, .ORG, etc., se añade automáticamente 1 año adicional a la fecha de vencimiento que ya tenías.",
  },
];

const TRANSFER_PLANS = [
  {
    name: "Transferencia Estándar",
    price: 14.50,
    period: "/incluye 1 año de renovación",
    desc: "Para dominios .COM, .NET, .ORG que deseas centralizar en WebFix.",
    features: [
      "1 Año de Renovación Automática Incluido",
      "Whois Privacy Gratis de por vida",
      "Gestión de DNS Anycast en tiempo real",
      "Soporte técnico y asesoría paso a paso",
      "Bloqueo contra transferencias no deseadas"
    ],
    popular: true,
    cta: "Iniciar Transferencia"
  },
  {
    name: "Transferencia .EC Oficial",
    price: 35.00,
    period: "/incluye 1 año de renovación",
    desc: "Para dominios territoriales ecuatorianos .EC y .COM.EC.",
    features: [
      "1 Año de Renovación Oficial ante NIC.EC",
      "Trámite directo con facturación SRI",
      "Soporte local en Ecuador vía WhatsApp y tickets",
      "Configuración de registros DNS express",
      "Recordatorios automáticos de vencimiento"
    ],
    popular: false,
    cta: "Transferir Dominio .EC"
  },
  {
    name: "Transferencia Masiva (Bulk)",
    price: 11.90,
    period: "/por dominio (más de 5 dominios)",
    desc: "Para agencias y empresas con portafolios de dominios múltiples.",
    features: [
      "Tarifa preferencial por volumen",
      "Importación masiva con 1 solo archivo CSV",
      "Panel centralizado para renovaciones múltiples",
      "Gestor de cuenta exclusivo para tu agencia",
      "API DNS para desarrolladores"
    ],
    popular: false,
    cta: "Transferir en Lote"
  }
];

export default function TransferenciaDeDominiosPage() {
  const [domainName, setDomainName] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domainName.trim()) return;
    setLoading(true);
    let clean = domainName.trim().toLowerCase().replace(/^(https?:\/\/)?(www\.)?/, "");
    setTimeout(() => {
      window.open(`https://webfixsoluciones.net/cliente/cart.php?a=add&domain=transfer&query=${encodeURIComponent(clean)}`, "_blank");
      setLoading(false);
    }, 400);
  };

  return (
    <div className="pt-28 pb-20 bg-[#05070B] text-white">
      {/* ── 1. HERO SECTION ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono text-[#00E4B8] border border-[#00E4B8]/30 bg-[#00E4B8]/5">
            <RefreshCw className="w-4 h-4" />
            <span>Migración Express de Dominios a WebFix</span>
          </div>

          <h1 className="font-heading font-semibold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Transfiere tu Dominio a WebFix <br />
            <span className="text-[#00E4B8]">y Ahorra en Renovaciones</span>
          </h1>

          <p className="text-white/60 font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Centraliza tus dominios y hosting en una sola plataforma. Incluye 1 año de renovación gratis, Whois Privacy y soporte técnico en español.
          </p>

          {/* Form */}
          <form onSubmit={handleTransfer} className="max-w-3xl mx-auto pt-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 bg-[#0D0F16] border border-white/[0.12] focus-within:border-[#00E4B8]/60 rounded-2xl p-2.5 shadow-2xl">
              <input
                type="text"
                value={domainName}
                onChange={(e) => setDomainName(e.target.value)}
                placeholder="Nombre del dominio (ej. tudominio.com)..."
                className="w-full bg-transparent text-white text-sm focus:outline-none pl-3 placeholder-white/40"
                required
              />
              <input
                type="text"
                value={authCode}
                onChange={(e) => setAuthCode(e.target.value)}
                placeholder="Código EPP / Auth-Code (opcional)..."
                className="w-full sm:w-60 bg-black/40 border border-white/[0.08] rounded-xl px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none font-mono"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-7 py-3 rounded-xl font-medium text-xs sm:text-sm text-white bg-[#1C40F2] hover:bg-[#1534c9] transition-all shrink-0 shadow-[0_0_20px_rgba(28,64,242,0.4)]"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Transferir Ahora"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ── 2. BENEFICIOS / QUÉ GANA EL CLIENTE ──────────────────────── */}
      <section className="py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-[11px] uppercase tracking-widest font-mono text-[#00E4B8]">
              Ventajas de Transferir
            </p>
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white">
              ¿Por Qué Traer tus Dominios a WebFix?
            </h2>
            <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed">
              No pagues tarifas abusivas por renovaciones en otros registradores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00E4B8]/10 border border-[#00E4B8]/20 flex items-center justify-center text-[#00E4B8]">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                No Pierdes Tiempo de Registro
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                El tiempo que te restaba en tu proveedor anterior se conserva y se suma 1 año completo adicional a tu fecha de vencimiento.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1C40F2]/10 border border-[#1C40F2]/20 text-[#1C40F2] flex items-center justify-center">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Renovaciones Transparentes
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Sin subidas de precio sorpresa al segundo año. Mantienes tarifas justas y estables con facturación SRI en Ecuador.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Whois Privacy Gratis de por Vida
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Protección de identidad y bloqueo de spam incluida sin ningún costo extra recurrente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. CAJAS DE ICONOS / PASOS ──────────────────────────────── */}
      <section className="py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-white">
              Pasos Sencillos para la Transferencia
            </h2>
            <p className="text-white/60 font-light text-xs sm:text-sm">
              Proceso 100% automatizado con asistencia técnica garantizada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Desbloquea el Dominio", desc: "Desactiva el bloqueo de registro en tu proveedor actual." },
              { num: "02", title: "Obtén el Auth-Code", desc: "Solicita el código EPP a tu registrador anterior." },
              { num: "03", title: "Inicia la Transferencia", desc: "Ingresa el dominio y el código en WebFix." },
              { num: "04", title: "Listo y Renovado", desc: "La transferencia concluye en 3 a 5 días con 1 año extra." },
            ].map((step, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-3">
                <span className="text-2xl font-extrabold font-mono text-[#00E4B8]">{step.num}</span>
                <h4 className="font-heading font-semibold text-base text-white">{step.title}</h4>
                <p className="text-xs font-light text-white/50 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PLANES DE PRECIOS (3 PLANES) ─────────────────────────── */}
      <section className="py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-[11px] uppercase tracking-widest font-mono text-[#00E4B8]">
              Tarifas de Transferencia
            </p>
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white">
              Elige tu Tipo de Transferencia
            </h2>
            <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed">
              Todos los planes incluyen 1 año de renovación y soporte en español.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {TRANSFER_PLANS.map((plan, idx) => (
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
                  href="https://webfixsoluciones.net/cliente/cart.php?a=add&domain=transfer"
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
      <FaqAccordion faqs={TRANSFER_FAQS} title="Preguntas Frecuentes sobre Transferencias" />

      {/* ── 6. CTA BANNER ───────────────────────────────────────────── */}
      <section className="py-20">
        <div className="w-[90%] max-w-[1700px] mx-auto">
          <div className="rounded-3xl p-10 sm:p-14 text-center space-y-6 bg-gradient-to-b from-[#0D0F16] to-[#05070B] border border-white/[0.08]">
            <h3 className="font-heading font-semibold text-2xl sm:text-4xl text-white">
              ¿Tienes Dudas sobre tu Transferencia?
            </h3>
            <p className="text-white/60 font-light text-sm max-w-lg mx-auto">
              Nuestros ingenieros te asisten paso a paso sin interrumpir tu web ni tus correos.
            </p>
            <div className="pt-2">
              <a
                href="https://webfixsoluciones.net/cliente/contact.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm text-white bg-[#1C40F2] hover:bg-[#1534c9] shadow-[0_0_20px_rgba(28,64,242,0.4)] transition-all"
              >
                <span>Hablar con Soporte de Migración</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
