"use client";

import { useState } from "react";
import { Cpu, Check, ArrowRight, ShieldCheck, Zap, HardDrive, Network, Terminal, Server, Sparkles } from "lucide-react";
import FaqAccordion from "@/components/home/FaqAccordion";
import { FAQItem } from "@/data/faqs";

const VPS_FAQS: FAQItem[] = [
  {
    question: "¿Qué es un Servidor VPS y en qué se diferencia del Hosting Compartido?",
    answer: "Un Servidor VPS (Servidor Privado Virtual) te proporciona un entorno 100% aislado con recursos de CPU, memoria RAM y discos NVMe garantizados, además de acceso root completo por SSH para instalar cualquier software.",
  },
  {
    question: "¿Qué sistemas operativos están disponibles para instalar?",
    answer: "Puedes elegir e instalar con 1 clic: Ubuntu 22.04 / 24.04 LTS, AlmaLinux 9, Rocky Linux, Debian 12, CloudLinux o Windows Server, además de paneles cPanel, Plesk o CyberPanel.",
  },
  {
    question: "¿Puedo escalar la memoria RAM o el almacenamiento más adelante?",
    answer: "Sí, puedes aumentar la capacidad de núcleos de CPU, RAM o almacenamiento NVMe en cualquier momento desde tu panel de cliente sin perder configuraciones ni reinstalar tu servidor.",
  },
];

const VPS_PLANS = [
  {
    name: "VPS Cloud 1",
    price: 9.99,
    period: "/mes",
    desc: "Para desarrolladores, bots, APIs y sitios web con tráfico moderado.",
    specs: {
      cpu: "2 vCPU (AMD EPYC)",
      ram: "4 GB RAM DDR5",
      storage: "50 GB NVMe PCIe 4.0",
      bandwidth: "1 Gbps Puerto / 2 TB Tráfico"
    },
    features: [
      "Acceso Root Total por SSH",
      "Dirección IPv4 Dedicada",
      "Protección Anti-DDoS 2 Tbps",
      "Snapshots y Backups Diarios",
      "Reinstalación con 1 Clic"
    ],
    popular: false,
    whmcsUrl: "https://webfixsoluciones.net/cliente/cart.php?a=add&pid=vps-1"
  },
  {
    name: "VPS Cloud Pro 2",
    price: 19.99,
    period: "/mes",
    desc: "El balance ideal para e-commerce, múltiples webs y bases de datos pesadas.",
    specs: {
      cpu: "4 vCPU (AMD EPYC)",
      ram: "8 GB RAM DDR5",
      storage: "100 GB NVMe PCIe 4.0",
      bandwidth: "1 Gbps Puerto / 5 TB Tráfico"
    },
    features: [
      "Acceso Root Total por SSH",
      "Dirección IPv4 Dedicada",
      "Protección Anti-DDoS 2 Tbps",
      "Snapshots y Backups Diarios",
      "Panel cPanel / CyberPanel disponible",
      "Soporte prioritario 24/7"
    ],
    popular: true,
    whmcsUrl: "https://webfixsoluciones.net/cliente/cart.php?a=add&pid=vps-2"
  },
  {
    name: "VPS Cloud Ultra 3",
    price: 39.99,
    period: "/mes",
    desc: "Máxima potencia de cómputo para aplicaciones empresariales y microservicios.",
    specs: {
      cpu: "8 vCPU (AMD EPYC)",
      ram: "16 GB RAM DDR5",
      storage: "200 GB NVMe PCIe 4.0",
      bandwidth: "1 Gbps Puerto / Tráfico Ilimitado"
    },
    features: [
      "Acceso Root Total por SSH",
      "2 Direcciones IPv4 Dedicadas",
      "Protección Anti-DDoS 2 Tbps",
      "Copias de Seguridad JetBackup",
      "Optimización LiteSpeed / Nginx",
      "SLA 99.99% Garantizado"
    ],
    popular: false,
    whmcsUrl: "https://webfixsoluciones.net/cliente/cart.php?a=add&pid=vps-3"
  }
];

export default function HostingVpsPage() {
  return (
    <div className="pt-28 pb-20 bg-[#05070B] text-white">
      {/* ── 1. HERO SECTION ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono text-[#00E4B8] border border-[#00E4B8]/30 bg-[#00E4B8]/5">
            <Cpu className="w-4 h-4" />
            <span>Servidores Privados Virtuales NVMe de Alta Velocidad</span>
          </div>

          <h1 className="font-heading font-semibold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Servidores VPS Cloud <br />
            <span className="text-[#00E4B8]">con Procesadores AMD EPYC</span>
          </h1>

          <p className="text-white/60 font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Recursos dedicados 100% garantizados, almacenamiento NVMe PCIe 4.0, acceso root total por SSH y despliegue automático en segundos.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#planes"
              className="px-8 py-3.5 rounded-xl font-medium text-sm text-white bg-[#1C40F2] hover:bg-[#1534c9] transition-all shadow-[0_0_20px_rgba(28,64,242,0.4)]"
            >
              Ver Planes VPS desde $9.99/mes
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. BENEFICIOS / QUÉ GANA EL CLIENTE ──────────────────────── */}
      <section className="py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-[11px] uppercase tracking-widest font-mono text-[#00E4B8]">
              Beneficios VPS
            </p>
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white">
              ¿Por Qué Elegir los Servidores VPS de WebFix?
            </h2>
            <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed">
              Potencia de servidor dedicado al precio accesible de la nube.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00E4B8]/10 border border-[#00E4B8]/20 flex items-center justify-center text-[#00E4B8]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Rendimiento 100% Aislado
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Tus núcleos de CPU y memoria RAM te pertenecen exclusivamente a ti. Los picos de tráfico de otros usuarios jamás afectarán la velocidad de tu VPS.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1C40F2]/10 border border-[#1C40F2]/20 text-[#1C40F2] flex items-center justify-center">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Control Root & Personalización
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Instala cualquier software, lenguaje (Node.js, Python, Golang, PHP), motor de base de datos o contenedor Docker con privilegios administrativos.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Seguridad & Factura SRI en Ecuador
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Protección anti-DDoS volumétrica de 2 Tbps y comprobantes electrónicos con RUC válidos para deducción fiscal de tu empresa.
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
              Arquitectura de Servidores VPS
            </h2>
            <p className="text-white/60 font-light text-xs sm:text-sm">
              Hardware de última generación para operaciones críticas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: <Cpu className="w-5 h-5 text-[#00E4B8]" />, title: "AMD EPYC Gen 4", desc: "Procesadores de alta frecuencia para cómputo intensivo." },
              { icon: <HardDrive className="w-5 h-5 text-blue-400" />, title: "Discos NVMe RAID 10", desc: "Hasta 7,000 MB/s de lectura para consultas instantáneas." },
              { icon: <Network className="w-5 h-5 text-purple-400" />, title: "Red 1 Gbps Dedicada", desc: "Conectividad de ultra baja latencia con peering directo." },
              { icon: <Server className="w-5 h-5 text-amber-400" />, title: "KVM Virtualization", desc: "Virtualización a nivel de hardware 100% aislada." },
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
              Planes de Servidores VPS
            </p>
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white">
              Escala tu Infraestructura Cloud
            </h2>
            <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed">
              Elige la configuración de hardware que mejor se adapte a tus requerimientos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {VPS_PLANS.map((plan, idx) => (
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
                      <span className="text-white/40 block text-[10px]">RED</span>
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
                  Configurar Servidor VPS
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PREGUNTAS FRECUENTES ─────────────────────────────────── */}
      <FaqAccordion faqs={VPS_FAQS} title="Preguntas Frecuentes sobre Servidores VPS" />

      {/* ── 6. CTA BANNER ───────────────────────────────────────────── */}
      <section className="py-20">
        <div className="w-[90%] max-w-[1700px] mx-auto">
          <div className="rounded-3xl p-10 sm:p-14 text-center space-y-6 bg-gradient-to-b from-[#0D0F16] to-[#05070B] border border-white/[0.08]">
            <h3 className="font-heading font-semibold text-2xl sm:text-4xl text-white">
              ¿Necesitas una Configuración Personalizada de VPS?
            </h3>
            <p className="text-white/60 font-light text-sm max-w-lg mx-auto">
              Diseñamos clústeres VPS, configuraciones de alta disponibilidad y soporte de administración delegada.
            </p>
            <div className="pt-2">
              <a
                href="https://webfixsoluciones.net/cliente/contact.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm text-white bg-[#1C40F2] hover:bg-[#1534c9] shadow-[0_0_20px_rgba(28,64,242,0.4)] transition-all"
              >
                <span>Solicitar Asesoría de Servidor</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
