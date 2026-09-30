import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { Theme } from '../types';
import { Language, translations } from '../translations';

interface HeroProps {
  theme: Theme;
  lang: Language;
  onExploreSolutionsClick: () => void;
  onViewSuccessStoriesClick?: () => void;
  onRequestConsultationClick: () => void;
  onBecomePartnerClick: () => void;
}

export default function Hero({
  theme,
  lang,
  onExploreSolutionsClick,
  onRequestConsultationClick,
}: HeroProps) {
  const t = translations[lang];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 14 } },
  };

  return (
    <section className={`relative min-h-[480px] flex items-center justify-center pt-20 pb-20 overflow-hidden ${
      theme === 'light' 
        ? 'bg-gradient-to-b from-red-50/50 via-white to-red-50/30 border-b border-red-100' 
        : 'bg-[#0b0d0e] border-b border-neutral-900'
    }`} id="why">
      {/* Dynamic Animated Ambient Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft pulsing red radial mesh */}
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: theme === 'light' ? [0.18, 0.3, 0.18] : [0.18, 0.32, 0.18]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#e31e24] via-red-500 to-transparent blur-[120px]"
        />

        {/* Secondary subtle side ambient highlight */}
        <div className={`absolute top-1/3 -left-40 w-[400px] h-[400px] rounded-full blur-[100px] ${
          theme === 'light' ? 'bg-red-300/25' : 'bg-red-900/15'
        }`} />
        <div className={`absolute bottom-10 -right-40 w-[400px] h-[400px] rounded-full blur-[100px] ${
          theme === 'light' ? 'bg-red-400/25' : 'bg-red-800/15'
        }`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >

          {/* Headline with dynamic gradient text */}
          <motion.h1 
            variants={itemVariants}
            className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight leading-[1.12] max-w-5xl mx-auto ${
              theme === 'light' ? 'text-neutral-950' : 'text-neutral-50'
            }`}
          >
            {t.heroTitlePrefix}{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#e31e24] via-red-500 to-rose-600 font-black">
              {t.heroTitleHighlight}
              <svg className="absolute -bottom-1.5 left-0 w-full h-2.5 text-[#e31e24]/30 pointer-events-none" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p 
            variants={itemVariants}
            className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
              theme === 'light' ? 'text-neutral-600' : 'text-neutral-300'
            }`}
          >
            {t.heroSubhead}
          </motion.p>

          {/* CTA Buttons Block */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 pt-2 max-w-4xl mx-auto"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#e31e24] to-red-600 rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-300 group-hover:scale-105"></div>
              <button
                onClick={onExploreSolutionsClick}
                className="relative px-7 py-4 bg-[#e31e24] text-white hover:bg-[#d0181d] text-sm font-extrabold rounded-xl shadow-xl shadow-red-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                id="hero-explore-solutions-btn"
              >
                {t.exploreIndustrySolutions}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <button
              onClick={onRequestConsultationClick}
              className={`px-7 py-4 text-sm font-extrabold rounded-xl border transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-sm hover:shadow-md ${
                theme === 'light'
                  ? 'bg-white hover:bg-neutral-100 text-neutral-900 border-neutral-300 hover:border-neutral-400'
                  : 'bg-[#141819] hover:bg-[#1a1e20] text-neutral-100 border-neutral-800 hover:border-neutral-700'
              }`}
              id="hero-request-consult-btn"
            >
              <MessageSquare className="w-4 h-4 text-[#e31e24]" />
              {t.requestConsultation}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

