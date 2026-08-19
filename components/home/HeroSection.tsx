"use client";

import Link from "next/link";
import {
  Check,
  Zap,
  Server,
  Mail,
  Layout,
  ArrowRight,
  ShieldCheck,
  Headphones,
  Users
} from "lucide-react";

const SOLUTIONS = [
  {
    id: "hosting-wordpress",
    icon: <Zap className="w-5 h-5 text-white" />,
    title: "Hosting WordPress",
    description: "Hosting WordPress Administrado rápido, seguro y optimizado.",
    oldPrice: "$4.50/mes",
    discount: "AHORRAS 30%",
    price: "3.75$",
    period: "/mes",
    features: [
      "Dominios .com Gratis",
      "Instalación con 1 clic",
      "Actualizaciones automáticas."
    ],
    buttonText: "Ver Planes",
    link: "/hosting-wordpress",
    whmcsUrl: "https://webfixsoluciones.net/cliente/cart.php?a=add&pid=1"
  },
  {
    id: "hosting-reseller",
    icon: <Server className="w-5 h-5 text-white" />,
    title: "Hosting Reseller",
    description: "Convierte tu negocio en proveedor de hosting cPanel",
    oldPrice: "$41/mes",
    discount: "AHORRAS 50%",
    price: "20.50$",
    period: "/mes",
    features: [
      "Dominios .com Gratis",
      "Panel WHM",
      "Cuentas de CPanel Ilimitadas"
    ],
    buttonText: "Ver Planes",
    link: "/hosting-reseller",
    whmcsUrl: "https://webfixsoluciones.net/cliente/cart.php?a=add&pid=reseller-starter"
  },
  {
    id: "correo-empresarial",
    icon: <Mail className="w-5 h-5 text-white" />,
    title: "Correo Empresarial",
    description: "Correos profesionales para tu marca. ¡Refuerza tu imagen!",
    oldPrice: "$43.75/mes",
    discount: "AHORRAS 25%",
    price: "35.00$",
    period: "/año",
    features: [
      "Dominios .com Gratis",
      "Cuentas de Correo Ilimitadas",
      "Seguridad Anti Spam"
    ],
    buttonText: "Ver Planes",
    link: "/correos-empresarial",
    whmcsUrl: "https://webfixsoluciones.net/cliente/cart.php?a=add&pid=email-starter"
  },
  {
    id: "diseno-web",
    icon: <Layout className="w-5 h-5 text-white" />,
    title: "Diseño Web",
    description: "Crea tu sitio web en minutos. ¡Haz crecer tu negocio!",
    oldPrice: "$70/mes",
    discount: "AHORRAS 40%",
    price: "10.95$",
    period: "/mes",
    features: [
      "Dominios .com Gratis",
      "Hosting Gratis",
      "Diseño Personalizado"
    ],
    buttonText: "Ver Planes",
    link: "/diseno-de-paginas-web",
    whmcsUrl: "https://webfixsoluciones.net/cliente/contact.php"
  }
];

export default function HeroSection() {
  return (
    <section className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#070B18] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#240E48]/60 via-[#1D0C3C]/30 to-transparent blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Title from Screenshot */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="font-heading font-semibold text-3xl sm:text-5xl lg:text-[3.25rem] text-[#00E4B8] tracking-tight leading-tight">
            Todas las soluciones que necesitas para tu <br className="hidden sm:inline" />
            éxito en línea
          </h1>

          {/* 3 Trust Badges from Screenshot */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-[13px] font-normal text-white/80">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D0C3C]/80 border border-purple-900/40">
              <Check className="w-4 h-4 text-[#00E4B8] shrink-0" />
              <span>Más de 1 000 clientes confían en nosotros</span>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D0C3C]/80 border border-purple-900/40">
              <Check className="w-4 h-4 text-[#00E4B8] shrink-0" />
              <span>Dominio gratis incluido en su hosting</span>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D0C3C]/80 border border-purple-900/40">
              <Check className="w-4 h-4 text-[#00E4B8] shrink-0" />
              <span>Atención al cliente 24 horas al día</span>
            </div>
          </div>
        </div>

        {/* 4-Column Solutions Cards (Dark Purple + Mint + Royal Blue) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch pt-4">
          {SOLUTIONS.map((item) => (
            <div
              key={item.id}
              className="card-purple rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Icon Box */}
                <div className="w-10 h-10 rounded-2xl bg-white/[0.08] border border-white/[0.1] flex items-center justify-center mb-5">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="font-heading font-semibold text-xl text-white mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 font-light text-xs leading-relaxed min-h-[36px] mb-5">
                  {item.description}
                </p>

                {/* Old Price + Discount Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="line-through text-fuchsia-400 text-xs font-mono">
                    {item.oldPrice}
                  </span>
                  <span className="text-[10px] font-semibold text-[#00E4B8] bg-[#00E4B8]/15 px-2 py-0.5 rounded-full uppercase tracking-wider font-mono">
                    {item.discount}
                  </span>
                </div>

                {/* Main Price */}
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-extrabold text-[#00E4B8] font-mono tracking-tight">
                    {item.price}
                  </span>
                  <span className="text-white/60 text-xs font-normal font-mono">
                    {item.period}
                  </span>
                </div>

                {/* Features list with Mint Green Checks */}
                <ul className="space-y-2.5 mb-8 text-xs font-light text-white/80">
                  {item.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-[#00E4B8] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button (Royal Blue #1C40F2) */}
              <a
                href={item.link}
                className="w-full py-3 px-5 rounded-xl font-medium text-xs text-white bg-[#1C40F2] hover:bg-[#1534c9] transition-all text-center block shadow-[0_0_15px_rgba(28,64,242,0.3)] hover:shadow-[0_0_25px_rgba(28,64,242,0.5)] transform hover:scale-[1.02]"
              >
                {item.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
