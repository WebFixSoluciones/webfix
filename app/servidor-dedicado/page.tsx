import type { Metadata } from "next";
import { Server, Check, ArrowRight, ShieldCheck, Cpu, HardDrive, Zap, Network } from "lucide-react";
import FaqAccordion from "@/components/home/FaqAccordion";
import { FAQItem } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Servidores Dedicados Bare Metal de Alto Rendimiento | WebFix",
  description: "Servidores Dedicados con procesadores AMD EPYC e Intel Xeon, almacenamiento NVMe RAID, conexión 1Gbps no medida y protección anti-DDoS.",
};

const DEDICATED_SPECS = [
  {
    name: "BareMetal Power 1",
    cpu: "AMD Ryzen 7 7700 (8C / 16T 5.3 GHz)",
    ram: "64 GB DDR5 ECC",
    storage: "2x 1 TB NVMe RAID 1",
    bandwidth: "1 Gbps No Medido",
    price: 89.00,
    whmcsUrl: "https://webfixsoluciones.net/cliente/cart.php?a=add&pid=dedicated-1"
  },
  {
    name: "BareMetal Pro 2",
    popular: true,
    cpu: "AMD EPYC 7402P (24C / 48T 3.35 GHz)",
    ram: "128 GB DDR4 ECC Reg",
    storage: "2x 2 TB NVMe RAID 1",
    bandwidth: "1 Gbps No Medido",
    price: 149.00,
    whmcsUrl: "https://webfixsoluciones.net/cliente/cart.php?a=add&pid=dedicated-2"
  },
  {
    name: "Enterprise Ultra 3",
    cpu: "Dual Intel Xeon Silver 4314 (32C / 64T)",
    ram: "256 GB DDR4 ECC Reg",
    storage: "4x 2 TB NVMe RAID 10",
    bandwidth: "10 Gbps Redundante",
    price: 249.00,
    whmcsUrl: "https://webfixsoluciones.net/cliente/cart.php?a=add&pid=dedicated-3"
  }
];

const DEDICATED_FAQS: FAQItem[] = [
  {
    question: "¿Qué sistema operativo puedo instalar en mi servidor dedicado?",
    answer: "Puedes elegir entre Ubuntu Server, AlmaLinux, Rocky Linux, Debian, CloudLinux, Windows Server o tu propia imagen ISO personalizada mediante acceso IPMI/KVM sobre IP.",
  },
  {
    question: "¿Cuánto tiempo toma el despliegue de un servidor dedicado?",
    answer: "Los servidores en configuración estándar se despliegan de forma automatizada en un plazo de 1 a 4 horas hábiles tras la verificación del pago.",
  }
];

export default function ServidorDedicadoPage() {
  return (
    <div className="pt-28 pb-20 vercel-grid">
      <section className="py-16 md:py-24 text-center space-y-6 max-w-4xl mx-auto px-4 sm:px-6 vercel-spotlight-cyan">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl text-xs font-mono text-cyan-400">
          <Server className="w-3.5 h-3.5" />
          <span>Infraestructura Bare Metal Dedicada</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight text-shine">
          Servidores Dedicados <br />
          <span className="text-gradient-cyan">de Alto Rendimiento</span>
        </h1>

        <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Hardware 100% aislado con procesadores AMD EPYC e Intel Xeon, almacenamiento NVMe Enterprise y protección DDoS de nivel corporativo.
        </p>
      </section>

      {/* Plans */}
      <section className="py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {DEDICATED_SPECS.map((srv, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-3xl flex flex-col justify-between transition-all ${
                srv.popular
                  ? "bg-zinc-950/90 border-2 border-cyan-500/80 shadow-[0_0_50px_rgba(0,229,255,0.2)]"
                  : "glass-panel-interactive"
              }`}
            >
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{srv.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1 font-mono">
                    <span className="text-3xl font-extrabold text-white">${srv.price.toFixed(2)}</span>
                    <span className="text-zinc-500 text-xs">/mes</span>
                  </div>
                </div>

                <div className="space-y-2.5 border-t border-white/[0.08] pt-4 text-xs font-mono text-zinc-300">
                  <div className="flex items-start gap-2">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{srv.cpu}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{srv.ram}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <HardDrive className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{srv.storage}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Network className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>{srv.bandwidth}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>DDoS Protection 2 Tbps</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="https://webfixsoluciones.net/cliente/cart.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-xs text-black bg-white hover:bg-zinc-200 shadow-md transition-all"
                >
                  <span>CONFIGURAR SERVIDOR</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FaqAccordion faqs={DEDICATED_FAQS} title="Preguntas Frecuentes sobre Servidores Dedicados" />
    </div>
  );
}
