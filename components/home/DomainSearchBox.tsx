"use client";

import { useState } from "react";
import { Search, Globe, ArrowRight, Loader2, Sparkles } from "lucide-react";
import { DOMAIN_TLDS } from "@/data/domains";

export default function DomainSearchBox() {
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
    }, 500);
  };

  const handleTldClick = (tld: string) => {
    setSelectedTld(tld);
    if (searchTerm.includes(".")) {
      const nameWithoutTld = searchTerm.split(".")[0];
      setSearchTerm(`${nameWithoutTld}${tld}`);
    }
  };

  return (
    <div className="relative rounded-3xl bg-zinc-950/80 backdrop-blur-2xl p-4 sm:p-7 border border-white/[0.1] shadow-[0_20px_70px_-15px_rgba(0,0,0,0.95)]">
      {/* Top ambient line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent pointer-events-none" />

      <div className="flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
          <Globe className="w-3.5 h-3.5 text-cyan-400" />
          <span>Buscador de Dominios Globales & Locales</span>
        </div>
        <span className="hidden sm:inline-block text-[11px] font-mono text-zinc-500">
          Whois Privacy Gratis
        </span>
      </div>

      <form onSubmit={handleSearch} className="relative">
        <div className="flex flex-col sm:flex-row items-center gap-2.5 bg-black/60 p-2 rounded-2xl border border-white/[0.08] focus-within:border-cyan-500/50 focus-within:ring-1 focus-within:ring-cyan-500/30 transition-all">
          <div className="flex items-center gap-3 w-full pl-3">
            <Search className="w-4 h-4 text-zinc-500 shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Escribe el nombre de tu dominio (ej. miempresa)..."
              className="w-full bg-transparent text-white text-sm sm:text-base placeholder-zinc-500 focus:outline-none font-mono"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSearching}
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-black bg-white hover:bg-zinc-200 shadow-[0_0_20px_-3px_rgba(255,255,255,0.3)] transition-all cursor-pointer disabled:opacity-50"
          >
            {isSearching ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Buscando...</span>
              </>
            ) : (
              <>
                <span>BUSCAR DOMINIO</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* TLD Quick Filter Pills */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        {DOMAIN_TLDS.slice(0, 6).map((tld) => {
          const isSelected = selectedTld === tld.extension;
          return (
            <button
              key={tld.extension}
              type="button"
              onClick={() => handleTldClick(tld.extension)}
              className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border transition-all cursor-pointer ${
                isSelected
                  ? "bg-white/[0.1] border-cyan-400/60 text-cyan-300 shadow-[0_0_15px_-3px_rgba(0,229,255,0.3)]"
                  : "bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:border-white/[0.15] hover:text-white"
              }`}
            >
              <span className="font-bold">{tld.extension}</span>
              <span className="text-zinc-500 text-[11px]">${tld.priceAnnual.toFixed(2)}</span>
              {tld.extension === ".ec" && (
                <span className="text-[9px] bg-amber-500/20 text-amber-300 px-1 py-0.2 rounded font-sans">EC</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
