import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  CheckCircle, 
  Shield, 
  Layers, 
  Sparkles, 
  PhoneCall, 
  Handshake, 
  ArrowRight, 
  Check, 
  Building,
  Award,
  Zap,
  Server,
  Lock,
  Play,
  Volume2,
  Maximize2,
  Settings,
  MessageSquare,
  Cloud
} from 'lucide-react';
import { motion } from 'motion/react';
import { Theme, Solution } from '../types';
import { SOLUTIONS } from '../data';
import { Language, translations } from '../translations';
import { getLocalizedSolution } from '../utils/localizedData';
import IndustryAnimatedHeroBg from './IndustryAnimatedHeroBg';
import IndustryFAQAccordion from './IndustryFAQAccordion';
import IndustryExpertsModal from './IndustryExpertsModal';
import IndustryChallengesGrid from './IndustryChallengesGrid';

interface IndustryDetailViewProps {
  theme: Theme;
  lang: Language;
  initialIndustryId?: string;
  onBackToHome: () => void;
  onRequestConsultation: () => void;
}

export default function IndustryDetailView({ 
  theme, 
  lang, 
  initialIndustryId,
  onBackToHome, 
  onRequestConsultation 
}: IndustryDetailViewProps) {
  const t = translations[lang];
  const [activeSolutionId, setActiveSolutionId] = useState<string>(initialIndustryId || SOLUTIONS[0].id);
  const [isExpertsModalOpen, setIsExpertsModalOpen] = useState(false);

  useEffect(() => {
    if (initialIndustryId) {
      setActiveSolutionId(initialIndustryId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [initialIndustryId]);

  const rawSolution = SOLUTIONS.find((s) => s.id === activeSolutionId) || SOLUTIONS[0];
  const activeSolution = getLocalizedSolution(rawSolution, lang);

  return (
    <div className={`transition-colors min-h-screen ${
      theme === 'light' ? 'bg-[#f8fafc] text-neutral-900' : 'bg-[#0a0d0f] text-neutral-100'
    }`} id="industry-detail-view">
      
      {/* Top Header Breadcrumbs & Switcher */}
      <div className={`sticky top-0 z-30 border-b backdrop-blur-md transition-colors ${
        theme === 'light' ? 'bg-white/90 border-neutral-200' : 'bg-[#0c0f10]/90 border-neutral-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button 
              onClick={onBackToHome}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                theme === 'light'
                  ? 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border-neutral-300'
                  : 'bg-neutral-800 hover:bg-neutral-700 text-white border-neutral-700'
              }`}
            >
              <ArrowLeft className="w-4 h-4 text-[#e31e24]" /> 
              <span>{lang === 'VI' ? 'Quay lại' : 'Back'}</span>
            </button>
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-neutral-500">
              <span>V-TECH HUB</span>
              <span>/</span>
              <span>{t.solutionsTitle}</span>
              <span>/</span>
              <span className="text-[#e31e24] font-bold">{activeSolution.category}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
            {SOLUTIONS.map((sol) => {
              const loc = getLocalizedSolution(sol, lang);
              const isSelected = activeSolutionId === sol.id;
              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveSolutionId(sol.id)}
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
        </div>
      </div>

      {/* 1. HERO SECTION WITH ANIMATED DYNAMIC INDUSTRY-SPECIFIC BACKGROUND */}
      <section className="relative w-full overflow-hidden bg-[#060a12] text-white py-16 sm:py-20 lg:py-24 border-b border-neutral-800">
        {/* Rich Dynamic Animated Background Tailored to Industry */}
        <IndustryAnimatedHeroBg 
          solutionId={activeSolution.id} 
          imageUrl={activeSolution.imageUrl} 
          videoUrl={activeSolution.videoUrl}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">

            {/* Hero Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              {activeSolution.title}
            </h1>

            {/* Hero Lead Narrative */}
            <p className="text-base sm:text-lg text-neutral-200/90 leading-relaxed max-w-3xl">
              {activeSolution.description}
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
          
          {/* Top Split: Executive Keynote Presentation View (Left) + Modernisation Manifesto (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: High-Impact Visual Frame with Live Status Badges */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-700/60 group bg-neutral-900 aspect-[4/3]">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={activeSolution.presentationImage || activeSolution.imageUrl}
                  alt="Modernisation Architecture Presentation"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop';
                  }}
                />
              </div>
            </div>

            {/* Right: Section Header & Core Transformation Manifesto */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
                theme === 'light' ? 'text-neutral-900' : 'text-white'
              }`}>
                {activeSolution.transformationHeadline || 
                  (lang === 'VI' 
                    ? `Hiện đại hóa kiến trúc ${activeSolution.category} mở ra kỷ nguyên bứt phá mới` 
                    : `Legacy system modernisation invites a world of new possibilities`)}
              </h2>

              <p className={`text-sm sm:text-base leading-relaxed ${
                theme === 'light' ? 'text-neutral-600' : 'text-neutral-300'
              }`}>
                {activeSolution.transformationStory || activeSolution.challenges}
              </p>

              {/* Verified Architecture Metrics */}
              <div className="pt-3 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold">
                <div className="flex items-center gap-2 text-[#e31e24]">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span className={theme === 'light' ? 'text-neutral-800' : 'text-neutral-200'}>
                    <span className="text-[#e31e24] font-bold mr-1">
                      {lang === 'VI' ? 'Gói giải pháp tích hợp:' : 'Integrated Solution Package:'}
                    </span>
                    {activeSolution.solutionText}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom: Strategic Bottlenecks / Transformation Pillars Grid */}
          <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
            <IndustryChallengesGrid
              challenges={activeSolution.fourKeyChallenges || [
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
              {activeSolution.capabilitySectionTitle || 
                (lang === 'VI' 
                  ? `Năng lực hiện đại hóa công nghệ cho ${activeSolution.category}` 
                  : `Our ${activeSolution.category} modernisation capabilities`)}
            </h2>
            <p className={`text-sm sm:text-base max-w-3xl ${
              theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
            }`}>
              {activeSolution.capabilitySubtitle || (lang === 'VI'
                ? 'Bộ giải pháp đồng bộ kết hợp hạ tầng Cloud Sovereign, bảo mật Zero-Trust và DevSecOps được chứng thực bởi liên minh công nghệ V-Tech Hub.'
                : 'Comprehensive suite uniting Sovereign Cloud infrastructure, Zero-Trust security, and DevSecOps validated by V-Tech Hub Alliance.')}
            </p>
          </div>

          {/* Capability Cards Grid (Supports 3 or 4 columns) */}
          {(() => {
            const pillars = activeSolution.capabilityPillars || [
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

                        {/* Capability Title (Deep Dark Red / High Contrast Title) */}
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
      {activeSolution.whyChooseItems && activeSolution.whyChooseItems.length > 0 && (
        <section className={`py-16 sm:py-24 border-b ${
          theme === 'light' ? 'bg-[#f8fafc] border-neutral-200' : 'bg-[#0e1114] border-neutral-800'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="space-y-3">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
                theme === 'light' ? 'text-neutral-900' : 'text-white'
              }`}>
                {activeSolution.whyChooseTitle || (lang === 'VI' ? `Tại sao chọn V-TECH HUB cho ${activeSolution.category}?` : `Why Choose V-TECH HUB for ${activeSolution.category}?`)}
              </h2>
              {activeSolution.whyChooseSubtitle && (
                <p className={`text-sm sm:text-base max-w-3xl ${
                  theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
                }`}>
                  {activeSolution.whyChooseSubtitle}
                </p>
              )}
            </div>

            <div className={activeSolution.whyChooseItems.length === 3 ? "grid grid-cols-1 md:grid-cols-3 gap-6" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"}>
              {activeSolution.whyChooseItems.map((item, idx) => {
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
      {activeSolution.faqs && activeSolution.faqs.length > 0 && (
        <IndustryFAQAccordion
          faqs={activeSolution.faqs}
          theme={theme}
          lang={lang}
        />
      )}

      {/* 4. DEDICATED SEPARATE PoC SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
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
              onClick={onRequestConsultation}
              className="w-full md:w-auto bg-white text-[#e31e24] hover:bg-neutral-100 font-extrabold text-xs sm:text-sm uppercase py-4 px-8 rounded-xl transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>{lang === 'VI' ? 'Đăng ký Thử nghiệm PoC →' : 'Request PoC Sandbox →'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Industry Experts Profile Modal */}
      <IndustryExpertsModal
        isOpen={isExpertsModalOpen}
        onClose={() => setIsExpertsModalOpen(false)}
        industryId={activeSolution.id}
        industryTitle={activeSolution.title}
        theme={theme}
        lang={lang}
        onBookExpert={(expertName) => {
          setIsExpertsModalOpen(false);
          onRequestConsultation();
        }}
      />
    </div>
  );
}
