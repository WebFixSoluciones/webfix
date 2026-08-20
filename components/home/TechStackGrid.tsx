import Image from "next/image";

const TECH_PARTNERS = [
  { name: "LiteSpeed Enterprise", desc: "Servidor Web ultra-rápido", icon: "/assets/litespeed.svg" },
  { name: "cPanel & WHM", desc: "Panel líder mundial en español", icon: "/assets/network.svg" },
  { name: "Imunify360 AI", desc: "Antivirus & WAF proactivo", icon: "/assets/dbaas.svg" },
  { name: "Discos NVMe SSD", desc: "Almacenamiento PCIe 4.0", icon: "/assets/git.svg" },
  { name: "Cloudflare Anycast", desc: "Red global contra ataques DDoS", icon: "/assets/gitpull.svg" },
  { name: "JetBackup Cloud", desc: "Copias automáticas externas", icon: "/assets/network.svg" },
];

export default function TechStackGrid() {
  return (
    <section className="py-16 border-y border-white/[0.04] bg-[#070B18]">
      <div className="w-[90%] max-w-[1700px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-mono uppercase tracking-widest text-[#00E4B8]">
            Estándares Tecnológicos Globales
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {TECH_PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#140c24]/50 border border-purple-900/30 hover:border-[#00E4B8]/40 hover:bg-[#1a0f30] text-center flex flex-col items-center justify-center space-y-2.5 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                <Image
                  src={partner.icon}
                  alt={partner.name}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <div className="text-xs font-semibold text-white group-hover:text-[#00E4B8] transition-colors font-mono">
                {partner.name}
              </div>
              <div className="text-[11px] text-white/40 font-light leading-tight">
                {partner.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
