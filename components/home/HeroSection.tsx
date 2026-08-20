"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShieldCheck, ArrowRight, Loader2, Star, Check } from "lucide-react";
import { DOMAIN_TLDS } from "@/data/domains";

export default function HeroSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    setIsSearching(true);

    let cleanDomain = searchTerm.trim().toLowerCase().replace(/^(https?:\/\/)?(www\.)?/, "");
    if (!cleanDomain.includes(".")) cleanDomain = `${cleanDomain}.com`;

    const url = `https://webfixsoluciones.net/cliente/cart.php?a=add&domain=register&query=${encodeURIComponent(cleanDomain)}`;
    setTimeout(() => {
      window.open(url, "_blank");
      setIsSearching(false);
    }, 400);
  };

  const tlds = DOMAIN_TLDS.slice(0, 6);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between bg-[#070B18] overflow-hidden pt-28 pb-12">
      {/* ── Background Image & Dark Overlay ──────────────────────────── */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity scale-105"
          style={{ backgroundImage: "url('/assets/hero-hosting.png')" }}
        />
        {/* Soft atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B18] via-[#070B18]/85 to-[#070B18]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B18] via-transparent to-[#070B18]/60" />
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[350px] bg-[#1C40F2]/10 blur-[150px] pointer-events-none" />
      </div>

      {/* ── Main 90% Width Hero Content ───────────────────────────────── */}
      <div className="w-[90%] max-w-[1700px] mx-auto my-auto py-12">
        <div className="max-w-3xl space-y-8">
          
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-normal text-[#00E4B8] border border-[#00E4B8]/30 bg-[#00E4B8]/5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E4B8] animate-pulse" />
            <span className="tracking-wide">Infraestructura LiteSpeed NVMe en Ecuador</span>
          </div>

          {/* Heading in Pure White */}
          <h1 className="font-heading font-semibold text-white tracking-tight leading-[1.08]" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
            Construye, aloja y escala tu presencia <span className="text-white underline decoration-[#00E4B8] decoration-4 underline-offset-8">online</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 font-light text-base sm:text-lg leading-relaxed max-w-2xl">
            Tu plataforma todo-en-uno de alta velocidad. Servidores LiteSpeed Enterprise con discos NVMe PCIe 4.0, SSL gratis ilimitado, cPanel y soporte 24/7 en español.
          </p>

          {/* Domain Search Bar (90% width responsive) */}
          <form onSubmit={handleSearch} className="w-full max-w-2xl">
            <div className="flex items-center bg-[#0D111F]/90 border border-white/[0.12] focus-within:border-[#00E4B8]/60 rounded-2xl p-2 backdrop-blur-xl shadow-2xl transition-all">
              <div className="flex items-center gap-3 pl-3 flex-1">
                <Search className="w-5 h-5 text-white/40 shrink-0" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Escribe el dominio que deseas (ej. miempresa)..."
                  className="w-full bg-transparent text-white text-sm sm:text-base font-normal placeholder-white/40 focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSearching}
                className="shrink-0 px-6 sm:px-8 py-3 rounded-xl font-medium text-xs sm:text-sm text-white bg-[#1C40F2] hover:bg-[#1534c9] transition-all cursor-pointer disabled:opacity-60 shadow-[0_0_20px_rgba(28,64,242,0.4)]"
              >
                {isSearching ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Buscando</span>
                  </div>
                ) : (
                  <span>Buscar Dominio</span>
                )}
              </button>
            </div>

            {/* Quick TLD Pills */}
            <div className="flex flex-wrap items-center gap-2 mt-3 pl-1">
              <span className="text-[11px] font-mono text-white/40 uppercase tracking-wider mr-1">Populares:</span>
              {tlds.map((tld) => (
                <button
                  key={tld.extension}
                  type="button"
                  onClick={() => {
                    setSearchTerm((prev) => {
                      const base = prev.split(".")[0] || prev;
                      return base ? `${base}${tld.extension}` : "";
                    });
                  }}
                  className="text-xs font-mono text-white/60 hover:text-white px-2.5 py-0.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] transition-colors cursor-pointer"
                >
                  <span className="font-bold text-[#00E4B8]">{tld.extension}</span>{" "}
                  <span className="text-white/40 font-light">${tld.priceAnnual.toFixed(2)}</span>
                </button>
              ))}
            </div>
          </form>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#planes"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm text-white bg-[#1C40F2] hover:bg-[#1534c9] transition-all shadow-[0_0_25px_rgba(28,64,242,0.35)] transform hover:scale-[1.02]"
            >
              <span>Ver Planes de Hosting</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#soluciones"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-normal text-sm text-white/80 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] transition-all"
            >
              <span>Explorar Servicios</span>
            </a>
          </div>

          {/* Guarantee Badge */}
          <div className="flex items-center gap-2.5 text-xs text-white/50 font-light pt-2">
            <ShieldCheck className="w-4 h-4 text-[#00E4B8] shrink-0" />
            <span>Garantía de reembolso de 30 días · Sin contratos forzosos · Facturación SRI Ecuador</span>
          </div>
        </div>
      </div>

      {/* ── Bottom Trust Bar (90% Width) ────────────────────────────── */}
      <div className="w-[90%] max-w-[1700px] mx-auto border-t border-white/[0.06] pt-6 pb-2">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-white/50">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#00E4B8] text-[#00E4B8]" />
              ))}
            </div>
            <span className="font-medium text-white/80">Excelente 4.9 / 5</span>
            <span>· Con la confianza de más de 1,000 sitios web en Ecuador</span>
          </div>

          <div className="flex items-center gap-6 text-[11px] font-mono text-white/40">
            <span>✓ LiteSpeed Enterprise</span>
            <span>✓ NVMe PCIe 4.0</span>
            <span>✓ Imunify360 WAF</span>
            <span>✓ 99.9% Uptime SLA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
