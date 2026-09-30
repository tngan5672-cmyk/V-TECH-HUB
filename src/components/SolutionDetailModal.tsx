import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Shield, ArrowRight, Layers, Sparkles, Cpu, Server, Bot, BarChart3, ChevronRight } from 'lucide-react';
import { SolutionItem } from '../data/solutionsCatalog';
import { Theme } from '../types';

interface SolutionDetailModalProps {
  solution: SolutionItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectSolution: (sol: SolutionItem) => void;
  onRequestConsultation: (solutionName: string) => void;
  theme: Theme;
}

export default function SolutionDetailModal({
  solution,
  isOpen,
  onClose,
  onRequestConsultation,
  theme,
}: SolutionDetailModalProps) {
  if (!solution) return null;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'cloud-delivery':
        return <Server className="w-5 h-5 text-blue-500" />;
      case 'cyber-security':
        return <Shield className="w-5 h-5 text-emerald-500" />;
      case 'ai-operations':
        return <Bot className="w-5 h-5 text-purple-500" />;
      case 'data-analytics':
        return <BarChart3 className="w-5 h-5 text-amber-500" />;
      default:
        return <Cpu className="w-5 h-5 text-[#e31e24]" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 16 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`relative w-full max-w-4xl my-auto rounded-2xl sm:rounded-3xl border shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col ${
              theme === 'light'
                ? 'bg-white border-neutral-200 text-neutral-900 shadow-neutral-900/20'
                : 'bg-[#0f1318] border-neutral-800 text-neutral-100 shadow-black/80'
            }`}
          >
            {/* Header Accent Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#e31e24] via-[#f43f5e] to-neutral-900" />

            {/* Top Bar with Category & Close */}
            <div className={`px-6 sm:px-8 pt-6 pb-4 border-b flex items-center justify-between gap-4 ${
              theme === 'light' ? 'border-neutral-100 bg-neutral-50/70' : 'border-neutral-800/80 bg-[#141922]'
            }`}>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-neutral-900/5 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700">
                  {getCategoryIcon(solution.category)}
                  <span>{solution.categoryLabel}</span>
                </div>

                <span className="text-xs font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider bg-red-500/10 text-[#e31e24] border border-red-500/20">
                  Pillar: {solution.pillar === 'engineer' ? 'ENGINEER' : 'OPERATE'}
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-7 custom-scrollbar">
              {/* Title & Tagline */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-900 dark:text-white leading-tight">
                  {solution.title}
                </h2>
                <p className="text-base sm:text-lg font-semibold text-[#e31e24] mt-2 leading-relaxed">
                  {solution.tagline}
                </p>
              </div>

              {/* Overview Description Box */}
              <div className={`p-5 rounded-2xl border ${
                theme === 'light'
                  ? 'bg-neutral-50 border-neutral-200 text-neutral-700'
                  : 'bg-neutral-900/60 border-neutral-800 text-neutral-300'
              }`}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#e31e24]" /> Executive Overview
                </h4>
                <p className="text-sm sm:text-base leading-relaxed font-normal">
                  {solution.description || solution.concept}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {solution.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border text-center ${
                      theme === 'light'
                        ? 'bg-white border-neutral-200'
                        : 'bg-[#141922] border-neutral-800'
                    }`}
                  >
                    <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                      {spec.label}
                    </p>
                    <p className="text-sm sm:text-base font-black text-neutral-900 dark:text-neutral-100 mt-1">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Key Features & Architecture Capabilities */}
              <div>
                <h3 className="text-base sm:text-lg font-black text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-[#e31e24]" />
                  Core Capabilities & Technical Architecture
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {solution.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border transition-all ${
                        theme === 'light'
                          ? 'bg-neutral-50/70 border-neutral-200 hover:border-red-400/50'
                          : 'bg-[#141922]/80 border-neutral-800 hover:border-red-500/40'
                      }`}
                    >
                      <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#e31e24]" />
                        {feat.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                        {feat.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Benefits Checklist */}
              <div>
                <h3 className="text-base font-black text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  Key Strategic Benefits
                </h3>
                <div className="space-y-2.5">
                  {solution.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Proven Business Outcomes */}
              <div className={`p-5 rounded-2xl border ${
                theme === 'light'
                  ? 'bg-red-50/50 border-red-200'
                  : 'bg-red-950/20 border-red-900/30'
              }`}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#e31e24] mb-2">
                  Delivered Business Outcomes
                </h4>
                <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                  {solution.businessOutcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-[#e31e24] shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className={`p-5 sm:p-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
              theme === 'light' ? 'border-neutral-200 bg-neutral-50' : 'border-neutral-800 bg-[#141922]'
            }`}>
              <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400 text-center sm:text-left">
                Enterprise Grade Delivery • 24/7/365 Dedicated SOC & Cloud NOC
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer w-1/2 sm:w-auto ${
                    theme === 'light'
                      ? 'border-neutral-300 hover:bg-neutral-100 text-neutral-700'
                      : 'border-neutral-700 hover:bg-neutral-800 text-neutral-300'
                  }`}
                >
                  Close
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onRequestConsultation(solution.title);
                  }}
                  className="px-6 py-2.5 bg-[#e31e24] hover:bg-opacity-90 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-red-500/20 flex items-center justify-center gap-2 cursor-pointer w-1/2 sm:w-auto"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
