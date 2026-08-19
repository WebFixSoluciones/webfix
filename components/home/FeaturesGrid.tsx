import { Zap, HardDrive, ShieldCheck, RefreshCw, FileCheck2, Headphones } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-5 h-5 text-blue-400" />,
    title: "LiteSpeed Enterprise + LSCache",
    desc: "Aceleración a nivel de kernel. Páginas en caché servidas desde RAM en menos de 50 ms.",
    wide: true,
  },
  {
    icon: <HardDrive className="w-5 h-5 text-cyan-400" />,
    title: "NVMe PCIe 4.0 RAID 10",
    desc: "Hasta 7,000 MB/s de lectura. Consultas MySQL instantáneas bajo cualquier carga.",
    wide: true,
  },
  { icon: <ShieldCheck className="w-5 h-5 text-purple-400" />, title: "Imunify360 con IA", desc: "WAF proactivo y desinfección autónoma de malware en tiempo real." },
  { icon: <RefreshCw className="w-5 h-5 text-emerald-400" />, title: "Migración 100% gratis", desc: "Trasladamos tu sitio desde cualquier proveedor sin interrupciones." },
  { icon: <FileCheck2 className="w-5 h-5 text-amber-400" />, title: "Factura SRI Ecuador", desc: "Facturación electrónica válida para empresas con RUC." },
  { icon: <Headphones className="w-5 h-5 text-rose-400" />, title: "Soporte humano 24/7", desc: "Ingenieros reales en español por chat en vivo y tickets." },
];

export default function FeaturesGrid() {
  return (
    <section className="py-28 bg-zinc-950 border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="max-w-xl mb-16 space-y-3">
          <p className="text-[11px] uppercase tracking-widest font-normal text-white/40">
            Por qué WebFix
          </p>
          <h2 className="font-heading font-semibold text-white leading-snug" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            Construido para el rendimiento
          </h2>
          <p className="text-white/50 font-light text-base leading-relaxed">
            Cada componente de nuestra plataforma ha sido elegido para ofrecer estabilidad, seguridad y velocidad sin compromisos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className={`p-7 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.035] transition-all space-y-4 ${f.wide ? "md:col-span-2" : ""}`}
            >
              <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                {f.icon}
              </div>
              <h3 className="font-heading font-semibold text-white text-lg leading-snug">{f.title}</h3>
              <p className="text-white/40 font-light text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
