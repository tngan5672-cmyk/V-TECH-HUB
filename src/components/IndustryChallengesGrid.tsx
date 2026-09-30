import React from 'react';
import { 
  CreditCard, 
  ShieldAlert, 
  Database, 
  MailWarning, 
  FileCheck, 
  Activity, 
  Cpu, 
  Server
} from 'lucide-react';
import { motion } from 'motion/react';
import { Theme } from '../types';
import { Language } from '../translations';

export interface ChallengeItem {
  title: string;
  description: string;
}

interface IndustryChallengesGridProps {
  challenges: ChallengeItem[];
  theme: Theme;
  lang: Language;
}

const getChallengeIcon = (title: string, description: string, index: number) => {
  const t = (title + ' ' + description).toLowerCase();
  if (t.includes('fraud') || t.includes('payment') || t.includes('thanh toán') || t.includes('gian lận')) {
    return <CreditCard className="w-5 h-5" />;
  }
  if (t.includes('leakage') || t.includes('compliance') || t.includes('decree 13') || t.includes('rò rỉ') || t.includes('tuân thủ') || t.includes('pci dss')) {
    return <ShieldAlert className="w-5 h-5" />;
  }
  if (t.includes('core banking') || t.includes('database') || t.includes('uncontrolled access') || t.includes('ngân hàng lõi') || t.includes('csdl')) {
    return <Database className="w-5 h-5" />;
  }
  if (t.includes('email') || t.includes('phishing') || t.includes('ransomware') || t.includes('lừa đảo')) {
    return <MailWarning className="w-5 h-5" />;
  }
  if (t.includes('legal') || t.includes('review') || t.includes('contract') || t.includes('pháp lý') || t.includes('hợp đồng') || t.includes('chậm trễ')) {
    return <FileCheck className="w-5 h-5" />;
  }
  if (t.includes('cart') || t.includes('scraping') || t.includes('voucher') || t.includes('giỏ hàng')) {
    return <Activity className="w-5 h-5" />;
  }
  if (t.includes('iot') || t.includes('factory') || t.includes('nhà máy') || t.includes('sản xuất')) {
    return <Cpu className="w-5 h-5" />;
  }
  if (t.includes('legacy') || t.includes('hệ thống cũ') || t.includes('phân mảnh')) {
    return <Server className="w-5 h-5" />;
  }
  
  const fallbacks = [
    <CreditCard className="w-5 h-5" />,
    <ShieldAlert className="w-5 h-5" />,
    <Database className="w-5 h-5" />,
    <MailWarning className="w-5 h-5" />,
    <FileCheck className="w-5 h-5" />
  ];
  return fallbacks[index % fallbacks.length];
};

const ChallengeCard: React.FC<{
  item: ChallengeItem;
  index: number;
  theme: Theme;
  lang: Language;
}> = ({ item, index, theme }) => {
  const icon = getChallengeIcon(item.title, item.description, index);

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className={`p-6 sm:p-7 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
        theme === 'light'
          ? 'bg-white border-neutral-200 hover:border-[#e31e24]/70 hover:shadow-lg hover:shadow-neutral-200/50'
          : 'bg-[#12161a] border-neutral-800 hover:border-[#e31e24]/70 hover:bg-[#15191e] hover:shadow-lg hover:shadow-black/40'
      }`}
    >
      <div className="space-y-3.5">
        {/* Title with clean unboxed icon */}
        <div className="flex items-start gap-3.5">
          <div className="mt-1 text-[#e31e24] shrink-0">
            {icon}
          </div>
          <h3 className={`text-base sm:text-lg font-bold leading-snug tracking-tight ${
            theme === 'light' ? 'text-neutral-900' : 'text-white'
          }`}>
            {item.title}
          </h3>
        </div>

        {/* Narrative Description */}
        <p className={`text-sm leading-relaxed pl-8.5 ${
          theme === 'light' ? 'text-neutral-600' : 'text-neutral-300'
        }`}>
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default function IndustryChallengesGrid({
  challenges,
  theme,
  lang
}: IndustryChallengesGridProps) {
  if (!challenges || challenges.length === 0) return null;

  // 5 items: Balanced Bento Grid (2 Cards on Top + 3 Cards on Bottom)
  if (challenges.length === 5) {
    return (
      <div className="space-y-6">
        {/* Top Tier: 2 Primary Core Cards (Spacious ~580px width each) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.slice(0, 2).map((item, idx) => (
            <ChallengeCard
              key={idx}
              item={item}
              index={idx}
              theme={theme}
              lang={lang}
            />
          ))}
        </div>

        {/* Bottom Tier: 3 Operational Threat Vectors (~380px width each) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.slice(2, 5).map((item, idx) => (
            <ChallengeCard
              key={idx + 2}
              item={item}
              index={idx + 2}
              theme={theme}
              lang={lang}
            />
          ))}
        </div>
      </div>
    );
  }

  // 4 items: Clean 4-column or 2x2 grid
  if (challenges.length === 4) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {challenges.map((item, idx) => (
          <ChallengeCard
            key={idx}
            item={item}
            index={idx}
            theme={theme}
            lang={lang}
          />
        ))}
      </div>
    );
  }

  // Generic fallback grid
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {challenges.map((item, idx) => (
        <ChallengeCard
          key={idx}
          item={item}
          index={idx}
          theme={theme}
          lang={lang}
        />
      ))}
    </div>
  );
}
