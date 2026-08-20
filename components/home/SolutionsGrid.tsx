import Link from "next/link";
import { Check, Zap, Server, Mail, Layout } from "lucide-react";

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
    link: "/hosting-wordpress"
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
    link: "/hosting-reseller"
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
    link: "/correos-empresarial"
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
    link: "/diseno-de-paginas-web"
  }
];

export default function SolutionsGrid() {
  return (
    <section id="soluciones" className="py-24 bg-[#05070B] text-white relative border-t border-white/[0.04]">
      <div className="w-[90%] max-w-[1700px] mx-auto space-y-12">
        {/* Section Title in Exactly TWO Lines */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="font-heading font-semibold text-3xl sm:text-5xl lg:text-[3.25rem] text-white tracking-tight leading-[1.18]">
            Todas las soluciones que necesitas<br />
            para tu éxito en línea
          </h2>

          {/* 3 Trust Badges with Mint Green Checks */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs sm:text-sm font-normal text-white/70">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D0F16] border border-white/[0.08]">
              <Check className="w-4 h-4 text-[#00E4B8] shrink-0" />
              <span>Más de 1 000 clientes confían en nosotros</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D0F16] border border-white/[0.08]">
              <Check className="w-4 h-4 text-[#00E4B8] shrink-0" />
              <span>Dominio gratis incluido en su hosting</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D0F16] border border-white/[0.08]">
              <Check className="w-4 h-4 text-[#00E4B8] shrink-0" />
              <span>Atención al cliente 24 horas al día</span>
            </div>
          </div>
        </div>

        {/* 4-Column Solutions Cards (Dark Obsidian / Slate Black Base) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch pt-4">
          {SOLUTIONS.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl p-7 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-[#0D0F16] via-[#090B10] to-[#05070B] border border-white/[0.08] hover:border-[#00E4B8]/40 hover:from-[#12151E] hover:to-[#080A0F] transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Icon Box */}
                <div className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>

                {/* Title in Pure White Atemica */}
                <h3 className="font-heading font-semibold text-xl text-white mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 font-light text-xs sm:text-[13px] leading-relaxed min-h-[38px] mb-6">
                  {item.description}
                </p>

                {/* Old Price + Mint Green Discount Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="line-through text-pink-400/80 text-xs font-mono">
                    {item.oldPrice}
                  </span>
                  <span className="text-[10px] font-bold text-[#00E4B8] bg-[#00E4B8]/10 border border-[#00E4B8]/20 px-2 py-0.5 rounded-full uppercase tracking-wider font-mono">
                    {item.discount}
                  </span>
                </div>

                {/* Main Price in Mint Green */}
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#00E4B8] font-mono tracking-tight">
                    {item.price}
                  </span>
                  <span className="text-white/50 text-xs font-normal font-mono">
                    {item.period}
                  </span>
                </div>

                {/* Features list with Mint Green Checks */}
                <ul className="space-y-3 mb-8 text-xs sm:text-[13px] font-light text-white/80">
                  {item.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#00E4B8] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button in Royal Blue #1C40F2 */}
              <Link
                href={item.link}
                className="w-full py-3.5 px-5 rounded-xl font-medium text-xs sm:text-sm text-white bg-[#1C40F2] hover:bg-[#1534c9] transition-all text-center block shadow-[0_0_20px_rgba(28,64,242,0.35)] hover:shadow-[0_0_30px_rgba(28,64,242,0.5)] transform hover:scale-[1.02]"
              >
                {item.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
