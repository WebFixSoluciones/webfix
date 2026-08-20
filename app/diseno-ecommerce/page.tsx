"use client";

import { useState } from "react";
import { ShoppingBag, Check, ArrowRight, ShieldCheck, Zap, CreditCard, Truck, BarChart3, Smartphone, Sparkles } from "lucide-react";
import FaqAccordion from "@/components/home/FaqAccordion";
import { FAQItem } from "@/data/faqs";

const ECOMMERCE_FAQS: FAQItem[] = [
  {
    question: "¿Qué pasarelas de pago se pueden integrar en la tienda online?",
    answer: "Integramos las principales pasarelas de pago de Ecuador e internacionales: Payphone, Datafast, Kushki, PlacetoPay, PayPal, Stripe y transferencias directas a Banco Pichincha, Guayaquil, Pacífico, Produbanco.",
  },
  {
    question: "¿Incluye hosting, dominio y certificado de seguridad SSL?",
    answer: "Sí, todos nuestros paquetes de diseño de tiendas online incluyen 1 año completo de Hosting LiteSpeed NVMe de alta velocidad, Dominio .COM o .EC gratis y certificado SSL para transacciones seguras.",
  },
  {
    question: "¿Puedo subir y gestionar mis productos yo mismo?",
    answer: "Sí. La tienda se entrega 100% autoadministrable con un panel en español fácil de usar y te brindamos una sesión de capacitación en video para que aprendas a cargar productos, precios, fotos y cupones de descuento.",
  },
];

const ECOMMERCE_PLANS = [
  {
    name: "Tienda Starter",
    price: 199.0,
    period: "/pago único",
    desc: "Para emprendedores que inician su catálogo de productos y ventas en redes.",
    features: [
      "Hasta 50 Productos con Fotos y Precios",
      "Carrito de Compras y Checkout Optimizado",
      "Botón de Pedido Directo a WhatsApp",
      "Integración con Transferencias Bancarias",
      "1 Año de Hosting LiteSpeed + Dominio .COM",
      "Certificado SSL de Seguridad y Antivirus",
      "Diseño 100% Adaptado a Celulares"
    ],
    popular: false,
    whmcsUrl: "https://webfixsoluciones.net/cliente/contact.php"
  },
  {
    name: "Tienda Pro WooCommerce",
    price: 380.0,
    period: "/pago único",
    desc: "La solución completa con pagos con tarjeta de crédito/débito y control de stock.",
    features: [
      "Productos y Categorías Ilimitadas",
      "Pasarelas de Pago con Tarjeta (Payphone, Datafast)",
      "Cálculo automático de costos de envío por ciudad",
      "Sistema de Cupones de Descuento y Promociones",
      "Gestión de Inventario y Notificaciones por Correo",
      "1 Año de Hosting Cloud NVMe + Dominio Gratis",
      "Capacitación en video para administración",
      "Soporte técnico continuo"
    ],
    popular: true,
    whmcsUrl: "https://webfixsoluciones.net/cliente/contact.php"
  },
  {
    name: "Tienda Custom / B2B",
    price: 690.0,
    period: "/pago único",
    desc: "Para empresas mayoristas, distribuidores y catálogos de alta complejidad.",
    features: [
      "Todo lo de Tienda Pro WooCommerce",
      "Precios diferenciados para Mayoristas (B2B)",
      "Sincronización con sistema de facturación / ERP",
      "Múltiples monedas e idiomas (USD / EUR)",
      "Filtros avanzados por atributos y marcas",
      "Servidor Cloud VPS Dedicado por 1 año",
      "Garantía de rendimiento 100/100 en Google"
    ],
    popular: false,
    whmcsUrl: "https://webfixsoluciones.net/cliente/contact.php"
  }
];

export default function DisenoEcommercePage() {
  return (
    <div className="pt-28 pb-20 bg-[#05070B] text-white">
      {/* ── 1. HERO SECTION ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono text-[#00E4B8] border border-[#00E4B8]/30 bg-[#00E4B8]/5">
            <ShoppingBag className="w-4 h-4" />
            <span>Diseño de Tiendas Online & Pasarelas de Pago en Ecuador</span>
          </div>

          <h1 className="font-heading font-semibold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Diseño de Tiendas Online <br />
            <span className="text-[#00E4B8]">que Venden las 24 Horas al Día</span>
          </h1>

          <p className="text-white/60 font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Convierte visitantes en clientes recurrentes. Tiendas virtuales rápidas, seguras, integradas con pagos con tarjeta en Ecuador y listas para vender.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#planes"
              className="px-8 py-3.5 rounded-xl font-medium text-sm text-white bg-[#1C40F2] hover:bg-[#1534c9] transition-all shadow-[0_0_20px_rgba(28,64,242,0.4)]"
            >
              Ver Planes de Tiendas Online
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. BENEFICIOS / QUÉ GANA EL CLIENTE ──────────────────────── */}
      <section className="py-24 border-b border-white/[0.04]">
        <div className="w-[90%] max-w-[1700px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-[11px] uppercase tracking-widest font-mono text-[#00E4B8]">
              Resultados para tu Negocio
            </p>
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white">
              ¿Por Qué Crear tu E-commerce con WebFix?
            </h2>
            <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed">
              Diseño enfocado 100% en conversión, velocidad y facilidad de compra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00E4B8]/10 border border-[#00E4B8]/20 flex items-center justify-center text-[#00E4B8]">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Cobros Automáticos en Línea
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Recibe pagos con tarjetas de crédito, débito o transferencias bancarias directas con confirmación automática de pedido en tu correo y WhatsApp.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1C40F2]/10 border border-[#1C40F2]/20 text-[#1C40F2] flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Experiencia Móvil Ultra Rápida
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Más del 80% de las compras se realizan desde teléfonos celulares. Diseñamos menús táctiles y checkout sin fricción en 1 solo clic.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0D0F16] border border-white/[0.08] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white">
                Control Total de Inventario y Métricas
              </h3>
              <p className="text-white/60 font-light text-xs sm:text-sm leading-relaxed">
                Panel con reportes de ventas diarias, productos más vendidos, stock bajo y clientes recurrentes para tomar mejores decisiones comerciales.
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
              Herramientas de E-commerce Incluidas
            </h2>
            <p className="text-white/60 font-light text-xs sm:text-sm">
              Todo lo que necesitas para operar tu tienda sin dolores de cabeza.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: <CreditCard className="w-5 h-5 text-[#00E4B8]" />, title: "Pasarelas Ecuador", desc: "Datafast, Payphone, Kushki, PlacetoPay y PayPal." },
              { icon: <Truck className="w-5 h-5 text-blue-400" />, title: "Envíos Servientrega", desc: "Tarifas por provincias y opciones de retiro en local." },
              { icon: <ShieldCheck className="w-5 h-5 text-purple-400" />, title: "Seguridad SSL 256-bit", desc: "Encriptación bancaria para proteger los datos de tus compradores." },
              { icon: <Zap className="w-5 h-5 text-amber-400" />, title: "LiteSpeed Cache NVMe", desc: "Carga inmediata de páginas de producto y carrito." },
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
              Paquetes de Tienda Online
            </p>
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white">
              Planes de Diseño de E-commerce
            </h2>
            <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed">
              Todos los paquetes incluyen Hosting LiteSpeed NVMe, Dominio gratis por 1 año y capacitación.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ECOMMERCE_PLANS.map((plan, idx) => (
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
                  Solicitar Tienda Online
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PREGUNTAS FRECUENTES ─────────────────────────────────── */}
      <FaqAccordion faqs={ECOMMERCE_FAQS} title="Preguntas Frecuentes sobre E-commerce" />

      {/* ── 6. CTA BANNER ───────────────────────────────────────────── */}
      <section className="py-20">
        <div className="w-[90%] max-w-[1700px] mx-auto">
          <div className="rounded-3xl p-10 sm:p-14 text-center space-y-6 bg-gradient-to-b from-[#0D0F16] to-[#05070B] border border-white/[0.08]">
            <h3 className="font-heading font-semibold text-2xl sm:text-4xl text-white">
              ¿Listo para Vender tus Productos por Internet?
            </h3>
            <p className="text-white/60 font-light text-sm max-w-lg mx-auto">
              Cuéntanos sobre tu negocio y te entregamos tu tienda lista para recibir pedidos en tiempo récord.
            </p>
            <div className="pt-2">
              <a
                href="https://webfixsoluciones.net/cliente/contact.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm text-white bg-[#1C40F2] hover:bg-[#1534c9] shadow-[0_0_20px_rgba(28,64,242,0.4)] transition-all"
              >
                <span>Hablar con un Diseñador Web</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
