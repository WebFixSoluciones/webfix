"use client";

import { useState } from "react";
import { Terminal, Copy, Check, Play, RefreshCw, Cpu, HardDrive, Shield } from "lucide-react";

export default function TerminalDemo() {
  const [activeTab, setActiveTab] = useState<"litespeed" | "wpcli" | "security">("litespeed");
  const [copied, setCopied] = useState(false);

  const copyCommand = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>Control Total para Desarrolladores</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Infraestructura Optimizada para Máxima Velocidad
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Todos nuestros servidores ejecutan <strong>LiteSpeed Enterprise</strong> con soporte para HTTP/3, QUIC, compresión Brotli, PHP 8.x con OPcache y acceso completo a herramientas avanzadas como <strong>WP-CLI, Git y SSH</strong>.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="w-8 h-8 rounded-xl bg-brand-600/20 text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">45ms Time to First Byte (TTFB)</div>
                  <div className="text-xs text-slate-400">Respuestas ultrarrápidas servidas directamente desde memoria caché LSCache.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="w-8 h-8 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <HardDrive className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Discos NVMe PCIe 4.0 en RAID 10</div>
                  <div className="text-xs text-slate-400">Velocidades de lectura/escritura de hasta 7,000 MB/s para bases de datos MySQL instantáneas.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="w-8 h-8 rounded-xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Imunify360 + ModSecurity WAF</div>
                  <div className="text-xs text-slate-400">Detección y bloqueo automático de exploits, inyecciones SQL y fuerza bruta.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Terminal Window */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#060a12] border border-slate-700/80 shadow-2xl shadow-black/90 overflow-hidden font-mono text-xs sm:text-sm">
              {/* Terminal Header */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 text-slate-400 text-xs font-sans font-medium">
                    terminal@webfix-cloud: ~
                  </span>
                </div>

                {/* Tab buttons */}
                <div className="flex items-center gap-1 font-sans">
                  <button
                    onClick={() => setActiveTab("litespeed")}
                    className={`px-2.5 py-1 rounded-lg text-xs transition-colors ${
                      activeTab === "litespeed" ? "bg-brand-600 text-white font-semibold" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    LiteSpeed
                  </button>
                  <button
                    onClick={() => setActiveTab("wpcli")}
                    className={`px-2.5 py-1 rounded-lg text-xs transition-colors ${
                      activeTab === "wpcli" ? "bg-brand-600 text-white font-semibold" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    WP-CLI
                  </button>
                  <button
                    onClick={() => setActiveTab("security")}
                    className={`px-2.5 py-1 rounded-lg text-xs transition-colors ${
                      activeTab === "security" ? "bg-brand-600 text-white font-semibold" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Imunify360
                  </button>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-5 space-y-3 min-h-[300px] leading-relaxed">
                {activeTab === "litespeed" && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="text-emerald-400">root@webfix-node-ec:~$</span>
                      <span className="text-white">litespeed-bench --target https://tusitio.com --threads 100</span>
                    </div>
                    <div className="text-slate-400 pl-2 border-l-2 border-brand-500/40 space-y-1 text-[11px] sm:text-xs">
                      <p className="text-cyan-400">⚡ Starting LiteSpeed Cache Benchmark Test...</p>
                      <p>✓ HTTP/3 QUIC Protocol: <span className="text-emerald-400 font-bold">Enabled</span></p>
                      <p>✓ TTFB (Time to First Byte): <span className="text-emerald-400 font-bold">38 ms</span></p>
                      <p>✓ Requests / Second: <span className="text-emerald-400 font-bold">4,820 req/s</span></p>
                      <p>✓ Compression: <span className="text-white">Brotli 11 (Reduced payload by 78%)</span></p>
                      <p>✓ OPcache Hit Rate: <span className="text-emerald-400 font-bold">99.8%</span></p>
                      <p className="text-slate-300">STATUS: <span className="text-emerald-400 font-bold">SPEED SCORE A+ (100/100 Core Web Vitals)</span></p>
                    </div>
                  </div>
                )}

                {activeTab === "wpcli" && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="text-emerald-400">admin@webfix-cpanel:~/public_html$</span>
                      <span className="text-white">wp plugin install litespeed-cache --activate</span>
                    </div>
                    <div className="text-slate-400 pl-2 border-l-2 border-brand-500/40 space-y-1 text-[11px] sm:text-xs">
                      <p>Installing LiteSpeed Cache (latest)...</p>
                      <p>Downloading installation package from WordPress.org...</p>
                      <p>Unpacking the package...</p>
                      <p className="text-emerald-400">✓ Plugin &apos;litespeed-cache&apos; installed successfully.</p>
                      <p className="text-emerald-400">✓ Activating &apos;litespeed-cache&apos;...</p>
                      <p className="text-cyan-300">Success: Plugin activated. Server-level LSCache is now accelerating your site.</p>
                    </div>
                  </div>
                )}

                {activeTab === "security" && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="text-emerald-400">imunify360@shield:~$</span>
                      <span className="text-white">imunify360-agent status --realtime-scan</span>
                    </div>
                    <div className="text-slate-400 pl-2 border-l-2 border-brand-500/40 space-y-1 text-[11px] sm:text-xs">
                      <p className="text-emerald-400">🛡️ Imunify360 AI Shield: Active</p>
                      <p>✓ Web Application Firewall (WAF): <span className="text-emerald-400 font-bold">Enabled</span></p>
                      <p>✓ Real-Time Malware Scanner: <span className="text-emerald-400 font-bold">0 Threats Detected</span></p>
                      <p>✓ Brute-Force Protection: <span className="text-emerald-400 font-bold">2,419 Bot Attempts Blocked</span></p>
                      <p>✓ SSL Auto-Renewal (Let&apos;s Encrypt / Sectigo): <span className="text-emerald-400 font-bold">Valid & Active</span></p>
                      <p className="text-cyan-300">All systems protected under 24/7 autonomous monitoring.</p>
                    </div>
                  </div>
                )}

                {/* Prompt line */}
                <div className="pt-2 flex items-center gap-2 text-slate-500 text-xs">
                  <span className="text-emerald-400">webfix@cloud:~$</span>
                  <span className="inline-block w-2 h-4 bg-brand-400 animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
