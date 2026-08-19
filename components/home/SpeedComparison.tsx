import { Zap, Gauge, Flame, CheckCircle2 } from "lucide-react";

export default function SpeedComparison() {
  return (
    <section className="py-16 relative overflow-hidden bg-slate-950/60 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-semibold text-emerald-400">
              <Gauge className="w-3.5 h-3.5" />
              <span>Pruebas de Rendimiento Reales</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Hasta <span className="text-gradient-blue">10 Veces Más Rápido</span> que el Hosting Tradicional
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              La velocidad es el factor #1 para posicionar en Google (Core Web Vitals) y aumentar las ventas en tu tienda online. Nuestra combinación de <strong>LiteSpeed Enterprise + NVMe SSD</strong> destruye los cuellos de botella de los servidores antiguos.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tiempo de respuesta inicial (TTFB) inferior a 50 milisegundos.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Manejo de picos de tráfico concurrentes sin caídas ni lentitud.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Optimización automática de imágenes a WebP y compresión CSS/JS.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl glass-card border border-slate-800 space-y-6">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-400" />
                Comparativa de Solicitudes por Segundo (Req/Sec)
              </h3>

              {/* Bar 1: WebFix */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-400"></span>
                    WebFix (LiteSpeed + NVMe + LSCache)
                  </span>
                  <span className="font-mono font-bold text-emerald-400">4,820 req/s (100%)</span>
                </div>
                <div className="w-full h-4 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                  <div className="h-full bg-gradient-to-r from-brand-600 via-brand-400 to-emerald-400 rounded-full w-full"></div>
                </div>
              </div>

              {/* Bar 2: Nginx FastCGI */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-slate-400">Nginx + FastCGI Caché</span>
                  <span className="font-mono text-slate-400">2,150 req/s (44%)</span>
                </div>
                <div className="w-full h-4 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                  <div className="h-full bg-slate-600 rounded-full w-[44%]"></div>
                </div>
              </div>

              {/* Bar 3: Apache Tradicional */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-slate-500">Apache + Discos HDD Estándar</span>
                  <span className="font-mono text-rose-400">480 req/s (10%)</span>
                </div>
                <div className="w-full h-4 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                  <div className="h-full bg-rose-500/80 rounded-full w-[10%]"></div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
                <span>* Pruebas ejecutadas bajo entorno WordPress 6.x con WooCommerce.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
