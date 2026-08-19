import Image from "next/image";

const TECH_PARTNERS = [
  { name: "LiteSpeed Web Server", desc: "Servidor Web 10x más rápido que Apache", icon: "/assets/litespeed.svg" },
  { name: "cPanel & WHM", desc: "Panel de control líder en la industria", icon: "/assets/network.svg" },
  { name: "Imunify360", desc: "Seguridad y antivirus con Inteligencia Artificial", icon: "/assets/dbaas.svg" },
  { name: "Discos NVMe SSD", desc: "Almacenamiento de ultra-baja latencia", icon: "/assets/git.svg" },
  { name: "Cloudflare CDN", desc: "Red global contra ataques DDoS y DNS Anycast", icon: "/assets/gitpull.svg" },
  { name: "JetBackup", desc: "Respaldos automáticos en la nube externa", icon: "/assets/network.svg" },
];

export default function TechStackGrid() {
  return (
    <section className="py-16 border-y border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-2">
            Poder Tecnológico de Clase Mundial
          </h3>
          <p className="text-xl sm:text-2xl font-bold text-white">
            Impulsado por los mejores estándares de la industria
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {TECH_PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-brand-500/40 transition-all text-center flex flex-col items-center justify-center space-y-2 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                <Image
                  src={partner.icon}
                  alt={partner.name}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="text-xs font-bold text-white group-hover:text-brand-300 transition-colors">
                {partner.name}
              </div>
              <div className="text-[11px] text-slate-400 leading-tight">
                {partner.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
