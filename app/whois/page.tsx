"use client";

import { useState } from "react";
import { Search, ShieldCheck, Lock, Globe, Check, ArrowRight, Loader2, Database, EyeOff, UserCheck } from "lucide-react";
import FaqAccordion from "@/components/home/FaqAccordion";
import { FAQItem } from "@/data/faqs";

const WHOIS_FAQS: FAQItem[] = [
  {
    question: "¿Qué es el Whois y qué información muestra?",
    answer: "Whois es una base de datos pública administrada por la ICANN que almacena los datos de contacto del propietario de un dominio web, incluyendo nombre, correo, teléfono, fecha de registro y servidores DNS.",
  },
  {
    question: "¿Cómo protege WebFix mis datos personales?",
    answer: "Incluimos protección de privacidad Whois 100% gratuita en todos los dominios elegibles, reemplazando tus datos personales por información anonimizada para evitar spam y robo de identidad.",
  },
  {
    question: "¿Es gratis la privacidad Whois en WebFix?",
    answer: "Sí, a diferencia de otros proveedores que cobran una tarifa anual por la privacidad de Whois, en WebFix está incluida de por vida sin costo extra.",
  },
];

const WHOIS_PLANS = [
  {
    name: "Protección Básica",
    price: 0.0,
    period: "/gratis de por vida",
    desc: "Ocultamiento estándar de datos personales en el registro público.",
    features: [
      "Ocultamiento de Nombre y Dirección",
      "Redirección de correos de contacto",
      "Activación automática con 1 clic",
      "Soporte técnico en español"
    ],
    popular: false,
    cta: "Incluido en tu Dominio"
  },
  {
    name: "Privacidad Whois Pro",
    price: 4.99,
    period: "/año",
    desc: "Bloqueo avanzado contra transferencias no autorizadas y alertas.",
    features: [
      "Todo lo de Protección Básica",
      "Bloqueo de Registro (Registry Lock)",
      "Alertas de intentos de transferencia",
      "Monitoreo 24/7 de cambios DNS",
      "Certificado SSL Comodo Incluido"
    ],
    popular: true,
    cta: "Activar Privacidad Pro"
  },
  {
    name: "Blindaje Corporativo",
    price: 19.99,
    period: "/año",
    desc: "Máxima seguridad para marcas corporativas y dominios de alto valor.",
    features: [
      "Todo lo de Privacidad Pro",
      "Doble factor de autenticación para transferencias",
      "Defensa contra ataques de suplantación (Phishing)",
      "Gestor de cuenta VIP asignado",
      "Garantía de recuperación de dominio"
    ],
    popular: false,
    cta: "Solicitar Blindaje"
  }
];

export default function WhoisPage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    let clean = query.trim().toLowerCase().replace(/^(https?:\/\/)?(www\.)?/, "");
    if (!clean.includes(".")) clean = `${clean}.com`;
    setTimeout(() => {
      window.open(`https://webfixsoluciones.net/cliente/cart.php?a=add&domain=register&query=${encodeURIComponent(clean)}`, "_blank");
      setLoading(false);
    }, 400);
  };

  return (
    <div className="pt-28 pb-20 bg-[#05070B] text-white">
      {/* ── 1. HERO SECTION ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24 border-b border-white/[0.04] relative">
        <div className="w-[90%] max-w-[1700px] mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono text-[#00E4B8] border border-[#00E4B8]/30 bg-[#00E4B8]/5">
            <ShieldCheck className="w-4 h-4" />
            <span>Consulta de Base de Datos Whois & Privacidad</span>
          </div>

          <h1 className="font-heading font-semibold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Buscador Whois & Protección <br />
            <span className="text-[#00E4B8]">de Datos de Dominio</span>
          </h1>

          <p className="text-white/60 font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Verifica la disponibilidad, fecha de vencimiento y titularidad de cualquier dominio web con Whois Privacy gratuito incluido.
          </p>

          {/* Search Box */}
          <form onSubmit={handleLookup} className="max-w-2xl mx-auto pt-4">
            <div className="flex items-center bg-[#0D0F16] border border-white/[0.12] focus-within:border-[#00E4B8]/60 rounded-2xl p-2 shadow-2xl">
              <div className="flex items-center gap-3 pl-3 flex-1">
                <Search className="w-5 h-5 text-white/40" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Introduce el dominio a consultar (ej. miempresa.com)..."
                  className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-white/40"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-7 py-3 rounded-xl font-medium text-xs sm:text-sm text-white bg-[#1C40F2] hover:bg-[#1534c9] transition-all shadow-[0_0_20px_rgba(28,64,242,0.4)]"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Consultar Whois"}
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
              Beneficios Reales
            </p>
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white">
              ¿Qué Ganas al Proteger tu Whois con WebFix?
            </h2>
            <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed">
              Evita que tus datos de contacto personales y corporativos queden expuestos a spammers, estafadores y competidores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00E4B8]/10 border border-[#00E4B8]/20 flex items-center justify-center text-[#00E4B8]">
                <EyeOff className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Cero Spam Telefónico y por Correo
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Al ocultar tu teléfono y correo real, impides que empresas de marketing no deseadas te agreguen a bases de datos de spam.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1C40F2]/10 border border-[#1C40F2]/20 text-[#1C40F2] flex items-center justify-center">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Protección contra Robo de Dominio
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Bloquea intentos de secuestro de dominios mediante solicitudes de transferencia fraudulentas con ingeniería social.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Mantienes la Propiedad Legal al 100%
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Aunque los datos públicos aparezcan anónimos, tú sigues siendo el único y legítimo propietario legal del nombre de dominio.
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
              Herramientas de Privacidad y Seguridad
            </h2>
            <p className="text-white/60 font-light text-xs sm:text-sm">
              Todo incluido sin costos ocultos en la infraestructura WebFix.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Database className="w-5 h-5 text-[#00E4B8]" />, title: "Base de Datos ICANN", desc: "Sincronización en tiempo real con registros internacionales." },
              { icon: <ShieldCheck className="w-5 h-5 text-blue-400" />, title: "Cumplimiento GDPR y LOPDP", desc: "Adaptado a las leyes de privacidad de datos de Ecuador y la UE." },
              { icon: <Lock className="w-5 h-5 text-purple-400" />, title: "Bloqueo de Registrador", desc: "Impide modificaciones accidentales de nameservers y titularidad." },
              { icon: <Globe className="w-5 h-5 text-amber-400" />, title: "DNSSEC Opcional", desc: "Firma criptográfica para evitar ataques de envenenamiento DNS." },
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

      {/* ── 4. PLANES DE PRECIOS (3 PLANES REQUERIDOS) ──────────────── */}
      <section className="py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-[11px] uppercase tracking-widest font-mono text-[#00E4B8]">
              Planes y Niveles
            </p>
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white">
              Planes de Privacidad & Seguridad Whois
            </h2>
            <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed">
              Elige el nivel de blindaje que tu dominio o empresa necesita.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {WHOIS_PLANS.map((plan, idx) => (
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
                  href="https://webfixsoluciones.net/cliente/cart.php?a=add&domain=register"
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
      <FaqAccordion faqs={WHOIS_FAQS} title="Preguntas Frecuentes sobre Whois" />

      {/* ── 6. CTA BANNER ───────────────────────────────────────────── */}
      <section className="py-20">
        <div className="w-[90%] max-w-[1700px] mx-auto">
          <div className="rounded-3xl p-10 sm:p-14 text-center space-y-6 bg-gradient-to-b from-[#0D0F16] to-[#05070B] border border-white/[0.08]">
            <h3 className="font-heading font-semibold text-2xl sm:text-4xl text-white">
              ¿Listo para Proteger la Identidad de tu Dominio?
            </h3>
            <p className="text-white/60 font-light text-sm max-w-lg mx-auto">
              Registra tu dominio en WebFix y obtén privacidad Whois gratis de por vida.
            </p>
            <div className="pt-2">
              <a
                href="/registro-de-dominios"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm text-white bg-[#1C40F2] hover:bg-[#1534c9] shadow-[0_0_20px_rgba(28,64,242,0.4)] transition-all"
              >
                <span>Registrar Dominio Protegido</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
