import { Cpu, HardDrive, Shield, Terminal } from "lucide-react";

export default function TerminalDemo() {
  return (
    <section className="py-28 bg-zinc-950 border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-[11px] uppercase tracking-widest font-normal text-white/40 mb-4">
                Infraestructura
              </p>
              <h2 className="font-heading font-semibold text-white leading-snug" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                Control total de tu servidor
              </h2>
              <p className="text-white/50 font-light text-base leading-relaxed mt-4 max-w-sm">
                LiteSpeed Enterprise con acceso SSH, WP-CLI, Git y bases de datos MariaDB ultra-optimizadas.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: <Cpu className="w-4 h-4 text-blue-400" />, title: "45 ms TTFB", sub: "Respuestas en caché servidas desde RAM." },
                { icon: <HardDrive className="w-4 h-4 text-emerald-400" />, title: "NVMe PCIe 4.0 RAID 10", sub: "Hasta 7,000 MB/s lectura y escritura." },
                { icon: <Shield className="w-4 h-4 text-purple-400" />, title: "Imunify360 AI", sub: "Firewall WAF proactivo en tiempo real." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <p className="text-sm font-normal text-white">{item.title}</p>
                    <p className="text-[13px] font-light text-white/40 mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Terminal */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0d0d0d] border border-white/[0.06] shadow-2xl overflow-hidden font-mono text-[13px]">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.05] bg-white/[0.02]">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                <span className="ml-3 text-white/30 text-[11px]">webfix-node-01 — bash</span>
              </div>

              {/* Output */}
              <div className="p-6 space-y-4 min-h-[260px] leading-relaxed">
                <div>
                  <span className="text-emerald-400/70">$ </span>
                  <span className="text-white/80">litespeed-bench --concurrency 200</span>
                </div>
                <div className="pl-4 space-y-1 text-white/40">
                  <p>TTFB: <span className="text-emerald-400">38 ms</span></p>
                  <p>Throughput: <span className="text-emerald-400">4,820 req/s</span></p>
                  <p>Brotli compression: <span className="text-white/60">−78% weight</span></p>
                  <p>LSCache hit rate: <span className="text-emerald-400">99.8%</span></p>
                  <p>Core Web Vitals: <span className="text-emerald-400">A+ · 100/100</span></p>
                </div>
                <div className="pt-2">
                  <span className="text-emerald-400/70">$ </span>
                  <span className="text-white/80">imunify360 status</span>
                </div>
                <div className="pl-4 space-y-1 text-white/40">
                  <p>WAF: <span className="text-emerald-400">Active</span></p>
                  <p>Threats blocked today: <span className="text-white/60">2,419</span></p>
                  <p>Malware scan: <span className="text-emerald-400">0 threats found</span></p>
                </div>
                <div className="flex items-center gap-1.5 pt-2 text-white/30">
                  <span className="text-emerald-400/70">$ </span>
                  <span className="inline-block w-1.5 h-4 bg-white/40 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
