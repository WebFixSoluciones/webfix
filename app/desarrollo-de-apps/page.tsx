"use client";

import { useState } from "react";
import { Smartphone, Check, ArrowRight, ShieldCheck, Zap, Bell, Globe, Sparkles, Layers, Apple } from "lucide-react";
import FaqAccordion from "@/components/home/FaqAccordion";
import { FAQItem } from "@/data/faqs";

const APPS_FAQS: FAQItem[] = [
  {
    question: "¿Desarrollan aplicaciones para Android y iPhone (iOS)?",
    answer: "Sí, utilizamos frameworks modernos como React Native y Flutter que permiten compilar aplicaciones nativas de alto rendimiento para Google Play Store y Apple App Store con un solo código base optimizado.",
  },
  {
    question: "¿Cómo se gestiona la publicación en Google Play y App Store?",
    answer: "Nos encargamos de todo el proceso de empaquetado, firma digital, creación de capturas, políticas de privacidad y envío a revisión en las cuentas de desarrollador de tu empresa.",
  },
  {
    question: "¿La aplicación puede enviar notificaciones push a los clientes?",
    answer: "Sí, integramos Firebase Cloud Messaging (FCM) y OneSignal para que puedas enviar notificaciones push automáticas o personalizadas de promociones, estados de pedidos o recordatorios directamente a los celulares de tus usuarios.",
  },
];

const APPS_PLANS = [
  {
    name: "App MVP / Híbrida",
    price: 650.0,
    period: "/pago único",
    desc: "Para lanzar rápido una aplicación funcional en Android y web móvil.",
    features: [
      "Diseño UI/UX Móvil Moderno",
      "Compilación para Android (.APK y .AAB)",
      "Autenticación con Correo y Google",
      "Panel Web de Administración de Contenido",
      "Notificaciones Push con Firebase",
      "Garantía de soporte de 30 días"
    ],
    popular: false,
    whmcsUrl: "https://webfixsoluciones.net/cliente/contact.php"
  },
  {
    name: "App Pro (iOS + Android)",
    price: 1200.0,
    period: "/pago único",
    desc: "La solución completa con publicación oficial en Google Play y App Store.",
    features: [
      "Publicación en Google Play Store y Apple App Store",
      "Diseño Nativo React Native / Flutter",
      "Pasarela de Pago Móvil Integrada",
      "Geolocalización GPS y Mapas en Tiempo Real",
      "Panel Administrativo Web Completo",
      "Servidor Cloud API dedicado por 1 año",
      "Capacitación + Soporte continuo"
    ],
    popular: true,
    whmcsUrl: "https://webfixsoluciones.net/cliente/contact.php"
  },
  {
    name: "App Enterprise / On-Demand",
    price: 2400.0,
    period: "/pago único",
    desc: "Para apps tipo delivery, transporte, streaming o redes con alta concurrencia.",
    features: [
      "App para Clientes + App para Repartidores/Choferes",
      "Chat en Vivo entre Usuarios y Soporte",
      "Algoritmos de Asignación y Rutas en Vivo",
      "Métricas y Analítica en Tiempo Real",
      "Servidor Cloud VPS Clúster por 1 año",
      "Código Fuente 100% Transferido a tu Empresa",
      "SLA de Mantenimiento Prioritario 24/7"
    ],
    popular: false,
    whmcsUrl: "https://webfixsoluciones.net/cliente/contact.php"
  }
];

export default function DesarrolloDeAppsPage() {
  return (
    <div className="pt-28 pb-20 bg-[#05070B] text-white">
      {/* ── 1. HERO SECTION ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono text-[#00E4B8] border border-[#00E4B8]/30 bg-[#00E4B8]/5">
            <Smartphone className="w-4 h-4" />
            <span>Desarrollo de Aplicaciones Móviles iOS & Android en Ecuador</span>
          </div>

          <h1 className="font-heading font-semibold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Desarrollo de APPs Móviles <br />
            <span className="text-[#00E4B8]">para iPhone & Android</span>
          </h1>

          <p className="text-white/60 font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Lleva tu empresa al bolsillo de tus clientes con aplicaciones móviles rápidas, intuitivas y publicadas oficialmente en App Store y Google Play.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#planes"
              className="px-8 py-3.5 rounded-xl font-medium text-sm text-white bg-[#1C40F2] hover:bg-[#1534c9] transition-all shadow-[0_0_20px_rgba(28,64,242,0.4)]"
            >
              Ver Planes de Desarrollo de APPs
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. BENEFICIOS / QUÉ GANA LA EMPRESA ─────────────────────── */}
      <section className="py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-[11px] uppercase tracking-widest font-mono text-[#00E4B8]">
              Ventajas Móviles
            </p>
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white">
              ¿Por Qué Tener una App Móvil Propia?
            </h2>
            <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed">
              Fideliza a tus usuarios con un canal de venta y comunicación directo en su smartphone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00E4B8]/10 border border-[#00E4B8]/20 flex items-center justify-center text-[#00E4B8]">
                <Bell className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Notificaciones Push Directas
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Comunícate al instante con tus clientes sin depender de algoritmos de redes sociales ni spam en bandejas de correo.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1C40F2]/10 border border-[#1C40F2]/20 text-[#1C40F2] flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Experiencia Fluida & Offline
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Tiempos de carga inmediatos con animaciones a 60 FPS y almacenamiento local de datos para operar incluso con baja cobertura de internet.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Publicación Oficial Garantizada
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Nos encargamos del cumplimiento de las estrictas directrices de Apple y Google para asegurar la aprobación de tu aplicación en las tiendas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. CAJAS DE ICONOS / CARACTERÍSTICAS ────────────────────── */}
      <section className="py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-white">
              Tecnología de Aplicaciones Móviles
            </h2>
            <p className="text-white/60 font-light text-xs sm:text-sm">
              Desarrollamos con los estándares de las empresas tecnológicas líderes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: <Smartphone className="w-5 h-5 text-[#00E4B8]" />, title: "React Native / Flutter", desc: "Código unificado para iOS y Android con rendimiento nativo." },
              { icon: <Bell className="w-5 h-5 text-blue-400" />, title: "Firebase Cloud Messaging", desc: "Envío masivo o segmentado de alertas y promociones push." },
              { icon: <Globe className="w-5 h-5 text-purple-400" />, title: "Geolocalización GPS", desc: "Seguimiento en tiempo real sobre Google Maps y Mapbox." },
              { icon: <ShieldCheck className="w-5 h-5 text-amber-400" />, title: "Biometría & FaceID", desc: "Ingreso seguro mediante huella dactilar o reconocimiento facial." },
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

      {/* ── 4. PLANES DE DESARROLLO (3 PLANES) ──────────────────────── */}
      <section id="planes" className="py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-[11px] uppercase tracking-widest font-mono text-[#00E4B8]">
              Planes de Aplicaciones
            </p>
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white">
              Paquetes de Desarrollo de APPs
            </h2>
            <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed">
              Elige el paquete según las plataformas y complejidad de tu aplicación.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {APPS_PLANS.map((plan, idx) => (
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
                        ${plan.price.toFixed(0)}
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
                  href={plan.whmcsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-xl font-medium text-xs sm:text-sm text-center text-white bg-[#1C40F2] hover:bg-[#1534c9] transition-all shadow-[0_0_20px_rgba(28,64,242,0.4)]"
                >
                  Cotizar Aplicación Móvil
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PREGUNTAS FRECUENTES ─────────────────────────────────── */}
      <FaqAccordion faqs={APPS_FAQS} title="Preguntas Frecuentes sobre APPs Móviles" />

      {/* ── 6. CTA BANNER ───────────────────────────────────────────── */}
      <section className="py-20">
        <div className="w-[90%] max-w-[1700px] mx-auto">
          <div className="rounded-3xl p-10 sm:p-14 text-center space-y-6 bg-gradient-to-b from-[#0D0F16] to-[#05070B] border border-white/[0.08]">
            <h3 className="font-heading font-semibold text-2xl sm:text-4xl text-white">
              ¿Listo para Crear la APP Móvil de tu Empresa?
            </h3>
            <p className="text-white/60 font-light text-sm max-w-lg mx-auto">
              Contáctanos para revisar el flujo de pantallas y definir la mejor estrategia tecnológica para tu proyecto.
            </p>
            <div className="pt-2">
              <a
                href="https://webfixsoluciones.net/cliente/contact.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm text-white bg-[#1C40F2] hover:bg-[#1534c9] shadow-[0_0_20px_rgba(28,64,242,0.4)] transition-all"
              >
                <span>Solicitar Asesoría de App</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
