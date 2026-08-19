"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShieldCheck, ArrowRight, Loader2, Star } from "lucide-react";
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

  const tlds = DOMAIN_TLDS.slice(0, 5);

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* ── Full-screen background ──────────────────────────────────── */}
      <div className="absolute inset-0 -z-10">
        {/* Photo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/hero-hosting.png')" }}
        />
        {/* Cinematic darkening overlay – keeps left side very dark so text pops */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50" />
      </div>

      {/* ── Content ─────────────────────────────────────────────────── */}
      <div className="flex-1 flex items-center max-w-7xl mx-auto w-full px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-xl space-y-8">

          {/* Eyebrow tag */}
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-normal tracking-widest uppercase text-white/60 border border-white/[0.15] bg-white/[0.04]">
            Hosting web y mucho más
          </span>

          {/* Main Heading — Atkinson, weight 600 */}
          <h1 className="font-heading font-semibold text-white leading-[1.08]" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            Construye, aloja,<br />
            crece tu presencia<br />
            <span className="text-gradient-blue">online</span>
          </h1>

          {/* Sub — Inter 400 */}
          <p className="text-white/60 font-normal text-base sm:text-lg leading-relaxed max-w-md">
            Tu plataforma todo-en-uno para el éxito online.<br />
            LiteSpeed NVMe, SSL gratis, migración incluida.
          </p>

          {/* Domain Search Bar */}
          <form onSubmit={handleSearch} className="w-full max-w-lg">
            <div className="flex items-center bg-white/[0.06] border border-white/[0.12] rounded-full p-1.5 backdrop-blur-sm transition-all focus-within:border-white/30">
              <div className="flex items-center gap-2 pl-4 flex-1">
                <Search className="w-4 h-4 text-white/40 shrink-0" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Busca tu dominio ideal..."
                  className="w-full bg-transparent text-white text-sm font-normal placeholder-white/30 focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSearching}
                className="shrink-0 px-6 py-2.5 rounded-full text-sm font-normal text-black bg-white hover:bg-white/90 transition-colors cursor-pointer disabled:opacity-60"
              >
                {isSearching ? (
                  <Loader2 className="w-4 h-4 animate-spin mx-auto" />
                ) : (
                  "Buscar"
                )}
              </button>
            </div>

            {/* TLD quick pills */}
            <div className="flex flex-wrap gap-2 mt-3 pl-1">
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
                  className="text-[11px] font-normal text-white/50 hover:text-white/80 transition-colors cursor-pointer"
                >
                  {tld.extension}{" "}
                  <span className="text-white/25">${tld.priceAnnual.toFixed(0)}</span>
                </button>
              ))}
            </div>
          </form>

          {/* CTA Button */}
          <div className="pt-2">
            <a
              href="#planes"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-normal text-black bg-white hover:bg-white/90 transition-colors shadow-md"
            >
              Explorar servicios
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Trust badge */}
          <div className="flex items-start gap-3 pt-2">
            <ShieldCheck className="w-5 h-5 text-white/30 shrink-0 mt-0.5" />
            <p className="text-white/40 text-[13px] font-light leading-snug">
              Garantía de reembolso de 30 días.{" "}
              <span className="text-white/60">Sin contratos forzosos.</span>
            </p>
          </div>
        </div>
      </div>

      {/* ── Bottom Trust Bar ─────────────────────────────────────────── */}
      <div className="relative bg-black/50 backdrop-blur-md border-t border-white/[0.06] py-5 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
          <div className="flex items-center gap-1.5">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-[13px] font-light text-white/50">
            <span className="text-white/70 font-normal">Excelente</span>
            {" "}· Máxima calificación del sector ·{" "}
            <span className="text-white/70 font-normal">4.9 de 5 estrellas</span>
            {" "}· Con la confianza de miles de sitios web en Ecuador
          </p>
        </div>
      </div>
    </section>
  );
}
