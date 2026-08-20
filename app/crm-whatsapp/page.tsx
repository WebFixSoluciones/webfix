"use client";

import { useState } from "react";
import { MessageSquare, Check, ArrowRight, ShieldCheck, Zap, Bot, Users, BarChart3, Clock, Sparkles } from "lucide-react";
import FaqAccordion from "@/components/home/FaqAccordion";
import { FAQItem } from "@/data/faqs";

const CRM_FAQS: FAQItem[] = [
  {
    question: "¿Qué es un CRM para WhatsApp y cómo ayuda a mi equipo de ventas?",
    answer: "Es una plataforma que permite conectar un solo número de WhatsApp a múltiples agentes de atención simultáneamente, organizar clientes en un embudo Kanban (prospectos, cotizados, cerrados) y responder de forma automática con chatbots inteligentes las 24 horas.",
  },
  {
    question: "¿Se puede conectar con un número de teléfono celular normal de Ecuador?",
    answer: "Sí, puedes conectar cualquier número de teléfono celular o fijo de Ecuador mediante código QR oficial o a través de la API oficial de WhatsApp Cloud de Meta.",
  },
  {
    question: "¿Incluye mensajes masivos automatizados a clientes?",
    answer: "Sí, puedes enviar mensajes masivos y campañas promocionales personalizadas (con nombre del cliente y variables) respetando las políticas antispam para evitar bloqueos de cuenta.",
  },
];

const CRM_PLANS = [
  {
    name: "CRM Starter (3 Agentes)",
    price: 29.0,
    period: "/mes",
    desc: "Para pequeños negocios y emprendedores con 1 a 3 personas en ventas y soporte.",
    features: [
      "1 Línea de WhatsApp Conectada",
      "Hasta 3 Agentes / Asesores Simultáneos",
      "Embudo de Ventas Visual (Tablero Kanban)",
      "Chatbot de Bienvenida y Respuestas Rápidas",
      "Etiquetas de Clientes y Notas Internas",
      "Historial de Chats Guardado en la Nube",
      "Soporte técnico en español"
    ],
    popular: false,
    whmcsUrl: "https://webfixsoluciones.net/cliente/contact.php"
  },
  {
    name: "CRM Pro (10 Agentes)",
    price: 59.0,
    period: "/mes",
    desc: "El plan ideal para equipos comerciales activos con alta demanda de mensajes.",
    features: [
      "2 Líneas de WhatsApp Conectadas",
      "Hasta 10 Agentes / Asesores Simultáneos",
      "Chatbots con Inteligencia Artificial (ChatGPT)",
      "Envío de Mensajes Masivos Segmentados",
      "Asignación Automática de Chats (Round Robin)",
      "Métricas de Tiempo de Respuesta por Agente",
      "Integración con API Webhooks y Zapier",
      "Soporte prioritario VIP"
    ],
    popular: true,
    whmcsUrl: "https://webfixsoluciones.net/cliente/contact.php"
  },
  {
    name: "CRM Enterprise Ilimitado",
    price: 119.0,
    period: "/mes",
    desc: "Para empresas consolidadas, call centers y operaciones omnicanal a gran escala.",
    features: [
      "Líneas de WhatsApp Oficial Ilimitadas",
      "Agentes y Departamentos Ilimitados",
      "Omnicanalidad (WhatsApp + Instagram + Facebook)",
      "Integración directa con tu sistema ERP / Facturación",
      "Servidor Cloud Dedicado para Máxima Privacidad",
      "Capacitación en Vivo para todo tu Equipo",
      "Gerente de cuenta asignado 24/7"
    ],
    popular: false,
    whmcsUrl: "https://webfixsoluciones.net/cliente/contact.php"
  }
];

export default function CrmWhatsappPage() {
  return (
    <div className="pt-28 pb-20 bg-[#05070B] text-white">
      {/* ── 1. HERO SECTION ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono text-[#00E4B8] border border-[#00E4B8]/30 bg-[#00E4B8]/5">
            <MessageSquare className="w-4 h-4" />
            <span>CRM Multi-Agente para WhatsApp & Chatbots con IA</span>
          </div>

          <h1 className="font-heading font-semibold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
            CRM para WhatsApp Multi-Agente <br />
            <span className="text-[#00E4B8]">Centraliza tus Ventas en un Solo Número</span>
          </h1>

          <p className="text-white/60 font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Multiplica tus ventas por WhatsApp. Conecta a todo tu equipo a un solo número, automatiza respuestas con chatbots y gestiona prospectos en un embudo visual.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#planes"
              className="px-8 py-3.5 rounded-xl font-medium text-sm text-white bg-[#1C40F2] hover:bg-[#1534c9] transition-all shadow-[0_0_20px_rgba(28,64,242,0.4)]"
            >
              Ver Planes CRM desde $29/mes
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. BENEFICIOS / QUÉ GANA LA EMPRESA ─────────────────────── */}
      <section className="py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-[11px] uppercase tracking-widest font-mono text-[#00E4B8]">
              Ventajas Comerciales
            </p>
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white">
              ¿Por Qué tu Empresa Necesita un CRM de WhatsApp?
            </h2>
            <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed">
              No pierdas más ventas por mensajes no contestados a tiempo o desorganización de chats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00E4B8]/10 border border-[#00E4B8]/20 flex items-center justify-center text-[#00E4B8]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Varios Asesores con 1 Solo Número
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Todo tu equipo atiende desde sus computadoras o celulares sin prestarse el teléfono de la empresa y con transferencias de chat entre departamentos.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1C40F2]/10 border border-[#1C40F2]/20 text-[#1C40F2] flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Chatbots con IA las 24 Horas
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Califica prospectos, responde preguntas frecuentes y entrega precios automáticamente incluso los fines de semana o fuera de horario de oficina.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Supervisión y Métricas en Tiempo Real
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Supervisa las conversaciones de tus agentes, mide los tiempos de respuesta y audita las ventas cerradas desde un panel directivo seguro.
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
              Funcionalidades del CRM de WhatsApp
            </h2>
            <p className="text-white/60 font-light text-xs sm:text-sm">
              Diseñado para aumentar la tasa de conversión de tus canales digitales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: <MessageSquare className="w-5 h-5 text-[#00E4B8]" />, title: "Embudo Visual Kanban", desc: "Arrastra y clasifica prospectos según su etapa de compra." },
              { icon: <Clock className="w-5 h-5 text-blue-400" />, title: "Respuestas Rápidas", desc: "Plantillas predefinidas de texto, audios, fotos y catálogos." },
              { icon: <Bot className="w-5 h-5 text-purple-400" />, title: "IA Integrada con ChatGPT", desc: "Conversaciones fluidas y naturales con contexto de tu negocio." },
              { icon: <ShieldCheck className="w-5 h-5 text-amber-400" />, title: "Nube 100% Segura", desc: "Copias de seguridad automáticas y privacidad garantizada." },
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

      {/* ── 4. PLANES DE CRM (3 PLANES) ─────────────────────────────── */}
      <section id="planes" className="py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-[11px] uppercase tracking-widest font-mono text-[#00E4B8]">
              Planes de Suscripción CRM
            </p>
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white">
              Elige el Plan para tu Equipo Comercial
            </h2>
            <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed">
              Sin contratos forzosos. Cancela o cambia de plan en cualquier momento.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {CRM_PLANS.map((plan, idx) => (
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
                  Probar CRM de WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PREGUNTAS FRECUENTES ─────────────────────────────────── */}
      <FaqAccordion faqs={CRM_FAQS} title="Preguntas Frecuentes sobre CRM WhatsApp" />

      {/* ── 6. CTA BANNER ───────────────────────────────────────────── */}
      <section className="py-20">
        <div className="w-[90%] max-w-[1700px] mx-auto">
          <div className="rounded-3xl p-10 sm:p-14 text-center space-y-6 bg-gradient-to-b from-[#0D0F16] to-[#05070B] border border-white/[0.08]">
            <h3 className="font-heading font-semibold text-2xl sm:text-4xl text-white">
              ¿Quieres Ver una Demostración en Vivo?
            </h3>
            <p className="text-white/60 font-light text-sm max-w-lg mx-auto">
              Te mostramos en tiempo real cómo funciona el panel multi-agente y los chatbots para tu empresa.
            </p>
            <div className="pt-2">
              <a
                href="https://webfixsoluciones.net/cliente/contact.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm text-white bg-[#1C40F2] hover:bg-[#1534c9] shadow-[0_0_20px_rgba(28,64,242,0.4)] transition-all"
              >
                <span>Agendar Demostración por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
