"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShieldCheck, ArrowRight, Loader2, Sparkles, Check } from "lucide-react";
import { DOMAIN_TLDS } from "@/data/domains";

export default function HeroSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTld, setSelectedTld] = useState(".com");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsSearching(true);

    let cleanDomain = searchTerm.trim().toLowerCase().replace(/^(https?:\/\/)?(www\.)?/, "");
    if (!cleanDomain.includes(".")) {
      cleanDomain = `${cleanDomain}${selectedTld}`;
    }

    const whmcsDomainUrl = `https://webfixsoluciones.net/cliente/cart.php?a=add&domain=register&query=${encodeURIComponent(cleanDomain)}`;

    setTimeout(() => {
      window.open(whmcsDomainUrl, "_blank");
      setIsSearching(false);
    }, 400);
  };

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Domain Search Bar (Hostinger / Modern Style) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 py-2">
          {/* Domain Search Capsule */}
          <div className="w-full lg:max-w-3xl">
            <form onSubmit={handleSearch} className="relative">
              <div className="flex items-center bg-white rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-2xl transition-all">
                <div className="flex items-center gap-2.5 w-full pl-3 sm:pl-4">
                  <Search className="w-5 h-5 text-zinc-400 shrink-0" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Escribe el dominio que deseas"
                    className="w-full bg-transparent text-black text-sm sm:text-base font-normal placeholder-zinc-400 focus:outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSearching}
                  className="shrink-0 px-6 sm:px-9 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-bold text-sm text-white bg-[#6c35de] hover:bg-[#5a28c2] transition-colors cursor-pointer disabled:opacity-70 shadow-md"
                >
                  {isSearching ? (
                    <div className="flex items-center gap-1.5">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Buscando</span>
                    </div>
                  ) : (
                    <span>Buscar</span>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Notice */}
          <div className="text-right hidden lg:block pr-2">
            <div className="text-xs sm:text-sm font-bold text-white tracking-tight">
              Dominio gratis durante 1 año
            </div>
            <div className="text-xs text-zinc-400">
              se incluye en los{" "}
              <a href="#planes" className="text-zinc-200 underline hover:text-white transition-colors">
                planes anuales
              </a>
            </div>
          </div>
        </div>

        {/* Hero Visual Card (Clean Hostinger / Vercel Aesthetic) */}
        <div className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] border border-white/[0.1] shadow-2xl flex items-center">
          {/* Background Atmospheric Layer */}
          <div className="absolute inset-0 bg-[#0a0a0e]">
            {/* Background Image / Texture */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity scale-105"
              style={{
                backgroundImage: "url('/assets/hero-hosting.png')"
              }}
            />
            {/* Dark Cinematic Gradient Overlay for Crystal Clear Text */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
          </div>

          {/* Ambient Lighting Glows */}
          <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Left Hero Content */}
          <div className="relative z-10 max-w-2xl px-6 sm:px-12 lg:px-16 py-12 sm:py-16 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Tu éxito online <br className="hidden sm:inline" />
              empieza aquí
            </h1>

            <p className="text-zinc-300 text-base sm:text-lg font-normal leading-relaxed max-w-xl">
              Desde publicar un sitio hasta impulsar tu negocio con LiteSpeed y discos NVMe, con WebFix lo tienes todo.
            </p>

            <div className="pt-2">
              <a
                href="#planes"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-sm text-black bg-white hover:bg-zinc-200 transition-all shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)] transform hover:scale-[1.02]"
              >
                <span>Empezar ya</span>
              </a>
            </div>

            <div className="pt-4 flex items-center gap-2 text-xs sm:text-sm text-zinc-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-zinc-400" />
              <span>Garantía de reembolso de 30 días</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
