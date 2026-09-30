export interface IndustryMenuItem {
  id: string;
  titleVI: string;
  titleEN: string;
  tagVI: string;
  tagEN: string;
  descVI: string;
  descEN: string;
  iconName: 'landmark' | 'shield' | 'factory' | 'truck' | 'heart' | 'graduation' | 'shopping' | 'tv';
}

export const INDUSTRY_MENU_ITEMS: IndustryMenuItem[] = [
  {
    id: 'bfsi',
    titleVI: 'Tài chính, Ngân hàng & Bảo hiểm',
    titleEN: 'Banking, Financial Services & Insurance (BFSI)',
    tagVI: 'Tài chính - Ngân hàng',
    tagEN: 'BFSI',
    descVI: 'VCLOUD & Bảo mật Email, AI Pháp lý & Tuân thủ, DLP và An ninh CSDL ngân hàng.',
    descEN: 'VCLOUD & Email Security, AI Legal & Compliance, DLP and core banking database security.',
    iconName: 'landmark'
  },
  {
    id: 'government',
    titleVI: 'Chính phủ & Khối Công',
    titleEN: 'Government & Public Sector',
    tagVI: 'Khối Công',
    tagEN: 'Public Sector',
    descVI: 'VCLOUD & Bảo mật Email, DLP bảo vệ dữ liệu công dân và an ninh cơ sở dữ liệu công.',
    descEN: 'VCLOUD & Email Security, government DLP for citizen privacy & public database security.',
    iconName: 'shield'
  },
  {
    id: 'manufacturing',
    titleVI: 'Sản xuất & Chế tạo',
    titleEN: 'Manufacturing',
    tagVI: 'Sản xuất Thông minh',
    tagEN: 'Smart Factory',
    descVI: 'Mạng CDN & Bảo mật Email, DLP bảo vệ tài sản trí tuệ & bản vẽ, an ninh CSDL ERP/MES.',
    descEN: 'CDN & Email security, manufacturing DLP for intellectual property & ERP database defense.',
    iconName: 'factory'
  },
  {
    id: 'logistics',
    titleVI: 'Hậu cần & Vận tải Chuỗi Cung ứng',
    titleEN: 'Logistics',
    tagVI: 'Chuỗi Cung ứng',
    tagEN: 'Logistics',
    descVI: 'Đám mây nội địa, Multi-CDN, bảo mật WAAP & API, an toàn email và hợp nhất dữ liệu CRM.',
    descEN: 'Domestic Cloud, Multi-CDN, WAAP & API security, email security & CRM data unification for modern supply chains.',
    iconName: 'truck'
  },
  {
    id: 'healthcare',
    titleVI: 'Y tế & Chăm sóc Sức khỏe',
    titleEN: 'Healthcare',
    tagVI: 'Y tế & Sức khỏe',
    tagEN: 'Healthcare',
    descVI: 'Hạ tầng Cloud bảo mật, kiểm soát CSDL bệnh viện, DLP chuẩn Nghị định 13 & Trợ lý AI BHYT.',
    descEN: 'EMR database access governance, patient data privacy & health insurance AI.',
    iconName: 'heart'
  },
  {
    id: 'education',
    titleVI: 'Giáo dục & Đào tạo',
    titleEN: 'Education',
    tagVI: 'Giáo dục & Đào tạo',
    tagEN: 'Education',
    descVI: 'Lưu trữ Đám mây & CDN học liệu, AI CRM tuyển sinh đa kênh và DLP bảo vệ dữ liệu học thuật.',
    descEN: 'E-learning video CDN, high-concurrency exam cloud & student PII data protection.',
    iconName: 'graduation'
  },
  {
    id: 'retail',
    titleVI: 'Thương mại Điện tử & Bán lẻ',
    titleEN: 'Retail & E-Commerce',
    tagVI: 'Thương mại Đa kênh',
    tagEN: 'Omnichannel',
    descVI: 'Multi-CDN tốc độ cao, Bảo mật Web, Trợ lý AI Bán hàng và An toàn Dữ liệu.',
    descEN: 'High-speed Multi-CDN, Web Security, AI Sales Agent, and Data Security.',
    iconName: 'shopping'
  },
  {
    id: 'media',
    titleVI: 'Truyền thông & Nội dung Số',
    titleEN: 'Media & Digital Content',
    tagVI: 'Nội dung Số',
    tagEN: 'OTT & Broadcast',
    descVI: 'Multi-CDN & Bảo mật Web/App, Social Listening phân tích cảm xúc và DLP chống lộ bản quyền.',
    descEN: 'Ultra low-latency 4K/8K multi-CDN, DRM shield & broadcast DDoS mitigation.',
    iconName: 'tv'
  }
];
