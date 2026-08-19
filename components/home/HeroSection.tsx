import Link from "next/link";
import Image from "next/image";
import { Zap, ShieldCheck, CheckCircle2, ArrowRight, Server, Sparkles } from "lucide-react";
import DomainSearchBox from "./DomainSearchBox";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-grid bg-radial-glow">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950/80 border border-brand-500/30 text-xs font-semibold text-brand-300 shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span>Hosting Cloud NVMe Ultra-Rápido en Ecuador</span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Potencia tu Sitio Web con un{" "}
              <span className="text-gradient-blue">Hosting Imparable</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Servidores LiteSpeed Web Server, almacenamiento NVMe SSD de alta velocidad, cPanel en español y protección Imunify360. Tu web hasta 10x más rápida con 99.9% de Uptime garantizado.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#planes"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-brand-600 via-brand-500 to-blue-600 hover:from-brand-500 hover:to-blue-500 shadow-xl shadow-brand-600/30 hover:shadow-brand-500/50 transition-all transform hover:-translate-y-0.5"
              >
                <Zap className="w-5 h-5" />
                <span>Ver Planes desde $3.75/mes</span>
              </a>

              <Link
                href="/registro-de-dominios"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all"
              >
                <span>Buscar Dominio</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Key Trust Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dominio .COM Gratis*</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>SSL Ilimitado Gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Migración Web 100% Gratis</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Graphic / Interactive Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-600 to-cyan-500 opacity-30 blur-xl"></div>

              {/* Card Container */}
              <div className="relative rounded-3xl glass-card p-6 border border-slate-700/80 shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center text-brand-400">
                      <Server className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Nodo Cloud WebFix #01</div>
                      <div className="text-xs text-emerald-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        LiteSpeed Web Server Activo (45ms TTFB)
                      </div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                    100% Online
                  </span>
                </div>

                {/* Hero Illustration */}
                <div className="relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden bg-slate-950/80 border border-slate-800/80 flex items-center justify-center">
                  <Image
                    src="/assets/hero-hosting.png"
                    alt="Servidores de Hosting WebFix"
                    fill
                    className="object-contain p-2 hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>

                {/* Quick specs pill row */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-slate-400">Almacenamiento</div>
                    <div className="text-white font-bold mt-0.5">NVMe RAID 10</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-slate-400">Seguridad</div>
                    <div className="text-cyan-400 font-bold mt-0.5">Imunify 360</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-slate-400">Soporte</div>
                    <div className="text-emerald-400 font-bold mt-0.5">24/7 en Español</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Domain Search in Hero */}
        <div className="mt-14">
          <DomainSearchBox />
        </div>
      </div>
    </section>
  );
}
