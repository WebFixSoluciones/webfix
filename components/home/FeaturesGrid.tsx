import {
  Zap,
  ShieldCheck,
  RefreshCw,
  HardDrive,
  Headphones,
  FileCheck2,
  Lock,
  Globe2
} from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    title: "LiteSpeed Enterprise Cache",
    description: "Carga tus páginas en milisegundos gracias al motor de aceleración LSCache a nivel de servidor web."
  },
  {
    icon: HardDrive,
    color: "text-brand-400 bg-brand-500/10 border-brand-500/20",
    title: "Almacenamiento NVMe SSD RAID 10",
    description: "Tasa de transferencia ultrarrápida que multiplica la velocidad de consulta en bases de datos MySQL y WooCommerce."
  },
  {
    icon: ShieldCheck,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    title: "Seguridad Imunify360 Proactiva",
    description: "Defensa contra ataques DDoS, fuerza bruta, escaneo continuo y desinfección automática de código malicioso."
  },
  {
    icon: RefreshCw,
    color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    title: "Migración de Sitios 100% Gratis",
    description: "Trasladamos tus sitios web, bases de datos y correos desde tu hosting anterior sin costo ni interrupción."
  },
  {
    icon: Lock,
    color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    title: "Certificados SSL Gratis Ilimitados",
    description: "Seguridad HTTPS automática y renovable para todos tus dominios y subdominios con sello de candado verde."
  },
  {
    icon: FileCheck2,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    title: "Facturación Legal SRI Ecuador",
    description: "Emisión de facturas electrónicas válidas para personas naturales y empresas registradas con RUC en Ecuador."
  },
  {
    icon: Headphones,
    color: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    title: "Soporte Técnico Humano 24/7",
    description: "Atención especializada por ingenieros reales en español mediante tickets, chat en vivo y soporte dedicado."
  },
  {
    icon: Globe2,
    color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    title: "Garantía de Uptime 99.9%",
    description: "Infraestructura Cloud redundante con monitoreo continuo para asegurar que tu negocio esté siempre abierto al público."
  }
];

export default function FeaturesGrid() {
  return (
    <section className="py-20 bg-tech-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-950/80 border border-brand-500/30 text-xs font-semibold text-brand-300">
            <Zap className="w-3.5 h-3.5" />
            <span>Ventajas Competitivas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            ¿Por qué elegir Web Fix Hosting?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Diseñado desde cero para ofrecer la máxima velocidad, estabilidad y seguridad que tu negocio necesita en internet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl glass-card glass-card-hover border border-slate-800 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${feat.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
