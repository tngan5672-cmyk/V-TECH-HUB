import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Globe, ChevronDown, Sparkles, Briefcase, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Theme } from '../types';
import SolutionsMegaMenu from './SolutionsMegaMenu';
import IndustryMegaMenu from './IndustryMegaMenu';
import MeetVTechHubMegaMenu from './MeetVTechHubMegaMenu';
import { SolutionItem, getSolutionsCatalog } from '../data/solutionsCatalog';
import { INDUSTRY_MENU_ITEMS } from '../data/industryMenuData';

interface HeaderProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  onBecomePartnerClick: () => void;
  onSelectSolution: (solution: SolutionItem) => void;
  onSelectIndustry?: (industryId: string) => void;
  onNavigateMeetVTechHub?: (tab?: 'about-us' | 'leadership') => void;
  lang?: 'EN' | 'VI';
  setLang?: (lang: 'EN' | 'VI') => void;
}

export default function Header({
  theme,
  setTheme,
  activeSection,
  setActiveSection,
  onBecomePartnerClick,
  onSelectSolution,
  onSelectIndustry,
  onNavigateMeetVTechHub,
  lang: externalLang,
  setLang: externalSetLang,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);
  const [mobileMeetHubOpen, setMobileMeetHubOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [industryMenuOpen, setIndustryMenuOpen] = useState(false);
  const [meetHubMenuOpen, setMeetHubMenuOpen] = useState(false);
  const [internalLang, setInternalLang] = useState<'EN' | 'VI'>('EN');

  const currentLang = externalLang ?? internalLang;
  const currentCatalog = getSolutionsCatalog(currentLang);
  const isVI = currentLang === 'VI';

  const toggleLang = () => {
    const nextLang = currentLang === 'EN' ? 'VI' : 'EN';
    if (externalSetLang) {
      externalSetLang(nextLang);
    } else {
      setInternalLang(nextLang);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleIndustrySelect = (industryId: string) => {
    setIndustryMenuOpen(false);
    setMobileMenuOpen(false);
    if (onSelectIndustry) {
      onSelectIndustry(industryId);
    } else {
      setActiveSection('solutions');
      const el = document.getElementById('solutions');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50">
      <nav className={`border-b backdrop-blur-md transition-all duration-300 relative ${
        theme === 'light' 
          ? 'bg-white/95 border-neutral-200 text-neutral-900' 
          : 'bg-[#0c0f10]/95 border-neutral-800 text-neutral-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={() => {
              setMegaMenuOpen(false);
              setIndustryMenuOpen(false);
              setActiveSection('solutions');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            className="flex items-center gap-2 cursor-pointer"
            id="nav-logo"
          >
            <span className="font-sans text-2xl sm:text-[26px] font-black tracking-tighter text-[#e31e24]">
              V-TECH
            </span>
            <span className={`font-sans text-2xl sm:text-[26px] font-black tracking-tighter uppercase ${
              theme === 'light' ? 'text-black' : 'text-white'
            }`}>
              HUB
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 h-full">
            {/* Mega Menu Toggle Button for Solutions (Pillars) */}
            <div className="relative h-full flex items-center">
              <button
                onClick={() => {
                  setIndustryMenuOpen(false);
                  setMeetHubMenuOpen(false);
                  setMegaMenuOpen(!megaMenuOpen);
                }}
                className={`font-sans text-sm font-bold flex items-center gap-1.5 transition-colors relative py-2 px-3 rounded-lg hover:text-[#e31e24] cursor-pointer ${
                  megaMenuOpen
                    ? 'text-[#e31e24] bg-red-500/10'
                    : 'text-neutral-700 dark:text-neutral-200'
                }`}
                id="nav-solutions-mega-trigger"
                aria-expanded={megaMenuOpen}
              >
                <span>{isVI ? 'Giải pháp' : 'Solutions'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-[#e31e24]' : ''}`} />
              </button>
            </div>

            {/* Dropdown Toggle Button for Industry Solutions */}
            <div className="relative h-full flex items-center">
              <button
                onClick={() => {
                  setMegaMenuOpen(false);
                  setMeetHubMenuOpen(false);
                  setIndustryMenuOpen(!industryMenuOpen);
                }}
                className={`font-sans text-sm font-bold flex items-center gap-1.5 transition-colors relative py-2 px-3 rounded-lg hover:text-[#e31e24] cursor-pointer ${
                  industryMenuOpen
                    ? 'text-[#e31e24] bg-red-500/10'
                    : (activeSection === 'solutions' || activeSection === 'solutions-detail') && !megaMenuOpen
                      ? 'text-[#e31e24]'
                      : 'text-neutral-700 dark:text-neutral-200'
                }`}
                id="nav-industry-mega-trigger"
                aria-expanded={industryMenuOpen}
              >
                <span>{isVI ? 'Ngành' : 'Industry'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${industryMenuOpen ? 'rotate-180 text-[#e31e24]' : ''}`} />
              </button>
              {(activeSection === 'solutions' || activeSection === 'solutions-detail') && !megaMenuOpen && !industryMenuOpen && !meetHubMenuOpen && (
                <motion.div
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e31e24]"
                />
              )}
            </div>

            {/* Mega Menu Toggle Button for Meet V-Tech Hub */}
            <div className="relative h-full flex items-center">
              <button
                onClick={() => {
                  setMegaMenuOpen(false);
                  setIndustryMenuOpen(false);
                  setMeetHubMenuOpen(!meetHubMenuOpen);
                }}
                className={`font-sans text-sm font-bold flex items-center gap-1.5 transition-colors relative py-2 px-3 rounded-lg hover:text-[#e31e24] cursor-pointer ${
                  meetHubMenuOpen || (activeSection === 'meet-vtech-hub' && !megaMenuOpen && !industryMenuOpen)
                    ? 'text-[#e31e24] bg-red-500/10'
                    : 'text-neutral-700 dark:text-neutral-200'
                }`}
                id="nav-meet-vtech-hub-trigger"
                aria-expanded={meetHubMenuOpen}
              >
                <span>Meet V-Tech Hub</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${meetHubMenuOpen ? 'rotate-180 text-[#e31e24]' : ''}`} />
              </button>
              {activeSection === 'meet-vtech-hub' && !megaMenuOpen && !industryMenuOpen && (
                <motion.div
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e31e24]"
                />
              )}
            </div>
          </div>

          {/* Right CTA Area */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer hover:border-red-500/50 ${
                theme === 'light'
                  ? 'bg-neutral-100 border-neutral-200 text-neutral-800 hover:bg-neutral-200'
                  : 'bg-neutral-800 border-neutral-700 text-neutral-200 hover:bg-neutral-700'
              }`}
              title={currentLang === 'EN' ? 'Chuyển sang Tiếng Việt' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5 text-[#e31e24]" />
              <span className={currentLang === 'EN' ? 'text-[#e31e24] font-black' : 'opacity-60'}>EN</span>
              <span className="opacity-30">|</span>
              <span className={currentLang === 'VI' ? 'text-[#e31e24] font-black' : 'opacity-60'}>VI</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                theme === 'light'
                  ? 'bg-neutral-100 border-neutral-200 text-neutral-700 hover:bg-neutral-200'
                  : 'bg-neutral-800 border-neutral-700 text-neutral-200 hover:bg-neutral-700'
              }`}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <button
              onClick={() => {
                setMegaMenuOpen(false);
                setIndustryMenuOpen(false);
                onBecomePartnerClick();
              }}
              className="px-5 py-2.5 bg-[#e31e24] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-opacity-90 transition-all shadow-md shadow-red-500/20 active:scale-95 cursor-pointer"
            >
              {isVI ? 'Yêu cầu tư vấn' : 'Request Consultation'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2.5">
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLang}
              className={`px-2.5 py-1.5 rounded-lg border text-xs font-bold flex items-center gap-1 ${
                theme === 'light'
                  ? 'bg-neutral-100 border-neutral-200 text-neutral-800'
                  : 'bg-neutral-800 border-neutral-700 text-neutral-200'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-[#e31e24]" />
              <span className="text-[#e31e24] font-black text-[11px]">{currentLang}</span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border text-neutral-600 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Solutions Mega Menu Dropdown */}
        <SolutionsMegaMenu
          isOpen={megaMenuOpen}
          onClose={() => setMegaMenuOpen(false)}
          onSelectSolution={(sol) => {
            setMegaMenuOpen(false);
            onSelectSolution(sol);
          }}
          theme={theme}
          lang={currentLang}
        />

        {/* Industry Solutions Mega Menu Dropdown */}
        <IndustryMegaMenu
          isOpen={industryMenuOpen}
          onClose={() => setIndustryMenuOpen(false)}
          onSelectIndustry={handleIndustrySelect}
          theme={theme}
          lang={currentLang}
        />

        {/* Meet V-Tech Hub Mega Menu Dropdown */}
        <MeetVTechHubMegaMenu
          isOpen={meetHubMenuOpen}
          onClose={() => setMeetHubMenuOpen(false)}
          onSelectTab={(tab) => {
            setMeetHubMenuOpen(false);
            if (onNavigateMeetVTechHub) {
              onNavigateMeetVTechHub(tab);
            } else {
              setActiveSection('meet-vtech-hub');
            }
          }}
          theme={theme}
          lang={currentLang}
        />

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-b p-6 space-y-4 max-h-[85vh] overflow-y-auto ${
            theme === 'light' ? 'bg-white border-neutral-200' : 'bg-[#0c0f10] border-neutral-800'
          }`}>
            {/* Mobile Solutions (Architecture) Collapsible */}
            <div className="border-b border-neutral-200 dark:border-neutral-800 pb-3">
              <button
                onClick={() => {
                  setMobileSolutionsOpen(!mobileSolutionsOpen);
                  setMobileIndustryOpen(false);
                }}
                className="flex items-center justify-between w-full font-black text-base py-2 text-left text-neutral-900 dark:text-white cursor-pointer"
              >
                <span className="text-[#e31e24]">{isVI ? 'KIẾN TRÚC GIẢI PHÁP' : 'SOLUTIONS ARCHITECTURE'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileSolutionsOpen && (
                <div className="mt-3 space-y-4 pl-2">
                  {currentCatalog.map((cat) => (
                    <div key={cat.id} className="space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                        {cat.title}
                      </div>
                      <div className="space-y-1.5 pl-2">
                        {cat.items.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              onSelectSolution(item);
                            }}
                            className="block w-full text-left py-1.5 text-xs text-neutral-800 dark:text-neutral-200 hover:text-[#e31e24] cursor-pointer font-bold"
                          >
                            {item.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Industry Solutions Collapsible with all 8 industries */}
            <div className="border-b border-neutral-200 dark:border-neutral-800 pb-3">
              <button
                onClick={() => {
                  setMobileIndustryOpen(!mobileIndustryOpen);
                  setMobileSolutionsOpen(false);
                }}
                className="flex items-center justify-between w-full font-black text-base py-2 text-left text-neutral-900 dark:text-white cursor-pointer"
              >
                <span className="text-[#e31e24]">{isVI ? 'NGÀNH' : 'INDUSTRY'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileIndustryOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileIndustryOpen && (
                <div className="mt-3 space-y-2 pl-2">
                  {INDUSTRY_MENU_ITEMS.map((item) => {
                    const title = isVI ? item.titleVI : item.titleEN;
                    const tag = isVI ? item.tagVI : item.tagEN;

                    return (
                      <button
                        key={item.id}
                        onClick={() => handleIndustrySelect(item.id)}
                        className="w-full text-left py-2 px-2.5 rounded-lg hover:bg-red-50 dark:hover:bg-neutral-800 group transition-colors flex items-center justify-between cursor-pointer"
                      >
                        <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-[#e31e24]">
                          {title}
                        </span>
                        <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 group-hover:bg-red-100 group-hover:text-[#e31e24]">
                          {tag}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Mobile Meet V-Tech Hub Section */}
            <div className="border-b border-neutral-200 dark:border-neutral-800 pb-3 space-y-1">
              <div className="text-xs font-black uppercase tracking-wider text-[#e31e24] px-1 py-1">
                MEET V-TECH HUB
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigateMeetVTechHub) {
                    onNavigateMeetVTechHub('about-us');
                  } else {
                    setActiveSection('meet-vtech-hub');
                  }
                }}
                className="flex items-center justify-between w-full font-bold text-sm py-2 px-2.5 rounded-lg hover:bg-red-50 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-[#e31e24] cursor-pointer"
              >
                <span>{isVI ? 'Về chúng tôi (About Us)' : 'About Us'}</span>
                <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-[#e31e24]" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigateMeetVTechHub) {
                    onNavigateMeetVTechHub('leadership');
                  } else {
                    setActiveSection('meet-vtech-hub');
                  }
                }}
                className="flex items-center justify-between w-full font-bold text-sm py-2 px-2.5 rounded-lg hover:bg-red-50 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-[#e31e24] cursor-pointer"
              >
                <span>{isVI ? 'Chuyên gia (Expert)' : 'Expert'}</span>
                <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-[#e31e24]" />
              </button>
            </div>

            {/* Consultation Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBecomePartnerClick();
              }}
              className="w-full py-3 bg-[#e31e24] text-white font-bold text-sm rounded-xl uppercase tracking-wider cursor-pointer"
            >
              {isVI ? 'Yêu cầu tư vấn' : 'Request Consultation'}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

