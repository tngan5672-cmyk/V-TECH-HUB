import React from 'react';
import { PARTNERS } from '../data';
import { ExternalLink, ArrowLeft, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { Theme } from '../types';
import { Language, translations } from '../translations';
import PartnerBrandLogo from './PartnerBrandLogo';

interface PartnerDetailViewProps {
  theme: Theme;
  lang: Language;
  onBackToHome: () => void;
  onRequestConsultation?: () => void;
}

export default function PartnerDetailView({ theme, lang, onBackToHome }: PartnerDetailViewProps) {
  const t = translations[lang];

  return (
    <div className="pt-24 pb-20 bg-neutral-50 dark:bg-[#090b0c] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Back Navigation */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-bold text-neutral-500 hover:text-[#e31e24] transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.backToHome}
        </button>

        {/* Hero Header */}
        <div className="mb-12">
          <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 ${
            theme === 'light' ? 'text-neutral-900' : 'text-neutral-50'
          }`}>
            {t.partnerEcosystemTitle}
          </h1>
          <p className={`text-lg max-w-3xl ${
            theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
          }`}>
            {t.partnerEcosystemSub}
          </p>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {PARTNERS.map((partner, idx) => {
            const localizedDesc = lang === 'VI' 
              ? (partner.descriptionVI || partner.description) 
              : (partner.descriptionEN || partner.description);

            return (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04 }}
                className={`p-6 sm:p-7 rounded-2xl border flex flex-col justify-between group hover:shadow-xl hover:border-[#e31e24]/60 transition-all ${
                  theme === 'light'
                    ? 'bg-white border-neutral-200/80'
                    : 'bg-[#111415] border-neutral-800'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <PartnerBrandLogo name={partner.name} size="md" theme={theme} showText={true} showIcon={false} />
                    </div>
                    <ShieldCheck className="w-4 h-4 text-[#e31e24] shrink-0" />
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                    theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
                  }`}>
                    {localizedDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e31e24] hover:underline"
                  >
                    {lang === 'VI' ? 'Website Đối tác' : 'Partner Website'}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
