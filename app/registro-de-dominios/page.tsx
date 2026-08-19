import type { Metadata } from "next";
import { Globe, Check, ArrowRight, ShieldCheck, Lock, RefreshCw, Sparkles } from "lucide-react";
import DomainSearchBox from "@/components/home/DomainSearchBox";
import { DOMAIN_TLDS, DOMAIN_FEATURES } from "@/data/domains";
import FaqAccordion from "@/components/home/FaqAccordion";
import { FAQItem } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Registro de Dominios en Ecuador (.COM, .EC, .NET, .ORG) | WebFix",
  description: "Busca y registra tu dominio web al mejor precio en Ecuador. Dominios .COM desde $14.50/año y .EC oficial con Whois Privacy gratis y panel DNS.",
};

const DOMAIN_FAQS: FAQItem[] = [
  {
    question: "¿Qué es un nombre de dominio y por qué lo necesito?",
    answer: "Un nombre de dominio es la dirección única que las personas escriben en su navegador para visitar tu sitio web (ejemplo: tudominio.com). Es la identidad digital de tu marca en internet.",
  },
  {
    question: "¿La protección de privacidad Whois está incluida?",
    answer: "Sí, todos los dominios que admiten privacidad Whois incluyen este servicio de forma 100% gratuita para proteger tus datos personales de llamadas y correos no deseados.",
  },
  {
    question: "¿Puedo transferir un dominio que ya compré en otro registrador?",
    answer: "Sí, puedes transferir cualquier dominio a WebFix para centralizar tus servicios y disfrutar de mejores tarifas de renovación y soporte técnico en español.",
  }
];

export default function RegistroDeDominiosPage() {
  return (
    <div className="pt-28 pb-20 bg-tech-grid">
      {/* Hero */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950/80 border border-brand-500/30 text-xs font-bold text-brand-300">
            <Globe className="w-3.5 h-3.5 text-brand-400" />
            <span>Registrador Oficial de Nombres de Dominio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            ¡Busque, Registre y Compre su <span className="text-gradient-blue">Dominio Hoy</span>!
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed">
            Más de 1,000 clientes confían en WebFix. Registro instantáneo, panel de administración DNS en tiempo real y protección de privacidad Whois gratuita.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <DomainSearchBox />
        </div>
      </section>

      {/* TLD Pricing Table */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Tabla de Precios de Extensiones Populares
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Tarifas anuales transparentes sin costos ocultos de renovación.
            </p>
          </div>

          <div className="rounded-3xl glass-card border border-slate-800 overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-900/90 text-xs uppercase tracking-wider text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="py-4 px-6">Extensión TLD</th>
                    <th className="py-4 px-6">Propósito</th>
                    <th className="py-4 px-6 text-center">Registro</th>
                    <th className="py-4 px-6 text-center">Renovación</th>
                    <th className="py-4 px-6 text-center">Transferencia</th>
                    <th className="py-4 px-6 text-right">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {DOMAIN_TLDS.map((tld) => (
                    <tr key={tld.extension} className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-4 px-6 font-mono font-bold text-white text-base flex items-center gap-2">
                        <span className="text-brand-400">{tld.extension}</span>
                        {tld.popular && (
                          <span className="text-[10px] bg-brand-500/20 text-brand-300 px-2 py-0.5 rounded-full font-sans font-bold">
                            POPULAR
                          </span>
                        )}
                        {tld.extension === ".ec" && (
                          <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-sans font-bold">
                            ECUADOR
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-xs text-slate-400 max-w-xs">
                        {tld.description}
                      </td>
                      <td className="py-4 px-6 text-center font-bold text-white font-mono">
                        ${tld.priceAnnual.toFixed(2)}/año
                      </td>
                      <td className="py-4 px-6 text-center text-slate-400 font-mono text-xs">
                        ${tld.renewalPrice.toFixed(2)}/año
                      </td>
                      <td className="py-4 px-6 text-center text-slate-400 font-mono text-xs">
                        ${tld.transferPrice.toFixed(2)}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <a
                          href={`https://webfixsoluciones.net/cliente/cart.php?a=add&domain=register&tld=${encodeURIComponent(tld.extension)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-md transition-all"
                        >
                          <span>Registrar</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-slate-950/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DOMAIN_FEATURES.map((feat, idx) => (
              <div key={idx} className="p-6 rounded-2xl glass-card border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-600/20 text-brand-400 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">{feat.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion faqs={DOMAIN_FAQS} title="Preguntas Frecuentes sobre Dominios" />
    </div>
  );
}
