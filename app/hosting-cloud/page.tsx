"use client";

import { useState } from "react";
import { Cloud, Check, ArrowRight, ShieldCheck, Zap, HardDrive, Cpu, RefreshCw, Server, Sparkles } from "lucide-react";
import FaqAccordion from "@/components/home/FaqAccordion";
import { FAQItem } from "@/data/faqs";

const CLOUD_FAQS: FAQItem[] = [
  {
    question: "¿Qué es Hosting Cloud y cómo garantiza el 99.99% de Uptime?",
    answer: "El Hosting Cloud funciona sobre un clúster de múltiples servidores interconectados. Si un nodo físico experimenta una falla de hardware, tu sitio web se conmuta de inmediato a otro servidor sin tiempo de inactividad visible.",
  },
  {
    question: "¿En qué se diferencia el Hosting Cloud del Hosting Compartido?",
    answer: "A diferencia del hosting compartido tradicional, en Hosting Cloud dispones de recursos de CPU, RAM y discos NVMe 100% aislados y dedicados a tu cuenta, con IP dedicada y panel cPanel optimizado.",
  },
  {
    question: "¿Incluye panel de control cPanel y copias automáticas?",
    answer: "Sí, todos los planes de Hosting Cloud incluyen cPanel oficial en español, copias automáticas diarias JetBackup y certificado SSL ilimitado gratuito.",
  },
];

const CLOUD_PLANS = [
  {
    name: "Cloud Elastic Startup",
    price: 19.90,
    period: "/mes",
    desc: "Para sitios corporativos y proyectos en crecimiento que necesitan alta disponibilidad.",
    specs: {
      cpu: "3 Cores CPU",
      ram: "6 GB RAM",
      storage: "100 GB NVMe PCIe 4.0",
      ip: "1 IP Dedicada Incluida"
    },
    features: [
      "cPanel Oficial en Español",
      "LiteSpeed Enterprise + LSCache",
      "Dominio .COM Gratis por 1 año",
      "SSL Ilimitado Gratis",
      "Backups Diarios JetBackup",
      "Migración Gratuita"
    ],
    popular: false,
    whmcsUrl: "https://webfixsoluciones.net/cliente/cart.php?a=add&pid=cloud-1"
  },
  {
    name: "Cloud Professional Pro",
    price: 34.90,
    period: "/mes",
    desc: "El plan más vendido para tiendas WooCommerce, agencias y tráfico masivo.",
    specs: {
      cpu: "6 Cores CPU",
      ram: "12 GB RAM",
      storage: "200 GB NVMe PCIe 4.0",
      ip: "1 IP Dedicada Incluida"
    },
    features: [
      "cPanel Oficial en Español",
      "LiteSpeed Enterprise + LSCache",
      "Aceleración Redis Object Cache",
      "Dominio .COM o .EC Gratis por 1 año",
      "WAF Imunify360 con Inteligencia Artificial",
      "Soporte Prioritario VIP 24/7"
    ],
    popular: true,
    whmcsUrl: "https://webfixsoluciones.net/cliente/cart.php?a=add&pid=cloud-2"
  },
  {
    name: "Cloud Enterprise Ultra",
    price: 64.90,
    period: "/mes",
    desc: "Máxima potencia elástica para e-commerce de alto volumen y portales corporativos.",
    specs: {
      cpu: "10 Cores CPU",
      ram: "24 GB RAM",
      storage: "400 GB NVMe PCIe 4.0",
      ip: "2 IPs Dedicadas Incluidas"
    },
    features: [
      "Clúster Cloud con Alta Disponibilidad",
      "LiteSpeed Enterprise + Redis + Memcached",
      "Discos NVMe en arreglo RAID 10 ultra-rápido",
      "Firewall WAF Avanzado con mitigación DDoS",
      "Auditorías mensuales de velocidad Core Web Vitals",
      "Ingeniero de soporte asignado"
    ],
    popular: false,
    whmcsUrl: "https://webfixsoluciones.net/cliente/cart.php?a=add&pid=cloud-3"
  }
];

export default function HostingCloudPage() {
  return (
    <div className="pt-28 pb-20 bg-[#05070B] text-white">
      {/* ── 1. HERO SECTION ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono text-[#00E4B8] border border-[#00E4B8]/30 bg-[#00E4B8]/5">
            <Cloud className="w-4 h-4" />
            <span>Infraestructura Cloud de Alta Disponibilidad & Recursos Dedicados</span>
          </div>

          <h1 className="font-heading font-semibold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Hosting Cloud Administrado <br />
            <span className="text-[#00E4B8]">con LiteSpeed & NVMe en Ecuador</span>
          </h1>

          <p className="text-white/60 font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            La simplicidad de cPanel combinada con la potencia y redundancia de un servidor cloud dedicado. Cero complicaciones técnicas.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#planes"
              className="px-8 py-3.5 rounded-xl font-medium text-sm text-white bg-[#1C40F2] hover:bg-[#1534c9] transition-all shadow-[0_0_20px_rgba(28,64,242,0.4)]"
            >
              Ver Planes Cloud desde $19.90/mes
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. BENEFICIOS / QUÉ GANA EL CLIENTE ──────────────────────── */}
      <section className="py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-[11px] uppercase tracking-widest font-mono text-[#00E4B8]">
              Ventajas de la Nube
            </p>
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white">
              ¿Por Qué Elegir Hosting Cloud en WebFix?
            </h2>
            <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed">
              Infraestructura tolerante a fallos para negocios que no pueden permitirse 1 segundo fuera de línea.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00E4B8]/10 border border-[#00E4B8]/20 flex items-center justify-center text-[#00E4B8]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Velocidad 4× Superior
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Recursos dedicados de CPU y memoria RAM con LiteSpeed Cache en memoria para despachar solicitudes en menos de 45 ms.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1C40F2]/10 border border-[#1C40F2]/20 text-[#1C40F2] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Redundancia & Uptime 99.99%
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Tus datos residen en arreglos de almacenamiento distribuido Ceph/NVMe con conmutación automática por error.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Totalmente Administrado
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Nosotros nos encargamos de parches de seguridad del kernel, actualizaciones de cPanel, cortafuegos y copias de seguridad.
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
              Pila Tecnológica del Hosting Cloud
            </h2>
            <p className="text-white/60 font-light text-xs sm:text-sm">
              Lo último en tecnología de servidores para tu proyecto digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: <Cpu className="w-5 h-5 text-[#00E4B8]" />, title: "Cores Dedicados", desc: "Potencia de procesamiento garantizada sin sobresuscripción." },
              { icon: <HardDrive className="w-5 h-5 text-blue-400" />, title: "Discos NVMe PCIe 4.0", desc: "IOPS ultra-altos para tiendas con miles de productos." },
              { icon: <ShieldCheck className="w-5 h-5 text-purple-400" />, title: "Imunify360 WAF", desc: "Protección proactiva contra inyecciones SQL y ataques XSS." },
              { icon: <Cloud className="w-5 h-5 text-amber-400" />, title: "IP Dedicada Incluida", desc: "Mejora la reputación de entrega de tus correos y el SEO." },
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
              Planes Cloud
            </p>
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white">
              Planes de Hosting Cloud Administrado
            </h2>
            <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed">
              Recursos garantizados, cPanel y escalabilidad instantánea.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {CLOUD_PLANS.map((plan, idx) => (
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
                      <span className="text-white/40 block text-[10px]">CPU</span>
                      <span className="text-white font-medium">{plan.specs.cpu}</span>
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
                      <span className="text-white/40 block text-[10px]">IP DEDICADA</span>
                      <span className="text-white font-medium">{plan.specs.ip}</span>
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
                  Contratar Hosting Cloud
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PREGUNTAS FRECUENTES ─────────────────────────────────── */}
      <FaqAccordion faqs={CLOUD_FAQS} title="Preguntas Frecuentes sobre Hosting Cloud" />

      {/* ── 6. CTA BANNER ───────────────────────────────────────────── */}
      <section className="py-20">
        <div className="w-[90%] max-w-[1700px] mx-auto">
          <div className="rounded-3xl p-10 sm:p-14 text-center space-y-6 bg-gradient-to-b from-[#0D0F16] to-[#05070B] border border-white/[0.08]">
            <h3 className="font-heading font-semibold text-2xl sm:text-4xl text-white">
              ¿Listo para Llevar tu Negocio al Siguiente Nivel Cloud?
            </h3>
            <p className="text-white/60 font-light text-sm max-w-lg mx-auto">
              Migración gratuita en menos de 2 horas sin desconectar tu página web ni tus correos corporativos.
            </p>
            <div className="pt-2">
              <a
                href="#planes"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm text-white bg-[#1C40F2] hover:bg-[#1534c9] shadow-[0_0_20px_rgba(28,64,242,0.4)] transition-all"
              >
                <span>Comenzar en la Nube</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
