import type { Metadata } from "next";
import Image from "next/image";
import { Layout, Check, ArrowRight, Sparkles, Smartphone, Search, ShoppingBag, Zap } from "lucide-react";
import FaqAccordion from "@/components/home/FaqAccordion";
import { FAQItem } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Diseño de Páginas Web Profesionales en Ecuador | WebFix",
  description: "Diseño de páginas web modernas, responsivas y optimizadas para ventas y SEO en Ecuador. Landing pages, webs corporativas y tiendas online con hosting incluido.",
};

const WEB_PACKAGES = [
  {
    name: "Landing Page de Conversión",
    price: 149.00,
    desc: "Ideal para campañas publicitarias, lanzamientos de productos y captación de clientes potenciales.",
    features: [
      "Diseño One-Page Moderno y 100% Responsivo",
      "Hosting LiteSpeed + SSL Gratis por 1 Año",
      "Dominio .COM Gratis por 1 Año",
      "Botón de Chat y WhatsApp Flotante",
      "Formulario de Contacto a Correo",
      "Optimización SEO Básica para Google",
      "Entrega Rápida en 3 a 5 Días"
    ]
  },
  {
    name: "Sitio Web Corporativo",
    popular: true,
    badge: "MÁS SOLICITADO",
    price: 289.00,
    desc: "Para empresas y profesionales que buscan proyectar una imagen sólida y confiable en internet.",
    features: [
      "Hasta 6 Secciones (Inicio, Nosotros, Servicios, Galería, Blog, Contacto)",
      "Hosting WP Pro NVMe + SSL Gratis por 1 Año",
      "Dominio .COM Gratis por 1 Año",
      "Hasta 5 Correos Corporativos Personalizados",
      "Panel WordPress Autoadministrable Fácil",
      "Optimización de Velocidad y Core Web Vitals",
      "Integración de Google Maps y Redes Sociales",
      "Capacitación de Uso Incluida"
    ]
  },
  {
    name: "Tienda Online / eCommerce",
    price: 499.00,
    desc: "Vende tus productos 24/7 con catálogo digital, carrito de compras y pasarelas de pago.",
    features: [
      "Tienda Completa con WooCommerce",
      "Carga de hasta 30 Productos Iniciales",
      "Pasarelas de Pago (Tarjetas, Transferencias, PayPal)",
      "Hosting WP Expert de Alta Potencia por 1 Año",
      "Dominio .COM Gratis por 1 Año",
      "Cálculo Automático de Envíos e Impuestos",
      "Diseño Adaptado a Móviles",
      "Capacitación para Gestión de Pedidos e Inventario"
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
    <div className="pt-28 pb-20 bg-tech-grid">
      <section className="py-16 md:py-24 text-center space-y-6 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950/80 border border-brand-500/30 text-xs font-bold text-brand-300">
          <Layout className="w-3.5 h-3.5 text-brand-400" />
          <span>Diseño & Desarrollo Web Profesional</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Páginas Web que Convierten <span className="text-gradient-blue">Visitas en Clientes</span>
        </h1>

        <p className="text-slate-300 text-lg sm:text-xl leading-relaxed">
          Creamos sitios web visualmente impactantes, ultrarrápidos y optimizados para dispositivos móviles con hosting de alto rendimiento incluido.
        </p>
      </section>

      {/* Packages Grid */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {WEB_PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl glass-card flex flex-col justify-between border relative transition-all ${
                pkg.popular ? "border-2 border-brand-500 shadow-2xl shadow-brand-950/80 lg:-translate-y-2" : "border-slate-800"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full text-xs font-extrabold uppercase bg-brand-600 text-white shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" />
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="border-b border-slate-800 pb-6 mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 min-h-[38px]">
                    {pkg.desc}
                  </p>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">${pkg.price.toFixed(2)}</span>
                    <span className="text-slate-400 text-xs">/pago único</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 text-xs sm:text-sm text-slate-300">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://webfixsoluciones.net/cliente/contact.php"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-brand-600 hover:bg-brand-500 shadow-lg shadow-brand-600/30 transition-all cursor-pointer"
              >
                <span>SOLICITAR COTIZACIÓN</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion faqs={DESIGN_FAQS} title="Preguntas Frecuentes sobre Diseño Web" />
    </div>
  );
}
