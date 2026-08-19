import { Zap, Gauge, Flame, CheckCircle2, TrendingUp } from "lucide-react";

export default function SpeedComparison() {
  return (
    <section className="py-24 relative overflow-hidden vercel-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl text-xs font-mono text-emerald-400">
              <Gauge className="w-3.5 h-3.5" />
              <span>Benchmarks de Rendimiento</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-shine">
              Hasta <span className="text-gradient-cyan">10x Más Rápido</span> que Apache Convencional
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Google prioriza sitios con 100/100 en Core Web Vitals. Nuestra pila de <strong>LiteSpeed Enterprise + NVMe PCIe 4.0</strong> reduce drásticamente la latencia y soporta picos masivos de tráfico sin ralentizaciones.
            </p>

            <div className="space-y-2.5 text-xs sm:text-sm text-zinc-300 font-mono">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tiempo de respuesta inicial (TTFB) menor a 50ms.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Capacidad de respuesta concurrente sin colapsos.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Conversión automática de imágenes a WebP al vuelo.</span>
              </div>
            </div>
          </div>

          {/* Vercel Analytics Graph Card */}
          <div className="lg:col-span-6">
            <div className="p-7 sm:p-8 rounded-3xl bg-zinc-950/90 border border-white/[0.1] shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2 font-mono">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  Rendimiento (Solicitudes por Segundo)
                </h3>
                <span className="text-[11px] font-mono text-zinc-500">Benchmark Concurrente</span>
              </div>

              {/* Bar 1: WebFix LiteSpeed */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    WebFix (LiteSpeed + NVMe)
                  </span>
                  <span className="text-emerald-400 font-bold">4,820 req/s (100%)</span>
                </div>
                <div className="w-full h-3 bg-white/[0.04] rounded-full overflow-hidden p-0.5 border border-white/[0.06]">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full w-full shadow-[0_0_15px_rgba(0,229,255,0.5)]"></div>
                </div>
              </div>

              {/* Bar 2: Nginx */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400">Nginx + FastCGI</span>
                  <span className="text-zinc-400">2,150 req/s (44%)</span>
                </div>
                <div className="w-full h-3 bg-white/[0.04] rounded-full overflow-hidden p-0.5 border border-white/[0.06]">
                  <div className="h-full bg-zinc-600 rounded-full w-[44%]"></div>
                </div>
              </div>

              {/* Bar 3: Apache */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-500">Apache + Discos HDD</span>
                  <span className="text-zinc-500">480 req/s (10%)</span>
                </div>
                <div className="w-full h-3 bg-white/[0.04] rounded-full overflow-hidden p-0.5 border border-white/[0.06]">
                  <div className="h-full bg-zinc-800 rounded-full w-[10%]"></div>
                </div>
              </div>

              <div className="pt-2 text-[11px] font-mono text-zinc-500 border-t border-white/[0.06]">
                * Pruebas estandarizadas sobre WordPress con WooCommerce y catálogo activo.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
