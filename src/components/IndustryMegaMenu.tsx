import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Landmark, 
  ShieldCheck, 
  Factory, 
  Truck, 
  HeartPulse, 
  GraduationCap, 
  ShoppingBag, 
  Tv, 
  ChevronRight,
  X 
} from 'lucide-react';
import { INDUSTRY_MENU_ITEMS, IndustryMenuItem } from '../data/industryMenuData';
import { Theme } from '../types';
import { Language } from '../translations';

interface IndustryMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectIndustry: (industryId: string) => void;
  theme: Theme;
  lang?: Language;
}

export default function IndustryMegaMenu({
  isOpen,
  onClose,
  onSelectIndustry,
  theme,
  lang = 'EN',
}: IndustryMegaMenuProps) {
  if (!isOpen) return null;

  const isVI = lang === 'VI';

  const renderIcon = (iconName: IndustryMenuItem['iconName']) => {
    const iconClass = "w-4 h-4";
    switch (iconName) {
      case 'landmark':
        return <Landmark className={iconClass} />;
      case 'shield':
        return <ShieldCheck className={iconClass} />;
      case 'factory':
        return <Factory className={iconClass} />;
      case 'truck':
        return <Truck className={iconClass} />;
      case 'heart':
        return <HeartPulse className={iconClass} />;
      case 'graduation':
        return <GraduationCap className={iconClass} />;
      case 'shopping':
        return <ShoppingBag className={iconClass} />;
      case 'tv':
        return <Tv className={iconClass} />;
      default:
        return <Landmark className={iconClass} />;
    }
  };

  const group1Items = INDUSTRY_MENU_ITEMS.slice(0, 4);
  const group2Items = INDUSTRY_MENU_ITEMS.slice(4, 8);

  return (
    <AnimatePresence>
      <div className="absolute top-full left-0 right-0 z-40 w-full" id="industry-mega-menu-wrapper">
        {/* Semi-transparent Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 top-20 bg-black/40 backdrop-blur-xs -z-10 cursor-pointer"
        />

        {/* Industry Mega Menu Container */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="w-full bg-white text-neutral-900 border-b-2 border-[#e31e24] shadow-2xl shadow-neutral-900/15 transition-all"
          id="industry-mega-menu-panel"
        >
          {/* Top accent gradient bar */}
          <div className="h-1 w-full bg-gradient-to-r from-[#e31e24] via-[#f43f5e] to-[#fb7185]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
            {/* Top Bar Header */}
            <div className="flex items-center justify-between pb-5 mb-6 border-b border-neutral-200">
              <div className="flex items-center gap-4">
                <span className="font-sans text-xl sm:text-2xl font-black tracking-tight text-[#e31e24] uppercase">
                  {isVI ? 'DANH MỤC NGÀNH NGHỀ' : 'INDUSTRIES'}
                </span>
              </div>

              <button
                onClick={onClose}
                className="flex items-center gap-1.5 text-xs font-bold text-neutral-500 hover:text-[#e31e24] uppercase tracking-wider px-3 py-1.5 rounded-lg hover:bg-red-50 border border-transparent hover:border-red-200 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
                <span>{isVI ? 'ĐÓNG' : 'CLOSE'}</span>
              </button>
            </div>

            {/* Clean List Cards: 2 Columns styled identically to Solutions Mega Menu */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Group 1: Strategic & Public Sectors */}
              <div className="relative rounded-2xl border-2 border-neutral-200 bg-[#fafafa] p-6 sm:p-7 shadow-sm hover:border-red-300 transition-colors">
                <ul className="space-y-2">
                  {group1Items.map((item) => {
                    const title = isVI ? item.titleVI : item.titleEN;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => {
                            onSelectIndustry(item.id);
                            onClose();
                          }}
                          className="group w-full text-left py-2.5 px-3 -mx-1 rounded-xl transition-all duration-150 hover:bg-white hover:shadow-xs border border-transparent hover:border-red-200/80 cursor-pointer block"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <span className="w-8 h-8 rounded-lg bg-red-100/70 border border-red-200/80 flex items-center justify-center group-hover:bg-[#e31e24] transition-all shrink-0 text-[#e31e24] group-hover:text-white">
                                {renderIcon(item.iconName)}
                              </span>
                              <span className="font-sans text-[14px] sm:text-[15px] font-bold text-neutral-800 group-hover:text-[#e31e24] leading-snug transition-colors">
                                {title}
                              </span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-[#e31e24] group-hover:translate-x-0.5 transition-all shrink-0" />
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Group 2: Services, Digital Economy & Education */}
              <div className="relative rounded-2xl border-2 border-neutral-200 bg-[#fafafa] p-6 sm:p-7 shadow-sm hover:border-red-300 transition-colors">
                <ul className="space-y-2">
                  {group2Items.map((item) => {
                    const title = isVI ? item.titleVI : item.titleEN;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => {
                            onSelectIndustry(item.id);
                            onClose();
                          }}
                          className="group w-full text-left py-2.5 px-3 -mx-1 rounded-xl transition-all duration-150 hover:bg-white hover:shadow-xs border border-transparent hover:border-red-200/80 cursor-pointer block"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <span className="w-8 h-8 rounded-lg bg-red-100/70 border border-red-200/80 flex items-center justify-center group-hover:bg-[#e31e24] transition-all shrink-0 text-[#e31e24] group-hover:text-white">
                                {renderIcon(item.iconName)}
                              </span>
                              <span className="font-sans text-[14px] sm:text-[15px] font-bold text-neutral-800 group-hover:text-[#e31e24] leading-snug transition-colors">
                                {title}
                              </span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-[#e31e24] group-hover:translate-x-0.5 transition-all shrink-0" />
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
