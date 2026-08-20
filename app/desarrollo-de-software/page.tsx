"use client";

import { useState } from "react";
import { Code2, Check, ArrowRight, ShieldCheck, Zap, Database, Terminal, Cpu, Layers, GitBranch, Sparkles } from "lucide-react";
import FaqAccordion from "@/components/home/FaqAccordion";
import { FAQItem } from "@/data/faqs";

const SOFTWARE_FAQS: FAQItem[] = [
  {
    question: "¿Qué tipo de software y sistemas a medida desarrollan?",
    answer: "Desarrollamos sistemas de gestión ERP, CRM a medida, portales para clientes y proveedores, plataformas SaaS, sistemas de reservas, pasarelas de facturación electrónica con el SRI y automatización de procesos internos.",
  },
  {
    question: "¿Qué tecnologías y lenguajes de programación utilizan?",
    answer: "Trabajamos con tecnologías modernas de alta velocidad: Next.js, React, TypeScript, Node.js, Python/Django, PostgreSQL, MySQL y Redis, garantizando código limpio, seguro y fácil de mantener.",
  },
  {
    question: "¿Entregan el código fuente y la documentación técnica?",
    answer: "Sí. Todo el código fuente desarrollado para tu empresa es de tu propiedad exclusiva, entregado en repositorio privado de Git con documentación técnica de despliegue y APIs.",
  },
];

const SOFTWARE_PLANS = [
  {
    name: "MVP / Sistema Base",
    price: 490.0,
    period: "/pago único",
    desc: "Para validar una idea de negocio, automatizar un proceso clave o crear un portal básico.",
    features: [
      "Arquitectura Frontend + Backend Moderna",
      "Panel de Administración Autenticado con Roles",
      "Base de Datos PostgreSQL / MySQL Segura",
      "Integración de 2 a 3 Módulos Principales",
      "Despliegue en Servidor Cloud Incluido",
      "Entrega de Repositorio de Código en GitHub",
      "Garantía de soporte de 30 días"
    ],
    popular: false,
    whmcsUrl: "https://webfixsoluciones.net/cliente/contact.php"
  },
  {
    name: "Sistema a Medida Pro",
    price: 950.0,
    period: "/pago único",
    desc: "Para empresas que necesitan digitalizar sus operaciones con flujos personalizados.",
    features: [
      "Desarrollo Completo de Módulos Operativos",
      "Facturación Electrónica SRI Automática",
      "API RESTful para integración con otras plataformas",
      "Gestión de Usuarios, Permisos y Logs de Auditoría",
      "Reportes Dinámicos y Exportación a PDF / Excel",
      "Infraestructura Cloud VPS Optimizada por 1 año",
      "Capacitación del Personal + Manual de Usuario",
      "Garantía de soporte de 60 días"
    ],
    popular: true,
    whmcsUrl: "https://webfixsoluciones.net/cliente/contact.php"
  },
  {
    name: "Plataforma Enterprise / SaaS",
    price: 1850.0,
    period: "/pago único",
    desc: "Para startups tecnológicas y empresas que requieren alta concurrencia y microservicios.",
    features: [
      "Arquitectura Cloud Escalable en Microservicios",
      "Suscripciones y Cobros Recurrentes Automatizados",
      "Monitoreo en Tiempo Real y Logs Centralizados",
      "Testing Automatizado y CI/CD Pipeline",
      "Optimización de Seguridad y Pentesting Básico",
      "Servidor Dedicado Bare Metal por 1 año",
      "SLA de Soporte Prioritario 24/7"
    ],
    popular: false,
    whmcsUrl: "https://webfixsoluciones.net/cliente/contact.php"
  }
];

export default function DesarrolloDeSoftwarePage() {
  return (
    <div className="pt-28 pb-20 bg-[#05070B] text-white">
      {/* ── 1. HERO SECTION ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono text-[#00E4B8] border border-[#00E4B8]/30 bg-[#00E4B8]/5">
            <Code2 className="w-4 h-4" />
            <span>Ingeniería de Software & Soluciones Web a Medida</span>
          </div>

          <h1 className="font-heading font-semibold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Desarrollo de Software <br />
            <span className="text-[#00E4B8]">& Sistemas Web a Medida</span>
          </h1>

          <p className="text-white/60 font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Automatiza procesos, reduce costos operativos y escala tu empresa con sistemas robustos diseñados exactamente para tu modelo de negocio.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#planes"
              className="px-8 py-3.5 rounded-xl font-medium text-sm text-white bg-[#1C40F2] hover:bg-[#1534c9] transition-all shadow-[0_0_20px_rgba(28,64,242,0.4)]"
            >
              Ver Planes de Desarrollo de Software
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. BENEFICIOS / QUÉ GANA LA EMPRESA ─────────────────────── */}
      <section className="py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-[11px] uppercase tracking-widest font-mono text-[#00E4B8]">
              Impacto Empresarial
            </p>
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white">
              ¿Qué Gana tu Empresa con Software a Medida?
            </h2>
            <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed">
              Deja de pagar licencias mensuales por programas genéricos que no se adaptan a tu forma de trabajar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00E4B8]/10 border border-[#00E4B8]/20 flex items-center justify-center text-[#00E4B8]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Ahorro de Cientos de Horas
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Elimina tareas manuales repetitivas en Excel mediante automatizaciones directas entre tus bases de datos, correos y facturación.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1C40F2]/10 border border-[#1C40F2]/20 text-[#1C40F2] flex items-center justify-center">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Control y Seguridad de Datos
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Toda la información de tu empresa, clientes y ventas permanece centralizada en servidores seguros bajo tu propio dominio y control.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                <GitBranch className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Propiedad Total del Código
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Sin suscripciones forzosas de por vida. El sistema es un activo de tu empresa que puedes modificar y expandir libremente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. CAJAS DE ICONOS / STACK ──────────────────────────────── */}
      <section className="py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-white">
              Tecnología Moderna & Escalable
            </h2>
            <p className="text-white/60 font-light text-xs sm:text-sm">
              Construimos sistemas rápidos, seguros y mantenibles a largo plazo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: <Code2 className="w-5 h-5 text-[#00E4B8]" />, title: "Next.js & TypeScript", desc: "Velocidad de renderizado instantáneo y tipado estricto sin errores." },
              { icon: <Database className="w-5 h-5 text-blue-400" />, title: "PostgreSQL / MySQL", desc: "Bases de datos relacionales con integridad transaccional." },
              { icon: <ShieldCheck className="w-5 h-5 text-purple-400" />, title: "Autenticación JWT & 2FA", desc: "Seguridad por roles de usuario, permisos y encriptación de claves." },
              { icon: <Cpu className="w-5 h-5 text-amber-400" />, title: "APIs & Webhooks", desc: "Conexión directa con pasarelas de pago, SRI y WhatsApp." },
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
              Planes de Desarrollo
            </p>
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white">
              Paquetes de Desarrollo de Software
            </h2>
            <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed">
              Inversión clara y transparente sin costos ocultos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {SOFTWARE_PLANS.map((plan, idx) => (
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
                  Cotizar Proyecto
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PREGUNTAS FRECUENTES ─────────────────────────────────── */}
      <FaqAccordion faqs={SOFTWARE_FAQS} title="Preguntas Frecuentes sobre Software" />

      {/* ── 6. CTA BANNER ───────────────────────────────────────────── */}
      <section className="py-20">
        <div className="w-[90%] max-w-[1700px] mx-auto">
          <div className="rounded-3xl p-10 sm:p-14 text-center space-y-6 bg-gradient-to-b from-[#0D0F16] to-[#05070B] border border-white/[0.08]">
            <h3 className="font-heading font-semibold text-2xl sm:text-4xl text-white">
              ¿Tienes una Idea o Proyecto en Mente?
            </h3>
            <p className="text-white/60 font-light text-sm max-w-lg mx-auto">
              Agenda una reunión técnica con nuestros ingenieros de software para analizar requerimientos y entregarte una cotización formal.
            </p>
            <div className="pt-2">
              <a
                href="https://webfixsoluciones.net/cliente/contact.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm text-white bg-[#1C40F2] hover:bg-[#1534c9] shadow-[0_0_20px_rgba(28,64,242,0.4)] transition-all"
              >
                <span>Solicitar Asesoría Técnica</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
