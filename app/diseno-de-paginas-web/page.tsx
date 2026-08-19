import type { Metadata } from "next";
import { Layout, Check, ArrowRight, Sparkles, Smartphone, Search, ShoppingBag, Zap } from "lucide-react";
import FaqAccordion from "@/components/home/FaqAccordion";
import { FAQItem } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Diseño de Páginas Web Profesionales en Ecuador | WebFix",
  description: "Diseño de páginas web modernas, responsivas y optimizadas para ventas y SEO en Ecuador. Landing pages, webs corporativas y tiendas online con hosting incluido.",
};

const WEB_PACKAGES = [
  {
    name: "Landing Page",
    price: 149.00,
    desc: "Para captación de prospectos y campañas de conversión inmediata.",
    features: [
      "Diseño One-Page Ultra-Moderno",
      "Hosting LiteSpeed NVMe + SSL por 1 Año",
      "Dominio .COM Gratis por 1 Año",
      "Botón de Chat en Vivo y Contacto",
      "Optimización de Velocidad y SEO",
      "Entrega Rápida en 3 a 5 Días"
    ]
  },
  {
    name: "Sitio Web Corporativo",
    popular: true,
    badge: "MÁS POPULAR",
    price: 289.00,
    desc: "Presencia integral para empresas con catálogo de servicios y blog.",
    features: [
      "Hasta 6 Secciones Autoadministrables",
      "Hosting WP Pro NVMe + SSL por 1 Año",
      "Dominio .COM Gratis por 1 Año",
      "5 Correos Corporativos Personalizados",
      "Panel de Administración Intuitivo",
      "Optimización 100/100 Core Web Vitals",
      "Capacitación de Gestión Incluida"
    ]
  },
  {
    name: "Tienda Online WooCommerce",
    price: 499.00,
    desc: "Vende productos con pasarelas de pago y gestión de inventario.",
    features: [
      "Tienda Completa con Catálogo y Checkout",
      "Integración de Pasarelas (Tarjetas, PayPal, Bancos)",
      "Hosting WP Expert NVMe por 1 Año",
      "Dominio .COM Gratis por 1 Año",
      "Cálculo de Envíos e Impuestos",
      "Capacitación para Gestión de Pedidos"
    ]
  }
];

const DESIGN_FAQS: FAQItem[] = [
  {
    question: "¿El diseño web incluye el hosting y dominio?",
    answer: "¡Sí! Todos nuestros paquetes de diseño web incluyen 1 año completo de Hosting LiteSpeed NVMe de alta velocidad y 1 año de registro de dominio .COM gratuito.",
  },
  {
    question: "¿Podré editar los textos e imágenes de mi sitio web yo mismo?",
    answer: "Sí. Diseñamos bajo plataformas intuitivas y te entregamos accesos con una capacitación personalizada para que puedas subir fotos, cambiar precios o añadir noticias cuando lo desees.",
  },
  {
    question: "¿Cuál es la forma de pago para proyectos de diseño?",
    answer: "Se trabaja con un anticipo del 50% al iniciar el proyecto y el 50% restante contra entrega y aprobación final de tu sitio web.",
  }
];

export default function DisenoDePaginasWebPage() {
  return (
    <div className="pt-28 pb-20 vercel-grid">
      <section className="py-16 md:py-24 text-center space-y-6 max-w-4xl mx-auto px-4 sm:px-6 vercel-spotlight">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl text-xs font-mono text-cyan-400">
          <Layout className="w-3.5 h-3.5" />
          <span>Diseño & Desarrollo Digital</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight text-shine">
          Páginas Web Diseñadas para <br />
          <span className="text-gradient-electric">Convertir Visitas en Clientes</span>
        </h1>

        <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Diseños visualmente impactantes, con tipografía impecable, animaciones sutiles y hosting de alta velocidad incluido.
        </p>
      </section>

      {/* Packages */}
      <section className="py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {WEB_PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className={`p-7 sm:p-8 rounded-3xl flex flex-col justify-between transition-all relative ${
                pkg.popular
                  ? "bg-zinc-950/90 border-2 border-blue-500/80 shadow-[0_0_50px_rgba(0,102,255,0.3)] lg:-translate-y-2"
                  : "glass-panel-interactive"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-blue-600 text-white shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="border-b border-white/[0.08] pb-6 mb-6">
                  <h3 className="text-xl font-bold text-white mb-1.5">{pkg.name}</h3>
                  <p className="text-xs text-zinc-400 min-h-[34px]">
                    {pkg.desc}
                  </p>

                  <div className="mt-4 flex items-baseline gap-1 font-mono">
                    <span className="text-4xl font-extrabold text-white">${pkg.price.toFixed(2)}</span>
                    <span className="text-zinc-500 text-xs">/pago único</span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-8 text-xs text-zinc-300">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://webfixsoluciones.net/cliente/contact.php"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-xs text-black bg-white hover:bg-zinc-200 shadow-md transition-all cursor-pointer"
              >
                <span>SOLICITAR COTIZACIÓN</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <FaqAccordion faqs={DESIGN_FAQS} title="Preguntas Frecuentes sobre Diseño Web" />
    </div>
  );
}
