import type { Metadata } from "next";
import { Globe, Check, ArrowRight, ShieldCheck, Zap, Sparkles, Building2 } from "lucide-react";
import PricingSection from "@/components/home/PricingSection";
import DomainSearchBox from "@/components/home/DomainSearchBox";
import FaqAccordion from "@/components/home/FaqAccordion";

export const metadata: Metadata = {
  title: "El Mejor Hosting en Ecuador | Facturación SRI y Soporte Local 24/7",
  description: "Hosting en Ecuador de máxima velocidad con servidores LiteSpeed NVMe, registro de dominios .EC y .COM, facturación electrónica autorizada por el SRI.",
};

export default function HostingEnEcuadorPage() {
  return (
    <div className="pt-28 pb-20 bg-tech-grid">
      <section className="py-16 md:py-24 text-center space-y-6 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/30 text-xs font-bold text-amber-300">
          <Globe className="w-3.5 h-3.5 text-amber-400" />
          <span>Infraestructura Optimizada para Ecuador</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          El Mejor Servicio de <span className="text-gradient-blue">Hosting en Ecuador</span>
        </h1>

        <p className="text-slate-300 text-lg sm:text-xl leading-relaxed">
          Diseñado para empresas y profesionales ecuatorianos. Conexión de ultra-baja latencia, soporte técnico 24/7 en español, pagos mediante transferencias bancarias locales y facturación electrónica autorizada por el SRI.
        </p>

        <div className="pt-6 max-w-3xl mx-auto">
          <DomainSearchBox />
        </div>
      </section>

      {/* Local Ecuador Benefits */}
      <section className="py-16 bg-slate-950/60 border-y border-slate-800 my-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl glass-card border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-600/20 text-amber-400 flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Facturación SRI Legal</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Emitimos facturas electrónicas autorizadas por el SRI para deducir impuestos de tu empresa o actividad comercial sin complicaciones.
              </p>
            </div>

            <div className="p-8 rounded-3xl glass-card border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-600/20 text-brand-400 flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Pagos Bancarios Locales</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Paga cómodamente mediante transferencias directas a Banco Pichincha, Banco Guayaquil, Produbanco, Banco del Pacífico o tarjetas de crédito.
              </p>
            </div>

            <div className="p-8 rounded-3xl glass-card border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Dominios Oficiales .EC</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Registra tu identidad con dominios .EC o .COM.EC ante NIC.EC con gestión directa y DNS automatizados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQs */}
      <FaqAccordion title="Preguntas Frecuentes sobre Hosting en Ecuador" />
    </div>
  );
}
