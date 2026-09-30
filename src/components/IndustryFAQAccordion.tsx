import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Theme, SolutionFAQ } from '../types';
import { Language } from '../translations';

interface IndustryFAQAccordionProps {
  faqs?: SolutionFAQ[];
  theme: Theme;
  lang: Language;
}

export default function IndustryFAQAccordion({
  faqs,
  theme,
  lang,
}: IndustryFAQAccordionProps) {
  // Keep the first item open by default for immediate discoverability, like the reference
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) {
    return null;
  }

  const toggleIndex = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Title matching user reference */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
          theme === 'light' ? 'text-neutral-900' : 'text-white'
        }`}>
          {lang === 'VI' ? 'Frequently asked questions' : 'Frequently asked questions'}
        </h2>
      </div>

      {/* Accordion container */}
      <div className={`divide-y rounded-2xl border transition-colors ${
        theme === 'light'
          ? 'divide-neutral-200 border-neutral-200 bg-white/70 shadow-xs'
          : 'divide-neutral-800 border-neutral-800 bg-[#12161a]/60 shadow-xs'
      }`}>
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div key={idx} className="px-6 sm:px-8 transition-colors">
              <button
                type="button"
                onClick={() => toggleIndex(idx)}
                className="w-full py-5 sm:py-6 flex items-center justify-between gap-4 text-left cursor-pointer group focus:outline-hidden"
                aria-expanded={isOpen}
              >
                <span className={`text-base sm:text-lg font-bold leading-snug transition-colors pr-2 ${
                  isOpen
                    ? 'text-[#e31e24]'
                    : theme === 'light'
                    ? 'text-neutral-900 group-hover:text-[#e31e24]'
                    : 'text-neutral-100 group-hover:text-[#e31e24]'
                }`}>
                  {faq.question}
                </span>

                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen
                    ? 'rotate-180 bg-red-500/10 text-[#e31e24]'
                    : theme === 'light'
                    ? 'bg-neutral-100 text-neutral-600 group-hover:bg-red-500/10 group-hover:text-[#e31e24]'
                    : 'bg-neutral-800 text-neutral-300 group-hover:bg-red-500/10 group-hover:text-[#e31e24]'
                }`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className={`mb-6 p-5 sm:p-6 rounded-xl border text-sm sm:text-base leading-relaxed ${
                      theme === 'light'
                        ? 'bg-[#f8f7f4] border-neutral-200/80 text-neutral-700'
                        : 'bg-[#181d22] border-neutral-750 text-neutral-300'
                    }`}>
                      <p className="whitespace-pre-line">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
