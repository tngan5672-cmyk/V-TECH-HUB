export interface IndustryExpert {
  id: string;
  industryId: string; // 'banking' | 'bfsi' | 'government' | 'healthcare' | 'retail' | 'manufacturing' | 'education' | 'logistics' | 'media'
  industryIds?: string[];
  name: string;
  titleVI: string;
  titleEN: string;
  roleVI: string;
  roleEN: string;
  experienceYears: number;
  avatar: string;
  initials: string;
  bioVI: string;
  bioEN: string;
  credentialsVI: string[];
  credentialsEN: string[];
  specializationsVI: string[];
  specializationsEN: string[];
  highlightMetricVI?: string;
  highlightMetricEN?: string;
  linkedinUrl?: string;
}

export const INDUSTRY_EXPERTS: IndustryExpert[] = [
  // ========================== BFSI / BANKING ==========================
  {
    id: 'exp-datumbridge-1',
    industryId: 'banking',
    industryIds: ['banking', 'retail'],
    name: 'Nguyen Duc Anh',
    titleVI: 'Founder & CEO, DatumBridge',
    titleEN: 'Founder & CEO, DatumBridge',
    roleVI: 'Sáng lập & CEO DatumBridge | Chuyên gia AI & Chuyển đổi Số',
    roleEN: 'Founder & CEO, DatumBridge | AI & Digital Transformation Lead',
    experienceYears: 16,
    avatar: '/images/nguyen-duc-anh.svg',
    initials: 'DA',
    bioVI: 'Ông Đức Anh có hơn 16 năm kinh nghiệm trong lĩnh vực công nghệ, phát triển sản phẩm và chuyển đổi số. Ông dẫn dắt tầm nhìn và chiến lược sản phẩm tại DatumBridge, xây dựng các giải pháp AI thiết thực và có khả năng mở rộng cho các nhu cầu kinh doanh thực tế.',
    bioEN: 'Mr Duc Anh has 16+ years of experience in technology, product development, and digital transformation. He leads product vision and strategy at DatumBridge, building practical and scalable AI solutions for real-world business needs.',
    credentialsVI: [
      'Nhà sáng lập & CEO DatumBridge — Đơn vị nòng cốt liên minh công nghệ V-Tech Hub',
      '16+ năm kinh nghiệm trong lĩnh vực công nghệ, phát triển sản phẩm và chuyển đổi số',
      'Chủ trì phát triển Trợ lý AI Pháp lý & Tuân thủ theo quy định Ngân hàng Nhà nước',
      'Dẫn dắt giải pháp VNETWORK AI Platform ứng dụng trong chuyển đổi số và bán lẻ'
    ],
    credentialsEN: [
      'Founder & CEO, DatumBridge — Core Member of V-Tech Hub Technology Alliance',
      '16+ years of experience in technology, product development, and digital transformation',
      'Architected Legal & Compliance AI Assistants adhering to State Bank of Vietnam regulations',
      'Spearheaded enterprise AI solutions and omnichannel workflows for modern retail'
    ],
    specializationsVI: ['Điều phối AI Doanh nghiệp (AI Orchestration)', 'Trợ lý AI Pháp lý & Tuân thủ (Legal AI)', 'Phát triển Sản phẩm & Chuyển đổi Số', 'Tự động hóa Quy trình Đa tác tử (Multi-Agent)'],
    specializationsEN: ['Enterprise AI Orchestration', 'Legal & Compliance AI Assistants', 'Product Development & Digital Transformation', 'Multi-Agent Workflow Automation'],
    highlightMetricVI: '16+ năm kinh nghiệm & 95% độ chính xác mô hình AI',
    highlightMetricEN: '16+ years experience & 95% domain-specific AI accuracy',
    linkedinUrl: 'https://www.linkedin.com/company/datumbridge'
  },
  {
    id: 'exp-bfsi-1',
    industryId: 'banking',
    name: 'TS. Nguyễn Trọng Nghĩa',
    titleVI: 'Cố vấn Trưởng An ninh Ngân hàng Lõi & CSDL Phân tán',
    titleEN: 'Chief Core Banking Security & Distributed DB Architect',
    roleVI: 'Kiến trúc sư Trưởng Giải pháp BFSI - V-Tech Hub Alliance',
    roleEN: 'Principal BFSI Solutions Architect, V-Tech Hub Alliance',
    experienceYears: 16,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    initials: 'TN',
    bioVI: 'Hơn 16 năm chỉ huy các dự án bảo mật cơ sở dữ liệu giao dịch cốt lõi và kiến trúc phân tán cho các ngân hàng thương mại hàng đầu tại Việt Nam. Chuyên gia đầu ngành về cơ chế phòng hộ đặc quyền DBA, che giấu dữ liệu thời gian thực (Data Masking) và đáp ứng chuẩn PCI-DSS Level 1.',
    bioEN: 'Over 16 years leading mission-critical transactional database security and distributed architectures for tier-1 commercial banks in Vietnam. Foremost authority in privileged access proxying, real-time data masking, and PCI-DSS Level 1 compliance.',
    credentialsVI: [
      'Chứng chỉ Quốc tế: CISSP, CISM, Oracle Certified Master (OCM)',
      'Chủ trì triển khai bảo vệ CSDL Core Banking cho hơn 12 ngân hàng TMCP',
      'Đại diện tham vấn kỹ thuật cho các khung an ninh mạng ngành ngân hàng'
    ],
    credentialsEN: [
      'International Certifications: CISSP, CISM, Oracle Certified Master (OCM)',
      'Led core banking database protection for 12+ commercial banks',
      'Strategic Technical Advisor to national banking infosec initiatives'
    ],
    specializationsVI: ['Bảo mật CSDL Core Banking', 'DBSAFER DB & Proxy Gateway', 'Mã hóa DATACRYPTO', 'PCI-DSS & Nghị định 13'],
    specializationsEN: ['Core Banking DB Security', 'DBSAFER DB & Proxy Gateway', 'DATACRYPTO Column Encryption', 'PCI-DSS & Decree 13'],
    highlightMetricVI: 'Bảo vệ an toàn cho 45M+ tài khoản thanh toán',
    highlightMetricEN: 'Securing 45M+ active retail bank accounts'
  },
  {
    id: 'exp-bfsi-2',
    industryId: 'banking',
    name: 'ThS. Lê Mai Phương',
    titleVI: 'Chuyên gia Trưởng Tuân thủ & Trí tuệ Nhân tạo Pháp chế',
    titleEN: 'Director of Financial Compliance & Legal AI Solutions',
    roleVI: 'Trưởng ban Pháp chế Công nghệ & Phòng chống Rủi ro Gian lận',
    roleEN: 'Head of Legal Tech & Financial Anti-Fraud Solutions',
    experienceYears: 13,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    initials: 'MP',
    bioVI: 'Chuyên gia pháp chế công nghệ và phòng chống gian lận tài chính số. Tiên phong ứng dụng mô hình ngôn ngữ lớn (LLM) và AI Agent vào quy trình rà soát hợp đồng tín dụng phức tạp, rút ngắn 85% thời gian thẩm định tuân thủ quy chế.',
    bioEN: 'Specialist in FinTech compliance, AML operations, and fraud defense. Pioneer in implementing enterprise LLM agents for automated credit agreement review, reducing regulatory validation cycle times by 85%.',
    credentialsVI: [
      'Thạc sĩ Luật Kinh tế Quốc tế & Pháp chế Công nghệ Tài chính',
      'Tác giả bộ khung kiểm soát rủi ro rò rỉ dữ liệu cá nhân theo Nghị định 13',
      'Cố vấn trực tiếp cho các công ty bảo hiểm và định chế phi ngân hàng'
    ],
    credentialsEN: [
      'LL.M. in International Economic Law & FinTech Regulation',
      'Author of enterprise data exfiltration risk frameworks under Decree 13',
      'Advisor to leading insurance groups and non-bank financial institutions'
    ],
    specializationsVI: ['AI Trợ lý Pháp lý & Tuân thủ', 'Chống thất thoát dữ liệu DLP', 'Phát hiện gian lận giao dịch', 'Kiểm toán an ninh thông tin'],
    specializationsEN: ['Legal & Compliance AI Assistants', 'Data Loss Prevention (DLP)', 'Transaction Fraud Analytics', 'Information Security Audit'],
    highlightMetricVI: 'Rút ngắn 85% thời gian rà soát hồ sơ tín dụng',
    highlightMetricEN: '85% faster credit dossier validation'
  },

  // ========================== HEALTHCARE ==========================
  {
    id: 'exp-health-1',
    industryId: 'healthcare',
    name: 'BS. TS. Phan Đình Khoa',
    titleVI: 'Cố vấn Trưởng Chuyển đổi Số Y tế & An toàn Hạ tầng Lâm sàng',
    titleEN: 'Director of Health Informatics & Clinical Cybersecurity',
    roleVI: 'Trưởng ban Giải pháp Công nghệ Y tế & Bệnh viện Thông minh',
    roleEN: 'Lead Healthcare & Smart Hospital Solutions Architect',
    experienceYears: 15,
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop',
    initials: 'PK',
    bioVI: '15 năm tư vấn kiến trúc thông tin y tế, hồ sơ bệnh án điện tử (EMR) và hệ thống HIS cho các bệnh viện hạng đặc biệt và đa khoa tuyến tỉnh. Chuyên gia đầu ngành về thẩm định cấp độ an toàn thông tin theo Nghị định 85 và bảo vệ hệ thống y tế trước mã độc tống tiền.',
    bioEN: '15 years consulting on hospital information systems (HIS), Electronic Medical Records (EMR), and clinical cloud architectures. Expert in Decree 85 infosec classification and hardening healthcare databases against ransomware attacks.',
    credentialsVI: [
      'Bác sĩ Y khoa, Tiến sĩ Tin học Y tế (Health Informatics)',
      'Chủ trì xây dựng hồ sơ an toàn cấp độ 3 & 4 cho 8 bệnh viện lớn',
      'Chuyên gia cố vấn Ban chỉ đạo Chuyển đổi số Y tế'
    ],
    credentialsEN: [
      'M.D., Ph.D. in Health Informatics',
      'Directed Decree 85 Level 3 & 4 security dossiers for 8 major tertiary hospitals',
      'Technical Advisor to National Digital Healthcare Modernization Taskforce'
    ],
    specializationsVI: ['Hồ sơ An toàn Cấp độ Nghị định 85', 'Kiến trúc HIS / EMR / PACS', 'Trợ lý AI Thẩm định BHYT', 'Chống Ransomware CSDL Y khoa'],
    specializationsEN: ['Decree 85 Security Classification', 'HIS / EMR / PACS Architecture', 'Health Insurance AI Assistant', 'Hospital Ransomware Defense'],
    highlightMetricVI: 'Đạt chuẩn cấp độ an toàn cho 8+ bệnh viện lớn',
    highlightMetricEN: 'Certified Decree 85 compliance for 8+ hospitals'
  },
  {
    id: 'exp-health-2',
    industryId: 'healthcare',
    name: 'Kỹ sư Đặng Thanh Tâm',
    titleVI: 'Kiến trúc sư Trưởng Bảo vệ Dữ liệu Bệnh nhân & EMR',
    titleEN: 'Chief Clinical Data Protection & EMR Security Architect',
    roleVI: 'Chuyên gia An ninh Thông tin Dữ liệu Sức khỏe (Healthcare InfoSec)',
    roleEN: 'Senior Healthcare Data Privacy & Infrastructure Specialist',
    experienceYears: 12,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
    initials: 'TT',
    bioVI: 'Chuyên sâu về kiến trúc bảo mật dữ liệu nhạy cảm EMR/PACS, kiểm soát hành vi người dùng trong bệnh viện và phòng ngừa thất thoát hình ảnh chụp chiếu y khoa. Thiết kế thành công cổng AI hỗ trợ y bác sĩ tra cứu quy chế BHYT tức thì.',
    bioEN: 'Specialist in EMR/PACS sensitive data shielding, insider threat mitigation, and automated clinical verification. Architected AI-driven insurance guideline lookup engines embedded directly into clinical stations.',
    credentialsVI: [
      'Chứng chỉ Quốc tế: HCISPP (Healthcare InfoSec), CEH Master',
      'Triển khai FileAuditor & Risk Monitor cho mạng lưới 15+ phòng khám và bệnh viện',
      'Kinh nghiệm bảo vệ dữ liệu 5 triệu hồ sơ bệnh nhân theo Nghị định 13'
    ],
    credentialsEN: [
      'Certified Healthcare Information Security and Privacy Practitioner (HCISPP), CEH',
      'Deployed FileAuditor & Risk Monitor across 15+ clinics and hospitals',
      'Secured 5M+ patient medical histories in strict compliance with Decree 13'
    ],
    specializationsVI: ['Tuân thủ Nghị định 13 Y tế', 'DLP Hồ sơ Bệnh án EMR', 'WAAP Cổng Đặt lịch Khám', 'Bảo mật Email Y tế & Bác sĩ'],
    specializationsEN: ['Healthcare Decree 13 Compliance', 'EMR Data Loss Prevention', 'Booking Portal WAAP Protection', 'AI Healthcare Phishing Defense'],
    highlightMetricVI: 'Bảo vệ an toàn 5M+ hồ sơ bệnh án điện tử',
    highlightMetricEN: 'Safeguarding 5M+ electronic health records'
  },

  // ========================== GOVERNMENT ==========================
  {
    id: 'exp-gov-1',
    industryId: 'government',
    name: 'Trần Quốc Huy',
    titleVI: 'Cố vấn Cấp cao An toàn Hạ tầng Trọng yếu & Khối Chính phủ',
    titleEN: 'Senior Critical Infrastructure & GovTech Cybersecurity Advisor',
    roleVI: 'Giám đốc Giải pháp An ninh Hạ tầng Công - V-Tech Hub',
    roleEN: 'Director of Public Sector Infrastructure Security',
    experienceYears: 18,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    initials: 'QH',
    bioVI: '18 năm kinh nghiệm thực chiến trong công tác bảo vệ không gian mạng công quyền, hệ thống cơ sở dữ liệu quốc gia và trung tâm dữ liệu chính phủ điện tử. Chuyên gia hàng đầu về xây dựng phương án đảm bảo an toàn thông tin theo cấp độ (Nghị định 85).',
    bioEN: '18 years leading public-sector cyber defense, national registry database hardening, and e-government sovereign data centers. Recognized authority in Decree 85 compliance workflows and incident response containment.',
    credentialsVI: [
      'Chứng chỉ Quốc tế: CISSP, CISM, CRISC (Risk & Information Systems Control)',
      'Nguyên cố vấn an toàn thông tin cho nhiều cổng dịch vụ công cấp tỉnh/thành',
      'Chủ trì kiểm tra đánh giá an toàn thông tin hơn 30 đơn vị hành chính sự nghiệp'
    ],
    credentialsEN: [
      'Certified: CISSP, CISM, CRISC (Risk and Information Systems Control)',
      'Former infosec consultant to provincial public service portals',
      'Conducted security audits for 30+ public administration agencies'
    ],
    specializationsVI: ['Hạ tầng Sovereign VCloud', 'Thẩm định Cấp độ Nghị định 85', 'Phòng thủ APT & Tấn công Mạng', 'Bảo mật Cổng Dịch vụ Công'],
    specializationsEN: ['Sovereign VCloud Infrastructure', 'Decree 85 Assessment Protocol', 'APT Defense & Threat Hunting', 'Citizen Portal Defense'],
    highlightMetricVI: '30+ đơn vị công vụ được chuẩn hóa an ninh',
    highlightMetricEN: '30+ public agency infrastructures hardened'
  },
  {
    id: 'exp-gov-2',
    industryId: 'government',
    name: 'Vũ Minh Đức',
    titleVI: 'Kiến trúc sư Trưởng Kiểm toán CSDL & Chống Lộ lọt Dữ liệu Công',
    titleEN: 'Principal Public Sector Data Loss & Database Audit Architect',
    roleVI: 'Chuyên gia Cao cấp Giám sát Hành vi Nội bộ & Kiểm toán Hạ tầng',
    roleEN: 'Senior Specialist in Insider Threat Monitoring & Database Auditing',
    experienceYears: 14,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    initials: 'MD',
    bioVI: 'Chuyên gia giải pháp tối ưu hóa nhật ký kiểm toán (Smart Audit Logs) nhằm loại bỏ tình trạng tràn dung lượng ổ đĩa tại các trung tâm dữ liệu nhà nước. Chỉ đạo triển khai giải pháp phân loại văn bản mật và ngăn ngừa sao chép hồ sơ định danh trái phép.',
    bioEN: 'Pioneered proactive query-filtering audit frameworks that eradicate audit log bloat across government data centers. Expert in classified document tracking, civil registry access governance, and strict anti-exfiltration controls.',
    credentialsVI: [
      'Chứng chỉ Quốc tế: CISA (Certified Information Systems Auditor), CEH',
      'Tối ưu hóa kiến trúc kiểm toán cho hệ thống lưu trữ hơn 20 tỷ bản ghi',
      'Chuyên gia đào tạo nâng cao nhận thức an toàn thông tin khối công'
    ],
    credentialsEN: [
      'Certified: CISA (Certified Information Systems Auditor), CEH',
      'Optimized database audit architectures storing over 20 billion records',
      'Keynote speaker on public sector insider threat containment'
    ],
    specializationsVI: ['Tinh gọn Nhật ký Kiểm toán DBSAFER', 'Chống Rò rỉ Văn bản Mật (FileAuditor)', 'Risk Monitor Hành vi Công chức', 'Lọc Email Công vụ'],
    specializationsEN: ['DBSAFER Proactive Query Auditing', 'FileAuditor Classified Asset Control', 'Risk Monitor Civil Servant Telemetry', 'Government Secure Email Gateway'],
    highlightMetricVI: 'Loại bỏ 90% nhật ký rác không cần thiết',
    highlightMetricEN: 'Eliminated 90% redundant audit log clutter'
  },

  // ========================== RETAIL & E-COMMERCE ==========================
  {
    id: 'exp-retail-1',
    industryId: 'retail',
    name: 'Hoàng Gia Bảo',
    titleVI: 'Kiến trúc sư Trưởng Hạ tầng Bán lẻ Tải cao & Multi-CDN',
    titleEN: 'Chief Retail Scalability, WAAP & Edge Infrastructure Architect',
    roleVI: 'Giám đốc Giải pháp TMĐT & Trải nghiệm Số Tốc độ Cao',
    roleEN: 'Director of High-Concurrency E-Commerce Solutions',
    experienceYears: 14,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop',
    initials: 'GB',
    bioVI: '14 năm kinh nghiệm thiết kế hạ tầng chịu tải cho các chiến dịch Mega Sale (11.11, 12.12, Tết). Chuyên gia hàng đầu về cân bằng tải Multi-CDN, tường lửa ứng dụng web WAAP thế hệ mới và triệt tiêu botnet thu thập thông tin giá độc hại.',
    bioEN: '14 years architecting resilient, zero-downtime edge infrastructures for Southeast Asia Mega Sale seasons. Foremost specialist in Multi-CDN smart routing, next-generation WAAP rulesets, and aggressive scraping bot mitigation.',
    credentialsVI: [
      'Tối ưu hóa thành công cho hệ thống xử lý 250,000+ người dùng đồng thời',
      'Giữ vững thời gian uptime 99.99% qua 30+ mùa lễ hội mua sắm lớn',
      'Chứng chỉ AWS Solution Architect Professional, Multi-CDN Specialist'
    ],
    credentialsEN: [
      'Scaled e-commerce platforms sustaining 250,000+ peak concurrent users',
      'Maintained 99.99% uptime across 30+ major shopping festival campaigns',
      'AWS Solutions Architect Professional, Multi-CDN Network Authority'
    ],
    specializationsVI: ['Multi-CDN Toàn cầu & Cân bằng Tải', 'WAAP Chống DDoS Tầng 7', 'Chặn Botnet Cào Dữ liệu', 'Tăng tốc Giỏ hàng & Thanh toán'],
    specializationsEN: ['Global Multi-CDN & Smart Traffic Routing', 'Layer 7 WAAP DDoS Defense', 'Commercial Anti-Scraping Bot Engine', 'Checkout Latency Acceleration'],
    highlightMetricVI: 'Chịu tải 250K+ CCU không giật lag',
    highlightMetricEN: 'Sustained 250K+ peak CCU with 0 downtime'
  },
  {
    id: 'exp-retail-2',
    industryId: 'retail',
    name: 'Phạm Quỳnh Nga',
    titleVI: 'Chuyên gia Trưởng Trí tuệ Nhân tạo Bán hàng & An toàn Dữ liệu Khách hàng',
    titleEN: 'Head of Conversational AI & Retail Data Privacy Architecture',
    roleVI: 'Trưởng ban Trợ lý AI Đa kênh & Phòng chống Thất thoát Doanh thu',
    roleEN: 'Lead AI Agent Specialist & Retail Exfiltration Control',
    experienceYears: 11,
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop',
    initials: 'QN',
    bioVI: 'Kiến trúc sư các giải pháp AI Agent đàm thoại thông minh trên Website, Zalo, Facebook, hỗ trợ tư vấn và chốt đơn 24/7. Đồng thời thiết lập cơ chế giám sát rò rỉ danh sách khách hàng VIP và chính sách giá đại lý ra bên ngoài.',
    bioEN: 'Architects conversational omnichannel AI sales agents operating 24/7 across Web, Zalo, and Messenger. Combines customer acquisition engines with strict DLP telemetry to stop wholesale price leaks and VIP customer poaching.',
    credentialsVI: [
      'Chủ trì tích hợp AI Agent phục vụ hơn 2 triệu lượt khách hàng mỗi tháng',
      'Tăng tỷ lệ chuyển đổi đơn hàng trung bình từ 18% lên 32%',
      'Cố vấn bảo vệ dữ liệu khách hàng theo Nghị định 13 cho chuỗi 400 cửa hàng'
    ],
    credentialsEN: [
      'Deployed conversational AI agents serving 2M+ customer interactions monthly',
      'Elevated average online order conversion rates from 18% to 32%',
      'Guided Decree 13 customer privacy protocols across a 400-store retail chain'
    ],
    specializationsVI: ['Trợ lý AI Bán hàng Đa kênh', 'DLP Bảo vệ Danh sách Khách hàng', 'Che giấu Dữ liệu Thẻ (Data Masking)', 'Bảo mật CSDL Đơn hàng'],
    specializationsEN: ['Omnichannel Conversational Sales AI', 'Customer File Exfiltration Defense', 'Card Data Masking & Tokenization', 'Order DB Granular Access Control'],
    highlightMetricVI: 'Tăng tỷ lệ chốt đơn tự động lên 32%',
    highlightMetricEN: 'Boosted automated conversion to 32%'
  },

  // ========================== MANUFACTURING ==========================
  {
    id: 'exp-mfg-1',
    industryId: 'manufacturing',
    name: 'Đỗ Minh Tuấn',
    titleVI: 'Kiến trúc sư Trưởng An ninh Hạ tầng Công nghiệp & CSDL ERP',
    titleEN: 'Chief Industrial Cybersecurity & ERP Database Architect',
    roleVI: 'Giám đốc Giải pháp Chuyển đổi Số Nhà máy Thông minh (Industry 4.0)',
    roleEN: 'Director of Smart Factory & Industrial SecOps Solutions',
    experienceYears: 17,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    initials: 'MT',
    bioVI: '17 năm thiết kế hạ tầng an toàn cho các tập đoàn sản xuất công nghiệp nặng, dệt may và lắp ráp điện tử FDI. Chuyên gia hàng đầu về cô lập mối đe dọa email lừa đảo, bảo vệ cơ sở dữ liệu SAP/Oracle ERP và duy trì chu kỳ sản xuất liên tục 24/7.',
    bioEN: '17 years designing resilient infrastructures for heavy manufacturing, electronics OEMs, and global apparel factories. Foremost specialist in protecting SAP/Oracle ERP instances, isolating ransomware, and ensuring non-stop plant operations.',
    credentialsVI: [
      'Chứng chỉ Quốc tế: CISSP, GICSP (Global Industrial Cyber Security Professional)',
      'Bảo vệ an toàn cho 15+ tổ hợp nhà máy quy mô 5.000+ công nhân',
      'Kinh nghiệm ngăn chặn các đợt tấn công ransomware mã hóa dây chuyền'
    ],
    credentialsEN: [
      'Certified: CISSP, GICSP (Global Industrial Cyber Security Professional)',
      'Protected 15+ large-scale manufacturing campuses with 5,000+ workforces',
      'Proven track record blocking production-halting ransomware extortion attacks'
    ],
    specializationsVI: ['Bảo vệ CSDL ERP / MES / SAP', 'Chống Ransomware Email Công nghiệp', 'Kiểm toán Đặc quyền DBSAFER', 'Hạ tầng Mạng Nhà máy'],
    specializationsEN: ['ERP / MES / SAP Database Hardening', 'Industrial Ransomware Email Filtering', 'DBSAFER Privileged Access Proxy', 'OT/IT Factory Network Defense'],
    highlightMetricVI: '100% thời gian hoạt động dây chuyền liên tục',
    highlightMetricEN: 'Zero production halts across 15+ plants'
  },
  {
    id: 'exp-mfg-2',
    industryId: 'manufacturing',
    name: 'Nguyễn Hải Đăng',
    titleVI: 'Chuyên gia Trưởng Bảo vệ Bản quyền Thiết kế & Chuỗi Cung ứng B2B',
    titleEN: 'Lead IP Protection & Supply Chain Portal Security Architect',
    roleVI: 'Trưởng ban Chống Thất thoát Tài sản Trí tuệ (IP DLP)',
    roleEN: 'Head of Industrial Intellectual Property & Trade Secret Protection',
    experienceYears: 13,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
    initials: 'HĐ',
    bioVI: 'Chuyên sâu về giải pháp tự động gán nhãn, mã hóa và ngăn ngừa tuồn bản vẽ kỹ thuật CAD/CAM, công thức chế tạo và báo giá vật tư ra khỏi mạng lưới nhà máy. Bảo vệ cổng thông tin trao đổi dữ liệu B2B với nhà cung cấp toàn cầu.',
    bioEN: 'Specializes in automatic tagging, encryption, and telemetry containment for proprietary CAD/CAM blueprints, chemical formulas, and bill-of-materials pricing. Secures global B2B supplier integration portals against lateral exploits.',
    credentialsVI: [
      'Triển khai FileAuditor & Risk Monitor bảo vệ hơn 200,000 bản vẽ kỹ thuật độc quyền',
      'Chuyên gia thẩm định an toàn cổng đối tác cung ứng B2B cho các tập đoàn đa quốc gia',
      'Chứng chỉ quốc tế về Quản trị Tài sản Thông tin ISO 27001 Lead Implementer'
    ],
    credentialsEN: [
      'Deployed FileAuditor & Risk Monitor securing 200,000+ proprietary CAD schematics',
      'Assessed B2B supplier APIs and integration gateways for global manufacturers',
      'ISO 27001 Lead Implementer certified for enterprise asset protection'
    ],
    specializationsVI: ['Bảo vệ Bản quyền File CAD (FileAuditor)', 'Risk Monitor Chống Tuồn Tài liệu Mật', 'WAAP Cổng Đối tác Cung ứng', 'Phân loại Dữ liệu Sản xuất'],
    specializationsEN: ['CAD Blueprint FileAuditor Shielding', 'Risk Monitor Insider Exfiltration Defense', 'B2B Vendor Portal WAAP Hardening', 'Manufacturing IP Classification'],
    highlightMetricVI: 'Bảo vệ 200K+ bản vẽ thiết kế độc quyền',
    highlightMetricEN: '200K+ proprietary CAD blueprints secured'
  },

  // ========================== EDUCATION ==========================
  {
    id: 'exp-edu-1',
    industryId: 'education',
    name: 'TS. Lê Hoàng Nam',
    titleVI: 'Cố vấn Cấp cao Hạ tầng Giáo dục Số & An toàn Học thuật',
    titleEN: 'Senior EdTech Scalability & Academic Data Security Advisor',
    roleVI: 'Trưởng ban Giải pháp Công nghệ Đại học Thông minh',
    roleEN: 'Director of Smart Campus & Academic Systems Architecture',
    experienceYears: 15,
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop',
    initials: 'HN',
    bioVI: '15 năm tư vấn kiến trúc hạ tầng cho các trường đại học quốc gia, học viện và cơ sở giáo dục đại học. Chuyên gia giải quyết triệt để vấn đề sập mạng đăng ký tín chỉ và cổng đào tạo trực tuyến trong các đợt cao điểm sinh viên đăng ký học phần.',
    bioEN: '15 years architecting high-resilience IT infrastructure for national universities, polytechnics, and academic institutions. Renowned authority in eliminating enrollment crash bottlenecks and scaling course registration portals under extreme surges.',
    credentialsVI: [
      'Tiến sĩ Khoa học Máy tính, Giảng viên Thỉnh giảng Kiến trúc Đám mây',
      'Xóa bỏ 100% tình trạng sập cổng đăng ký tín chỉ cho 6 trường đại học lớn',
      'Thiết kế kiến trúc bảo vệ cơ sở dữ liệu học bạ và văn bằng điện tử'
    ],
    credentialsEN: [
      'Ph.D. in Computer Science, Visiting Fellow in Distributed Cloud Architecture',
      'Achieved 100% crash-free registration performance across 6 major universities',
      'Architected tamper-proof digital transcript and diploma registry databases'
    ],
    specializationsVI: ['Chống Sập Cổng Đăng ký Tín chỉ (VCloud + CDN)', 'Bảo mật Cơ sở Dữ liệu Điểm thi (DBSAFER)', 'Tuân thủ Nghị định 13 Giáo dục', 'Hạ tầng LMS & E-Learning'],
    specializationsEN: ['Course Enrollment Scalability (VCloud + CDN)', 'Grade Registry Database Security (DBSAFER)', 'Academic Decree 13 Compliance', 'LMS & Virtual Campus Scalability'],
    highlightMetricVI: 'Xử lý 80,000 sinh viên chọn môn cùng giây',
    highlightMetricEN: 'Handled 80,000 concurrent course enrollments'
  },
  {
    id: 'exp-edu-2',
    industryId: 'education',
    name: 'ThS. Trần Thị Thu Trang',
    titleVI: 'Chuyên gia Trưởng Trí tuệ Nhân tạo Tuyển sinh & Tự động hóa Tương tác',
    titleEN: 'Lead AI Admissions & Campus Automated Engagement Specialist',
    roleVI: 'Trưởng ban Trợ lý AI Tuyển sinh & Tư vấn Học vụ 24/7',
    roleEN: 'Head of Conversational AI for Academic Admissions & Student Services',
    experienceYears: 10,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    initials: 'TT',
    bioVI: 'Chuyên gia xây dựng mô hình AI Agent tư vấn tuyển sinh đa kênh, giải đáp hàng triệu thắc mắc về điểm chuẩn, học bổng và quy chế xét tuyển suốt 24/7. Đồng thời triển khai giải pháp DLP bảo vệ danh sách thí sinh nộp hồ sơ khỏi nguy cơ bị rao bán.',
    bioEN: 'Leads deployment of multi-channel AI Admissions Assistants delivering instant 24/7 guidance on admission criteria, scholarships, and course catalogs. Implements robust student record DLP to prevent candidate list leakage.',
    credentialsVI: [
      'Thạc sĩ Khoa học Dữ liệu & Xử lý Ngôn ngữ Tự nhiên (NLP)',
      'Triển khai bot tuyển sinh tự động tiếp nhận 500,000+ lượt câu hỏi mỗi mùa tuyển sinh',
      'Bảo vệ an toàn thông tin cá nhân và số điện thoại của hơn 1 triệu học sinh'
    ],
    credentialsEN: [
      'M.S. in Data Science & Applied Natural Language Processing (NLP)',
      'Deployed conversational admissions agents serving 500,000+ prospective students per season',
      'Protected personal identity records and contacts of over 1 million candidates'
    ],
    specializationsVI: ['Trợ lý AI Tư vấn Tuyển sinh 24/7', 'Chống Rò rỉ Dữ liệu Thí sinh (DLP)', 'WAAP Cổng Tuyển sinh & Thi Trực tuyến', 'Lọc Email Lừa đảo Học phí'],
    specializationsEN: ['24/7 AI Admissions Consultant', 'Candidate Record Data Loss Prevention', 'Exam & Admissions Portal WAAP', 'Tuition Phishing Email Filter'],
    highlightMetricVI: 'Tự động giải đáp 92% thắc mắc tuyển sinh',
    highlightMetricEN: 'Automated 92% of student admission inquiries'
  },

  // ========================== LOGISTICS & SUPPLY CHAIN ==========================
  {
    id: 'exp-log-1',
    industryId: 'logistics',
    name: 'Kỹ sư Nguyễn Việt Dũng',
    titleVI: 'Kiến trúc sư Trưởng Hạ tầng Logistics & Cổng Tra cứu Vận tải',
    titleEN: 'Chief Logistics Cloud & Transport Telematics Architect',
    roleVI: 'Giám đốc Giải pháp Chuỗi Cung ứng & Định tuyến Vận tải Tải cao',
    roleEN: 'Director of Freight Tracking & Supply Chain Cloud Infrastructure',
    experienceYears: 14,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
    initials: 'VD',
    bioVI: '14 năm kinh nghiệm thiết kế nền tảng số cho các tập đoàn chuyển phát nhanh, cảng biển và chuỗi kho vận đa phương thức. Chuyên gia tối ưu hóa độ trễ tra cứu đơn hàng và bảo vệ cơ sở dữ liệu kho bãi trước các cuộc tấn công khai thác lỗ hổng.',
    bioEN: '14 years designing mission-critical software and cloud infrastructures for express delivery carriers, container ports, and multimodal logistics operators. Expert in real-time tracking performance and database hardening.',
    credentialsVI: [
      'Thiết kế hạ tầng xử lý 50 triệu lệnh tra cứu vận đơn mỗi ngày',
      'Bảo mật hệ thống TMS/WMS cho 3 tập đoàn giao nhận hàng đầu',
      'Chứng chỉ Quản trị Đám mây & Mạng Phân tán Cấp cao'
    ],
    credentialsEN: [
      'Engineered tracking infrastructure sustaining 50M+ daily API inquiries',
      'Hardened core TMS/WMS databases for 3 premier Southeast Asian logistics operators',
      'Senior Certified Distributed Cloud Systems Architect'
    ],
    specializationsVI: ['Tra cứu Vận đơn Tải cao 24/7', 'Bảo mật CSDL TMS/WMS (DBSAFER)', 'Chống Rò rỉ Dữ liệu Lộ trình & Khách hàng', 'WAAP Ứng dụng Vận tải'],
    specializationsEN: ['High-Concurrency 24/7 Waybill Lookup', 'TMS/WMS Database Security (DBSAFER)', 'Route & Customer Data Leak Prevention', 'Transport API & Mobile WAAP'],
    highlightMetricVI: '50M+ lượt tra cứu vận đơn/ngày',
    highlightMetricEN: '50M+ daily tracking inquiries handled'
  },

  // ========================== MEDIA & ENTERTAINMENT ==========================
  {
    id: 'exp-media-1',
    industryId: 'media',
    name: 'Phan Vĩnh Khang',
    titleVI: 'Giám đốc Kỹ thuật Truyền thông Số & Streaming OTT Toàn cầu',
    titleEN: 'Director of Broadcast OTT Streaming & Media Edge Infrastructure',
    roleVI: 'Kiến trúc sư Trưởng Phân phối Nội dung & Phát sóng Trực tiếp',
    roleEN: 'Principal Media CDN & Live Event Broadcasting Architect',
    experienceYears: 16,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    initials: 'VK',
    bioVI: 'Chuyên gia kỳ cựu chuyên trách hạ tầng truyền hình trực tuyến và phát sóng trực tiếp các giải thể thao đỉnh cao cho hàng triệu khán giả đồng thời mà không bị giật lag. Tiên phong giải pháp Multi-CDN cân bằng tải tự động và bảo vệ bản quyền số DRM.',
    bioEN: 'Veteran media architect powering massive live sports and entertainment streams for millions of concurrent viewers with zero lag. Pioneer in adaptive Multi-CDN bandwidth balancing and end-to-end stream protection.',
    credentialsVI: [
      'Chủ trì phát sóng trực tiếp cho hơn 1.5 triệu người xem đồng thời (World Cup, SEA Games)',
      'Tối ưu hóa độ trễ phát trực tiếp xuống dưới 3 giây',
      'Cố vấn giải pháp hạ tầng cho các đài truyền hình và nền tảng OTT lớn nhất Việt Nam'
    ],
    credentialsEN: [
      'Led live broadcast streaming for 1.5M+ concurrent viewers (World Cup, SEA Games)',
      'Reduced live video latency to sub-3 seconds across mobile & smart TVs',
      'Strategic infrastructure consultant to top broadcast networks and OTT services'
    ],
    specializationsVI: ['Multi-CDN Phát sóng Trực tiếp 4K', 'Tối ưu Hóa Băng thông Biên', 'Bảo vệ Bản quyền Kịch bản & Video (DLP)', 'WAAP Cổng Tin tức Cao điểm'],
    specializationsEN: ['4K Ultra-Low Latency Live Streaming CDN', 'Edge Bandwidth Dynamic Balancing', 'Pre-Release Script & Video Asset DLP', 'High-Traffic News WAAP Shield'],
    highlightMetricVI: '1.5M+ người xem trực tuyến đồng thời',
    highlightMetricEN: '1.5M+ concurrent live streaming viewers'
  }
];

export function getIndustryExperts(industryId: string): IndustryExpert[] {
  // Normalize 'bfsi' and 'banking'
  const targetId = industryId === 'bfsi' ? 'banking' : industryId;
  const directMatches = INDUSTRY_EXPERTS.filter(
    (exp) =>
      exp.industryId === targetId ||
      exp.industryId === industryId ||
      (exp.industryIds && (exp.industryIds.includes(targetId) || exp.industryIds.includes(industryId)))
  );

  if (directMatches.length > 0) {
    return directMatches;
  }

  // Fallback to top architecture experts if not found
  return INDUSTRY_EXPERTS.slice(0, 2);
}
