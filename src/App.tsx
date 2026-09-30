import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyAlliance from './components/WhyAlliance';
import IndustrySolutions from './components/IndustrySolutions';
import Partners from './components/Partners';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import IndustryDetailView from './components/IndustryDetailView';
import PartnerDetailView from './components/PartnerDetailView';
import SolutionDetailModal from './components/SolutionDetailModal';
import SolutionPageView from './components/SolutionPageView';
import { MeetVTechHubView } from './components/MeetVTechHubView';
import { SolutionItem, getAllSolutionsList } from './data/solutionsCatalog';
import { Theme } from './types';
import { Language } from './translations';

type ViewMode = 'home' | 'industry-solutions' | 'partners' | 'solution-detail' | 'meet-vtech-hub';

export default function App() {
  const [theme, setTheme] = useState<Theme>('light');
  const [lang, setLang] = useState<Language>('EN');
  
  const [activeSection, setActiveSection] = useState('why');
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [meetHubTab, setMeetHubTab] = useState<'about-us' | 'leadership'>('about-us');
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(() => {
    const list = getAllSolutionsList();
    return list.find(item => item.id === 'ai-legal-compliance') || list[0] || null;
  });
  const [isSolutionModalOpen, setIsSolutionModalOpen] = useState(false);
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('bfsi');

  // Sync theme with localstorage and document class
  useEffect(() => {
    localStorage.setItem('vnetwork_theme', theme);
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Handle active section scrolling detection using IntersectionObserver
  useEffect(() => {
    if (currentView !== 'home') return;

    const sections = ['why', 'solutions'];
    const observers = sections.map((secId) => {
      const el = document.getElementById(secId);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(secId);
          }
        },
        { threshold: 0.25 }
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, [currentView]);

  const handleBecomePartnerScroll = () => {
    setCurrentView('home');
    setTimeout(() => {
      const element = document.getElementById('contact-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleExploreSolutionsScroll = () => {
    setCurrentView('home');
    setTimeout(() => {
      const element = document.getElementById('solutions');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleRequestConsultationScroll = (solutionTitle?: string) => {
    setTimeout(() => {
      const element = document.getElementById('contact-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleMeetVTechHubSelect = (tab: 'about-us' | 'leadership' = 'about-us') => {
    setMeetHubTab(tab);
    setCurrentView('meet-vtech-hub');
    setActiveSection('meet-vtech-hub');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavSelect = (sectionId: string) => {
    if (sectionId === 'meet-vtech-hub' || sectionId === 'about-us' || sectionId === 'leadership') {
      handleMeetVTechHubSelect(sectionId === 'leadership' ? 'leadership' : 'about-us');
      return;
    }
    if (sectionId === 'solutions-detail') {
      setCurrentView('industry-solutions');
      setActiveSection('solutions');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (sectionId === 'partners-detail') {
      setCurrentView('partners');
      setActiveSection('partners-detail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (sectionId === 'solutions') {
      setCurrentView('home');
      setActiveSection('solutions');
      setTimeout(() => {
        const el = document.getElementById('solutions');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    setActiveSection(sectionId);
    setCurrentView('home');
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const handleOpenSolutionModal = (sol: SolutionItem) => {
    setSelectedSolution(sol);
    setCurrentView('solution-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectIndustry = (industryId: string) => {
    setSelectedIndustryId(industryId);
    setCurrentView('industry-solutions');
    setActiveSection('solutions-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleModalRequestConsultation = (solutionTitle: string) => {
    setIsSolutionModalOpen(false);
    handleRequestConsultationScroll(solutionTitle);
  };

  return (
    <div className={`min-h-screen font-sans transition-all duration-300 ${
      theme === 'light' ? 'bg-white text-neutral-800' : 'bg-[#0c0f10] text-neutral-100'
    }`} id="main-container">
      {/* Header Navigation */}
      <Header 
        theme={theme} 
        setTheme={setTheme} 
        lang={lang}
        setLang={setLang}
        activeSection={activeSection}
        setActiveSection={handleNavSelect}
        onBecomePartnerClick={handleBecomePartnerScroll}
        onSelectSolution={handleOpenSolutionModal}
        onSelectIndustry={handleSelectIndustry}
        onNavigateMeetVTechHub={handleMeetVTechHubSelect}
      />

      {/* Solutions Catalog Detail Modal */}
      <SolutionDetailModal
        solution={selectedSolution}
        isOpen={isSolutionModalOpen}
        onClose={() => setIsSolutionModalOpen(false)}
        onSelectSolution={handleOpenSolutionModal}
        onRequestConsultation={handleModalRequestConsultation}
        theme={theme}
      />

      {/* View Controller */}
      <AnimatePresence mode="wait">
        {currentView === 'home' && (
          <motion.main
            key="home-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Hero Banner Section */}
            <Hero 
              theme={theme} 
              lang={lang}
              onExploreSolutionsClick={handleExploreSolutionsScroll}
              onRequestConsultationClick={handleRequestConsultationScroll}
              onBecomePartnerClick={handleBecomePartnerScroll}
            />

            {/* Why V-Tech Hub */}
            <WhyAlliance theme={theme} lang={lang} />

            {/* Industry Solutions Showcase */}
            <IndustrySolutions 
              theme={theme} 
              lang={lang} 
              selectedIndustryId={selectedIndustryId} 
              onSelectIndustry={handleSelectIndustry}
            />

            {/* Interactive Contact & Partner Onboarding form */}
            <ContactForm theme={theme} lang={lang} />
          </motion.main>
        )}

        {currentView === 'industry-solutions' && (
          <motion.main
            key={`solutions-view-${selectedIndustryId}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <IndustryDetailView
              theme={theme}
              lang={lang}
              initialIndustryId={selectedIndustryId}
              onBackToHome={() => {
                setCurrentView('home');
                setActiveSection('solutions');
                setTimeout(() => {
                  const element = document.getElementById('solutions');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
              onRequestConsultation={handleRequestConsultationScroll}
            />
            <ContactForm theme={theme} lang={lang} />
          </motion.main>
        )}

        {currentView === 'partners' && (
          <motion.main
            key="partners-view"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <PartnerDetailView
              theme={theme}
              lang={lang}
              onBackToHome={() => {
                setCurrentView('home');
                setActiveSection('solutions');
              }}
              onRequestConsultation={handleRequestConsultationScroll}
            />
            <ContactForm theme={theme} lang={lang} />
          </motion.main>
        )}

        {currentView === 'solution-detail' && selectedSolution && (
          <motion.main
            key={`solution-detail-view-${selectedSolution.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <SolutionPageView
              solution={selectedSolution}
              theme={theme}
              lang={lang}
              onBackToHome={() => {
                setCurrentView('home');
                setActiveSection('solutions');
              }}
              onSelectSolution={(sol) => {
                setSelectedSolution(sol);
              }}
              onRequestConsultation={(solutionTitle) => {
                handleRequestConsultationScroll(solutionTitle);
              }}
            />
            <ContactForm theme={theme} lang={lang} />
          </motion.main>
        )}

        {currentView === 'meet-vtech-hub' && (
          <motion.main
            key={`meet-vtech-hub-view-${meetHubTab}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <MeetVTechHubView
              theme={theme}
              lang={lang}
              initialTab={meetHubTab}
              onBackToHome={() => {
                setCurrentView('home');
                setActiveSection('solutions');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onRequestConsultation={(topic) => {
                handleRequestConsultationScroll(topic);
              }}
            />
            <ContactForm theme={theme} lang={lang} />
          </motion.main>
        )}
      </AnimatePresence>

      {/* Professional Footer */}
      <Footer theme={theme} lang={lang} setActiveSection={handleNavSelect} />
    </div>
  );
}
