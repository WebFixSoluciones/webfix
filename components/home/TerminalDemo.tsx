import { Cpu, HardDrive, Shield, Terminal } from "lucide-react";

export default function TerminalDemo() {
  return (
    <section className="py-24 bg-[#070B18] border-t border-white/[0.04]">
      <div className="w-[90%] max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-[11px] uppercase tracking-widest font-mono text-[#00E4B8] mb-3">
                Infraestructura Developer-First
              </p>
              <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white leading-tight">
                Control Total de tu Servidor
              </h2>
              <p className="text-white/60 font-light text-sm sm:text-base leading-relaxed mt-4">
                LiteSpeed Enterprise con acceso SSH, WP-CLI, control de versiones Git y bases de datos MariaDB ultra-optimizadas.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: <Cpu className="w-5 h-5 text-[#00E4B8]" />, title: "45 ms TTFB", sub: "Respuestas cacheadas en memoria RAM servidas al instante." },
                { icon: <HardDrive className="w-5 h-5 text-blue-400" />, title: "NVMe PCIe 4.0 en RAID 10", sub: "Hasta 7,000 MB/s de velocidad de lectura y escritura." },
                { icon: <Shield className="w-5 h-5 text-purple-400" />, title: "Imunify360 AI Engine", sub: "Firewall WAF proactivo y mitigación en tiempo real." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-[#140c24]/60 border border-purple-900/30 hover:border-purple-800/60 transition-colors">
                  <div className="shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs font-light text-white/50 mt-1 leading-relaxed">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Terminal Console */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0b0e1b] border border-white/[0.08] shadow-2xl overflow-hidden font-mono text-xs sm:text-[13px]">
              {/* Title bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/60" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/60" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
                  <span className="ml-3 text-white/40 text-xs">webfix-cloud-node-01:~</span>
                </div>
                <span className="text-[11px] text-[#00E4B8] bg-[#00E4B8]/10 px-2 py-0.5 rounded">HTTP/3 ACTIVE</span>
              </div>

              {/* Output */}
              <div className="p-8 space-y-4 min-h-[300px] leading-relaxed">
                <div>
                  <span className="text-[#00E4B8]">$ </span>
                  <span className="text-white">litespeed-bench --concurrency 200 --http3</span>
                </div>
                <div className="pl-4 space-y-1.5 text-white/50 text-xs">
                  <p>⚡ Inicializando benchmark en servidor LiteSpeed Enterprise...</p>
                  <p>TTFB (Time to First Byte): <span className="text-[#00E4B8] font-bold">38 ms</span></p>
                  <p>Throughput concurrente: <span className="text-[#00E4B8] font-bold">4,820 req/s</span></p>
                  <p>Compresión Brotli: <span className="text-white font-medium">−78% reducción de peso</span></p>
                  <p>LSCache hit rate en RAM: <span className="text-[#00E4B8] font-bold">99.8%</span></p>
                  <p>Core Web Vitals: <span className="text-[#00E4B8] font-bold">GRADE A+ (100/100)</span></p>
                </div>
                <div className="pt-3">
                  <span className="text-[#00E4B8]">$ </span>
                  <span className="text-white">imunify360-agent status</span>
                </div>
                <div className="pl-4 space-y-1 text-white/50 text-xs">
                  <p>WAF Proactivo: <span className="text-[#00E4B8] font-bold">ACTIVO</span></p>
                  <p>Ataques mitigados hoy: <span className="text-white font-medium">2,419 bots bloqueados</span></p>
                  <p>Escaneo de Malware: <span className="text-[#00E4B8] font-bold">0 amenazas encontradas</span></p>
                </div>
                <div className="flex items-center gap-1.5 pt-3 text-white/40">
                  <span className="text-[#00E4B8]">root@webfix:~$ </span>
                  <span className="inline-block w-2 h-4 bg-[#00E4B8] animate-pulse" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
