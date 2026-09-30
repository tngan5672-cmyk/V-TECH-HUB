import React, { useState } from 'react';
import { Send, CheckCircle, Key, Copy, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Theme } from '../types';
import { Language, translations } from '../translations';

interface ContactFormProps {
  theme: Theme;
  lang: Language;
}

export default function ContactForm({ theme, lang }: ContactFormProps) {
  const t = translations[lang];
  const [showFormModal, setShowFormModal] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [comments, setComments] = useState('');
  const [partnerType, setPartnerType] = useState('SaaS Provider');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [generatedKey, setGeneratedKey] = useState('');
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!firstName.trim()) tempErrors.firstName = 'First name is required';
    if (!lastName.trim()) tempErrors.lastName = 'Last name is required';
    if (!companyName.trim()) tempErrors.companyName = 'Company name is required';
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      tempErrors.email = 'Business email is required';
    } else if (!emailPattern.test(email)) {
      tempErrors.email = 'Please provide a valid corporate email';
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setTimeout(() => {
      const mockKey = `vn_sandbox_acc_${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
      setGeneratedKey(mockKey);
      setStatus('success');
      setFirstName('');
      setLastName('');
      setEmail('');
      setCompanyName('');
      setComments('');
    }, 1200);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 bg-white dark:bg-[#0c0f10]" id="contact-form">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner matching exact mockup image */}
        <div className="relative rounded-[32px] overflow-hidden border border-red-200 dark:border-neutral-800 bg-gradient-to-r from-red-50/80 via-white to-red-50/60 dark:from-[#111415] dark:via-[#161a1c] dark:to-[#111415] p-8 sm:p-12 lg:p-14 flex flex-col md:flex-row items-center justify-between gap-8 min-h-[320px] shadow-xl shadow-red-500/5">
          
          {/* Left Text Column */}
          <div className="max-w-xl space-y-4 text-left z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#e31e24] leading-tight tracking-tight">
              {t.ctaBannerTitle1}<br />
              {t.ctaBannerTitle2}
            </h2>
            <p className="text-sm sm:text-base font-bold text-neutral-800 dark:text-neutral-200 leading-snug">
              {t.ctaBannerDesc}
            </p>
            
            <div className="pt-4">
              <button
                onClick={() => setShowFormModal(true)}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#e31e24] text-white hover:bg-[#c9181d] font-extrabold text-sm tracking-wider uppercase transition-all duration-200 shadow-lg shadow-red-500/25 active:scale-95 cursor-pointer"
                id="contact-us-banner-btn"
              >
                {t.getInTouchBtn} &rarr;
              </button>
            </div>
          </div>

          {/* Right 3D Visual Cloud & Server Graphic matching mockup */}
          <div className="relative w-full md:w-[420px] h-64 sm:h-72 flex items-center justify-center shrink-0">
            <svg
              viewBox="0 0 500 350"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-xl"
            >
              <defs>
                <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff3b30" />
                  <stop offset="100%" stopColor="#b30006" />
                </linearGradient>
                <linearGradient id="folderGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ff453a" />
                  <stop offset="100%" stopColor="#c0000a" />
                </linearGradient>
                <linearGradient id="pedestalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#e2e5f0" />
                </linearGradient>
                <filter id="shadow3d" x="-10%" y="-10%" width="130%" height="130%">
                  <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#000000" floodOpacity="0.12" />
                </filter>
              </defs>

              {/* Pedestal Server Base */}
              <g filter="url(#shadow3d)">
                {/* Top face */}
                <path d="M 120 230 L 290 190 L 390 235 L 220 275 Z" fill="url(#pedestalGrad)" />
                {/* Front edge */}
                <path d="M 120 230 L 220 275 L 220 295 L 120 250 Z" fill="#d2d6e6" />
                {/* Right edge */}
                <path d="M 220 275 L 390 235 L 390 255 L 220 295 Z" fill="#e8ebf5" />
                

              </g>

              {/* Network connecting lines */}
              <path d="M 210 215 L 210 140 M 310 175 L 370 120 M 340 210 L 410 190" stroke="#d0d5e8" strokeWidth="2" strokeDasharray="4 3" />

              {/* Floating Dashboard Window 1 (Main UI) */}
              <g filter="url(#shadow3d)" transform="translate(140, 95) rotate(-4)">
                <rect x="0" y="0" width="150" height="95" rx="8" fill="#ffffff" stroke="#e0e3f0" strokeWidth="1.5" />
                {/* Window top bar */}
                <path d="M 0 0 H 150 V 16 H 0 Z" fill="#e31e24" rx="8" />
                <circle cx="8" cy="8" r="2.5" fill="#ffffff" opacity="0.8" />
                <circle cx="16" cy="8" r="2.5" fill="#ffffff" opacity="0.8" />
                <circle cx="24" cy="8" r="2.5" fill="#ffffff" opacity="0.8" />
                {/* Mockup Dashboard graphs */}
                <rect x="12" y="26" width="60" height="6" rx="3" fill="#cbd2e1" />
                <rect x="12" y="38" width="126" height="4" rx="2" fill="#edf0f7" />
                <rect x="12" y="48" width="126" height="4" rx="2" fill="#edf0f7" />
                <rect x="12" y="58" width="90" height="4" rx="2" fill="#edf0f7" />
                {/* Charts */}
                <circle cx="28" cy="76" r="10" fill="#ff7043" />
                <circle cx="52" cy="76" r="10" fill="#5c6bc0" />
                <rect x="75" y="68" width="8" height="18" fill="#a5d6a7" rx="2" />
                <rect x="87" y="62" width="8" height="24" fill="#64b5f6" rx="2" />
                <rect x="99" y="55" width="8" height="31" fill="#e31e24" rx="2" />
                <rect x="111" y="70" width="8" height="16" fill="#90a4ae" rx="2" />
              </g>

              {/* Floating Dashboard Window 2 (Secondary) */}
              <g filter="url(#shadow3d)" transform="translate(290, 110) rotate(2)">
                <rect x="0" y="0" width="80" height="55" rx="6" fill="#ffffff" stroke="#e0e3f0" strokeWidth="1" />
                <rect x="8" y="10" width="64" height="3" rx="1.5" fill="#78909c" />
                <rect x="8" y="18" width="50" height="3" rx="1.5" fill="#cfd8dc" />
                <rect x="8" y="26" width="64" height="3" rx="1.5" fill="#cfd8dc" />
                <rect x="8" y="34" width="40" height="3" rx="1.5" fill="#cfd8dc" />
              </g>

              {/* Glossy Red 3D Cloud (Hero Element) */}
              <g filter="url(#shadow3d)" transform="translate(320, 50)">
                <path
                  d="M 40 45 C 30 45 20 37 20 25 C 20 15 28 8 38 8 C 42 3 50 0 60 0 C 75 0 88 10 90 23 C 96 23 105 28 105 36 C 105 45 96 45 88 45 Z"
                  fill="url(#cloudGrad)"
                />
                {/* Glossy highlight */}
                <path
                  d="M 42 12 C 45 8 52 5 60 5 C 72 5 82 12 85 22 C 80 18 70 16 60 16 C 50 16 44 20 42 12 Z"
                  fill="#ffffff"
                  opacity="0.35"
                />
              </g>

              {/* Floating 3D Red Folder */}
              <g filter="url(#shadow3d)" transform="translate(380, 160) rotate(-6)">
                <path d="M 0 10 L 20 10 L 28 18 L 65 18 C 68 18 70 20 70 23 L 70 60 C 70 63 68 65 65 65 L 5 65 C 2 65 0 63 0 60 Z" fill="url(#folderGrad)" />
                <path d="M 8 26 L 62 26 L 62 60 L 8 60 Z" fill="#ff6b6b" opacity="0.6" />
                {/* Paper sheet inside folder */}
                <path d="M 14 18 L 56 18 L 56 30 L 14 30 Z" fill="#ffffff" />
              </g>
            </svg>
          </div>

        </div>

      </div>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {showFormModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => { setShowFormModal(false); setStatus('idle'); }}
              className="absolute inset-0 bg-black"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`relative w-full max-w-lg rounded-2xl p-6 sm:p-8 border shadow-2xl ${
                theme === 'light' ? 'bg-white border-neutral-200' : 'bg-[#111415] border-neutral-800'
              }`}
            >
              <button
                onClick={() => { setShowFormModal(false); setStatus('idle'); }}
                className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 dark:hover:text-white font-bold"
              >
                ✕
              </button>

              {status === 'success' ? (
                <div className="text-center space-y-4 py-6">
                  <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h3 className="text-xl font-black text-neutral-900 dark:text-white">
                    {t.formSuccessTitle}
                  </h3>
                  <p className="text-xs text-neutral-500">
                    {t.formSuccessDesc}
                  </p>
                  <div className="bg-red-500/10 p-3 rounded-xl border border-[#e31e24]/20 text-xs font-mono">
                    {t.refKey}: <span className="font-bold text-[#e31e24]">{generatedKey}</span>
                  </div>
                  <button
                    onClick={() => { setShowFormModal(false); setStatus('idle'); }}
                    className="w-full bg-[#e31e24] text-white font-bold py-3 rounded-xl text-xs cursor-pointer"
                  >
                    {t.closeWindow}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-extrabold text-[#e31e24]">{t.formTitle}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-bold uppercase text-neutral-400 block mb-1">{t.firstName}</label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="John"
                        className="w-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-lg p-2.5 text-xs outline-none focus:border-[#e31e24]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase text-neutral-400 block mb-1">{t.lastName}</label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Doe"
                        className="w-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-lg p-2.5 text-xs outline-none focus:border-[#e31e24]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-neutral-400 block mb-1">{t.emailLabel}</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john.doe@company.com"
                      className="w-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-lg p-2.5 text-xs outline-none focus:border-[#e31e24]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-neutral-400 block mb-1">{t.companyLabel}</label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Acme Corp"
                      className="w-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-lg p-2.5 text-xs outline-none focus:border-[#e31e24]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-neutral-400 block mb-1">{t.detailsLabel}</label>
                    <textarea
                      rows={3}
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                      placeholder={t.detailsPlaceholder}
                      className="w-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-lg p-2.5 text-xs outline-none focus:border-[#e31e24] resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#e31e24] text-white font-bold py-3 rounded-xl text-xs hover:bg-opacity-90 transition-all flex items-center justify-center gap-1.5 cursor-pointer uppercase tracking-wider"
                  >
                    {t.submitInquiry} <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

