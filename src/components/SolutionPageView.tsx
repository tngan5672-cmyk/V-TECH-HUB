import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  AlertTriangle, 
  ArrowRight, 
  ArrowLeft, 
  Building2, 
  Stethoscope, 
  Briefcase, 
  Store, 
  DollarSign, 
  Zap, 
  Network, 
  Shield, 
  GraduationCap
} from 'lucide-react';
import { Theme } from '../types';
import { SolutionItem, getAllSolutionsList, findSolutionById } from '../data/solutionsCatalog';
import { Language, translations } from '../translations';
import PartnerBrandLogo from './PartnerBrandLogo';

interface SolutionPageViewProps {
  solution: SolutionItem;
  theme: Theme;
  lang?: Language;
  onBackToHome: () => void;
  onSelectSolution: (solution: SolutionItem) => void;
  onRequestConsultation: (solutionName?: string) => void;
}

export default function SolutionPageView({
  solution: initialSolution,
  theme,
  lang = 'EN',
  onBackToHome,
  onSelectSolution,
  onRequestConsultation
}: SolutionPageViewProps) {
  // Always resolve to the localized version of the solution
  const currentSolution = findSolutionById(initialSolution.id, lang) || initialSolution;
  const allSolutions = getAllSolutionsList(lang);
  const t = translations[lang];

  const getTargetIcon = (iconName: string) => {
    switch (iconName) {
      case 'bank':
        return <Building2 className="w-5 h-5 text-[#e31e24]" />;
      case 'hospital':
        return <Stethoscope className="w-5 h-5 text-[#e31e24]" />;
      case 'school':
        return <GraduationCap className="w-5 h-5 text-[#e31e24]" />;
      case 'retail':
        return <Store className="w-5 h-5 text-[#e31e24]" />;
      case 'dollar':
        return <DollarSign className="w-5 h-5 text-[#e31e24]" />;
      case 'telecom':
        return <Network className="w-5 h-5 text-[#e31e24]" />;
      case 'insurance':
        return <ShieldCheck className="w-5 h-5 text-[#e31e24]" />;
      case 'media':
        return <Zap className="w-5 h-5 text-[#e31e24]" />;
      case 'tech':
        return <Cpu className="w-5 h-5 text-[#e31e24]" />;
      case 'gov':
        return <Shield className="w-5 h-5 text-[#e31e24]" />;
      default:
        return <Briefcase className="w-5 h-5 text-[#e31e24]" />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'light' ? 'bg-[#fafafa] text-neutral-900' : 'bg-[#0a0d0e] text-neutral-100'
    }`} id="solution-page-container">

      {/* Top Sticky Navigation Sub-Bar */}
      <div className={`border-b sticky top-20 z-40 backdrop-blur-md transition-colors ${
        theme === 'light' ? 'bg-white/90 border-neutral-200' : 'bg-[#0c0f10]/90 border-neutral-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className={`flex items-center gap-2 text-xs sm:text-sm font-bold px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                theme === 'light'
                  ? 'bg-neutral-100 hover:bg-neutral-200 border-neutral-200 text-neutral-800'
                  : 'bg-neutral-800 hover:bg-neutral-700 border-neutral-700 text-neutral-200'
              }`}
              id="solution-back-btn"
            >
              <ArrowLeft className="w-4 h-4 text-[#e31e24]" />
              <span>{t.backToHome}</span>
            </button>

            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-neutral-400">
              <span>/</span>
              <span className="uppercase tracking-wider">{currentSolution.pillarLabel || (currentSolution.pillar === 'engineer' ? 'ENGINEER' : 'OPERATE')}</span>
              <span>/</span>
              <span className="text-[#e31e24] font-bold">{currentSolution.categoryLabel}</span>
            </div>
          </div>

          {/* Quick Solution Pill Switcher */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0 scrollbar-none">
            {allSolutions.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectSolution(item);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  item.id === currentSolution.id
                    ? 'bg-[#e31e24] text-white shadow-sm shadow-red-500/30'
                    : theme === 'light'
                    ? 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                    : 'bg-neutral-800/80 text-neutral-300 hover:bg-neutral-700'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16 lg:space-y-24">

        {/* 1. HERO SECTION: Title, Concept */}
        <section className="relative">
          {/* Subtle Ambient Red Glow */}
          <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {currentSolution.title}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl">
              {currentSolution.tagline}
            </p>

            {/* Concept Card */}
            <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
              theme === 'light' 
                ? 'bg-white border-neutral-200 shadow-sm' 
                : 'bg-neutral-900/90 border-neutral-800 shadow-lg'
            }`}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#e31e24]" />
                <h2 className="text-xs font-black uppercase tracking-widest text-[#e31e24]">
                  {t.solConceptOverview}
                </h2>
              </div>
              <p className="text-base sm:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200 font-normal">
                {currentSolution.concept}
              </p>
            </div>
          </div>
        </section>

        {/* 2. BUSINESS CHALLENGES SOLVED */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-xs font-black uppercase tracking-widest text-[#e31e24]">
              {t.solProblemsSolved}
            </h2>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              {lang === 'VI' ? 'Giải quyết triệt để rào cản vận hành doanh nghiệp' : 'Solving Mission-Critical Operational Bottlenecks'}
            </h3>
            <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400">
              {lang === 'VI' 
                ? 'Chuyển đổi từ xử lý thủ công, phân tán sang hệ thống tự động hóa chuẩn xác và an toàn tuyệt đối.' 
                : 'Transition from manual, error-prone workflows to autonomous, highly reliable infrastructure.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentSolution.problems.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all ${
                  theme === 'light'
                    ? 'bg-white border-neutral-200 shadow-sm'
                    : 'bg-neutral-900 border-neutral-800'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-5 h-5 text-[#e31e24]" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                      {item.problem}
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      <strong className="text-[#e31e24] font-semibold">{lang === 'VI' ? 'Hậu quả: ' : 'Impact: '}</strong>
                      {item.consequence}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. TARGET INDUSTRIES & USE CASES */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-xs font-black uppercase tracking-widest text-[#e31e24]">
              {t.solTargetIndustries}
            </h2>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              {lang === 'VI' ? 'Ai nên sử dụng giải pháp này?' : 'Who We Build This Solution For?'}
            </h3>
            <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400">
              {lang === 'VI'
                ? 'Thiết kế chuyên biệt theo đặc thù nghiệp vụ của từng phân khúc ngành nghề.'
                : 'Tailored specifically for distinct regulatory and operational workflows.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentSolution.targetAudiences.map((aud, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-2xl border transition-all hover:border-red-500/40 group ${
                  theme === 'light'
                    ? 'bg-white border-neutral-200 shadow-sm hover:shadow-md'
                    : 'bg-neutral-900 border-neutral-800 hover:bg-neutral-850'
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getTargetIcon(aud.iconName)}
                </div>
                <h4 className="text-base font-bold mb-2 text-neutral-900 dark:text-neutral-100 group-hover:text-[#e31e24] transition-colors">
                  {aud.title}
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {aud.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. CORE CAPABILITIES */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-xs font-black uppercase tracking-widest text-[#e31e24]">
              {t.solCoreFeatures}
            </h2>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              {lang === 'VI' ? 'Nền tảng công nghệ chuyên sâu & Bảo mật' : 'Deep Technical Modules & Architecture'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentSolution.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-2xl border ${
                  theme === 'light'
                    ? 'bg-white border-neutral-200 shadow-sm'
                    : 'bg-neutral-900 border-neutral-800'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#e31e24] text-white flex items-center justify-center font-black text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                    {feat.name}
                  </h4>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {feat.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. SERVICE PROVIDERS & ALLIANCE LOGOS (With Warm Rose / Red Glow Undertone as requested) */}
        <section className={`relative overflow-hidden rounded-3xl border p-8 sm:p-12 text-center space-y-8 ${
          theme === 'light'
            ? 'bg-gradient-to-b from-rose-50/70 via-red-50/40 to-white border-red-200/80 shadow-md'
            : 'bg-gradient-to-b from-red-950/20 via-neutral-900 to-neutral-950 border-red-900/40'
        }`}>
          {/* Subtle Bottom Rose Radial Glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-red-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-2 relative z-10">
            <span className="px-3.5 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-[#e31e24] text-white">
              {t.solServiceProviders}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-900 dark:text-white pt-2">
              {lang === 'VI' ? 'Phát triển & Bảo chứng bởi Liên minh V-Tech Hub' : 'Powered & Guaranteed by V-Tech Hub Alliance'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
              {lang === 'VI'
                ? 'Giải pháp được tích hợp đồng bộ giữa VNETWORK và các đơn vị đối tác công nghệ chuyên ngành hàng đầu.'
                : 'Directly supported with enterprise SLAs, dedicated engineers, and full technical warranties.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 relative z-10">
            {(currentSolution.providerLogos && currentSolution.providerLogos.length > 0
              ? currentSolution.providerLogos
              : ['VNETWORK']
            ).map((provider, idx) => (
              <div
                key={idx}
                className={`px-5 py-3 rounded-2xl border transition-transform hover:scale-105 shadow-sm flex items-center gap-2.5 ${
                  theme === 'light'
                    ? 'bg-white border-red-200/90 text-neutral-900 shadow-red-500/5'
                    : 'bg-neutral-900/90 border-red-900/60 text-white'
                }`}
              >
                <PartnerBrandLogo name={provider} size="md" theme={theme} showText={true} />
              </div>
            ))}
          </div>

          <div className="pt-4 relative z-10">
            <button
              onClick={() => onRequestConsultation(currentSolution.title)}
              className="px-8 py-4 bg-[#e31e24] text-white font-bold text-sm sm:text-base rounded-xl hover:bg-opacity-95 transition-all shadow-xl shadow-red-500/25 inline-flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>{lang === 'VI' ? 'Liên Hệ Tư Vấn Giải Pháp Này Ngay' : 'Contact Us for PoC & Architecture Sizing'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
