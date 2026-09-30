import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Shield, 
  CheckCircle, 
  Sparkles, 
  PhoneCall, 
  Layers, 
  Eye, 
  Handshake, 
  ArrowLeft, 
  ArrowRight,
  Server,
  Zap,
  Lock,
  Award,
  Check,
  Cpu,
  Play,
  Volume2,
  Maximize2,
  Settings,
  MessageSquare,
  Cloud
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Theme, Solution } from '../types';
import { SOLUTIONS } from '../data';
import { Language, translations } from '../translations';
import { getLocalizedSolution } from '../utils/localizedData';
import IndustryAnimatedHeroBg from './IndustryAnimatedHeroBg';
import IndustryFAQAccordion from './IndustryFAQAccordion';
import IndustryExpertsModal from './IndustryExpertsModal';
import IndustryChallengesGrid from './IndustryChallengesGrid';

interface IndustrySolutionsProps {
  theme: Theme;
  lang: Language;
  selectedIndustryId?: string;
  onSelectIndustry?: (industryId: string) => void;
}

export default function IndustrySolutions({ theme, lang, selectedIndustryId, onSelectIndustry }: IndustrySolutionsProps) {
  const t = translations[lang];
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isExpertsModalOpen, setIsExpertsModalOpen] = useState(false);

  useEffect(() => {
    if (selectedIndustryId) {
      const idx = SOLUTIONS.findIndex((s) => s.id === selectedIndustryId);
      if (idx !== -1) {
        setCurrentIndex(idx);
      }
    }
  }, [selectedIndustryId]);

  // Lock background scroll when full-screen detail view is active
  useEffect(() => {
    if (selectedSolution) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedSolution(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedSolution]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SOLUTIONS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SOLUTIONS.length) % SOLUTIONS.length);
  };

  const activeSol = getLocalizedSolution(SOLUTIONS[currentIndex], lang);

  const scrollToContact = () => {
    setSelectedSolution(null);
    setTimeout(() => {
      const element = document.getElementById('contact-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className={`py-20 ${
      theme === 'light' ? 'bg-gradient-to-b from-red-50/30 via-white to-red-50/20' : 'bg-[#181a1b]'
    }`} id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold tracking-tight mb-4 ${
            theme === 'light' ? 'text-neutral-900' : 'text-neutral-50'
          }`}>
            {t.solutionsTitle}
          </h2>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${
            theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
          }`}>
            {t.solutionsSub}
          </p>
        </div>

        {/* Large Featured Slider Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Navigation Controls - Left Arrow */}
          <button
            onClick={handlePrev}
            className={`absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full shadow-xl border transition-all hover:scale-110 active:scale-95 cursor-pointer ${
              theme === 'light'
                ? 'bg-white text-neutral-800 border-neutral-200 hover:border-[#e31e24] hover:text-[#e31e24]'
                : 'bg-[#111415] text-white border-neutral-800 hover:border-[#e31e24] hover:text-[#e31e24]'
            }`}
            aria-label="Previous Industry"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Controls - Right Arrow */}
          <button
            onClick={handleNext}
            className={`absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full shadow-xl border transition-all hover:scale-110 active:scale-95 cursor-pointer ${
              theme === 'light'
                ? 'bg-white text-neutral-800 border-neutral-200 hover:border-[#e31e24] hover:text-[#e31e24]'
                : 'bg-[#111415] text-white border-neutral-800 hover:border-[#e31e24] hover:text-[#e31e24]'
            }`}
            aria-label="Next Industry"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Featured Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSol.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              onClick={() => {
                if (onSelectIndustry) {
                  onSelectIndustry(activeSol.id);
                } else {
                  setSelectedSolution(activeSol);
                }
              }}
              className={`group rounded-3xl overflow-hidden border shadow-xl transition-all duration-300 flex flex-col md:flex-row cursor-pointer ${
                theme === 'light'
                  ? 'bg-white border-neutral-200 hover:border-[#e31e24]'
                  : 'bg-[#111415] border-neutral-800 hover:border-[#e31e24]'
              }`}
            >
              {/* Image Section - Enlarged */}
              <div className="md:w-1/2 relative overflow-hidden min-h-[280px] sm:min-h-[360px] lg:min-h-[420px]">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={activeSol.imageUrl}
                  alt={activeSol.imageAlt}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                
                {/* Category Badge & Slide Count */}
                <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-white">
                  <span className="text-xs font-bold uppercase bg-[#e31e24] px-3 py-1 rounded-md tracking-wider shadow">
                    {activeSol.category}
                  </span>
                  <span className="text-xs font-mono font-bold bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                    {currentIndex + 1} / {SOLUTIONS.length}
                  </span>
                </div>
              </div>

              {/* Content Section - Enlarged */}
              <div className="md:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className={`text-2xl sm:text-3xl font-extrabold leading-tight group-hover:text-[#e31e24] transition-colors ${
                      theme === 'light' ? 'text-neutral-900' : 'text-neutral-50'
                    }`}>
                      {activeSol.title}
                    </h3>
                  </div>

                  <p className={`text-sm sm:text-base mb-6 leading-relaxed ${
                    theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
                  }`}>
                    {activeSol.description}
                  </p>

                  {/* Highlights Specs */}
                  <div className="space-y-3.5 border-t pt-5 border-neutral-100 dark:border-neutral-800 text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest text-[10px] block mb-0.5">{t.challengesLabel}</span>
                      <p className={`font-semibold ${theme === 'light' ? 'text-neutral-800' : 'text-neutral-200'}`}>
                        {activeSol.challenges}
                      </p>
                    </div>
                    <div>
                      <span className="font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest text-[10px] block mb-0.5">{t.solutionLabel}</span>
                      <p className="text-[#e31e24] font-bold">
                        {activeSol.solutionText}
                      </p>
                    </div>
                    <div>
                      <span className="font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest text-[10px] block mb-0.5">{t.outcomesLabel}</span>
                      <p className="font-semibold text-emerald-600 dark:text-emerald-400">
                        {activeSol.outcomes}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onSelectIndustry) {
                        onSelectIndustry(activeSol.id);
                      } else {
                        setSelectedSolution(activeSol);
                      }
                    }}
                    className="w-full py-3 px-5 rounded-xl bg-[#e31e24] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-red-500/20 transition-all cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    {t.viewDetailSuite}
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicator Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {SOLUTIONS.map((sol, idx) => (
              <button
                key={sol.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-3 rounded-full transition-all cursor-pointer ${
                  idx === currentIndex
                    ? 'w-10 bg-[#e31e24]'
                    : theme === 'light'
                      ? 'w-3 bg-neutral-300 hover:bg-neutral-400'
                      : 'w-3 bg-neutral-700 hover:bg-neutral-600'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* FULL-SCREEN IMMERSIVE SOLUTIONS DETAIL SHOWCASE */}
      <AnimatePresence>
        {selectedSolution && (() => {
          const activeModalSol = getLocalizedSolution(selectedSolution, lang);
          return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`fixed inset-0 z-50 overflow-y-auto w-full h-full min-h-screen flex flex-col ${
              theme === 'light' ? 'bg-[#f8fafc] text-neutral-900' : 'bg-[#0a0d0f] text-neutral-100'
            }`}
            id="full-screen-solution-detail"
          >
            {/* TOP STICKY GLASS NAVIGATION BAR */}
            <header className={`sticky top-0 z-40 w-full backdrop-blur-xl border-b transition-colors ${
              theme === 'light' 
                ? 'bg-white/95 border-neutral-200 shadow-xs' 
                : 'bg-[#0c0f10]/95 border-neutral-800 shadow-md'
            }`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
                
                {/* Left: Breadcrumbs & Back Action */}
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => setSelectedSolution(null)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                      theme === 'light'
                        ? 'bg-neutral-100 hover:bg-neutral-200/80 text-neutral-800 border-neutral-300'
                        : 'bg-neutral-800/80 hover:bg-neutral-700 text-white border-neutral-700'
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4 text-[#e31e24]" />
                    <span>{lang === 'VI' ? 'Quay lại' : 'Back'}</span>
                  </button>

                  <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-neutral-500">
                    <span>V-TECH HUB</span>
                    <span>/</span>
                    <span className="text-neutral-700 dark:text-neutral-300 font-bold">{t.solutionsTitle}</span>
                    <span>/</span>
                    <span className="text-[#e31e24] font-bold">{activeModalSol.category}</span>
                  </div>
                </div>

                {/* Center: Quick Industry Switcher Bar */}
                <div className="hidden xl:flex items-center gap-1.5 overflow-x-auto py-1 px-2 scrollbar-none">
                  {SOLUTIONS.map((s) => {
                    const loc = getLocalizedSolution(s, lang);
                    const isSelected = activeModalSol.id === s.id;
                    return (
                      <button
                        key={s.id}
                        onClick={() => setSelectedSolution(loc)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                          isSelected
                            ? 'bg-[#e31e24] text-white shadow-sm'
                            : theme === 'light'
                              ? 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                              : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'
                        }`}
                      >
                        {loc.title.split('(')[0].trim()}
                      </button>
                    );
                  })}
                </div>

                {/* Right: Consultation CTA + Close Window Button */}
                <div className="flex items-center gap-2.5 shrink-0">
                  <button
                    onClick={scrollToContact}
                    className="hidden sm:flex items-center gap-2 bg-[#e31e24] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-md shadow-red-500/20 transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>{lang === 'VI' ? 'Tư Vấn Chuyên Gia' : 'Speak to an Expert'}</span>
                  </button>

                  <button
                    onClick={() => setSelectedSolution(null)}
                    className={`p-2 sm:p-2.5 rounded-xl transition-all border cursor-pointer ${
                      theme === 'light'
                        ? 'bg-neutral-100 hover:bg-red-50 hover:text-[#e31e24] text-neutral-600 border-neutral-300'
                        : 'bg-neutral-800 hover:bg-red-950/40 hover:text-[#e31e24] text-neutral-300 border-neutral-700'
                    }`}
                    aria-label="Close full-screen view"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </header>

            {/* FULL-SCREEN MAIN CONTENT BODY */}
            <main className="flex-1 w-full pb-20">
              
              {/* 1. HERO SECTION WITH ANIMATED DYNAMIC INDUSTRY-SPECIFIC BACKGROUND */}
              <section className="relative w-full overflow-hidden bg-[#060a12] text-white py-16 sm:py-20 lg:py-24 border-b border-neutral-800">
                {/* Rich Dynamic Animated Background Tailored to Industry */}
                <IndustryAnimatedHeroBg 
                  solutionId={activeModalSol.id} 
                  imageUrl={activeModalSol.imageUrl} 
                  videoUrl={activeModalSol.videoUrl}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-4xl space-y-6">

                    {/* Hero Title */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                      {activeModalSol.title}
                    </h1>

                    {/* Hero Lead Narrative */}
                    <p className="text-base sm:text-lg text-neutral-200/90 leading-relaxed max-w-3xl">
                      {activeModalSol.description}
                    </p>

                    {/* Primary CTA (Single Box Button) */}
                    <div className="pt-3">
                      <button
                        onClick={() => setIsExpertsModalOpen(true)}
                        className="border border-white/80 hover:border-white text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-none sm:rounded-md transition-all flex items-center gap-2.5 hover:bg-white/10 active:scale-95 cursor-pointer shadow-sm"
                      >
                        <span>{lang === 'VI' ? 'TƯ VẤN CHUYÊN GIA' : 'TALK TO AN EXPERT'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* 2. MODERNISATION NARRATIVE & 4 STRATEGIC BOTTLENECKS SECTION */}
              <section className={`py-16 sm:py-24 border-b ${
                theme === 'light' ? 'bg-white border-neutral-200' : 'bg-[#0b0e11] border-neutral-800'
              }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                  
                  {/* Top Split: Presentation View (Left) + Modernisation Manifesto (Right) */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    
                    {/* Left: Presentation Visual Frame */}
                    <div className="lg:col-span-5">
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-700/60 group bg-neutral-900 aspect-[4/3]">
                        <img
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          src={activeModalSol.presentationImage || activeModalSol.imageUrl}
                          alt={`${activeModalSol.title} Architecture Presentation`}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = activeModalSol.imageUrl || 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop';
                          }}
                        />
                      </div>
                    </div>

                    {/* Right: Modernisation Narrative */}
                    <div className="lg:col-span-7 space-y-5">
                      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
                        theme === 'light' ? 'text-neutral-900' : 'text-white'
                      }`}>
                        {activeModalSol.transformationHeadline || 
                          (lang === 'VI' 
                            ? `Hiện đại hóa kiến trúc ${activeModalSol.category} mở ra kỷ nguyên bứt phá mới` 
                            : `Legacy system modernisation invites a world of new possibilities`)}
                      </h2>

                      <p className={`text-sm sm:text-base leading-relaxed ${
                        theme === 'light' ? 'text-neutral-600' : 'text-neutral-300'
                      }`}>
                        {activeModalSol.transformationStory || activeModalSol.challenges}
                      </p>

                      {/* Verified Architecture Metrics */}
                      <div className="pt-3 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold">
                        <div className="flex items-center gap-2 text-[#e31e24]">
                          <CheckCircle className="w-4 h-4 shrink-0" />
                          <span className={theme === 'light' ? 'text-neutral-800' : 'text-neutral-200'}>
                            <span className="text-[#e31e24] font-bold mr-1">
                              {lang === 'VI' ? 'Gói giải pháp tích hợp:' : 'Integrated Solution Package:'}
                            </span>
                            {activeModalSol.solutionText}
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Bottom: Strategic Bottlenecks / Transformation Pillars Grid */}
                  <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
                    <IndustryChallengesGrid
                      challenges={activeModalSol.fourKeyChallenges || [
                        {
                          title: lang === 'VI' ? 'Hệ thống cũ kìm hãm tốc độ' : 'Legacy systems are holding you back',
                          description: lang === 'VI' ? 'Kiến trúc nguyên khối làm tăng nợ kỹ thuật, giảm tốc độ phát triển và cản trở việc ra mắt tính năng mới.' : 'Outdated architectures limit agility, increase technical debt, and slow continuous innovation.'
                        },
                        {
                          title: lang === 'VI' ? 'Đổi mới cần hạ tầng hiện đại' : 'Innovation needs modern foundations',
                          description: lang === 'VI' ? 'Hiện đại hóa công nghệ mang lại nền tảng đám mây mở rộng, sẵn sàng cho AI và lưu trữ dữ liệu lớn.' : 'Technology modernisation delivers scalable platforms ready for cloud, AI, data, and market shifts.'
                        },
                        {
                          title: lang === 'VI' ? 'Ứng dụng AI cần nền tảng chuẩn hóa' : 'AI starts with modern platforms',
                          description: lang === 'VI' ? 'Triển khai AI thành công đòi hỏi hạ tầng hiện đại hóa, đường truyền độ trễ thấp và dữ liệu liên thông.' : 'Successful AI initiatives require modernised infrastructure, sub-second latency, and accessible data pipelines.'
                        },
                        {
                          title: lang === 'VI' ? 'Hạ tầng phân mảnh gia tăng rủi ro' : 'Complex systems increase risk',
                          description: lang === 'VI' ? 'Khi hệ thống lỗi thời và rời rạc, rủi ro an ninh mạng và chi phí vận hành sẽ liên tục leo thang.' : 'When your systems are outdated and fragmented, cyber risks multiply and operating costs keep climbing.'
                        }
                      ]}
                      theme={theme}
                      lang={lang}
                    />
                  </div>

                </div>
              </section>

              {/* 3. OUR IT & INFRASTRUCTURE MODERNISATION CAPABILITIES (3-COLUMN CARDS WITH EXPLORE MORE) */}
              <section className={`py-16 sm:py-24 border-b ${
                theme === 'light' ? 'bg-[#f8fafc] border-neutral-200' : 'bg-[#0e1114] border-neutral-800'
              }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                  
                  {/* Section Header */}
                  <div className="space-y-3">
                    <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
                      theme === 'light' ? 'text-neutral-900' : 'text-white'
                    }`}>
                      {activeModalSol.capabilitySectionTitle || 
                        (lang === 'VI' 
                          ? `Năng lực hiện đại hóa công nghệ cho ${activeModalSol.category}` 
                          : `Our ${activeModalSol.category} modernisation capabilities`)}
                    </h2>
                    <p className={`text-sm sm:text-base max-w-3xl ${
                      theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
                    }`}>
                      {lang === 'VI'
                        ? 'Bộ giải pháp đồng bộ kết hợp hạ tầng Cloud Sovereign, bảo mật Zero-Trust và DevSecOps được chứng thực bởi liên minh công nghệ V-Tech Hub.'
                        : 'Comprehensive suite uniting Sovereign Cloud infrastructure, Zero-Trust security, and DevSecOps validated by V-Tech Hub Alliance.'}
                    </p>
                  </div>

                  {/* Capability Cards Grid (Supports 3 or 4 columns) */}
                  {(() => {
                    const pillars = activeModalSol.capabilityPillars || [
                      {
                        title: lang === 'VI' ? 'Hiện đại hóa Ứng dụng & Lõi' : 'Application Modernisation',
                        description: lang === 'VI' ? 'Chuyển đổi các hệ thống cũ sang kiến trúc microservices và API Gateway linh hoạt, bảo mật cao.' : 'Transform ageing monolithic applications into modern, agile, and resilient scalable platforms.',
                        deliverables: ['Zero Trust API', 'Microservices', 'High-Availability']
                      },
                      {
                        title: lang === 'VI' ? 'Dịch chuyển Cloud & Sovereign Data' : 'Cloud Migration & Modernisation',
                        description: lang === 'VI' ? 'Di chuyển công nghệ lên hạ tầng đám mây đạt chuẩn Tier-3, tối ưu chi phí và đảm bảo Nghị định 13.' : 'Move your existing technology to the cloud to reduce operational overheads, improve performance and create room for innovation.',
                        deliverables: ['Tier-3 Multi-DC', 'Decree 13 Compliant', '99.999% SLA']
                      },
                      {
                        title: lang === 'VI' ? 'Kỹ thuật Cloud, DevSecOps & AI' : 'Cloud Engineering and DevOps',
                        description: lang === 'VI' ? 'Tăng tốc phát triển sản phẩm với quy trình CI/CD tự động, AI giám sát bất thường và bảo mật SOC 24/7.' : 'Deliver high-quality applications fast by embracing automated DevSecOps and proactive AI telemetry.',
                        deliverables: ['Automated CI/CD', 'Real-time AI Telemetry', '24/7 Dedicated SOC']
                      }
                    ];

                    const isFourCol = pillars.length >= 4;

                    return (
                      <div className={`grid grid-cols-1 ${isFourCol ? 'sm:grid-cols-2 lg:grid-cols-4 gap-6' : 'md:grid-cols-3 gap-8'}`}>
                        {pillars.map((pillar, idx) => {
                          const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
                            server: Server,
                            shield: Shield,
                            lock: Lock,
                            sparkles: Sparkles,
                            cloud: Cloud,
                          };
                          const iconPills = [Server, Sparkles, Lock, Shield, Cloud];
                          const IconComp = (pillar.iconName && iconMap[pillar.iconName]) || iconPills[idx % iconPills.length];

                          return (
                            <motion.div
                              key={idx}
                              whileHover={{ y: -6 }}
                              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between shadow-xs ${
                                theme === 'light'
                                  ? 'bg-white border-neutral-200 hover:border-[#e31e24] hover:shadow-xl'
                                  : 'bg-[#14181b] border-neutral-800 hover:border-[#e31e24] hover:shadow-xl'
                              }`}
                            >
                              <div className="space-y-4">
                                {/* Specialized Dual-color Icon */}
                                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-[#e31e24]/30 text-[#e31e24] flex items-center justify-center">
                                  <IconComp className="w-6 h-6" />
                                </div>

                                {/* Capability Title */}
                                <h3 className={`text-lg sm:text-xl font-extrabold leading-snug ${
                                  theme === 'light' ? 'text-[#881337]' : 'text-red-400'
                                }`}>
                                  {pillar.title}
                                </h3>

                                {/* Capability Description */}
                                <p className={`text-xs sm:text-sm leading-relaxed ${
                                  theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
                                }`}>
                                  {pillar.description}
                                </p>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    );
                  })()}

                </div>
              </section>

              {/* 3.5 WHY CHOOSE SECTION (when defined) */}
              {activeModalSol.whyChooseItems && activeModalSol.whyChooseItems.length > 0 && (
                <section className={`py-16 sm:py-24 border-b ${
                  theme === 'light' ? 'bg-[#f8fafc] border-neutral-200' : 'bg-[#0e1114] border-neutral-800'
                }`}>
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div className="space-y-3">
                      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
                        theme === 'light' ? 'text-neutral-900' : 'text-white'
                      }`}>
                        {activeModalSol.whyChooseTitle || (lang === 'VI' ? `Tại sao chọn V-TECH HUB cho ${activeModalSol.category}?` : `Why Choose V-TECH HUB for ${activeModalSol.category}?`)}
                      </h2>
                      {activeModalSol.whyChooseSubtitle && (
                        <p className={`text-sm sm:text-base max-w-3xl ${
                          theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
                        }`}>
                          {activeModalSol.whyChooseSubtitle}
                        </p>
                      )}
                    </div>

                    <div className={activeModalSol.whyChooseItems.length === 3 ? "grid grid-cols-1 md:grid-cols-3 gap-6" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"}>
                      {activeModalSol.whyChooseItems.map((item, idx) => {
                        const titleLower = item.title.toLowerCase();
                        let WhyIcon = CheckCircle;
                        if (titleLower.includes('data') || titleLower.includes('trust') || titleLower.includes('dữ liệu') || titleLower.includes('niềm tin')) {
                          WhyIcon = Shield;
                        } else if (titleLower.includes('compliance') || titleLower.includes('tuân thủ') || titleLower.includes('luật') || titleLower.includes('audit')) {
                          WhyIcon = Award;
                        } else if (titleLower.includes('cost') || titleLower.includes('optimize') || titleLower.includes('operation') || titleLower.includes('chi phí') || titleLower.includes('tối ưu')) {
                          WhyIcon = Zap;
                        }

                        return (
                          <motion.div
                            key={idx}
                            whileHover={{ y: -6 }}
                            className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between shadow-xs ${
                              theme === 'light'
                                ? 'bg-white border-neutral-200 hover:border-[#e31e24] hover:shadow-xl'
                                : 'bg-[#14181b] border-neutral-800 hover:border-[#e31e24] hover:shadow-xl'
                            }`}
                          >
                            <div className="space-y-4">
                              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-[#e31e24]/30 text-[#e31e24] flex items-center justify-center">
                                <WhyIcon className="w-6 h-6" />
                              </div>

                              <h3 className={`text-lg sm:text-xl font-extrabold leading-snug ${
                                theme === 'light' ? 'text-[#881337]' : 'text-red-400'
                              }`}>
                                {item.title}
                              </h3>

                              <p className={`text-xs sm:text-sm leading-relaxed ${
                                theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
                              }`}>
                                {item.description}
                              </p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </section>
              )}

              {/* FREQUENTLY ASKED QUESTIONS SECTION */}
              {activeModalSol.faqs && activeModalSol.faqs.length > 0 && (
                <IndustryFAQAccordion
                  faqs={activeModalSol.faqs}
                  theme={theme}
                  lang={lang}
                />
              )}

              {/* 4. DEDICATED SEPARATE PoC SECTION */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
                <div className="rounded-2xl sm:rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#e31e24] via-red-600 to-red-700 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                    <Sparkles className="w-48 h-48" />
                  </div>

                  <div className="relative z-10 space-y-3.5 max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-black tracking-wider uppercase backdrop-blur-sm">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{lang === 'VI' ? 'CHƯƠNG TRÌNH THỬ NGHIỆM' : 'PROOF OF CONCEPT'}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                      {lang === 'VI' ? 'Cần Môi Trường Thử Nghiệm PoC?' : 'Need a Dedicated PoC Test Environment?'}
                    </h3>

                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                      {lang === 'VI' 
                        ? 'Đội ngũ chuyên gia kiến trúc V-TECH HUB sẵn sàng thiết lập môi trường thử nghiệm (PoC) tùy biến, kiểm thử tải và bảo mật cho doanh nghiệp của bạn trong vòng 14 ngày.' 
                        : 'V-TECH HUB technical architects can deploy a custom Proof-of-Concept (PoC) environment, load test, and security audit for your enterprise within 14 business days.'}
                    </p>
                  </div>

                  <div className="relative z-10 shrink-0 w-full md:w-auto">
                    <button
                      onClick={scrollToContact}
                      className="w-full md:w-auto bg-white text-[#e31e24] hover:bg-neutral-100 font-extrabold text-xs sm:text-sm uppercase py-4 px-8 rounded-xl transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
                    >
                      <span>{lang === 'VI' ? 'Đăng ký Thử nghiệm PoC →' : 'Request PoC Sandbox →'}</span>
                    </button>
                  </div>
                </div>
              </section>

            </main>
          </motion.div>
          );
        })()}
      </AnimatePresence>

      {/* Industry Experts Profile Modal */}
      {selectedSolution && (
        <IndustryExpertsModal
          isOpen={isExpertsModalOpen}
          onClose={() => setIsExpertsModalOpen(false)}
          industryId={selectedSolution.id}
          industryTitle={getLocalizedSolution(selectedSolution, lang).title}
          theme={theme}
          lang={lang}
          onBookExpert={(expertName) => {
            setIsExpertsModalOpen(false);
            setSelectedSolution(null);
            scrollToContact();
          }}
        />
      )}
    </section>
  );
}


