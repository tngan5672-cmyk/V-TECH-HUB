import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, X } from 'lucide-react';
import { SolutionItem, getSolutionsCatalog } from '../data/solutionsCatalog';
import { Theme } from '../types';
import { Language, translations } from '../translations';

interface SolutionsMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSolution: (solution: SolutionItem) => void;
  theme: Theme;
  lang?: Language;
}

export default function SolutionsMegaMenu({
  isOpen,
  onClose,
  onSelectSolution,
  theme,
  lang = 'EN',
}: SolutionsMegaMenuProps) {
  if (!isOpen) return null;

  const catalog = getSolutionsCatalog(lang);
  const engineerCategories = catalog.filter(cat => cat.pillar === 'engineer');
  const operateCategories = catalog.filter(cat => cat.pillar === 'operate');
  const t = translations[lang];

  return (
    <AnimatePresence>
      <div className="absolute top-full left-0 right-0 z-40 w-full">
        {/* Semi-transparent Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 top-20 bg-black/40 backdrop-blur-xs -z-10 cursor-pointer"
        />

        {/* Mega Menu Container - Clean White Canvas with Red / Rose Accent Bar */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="w-full bg-white text-neutral-900 border-b-2 border-[#e31e24] shadow-2xl shadow-neutral-900/15 transition-all"
          id="solutions-mega-menu-panel"
        >
          {/* Subtle rose/red top accent aura */}
          <div className="h-1 w-full bg-gradient-to-r from-[#e31e24] via-[#f43f5e] to-[#fb7185]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-5 mb-6 border-b border-neutral-200">
              <div className="flex items-center gap-4">
                <span className="font-sans text-xl sm:text-2xl font-black tracking-tight text-[#e31e24] uppercase">
                  {t.solutionMegaMenuTitle}
                </span>
                <span className="hidden sm:inline-block text-xs font-semibold text-neutral-500 uppercase tracking-widest bg-red-50 text-[#e31e24] px-3 py-1 rounded-md border border-red-200/70">
                  {t.solutionMegaMenuSub}
                </span>
              </div>

              <button
                onClick={onClose}
                className="flex items-center gap-1.5 text-xs font-bold text-neutral-500 hover:text-[#e31e24] uppercase tracking-wider px-3 py-1.5 rounded-lg hover:bg-red-50 border border-transparent hover:border-red-200 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
                <span>{t.solutionMegaMenuClose}</span>
              </button>
            </div>

            {/* Two Main Pillars: ENGINEER & OPERATE Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Pillar 1: ENGINEER */}
              <div className="relative rounded-2xl border-2 border-neutral-200 bg-[#fafafa] p-6 sm:p-7 pt-8 shadow-sm hover:border-red-300 transition-colors">
                {/* Pillar Header Badge */}
                <div className="absolute -top-3.5 left-6 sm:left-8 px-4 py-0.5 rounded-md bg-[#e31e24] text-white text-xs font-black uppercase tracking-widest shadow-md">
                  ENGINEER
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  {engineerCategories.map((cat) => (
                    <div key={cat.id} className="space-y-3.5">
                      {/* Category Header */}
                      <h4 className="font-sans text-xs sm:text-sm font-black tracking-wider uppercase text-[#e31e24] border-b border-red-100 pb-2">
                        {cat.title}
                      </h4>

                      {/* Items List */}
                      <ul className="space-y-2">
                        {cat.items.map((item) => (
                          <li key={item.id}>
                            <button
                              onClick={() => {
                                onSelectSolution(item);
                                onClose();
                              }}
                              className="group w-full text-left py-2 px-2.5 -mx-2.5 rounded-lg transition-all duration-150 hover:bg-white hover:shadow-xs border border-transparent hover:border-red-200/80 cursor-pointer block"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className="font-sans text-[14px] sm:text-[15px] font-bold text-neutral-800 group-hover:text-[#e31e24] leading-snug transition-colors">
                                  {item.title}
                                </span>
                                <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-[#e31e24] group-hover:translate-x-0.5 transition-all shrink-0" />
                              </div>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pillar 2: OPERATE */}
              <div className="relative rounded-2xl border-2 border-neutral-200 bg-[#fafafa] p-6 sm:p-7 pt-8 shadow-sm hover:border-red-300 transition-colors">
                {/* Pillar Header Badge */}
                <div className="absolute -top-3.5 left-6 sm:left-8 px-4 py-0.5 rounded-md bg-[#e31e24] text-white text-xs font-black uppercase tracking-widest shadow-md">
                  OPERATE
                </div>

                <div className="space-y-3.5">
                  {operateCategories.map((cat) => (
                    <div key={cat.id} className="space-y-3.5">
                      {/* Category Header */}
                      <h4 className="font-sans text-xs sm:text-sm font-black tracking-wider uppercase text-[#e31e24] border-b border-red-100 pb-2">
                        {cat.title}
                      </h4>

                      {/* Items List in 2 columns */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-2">
                        {cat.items.map((item) => (
                          <li key={item.id}>
                            <button
                              onClick={() => {
                                onSelectSolution(item);
                                onClose();
                              }}
                              className="group w-full text-left py-2 px-2.5 -mx-2.5 rounded-lg transition-all duration-150 hover:bg-white hover:shadow-xs border border-transparent hover:border-red-200/80 cursor-pointer block"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className="font-sans text-[14px] sm:text-[15px] font-bold text-neutral-800 group-hover:text-[#e31e24] leading-snug transition-colors">
                                  {item.title}
                                </span>
                                <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-[#e31e24] group-hover:translate-x-0.5 transition-all shrink-0" />
                              </div>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Footer Info Bar */}
            <div className="mt-6 pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-600">
              <div className="flex items-center gap-2 font-medium">
                <span className="font-bold text-neutral-900">V-Tech Hub Solutions:</span>
                <span>{t.solutionMegaMenuFooter}</span>
              </div>
              <div className="text-[#e31e24] font-bold flex items-center gap-1">
                <span>{t.solutionMegaMenuSla}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
