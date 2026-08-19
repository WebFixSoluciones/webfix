import type { Metadata } from "next";
import Image from "next/image";
import { Zap, Check, ArrowRight, ShieldCheck, Sparkles, Server, HardDrive, Cpu, RefreshCw } from "lucide-react";
import PricingSection from "@/components/home/PricingSection";
import FaqAccordion from "@/components/home/FaqAccordion";
import { FAQItem } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Hosting WordPress Económico y Rápido en Ecuador | LiteSpeed NVMe",
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
    <div className="pt-28 pb-20 bg-tech-grid">
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950/80 border border-brand-500/30 text-xs font-bold text-brand-300">
                <Zap className="w-3.5 h-3.5 text-brand-400" />
                <span>Optimizado para WordPress y WooCommerce</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Hosting WordPress <span className="text-gradient-blue">Ultra-Rápido, Seguro y Escalable</span>
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Lleva la velocidad de tu web al límite con servidores LiteSpeed Enterprise, almacenamiento NVMe, cPanel, instalador automático y seguridad Imunify360 en Ecuador.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#planes"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-brand-600 hover:bg-brand-500 shadow-xl shadow-brand-600/30 transition-all"
                >
                  <Zap className="w-5 h-5" />
                  <span>Ver Planes WordPress</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
                <div>✓ LiteSpeed + LSCache</div>
                <div>✓ Staging en 1 Clic</div>
                <div>✓ SSL & Backups Diarios</div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="p-6 rounded-3xl glass-card border border-slate-700/80 shadow-2xl relative">
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
      <section className="py-20 bg-slate-950/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Herramientas Premium Diseñadas para WordPress
            </h2>
            <p className="text-slate-400">
              Todo lo que necesitas para administrar, acelerar y proteger tu sitio sin complicaciones técnicas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl glass-card border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-600/20 text-brand-400 flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">LiteSpeed Cache Integrado</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Aceleración a nivel de servidor con caché de páginas dinámicas, optimización de imágenes a WebP, minificación de CSS/JS y carga diferida.
              </p>
            </div>

            <div className="p-8 rounded-3xl glass-card border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Staging & Copias en 1 Clic</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Crea un clon exacto de tu sitio web para probar actualizaciones de temas y plugins de forma segura antes de publicarlos en vivo.
              </p>
            </div>

            <div className="p-8 rounded-3xl glass-card border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Seguridad Imunify360</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                WAF proactivo con reglas especializadas para WordPress, detección de vulnerabilidades en plugins y desinfección automática de malware.
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
