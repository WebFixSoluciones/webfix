"use client";

import { useState } from "react";
import { Search, Globe, Check, ArrowRight, Loader2 } from "lucide-react";
import { DOMAIN_TLDS } from "@/data/domains";

export default function DomainSearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTld, setSelectedTld] = useState(".com");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsSearching(true);

    // Clean domain term
    let cleanDomain = searchTerm.trim().toLowerCase().replace(/^(https?:\/\/)?(www\.)?/, "");
    if (!cleanDomain.includes(".")) {
      cleanDomain = `${cleanDomain}${selectedTld}`;
    }

    // Redirect to WHMCS shopping cart with domain lookup
    const whmcsDomainUrl = `https://webfixsoluciones.net/cliente/cart.php?a=add&domain=register&query=${encodeURIComponent(cleanDomain)}`;

    setTimeout(() => {
      window.open(whmcsDomainUrl, "_blank");
      setIsSearching(false);
    }, 600);
  };

  const handleTldClick = (tld: string) => {
    setSelectedTld(tld);
    if (searchTerm.includes(".")) {
      const nameWithoutTld = searchTerm.split(".")[0];
      setSearchTerm(`${nameWithoutTld}${tld}`);
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto rounded-3xl glass-card p-4 sm:p-8 border border-brand-500/20 shadow-2xl shadow-brand-950/50">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 uppercase tracking-wider mb-2">
          <Globe className="w-4 h-4" />
          <span>Encuentra y Registra tu Nombre en Internet</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          Busca tu Dominio Ideal al Mejor Precio
        </h3>
      </div>

      <form onSubmit={handleSearch} className="relative">
        <div className="flex flex-col sm:flex-row items-center gap-3 bg-slate-950/80 p-2 sm:p-2.5 rounded-2xl border border-slate-700/80 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-500/20 transition-all shadow-inner">
          <div className="flex items-center gap-3 w-full pl-3">
            <Search className="w-5 h-5 text-slate-400 shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Escribe el nombre de tu empresa o proyecto..."
              className="w-full bg-transparent text-white text-base sm:text-lg placeholder-slate-500 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSearching}
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-brand-600 hover:bg-brand-500 shadow-lg shadow-brand-600/30 hover:shadow-brand-500/50 transition-all disabled:opacity-70 cursor-pointer"
          >
            {isSearching ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Buscando...</span>
              </>
            ) : (
              <>
                <span>BUSCAR DOMINIO</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Popular TLD chips with prices */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {DOMAIN_TLDS.slice(0, 6).map((tld) => {
          const isSelected = selectedTld === tld.extension;
          return (
            <button
              key={tld.extension}
              type="button"
              onClick={() => handleTldClick(tld.extension)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                isSelected
                  ? "bg-brand-600/30 border-brand-500 text-white shadow-sm shadow-brand-500/20"
                  : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white"
              }`}
            >
              <span className="font-mono text-brand-300 font-bold">{tld.extension}</span>
              <span className="text-slate-400">${tld.priceAnnual.toFixed(2)}/año</span>
              {tld.extension === ".ec" && (
                <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded">Ecuador</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
