import type { Metadata } from "next";
import { Globe, Check, ArrowRight, ShieldCheck, Zap, Building2, Sparkles } from "lucide-react";
import PricingSection from "@/components/home/PricingSection";
import DomainSearchBox from "@/components/home/DomainSearchBox";
import FaqAccordion from "@/components/home/FaqAccordion";

export const metadata: Metadata = {
  title: "El Mejor Hosting en Ecuador | Facturación SRI y Soporte Local 24/7",
  description: "Hosting en Ecuador de máxima velocidad con servidores LiteSpeed NVMe, registro de dominios .EC y .COM, facturación electrónica autorizada por el SRI.",
};

export default function HostingEnEcuadorPage() {
  return (
    <div className="pt-28 pb-20 vercel-grid">
      <section className="py-16 md:py-24 text-center space-y-6 max-w-4xl mx-auto px-4 sm:px-6 vercel-spotlight">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl text-xs font-mono text-amber-400">
          <Globe className="w-3.5 h-3.5" />
          <span>Infraestructura Optimizada para Ecuador</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight text-shine">
          El Mejor Servicio de <br />
          <span className="text-gradient-electric">Hosting en Ecuador</span>
        </h1>

        <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Diseñado para empresas y profesionales ecuatorianos. Conexión de ultra-baja latencia, soporte 24/7 en español, transferencias bancarias locales y facturación SRI.
        </p>

        <div className="pt-6 max-w-3xl mx-auto">
          <DomainSearchBox />
        </div>
      </section>

      {/* Local Ecuador Bento Grid */}
      <section className="py-20 border-y border-white/[0.06] bg-zinc-950/40 my-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl glass-panel-interactive space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Facturación SRI Legal</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Emitimos facturas electrónicas autorizadas por el SRI para deducir impuestos de tu empresa o actividad con RUC.
              </p>
            </div>

            <div className="p-7 rounded-3xl glass-panel-interactive space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Bancos Nacionales</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Paga mediante transferencias a Banco Pichincha, Guayaquil, Produbanco, Banco del Pacífico o tarjeta.
              </p>
            </div>

            <div className="p-7 rounded-3xl glass-panel-interactive space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Dominios .EC Oficiales</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Registra extensiones .EC y .COM.EC con gestión directa ante el NIC de Ecuador y propagación instantánea.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PricingSection />
      <FaqAccordion title="Preguntas Frecuentes sobre Hosting en Ecuador" />
    </div>
  );
}
