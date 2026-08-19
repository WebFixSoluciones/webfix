import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Lock, Globe, Server, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05080f] border-t border-slate-800/80 text-slate-400 text-sm">
      {/* Partner / Trust Banner */}
      <div className="border-b border-slate-800/60 py-8 bg-[#070b14]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-600/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-semibold text-white block">Garantía de Uptime 99.9%</span>
                <span>Infraestructura Cloud de Nivel Tier III con discos NVMe RAID 10.</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <span className="font-semibold text-white block">Seguridad Proactiva Imunify360</span>
                <span>WAF, mitigación de ataques DDoS y limpieza automática de malware.</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="font-semibold text-white block">Facturación SRI Ecuador</span>
                <span>Comprobantes electrónicos autorizados con validez tributaria.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & About */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-44 h-10">
                <Image
                  src="/assets/logo-white.svg"
                  alt="Web Fix"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed pr-6">
              Plataforma de Hosting Cloud de alto rendimiento, Registro de Dominios, Correo Corporativo y Servidores en Ecuador. Tecnología de última generación con servidores LiteSpeed Web Server, almacenamiento 100% NVMe SSD y soporte técnico profesional 24/7.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Servidores LiteSpeed
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Discos NVMe SSD
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> cPanel en Español
              </span>
            </div>
          </div>

          {/* Col 2: Hosting & Servidores */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Hosting & Cloud</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/hosting-wordpress" className="hover:text-brand-400 transition-colors">
                  Hosting WordPress
                </Link>
              </li>
              <li>
                <Link href="/hosting-reseller" className="hover:text-brand-400 transition-colors">
                  Hosting Reseller WHM
                </Link>
              </li>
              <li>
                <Link href="/servidor-dedicado" className="hover:text-brand-400 transition-colors">
                  Servidores Dedicados
                </Link>
              </li>
              <li>
                <Link href="/hosting-gratis" className="hover:text-brand-400 transition-colors">
                  Hosting Gratis (Free Tier)
                </Link>
              </li>
              <li>
                <Link href="/hosting-en-ecuador" className="hover:text-brand-400 transition-colors">
                  Hosting en Ecuador
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Dominios y Servicios */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/registro-de-dominios" className="hover:text-brand-400 transition-colors">
                  Registro de Dominios
                </Link>
              </li>
              <li>
                <Link href="/correos-empresarial" className="hover:text-brand-400 transition-colors">
                  Correos Corporativos
                </Link>
              </li>
              <li>
                <Link href="/diseno-de-paginas-web" className="hover:text-brand-400 transition-colors">
                  Diseño de Páginas Web
                </Link>
              </li>
              <li>
                <a
                  href="https://webfixsoluciones.net/cliente/clientarea.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-400 transition-colors"
                >
                  Portal de Clientes
                </a>
              </li>
              <li>
                <a
                  href="https://webfixsoluciones.net/cliente/cart.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-400 transition-colors"
                >
                  Realizar Pedido
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal y Cumplimiento */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Legal & LOPDP</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terminos-y-condiciones" className="hover:text-brand-400 transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/politica-de-uso-aceptable" className="hover:text-brand-400 transition-colors">
                  Política de Uso Aceptable (PUA)
                </Link>
              </li>
              <li>
                <Link href="/terminos-y-condiciones/formulario-de-aceptacion" className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
                  Formulario de Aceptación Legal
                </Link>
              </li>
              <li className="pt-2 text-xs text-slate-500">
                Cumplimiento estricto con la Ley Orgánica de Protección de Datos Personales del Ecuador (LOPDP, 2021).
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods & Copyright bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 mr-1">Métodos de Pago Seguros:</span>
            <div className="flex items-center gap-2">
              <div className="w-10 h-7 bg-slate-900 border border-slate-700/60 rounded flex items-center justify-center p-1">
                <Image src="/assets/visa.svg" alt="Visa" width={32} height={20} className="object-contain" />
              </div>
              <div className="w-10 h-7 bg-slate-900 border border-slate-700/60 rounded flex items-center justify-center p-1">
                <Image src="/assets/mastercard.svg" alt="Mastercard" width={32} height={20} className="object-contain" />
              </div>
              <div className="w-10 h-7 bg-slate-900 border border-slate-700/60 rounded flex items-center justify-center p-1">
                <Image src="/assets/paypal.svg" alt="PayPal" width={32} height={20} className="object-contain" />
              </div>
              <div className="w-10 h-7 bg-slate-900 border border-slate-700/60 rounded flex items-center justify-center p-1">
                <Image src="/assets/americanexpress.svg" alt="American Express" width={32} height={20} className="object-contain" />
              </div>
              <div className="w-10 h-7 bg-slate-900 border border-slate-700/60 rounded flex items-center justify-center p-1">
                <Image src="/assets/discover.svg" alt="Discover" width={32} height={20} className="object-contain" />
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-400 text-center md:text-right">
            © {new Date().getFullYear()} <span className="text-white font-medium">WEB FIX HOSTING Y DOMINIOS</span>. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
