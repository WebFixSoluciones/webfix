"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { MAIN_FAQS, FAQItem } from "@/data/faqs";

interface Props {
  faqs?: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FaqAccordion({
  faqs = MAIN_FAQS,
  title = "Preguntas frecuentes",
  subtitle = "Todo lo que necesitas saber antes de comenzar.",
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-28 bg-black">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">

        <div className="mb-14 space-y-3">
          <p className="text-[11px] uppercase tracking-widest font-normal text-white/40">Soporte</p>
          <h2 className="font-heading font-semibold text-white leading-snug" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            {title}
          </h2>
          <p className="text-white/50 font-light text-base leading-relaxed">{subtitle}</p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-colors ${
                  isOpen ? "bg-white/[0.04] border-white/[0.1]" : "bg-white/[0.02] border-white/[0.05] hover:border-white/[0.08]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <span className="text-sm font-normal text-white/80">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-white/30 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-white/60" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-[13px] font-light text-white/40 leading-relaxed border-t border-white/[0.04] pt-4 animate-in fade-in duration-150">
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
