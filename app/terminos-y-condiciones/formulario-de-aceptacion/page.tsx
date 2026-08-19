"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, ShieldCheck, CheckCircle2, AlertCircle, ArrowRight, Loader2, Sparkles } from "lucide-react";

export default function FormularioDeAceptacionPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accepted || !fullName || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="pt-28 pb-20 vercel-grid">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl text-xs font-mono text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Validación Contractual Digital</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight text-shine">
            Confirmación de Aceptación
          </h1>

          <p className="text-xs sm:text-sm text-zinc-400 font-mono">
            WEB FIX HOSTING Y DOMINIOS — Plataforma Oficial
          </p>
        </div>

        {/* Warning Box */}
        <div className="p-5 rounded-2xl bg-amber-500/[0.05] border border-amber-500/20 text-amber-200 text-xs leading-relaxed space-y-1.5 mb-8">
          <div className="font-semibold flex items-center gap-2 text-amber-300 font-mono text-[11px] uppercase">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Aviso de Cumplimiento Normativo</span>
          </div>
          <p className="text-zinc-300">
            Para todos los nuevos clientes es indispensable completar este registro de aceptación. Marque la casilla y haga clic en <strong>“Aceptar Términos y Condiciones”</strong> para registrar su conformidad.
          </p>
        </div>

        {/* Form */}
        <div className="p-7 sm:p-8 rounded-3xl glass-panel shadow-2xl">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-in fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">
                ¡Aceptación Registrada!
              </h3>
              <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                Gracias, <strong>{fullName}</strong> ({email}). Tu registro ha sido procesado de acuerdo con la LOPDP.
              </p>
              <div className="pt-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-all"
                >
                  <span>Volver al Inicio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Nombres y Apellidos Completos <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ej. Juan Carlos Pérez"
                  className="w-full bg-black/60 border border-white/[0.1] rounded-xl px-4 py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500/60 font-mono transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Correo Registrado en WebFix <span className="text-rose-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu-correo@empresa.com"
                  className="w-full bg-black/60 border border-white/[0.1] rounded-xl px-4 py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500/60 font-mono transition-colors"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-white/[0.2] bg-zinc-950 text-blue-600 focus:ring-0 shrink-0"
                  />
                  <span className="text-xs text-zinc-400 leading-relaxed">
                    Declaro haber leído y aceptar los{" "}
                    <Link href="/terminos-y-condiciones" target="_blank" className="text-white underline hover:text-cyan-300">
                      Términos y Condiciones
                    </Link>{" "}
                    y la{" "}
                    <Link href="/politica-de-uso-aceptable" target="_blank" className="text-white underline hover:text-cyan-300">
                      Política de Uso Aceptable
                    </Link>
                    .
                  </span>
                </label>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-[11px] text-zinc-500 leading-relaxed font-mono">
                Conforme a la <strong>Ley Orgánica de Protección de Datos Personales del Ecuador (LOPDP, 2021)</strong>.
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !accepted}
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-xs text-black bg-white hover:bg-zinc-200 shadow-md transition-all disabled:opacity-40 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Procesando...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>ACEPTAR TÉRMINOS Y CONDICIONES</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
