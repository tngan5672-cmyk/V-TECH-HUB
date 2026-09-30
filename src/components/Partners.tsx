import React, { useState } from 'react';
import { PARTNERS } from '../data';
import { ExternalLink, ShieldCheck, Sparkles, X, Layers, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Theme, Partner } from '../types';
import PartnerBrandLogo from './PartnerBrandLogo';

interface PartnersProps {
  theme: Theme;
}

export default function Partners({ theme }: PartnersProps) {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  // Duplicate list to create seamless infinite marquee loop
  const marqueeList = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="py-24 bg-neutral-50 dark:bg-[#090b0c] transition-colors relative overflow-hidden" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold tracking-tight ${
            theme === 'light' ? 'text-neutral-900' : 'text-neutral-50'
          }`}>
            Strategic Technology Partners
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
          }`}>
            V-TECH HUB collaborates with leading enterprise technology partners. Click any partner to view integration details.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Logo Marquee */}
      <div className="relative w-full overflow-hidden py-6 border-y border-neutral-200/80 dark:border-neutral-800/80 bg-white/50 dark:bg-[#0d1011]/50 backdrop-blur-sm">
        {/* Left & Right Gradient Fades for smooth aesthetic masking */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-neutral-50 dark:from-[#090b0c] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-neutral-50 dark:from-[#090b0c] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-6 sm:gap-8">
          {marqueeList.map((partner, index) => (
            <button
              key={`${partner.id}-${index}`}
              onClick={() => setSelectedPartner(partner)}
              className={`group relative flex-shrink-0 px-7 py-4 rounded-2xl border transition-all transform hover:-translate-y-1 hover:shadow-xl cursor-pointer flex items-center justify-center min-w-[210px] sm:min-w-[250px] h-[88px] ${
                theme === 'light'
                  ? 'bg-white border-neutral-200/90 hover:border-[#e31e24] hover:shadow-red-500/10'
                  : 'bg-[#121618] border-neutral-800 hover:border-[#e31e24] hover:shadow-red-500/20'
              }`}
              id={`partner-logo-btn-${partner.id}-${index}`}
            >
              {/* Partner Logo Component */}
              <PartnerBrandLogo name={partner.name} size="md" theme={theme} showText={true} />

              {/* Hover Badge Indicator */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#e31e24]" />
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center">
        <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
          💡 Click any partner logo to explore full integration details and joint tech capabilities
        </p>
      </div>

      {/* Partner Detail Overlay Modal */}
      <AnimatePresence>
        {selectedPartner && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className={`relative w-full max-w-2xl rounded-3xl border p-6 sm:p-8 shadow-2xl overflow-hidden ${
                theme === 'light'
                  ? 'bg-white border-neutral-200 text-neutral-900'
                  : 'bg-[#111517] border-neutral-800 text-neutral-100'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPartner(null)}
                className={`absolute top-5 right-5 p-2 rounded-full transition-colors cursor-pointer ${
                  theme === 'light' ? 'hover:bg-neutral-100 text-neutral-500' : 'hover:bg-neutral-800 text-neutral-400'
                }`}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pr-8">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-500/10 text-[#e31e24] border border-[#e31e24]/20">
                    {selectedPartner.category}
                  </span>
                  {selectedPartner.certifiedTier && (
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                      {selectedPartner.certifiedTier}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-black tracking-tight">
                  <PartnerBrandLogo name={selectedPartner.name} size="lg" theme={theme} />
                </h3>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  Partner Overview
                </h4>
                <p className={`text-sm leading-relaxed ${
                  theme === 'light' ? 'text-neutral-700' : 'text-neutral-300'
                }`}>
                  {selectedPartner.description}
                </p>
              </div>

              {/* Joint Technology Section */}
              {selectedPartner.jointTechnology && (
                <div className={`p-4 rounded-2xl border mb-6 ${
                  theme === 'light' ? 'bg-neutral-50 border-neutral-200' : 'bg-[#161a1c] border-neutral-800'
                }`}>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#e31e24] mb-2 uppercase tracking-wider font-mono">
                    <Cpu className="w-4 h-4" />
                    Joint V-TECH HUB Technology
                  </div>
                  <p className={`text-sm font-medium leading-relaxed ${
                    theme === 'light' ? 'text-neutral-800' : 'text-neutral-200'
                  }`}>
                    {selectedPartner.jointTechnology}
                  </p>
                </div>
              )}

              {/* Integration Tech Stack */}
              {selectedPartner.integrationStack && selectedPartner.integrationStack.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#e31e24]" />
                    Infrastructure &amp; Integrated Solutions
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPartner.integrationStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border ${
                          theme === 'light'
                            ? 'bg-white border-neutral-200 text-neutral-800 shadow-sm'
                            : 'bg-[#181d1f] border-neutral-800 text-neutral-200'
                        }`}
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#e31e24]" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-4">
                <a
                  href={selectedPartner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#e31e24] text-white text-xs font-bold hover:bg-red-700 transition-colors shadow-md shadow-red-500/20"
                >
                  Official Portal
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setSelectedPartner(null)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    theme === 'light'
                      ? 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                      : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200'
                  }`}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

