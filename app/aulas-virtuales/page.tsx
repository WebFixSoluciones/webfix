"use client";

import { useState } from "react";
import { GraduationCap, Check, ArrowRight, ShieldCheck, Zap, Users, BookOpen, Video, Award, Sparkles } from "lucide-react";
import FaqAccordion from "@/components/home/FaqAccordion";
import { FAQItem } from "@/data/faqs";

const LMS_FAQS: FAQItem[] = [
  {
    question: "¿Qué incluye el servicio de desarrollo de Aulas Virtuales?",
    answer: "Incluye la instalación y configuración personalizada de la plataforma educativa (Moodle / WordPress LMS), diseño gráfico con los colores y logo de tu institución, configuración de pasarela de pago para venta de cursos, servidor de alta velocidad y capacitación para docentes.",
  },
  {
    question: "¿Puedo vender cursos online y cobrar automáticamente?",
    answer: "Sí. Integramos pasarelas de pago automáticas (tarjeta de crédito, débito, Payphone, PayPal, transferencias) para que el alumno pague y obtenga acceso inmediato a los módulos de clase y exámenes.",
  },
  {
    question: "¿La plataforma entrega certificados automáticos al terminar el curso?",
    answer: "Sí, diseñamos plantillas de certificados PDF personalizados con código QR y código de verificación que se generan automáticamente cuando el alumno aprueba el examen final.",
  },
];

const LMS_PLANS = [
  {
    name: "Aula LMS Starter",
    price: 280.0,
    period: "/pago único",
    desc: "Para academias, profesores particulares e instructores que venden sus primeros cursos.",
    features: [
      "Plataforma LMS Personalizada con tu Marca",
      "Hasta 10 Cursos con Módulos, Videos y PDFs",
      "Cuestionarios y Evaluaciones Calificadas",
      "Generación Automática de Certificados en PDF",
      "Botón de Pago con Tarjeta y Transferencia",
      "1 Año de Hosting LiteSpeed NVMe + Dominio Gratis",
      "Capacitación en Video para Docentes"
    ],
    popular: false,
    whmcsUrl: "https://webfixsoluciones.net/cliente/contact.php"
  },
  {
    name: "Campus Pro Academy",
    price: 490.0,
    period: "/pago único",
    desc: "Para centros de capacitación, colegios y academias con múltiples docentes.",
    features: [
      "Cursos, Docentes y Alumnos Ilimitados",
      "Integración con Clases en Vivo (Zoom / Meet)",
      "Sistema de Membresías y Suscripciones Mensuales",
      "Foros de Discusión y Mensajería entre Alumnos",
      "Control Antifraude para Evitar Compartir Cuentas",
      "1 Año de Hosting Cloud Dedicado + Dominio Gratis",
      "Capacitación en Vivo para el Equipo Administrativo",
      "Soporte técnico continuo"
    ],
    popular: true,
    whmcsUrl: "https://webfixsoluciones.net/cliente/contact.php"
  },
  {
    name: "Campus Universidad / Corporativo",
    price: 890.0,
    period: "/pago único",
    desc: "Para universidades, fundaciones y programas de formación empresarial masiva.",
    features: [
      "Moodle LMS de Nivel Universitario Optimizado",
      "Soporte para Más de 2,000 Alumnos Concurrentes",
      "Integración con Sistema Académico / ERP Interno",
      "Reportes de Cumplimiento Normativo (MEC / Senescyt)",
      "Servidor Dedicado Cloud de Alto Rendimiento por 1 año",
      "Mantenimiento mensual y copias de seguridad externas",
      "SLA de Soporte Prioritario 24/7"
    ],
    popular: false,
    whmcsUrl: "https://webfixsoluciones.net/cliente/contact.php"
  }
];

export default function AulasVirtualesPage() {
  return (
    <div className="pt-28 pb-20 bg-[#05070B] text-white">
      {/* ── 1. HERO SECTION ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono text-[#00E4B8] border border-[#00E4B8]/30 bg-[#00E4B8]/5">
            <GraduationCap className="w-4 h-4" />
            <span>Desarrollo de Aulas Virtuales, Campus LMS & Venta de Cursos</span>
          </div>

          <h1 className="font-heading font-semibold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Aulas Virtuales & Campus LMS <br />
            <span className="text-[#00E4B8]">para Instituciones y Capacitadores</span>
          </h1>

          <p className="text-white/60 font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Crea tu propia escuela online. Plataformas educativas intuitivas para impartir clases, calificar exámenes, emitir certificados y monetizar tu conocimiento.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#planes"
              className="px-8 py-3.5 rounded-xl font-medium text-sm text-white bg-[#1C40F2] hover:bg-[#1534c9] transition-all shadow-[0_0_20px_rgba(28,64,242,0.4)]"
            >
              Ver Planes de Aulas Virtuales
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. BENEFICIOS / QUÉ GANA LA INSTITUCIÓN ─────────────────── */}
      <section className="py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-[11px] uppercase tracking-widest font-mono text-[#00E4B8]">
              Ventajas Educativas
            </p>
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white">
              ¿Por Qué Crear tu Aula Virtual con WebFix?
            </h2>
            <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed">
              Plataformas listas para usar sin necesidad de conocimientos técnicos avanzados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00E4B8]/10 border border-[#00E4B8]/20 flex items-center justify-center text-[#00E4B8]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Venta y Matrícula Automática
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                El alumno paga por Payphone o tarjeta y el sistema le crea el usuario y le da acceso inmediato al contenido sin intervención manual.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1C40F2]/10 border border-[#1C40F2]/20 text-[#1C40F2] flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Certificados con Código QR
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Entrega diplomas verificables que los estudiantes pueden compartir en LinkedIn o descargar en PDF con sello de tu institución.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Clases en Vivo y Grabadas
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Organiza lecciones en video protegidas contra descargas no autorizadas e integra tus sesiones de Zoom o Google Meet en el calendario.
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
              Herramientas de E-learning Incluidas
            </h2>
            <p className="text-white/60 font-light text-xs sm:text-sm">
              Todo lo necesario para brindar una educación digital de primer nivel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: <BookOpen className="w-5 h-5 text-[#00E4B8]" />, title: "Lecciones y Quizzes", desc: "Cuestionarios de opción múltiple, tareas y foros de debate." },
              { icon: <Video className="w-5 h-5 text-blue-400" />, title: "Protección de Video", desc: "Integración segura con Vimeo, YouTube Privado y Bunny.net." },
              { icon: <Award className="w-5 h-5 text-purple-400" />, title: "Certificados Digitales", desc: "Diseño gráfico personalizado con firma digitalizada." },
              { icon: <ShieldCheck className="w-5 h-5 text-amber-400" />, title: "Hosting NVMe Incluido", desc: "1 año de servidor optimizado con soporte técnico en español." },
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

      {/* ── 4. PLANES DE AULAS VIRTUALES (3 PLANES) ─────────────────── */}
      <section id="planes" className="py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-[11px] uppercase tracking-widest font-mono text-[#00E4B8]">
              Planes de Campus LMS
            </p>
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white">
              Paquetes de Aulas Virtuales
            </h2>
            <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed">
              Todos los paquetes incluyen Hosting LiteSpeed NVMe, Dominio gratis por 1 año y capacitación.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {LMS_PLANS.map((plan, idx) => (
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
                  Solicitar Aula Virtual
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PREGUNTAS FRECUENTES ─────────────────────────────────── */}
      <FaqAccordion faqs={LMS_FAQS} title="Preguntas Frecuentes sobre Aulas Virtuales" />

      {/* ── 6. CTA BANNER ───────────────────────────────────────────── */}
      <section className="py-20">
        <div className="w-[90%] max-w-[1700px] mx-auto">
          <div className="rounded-3xl p-10 sm:p-14 text-center space-y-6 bg-gradient-to-b from-[#0D0F16] to-[#05070B] border border-white/[0.08]">
            <h3 className="font-heading font-semibold text-2xl sm:text-4xl text-white">
              ¿Listo para Digitalizar tu Institución Educativa?
            </h3>
            <p className="text-white/60 font-light text-sm max-w-lg mx-auto">
              Te entregamos tu campus virtual 100% configurado y listo para recibir estudiantes en menos de 5 días.
            </p>
            <div className="pt-2">
              <a
                href="https://webfixsoluciones.net/cliente/contact.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm text-white bg-[#1C40F2] hover:bg-[#1534c9] shadow-[0_0_20px_rgba(28,64,242,0.4)] transition-all"
              >
                <span>Solicitar Demostración de Aula</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
