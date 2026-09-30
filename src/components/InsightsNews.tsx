import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Theme } from '../types';

interface InsightsNewsProps {
  theme: Theme;
}

export default function InsightsNews({ theme }: InsightsNewsProps) {
  const awardsList = [
    {
      id: 'award-1',
      title: 'Top Brands Vietnam',
      org: 'Asia Business Centre',
      customLogo: (
        <div className="w-full h-24 flex items-center justify-center p-2">
          <svg viewBox="0 0 260 120" className="w-full h-full object-contain">
            {/* Outer red ring logo badge */}
            <g transform="translate(130, 32)">
              <ellipse cx="0" cy="0" rx="36" ry="24" fill="#e31e24" />
              <ellipse cx="0" cy="0" rx="32" ry="20" fill="#ffffff" />
              <path d="M-18,-8 L-8,12 L12,-12 L2,2 L-8,12 Z" fill="#e31e24" />
              <text x="14" y="0" fontStyle="italic" fontWeight="900" fontSize="10" fill="#e31e24" fontFamily="sans-serif">TB</text>
              <text x="14" y="8" fontWeight="bold" fontSize="6" fill="#1e3a8a" fontFamily="sans-serif">VTB:2021</text>
            </g>
            {/* TOP BRANDS VIETNAM text */}
            <text x="130" y="74" textAnchor="middle" fontWeight="900" fontSize="15" fill="#102a6b" fontFamily="sans-serif" letterSpacing="0.5">
              TOP BRANDS
            </text>
            <text x="130" y="88" textAnchor="middle" fontWeight="900" fontSize="13" fill="#102a6b" fontFamily="sans-serif" letterSpacing="1">
              VIETNAM
            </text>
            {/* Banner bottom */}
            <rect x="35" y="93" width="190" height="18" fill="#102a6b" rx="2" />
            <text x="130" y="102" textAnchor="middle" fontWeight="bold" fontSize="7" fill="#ffffff" fontFamily="sans-serif">
              by ASIA BUSINESS CENTRE
            </text>
            <text x="130" y="108" textAnchor="middle" fontSize="6" fill="#93c5fd" fontFamily="sans-serif">
              www.brand-asia.com
            </text>
          </svg>
        </div>
      ),
    },
    {
      id: 'award-2',
      title: 'Science & Technology Enterprise',
      org: 'Ministry of Science & Technology No. 59/DNKHCN',
      customLogo: (
        <div className="w-full h-24 flex items-center justify-center p-2">
          <img
            src="https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/48/454353.webp"
            alt="Doanh Nghiệp Khoa Học Công Nghệ - Bộ KHCN số 59/DNKHCN"
            className="max-w-full max-h-full object-contain filter drop-shadow-sm"
            referrerPolicy="no-referrer"
          />
        </div>
      ),
    },
    {
      id: 'award-3',
      title: 'ISO Standards',
      org: 'ISO 27001 / ISO 20000-1',
      customLogo: (
        <div className="w-full h-24 flex items-center justify-center p-2">
          <img
            src="https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/48/png-transparent-iso-hd-logo.svg"
            alt="ISO 27001 / ISO 20000-1"
            className="max-w-full max-h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      ),
    },
    {
      id: 'award-4',
      title: 'Cybersecurity License',
      org: 'Ministry of Information & Communications No. 121/GP-BTTTT',
      customLogo: (
        <div className="w-full h-24 flex items-center justify-center p-2">
          <img
            src="https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/48/634t435.svg"
            alt="Ministry of Information & Communications License No. 121/GP-BTTTT"
            className="max-w-full max-h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      ),
    },
    {
      id: 'award-5',
      title: 'Gartner',
      org: 'Gartner Research Recognized Vendor',
      customLogo: (
        <div className="w-full h-24 flex items-center justify-center p-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/Gartner_logo.svg"
            alt="Gartner Logo"
            className="max-w-full max-h-12 object-contain dark:invert dark:brightness-200"
            referrerPolicy="no-referrer"
          />
        </div>
      ),
    },
    {
      id: 'award-6',
      title: 'Rapid7',
      org: 'Rapid7 Cybersecurity Strategic Hub',
      customLogo: (
        <div className="w-full h-24 flex items-center justify-center p-3">
          <svg viewBox="0 0 200 60" className="max-w-full max-h-12 object-contain">
            <g transform="skewX(-12)">
              <text x="10" y="44" fontWeight="900" fontSize="38" fill={theme === 'light' ? '#0f172a' : '#f8fafc'} fontFamily="sans-serif" letterSpacing="-1">
                RAPID
              </text>
              <text x="155" y="44" fontWeight="900" fontSize="42" fill="#ea580c" fontFamily="sans-serif">
                7
              </text>
            </g>
          </svg>
        </div>
      ),
    },
    {
      id: 'award-7',
      title: 'ITSCC Certification',
      org: 'Korea Evaluation & Certification Scheme',
      customLogo: (
        <div className="w-full h-24 flex items-center justify-center p-2">
          <svg viewBox="0 0 120 120" className="w-full h-full object-contain">
            {/* Outer ring */}
            <circle cx="60" cy="60" r="50" fill="none" stroke="#0284c7" strokeWidth="4" />
            <circle cx="60" cy="60" r="44" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" />
            {/* Circular text simulation */}
            <path id="circlePath" d="M 20,60 A 40,40 0 1,1 100,60" fill="none" />
            <text fontSize="7.5" fontWeight="bold" fill="#0284c7" fontFamily="sans-serif">
              <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                Korea Evaluation and Certification Scheme
              </textPath>
            </text>
            {/* Inner Globe Grid */}
            <circle cx="60" cy="60" r="26" fill="none" stroke="#0284c7" strokeWidth="1.5" />
            <ellipse cx="60" cy="60" rx="26" ry="12" fill="none" stroke="#0284c7" strokeWidth="1" />
            <line x1="60" y1="34" x2="60" y2="86" stroke="#0284c7" strokeWidth="1" />
            {/* Checkmark */}
            <path d="M 46,60 L 56,70 L 76,48" fill="none" stroke="#f97316" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* ITSCC Text */}
            <rect x="35" y="86" width="50" height="16" fill="#ffffff" rx="2" stroke="#0284c7" strokeWidth="1" />
            <text x="60" y="98" textAnchor="middle" fontWeight="900" fontSize="11" fill="#0284c7" fontFamily="sans-serif">
              ITSCC
            </text>
          </svg>
        </div>
      ),
    },
    {
      id: 'award-8',
      title: 'Vietnam Digital Awards',
      org: 'VDCA Digital Transformation Award',
      customLogo: (
        <div className="w-full h-24 flex items-center justify-center p-2">
          <svg viewBox="0 0 200 80" className="w-full h-full object-contain">
            <text x="10" y="32" fontWeight="900" fontSize="16" fill="#003884" fontFamily="sans-serif">
              VIETNAM
            </text>
            <path d="M 92,10 L 120,10 C 138,10 148,22 148,40 C 148,58 138,70 120,70 L 92,70 Z M 108,24 L 108,56 L 118,56 C 128,56 133,48 133,40 C 133,32 128,24 118,24 Z" fill="#e31e24" />
            <text x="150" y="32" fontWeight="900" fontSize="14" fill="#e31e24" fontFamily="sans-serif">
              IGITAL
            </text>
            <text x="150" y="52" fontWeight="900" fontSize="14" fill="#e31e24" fontFamily="sans-serif">
              AWARDS
            </text>
            <rect x="10" y="72" width="180" height="3" fill="#e31e24" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <section className={`py-16 border-t ${
      theme === 'light' ? 'bg-neutral-100/60 border-neutral-200' : 'bg-[#121517] border-neutral-800'
    }`} id="insights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card Wrapper matching screenshot structure */}
        <div className={`rounded-2xl border shadow-sm overflow-hidden ${
          theme === 'light' 
            ? 'bg-white border-neutral-200/90' 
            : 'bg-[#161a1d] border-neutral-800'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left side: Heading & Description */}
            <div className={`lg:col-span-4 p-8 lg:p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r ${
              theme === 'light' ? 'border-neutral-200/90 bg-white' : 'border-neutral-800 bg-[#161a1d]'
            }`}>
              <h2 className={`text-2xl sm:text-3xl font-sans font-extrabold tracking-tight leading-tight ${
                theme === 'light' ? 'text-neutral-900' : 'text-neutral-50'
              }`}>
                Awards &amp; Prestigious Accreditations
              </h2>

              <p className={`text-xs sm:text-sm mt-4 leading-relaxed font-normal ${
                theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
              }`}>
                V-TECH HUB is honored to receive domestic and international awards and certifications, affirming its position in digital infrastructure, data transmission, and high-performance cybersecurity.
              </p>

              <div className="mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center gap-3 text-xs font-bold text-[#e31e24]">
                <CheckCircle2 className="w-4 h-4 text-[#e31e24]" />
                <span>100% Compliant with International Standards &amp; Local Laws</span>
              </div>
            </div>

            {/* Right side: 8-Item Grid with clean borders matching the screenshot */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4">
              {awardsList.map((item, idx) => (
                <motion.div
                  key={item.id}
                  whileHover={{ backgroundColor: theme === 'light' ? 'rgba(0,0,0,0.02)' : 'rgba(255,255,255,0.02)' }}
                  className={`p-6 flex flex-col items-center justify-center text-center transition-all min-h-[160px] border-b border-r last:border-r-0 ${
                    theme === 'light' ? 'border-neutral-200/90' : 'border-neutral-800/90'
                  }`}
                  id={`award-grid-item-${idx}`}
                >
                  {item.customLogo}
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

