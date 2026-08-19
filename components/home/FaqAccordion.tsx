"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { MAIN_FAQS, FAQItem } from "@/data/faqs";

interface Props {
  faqs?: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FaqAccordion({
  faqs = MAIN_FAQS,
  title = "Preguntas Frecuentes",
  subtitle = "Todo lo que necesitas saber antes de contratar tu servicio.",
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#070B18] border-t border-white/[0.06]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-3">
          <p className="text-[11px] uppercase tracking-widest font-mono text-[#00E4B8]">
            Soporte & Ayuda
          </p>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-white">
            {title}
          </h2>
          <p className="text-white/60 font-light text-sm">{subtitle}</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? "bg-[#1D0C3C] border-[#00E4B8]/40 shadow-lg"
                    : "bg-[#15082C]/70 border-purple-900/30 hover:border-purple-800/60"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <span className="text-sm font-semibold text-white">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-white/50 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#00E4B8]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-white/70 leading-relaxed border-t border-white/[0.06] pt-4 animate-in fade-in duration-150 font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
