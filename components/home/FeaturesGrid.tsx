import { Zap, HardDrive, ShieldCheck, RefreshCw, FileCheck2, Headphones } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-5 h-5 text-[#00E4B8]" />,
    title: "LiteSpeed Enterprise + LSCache",
    desc: "Aceleración a nivel de servidor que despacha páginas en caché desde memoria RAM en menos de 50 ms.",
    wide: true,
  },
  {
    icon: <HardDrive className="w-5 h-5 text-blue-400" />,
    title: "Almacenamiento NVMe PCIe 4.0",
    desc: "Hasta 7,000 MB/s de velocidad en arreglos RAID 10 para lecturas y escrituras MySQL instantáneas.",
    wide: true,
  },
  { icon: <ShieldCheck className="w-5 h-5 text-[#00E4B8]" />, title: "Imunify360 con IA", desc: "WAF proactivo y escaneo en tiempo real contra ataques y malware." },
  { icon: <RefreshCw className="w-5 h-5 text-purple-400" />, title: "Migración 100% Gratis", desc: "Trasladamos tus sitios web y correos sin cortes en tu servicio." },
  { icon: <FileCheck2 className="w-5 h-5 text-amber-400" />, title: "Factura SRI Ecuador", desc: "Comprobantes electrónicos autorizados con RUC para tu empresa." },
  { icon: <Headphones className="w-5 h-5 text-rose-400" />, title: "Soporte Humano 24/7", desc: "Atención técnica especializada en español mediante tickets y chat." },
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 bg-[#070B18] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-[11px] uppercase tracking-widest font-mono text-[#00E4B8]">
            Ventajas Exclusivas WebFix
          </p>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-white">
            Infraestructura Diseñada para el Éxito
          </h2>
          <p className="text-white/60 font-light text-sm max-w-md mx-auto leading-relaxed">
            Componentes de hardware y software de nivel corporativo para asegurar la máxima estabilidad de tu proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className={`card-purple rounded-3xl p-7 flex flex-col justify-between space-y-4 ${
                f.wide ? "md:col-span-2" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-2xl bg-black/40 border border-white/[0.08] flex items-center justify-center">
                {f.icon}
              </div>
              <div>
                <h3 className="font-heading font-semibold text-white text-lg mb-2">
                  {f.title}
                </h3>
                <p className="text-white/60 font-light text-xs leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
