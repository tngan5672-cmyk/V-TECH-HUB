import React from 'react';
import { ShieldCheck, Zap, Rocket, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { Theme } from '../types';
import { Language, translations } from '../translations';

interface WhyAllianceProps {
  theme: Theme;
  lang: Language;
}

export default function WhyAlliance({ theme, lang }: WhyAllianceProps) {
  const t = translations[lang];

  const pillars = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: t.whyPillar1Title,
      description: t.whyPillar1Desc,
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: t.whyPillar2Title,
      description: t.whyPillar2Desc,
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: t.whyPillar3Title,
      description: t.whyPillar3Desc,
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: t.whyPillar4Title,
      description: t.whyPillar4Desc,
    },
  ];

  return (
    <section className={`py-20 bg-white dark:bg-[#0c0f10] transition-colors`} id="why">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Statement Card */}
        <div className="mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative p-8 md:p-10 rounded-2xl border-l-4 border-l-[#e31e24] shadow-md flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 overflow-hidden ${
              theme === 'light' 
                ? 'bg-gradient-to-r from-red-50/70 via-white to-red-50/50 border-red-200/80' 
                : 'bg-gradient-to-r from-[#121617] via-[#161a1b] to-[#121617] border-neutral-800'
            }`}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#e31e24]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-4xl relative z-10">
              <p className={`text-xl md:text-2xl font-extrabold tracking-tight leading-snug ${
                theme === 'light' ? 'text-neutral-900' : 'text-neutral-50'
              }`}>
                {t.whyCoreStatement}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Section Header */}
        <div className="mb-14 max-w-2xl">

          <h2 className={`text-3xl sm:text-4xl font-sans font-extrabold tracking-tight mb-4 ${
            theme === 'light' ? 'text-neutral-900' : 'text-neutral-50'
          }`}>
            {t.whyHeaderTitle}
          </h2>
          <p className={`text-base sm:text-lg ${
            theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
          }`}>
            {t.whyHeaderSub}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`relative p-8 rounded-2xl border group hover:shadow-xl hover:border-[#e31e24] transition-all duration-300 overflow-hidden ${
                theme === 'light'
                  ? 'bg-white border-red-100 shadow-sm hover:shadow-red-500/10'
                  : 'bg-[#111415] border-neutral-800 hover:bg-[#15191a]'
              }`}
              id={`pillar-card-${index}`}
            >
              {/* Subtle hover accent light bar on top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e31e24] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-[#e31e24] flex items-center justify-center mb-6 group-hover:bg-[#e31e24] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                {pillar.icon}
              </div>
              <h3 className={`text-lg font-extrabold mb-3 leading-snug group-hover:text-[#e31e24] transition-colors ${
                theme === 'light' ? 'text-neutral-900' : 'text-neutral-50'
              }`}>
                {pillar.title}
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${
                theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
              }`}>
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
