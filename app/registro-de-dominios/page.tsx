import type { Metadata } from "next";
import { Globe, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
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
    <div className="pt-28 pb-20 vercel-grid">
      <section className="py-16 md:py-24 relative overflow-hidden vercel-spotlight">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl text-xs font-mono text-cyan-400">
            <Globe className="w-3.5 h-3.5" />
            <span>Registrador Oficial de Nombres de Dominio</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight text-shine">
            Encuentra y Registra tu <br />
            <span className="text-gradient-electric">Nombre en Internet</span>
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Registro instantáneo, Whois Privacy gratuito, panel DNS en tiempo real y precios transparentes de renovación.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <DomainSearchBox />
        </div>
      </section>

      {/* TLD Table */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-shine">
            Extensiones de Dominio Disponibles
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1">
            Precios anuales sin tarifas sorpresa.
          </p>
        </div>

        <div className="rounded-3xl glass-panel border border-white/[0.1] overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-white/[0.02] uppercase tracking-wider text-zinc-500 border-b border-white/[0.06]">
                <tr>
                  <th className="py-3.5 px-6">Extensión</th>
                  <th className="py-3.5 px-6 font-sans">Propósito</th>
                  <th className="py-3.5 px-6 text-center">Registro</th>
                  <th className="py-3.5 px-6 text-center">Renovación</th>
                  <th className="py-3.5 px-6 text-right font-sans">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {DOMAIN_TLDS.map((tld) => (
                  <tr key={tld.extension} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-bold text-white text-sm flex items-center gap-2">
                      <span className="text-cyan-400">{tld.extension}</span>
                      {tld.popular && (
                        <span className="text-[9px] bg-blue-500/20 text-blue-300 px-1.5 py-0.2 rounded-full font-sans font-bold">
                          POPULAR
                        </span>
                      )}
                      {tld.extension === ".ec" && (
                        <span className="text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.2 rounded-full font-sans font-bold">
                          EC
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-zinc-400 font-sans text-xs max-w-xs">
                      {tld.description}
                    </td>
                    <td className="py-4 px-6 text-center font-bold text-white">
                      ${tld.priceAnnual.toFixed(2)}/año
                    </td>
                    <td className="py-4 px-6 text-center text-zinc-500">
                      ${tld.renewalPrice.toFixed(2)}/año
                    </td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href={`https://webfixsoluciones.net/cliente/cart.php?a=add&domain=register&tld=${encodeURIComponent(tld.extension)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-white text-black hover:bg-zinc-200 font-semibold text-xs transition-all shadow-sm font-sans"
                      >
                        <span>Registrar</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features Bento */}
      <section className="py-16 border-y border-white/[0.06] bg-zinc-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {DOMAIN_FEATURES.map((feat, idx) => (
              <div key={idx} className="p-6 rounded-3xl glass-panel-interactive space-y-2.5">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">{feat.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion faqs={DOMAIN_FAQS} title="Preguntas Frecuentes sobre Dominios" />
    </div>
  );
}
