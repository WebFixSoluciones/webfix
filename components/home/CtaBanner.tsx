import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-28 bg-zinc-950 border-t border-white/[0.04]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-8">
        <p className="text-[11px] uppercase tracking-widest font-normal text-white/40">
          Empieza hoy
        </p>
        <h2 className="font-heading font-semibold text-white leading-snug mx-auto max-w-2xl" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          Impulsa la velocidad de tu proyecto hoy mismo.
        </h2>
        <p className="text-white/50 font-light text-base leading-relaxed max-w-lg mx-auto">
          Hosting LiteSpeed NVMe con garantía de 30 días, SSL gratis ilimitado y soporte técnico humano 24/7 en español.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#planes"
            className="px-8 py-3.5 rounded-full text-sm font-normal text-black bg-white hover:bg-white/90 transition-colors"
          >
            Ver planes de hosting
          </a>
          <Link
            href="/registro-de-dominios"
            className="px-8 py-3.5 rounded-full text-sm font-normal text-white/60 border border-white/[0.1] hover:text-white hover:border-white/20 transition-colors"
          >
            Registrar dominio
            <ArrowRight className="inline-block ml-2 w-4 h-4" />
          </Link>
        </div>
        <p className="text-[12px] font-light text-white/25 pt-2">
          Sin contratos forzosos · Migración gratuita · Activación inmediata
        </p>
      </div>
    </section>
  );
}
