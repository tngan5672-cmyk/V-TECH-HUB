import React, { useState } from 'react';
import { SUCCESS_STORIES } from '../data';
import { Shield, Sparkles, CheckCircle, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Theme } from '../types';

interface SuccessStoriesProps {
  theme: Theme;
}

export default function SuccessStories({ theme }: SuccessStoriesProps) {
  const [fullImageModal, setFullImageModal] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white dark:bg-[#0c0f10] transition-colors" id="success-stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-16 max-w-3xl">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold tracking-tight ${
            theme === 'light' ? 'text-neutral-900' : 'text-neutral-50'
          }`}>
            Featured Enterprise Case Studies
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
          }`}>
            Discover how leading corporations and financial institutions trust V-TECH HUB infrastructure and security solutions.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SUCCESS_STORIES.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl border p-8 transition-all flex flex-col justify-between group hover:shadow-xl hover:border-[#e31e24]/40 ${
                theme === 'light'
                  ? 'bg-neutral-50 border-neutral-200/80'
                  : 'bg-[#111415] border-neutral-800'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#e31e24]/10 text-[#e31e24] flex items-center justify-center font-bold">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-extrabold ${
                        theme === 'light' ? 'text-neutral-900' : 'text-neutral-50'
                      }`}>
                        {story.clientName}
                      </h3>
                      <span className="text-xs text-neutral-500 font-mono">
                        {story.sector}
                      </span>
                    </div>
                  </div>
                </div>

                <p className={`text-sm italic leading-relaxed mb-6 ${
                  theme === 'light' ? 'text-neutral-700' : 'text-neutral-300'
                }`}>
                  "{story.quote}"
                </p>

                <p className={`text-xs leading-relaxed mb-6 ${
                  theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
                }`}>
                  {story.fullStory}
                </p>
              </div>

              <div>
                {story.imageUrl && (
                  <div 
                    onClick={() => setFullImageModal(story.imageUrl || null)}
                    className="mb-6 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 cursor-pointer group/img relative"
                  >
                    <img 
                      src={story.imageUrl} 
                      alt={story.clientName} 
                      className="w-full h-48 object-cover group-hover/img:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1">
                      Click to view full image
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-neutral-200/80 dark:border-neutral-800 flex items-center gap-2 text-xs font-bold text-[#e31e24]">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>{story.metrics}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {fullImageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setFullImageModal(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center">
              <img
                src={fullImageModal}
                alt="VPBank x V-Infra Signing Ceremony"
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />
              <button
                onClick={() => setFullImageModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
