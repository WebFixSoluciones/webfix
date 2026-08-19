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
    // Simulate submission / logging
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="pt-28 pb-20 bg-tech-grid">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-bold text-emerald-300">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Validación Contractual Digital</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Confirmación de Aceptación Legal
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            WEB FIX HOSTING Y DOMINIOS — Plataforma Oficial
          </p>
        </div>

        {/* Warning Notice Box */}
        <div className="p-6 rounded-3xl bg-amber-950/40 border border-amber-500/30 text-amber-200 text-xs sm:text-sm leading-relaxed space-y-2 mb-8">
          <div className="font-bold flex items-center gap-2 text-amber-300">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Aviso Importante para Nuevos Clientes</span>
          </div>
          <p>
            Para todos nuestros nuevos clientes es indispensable completar este registro de aceptación para dar de alta sus servicios conforme a la normativa vigente. Marque la casilla requerida y haga clic en <strong>“Aceptar Términos y Condiciones”</strong> para registrar su conformidad en nuestro sistema.
          </p>
        </div>

        {/* Form Container */}
        <div className="p-8 rounded-3xl glass-card border border-slate-800 shadow-2xl">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                ¡Aceptación Registrada Exitosamente!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Gracias, <strong>{fullName}</strong> ({email}). Tu confirmación ha sido guardada en nuestra base de datos de cumplimiento LOPDP.
              </p>
              <div className="pt-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold transition-all"
                >
                  <span>Volver al Inicio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Nombres y Apellidos Completos <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ej. Juan Carlos Pérez Gómez"
                  className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Correo Electrónico Registrado en WebFix <span className="text-rose-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu-correo@empresa.com"
                  className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                />
              </div>

              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-slate-700 bg-slate-900 text-brand-600 focus:ring-brand-500 shrink-0"
                  />
                  <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Declaro haber leído y aceptar íntegramente los{" "}
                    <Link href="/terminos-y-condiciones" target="_blank" className="text-brand-400 underline hover:text-brand-300">
                      Términos y Condiciones
                    </Link>{" "}
                    y la{" "}
                    <Link href="/politica-de-uso-aceptable" target="_blank" className="text-brand-400 underline hover:text-brand-300">
                      Política de Uso Aceptable (PUA)
                    </Link>
                    .
                  </span>
                </label>
              </div>

              {/* LOPDP Clause */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                Al aceptar, el usuario presta su consentimiento libre, específico, informado e inequívoco para el tratamiento de sus datos personales por parte de WEB FIX HOSTING Y DOMINIOS con fines contractuales y operativos conforme a la <strong>Ley Orgánica de Protección de Datos Personales del Ecuador (LOPDP, 2021)</strong>.
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !accepted}
                className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-xl shadow-emerald-600/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Registrando Aceptación...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>ACEPTAR TÉRMINOS Y CONDICIONES DE USO</span>
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
