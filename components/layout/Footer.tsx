import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Lock, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.06] text-white/40 text-[13px] font-light">

      {/* Value Strip */}
      <div className="border-b border-white/[0.04] py-8 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <ShieldCheck className="w-4 h-4 text-blue-400" />, title: "Uptime 99.9% garantizado", sub: "NVMe PCIe 4.0 en RAID 10." },
              { icon: <Lock className="w-4 h-4 text-emerald-400" />, title: "Seguridad Imunify360", sub: "WAF con mitigación DDoS y malware." },
              { icon: <Globe className="w-4 h-4 text-amber-400" />, title: "Facturación SRI Ecuador", sub: "Comprobantes electrónicos con validez legal." },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-3">
                <div className="shrink-0">{item.icon}</div>
                <div>
                  <span className="font-normal text-white/70 block text-[13px]">{item.title}</span>
                  <span className="text-white/30 block text-[12px]">{item.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Links */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/">
              <div className="relative w-36 h-8">
                <Image src="/assets/logo-white.svg" alt="Web Fix" fill className="object-contain object-left" />
              </div>
            </Link>
            <p className="text-[13px] font-light text-white/35 leading-relaxed max-w-xs">
              Hosting Cloud de alta velocidad, dominios, correo corporativo y diseño web en Ecuador. LiteSpeed Enterprise con NVMe.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {["LiteSpeed Cache", "cPanel en Español", "NVMe RAID 10"].map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-[11px] font-light text-white/40">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Hosting */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-widest font-normal text-white/30">Hosting</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/hosting-wordpress", label: "Hosting WordPress" },
                { href: "/hosting-reseller", label: "Hosting Reseller" },
                { href: "/servidor-dedicado", label: "Servidores Dedicados" },
                { href: "/hosting-gratis", label: "Hosting Gratis" },
                { href: "/hosting-en-ecuador", label: "Hosting en Ecuador" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] font-light text-white/40 hover:text-white/70 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-widest font-normal text-white/30">Servicios</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/registro-de-dominios", label: "Registro de Dominios" },
                { href: "/correos-empresarial", label: "Correos Corporativos" },
                { href: "/diseno-de-paginas-web", label: "Diseño Web" },
                { href: "https://webfixsoluciones.net/cliente/clientarea.php", label: "Área de Clientes", external: true },
              ].map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[13px] font-light text-white/40 hover:text-white/70 transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-[13px] font-light text-white/40 hover:text-white/70 transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-widest font-normal text-white/30">Legal</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/terminos-y-condiciones", label: "Términos y Condiciones" },
                { href: "/politica-de-uso-aceptable", label: "Política de Uso (PUA)" },
                { href: "/terminos-y-condiciones/formulario-de-aceptacion", label: "Formulario de Aceptación" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] font-light text-white/40 hover:text-white/70 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 text-[11px] font-light text-white/20 leading-relaxed">
                Cumplimiento LOPDP Ecuador 2021.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Payment badges */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-light text-white/25 mr-2">Pagos seguros:</span>
            {["visa", "mastercard", "paypal", "americanexpress"].map((brand) => (
              <div key={brand} className="w-10 h-6 bg-white/[0.03] border border-white/[0.06] rounded flex items-center justify-center p-1.5">
                <Image src={`/assets/${brand}.svg`} alt={brand} width={28} height={16} className="object-contain opacity-60" />
              </div>
            ))}
          </div>

          <p className="text-[11px] font-light text-white/20">
            © {new Date().getFullYear()} WEB FIX HOSTING Y DOMINIOS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
