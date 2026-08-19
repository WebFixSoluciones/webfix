import { TrendingUp, Check } from "lucide-react";

const bars = [
  { label: "WebFix — LiteSpeed NVMe", value: 100, req: "4,820 req/s", colored: true },
  { label: "Nginx + FastCGI", value: 44, req: "2,150 req/s", colored: false },
  { label: "Apache + HDD Convencional", value: 10, req: "480 req/s", colored: false },
];

export default function SpeedComparison() {
  return (
    <section className="py-24 bg-[#070B18] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <p className="text-[11px] uppercase tracking-widest font-mono text-[#00E4B8]">
              Rendimiento Comprobado
            </p>
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-white leading-snug">
              Hasta 10× Más Rápido que Apache Convencional
            </h2>
            <p className="text-white/60 font-light text-sm leading-relaxed max-w-sm">
              Google premia los sitios web con carga menor a 1 segundo. Nuestra arquitectura LiteSpeed Enterprise entrega páginas en caché al instante.
            </p>
            <ul className="space-y-2.5 pt-2 text-xs font-light text-white/80">
              {["TTFB promedio menor a 45 ms", "Protocolo HTTP/3 & QUIC habilitado", "Optimización de imágenes a WebP"].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <Check className="w-3.5 h-3.5 text-[#00E4B8] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="card-purple rounded-3xl p-8 space-y-7">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#00E4B8]" />
                  <span className="text-sm font-semibold text-white">Solicitudes por Segundo (Benchmark)</span>
                </div>
                <span className="text-[11px] font-mono text-[#00E4B8]">Concurrente</span>
              </div>

              <div className="space-y-6">
                {bars.map((bar) => (
                  <div key={bar.label} className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className={`font-medium ${bar.colored ? "text-white" : "text-white/50"}`}>{bar.label}</span>
                      <span className={`font-mono font-bold ${bar.colored ? "text-[#00E4B8]" : "text-white/40"}`}>{bar.req}</span>
                    </div>
                    <div className="w-full h-3 bg-black/40 rounded-full overflow-hidden p-0.5 border border-white/[0.05]">
                      <div
                        className={`h-full rounded-full transition-all ${
                          bar.colored
                            ? "bg-gradient-to-r from-[#1C40F2] to-[#00E4B8] shadow-[0_0_15px_rgba(0,228,184,0.4)]"
                            : "bg-white/10"
                        }`}
                        style={{ width: `${bar.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[11px] font-light text-white/30 border-t border-white/[0.06] pt-3">
                * Pruebas estandarizadas sobre WordPress con catálogo activo de WooCommerce.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
