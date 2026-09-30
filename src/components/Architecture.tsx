import React, { useState } from 'react';
import { Shield, Sparkles, Terminal, Activity, CheckCircle, Database, Server, Info, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Theme } from '../types';

interface ArchitectureProps {
  theme: Theme;
}

interface ComponentSpec {
  id: string;
  title: string;
  layer: 'Partner Solutions' | 'V-Infra Infrastructure & Security';
  desc: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export default function Architecture({ theme }: ArchitectureProps) {
  const [selectedComp, setSelectedComp] = useState<string>('waf');

  const specsData: Record<string, ComponentSpec> = {
    // Partner Solutions
    'ai-gov': {
      id: 'ai-gov',
      title: 'AI Governance',
      layer: 'Partner Solutions',
      desc: 'Enforces security policies, mitigates model bias, and guarantees strict compliance with Vietnam data residence regulations for machine learning models.',
      specs: [
        { label: 'Data Residency', value: '100% Domestic storage complying with Decree 13' },
        { label: 'Audit Logging', value: 'Real-time telemetry and LLM model lineage tracking' },
        { label: 'Security Standards', value: 'International-grade information security audits' }
      ]
    },
    'itsm': {
      id: 'itsm',
      title: 'ITSM/ESM',
      layer: 'Partner Solutions',
      desc: 'Enterprise service management system automating IT incident ticketing, routing, and resolution integrated with real-time telemetry.',
      specs: [
        { label: 'Framework Standard', value: 'ITIL v4 architecture compliance' },
        { label: 'Automation', value: 'Automated ticket classification and routing' },
        { label: 'SLA Guarantee', value: '<5 min incident detection and alerting' }
      ]
    },
    'devsecops': {
      id: 'devsecops',
      title: 'DevSecOps',
      layer: 'Partner Solutions',
      desc: 'Integrates automated software security checks, container vulnerability scanning, and static application security testing (SAST) into CI/CD pipelines.',
      specs: [
        { label: 'Pipeline Shielding', value: 'Real-time automated code vulnerability scanning' },
        { label: 'Access Control', value: 'Container image signing and secure verification' },
        { label: 'Threat Reporting', value: 'Vulnerability triage and cybersecurity reporting' }
      ]
    },
    'ent-software': {
      id: 'ent-software',
      title: 'Enterprise Software',
      layer: 'Partner Solutions',
      desc: 'Suite of enterprise management software, ERP integrations, and agile collaboration systems with direct domestic data synchronization.',
      specs: [
        { label: 'Integration Protocols', value: 'REST API, GraphQL and direct database connectors' },
        { label: 'Data Isolation', value: 'Secure multi-tenant data segregation' },
        { label: 'Local Compliance', value: 'Optimized Vietnamese localization and e-invoicing' }
      ]
    },
    // V-Infra Infrastructure & Security
    'vcloud': {
      id: 'vcloud',
      title: 'VCloud & Domestic Data Centers',
      layer: 'V-Infra Infrastructure & Security',
      desc: 'High-performance private and public cloud infrastructure hosted inside Tier-3 international standard Data Centers in Vietnam.',
      specs: [
        { label: 'Physical Security', value: 'Biometric multi-factor authentication, 24/7 CCTV' },
        { label: 'Uptime Commitment', value: '99.99% High Availability SLA' },
        { label: 'Dedicated Hardware', value: 'AMD EPYC enterprise processors & NVMe SSD storage' }
      ]
    },
    'cdn': {
      id: 'cdn',
      title: 'CDN & Smart Routing',
      layer: 'V-Infra Infrastructure & Security',
      desc: 'Ultra-fast content delivery network with intelligent traffic routing, minimizing latency for web applications and media platforms.',
      specs: [
        { label: 'Bandwidth & Capacity', value: 'Supports over 10,000,000 concurrent active users' },
        { label: 'Domestic Latency', value: '<10ms average latency across Vietnam nationwide' },
        { label: 'PoP Edge Clusters', value: 'Direct high-speed interconnects in Hanoi & HCMC' }
      ]
    },
    'compliance': {
      id: 'compliance',
      title: 'Regulatory Compliance & Operations',
      layer: 'V-Infra Infrastructure & Security',
      desc: 'On-site 24/7 specialized operations monitoring team meeting full compliance requirements for Cybersecurity Law and BFSI mandates.',
      specs: [
        { label: 'Data Sovereignty', value: '100% Data hosted and secured within Vietnam' },
        { label: 'Tech Support', value: 'Bilingual (Vietnamese / English) Level-3 engineers' },
        { label: 'Audit Reports', value: 'Periodic Decree 13 compliance audit reports' }
      ]
    },
    'waf': {
      id: 'waf',
      title: 'WAF · Anti-DDoS · API Security',
      layer: 'V-Infra Infrastructure & Security',
      desc: 'Multi-layered defense system mitigating Layer 3/4/7 DDoS attacks and protecting web applications and APIs via intelligent firewall rules.',
      specs: [
        { label: 'Automated DDoS Scrubbing', value: 'Automated large-scale attack traffic filtering' },
        { label: 'WAF Rulesets', value: 'Protection against OWASP Top 10 vulnerabilities' },
        { label: 'API Security', value: 'JSON schema validation and rate limiting' }
      ]
    },
    'soc': {
      id: 'soc',
      title: '24/7 SOC Center & Security Email',
      layer: 'V-Infra Infrastructure & Security',
      desc: '24/7 SOC protecting enterprise email flows against phishing, malware, spear-phishing, and impersonation attacks.',
      specs: [
        { label: 'Anti-Phishing', value: 'AI behavioral heuristics and SPF/DKIM verification' },
        { label: 'Malware Sandboxing', value: 'Isolated sandbox execution and dynamic analysis' },
        { label: 'Incident Response', value: '24/7 On-call SOC incident mitigation team' }
      ]
    },
    'siem': {
      id: 'siem',
      title: 'SIEM & Zero Trust Control',
      layer: 'V-Infra Infrastructure & Security',
      desc: 'Centralized SIEM security event management coupled with a Zero Trust access control model evaluating real-time contextual posture.',
      specs: [
        { label: 'Secure Authentication', value: 'MFA multi-factor authentication & SAML SSO' },
        { label: 'Log Analytics', value: 'Centralized security log correlation engine' },
        { label: 'Session Control', value: 'Continuous token validation and health checks' }
      ]
    }
  };

  const RedChevron = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#e31e24] fill-none stroke-current mx-auto mb-2" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 9 12 17 20 9" />
    </svg>
  );

  return (
    <section className={`py-24 transition-colors relative overflow-hidden ${
      theme === 'light' ? 'bg-neutral-50' : 'bg-[#0f1112]'
    }`} id="architecture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold tracking-tight mb-4 ${
            theme === 'light' ? 'text-neutral-900' : 'text-neutral-50'
          }`}>
            Hub Solution Architecture
          </h2>
          <p className={`text-base sm:text-lg max-w-3xl mx-auto leading-relaxed ${
            theme === 'light' ? 'text-[#333333]' : 'text-neutral-400'
          }`}>
            All solutions in the V-TECH HUB ecosystem run on a robust digital infrastructure and cybersecurity foundation—engineered for high scalability, performance, and legal compliance in Vietnam.
          </p>
        </div>

        {/* 3-Layer Interactive Pyramid Design */}
        <div className="max-w-5xl mx-auto space-y-4 mb-16">
          
          {/* LAYER 1: BUSINESS / END USER (Triangle) */}
          <div className="relative w-full max-w-[280px] mx-auto group">
            <div className={`relative aspect-[1.8/1] flex items-end justify-center pb-6 z-10 cursor-pointer`}>
              {/* Scalable SVG Triangle with stroke and theme-aware fill */}
              <svg className="absolute inset-0 w-full h-full transition-all duration-300 group-hover:scale-[1.02]" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon 
                  points="50,5 98,95 2,95" 
                  className={`transition-colors duration-300 ${
                    theme === 'light' 
                      ? 'fill-white stroke-[#e31e24] hover:fill-red-50/25' 
                      : 'fill-[#141819] stroke-[#e31e24] hover:fill-red-950/10'
                  }`}
                  strokeWidth="2" 
                />
              </svg>
              
              {/* Content overlay */}
              <div className="relative z-20 text-center select-none pointer-events-none">
                <span className="text-[10px] uppercase font-bold text-neutral-400 dark:text-neutral-500 block mb-1 font-mono tracking-wider">Application Layer</span>
                <span className="text-sm font-extrabold text-[#e31e24] tracking-wider block">
                  ENTERPRISE / END USERS
                </span>
              </div>
            </div>

            {/* Connecting Dashed Guidelines to outline pyramid outer boundaries */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[550px] pointer-events-none hidden lg:block z-0 opacity-25">
              <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="none">
                <line x1="500" y1="10" x2="35" y2="480" stroke="#e31e24" strokeWidth="2" strokeDasharray="6 6" />
                <line x1="500" y1="10" x2="965" y2="480" stroke="#e31e24" strokeWidth="2" strokeDasharray="6 6" />
              </svg>
            </div>
          </div>

          {/* Red Connector Arrow 1 */}
          <div className="flex justify-center relative z-10">
            <motion.div 
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="p-1 rounded bg-red-500/5 border border-red-500/10"
            >
              <svg className="w-6 h-6 text-[#e31e24] fill-current" viewBox="0 0 24 24">
                <path d="M11 4h2v10h4l-5 6-5-6h4V4z" />
              </svg>
            </motion.div>
          </div>

          {/* LAYER 2: PARTNER SOLUTIONS (Medium Trapezoid) */}
          <div className="relative w-full max-w-[700px] mx-auto">
            <div className={`relative rounded-xl overflow-hidden py-6 z-10`}>
              {/* Trapezoid background SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon 
                  points="14,4 86,4 98,96 2,96" 
                  className={theme === 'light' ? 'fill-white stroke-[#e31e24]' : 'fill-[#121617] stroke-[#e31e24]'}
                  strokeWidth="1.5" 
                />
              </svg>

              {/* Header Title */}
              <div className="relative z-20 text-center mb-6">
                <h3 className="text-sm sm:text-base font-black text-[#e31e24] tracking-widest uppercase">
                  TECH PARTNER SOLUTIONS
                </h3>
              </div>

              {/* 4 Partner sub-components column grid */}
              <div className="relative z-20 grid grid-cols-2 md:grid-cols-4 gap-4 px-6 sm:px-14">
                {[
                  { id: 'ai-gov', label: 'AI Governance' },
                  { id: 'itsm', label: 'ITSM/ESM' },
                  { id: 'devsecops', label: 'DevSecOps' },
                  { id: 'ent-software', label: 'Enterprise Software' }
                ].map((item) => {
                  const isSelected = selectedComp === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedComp(item.id)}
                      className={`p-3.5 rounded-lg border text-center transition-all duration-300 cursor-pointer select-none group ${
                        isSelected 
                          ? 'bg-red-500/10 border-[#e31e24] shadow-md shadow-red-500/5' 
                          : theme === 'light'
                            ? 'bg-neutral-50/50 border-neutral-200/80 hover:border-red-400/50 hover:bg-neutral-50'
                            : 'bg-neutral-900/40 border-neutral-800 hover:border-red-500/40 hover:bg-neutral-900/80'
                      }`}
                      id={`comp-${item.id}`}
                    >
                      <motion.div
                        animate={isSelected ? { y: [0, 2, 0] } : {}}
                        transition={{ repeat: isSelected ? Infinity : 0, duration: 1.5 }}
                      >
                        <RedChevron />
                      </motion.div>
                      <span className={`text-[11px] sm:text-xs font-bold leading-tight block tracking-wide transition-colors ${
                        isSelected 
                          ? 'text-[#e31e24]' 
                          : theme === 'light' ? 'text-neutral-800' : 'text-neutral-200'
                      }`}>
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Red Connector Arrow 2 */}
          <div className="flex justify-center relative z-10">
            <motion.div 
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }}
              className="p-1 rounded bg-red-500/5 border border-red-500/10"
            >
              <svg className="w-6 h-6 text-[#e31e24] fill-current" viewBox="0 0 24 24">
                <path d="M11 4h2v10h4l-5 6-5-6h4V4z" />
              </svg>
            </motion.div>
          </div>

          {/* LAYER 3: V-TECH HUB INFRASTRUCTURE & SECURITY (Wide Trapezoid) */}
          <div className="relative w-full max-w-[960px] mx-auto">
            <div className={`relative rounded-xl overflow-hidden pb-8 pt-4 z-10`}>
              {/* Outer boundary trapezoid background SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon 
                  points="6,4 94,4 99,96 1,96" 
                  className={theme === 'light' ? 'fill-white stroke-[#e31e24]' : 'fill-[#121617] stroke-[#e31e24]'}
                  strokeWidth="1.5" 
                />
              </svg>

              {/* Bold Solid Red Slanted Header Block */}
              <div className="relative z-20 w-[94%] sm:w-[88%] mx-auto h-11 mb-6 mt-1 flex items-center justify-center overflow-hidden">
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <polygon points="3,0 97,0 100,100 0,100" fill="#e31e24" />
                </svg>
                <h3 className="relative z-10 text-xs sm:text-sm md:text-base font-black text-white tracking-widest text-center px-4 uppercase select-none">
                  V-TECH HUB DIGITAL INFRASTRUCTURE &amp; SECURITY
                </h3>
              </div>

              {/* 6 core infrastructure sub-components column grid */}
              <div className="relative z-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 px-4 sm:px-14">
                {[
                  { id: 'vcloud', label: 'VCloud & Data Center' },
                  { id: 'cdn', label: 'CDN & Routing' },
                  { id: 'compliance', label: 'Compliance & Ops' },
                  { id: 'waf', label: 'WAF · Anti-DDoS · API' },
                  { id: 'soc', label: 'SOC 24/7 & Email' },
                  { id: 'siem', label: 'SIEM & Zero Trust' }
                ].map((item) => {
                  const isSelected = selectedComp === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedComp(item.id)}
                      className={`p-3 rounded-lg border text-center transition-all duration-300 cursor-pointer select-none group flex flex-col justify-between ${
                        isSelected 
                          ? 'bg-red-500/10 border-[#e31e24] shadow-md shadow-red-500/5' 
                          : theme === 'light'
                            ? 'bg-neutral-50/50 border-neutral-200/80 hover:border-red-400/50 hover:bg-neutral-50'
                            : 'bg-neutral-900/40 border-neutral-800 hover:border-red-500/40 hover:bg-neutral-900/80'
                      }`}
                      id={`comp-${item.id}`}
                    >
                      <motion.div
                        animate={isSelected ? { y: [0, 2, 0] } : {}}
                        transition={{ repeat: isSelected ? Infinity : 0, duration: 1.5 }}
                      >
                        <RedChevron />
                      </motion.div>
                      <span className={`text-[10px] sm:text-[11px] font-bold leading-tight block tracking-wide transition-colors line-clamp-3 ${
                        isSelected 
                          ? 'text-[#e31e24]' 
                          : theme === 'light' ? 'text-neutral-800' : 'text-neutral-200'
                      }`}>
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Live Interactive Node Technical Inspector Block */}
        <div className="max-w-4xl mx-auto">
          <div className={`p-6 sm:p-8 rounded-2xl border ${
            theme === 'light'
              ? 'bg-white border-neutral-200 shadow-xl shadow-neutral-100'
              : 'bg-[#111415] border-neutral-800 shadow-2xl'
          }`} id="diagnostic-center">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b pb-6 dark:border-neutral-800 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-red-500/10 text-[#e31e24]">
                  <Terminal className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase text-neutral-400 dark:text-neutral-500 tracking-widest font-mono block">Component Inspector</span>
                  <h4 className={`text-base sm:text-lg font-extrabold ${theme === 'light' ? 'text-neutral-900' : 'text-neutral-50'}`}>
                    Active Node: <span className="text-[#e31e24]">{specsData[selectedComp]?.title || 'Select a node'}</span>
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>INTEGRATION STATUS: ACTIVE &amp; OPERATIONAL</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {specsData[selectedComp] ? (
                <motion.div
                  key={selectedComp}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8"
                >
                  {/* Left Column: Description */}
                  <div className="md:col-span-7 space-y-4">
                    <div>
                      <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block mb-1 font-mono">
                        Layer Classification
                      </span>
                      <span className={`text-xs font-extrabold uppercase px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800/80 ${
                        theme === 'light' ? 'text-neutral-700' : 'text-neutral-300'
                      }`}>
                        {specsData[selectedComp].layer}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block font-mono">
                        Technical Overview
                      </span>
                      <p className={`text-sm leading-relaxed ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-300'}`}>
                        {specsData[selectedComp].desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/5 border border-red-500/10 text-[11px] text-neutral-500 dark:text-neutral-400 font-medium">
                      <Info className="w-4 h-4 text-[#e31e24] shrink-0" />
                      <span>This component interconnects directly with V-TECH HUB core routing gateways in Tier-3 domestic Data Centers.</span>
                    </div>
                  </div>

                  {/* Right Column: Key Technical Parameters */}
                  <div className="md:col-span-5 space-y-4">
                    <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block font-mono">
                      Telemetry &amp; SLA Commitment
                    </span>
                    
                    <div className="space-y-3">
                      {specsData[selectedComp].specs.map((spec, idx) => (
                        <div 
                          key={idx} 
                          className={`p-3.5 rounded-xl border flex flex-col justify-between gap-1 transition-colors ${
                            theme === 'light'
                              ? 'bg-neutral-50 border-neutral-100 hover:bg-neutral-100/50'
                              : 'bg-neutral-900/60 border-neutral-800/60 hover:bg-neutral-900'
                          }`}
                        >
                          <div className="flex items-center gap-1.5 text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider font-mono">
                            <Activity className="w-3 h-3 text-[#e31e24]" />
                            {spec.label}
                          </div>
                          <span className={`text-xs font-bold ${
                            theme === 'light' ? 'text-neutral-800' : 'text-neutral-100'
                          }`}>
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="text-center py-10 text-neutral-400 text-sm flex flex-col items-center gap-2">
                  <AlertCircle className="w-8 h-8 text-[#e31e24] opacity-40 animate-pulse" />
                  <span>Select any component node from the pyramid diagram above to inspect technical specifications.</span>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
