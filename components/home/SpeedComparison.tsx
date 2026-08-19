import { TrendingUp } from "lucide-react";

const bars = [
  { label: "WebFix — LiteSpeed NVMe", value: 100, req: "4,820 req/s", colored: true },
  { label: "Nginx + FastCGI", value: 44, req: "2,150 req/s", colored: false },
  { label: "Apache + HDD", value: 10, req: "480 req/s", colored: false },
];

export default function SpeedComparison() {
  return (
    <section className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <div className="lg:col-span-5 space-y-6">
            <p className="text-[11px] uppercase tracking-widest font-normal text-white/40">
              Rendimiento
            </p>
            <h2 className="font-heading font-semibold text-white leading-snug" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              Hasta 10× más rápido que Apache
            </h2>
            <p className="text-white/50 font-light text-base leading-relaxed max-w-sm">
              Google prioriza sitios con 100/100 en Core Web Vitals. Nuestra pila LiteSpeed Enterprise reduce la latencia y soporta picos masivos de tráfico.
            </p>
            <ul className="space-y-2.5 pt-2">
              {["TTFB menor a 50 ms", "HTTP/3 y QUIC activado", "Conversión automática a WebP"].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-light text-white/60">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] space-y-8">
              <div className="flex items-center gap-2 border-b border-white/[0.05] pb-5">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-normal text-white/60">Solicitudes por segundo — benchmark concurrente</span>
              </div>

              <div className="space-y-6">
                {bars.map((bar) => (
                  <div key={bar.label} className="space-y-2">
                    <div className="flex justify-between text-[13px]">
                      <span className={`font-normal ${bar.colored ? "text-white" : "text-white/40"}`}>{bar.label}</span>
                      <span className={`font-normal ${bar.colored ? "text-emerald-400" : "text-white/30"}`}>{bar.req}</span>
                    </div>
                    <div className="w-full h-2 bg-white/[0.04] rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${bar.colored ? "bg-gradient-to-r from-blue-500 to-emerald-400" : "bg-white/10"}`}
                        style={{ width: `${bar.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[11px] font-light text-white/25 border-t border-white/[0.04] pt-4">
                * Benchmark con WordPress + WooCommerce bajo carga concurrente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
