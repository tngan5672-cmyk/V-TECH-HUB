import React from 'react';
import { Phone, Mail, Globe, MapPin, Youtube, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Theme } from '../types';
import { Language, translations } from '../translations';

interface FooterProps {
  theme: Theme;
  lang: Language;
  setActiveSection: (sec: string) => void;
}

export default function Footer({ theme, lang, setActiveSection }: FooterProps) {
  const t = translations[lang];

  return (
    <footer className={`py-12 border-t transition-colors ${
      theme === 'light' 
        ? 'bg-neutral-50 text-neutral-800 border-neutral-200' 
        : 'bg-[#090b0c] text-white border-neutral-900'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Header Row with Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Brand Logo: V-TECH (red) HUB (black) */}
          <div 
            onClick={() => {
              setActiveSection('solutions');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 cursor-pointer"
            id="footer-logo"
          >
            <span className="font-sans text-2xl sm:text-3xl font-black tracking-tighter text-[#e31e24]">
              V-TECH
            </span>
            <span className={`font-sans text-2xl sm:text-3xl font-black tracking-tighter uppercase ${
              theme === 'light' ? 'text-black' : 'text-white'
            }`}>
              HUB
            </span>
          </div>

          {/* Social Icons in Red Circles */}
          <div className="flex items-center gap-3">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#e31e24] text-white flex items-center justify-center hover:scale-110 shadow-sm transition-transform"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 fill-white" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#e31e24] text-white flex items-center justify-center hover:scale-110 shadow-sm transition-transform"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 fill-white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#e31e24] text-white flex items-center justify-center hover:scale-110 shadow-sm transition-transform"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 fill-white" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#e31e24] text-white flex items-center justify-center hover:scale-110 shadow-sm transition-transform"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 fill-white" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#e31e24] text-white flex items-center justify-center hover:scale-110 shadow-sm transition-transform"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Contact info bar & Quick Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className={`flex flex-wrap items-center gap-6 text-sm font-bold ${
            theme === 'light' ? 'text-neutral-700' : 'text-neutral-200'
          }`}>
            <a href="tel:+842873068789" className="flex items-center gap-2 hover:text-[#e31e24] transition-colors">
              <Phone className="w-4 h-4 text-[#e31e24]" />
              (+84) 28 7306 8789
            </a>
            <a href="mailto:contact@vnetwork.vn" className="flex items-center gap-2 hover:text-[#e31e24] transition-colors">
              <Mail className="w-4 h-4 text-[#e31e24]" />
              contact@vnetwork.vn
            </a>
            <a href="https://vnetwork.vn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#e31e24] transition-colors">
              <Globe className="w-4 h-4 text-[#e31e24]" />
              vnetwork.vn
            </a>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold text-neutral-600 dark:text-neutral-400">
            <button
              onClick={() => {
                setActiveSection('about-us');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#e31e24] transition-colors cursor-pointer"
            >
              {lang === 'VI' ? 'Về chúng tôi (About Us)' : 'About Us'}
            </button>
            <span>•</span>
            <button
              onClick={() => {
                setActiveSection('leadership');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#e31e24] transition-colors cursor-pointer"
            >
              {lang === 'VI' ? 'Chuyên gia (Expert)' : 'Expert'}
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className={theme === 'light' ? 'border-t border-neutral-200' : 'border-t border-neutral-800'} />

        {/* Bottom company info and address */}
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-end gap-8 text-xs ${
          theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
        }`}>
          
          {/* Left Column */}
          <div className="space-y-1.5">
            <h4 className={`text-sm sm:text-base font-bold tracking-normal ${
              theme === 'light' ? 'text-neutral-800' : 'text-neutral-200'
            }`}>
              Powered by <span className="font-extrabold text-[#e31e24]">VNETWORK</span>
            </h4>
            <p className="text-neutral-500 font-mono text-[11px]">
              &copy; {t.allRightsReserved}
            </p>
          </div>

          {/* Right Column: Addresses & Legal Links */}
          <div className="space-y-3 text-left md:text-right">
            <div className={`space-y-1.5 font-medium ${
              theme === 'light' ? 'text-neutral-700' : 'text-neutral-300'
            }`}>
              <p className="flex items-center md:justify-end gap-2">
                <MapPin className="w-4 h-4 text-[#e31e24] shrink-0" />
                {t.hcmcAddress}
              </p>
              <p className="flex items-center md:justify-end gap-2">
                <MapPin className="w-4 h-4 text-[#e31e24] shrink-0" />
                {t.sgpAddress}
              </p>
            </div>

            <div className="flex items-center md:justify-end gap-6 pt-2 text-[#e31e24] font-bold text-xs">
              <a href="#" className="hover:underline">{t.termsOfService}</a>
              <a href="#" className="hover:underline">{t.privacyPolicy}</a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}

