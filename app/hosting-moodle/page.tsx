"use client";

import { useState } from "react";
import { GraduationCap, Check, ArrowRight, ShieldCheck, Zap, Users, BookOpen, Video, Server, Sparkles } from "lucide-react";
import FaqAccordion from "@/components/home/FaqAccordion";
import { FAQItem } from "@/data/faqs";

const MOODLE_FAQS: FAQItem[] = [
  {
    question: "¿Qué es Moodle y por qué requiere un hosting especializado?",
    answer: "Moodle es la plataforma de gestión de aprendizaje (LMS) más utilizada del mundo. Requiere servidores optimizados con alto límite de memoria PHP, bases de datos MySQL rápidas y OPcache para procesar exámenes simultáneos, cuestionarios y streaming de clases sin colapsar.",
  },
  {
    question: "¿Cuántos alumnos simultáneos pueden rendir exámenes a la vez?",
    answer: "Nuestros planes están dimensionados para soportar desde 100 hasta más de 1,500 alumnos rindiendo cuestionarios simultáneamente sin caídas, gracias a la caché LSCache y aceleración Redis en RAM.",
  },
  {
    question: "¿Incluyen instalación de Moodle y soporte técnico?",
    answer: "Sí, entregamos Moodle preinstalado en su última versión estable en español, con certificados SSL gratuitos y soporte técnico especializado para resolver cualquier duda de configuración.",
  },
];

const MOODLE_PLANS = [
  {
    name: "Campus Academy",
    price: 14.99,
    period: "/mes",
    desc: "Para academias privadas, escuelas, institutos y capacitadores independientes.",
    specs: {
      users: "Hasta 250 Alumnos",
      ram: "4 GB RAM Dedicada",
      storage: "60 GB NVMe PCIe 4.0",
      bandwidth: "Tráfico Ilimitado"
    },
    features: [
      "Moodle Preinstalado en Español",
      "Soporte para 80 Alumnos en Examen Concurrente",
      "Aceleración LSCache + Redis en RAM",
      "Copias de Seguridad Diarias JetBackup",
      "Certificado SSL Gratis Ilimitado",
      "Factura SRI autorizada"
    ],
    popular: false,
    whmcsUrl: "https://webfixsoluciones.net/cliente/cart.php?a=add&pid=moodle-1"
  },
  {
    name: "Campus Pro Institutos",
    price: 29.99,
    period: "/mes",
    desc: "Para colegios, institutos superiores y centros de formación continua.",
    specs: {
      users: "Hasta 1,000 Alumnos",
      ram: "8 GB RAM Dedicada",
      storage: "120 GB NVMe PCIe 4.0",
      bandwidth: "Tráfico Ilimitado"
    },
    features: [
      "Moodle Preinstalado en Español",
      "Soporte para 300 Alumnos en Examen Concurrente",
      "Aceleración LSCache + Redis en RAM",
      "Integración con Zoom, Google Meet y BigBlueButton",
      "Copias de Seguridad Diarias Externas",
      "Dominio .COM o .EC Gratis por 1 año",
      "Soporte prioritario 24/7"
    ],
    popular: true,
    whmcsUrl: "https://webfixsoluciones.net/cliente/cart.php?a=add&pid=moodle-2"
  },
  {
    name: "Campus Universidad VIP",
    price: 59.99,
    period: "/mes",
    desc: "Para universidades, fundaciones y grandes organizaciones con alta demanda.",
    specs: {
      users: "Más de 3,500 Alumnos",
      ram: "16 GB RAM Dedicada",
      storage: "250 GB NVMe PCIe 4.0",
      bandwidth: "Tráfico Ilimitado"
    },
    features: [
      "Clúster Moodle de Alto Rendimiento",
      "Soporte para 1,000+ Alumnos en Examen Concurrente",
      "Base de Datos MariaDB en Discos NVMe RAID 10",
      "IP Dedicada + WAF Anti-DDoS Imunify360",
      "Optimización de Plugins y Temas Personalizados",
      "Ingeniero de soporte asignado 24/7"
    ],
    popular: false,
    whmcsUrl: "https://webfixsoluciones.net/cliente/cart.php?a=add&pid=moodle-3"
  }
];

export default function HostingMoodlePage() {
  return (
    <div className="pt-28 pb-20 bg-[#05070B] text-white">
      {/* ── 1. HERO SECTION ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono text-[#00E4B8] border border-[#00E4B8]/30 bg-[#00E4B8]/5">
            <GraduationCap className="w-4 h-4" />
            <span>Infraestructura Especializada para Aulas Virtuales & LMS</span>
          </div>

          <h1 className="font-heading font-semibold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Hosting Moodle en Ecuador <br />
            <span className="text-[#00E4B8]">con Alta Concurrencia de Alumnos</span>
          </h1>

          <p className="text-white/60 font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Servidores LiteSpeed Enterprise preparados para soportar exámenes masivos simultáneos, tareas, foros y videoconferencias sin lentitud.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#planes"
              className="px-8 py-3.5 rounded-xl font-medium text-sm text-white bg-[#1C40F2] hover:bg-[#1534c9] transition-all shadow-[0_0_20px_rgba(28,64,242,0.4)]"
            >
              Ver Planes Moodle desde $14.99/mes
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
              ¿Por Qué Alojar tu Campus Virtual en WebFix?
            </h2>
            <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed">
              Garantiza una experiencia educativa fluida y sin frustraciones para profesores y estudiantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00E4B8]/10 border border-[#00E4B8]/20 flex items-center justify-center text-[#00E4B8]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Cero Caídas durante Exámenes
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Aceleración Redis y PHP OPcache para soportar cientos de estudiantes enviando cuestionarios y evaluaciones al mismo segundo.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1C40F2]/10 border border-[#1C40F2]/20 text-[#1C40F2] flex items-center justify-center">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Integración con Clases en Vivo
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Compatible con plugins de videoconferencia como BigBlueButton, Zoom, Google Meet y Microsoft Teams para clases interactivas.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Moodle Listo para Usar
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Entregamos tu plataforma lista en español, configurada con parámetros optimizados de subida de archivos grandes (hasta 1 GB por tarea).
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
              Herramientas de Alto Desempeño para Moodle
            </h2>
            <p className="text-white/60 font-light text-xs sm:text-sm">
              Infraestructura preparada para el sector educativo en Ecuador.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: <Zap className="w-5 h-5 text-[#00E4B8]" />, title: "LiteSpeed LSCache", desc: "Caché de páginas estáticas e imágenes para reducir carga en el servidor." },
              { icon: <Server className="w-5 h-5 text-blue-400" />, title: "MySQL Optimizado", desc: "Ajustes especiales de InnoDB buffer pool para consultas pesadas." },
              { icon: <ShieldCheck className="w-5 h-5 text-purple-400" />, title: "Backups Automatizados", desc: "Copias de seguridad diarias de cursos, notas y bases de datos." },
              { icon: <GraduationCap className="w-5 h-5 text-amber-400" />, title: "Factura SRI Electrónica", desc: "Comprobantes autorizados con RUC para colegios y universidades." },
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

      {/* ── 4. PLANES DE PRECIOS (3 PLANES) ─────────────────────────── */}
      <section id="planes" className="py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-[11px] uppercase tracking-widest font-mono text-[#00E4B8]">
              Planes Moodle LMS
            </p>
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white">
              Planes Dimensionados para tu Institución
            </h2>
            <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed">
              Elige el plan según el número de estudiantes de tu campus virtual.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {MOODLE_PLANS.map((plan, idx) => (
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

                  {/* Specs Matrix */}
                  <div className="grid grid-cols-2 gap-2.5 mb-6 text-xs font-mono">
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.05]">
                      <span className="text-white/40 block text-[10px]">ALUMNOS</span>
                      <span className="text-white font-medium">{plan.specs.users}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.05]">
                      <span className="text-white/40 block text-[10px]">RAM</span>
                      <span className="text-white font-medium">{plan.specs.ram}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.05]">
                      <span className="text-white/40 block text-[10px]">DISCO</span>
                      <span className="text-white font-medium">{plan.specs.storage}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.05]">
                      <span className="text-white/40 block text-[10px]">TRÁFICO</span>
                      <span className="text-white font-medium">{plan.specs.bandwidth}</span>
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
                  Contratar Hosting Moodle
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PREGUNTAS FRECUENTES ─────────────────────────────────── */}
      <FaqAccordion faqs={MOODLE_FAQS} title="Preguntas Frecuentes sobre Hosting Moodle" />

      {/* ── 6. CTA BANNER ───────────────────────────────────────────── */}
      <section className="py-20">
        <div className="w-[90%] max-w-[1700px] mx-auto">
          <div className="rounded-3xl p-10 sm:p-14 text-center space-y-6 bg-gradient-to-b from-[#0D0F16] to-[#05070B] border border-white/[0.08]">
            <h3 className="font-heading font-semibold text-2xl sm:text-4xl text-white">
              ¿Deseas Migrar tu Campus Moodle Actual a WebFix?
            </h3>
            <p className="text-white/60 font-light text-sm max-w-lg mx-auto">
              Nuestros especialistas transfieren todos tus cursos, usuarios y calificaciones sin pérdida de datos ni cortes de servicio.
            </p>
            <div className="pt-2">
              <a
                href="https://webfixsoluciones.net/cliente/contact.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm text-white bg-[#1C40F2] hover:bg-[#1534c9] shadow-[0_0_20px_rgba(28,64,242,0.4)] transition-all"
              >
                <span>Solicitar Migración Gratuita de Moodle</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
