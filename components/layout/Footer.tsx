import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Lock, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050811] border-t border-white/[0.06] text-white/50 text-xs font-light">
      {/* Value Strip */}
      <div className="border-b border-white/[0.04] py-8 bg-[#070B18]">
        <div className="w-[90%] max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[#00E4B8] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-medium text-white block text-sm">Uptime 99.9% Garantizado</span>
                <span className="text-white/40 text-xs">Discos NVMe PCIe 4.0 en RAID 10.</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[#00E4B8] flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <span className="font-medium text-white block text-sm">Seguridad Imunify360</span>
                <span className="text-white/40 text-xs">WAF con mitigación anti-DDoS y malware.</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[#00E4B8] flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="font-medium text-white block text-sm">Facturación SRI Ecuador</span>
                <span className="text-white/40 text-xs">Comprobantes electrónicos autorizados.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Links */}
      <div className="w-[90%] max-w-[1700px] mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-36 h-8">
                <Image
                  src="/assets/logo-white.svg"
                  alt="Web Fix"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-white/50 leading-relaxed max-w-sm">
              Plataforma de Hosting Cloud de alta velocidad, Registro de Dominios, Correo Corporativo y Servidores en Ecuador. Servidores LiteSpeed Enterprise con discos NVMe.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-[#140c24] border border-purple-900/40 text-[#00E4B8]">
                LiteSpeed Cache
              </span>
              <span className="px-3 py-1 rounded-full bg-[#140c24] border border-purple-900/40 text-[#00E4B8]">
                cPanel en Español
              </span>
              <span className="px-3 py-1 rounded-full bg-[#140c24] border border-purple-900/40 text-[#00E4B8]">
                NVMe RAID 10
              </span>
            </div>
          </div>

          {/* Hosting */}
          <div className="space-y-3">
            <h4 className="text-white font-mono text-xs uppercase tracking-wider">Hosting</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/hosting-wordpress" className="hover:text-white transition-colors">
                  Hosting WordPress
                </Link>
              </li>
              <li>
                <Link href="/hosting-reseller" className="hover:text-white transition-colors">
                  Hosting Reseller WHM
                </Link>
              </li>
              <li>
                <Link href="/servidor-dedicado" className="hover:text-white transition-colors">
                  Servidores Dedicados
                </Link>
              </li>
              <li>
                <Link href="/hosting-gratis" className="hover:text-white transition-colors">
                  Hosting Gratis (Free)
                </Link>
              </li>
              <li>
                <Link href="/hosting-en-ecuador" className="hover:text-white transition-colors">
                  Hosting en Ecuador
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="space-y-3">
            <h4 className="text-white font-mono text-xs uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/registro-de-dominios" className="hover:text-white transition-colors">
                  Registro de Dominios
                </Link>
              </li>
              <li>
                <Link href="/correos-empresarial" className="hover:text-white transition-colors">
                  Correos Corporativos
                </Link>
              </li>
              <li>
                <Link href="/diseno-de-paginas-web" className="hover:text-white transition-colors">
                  Diseño de Páginas Web
                </Link>
              </li>
              <li>
                <a
                  href="https://webfixsoluciones.net/cliente/clientarea.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Área de Clientes
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-white font-mono text-xs uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/terminos-y-condiciones" className="hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/politica-de-uso-aceptable" className="hover:text-white transition-colors">
                  Política de Uso Aceptable
                </Link>
              </li>
              <li>
                <Link href="/terminos-y-condiciones/formulario-de-aceptacion" className="text-[#00E4B8] hover:underline font-medium">
                  Formulario de Aceptación
                </Link>
              </li>
              <li className="pt-2 text-xs text-white/30 leading-relaxed">
                Cumplimiento con la Ley Orgánica de Protección de Datos Personales del Ecuador (2021).
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/40 mr-2 font-mono">Pagos Seguros:</span>
            <div className="flex items-center gap-2 opacity-70">
              <div className="w-10 h-7 bg-[#070B18] border border-white/[0.08] rounded flex items-center justify-center p-1.5">
                <Image src="/assets/visa.svg" alt="Visa" width={28} height={16} className="object-contain" />
              </div>
              <div className="w-10 h-7 bg-[#070B18] border border-white/[0.08] rounded flex items-center justify-center p-1.5">
                <Image src="/assets/mastercard.svg" alt="Mastercard" width={28} height={16} className="object-contain" />
              </div>
              <div className="w-10 h-7 bg-[#070B18] border border-white/[0.08] rounded flex items-center justify-center p-1.5">
                <Image src="/assets/paypal.svg" alt="PayPal" width={28} height={16} className="object-contain" />
              </div>
              <div className="w-10 h-7 bg-[#070B18] border border-white/[0.08] rounded flex items-center justify-center p-1.5">
                <Image src="/assets/americanexpress.svg" alt="Amex" width={28} height={16} className="object-contain" />
              </div>
            </div>
          </div>

          <div className="text-xs font-mono text-white/40">
            © {new Date().getFullYear()} WEB FIX HOSTING Y DOMINIOS. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
