import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Users,
  ChevronRight, 
  X 
} from 'lucide-react';
import { Theme } from '../types';
import { Language } from '../translations';

interface MeetVTechHubMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: 'about-us' | 'leadership') => void;
  theme: Theme;
  lang?: Language;
}

export default function MeetVTechHubMegaMenu({
  isOpen,
  onClose,
  onSelectTab,
  theme,
  lang = 'EN',
}: MeetVTechHubMegaMenuProps) {
  if (!isOpen) return null;

  const isVI = lang === 'VI';

  const menuItems = [
    {
      id: 'about-us',
      title: isVI ? 'Về chúng tôi (About Us)' : 'About Us',
      icon: Sparkles,
      tab: 'about-us' as const,
    },
    {
      id: 'leadership',
      title: isVI ? 'Chuyên gia (Expert)' : 'Expert',
      icon: Users,
      tab: 'leadership' as const,
    },
  ];

  return (
    <AnimatePresence>
      <div className="absolute top-full left-0 right-0 z-40 w-full" id="meet-vtech-hub-mega-menu-wrapper">
        {/* Semi-transparent Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 top-20 bg-black/40 backdrop-blur-xs -z-10 cursor-pointer"
        />

        {/* Mega Menu Container */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="w-full bg-white dark:bg-[#111417] text-neutral-900 dark:text-neutral-100 border-b-2 border-[#e31e24] shadow-2xl shadow-neutral-900/15 transition-all"
          id="meet-vtech-hub-mega-menu-panel"
        >
          {/* Top accent gradient bar */}
          <div className="h-1 w-full bg-gradient-to-r from-[#e31e24] via-[#f43f5e] to-[#fb7185]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
            {/* Top Bar Header */}
            <div className="flex items-center justify-between pb-5 mb-6 border-b border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center gap-4">
                <span className="font-sans text-xl sm:text-2xl font-black tracking-tight text-[#e31e24] uppercase">
                  MEET V-TECH HUB
                </span>
              </div>

              <button
                onClick={onClose}
                className="flex items-center gap-1.5 text-xs font-bold text-neutral-500 hover:text-[#e31e24] uppercase tracking-wider px-3 py-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-neutral-800 border border-transparent hover:border-red-200 dark:hover:border-red-900/50 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
                <span>{isVI ? 'ĐÓNG' : 'CLOSE'}</span>
              </button>
            </div>

            {/* Các Mục To để nhấn vào (About Us & Leadership) */}
            <div className="relative rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 bg-[#fafafa] dark:bg-[#15191d] p-3 sm:p-4 shadow-sm hover:border-red-300 dark:hover:border-red-900/60 transition-colors">
              <div className="space-y-2">
                {menuItems.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSelectTab(item.tab);
                        onClose();
                      }}
                      className="group w-full text-left py-4 sm:py-5 px-4 sm:px-6 rounded-xl transition-all duration-150 hover:bg-white dark:hover:bg-neutral-800/80 hover:shadow-xs border border-transparent hover:border-red-200/80 dark:hover:border-neutral-700 cursor-pointer block"
                      id={`btn-meet-vtech-hub-${item.id}`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 min-w-0">
                          <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-red-100/70 dark:bg-red-950/50 border border-red-200/80 dark:border-red-900/50 flex items-center justify-center group-hover:bg-[#e31e24] transition-all shrink-0 text-[#e31e24] group-hover:text-white">
                            <IconComp className="w-5 h-5" />
                          </span>
                          <span className="font-sans text-base sm:text-lg font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-[#e31e24] leading-snug transition-colors block">
                            {item.title}
                          </span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-[#e31e24] group-hover:translate-x-0.5 transition-all shrink-0" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
