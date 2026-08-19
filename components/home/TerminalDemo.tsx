"use client";

import { useState } from "react";
import { Terminal, Copy, Check, Cpu, HardDrive, Shield, Zap, Sparkles } from "lucide-react";

export default function TerminalDemo() {
  const [activeTab, setActiveTab] = useState<"litespeed" | "wpcli" | "security">("litespeed");
  const [copied, setCopied] = useState(false);

  const copyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 relative overflow-hidden vercel-spotlight-cyan vercel-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl text-xs font-mono text-cyan-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>Plataforma Developer-First</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-shine">
              Control Absoluto de tu Infraestructura
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Despliega a la velocidad del rayo. Servidores configurados con <strong>LiteSpeed Enterprise</strong>, acceso a <strong>WP-CLI, Git y SSH</strong>, bases de datos MariaDB ultra-optimizadas y caché Redis/Memcached.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl glass-panel-interactive flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-mono">45ms Time to First Byte (TTFB)</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Respuestas cacheadas en memoria RAM servidas al instante.</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl glass-panel-interactive flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <HardDrive className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-mono">Discos NVMe PCIe 4.0 en RAID 10</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Hasta 7,000 MB/s de lectura y escritura para consultas pesadas.</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl glass-panel-interactive flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-mono">Protección Autónoma Imunify360</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Firewall WAF proactivo y mitigación de fuerza bruta en tiempo real.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Vercel-Style Terminal Console */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-zinc-950/95 border border-white/[0.1] shadow-[0_25px_80px_-20px_rgba(0,0,0,0.95)] overflow-hidden font-mono text-xs">
              {/* Header */}
              <div className="bg-white/[0.02] px-4 py-3 border-b border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60 inline-block"></span>
                  <span className="ml-2 text-zinc-500 text-[11px]">
                    webfix-cloud-node-01:~
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab("litespeed")}
                    className={`px-3 py-1 rounded-lg text-[11px] transition-all ${
                      activeTab === "litespeed"
                        ? "bg-white/[0.1] text-white font-semibold border border-white/[0.1]"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    LiteSpeed
                  </button>
                  <button
                    onClick={() => setActiveTab("wpcli")}
                    className={`px-3 py-1 rounded-lg text-[11px] transition-all ${
                      activeTab === "wpcli"
                        ? "bg-white/[0.1] text-white font-semibold border border-white/[0.1]"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    WP-CLI
                  </button>
                  <button
                    onClick={() => setActiveTab("security")}
                    className={`px-3 py-1 rounded-lg text-[11px] transition-all ${
                      activeTab === "security"
                        ? "bg-white/[0.1] text-white font-semibold border border-white/[0.1]"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    Imunify360
                  </button>
                </div>
              </div>

              {/* Console Body */}
              <div className="p-6 space-y-3 min-h-[310px] leading-relaxed">
                {activeTab === "litespeed" && (
                  <div className="space-y-2.5 animate-in fade-in duration-150">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <span className="text-cyan-400">root@webfix-node-01:~$</span>
                      <span className="text-white">litespeed-bench --target https://tusitio.com --concurrency 200</span>
                    </div>
                    <div className="pl-3 border-l border-cyan-500/30 space-y-1 text-zinc-400 text-[11px] sm:text-xs">
                      <p className="text-cyan-300">⚡ Analizando rendimiento en servidor LiteSpeed Enterprise...</p>
                      <p>✓ HTTP/3 & QUIC Protocol: <span className="text-emerald-400 font-bold">Enabled</span></p>
                      <p>✓ TTFB (Time to First Byte): <span className="text-emerald-400 font-bold">38 ms</span></p>
                      <p>✓ Throughput: <span className="text-emerald-400 font-bold">4,820 req/s</span></p>
                      <p>✓ Compresión Brotli: <span className="text-white">Activa (Reducción de peso 78%)</span></p>
                      <p>✓ Hit Rate en Memoria LSCache: <span className="text-emerald-400 font-bold">99.8%</span></p>
                      <p className="text-zinc-300 pt-1">
                        PERFORMANCE RESULT: <span className="text-emerald-400 font-bold">GRADE A+ (100/100 Core Web Vitals)</span>
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "wpcli" && (
                  <div className="space-y-2.5 animate-in fade-in duration-150">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <span className="text-cyan-400">developer@webfix-cpanel:~/public_html$</span>
                      <span className="text-white">wp plugin install litespeed-cache --activate</span>
                    </div>
                    <div className="pl-3 border-l border-blue-500/30 space-y-1 text-zinc-400 text-[11px] sm:text-xs">
                      <p>Descargando paquete oficial desde WordPress.org...</p>
                      <p>Desempaquetando archivos en /wp-content/plugins/litespeed-cache...</p>
                      <p className="text-emerald-400">✓ Plugin instalado con éxito.</p>
                      <p className="text-emerald-400">✓ Activando módulo de aceleración LSCache...</p>
                      <p className="text-cyan-300">Success: LiteSpeed Cache activo y optimizando consultas MySQL.</p>
                    </div>
                  </div>
                )}

                {activeTab === "security" && (
                  <div className="space-y-2.5 animate-in fade-in duration-150">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <span className="text-cyan-400">shield@webfix-defense:~$</span>
                      <span className="text-white">imunify360-agent status --full</span>
                    </div>
                    <div className="pl-3 border-l border-purple-500/30 space-y-1 text-zinc-400 text-[11px] sm:text-xs">
                      <p className="text-emerald-400">🛡️ Imunify360 AI Engine: ACTIVO</p>
                      <p>✓ Web Application Firewall (WAF): <span className="text-emerald-400 font-bold">Protegido</span></p>
                      <p>✓ Escaneo de Malware en Tiempo Real: <span className="text-emerald-400 font-bold">0 Amenazas</span></p>
                      <p>✓ Bloqueo Inteligente de Fuerza Bruta: <span className="text-emerald-400 font-bold">2,419 Bots Mitigados</span></p>
                      <p>✓ Certificados SSL Auto-Renovables: <span className="text-emerald-400 font-bold">Let&apos;s Encrypt / Sectigo OK</span></p>
                      <p className="text-zinc-300">Estado de red: <span className="text-emerald-400 font-bold">SEGURO</span></p>
                    </div>
                  </div>
                )}

                <div className="pt-2 flex items-center gap-2 text-zinc-600 text-xs">
                  <span className="text-cyan-400">webfix@cloud:~$</span>
                  <span className="inline-block w-1.5 h-3.5 bg-cyan-400 animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
