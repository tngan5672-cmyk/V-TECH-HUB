import React, { useState } from 'react';
import { 
  X, 
  User, 
  ChevronRight, 
  ArrowLeft, 
  CheckCircle2, 
  Calendar, 
  Briefcase, 
  Award, 
  Workflow,
  ArrowRight,
  Linkedin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Theme } from '../types';
import { Language } from '../translations';
import { getIndustryExperts, IndustryExpert } from '../data/industryExpertsData';

interface IndustryExpertsModalProps {
  isOpen: boolean;
  onClose: () => void;
  industryId: string;
  industryTitle: string;
  theme: Theme;
  lang: Language;
  onBookExpert: (expertName: string) => void;
}

export default function IndustryExpertsModal({
  isOpen,
  onClose,
  industryId,
  industryTitle,
  theme,
  lang,
  onBookExpert,
}: IndustryExpertsModalProps) {
  const [selectedExpert, setSelectedExpert] = useState<IndustryExpert | null>(null);
  const experts = getIndustryExperts(industryId);
  const isVI = lang === 'VI';

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            setSelectedExpert(null);
            onClose();
          }}
          className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        />

        {/* Modal Dialog Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl sm:rounded-3xl shadow-2xl border overflow-hidden z-10 ${
            theme === 'light'
              ? 'bg-white border-neutral-200 text-neutral-900'
              : 'bg-[#0f1318] border-neutral-800 text-white'
          }`}
        >
          {/* Header */}
          <div className={`px-6 sm:px-8 py-5 border-b flex items-center justify-between gap-4 ${
            theme === 'light' ? 'bg-neutral-50/80 border-neutral-200' : 'bg-[#151a21]/90 border-neutral-800'
          }`}>
            <div className="flex items-center gap-3">
              {selectedExpert && (
                <button
                  onClick={() => setSelectedExpert(null)}
                  className={`p-1.5 rounded-lg border transition-colors cursor-pointer mr-1 ${
                    theme === 'light'
                      ? 'bg-white border-neutral-200 text-neutral-700 hover:text-[#e31e24] hover:border-red-300'
                      : 'bg-neutral-800 border-neutral-700 text-neutral-300 hover:text-[#e31e24]'
                  }`}
                  title={isVI ? 'Quay lại danh sách' : 'Back to list'}
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}

              <div>
                <h2 className="text-lg sm:text-xl font-extrabold tracking-tight">
                  {selectedExpert
                    ? (isVI ? 'Hồ Sơ Năng Lực Chuyên Gia' : 'Expert Professional Profile')
                    : (isVI ? 'Đội Ngũ Chuyên Gia Tư Vấn Ngành' : 'Industry Expert Advisory Board')}
                </h2>
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedExpert(null);
                onClose();
              }}
              className={`p-2 rounded-xl border transition-colors cursor-pointer shrink-0 ${
                theme === 'light'
                  ? 'bg-white border-neutral-200 text-neutral-600 hover:text-[#e31e24] hover:border-red-300 hover:bg-red-50/50'
                  : 'bg-neutral-800 border-neutral-700 text-neutral-300 hover:text-[#e31e24] hover:border-red-900 hover:bg-red-950/40'
              }`}
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1">
            <AnimatePresence mode="wait">
              {!selectedExpert ? (
                /* 1. Grid of Compact Cards (Matching Image 2 Reference) */
                <motion.div
                  key="list"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className={`grid grid-cols-1 ${experts.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-6`}
                >
                  {experts.map((exp, idx) => {
                    const memberNumber = String(idx + 1).padStart(2, '0');
                    const domain = isVI ? exp.titleVI : exp.titleEN;

                    return (
                      <div
                        key={exp.id}
                        className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121619] overflow-hidden flex flex-col justify-between group hover:border-[#e31e24]/40 transition-all duration-300 shadow-xs hover:shadow-md"
                      >
                        <div 
                          onClick={() => setSelectedExpert(exp)}
                          className="cursor-pointer group/card flex-1 flex flex-col"
                        >
                          {/* Top portrait frame with subtle red dot grid */}
                          <div className="h-44 sm:h-48 w-full bg-neutral-100/90 dark:bg-neutral-800/60 relative flex items-center justify-center overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
                            {/* Subtle radial dot grid */}
                            <div className="absolute inset-0 opacity-15 dark:opacity-10 bg-[radial-gradient(#e31e24_1px,transparent_1px)] [background-size:16px_16px]" />

                            {/* Avatar photo / silhouette placeholder */}
                            <div className="relative flex flex-col items-center">
                              <div className="w-24 h-24 rounded-full bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 shadow-sm flex items-center justify-center text-neutral-400 dark:text-neutral-500 group-hover:border-[#e31e24]/60 transition-colors overflow-hidden">
                                {exp.avatar ? (
                                  <img
                                    src={exp.avatar}
                                    alt={exp.name}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                  />
                                ) : (
                                  <User className="w-10 h-10 stroke-[1.5]" />
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Info Area */}
                          <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex items-start justify-between gap-2 mb-1.5">
                                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white group-hover/card:text-[#e31e24] transition-colors leading-snug">
                                  {exp.name}
                                </h3>
                                <span className="text-[10px] font-semibold text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded shrink-0">
                                  {isVI ? `Chuyên gia ${memberNumber}` : `Expert ${memberNumber}`}
                                </span>
                              </div>

                              <p className="text-xs font-semibold text-[#e31e24] mb-3 line-clamp-1">
                                {domain}
                              </p>

                              {/* Bio narrative */}
                              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-3">
                                {isVI ? exp.bioVI : exp.bioEN}
                              </p>
                            </div>

                            <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs font-medium text-neutral-500 dark:text-neutral-400 group-hover/card:text-[#e31e24] transition-colors">
                              <span>{isVI ? 'Xem hồ sơ chi tiết' : 'View full profile'}</span>
                              <ChevronRight className="w-4 h-4 group-hover/card:translate-x-0.5 transition-transform" />
                            </div>
                          </div>
                        </div>

                        {/* Card Bottom: Connect on LinkedIn */}
                        <div className="p-5 sm:p-6 pt-0">
                          <a
                            href={exp.linkedinUrl || "https://www.linkedin.com/company/vnetwork/"}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-full pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-bold text-neutral-600 dark:text-neutral-300 hover:text-[#0a66c2] dark:hover:text-[#0a66c2] transition-colors cursor-pointer group/btn"
                          >
                            <span className="flex items-center gap-2 min-w-0">
                              <Linkedin className="w-4 h-4 text-[#0a66c2] shrink-0 fill-current" />
                              <span className="truncate">
                                {isVI ? `Kết nối với ${exp.name}` : `Connect with ${exp.name}`}
                              </span>
                            </span>
                            <ChevronRight className="w-4 h-4 text-neutral-400 group-hover/btn:text-[#0a66c2] group-hover/btn:translate-x-0.5 transition-all shrink-0" />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              ) : (
                /* 2. Detailed Profile Drawer View (When clicking See More) */
                <motion.div
                  key="detail"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  {/* Profile Header Block */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                    <div className="w-20 h-20 rounded-2xl bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-[#e31e24] shrink-0 shadow-sm overflow-hidden">
                      {selectedExpert.avatar ? (
                        <img
                          src={selectedExpert.avatar}
                          alt={selectedExpert.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <User className="w-10 h-10 stroke-[1.5]" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <div className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-red-50 dark:bg-red-950/40 text-[#e31e24] border border-red-200 dark:border-red-900/40">
                        {isVI ? selectedExpert.roleVI : selectedExpert.roleEN}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white">
                        {selectedExpert.name}
                      </h3>
                      <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                        {isVI ? selectedExpert.titleVI : selectedExpert.titleEN}
                      </p>
                    </div>
                  </div>

                  {/* Section 1: Introduction / Overview */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#e31e24]" />
                      <span>{isVI ? 'Giới thiệu vai trò & Định hướng' : 'Role & Mandate Overview'}</span>
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed pl-6">
                      {isVI ? selectedExpert.bioVI : selectedExpert.bioEN}
                    </p>
                  </div>

                  {/* Section 2: Key Strategic Responsibilities & Credentials */}
                  <div className="space-y-2.5">
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                      <Workflow className="w-4 h-4 text-[#e31e24]" />
                      <span>{isVI ? 'Bảo chứng năng lực & Dự án tiêu biểu' : 'Credentials & Notable Deployments'}</span>
                    </h4>
                    <div className="pl-6 space-y-2">
                      {(isVI ? selectedExpert.credentialsVI : selectedExpert.credentialsEN).map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#e31e24] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section 3: Value Delivery Box */}
                  <div className="p-4 sm:p-5 rounded-xl border border-red-200/80 dark:border-red-900/40 bg-red-50/40 dark:bg-red-950/20 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#e31e24] uppercase tracking-wider">
                      <Award className="w-4 h-4" />
                      <span>{isVI ? 'Lĩnh vực chuyên sâu & Giá trị chuyển giao' : 'Core Specialization & Enterprise Value'}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {(isVI ? selectedExpert.specializationsVI : selectedExpert.specializationsEN).map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className={`text-xs px-2.5 py-1 rounded-md border ${
                            theme === 'light'
                              ? 'bg-white border-neutral-200 text-neutral-700'
                              : 'bg-neutral-800 border-neutral-700 text-neutral-300'
                          }`}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Modal Footer */}
          <div className={`px-6 sm:px-8 py-4 border-t flex items-center justify-end ${
            theme === 'light' ? 'bg-neutral-50/80 border-neutral-200' : 'bg-[#12171d] border-neutral-800'
          }`}>
            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
              {selectedExpert ? (
                <>
                  <button
                    onClick={() => setSelectedExpert(null)}
                    className="px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs font-bold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    {isVI ? 'Quay lại' : 'Back'}
                  </button>
                  <a
                    href={selectedExpert.linkedinUrl || "https://www.linkedin.com/company/vnetwork/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 text-[#0a66c2] hover:border-[#0a66c2] hover:bg-[#0a66c2]/10 text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Linkedin className="w-3.5 h-3.5 fill-current" />
                    <span>LinkedIn</span>
                  </a>
                  <button
                    onClick={() => {
                      const expertName = selectedExpert.name;
                      setSelectedExpert(null);
                      onClose();
                      onBookExpert(expertName);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#e31e24] text-white text-xs font-bold hover:bg-[#c3181d] transition-colors cursor-pointer shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{isVI ? 'Đặt Lịch Làm Việc' : 'Request Briefing'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </>
              ) : (
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs font-bold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  {isVI ? 'Đóng' : 'Close'}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
