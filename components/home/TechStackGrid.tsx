import Image from "next/image";

const TECH_PARTNERS = [
  { name: "LiteSpeed Enterprise", desc: "Servidor Web de ultra velocidad", icon: "/assets/litespeed.svg" },
  { name: "cPanel & WHM", desc: "Panel de control líder mundial", icon: "/assets/network.svg" },
  { name: "Imunify360 AI", desc: "Seguridad y antivirus proactivo", icon: "/assets/dbaas.svg" },
  { name: "Discos NVMe SSD", desc: "Almacenamiento PCIe 4.0", icon: "/assets/git.svg" },
  { name: "Cloudflare Anycast", desc: "Red global contra ataques DDoS", icon: "/assets/gitpull.svg" },
  { name: "JetBackup Cloud", desc: "Copias de seguridad externas", icon: "/assets/network.svg" },
];

export default function TechStackGrid() {
  return (
    <section className="py-16 border-y border-white/[0.06] bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
            Estándares Tecnológicos Globales
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {TECH_PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl glass-panel-interactive text-center flex flex-col items-center justify-center space-y-2 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                <Image
                  src={partner.icon}
                  alt={partner.name}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <div className="text-xs font-semibold text-white group-hover:text-cyan-400 transition-colors font-mono">
                {partner.name}
              </div>
              <div className="text-[10px] text-zinc-500 leading-tight">
                {partner.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
