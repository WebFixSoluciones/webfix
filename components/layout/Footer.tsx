import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Lock, Globe, Server, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.08] text-zinc-400 text-xs">
      {/* Top Value Strip */}
      <div className="border-b border-white/[0.06] py-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-[11px]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="font-semibold text-white block">Uptime 99.9% Garantizado</span>
                <span className="text-zinc-500">Discos NVMe PCIe 4.0 en RAID 10.</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <span className="font-semibold text-white block">Seguridad Imunify360</span>
                <span className="text-zinc-500">WAF con mitigación anti-DDoS y malware.</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <span className="font-semibold text-white block">Facturación SRI Ecuador</span>
                <span className="text-zinc-500">Comprobantes electrónicos con validez legal.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
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
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Plataforma de Hosting Cloud de alta velocidad, Registro de Dominios, Correo Corporativo y Servidores en Ecuador. Servidores LiteSpeed Enterprise con discos NVMe.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono">
              <span className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-zinc-300">
                LiteSpeed Cache
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-zinc-300">
                cPanel en Español
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-zinc-300">
                NVMe RAID 10
              </span>
            </div>
          </div>

          {/* Hosting */}
          <div className="space-y-3">
            <h4 className="text-white font-mono text-xs uppercase tracking-wider">Hosting</h4>
            <ul className="space-y-2">
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
            <ul className="space-y-2">
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
              <li>
                <a
                  href="https://webfixsoluciones.net/cliente/cart.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Carrito de Compras
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-white font-mono text-xs uppercase tracking-wider">Legal & LOPDP</h4>
            <ul className="space-y-2">
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
                <Link href="/terminos-y-condiciones/formulario-de-aceptacion" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
                  Formulario de Aceptación
                </Link>
              </li>
              <li className="pt-2 text-[11px] text-zinc-500">
                Cumplimiento con la Ley Orgánica de Protección de Datos Personales del Ecuador (2021).
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-zinc-500 mr-2 font-mono">Pagos Seguros:</span>
            <div className="flex items-center gap-1.5 opacity-80">
              <div className="w-9 h-6 bg-zinc-950 border border-white/[0.08] rounded flex items-center justify-center p-1">
                <Image src="/assets/visa.svg" alt="Visa" width={28} height={16} className="object-contain" />
              </div>
              <div className="w-9 h-6 bg-zinc-950 border border-white/[0.08] rounded flex items-center justify-center p-1">
                <Image src="/assets/mastercard.svg" alt="Mastercard" width={28} height={16} className="object-contain" />
              </div>
              <div className="w-9 h-6 bg-zinc-950 border border-white/[0.08] rounded flex items-center justify-center p-1">
                <Image src="/assets/paypal.svg" alt="PayPal" width={28} height={16} className="object-contain" />
              </div>
              <div className="w-9 h-6 bg-zinc-950 border border-white/[0.08] rounded flex items-center justify-center p-1">
                <Image src="/assets/americanexpress.svg" alt="Amex" width={28} height={16} className="object-contain" />
              </div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-zinc-500">
            © {new Date().getFullYear()} WEB FIX HOSTING Y DOMINIOS. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
