import type { Metadata } from "next";
import Image from "next/image";
import { Zap, Check, ArrowRight, ShieldCheck, Sparkles, Server, HardDrive, Cpu, RefreshCw } from "lucide-react";
import PricingSection from "@/components/home/PricingSection";
import FaqAccordion from "@/components/home/FaqAccordion";
import { FAQItem } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Hosting WordPress Ultra-Rápido | LiteSpeed NVMe en Ecuador",
  description: "Hosting WordPress optimizado con LiteSpeed Cache, discos NVMe ultrarrápidos, cPanel, SSL Gratis y Staging en 1 clic. Desde $3.75/mes.",
};

const WP_FAQS: FAQItem[] = [
  {
    question: "¿Por qué el Hosting WordPress de WebFix es más rápido?",
    answer: "Utilizamos servidores LiteSpeed Web Server con módulo LSCache integrado a nivel de kernel, almacenamiento 100% NVMe PCIe 4.0 y aceleración OPcache para PHP 8.x, lo que entrega tiempos de carga hasta 10 veces superiores a los hosting tradicionales con Apache.",
  },
  {
    question: "¿Puedo crear entornos de prueba (Staging) para mi web?",
    answer: "Sí, todos los planes WP Pro y WP Expert incluyen la herramienta de Staging en 1 clic en cPanel para clonar tu web, hacer pruebas de plugins y diseño, y sincronizar los cambios a producción sin riesgo.",
  },
  {
    question: "¿Incluyen migración gratuita de mi web actual de WordPress?",
    answer: "Sí. Migramos tu sitio WordPress completo (archivos, base de datos MySQL y cuentas de correo) sin interrumpir el funcionamiento de tu web.",
  }
];

export default function HostingWordPressPage() {
  return (
    <div className="pt-28 pb-20 vercel-grid">
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden vercel-spotlight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl text-xs font-mono text-cyan-400">
                <Zap className="w-3.5 h-3.5" />
                <span>Optimizado para WordPress & WooCommerce</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight text-shine">
                Hosting WordPress <br />
                <span className="text-gradient-electric">Ultra-Rápido & Escalable</span>
              </h1>

              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Lleva la velocidad de tu web al límite con servidores LiteSpeed Enterprise, almacenamiento NVMe, cPanel, instalador automático y seguridad Imunify360 en Ecuador.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <a
                  href="#planes"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-black bg-white hover:bg-zinc-200 shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)] transition-all transform hover:scale-[1.02]"
                >
                  <Zap className="w-4 h-4 fill-black" />
                  <span>Ver Planes WordPress</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
                <div>✓ LiteSpeed Cache</div>
                <div>✓ Staging en 1 Clic</div>
                <div>✓ SSL & Backups Diarios</div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="p-6 rounded-3xl glass-panel-interactive border border-white/[0.1] shadow-2xl relative">
                <div className="relative w-full h-64 sm:h-72">
                  <Image
                    src="/assets/wordpress-host.png"
                    alt="Hosting WordPress WebFix"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Feature Deep Dive */}
      <section className="py-24 border-y border-white/[0.06] bg-zinc-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-shine">
              Herramientas Premium para WordPress
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm">
              Administra, acelera y protege tu sitio sin complicaciones técnicas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl glass-panel-interactive space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">LiteSpeed Cache Integrado</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Aceleración a nivel de servidor con caché de páginas dinámicas, optimización de imágenes a WebP y minificación de CSS/JS.
              </p>
            </div>

            <div className="p-7 rounded-3xl glass-panel-interactive space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Staging & Copias en 1 Clic</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Crea un clon exacto de tu sitio web para probar actualizaciones de temas y plugins de forma segura antes de publicarlos en vivo.
              </p>
            </div>

            <div className="p-7 rounded-3xl glass-panel-interactive space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Seguridad Imunify360</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                WAF proactivo con reglas especializadas para WordPress, detección de vulnerabilidades y desinfección automática de malware.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion faqs={WP_FAQS} title="Preguntas Frecuentes sobre Hosting WordPress" />
    </div>
  );
}
