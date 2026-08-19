import {
  Zap,
  ShieldCheck,
  RefreshCw,
  HardDrive,
  Headphones,
  FileCheck2,
  Lock,
  Globe2,
  Sparkles
} from "lucide-react";

export default function FeaturesGrid() {
  return (
    <section className="py-24 relative overflow-hidden vercel-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Arquitectura Bento Grid</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight text-shine">
            Construido para el Rendimiento
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            Cada componente de nuestra plataforma ha sido seleccionado para ofrecer estabilidad, seguridad y velocidad sin compromisos.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Bento Item 1: Large Span */}
          <div className="md:col-span-2 lg:col-span-2 p-8 rounded-3xl glass-panel-interactive flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                LiteSpeed Enterprise + LSCache
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-md">
                Aceleración a nivel de kernel que sirve páginas en caché directamente desde memoria RAM con tiempos de respuesta menores a 50 milisegundos.
              </p>
            </div>
            <div className="p-3 rounded-2xl bg-black/40 border border-white/[0.06] font-mono text-[11px] text-zinc-400 flex items-center justify-between">
              <span>Modo HTTP/3 & QUIC</span>
              <span className="text-emerald-400 font-bold">Activo por defecto</span>
            </div>
          </div>

          {/* Bento Item 2: Large Span */}
          <div className="md:col-span-1 lg:col-span-2 p-8 rounded-3xl glass-panel-interactive flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                <HardDrive className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Almacenamiento NVMe PCIe 4.0
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-md">
                Discos de estado sólido de alta velocidad en arreglo RAID 10 para una lectura y escritura instantánea en bases de datos MySQL.
              </p>
            </div>
            <div className="p-3 rounded-2xl bg-black/40 border border-white/[0.06] font-mono text-[11px] text-zinc-400 flex items-center justify-between">
              <span>Velocidad de Lectura</span>
              <span className="text-cyan-400 font-bold">Hasta 7,000 MB/s</span>
            </div>
          </div>

          {/* Bento Item 3: Regular */}
          <div className="p-6 sm:p-7 rounded-3xl glass-panel-interactive space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-white">Imunify360 con IA</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Escaneo y desinfección en tiempo real con WAF proactivo contra ataques zero-day.
              </p>
            </div>
          </div>

          {/* Bento Item 4: Regular */}
          <div className="p-6 sm:p-7 rounded-3xl glass-panel-interactive space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                <RefreshCw className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-white">Migración 100% Gratis</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Trasladamos tu sitio web y correos desde tu proveedor actual sin interrupciones.
              </p>
            </div>
          </div>

          {/* Bento Item 5: Regular */}
          <div className="p-6 sm:p-7 rounded-3xl glass-panel-interactive space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-white">Factura SRI Ecuador</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Facturación electrónica autorizada para empresas y personas naturales con RUC.
              </p>
            </div>
          </div>

          {/* Bento Item 6: Regular */}
          <div className="p-6 sm:p-7 rounded-3xl glass-panel-interactive space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center">
                <Headphones className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-white">Soporte Humano 24/7</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Ingenieros reales en español disponibles mediante chat en vivo y tickets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
