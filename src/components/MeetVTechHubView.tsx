import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield,
  Layers,
  GraduationCap,
  Filter,
  CheckCircle2,
  ArrowRight,
  User,
  ChevronRight,
  Workflow,
  Scale,
  ShieldCheck,
  TrendingUp,
  Landmark,
  Building2,
  Factory,
  Truck,
  HeartPulse,
  ShoppingBag,
  Sparkles,
  Server,
  Activity,
  Cpu,
  Lock,
  Check
} from 'lucide-react';
import {
  MEET_ABOUT_DATA,
  LEADERSHIP_PROFILES
} from '../data/meetVTechHubData';

interface MeetVTechHubViewProps {
  theme: 'light' | 'dark';
  lang: 'EN' | 'VI';
  initialTab?: 'about-us' | 'leadership';
  onBackToHome: () => void;
  onRequestConsultation: (topic?: string) => void;
}

export function MeetVTechHubView({
  theme,
  lang,
  initialTab = 'about-us',
  onBackToHome,
  onRequestConsultation
}: MeetVTechHubViewProps) {
  const isVI = lang === 'VI';
  const [activeTab, setActiveTab] = useState<'about-us' | 'leadership'>(initialTab);

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-[#e31e24]" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#e31e24]" />;
      case 'Factory':
        return <Factory className="w-5 h-5 text-[#e31e24]" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-[#e31e24]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-[#e31e24]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#e31e24]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-[#e31e24]" />;
      default:
        return <Layers className="w-5 h-5 text-[#e31e24]" />;
    }
  };

  return (
    <div className={`min-h-screen pt-24 pb-20 transition-colors ${
      theme === 'light' ? 'bg-neutral-50 text-neutral-900' : 'bg-[#0c0f10] text-neutral-100'
    }`}>
      {/* Top Breadcrumb & Section Navigation */}
      <div className="border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-[#121619]/80 backdrop-blur-md sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 sm:py-4 gap-3">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 dark:text-neutral-400">
              <button
                onClick={onBackToHome}
                className="hover:text-[#e31e24] transition-colors cursor-pointer"
              >
                {isVI ? 'Trang chủ' : 'Home'}
              </button>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-neutral-700 dark:text-neutral-200">Meet V-Tech Hub</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#e31e24] font-bold">
                {activeTab === 'about-us'
                  ? (isVI ? 'Về chúng tôi' : 'About Us')
                  : (isVI ? 'Chuyên gia' : 'Expert')}
              </span>
            </div>

            {/* Sub-navigation Tabs */}
            <div className="flex items-center bg-neutral-100 dark:bg-neutral-800/70 p-1 rounded-xl self-start sm:self-auto border border-neutral-200 dark:border-neutral-700/60">
              <button
                onClick={() => setActiveTab('about-us')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'about-us'
                    ? 'bg-white dark:bg-[#1a1f24] text-[#e31e24] shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {isVI ? 'Về Chúng Tôi (About Us)' : 'About Us'}
              </button>
              <button
                onClick={() => setActiveTab('leadership')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'leadership'
                    ? 'bg-white dark:bg-[#1a1f24] text-[#e31e24] shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {isVI ? 'Chuyên Gia (Expert)' : 'Expert'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <AnimatePresence mode="wait">
          {activeTab === 'about-us' ? (
            <motion.div
              key="tab-about-us"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-16"
            >
              {/* SECTION 1: TỔNG QUAN DOANH NGHIỆP — COMPANY OVERVIEW */}
              <section className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121619] p-6 sm:p-10 lg:p-12 shadow-sm overflow-hidden relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Hình ảnh thực tế vận hành */}
                  <div className="lg:col-span-5 order-2 lg:order-1">
                    <div className="relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-900 shadow-xl group">
                      <img
                        src="/images/vpbank-vnetwork-signing.jpg"
                        alt="V-Tech Hub Strategic Alliance & Operations"
                        className="w-full h-[320px] sm:h-[380px] lg:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                      {/* Top Operations Badge */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-bold text-white">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>{isVI ? 'TRUNG TÂM VẬN HÀNH THỰC TẾ' : 'LIVE OPERATIONS CENTER'}</span>
                        </div>
                        <span className="px-2.5 py-1 rounded-md bg-[#e31e24] text-[10px] font-black text-white tracking-wider uppercase">
                          SLA 99.99%
                        </span>
                      </div>

                      {/* Bottom Info Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10">
                        <div className="flex items-center gap-2 text-[#e31e24] text-xs font-bold mb-1">
                          <Activity className="w-3.5 h-3.5" />
                          <span>{isVI ? 'Bảo chứng & Tích hợp Liên minh' : 'Alliance Verification & Integration'}</span>
                        </div>
                        <p className="text-xs text-neutral-300 leading-snug">
                          {isVI
                            ? 'Thẩm định thực địa, kiểm chứng PoC trên dữ liệu thực tế cùng các tổ chức tài chính và doanh nghiệp quy mô lớn.'
                            : 'Field-audited PoC validation on production data with tier-1 financial institutions and enterprises.'}
                        </p>
                        <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
                          <span>Nghị định 13 / SBV Ready</span>
                          <span className="text-emerald-400 font-semibold">● 24/7 Verified</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Nội dung & Nút hành động */}
                  <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase bg-red-50 dark:bg-red-950/40 text-[#e31e24] border border-red-200 dark:border-red-900/40 mb-3">
                        <Sparkles className="w-3.5 h-3.5" />
                        {isVI ? MEET_ABOUT_DATA.companyOverview.badgeVI : MEET_ABOUT_DATA.companyOverview.badgeEN}
                      </span>
                      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 dark:text-white tracking-tight leading-[1.2]">
                        {isVI ? MEET_ABOUT_DATA.companyOverview.titleVI : MEET_ABOUT_DATA.companyOverview.titleEN}
                      </h1>
                    </div>

                    <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                      {isVI ? MEET_ABOUT_DATA.companyOverview.p1VI : MEET_ABOUT_DATA.companyOverview.p1EN}
                    </p>

                    <div className="p-5 sm:p-6 rounded-2xl bg-neutral-50 dark:bg-[#181d22] border-l-4 border-[#e31e24] border-neutral-200 dark:border-neutral-800">
                      <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 leading-relaxed">
                        {isVI ? MEET_ABOUT_DATA.companyOverview.p2VI : MEET_ABOUT_DATA.companyOverview.p2EN}
                      </p>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => onRequestConsultation(isVI ? 'Kết nối với V-Tech Hub - Tổng quan doanh nghiệp' : 'Connect with V-Tech Hub - Company Overview')}
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#e31e24] hover:bg-[#c9181d] text-white font-bold text-sm sm:text-base shadow-lg shadow-red-600/25 hover:shadow-red-600/35 transition-all cursor-pointer group"
                      >
                        <span>{isVI ? MEET_ABOUT_DATA.companyOverview.buttonTextVI : MEET_ABOUT_DATA.companyOverview.buttonTextEN}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 2: MỤC TIÊU CỐT LÕI — OUR PURPOSE */}
              <section className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121619] p-6 sm:p-10 lg:p-12 shadow-sm overflow-hidden relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Biểu tượng nhận diện */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="relative w-full max-w-[380px] p-8 rounded-3xl bg-gradient-to-br from-neutral-50 via-white to-red-50/40 dark:from-[#181d22] dark:via-[#14191d] dark:to-red-950/20 border border-neutral-200 dark:border-neutral-800 shadow-inner flex flex-col items-center text-center">
                      <div className="relative mb-6">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#e31e24] to-red-500 flex items-center justify-center shadow-xl shadow-red-600/25 text-white">
                          <Cpu className="w-12 h-12" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white dark:bg-[#121619] border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-[#e31e24] shadow-sm">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-xl font-black text-neutral-900 dark:text-white mb-2">
                        V-Tech Hub Core Purpose
                      </h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6 leading-relaxed">
                        {isVI
                          ? 'Điều phối giải pháp công nghệ — Tháo gỡ nút thắt — Tối ưu chi phí vận hành'
                          : 'Technology Orchestration — Bottleneck Removal — Operational Efficiency'}
                      </p>

                      {/* 3 Value Pillars Mini Badges */}
                      <div className="w-full space-y-2.5 text-left">
                        <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white dark:bg-[#121619] border border-neutral-200/80 dark:border-neutral-800/80">
                          <div className="w-6 h-6 rounded-md bg-red-50 dark:bg-red-950/50 flex items-center justify-center text-[#e31e24] shrink-0 font-bold text-xs">
                            ✓
                          </div>
                          <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                            {isVI ? 'Tháo gỡ điểm nghẽn triển khai' : 'Resolving adoption bottlenecks'}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white dark:bg-[#121619] border border-neutral-200/80 dark:border-neutral-800/80">
                          <div className="w-6 h-6 rounded-md bg-red-50 dark:bg-red-950/50 flex items-center justify-center text-[#e31e24] shrink-0 font-bold text-xs">
                            ✓
                          </div>
                          <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                            {isVI ? 'Triệt tiêu chi phí đầu tư lãng phí' : 'Decisively eliminating IT waste'}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white dark:bg-[#121619] border border-neutral-200/80 dark:border-neutral-800/80">
                          <div className="w-6 h-6 rounded-md bg-red-50 dark:bg-red-950/50 flex items-center justify-center text-[#e31e24] shrink-0 font-bold text-xs">
                            ✓
                          </div>
                          <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                            {isVI ? 'Hệ thống vận hành trơn tru & tiết kiệm' : 'Seamless & cost-efficient operation'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Nội dung thông điệp */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase bg-red-50 dark:bg-red-950/40 text-[#e31e24] border border-red-200 dark:border-red-900/40 mb-3">
                        <Shield className="w-3.5 h-3.5" />
                        {isVI ? MEET_ABOUT_DATA.ourPurpose.badgeVI : MEET_ABOUT_DATA.ourPurpose.badgeEN}
                      </span>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 dark:text-white tracking-tight leading-[1.2]">
                        {isVI ? MEET_ABOUT_DATA.ourPurpose.titleVI : MEET_ABOUT_DATA.ourPurpose.titleEN}
                      </h2>
                    </div>

                    <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                      {isVI ? MEET_ABOUT_DATA.ourPurpose.p1VI : MEET_ABOUT_DATA.ourPurpose.p1EN}
                    </p>

                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {isVI ? MEET_ABOUT_DATA.ourPurpose.p2VI : MEET_ABOUT_DATA.ourPurpose.p2EN}
                    </p>

                    <div className="pt-2">
                      <button
                        onClick={onBackToHome}
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 font-bold text-sm sm:text-base transition-all cursor-pointer shadow-md group"
                      >
                        <span>{isVI ? MEET_ABOUT_DATA.ourPurpose.buttonTextVI : MEET_ABOUT_DATA.ourPurpose.buttonTextEN}</span>
                        <ArrowRight className="w-4 h-4 text-[#e31e24] group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 3: NĂNG LỰC DỊCH VỤ TRỌN GÓI — V-TECH ENGINEERING & DELIVERY */}
              <section className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121619] p-6 sm:p-10 lg:p-12 shadow-sm overflow-hidden relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Nội dung năng lực */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase bg-red-50 dark:bg-red-950/40 text-[#e31e24] border border-red-200 dark:border-red-900/40 mb-3">
                        <Workflow className="w-3.5 h-3.5" />
                        {isVI ? MEET_ABOUT_DATA.engineeringDelivery.badgeVI : MEET_ABOUT_DATA.engineeringDelivery.badgeEN}
                      </span>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 dark:text-white tracking-tight leading-[1.2]">
                        {isVI ? MEET_ABOUT_DATA.engineeringDelivery.titleVI : MEET_ABOUT_DATA.engineeringDelivery.titleEN}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                      {isVI ? MEET_ABOUT_DATA.engineeringDelivery.leadVI : MEET_ABOUT_DATA.engineeringDelivery.leadEN}
                    </p>

                    {/* 3 Capabilities Cards */}
                    <div className="space-y-4">
                      {MEET_ABOUT_DATA.engineeringDelivery.capabilities.map((cap, index) => (
                        <div
                          key={cap.id}
                          className="p-5 rounded-2xl bg-neutral-50 dark:bg-[#181d22] border border-neutral-200 dark:border-neutral-800 hover:border-[#e31e24]/40 transition-colors"
                        >
                          <div className="flex items-start gap-3.5">
                            <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-950/60 text-[#e31e24] flex items-center justify-center shrink-0 font-black text-sm">
                              0{index + 1}
                            </div>
                            <div className="space-y-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                                  {isVI ? cap.titleVI : cap.titleEN}
                                </h3>
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-neutral-200/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                                  {isVI ? cap.tagVI : cap.tagEN}
                                </span>
                              </div>
                              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                {isVI ? cap.descVI : cap.descEN}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => onRequestConsultation(isVI ? 'Khám phá năng lực kỹ thuật V-Tech Hub' : 'Explore Technical Capabilities')}
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#e31e24] hover:bg-[#c9181d] text-white font-bold text-sm sm:text-base shadow-lg shadow-red-600/25 hover:shadow-red-600/35 transition-all cursor-pointer group"
                      >
                        <span>{isVI ? MEET_ABOUT_DATA.engineeringDelivery.buttonTextVI : MEET_ABOUT_DATA.engineeringDelivery.buttonTextEN}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Biểu tượng giải pháp (Architecture & Solution Diagram) */}
                  <div className="lg:col-span-5">
                    <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-neutral-50 via-white to-red-50/30 dark:from-[#181d22] dark:via-[#14191d] dark:to-[#1a1213] p-6 sm:p-8 space-y-4 shadow-sm">
                      <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800">
                        <div className="flex items-center gap-2 text-xs font-bold text-neutral-700 dark:text-neutral-300">
                          <Layers className="w-4 h-4 text-[#e31e24]" />
                          <span>V-Tech Hub Architecture Bus</span>
                        </div>
                        <span className="text-[10px] font-black text-emerald-500 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          OPERATIONAL
                        </span>
                      </div>

                      {/* Architecture Stack */}
                      <div className="space-y-3 text-xs">
                        <div className="p-3.5 rounded-xl bg-white dark:bg-[#121619] border border-neutral-200 dark:border-neutral-800 shadow-sm flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <Sparkles className="w-4 h-4 text-[#e31e24]" />
                            <span className="font-bold text-neutral-900 dark:text-white">
                              {isVI ? 'Sàng lọc Giải pháp Đỉnh cao' : 'Curated Best-in-Class Solutions'}
                            </span>
                          </div>
                          <span className="text-[10px] text-neutral-500">Tier-1 Verified</span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-red-50/70 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 shadow-sm flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <Workflow className="w-4 h-4 text-[#e31e24]" />
                            <span className="font-bold text-neutral-900 dark:text-white">
                              {isVI ? 'Kiến trúc Mở API-First & Tích hợp' : 'Open API-First Integration Bus'}
                            </span>
                          </div>
                          <span className="text-[10px] text-[#e31e24] font-semibold">Zero Silos</span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white dark:bg-[#121619] border border-neutral-200 dark:border-neutral-800 shadow-sm flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <Lock className="w-4 h-4 text-[#e31e24]" />
                            <span className="font-bold text-neutral-900 dark:text-white">
                              {isVI ? 'Hạ tầng Chủ quyền & Pháp lý Việt Nam' : 'Sovereign Cloud & Decree 13'}
                            </span>
                          </div>
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">Compliant</span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white dark:bg-[#121619] border border-neutral-200 dark:border-neutral-800 shadow-sm flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <Activity className="w-4 h-4 text-[#e31e24]" />
                            <span className="font-bold text-neutral-900 dark:text-white">
                              {isVI ? 'Chạy Thử PoC Dữ Liệu Thật' : 'Live Data PoC Benchmarking'}
                            </span>
                          </div>
                          <span className="text-[10px] text-neutral-500">ROI-Guaranteed</span>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-[11px] text-neutral-500">
                        <span>End-to-End Delivery Lifecycle</span>
                        <span className="text-[#e31e24] font-bold">V-Tech Engineering</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 4: TRIẾT LÝ HỢP TÁC — OUR PRINCIPLES */}
              <section className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-[#121619]/60 p-6 sm:p-10 lg:p-12">
                <div className="max-w-4xl mb-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase bg-red-50 dark:bg-red-950/40 text-[#e31e24] border border-red-200 dark:border-red-900/40 mb-3">
                    <Scale className="w-3.5 h-3.5" />
                    {isVI ? MEET_ABOUT_DATA.ourPrinciples.badgeVI : MEET_ABOUT_DATA.ourPrinciples.badgeEN}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white tracking-tight leading-snug">
                    {isVI ? MEET_ABOUT_DATA.ourPrinciples.titleVI : MEET_ABOUT_DATA.ourPrinciples.titleEN}
                  </h2>
                </div>

                {/* 3 Horizontal Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {MEET_ABOUT_DATA.ourPrinciples.principles.map((pr) => (
                    <div
                      key={pr.num}
                      className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#181d22] border border-neutral-200 dark:border-neutral-800 shadow-sm hover:border-[#e31e24]/50 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="w-9 h-9 rounded-xl bg-red-50 dark:bg-red-950/50 text-[#e31e24] font-black text-sm flex items-center justify-center border border-red-100 dark:border-red-900/30">
                            {pr.num}
                          </span>
                          {pr.num === '01' && <Scale className="w-5 h-5 text-neutral-400" />}
                          {pr.num === '02' && <ShieldCheck className="w-5 h-5 text-neutral-400" />}
                          {pr.num === '03' && <TrendingUp className="w-5 h-5 text-neutral-400" />}
                        </div>

                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">
                          {isVI ? pr.nameVI : pr.nameEN}
                        </h3>

                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                          {isVI ? pr.descVI : pr.descEN}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 text-[11px] text-neutral-500 font-semibold flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#e31e24]" />
                        <span>{isVI ? 'Cam kết chuẩn hoá' : 'Standardized Commitment'}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 5: ĐỊNH HƯỚNG THEO NGÀNH — INDUSTRY FOCUS */}
              <section className="space-y-8">
                <div className="max-w-4xl">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase bg-red-50 dark:bg-red-950/40 text-[#e31e24] border border-red-200 dark:border-red-900/40 mb-3">
                    <Building2 className="w-3.5 h-3.5" />
                    {isVI ? MEET_ABOUT_DATA.industryFocus.badgeVI : MEET_ABOUT_DATA.industryFocus.badgeEN}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white tracking-tight leading-snug">
                    {isVI ? MEET_ABOUT_DATA.industryFocus.titleVI : MEET_ABOUT_DATA.industryFocus.titleEN}
                  </h2>
                </div>

                {/* 7 Industries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {MEET_ABOUT_DATA.industryFocus.industries.map((ind) => (
                    <div
                      key={ind.id}
                      className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121619] p-6 flex flex-col justify-between hover:border-[#e31e24]/60 transition-all duration-300 shadow-sm group"
                    >
                      <div>
                        {/* Header with Icon and Tag */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200/60 dark:border-red-900/40 flex items-center justify-center">
                            {getIndustryIcon(ind.iconName)}
                          </div>
                          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                            {isVI ? ind.tagVI : ind.tagEN}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2.5 leading-snug group-hover:text-[#e31e24] transition-colors">
                          {isVI ? ind.nameVI : ind.nameEN}
                        </h3>

                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                          {isVI ? ind.descVI : ind.descEN}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                        <button
                          onClick={() => onRequestConsultation(isVI ? ind.nameVI : ind.nameEN)}
                          className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-white hover:bg-[#e31e24] dark:hover:bg-[#e31e24] bg-neutral-100 dark:bg-neutral-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <span>{isVI ? 'Tư vấn giải pháp ngành' : 'Consult on Sector'}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="tab-leadership"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-10"
            >
              {/* Header Section for Leadership */}
              <div className="pb-6 border-b border-neutral-200 dark:border-neutral-800">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 dark:text-white mb-3">
                  {isVI ? 'Đội Ngũ Chuyên Gia & Hội Đồng Cố Vấn' : 'Experts & Advisory Board'}
                </h1>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
                  {isVI
                    ? 'Khung cơ cấu tổ chức và đội ngũ chuyên gia V-Tech Hub định hướng chiến lược, kết nối nguồn lực công nghệ hàng đầu.'
                    : 'Organizational framework and expert leadership structure steering V-Tech Hub technology alliance.'}
                </p>
              </div>

              {/* Leadership Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {LEADERSHIP_PROFILES.map((profile) => (
                  <div
                    key={profile.id}
                    className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121619] overflow-hidden flex flex-col group hover:border-[#e31e24]/40 transition-all duration-300"
                  >
                    {/* Top portrait placeholder frame */}
                    <div className="h-52 w-full bg-neutral-100/90 dark:bg-neutral-800/60 relative flex items-center justify-center overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
                      {/* Subtle radial dot grid */}
                      <div className="absolute inset-0 opacity-15 dark:opacity-10 bg-[radial-gradient(#e31e24_1px,transparent_1px)] [background-size:16px_16px]" />

                      {/* Silhouette or Profile Avatar */}
                      <div className="relative flex flex-col items-center">
                        <div className="w-22 h-22 rounded-full bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 shadow-xs flex items-center justify-center text-neutral-400 dark:text-neutral-500 group-hover:border-[#e31e24]/60 transition-colors overflow-hidden">
                          {profile.avatar ? (
                            <img
                              src={profile.avatar}
                              alt={profile.name || profile.memberNumber}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <User className="w-10 h-10 stroke-[1.5]" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Info Area */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white group-hover:text-[#e31e24] transition-colors leading-snug mb-1.5">
                        {profile.name || (isVI ? `Chuyên gia ${profile.memberNumber}` : `Expert Member ${profile.memberNumber}`)}
                      </h3>

                      <p className="text-xs font-semibold text-[#e31e24] mb-3 line-clamp-1">
                        {profile.name
                          ? (isVI ? (profile.titleVI || profile.domainVI) : (profile.titleEN || profile.domainEN))
                          : (isVI ? profile.domainVI : profile.domainEN)}
                      </p>

                      {/* Bio / Overview content */}
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-3">
                        {isVI
                          ? (profile.bioVI || profile.overviewVI)
                          : (profile.bioEN || profile.overviewEN)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Advisory Council Banner - Clean Minimal Enterprise Style */}
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-r from-neutral-50 via-white to-red-50/30 dark:from-[#121619] dark:via-[#161b20] dark:to-red-950/20 p-6 sm:p-8 lg:p-10 shadow-xs">
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/5 dark:bg-red-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Left Content without Users Icon or Tag */}
                  <div className="space-y-2 max-w-2xl">
                    <h4 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white tracking-tight">
                      {isVI ? 'Gia Nhập Hội Đồng Cố Vấn V-Tech Hub' : 'Join Our Advisory Council'}
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {isVI
                        ? 'V-Tech Hub liên tục mở rộng hợp tác cùng các chuyên gia đầu ngành, kiến trúc sư trưởng và nhà hoạch định chính sách số tại Việt Nam nhằm đồng hành kiến tạo chuẩn mực công nghệ cho doanh nghiệp.'
                        : 'V-Tech Hub continually expands strategic collaboration with veteran domain architects, technology fellows, and digital policy leaders to guide enterprise technology adoption.'}
                    </p>
                  </div>

                  {/* Right CTA Button */}
                  <div className="flex items-center lg:justify-end shrink-0 pt-2 lg:pt-0">
                    <button
                      onClick={() => onRequestConsultation('Join Advisory Board / Partner')}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#e31e24] text-white font-bold text-sm hover:bg-[#c3181d] shadow-sm hover:shadow transition-all cursor-pointer whitespace-nowrap group"
                    >
                      <span>{isVI ? 'Liên Hệ Kết Nối' : 'Get in Touch with Us'}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
