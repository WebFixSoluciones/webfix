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
    name: "Dedicado BareMetal Power 1",
    cpu: "AMD Ryzen 7 7700 (8 Cores / 16 Threads 5.3 GHz)",
    ram: "64 GB DDR5 ECC",
    storage: "2x 1 TB NVMe SSD RAID 1",
    bandwidth: "1 Gbps Puerto Ilimitado",
    price: 89.00,
    whmcsUrl: "https://webfixsoluciones.net/cliente/cart.php?a=add&pid=dedicated-1"
  },
  {
    name: "Dedicado BareMetal Pro 2",
    popular: true,
    cpu: "AMD EPYC 7402P (24 Cores / 48 Threads 3.35 GHz)",
    ram: "128 GB DDR4 ECC Reg",
    storage: "2x 2 TB NVMe SSD Enterprise RAID 1",
    bandwidth: "1 Gbps Puerto Ilimitado",
    price: 149.00,
    whmcsUrl: "https://webfixsoluciones.net/cliente/cart.php?a=add&pid=dedicated-2"
  },
  {
    name: "Dedicado Enterprise Ultra",
    cpu: "Dual Intel Xeon Silver 4314 (32 Cores / 64 Threads)",
    ram: "256 GB DDR4 ECC Reg",
    storage: "4x 2 TB NVMe Datacenter RAID 10",
    bandwidth: "10 Gbps Puerto Redundante",
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
    <div className="pt-28 pb-20 bg-tech-grid">
      <section className="py-16 md:py-24 text-center space-y-6 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-bold text-cyan-300">
          <Server className="w-3.5 h-3.5 text-cyan-400" />
          <span>Infraestructura Dedicada de Máximo Rendimiento</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Servidores Dedicados <span className="text-gradient-blue">Bare Metal</span>
        </h1>

        <p className="text-slate-300 text-lg sm:text-xl leading-relaxed">
          Recursos 100% dedicados para tus aplicaciones más exigentes, bases de datos masivas y plataformas de virtualización con hardware empresarial.
        </p>
      </section>

      {/* Plans */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DEDICATED_SPECS.map((srv, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl glass-card flex flex-col justify-between border ${
                srv.popular ? "border-2 border-brand-500 shadow-2xl shadow-brand-950/80" : "border-slate-800"
              }`}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{srv.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">${srv.price.toFixed(2)}</span>
                    <span className="text-slate-400 text-sm">/mes</span>
                  </div>
                </div>

                <div className="space-y-3 border-t border-slate-800 pt-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <Cpu className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                    <span><strong>Procesador:</strong> {srv.cpu}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>RAM:</strong> {srv.ram}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <HardDrive className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>Discos:</strong> {srv.storage}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Network className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span><strong>Red:</strong> {srv.bandwidth}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Protección DDoS:</strong> 2 Tbps Arbor Networks</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="https://webfixsoluciones.net/cliente/cart.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-brand-600 hover:bg-brand-500 shadow-lg shadow-brand-600/30 transition-all"
                >
                  <span>CONFIGURAR SERVIDOR</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion faqs={DEDICATED_FAQS} title="Preguntas Frecuentes sobre Servidores Dedicados" />
    </div>
  );
}
