export interface AboutCompanyOverview {
  badgeVI: string;
  badgeEN: string;
  titleVI: string;
  titleEN: string;
  p1VI: string;
  p1EN: string;
  p2VI: string;
  p2EN: string;
  buttonTextVI: string;
  buttonTextEN: string;
}

export interface AboutOurPurpose {
  badgeVI: string;
  badgeEN: string;
  titleVI: string;
  titleEN: string;
  p1VI: string;
  p1EN: string;
  p2VI: string;
  p2EN: string;
  buttonTextVI: string;
  buttonTextEN: string;
}

export interface EngineeringCapability {
  id: string;
  titleVI: string;
  titleEN: string;
  descVI: string;
  descEN: string;
  tagVI: string;
  tagEN: string;
}

export interface AboutEngineeringDelivery {
  badgeVI: string;
  badgeEN: string;
  titleVI: string;
  titleEN: string;
  leadVI: string;
  leadEN: string;
  capabilities: EngineeringCapability[];
  buttonTextVI: string;
  buttonTextEN: string;
}

export interface PrincipleItem {
  num: string;
  nameVI: string;
  nameEN: string;
  descVI: string;
  descEN: string;
}

export interface AboutOurPrinciples {
  badgeVI: string;
  badgeEN: string;
  titleVI: string;
  titleEN: string;
  principles: PrincipleItem[];
}

export interface IndustryFocusItem {
  id: string;
  num: string;
  nameVI: string;
  nameEN: string;
  descVI: string;
  descEN: string;
  tagVI: string;
  tagEN: string;
  iconName: string;
}

export interface AboutIndustryFocus {
  badgeVI: string;
  badgeEN: string;
  titleVI: string;
  titleEN: string;
  industries: IndustryFocusItem[];
}

export const MEET_ABOUT_DATA = {
  // [SECTION 1: TỔNG QUAN DOANH NGHIỆP — COMPANY OVERVIEW]
  companyOverview: {
    badgeVI: 'TỔNG QUAN DOANH NGHIỆP',
    badgeEN: 'COMPANY OVERVIEW',
    titleVI: 'V-Tech Hub: Đối tác điều phối công nghệ toàn diện cho doanh nghiệp Việt',
    titleEN: 'V-Tech Hub: Comprehensive Technology Orchestration Partner for Vietnamese Enterprises',
    p1VI: 'V-Tech Hub là đơn vị tư vấn kiến trúc và tích hợp giải pháp công nghệ trọn gói, giúp các tổ chức tài chính, cơ quan công quyền và doanh nghiệp lớn vận hành hiệu quả, kiểm soát rủi ro và tăng trưởng doanh thu. Thay vì để doanh nghiệp tự mình xoay xở với hàng loạt phần mềm riêng lẻ gây lãng phí ngân sách, chúng tôi thẩm định, chuẩn hóa và ghép nối các giải pháp tốt nhất thị trường thành một hệ thống đồng bộ.',
    p1EN: 'V-Tech Hub is an end-to-end technology architecture advisory and systems integration partner, empowering financial institutions, public sector agencies, and large enterprises to operate efficiently, mitigate risks, and accelerate revenue. Instead of leaving businesses to navigate a fragmented landscape of standalone software with inflated costs, we audit, standardize, and orchestrate market-leading solutions into a unified ecosystem.',
    p2VI: 'Chúng tôi cung cấp dịch vụ trọn gói từ đầu đến cuối (end-to-end): từ khảo sát bài toán, thiết kế kiến trúc mở, thẩm định pháp lý và an toàn dữ liệu, đến chạy thử nghiệm (PoC) đo lường bằng kết quả kinh doanh trước khi triển khai chính thức. Mục tiêu của chúng tôi là giúp hệ thống của bạn vận hành trơn tru và tiết kiệm chi phí vận hành tối đa.',
    p2EN: 'We deliver full lifecycle, end-to-end services: from problem discovery and open architecture design, to regulatory compliance and data security audits, through live Proof-of-Concept (PoC) benchmarking against business KPIs prior to production rollout. Our ultimate objective is to ensure your systems operate flawlessly while maximizing operational cost savings.',
    buttonTextVI: 'KẾT NỐI VỚI CHÚNG TÔI',
    buttonTextEN: 'CONNECT WITH US'
  },

  // [SECTION 2: MỤC TIÊU CỐT LÕI — OUR PURPOSE]
  ourPurpose: {
    badgeVI: 'MỤC TIÊU CỐT LÕI',
    badgeEN: 'OUR PURPOSE',
    titleVI: 'Sứ mệnh của chúng tôi',
    titleEN: 'Our Mission & Purpose',
    p1VI: 'V-Tech Hub đồng hành cùng doanh nghiệp để tháo gỡ những vướng mắc trong khâu triển khai công nghệ và loại bỏ triệt để các khoản đầu tư không hiệu quả.',
    p1EN: 'V-Tech Hub partners with enterprises to resolve deep-seated bottlenecks in technology adoption and decisively eliminate non-performing IT investments.',
    p2VI: 'Chúng tôi đưa công nghệ vào đúng nơi cần giải quyết, rút ngắn thời gian đưa giải pháp vào thực tế thông qua các mô hình kiến trúc mẫu đã được kiểm chứng. Chúng tôi không chỉ cung cấp phần mềm, mà đảm bảo toàn bộ quy trình của doanh nghiệp vận hành trơn tru và tiết kiệm chi phí vận hành, từ đó tạo nền tảng vững chắc cho sự tăng trưởng.',
    p2EN: 'We direct technology precisely where business impact is needed most, cutting time-to-value via pre-validated reference blueprints. We do not merely license software—we guarantee your entire organizational workflow runs seamlessly and cost-efficiently, establishing a rock-solid foundation for scalable expansion.',
    buttonTextVI: 'TÌM HIỂU GIẢI PHÁP THEO NGÀNH',
    buttonTextEN: 'EXPLORE INDUSTRY SOLUTIONS'
  },

  // [SECTION 3: NĂNG LỰC DỊCH VỤ TRỌN GÓI — V-TECH ENGINEERING & DELIVERY]
  engineeringDelivery: {
    badgeVI: 'NĂNG LỰC DỊCH VỤ TRỌN GÓI',
    badgeEN: 'V-TECH ENGINEERING & DELIVERY',
    titleVI: 'Năng lực triển khai thực chiến',
    titleEN: 'Battle-Tested Delivery & Engineering Capabilities',
    leadVI: 'V-Tech Hub kết hợp giữa sự am hiểu sâu sắc nghiệp vụ từng ngành và năng lực kỹ thuật tích hợp chuẩn xác. Chúng tôi đảm nhận toàn bộ quá trình để doanh nghiệp an tâm tập trung vào kinh doanh:',
    leadEN: 'V-Tech Hub fuses deep vertical domain acumen with rigorous systems engineering. We shoulder the full integration lifecycle so your leadership can focus uninhibited on core business growth:',
    capabilities: [
      {
        id: 'curation-verification',
        titleVI: 'Sàng lọc & Bảo chứng (Curation & Verification)',
        titleEN: 'Curation & Verification',
        descVI: 'Chỉ chọn các giải pháp đạt chuẩn bảo mật quốc tế và tuân thủ chặt chẽ pháp lý tại Việt Nam (Nghị định 13/2023/NĐ-CP, quy định NHNN).',
        descEN: 'Curating only top-tier solutions certified under international security standards and rigorously aligned with Vietnamese regulatory mandates (Decree 13/2023/ND-CP, State Bank of Vietnam circulars).',
        tagVI: 'Tuân thủ Pháp lý & Bảo mật',
        tagEN: 'Compliance & Security'
      },
      {
        id: 'system-integration',
        titleVI: 'Tích hợp đồng bộ (System Integration)',
        titleEN: 'System Integration',
        descVI: 'Kết nối giải pháp mới với hệ thống hiện có của doanh nghiệp trên nền kiến trúc mở (API-first), loại bỏ tình trạng dữ liệu rời rạc mà không làm gián đoạn công việc hàng ngày.',
        descEN: 'Bridging new technologies with legacy enterprise systems via open API-first architectures, completely eliminating data silos without causing day-to-day operational downtime.',
        tagVI: 'Kiến trúc Mở API-First',
        tagEN: 'API-First Open Architecture'
      },
      {
        id: 'proof-before-scale',
        titleVI: 'Bảo đảm kết quả (Proof before Scale)',
        titleEN: 'Proof before Scale',
        descVI: 'Chạy thử nghiệm trên dữ liệu thật với tiêu chí đo lường rõ ràng. Doanh nghiệp chỉ chi ngân sách lớn khi đã kiểm chứng được hiệu quả thực tế.',
        descEN: 'Conducting live PoC benchmarking on production-like data with quantifiable criteria. Enterprises only scale major capital expenditures once empirical ROI is proven.',
        tagVI: 'Đo lường Hiệu quả PoC',
        tagEN: 'Empirical PoC Validation'
      }
    ],
    buttonTextVI: 'KHÁM PHÁ NĂNG LỰC KỸ THUẬT',
    buttonTextEN: 'EXPLORE TECHNICAL CAPABILITIES'
  },

  // [SECTION 4: TRIẾT LÝ HỢP TÁC — OUR PRINCIPLES]
  ourPrinciples: {
    badgeVI: 'TRIẾT LÝ HỢP TÁC',
    badgeEN: 'OUR PRINCIPLES',
    titleVI: 'Mọi dự án và cam kết của V-Tech Hub đều dựa trên 3 nguyên tắc kinh doanh bất biến:',
    titleEN: 'Every project and commitment at V-Tech Hub is founded upon 3 immutable business principles:',
    principles: [
      {
        num: '01',
        nameVI: '1. Công bằng (Fairness)',
        nameEN: '1. Fairness',
        descVI: 'Chúng tôi đứng về phía bài toán của khách hàng. Không thiên vị bất kỳ nhà cung cấp phần mềm nào, giải pháp được chọn luôn là phương án hiệu quả, phù hợp và tiết kiệm nhất cho doanh nghiệp.',
        descEN: 'We advocate solely for the client\'s business outcome. Remaining vendor-agnostic without bias toward any single software vendor, the recommended solution is always the most effective, compatible, and cost-optimal choice for the enterprise.'
      },
      {
        num: '02',
        nameVI: '2. Minh bạch (Transparency)',
        nameEN: '2. Transparency',
        descVI: 'Rõ ràng từ đầu về cấu trúc chi phí, tiến độ triển khai, rủi ro dự án và đội ngũ kỹ thuật trực tiếp phụ trách. Không phát sinh chi phí ẩn, không vẽ thêm tính năng thừa, và luôn có phương án bảo toàn dữ liệu khi kết thúc hợp tác.',
        descEN: 'Absolute clarity from day one regarding cost breakdown, deployment milestones, project risks, and direct technical staff accountability. Zero hidden fees, zero superfluous feature scope, and guaranteed data sovereignty upon contract completion.'
      },
      {
        num: '03',
        nameVI: '3. Cùng có lợi (Benefit)',
        nameEN: '3. Benefit',
        descVI: 'Dự án chỉ thành công khi giúp doanh nghiệp vận hành trơn tru và tiết kiệm chi phí vận hành rõ rệt, từ đó gia tăng biên lợi nhuận. Chúng tôi hướng tới mối quan hệ đồng hành lâu dài cùng phát triển.',
        descEN: 'A project is only successful when it drives seamless operations and substantial, measurable operational cost savings, directly expanding profit margins. We cultivate enduring partnerships built for shared, sustainable prosperity.'
      }
    ]
  },

  // [SECTION 5: ĐỊNH HƯỚNG THEO NGÀNH — INDUSTRY FOCUS]
  industryFocus: {
    badgeVI: 'ĐỊNH HƯỚNG THEO NGÀNH',
    badgeEN: 'INDUSTRY FOCUS',
    titleVI: 'Chúng tôi thiết kế các gói giải pháp chuyên sâu cho từng nhóm ngành có yêu cầu vận hành cao:',
    titleEN: 'We engineer specialized, high-impact solution packages for mission-critical industry verticals:',
    industries: [
      {
        id: 'bfsi',
        num: '01',
        nameVI: '1. Banking, Financial Services & Insurance (BFSI)',
        nameEN: '1. Banking, Financial Services & Insurance (BFSI)',
        descVI: 'Hiện đại hóa hệ thống Core Banking, Open Banking API, eKYC định danh sinh trắc học, phòng chống gian lận thời gian thực và quản trị rủi ro tín dụng. Đảm bảo tuân thủ nghiêm ngặt các quy định của Ngân hàng Nhà nước và chuẩn an toàn thanh toán PCI-DSS.',
        descEN: 'Core banking modernization, Open Banking APIs, biometric eKYC, real-time fraud mitigation, and automated credit risk underwriting—strictly adhering to State Bank of Vietnam regulations and PCI-DSS compliance.',
        tagVI: 'Tài chính & Ngân hàng',
        tagEN: 'Finance & Banking',
        iconName: 'Landmark'
      },
      {
        id: 'government',
        num: '02',
        nameVI: '2. Government & Public Sector',
        nameEN: '2. Government & Public Sector',
        descVI: 'Số hóa dịch vụ công, xây dựng trục kết nối liên thông dữ liệu và quản trị thông tin tập trung. Đáp ứng các tiêu chuẩn bảo mật cấp độ quốc gia, an ninh mạng và quy định lưu trữ dữ liệu tại chỗ.',
        descEN: 'Digital public services, unified data interoperability axes, and centralized master information governance compliant with national cybersecurity level grading and in-country data residency laws.',
        tagVI: 'Cơ quan Công quyền',
        tagEN: 'Public Sector',
        iconName: 'Building2'
      },
      {
        id: 'manufacturing',
        num: '03',
        nameVI: '3. Manufacturing',
        nameEN: '3. Manufacturing',
        descVI: 'Tối ưu hóa quản lý sàn nhà máy (MES/SCADA), bảo trì dự đoán thiết bị, quản trị kho vật tư và tự động hóa chuỗi cung ứng sản xuất nhằm giảm thời gian dừng chuyền và hao hụt nguyên vật liệu.',
        descEN: 'Shop-floor execution optimization (MES/SCADA), predictive machinery maintenance, inventory control, and factory supply chain automation to eliminate line downtime and raw material scrap.',
        tagVI: 'Sản xuất Thông minh',
        tagEN: 'Smart Manufacturing',
        iconName: 'Factory'
      },
      {
        id: 'logistics',
        num: '04',
        nameVI: '4. Logistics',
        nameEN: '4. Logistics',
        descVI: 'Giải pháp quản lý kho thông minh (WMS), tự động hóa định tuyến và điều phối đội xe (TMS), cùng hệ thống IoT giám sát hành trình và chuỗi lạnh, giúp cắt giảm chi phí vận chuyển trên từng chuyến hàng.',
        descEN: 'Smart warehouse management (WMS), dynamic route and fleet dispatch automation (TMS), and IoT sensor monitoring for route and cold-chain compliance to drive down per-trip freight overhead.',
        tagVI: 'Vận tải & Kho bãi',
        tagEN: 'Freight & Warehousing',
        iconName: 'Truck'
      },
      {
        id: 'healthcare',
        num: '05',
        nameVI: '5. Healthcare',
        nameEN: '5. Healthcare',
        descVI: 'Số hóa hệ thống Bệnh án điện tử (EMR), chuẩn kết nối liên thông dữ liệu y tế (HL7-FHIR/DICOM), nền tảng khám chữa bệnh từ xa (Telehealth) và quản trị hồ sơ bệnh nhân với cơ chế phân quyền bảo mật tối đa.',
        descEN: 'Electronic Medical Records (EMR) digitization, medical interoperability standards (HL7-FHIR/DICOM), secure Telehealth consultations, and role-based patient record governance.',
        tagVI: 'Y tế & Bệnh viện',
        tagEN: 'Healthcare Systems',
        iconName: 'HeartPulse'
      },
      {
        id: 'education',
        num: '06',
        nameVI: '6. Education',
        nameEN: '6. Education',
        descVI: 'Hệ thống quản lý học tập (LMS) thế hệ mới, giải pháp thi và đánh giá trực tuyến chống gian lận, hạ tầng chịu tải cao điểm mùa tuyển sinh và bảo mật nghiêm ngặt dữ liệu học sinh, sinh viên.',
        descEN: 'Next-gen Learning Management Systems (LMS), anti-cheat proctored examination platforms, high-concurrency admission season resilience, and student personal data protection.',
        tagVI: 'Giáo dục Đào tạo',
        tagEN: 'Education Technology',
        iconName: 'GraduationCap'
      },
      {
        id: 'retail',
        num: '07',
        nameVI: '7. Retail & E-Commerce',
        nameEN: '7. Retail & E-Commerce',
        descVI: 'Kiến trúc thương mại mở (Headless Commerce), đồng bộ tồn kho đa kênh theo thời gian thực (Omnichannel) và cá nhân hóa trải nghiệm mua sắm nhằm tối ưu tỷ lệ chuyển đổi đơn hàng và chi phí vận hành kho vận.',
        descEN: 'Headless Commerce architecture, real-time omnichannel inventory synchronization, and AI shopping personalization to maximize sales conversion while curbing fulfillment overhead.',
        tagVI: 'Bán lẻ & E-Commerce',
        tagEN: 'Retail & Commerce',
        iconName: 'ShoppingBag'
      }
    ]
  }
};

export interface LeaderMember {
  id: string;
  nameVI: string;
  nameEN: string;
  roleVI: string;
  roleEN: string;
  category: 'executive' | 'advisory' | 'technical';
  categoryLabelVI: string;
  categoryLabelEN: string;
  bioVI: string;
  bioEN: string;
  credentialsVI: string[];
  credentialsEN: string[];
  avatarUrl?: string;
  initials: string;
}

export const LEADERSHIP_CATEGORIES = [
  { id: 'all', labelVI: 'Tất cả lãnh đạo', labelEN: 'All Leadership' },
  { id: 'executive', labelVI: 'Ban Điều Hành (Executive)', labelEN: 'Executive Leadership' },
  { id: 'advisory', labelVI: 'Hội Đồng Cố Vấn (Advisory Board)', labelEN: 'Advisory Board' },
  { id: 'technical', labelVI: 'Hội Đồng Kỹ Thuật (Tech Council)', labelEN: 'Technology Committee' }
];

export const LEADERSHIP_MEMBERS: LeaderMember[] = [
  {
    id: 'lead-ceo',
    nameVI: 'Lãnh đạo Ban Điều Hành',
    nameEN: 'Executive Leadership',
    roleVI: 'Tổng Giám đốc (CEO) - V-Tech Hub',
    roleEN: 'Chief Executive Officer, V-Tech Hub',
    category: 'executive',
    categoryLabelVI: 'Ban Điều Hành Cấp Cao',
    categoryLabelEN: 'Executive Leadership',
    bioVI: 'Hơn 18 năm kinh nghiệm dẫn dắt chiến lược công nghệ, hạ tầng đám mây và an ninh mạng tại khu vực Đông Nam Á. Trực tiếp định hình mô hình Liên minh Công nghệ V-Tech Hub, kết nối các tổ chức kinh tế trọng yếu với các giải pháp công nghệ tiên tiến.',
    bioEN: 'Over 18 years of executive experience spearheading technology strategy, cloud infrastructure, and enterprise cybersecurity in Southeast Asia. Steers the V-Tech Hub Alliance model to empower key economic sectors.',
    credentialsVI: [
      'Cựu Giám đốc Chiến lược Hạ tầng Đám mây Doanh nghiệp',
      'Thạc sĩ Khoa học Máy tính & Quản trị Kinh doanh',
      'Đại biểu tham vấn Liên minh An ninh mạng Quốc gia'
    ],
    credentialsEN: [
      'Former Enterprise Cloud Strategy Director',
      'M.S. in Computer Science & Executive MBA',
      'Strategic Contributor to National Cybersecurity Councils'
    ],
    initials: 'CEO'
  },
  {
    id: 'lead-cto',
    nameVI: 'Giám Đốc Công Nghệ & Kiến Trúc',
    nameEN: 'Technology & Architecture Leadership',
    roleVI: 'Giám đốc Công nghệ (CTO) - V-Tech Hub',
    roleEN: 'Chief Technology Officer, V-Tech Hub',
    category: 'executive',
    categoryLabelVI: 'Ban Điều Hành Cấp Cao',
    categoryLabelEN: 'Executive Leadership',
    bioVI: 'Chuyên gia đầu ngành về kiến trúc phân tán quy mô lớn, mạng lưới phân phối nội dung (Multi-CDN) và hệ thống an toàn thông tin tải cao, xử lý hàng chục tỷ truy vấn mỗi ngày với cam kết thời gian hoạt động 99.99%.',
    bioEN: 'Veteran enterprise architect specializing in large-scale distributed cloud systems, Multi-CDN routing, and high-concurrency security processing tens of billions of daily requests with 99.99% uptime.',
    credentialsVI: [
      '16+ năm kinh nghiệm Thiết kế Kiến trúc Hệ thống Phân tán',
      'Chủ trì triển khai các dự án hạ tầng Sovereign Cloud tại Việt Nam',
      'Chuyên gia cấp cao về tối ưu hóa độ trễ biên (Edge Computing)'
    ],
    credentialsEN: [
      '16+ Years Large-Scale Distributed Architecture Design',
      'Led National Sovereign Cloud Deployments in Vietnam',
      'Senior Specialist in Edge Computing Latency Optimization'
    ],
    initials: 'CTO'
  },
  {
    id: 'lead-ciso',
    nameVI: 'Trưởng Ban An Ninh Mạng & Vận Hành SOC',
    nameEN: 'Cyber Defense & SOC Operations Leadership',
    roleVI: 'Giám đốc An ninh Mạng (CISO) & Giám đốc SOC',
    roleEN: 'Chief Information Security Officer & SOC Director',
    category: 'executive',
    categoryLabelVI: 'Ban Điều Hành Cấp Cao',
    categoryLabelEN: 'Executive Leadership',
    bioVI: 'Phụ trách mạng lưới Trung tâm Giám sát & Điều hành An ninh mạng (SOC) 24/7/365 đa quốc gia của V-Tech Hub. Chuyên gia tác chiến phòng thủ mạng, săn lùng mối đe dọa (Threat Hunting) và ứng cứu sự cố với cam kết SLA dưới 5 phút.',
    bioEN: 'Leads V-Tech Hub’s global 24/7/365 multi-country Security Operations Center (SOC) network. Elite expert in threat hunting, incident response, and sub-5-minute emergency containment SLAs.',
    credentialsVI: [
      'Chứng chỉ Quốc tế: CISSP, CISM, CEH Master, SANS GIAC',
      'Nguyên Đội trưởng Đội Ứng cứu Khẩn cấp An ninh Không gian mạng',
      'Kinh nghiệm bảo vệ hạ tầng tài chính ngân hàng trước các đợt tấn công DDoS kỷ lục'
    ],
    credentialsEN: [
      'International Certifications: CISSP, CISM, CEH Master, GIAC',
      'Former National Incident Response Team Lead',
      'Proven Track Record Defending BFSI Against Record-Breaking Cyber Attacks'
    ],
    initials: 'SOC'
  },
  {
    id: 'advisory-chair',
    nameVI: 'Chủ Tịch Hội Đồng Cố Vấn Chiến Lược',
    nameEN: 'Strategic Advisory Board Leadership',
    roleVI: 'Chủ tịch Hội đồng Cố vấn Chiến lược',
    roleEN: 'Chairman of the Advisory Board',
    category: 'advisory',
    categoryLabelVI: 'Hội Đồng Cố Vấn Chiến Lược',
    categoryLabelEN: 'Advisory Board',
    bioVI: 'Hơn 25 năm tư vấn chuyển đổi số quốc gia, kiến tạo các chính sách hiện đại hóa công nghệ trong ngành Tài chính, Ngân hàng, Bảo hiểm và Sản xuất công nghiệp.',
    bioEN: 'Over 25 years advising national digital transformation initiatives, modernizing technical policies across Banking, Financial Services, Insurance, and Manufacturing.',
    credentialsVI: [
      'Cố vấn Cao cấp cho các định chế tài chính lớn tại Việt Nam',
      'Tiến sĩ Hệ thống Thông tin & Quản trị Chiến lược',
      'Thành viên Hội đồng Quản trị các Tập đoàn Công nghệ Hàng đầu'
    ],
    credentialsEN: [
      'Senior Advisor to Major Financial Institutions in Vietnam',
      'Ph.D. in Information Systems & Strategic Management',
      'Board Director Across Premier Technology Alliances'
    ],
    initials: 'ADV'
  },
  {
    id: 'advisory-legal',
    nameVI: 'Cố Vấn Pháp Lý & Tuân Thủ Dữ Liệu',
    nameEN: 'Legal & Compliance Senior Advisor',
    roleVI: 'Cố vấn Trưởng Pháp chế & Tuân thủ Dữ liệu',
    roleEN: 'Chief Legal & Data Compliance Advisor',
    category: 'advisory',
    categoryLabelVI: 'Hội Đồng Cố Vấn Chiến Lược',
    categoryLabelEN: 'Advisory Board',
    bioVI: 'Chuyên gia pháp chế công nghệ hàng đầu chuyên sâu về Nghị định 13/2023/NĐ-CP bảo vệ dữ liệu cá nhân, Luật An ninh mạng, tiêu chuẩn bảo mật dữ liệu thẻ thanh toán (PCI-DSS) và khuôn khổ quản trị AI có trách nhiệm.',
    bioEN: 'Premier legal technology authority specializing in Decree 13 Personal Data Protection, Vietnam Cybersecurity Law, PCI-DSS compliance, and Responsible AI Governance.',
    credentialsVI: [
      'Thạc sĩ Luật Công nghệ & An ninh mạng Quốc tế',
      'Cố vấn tuân thủ cho hơn 50 doanh nghiệp tài chính và thương mại điện tử',
      'Tác giả nhiều báo cáo chuyên sâu về quy chế dữ liệu xuyên biên giới'
    ],
    credentialsEN: [
      'Master of International Cyber & Technology Law',
      'Compliance Advisor to 50+ Enterprise Financial & E-Commerce Firms',
      'Author of Definitive Guides on Cross-Border Data Transfer Frameworks'
    ],
    initials: 'LAW'
  },
  {
    id: 'tech-arch',
    nameVI: 'Trưởng Ban Kiến Trúc Tích Hợp & PoC Lab',
    nameEN: 'Head of Integration Architecture & PoC Lab',
    roleVI: 'Trưởng Ban Kiến trúc Giải pháp & Thực nghiệm',
    roleEN: 'Director of Solution Architecture & PoC Lab',
    category: 'technical',
    categoryLabelVI: 'Hội Đồng Kỹ Thuật & Kiến Trúc',
    categoryLabelEN: 'Technology Committee',
    bioVI: 'Chủ trì việc nghiên cứu, chuẩn hóa bộ tài liệu kiến trúc mẫu (Reference Architectures) và trực tiếp điều hành phòng Lab PoC thực nghiệm, giúp khách hàng kiểm chứng giải pháp trước khi đưa vào sản xuất.',
    bioEN: 'Directs the R&D and standardization of industry Reference Architectures and oversees the V-Tech Hub PoC Lab, empowering enterprises to rigorously validate solutions prior to production.',
    credentialsVI: [
      '14+ năm thiết kế giải pháp cho các tập đoàn viễn thông và bán lẻ lớn',
      'Chứng chỉ Kiến trúc sư Cấp cao Đa nền tảng Đám mây (Multi-Cloud Architect)',
      'Tác giả của 30+ bộ Blueprint triển khai sẵn cho các ngành trọng điểm'
    ],
    credentialsEN: [
      '14+ Years Designing Solutions for Enterprise Telecom & Retail',
      'Multi-Cloud Senior Certified Solution Architect',
      'Author of 30+ Pre-validated Production Blueprints for Core Verticals'
    ],
    initials: 'LAB'
  }
];

export interface LeadershipProfile {
  id: number;
  memberNumber: string;
  name?: string;
  titleVI?: string;
  titleEN?: string;
  avatar?: string;
  experienceYears?: number;
  bioVI?: string;
  bioEN?: string;
  domainVI: string;
  domainEN: string;
  rolePlaceholderVI: string;
  rolePlaceholderEN: string;
  overviewVI: string;
  overviewEN: string;
  responsibilitiesVI: string[];
  responsibilitiesEN: string[];
  valueDeliveryVI: string;
  valueDeliveryEN: string;
}

export const LEADERSHIP_PROFILES: LeadershipProfile[] = [
  {
    id: 1,
    memberNumber: '01',
    name: 'Nguyen Duc Anh',
    titleVI: 'Founder & CEO, DatumBridge',
    titleEN: 'Founder & CEO, DatumBridge',
    avatar: '/images/nguyen-duc-anh.svg',
    experienceYears: 16,
    domainVI: 'Chiến Lược & Điều Hành Liên Minh',
    domainEN: 'Executive Strategy & Alliance Governance',
    rolePlaceholderVI: 'Sáng lập & CEO DatumBridge | Chuyên gia AI & Chuyển đổi Số',
    rolePlaceholderEN: 'Founder & CEO, DatumBridge | AI & Digital Transformation Lead',
    bioVI: 'Ông Đức Anh có hơn 16 năm kinh nghiệm trong lĩnh vực công nghệ, phát triển sản phẩm và chuyển đổi số. Ông dẫn dắt tầm nhìn và chiến lược sản phẩm tại DatumBridge, xây dựng các giải pháp AI thiết thực và có khả năng mở rộng cho các nhu cầu kinh doanh thực tế.',
    bioEN: 'Mr Duc Anh has 16+ years of experience in technology, product development, and digital transformation. He leads product vision and strategy at DatumBridge, building practical and scalable AI solutions for real-world business needs.',
    overviewVI: 'Chịu trách nhiệm toàn diện trong việc hoạch định tầm nhìn chiến lược, thiết lập liên minh các nhà cung cấp giải pháp công nghệ hàng đầu và kết nối trực tiếp với các tổ chức kinh tế trọng yếu tại Việt Nam.',
    overviewEN: 'Spearheads strategic vision, orchestrates tier-1 global technology alliance partners, and aligns high-impact digital roadmaps with Vietnam enterprise priorities.',
    responsibilitiesVI: [
      'Định hình chiến lược phát triển dài hạn và bộ quy chuẩn liên minh công nghệ V-Tech Hub.',
      'Dẫn dắt tích hợp nền tảng AI điều phối (AI Orchestration) và tự động hóa quy trình nghiệp vụ cho doanh nghiệp.',
      'Phê duyệt các khung giải pháp hạ tầng số và danh mục đối tác chiến lược hàng đầu.',
      'Chỉ đạo quan hệ đối tác cấp cao với các tổ chức kinh tế và cơ quan hoạch định chính sách số.'
    ],
    responsibilitiesEN: [
      'Defines long-term strategic growth and operational governance standards for V-Tech Hub alliance.',
      'Leads the integration of enterprise AI orchestration platforms and business process automation.',
      'Approves validated digital infrastructure blueprints and tier-1 technology alliance partners.',
      'Directs high-level executive partnerships with enterprise stakeholders and regulatory bodies.'
    ],
    valueDeliveryVI: 'Bảo đảm mọi công nghệ tích hợp trong hệ sinh thái đều phục vụ trực tiếp mục tiêu tăng trưởng, tối ưu chi phí và tăng sức cạnh tranh của doanh nghiệp.',
    valueDeliveryEN: 'Ensures every integrated solution translates directly into measurable economic impact and sustainable competitive advantage.'
  },
  {
    id: 2,
    memberNumber: '02',
    domainVI: 'Kiến Trúc Đám Mây & Hệ Thống Phân Tán',
    domainEN: 'Cloud & Distributed Architecture',
    rolePlaceholderVI: 'Kiến Trúc Sư Trưởng Hệ Thống (Chief Enterprise Architect)',
    rolePlaceholderEN: 'Chief Enterprise Architect',
    overviewVI: 'Chủ trì thiết kế kiến trúc chuẩn hóa (Enterprise Reference Architectures), bảo đảm tính tương thích cao giữa các lớp hạ tầng Sovereign Cloud, Multi-CDN và môi trường Hybrid-Cloud.',
    overviewEN: 'Directs standardized enterprise reference architectures, ensuring seamless interoperability across sovereign clouds, Multi-CDN grids, and hybrid environments.',
    responsibilitiesVI: [
      'Thiết kế và chuẩn hóa các bộ Blueprint kiến trúc cho từng ngành kinh tế trọng điểm.',
      'Thẩm định kỹ thuật độc lập đối với các công nghệ thành viên liên minh.',
      'Tối ưu hóa độ trễ, khả năng mở rộng quy mô và tính liên tục khi vận hành tải cao.'
    ],
    responsibilitiesEN: [
      'Engineers pre-validated blueprints tailored to specific industry verticals.',
      'Conducts independent technical evaluation of all partner components and platforms.',
      'Optimizes latency, horizontal scalability, and business continuity under peak workloads.'
    ],
    valueDeliveryVI: 'Giúp khách hàng loại bỏ rủi ro phụ thuộc vào một nhà cung cấp duy nhất (vendor lock-in) và rút ngắn 70% thời gian thiết kế hệ thống mới.',
    valueDeliveryEN: 'Prevents vendor lock-in and slashes architecture planning time by up to 70% with battle-tested blueprints.'
  },
  {
    id: 3,
    memberNumber: '03',
    domainVI: 'An Ninh Mạng & Trung Tâm Điều Hành SOC',
    domainEN: 'Cyber Defense & Global SOC Operations',
    rolePlaceholderVI: 'Chỉ Huy Trưởng Tác Chiến An Ninh Mạng (Head of Cyber Defense & SOC)',
    rolePlaceholderEN: 'Head of Cyber Defense & Security Operations',
    overviewVI: 'Điều hành mạng lưới Trung tâm Giám sát và Điều hành An toàn thông tin (SOC) 24/7/365, chịu trách nhiệm phòng thủ đa tầng trước các mối đe dọa không gian mạng tinh vi.',
    overviewEN: 'Leads V-Tech Hub’s 24/7/365 Security Operations Center (SOC) network, orchestrating multi-layer active defense against advanced cyber threats.',
    responsibilitiesVI: [
      'Giám sát an ninh theo thời gian thực và ngăn chặn các đợt tấn công mạng quy mô lớn.',
      'Điều phối đội ngũ phản ứng nhanh với cam kết phong tỏa sự cố (Containment SLA) dưới 5 phút.',
      'Ứng dụng trí tuệ nhân tạo (AI-driven Threat Hunting) để phát hiện sớm lỗ hổng Zero-day.'
    ],
    responsibilitiesEN: [
      'Monitors infrastructure 24/7 and mitigates multi-terabit volumetric cyber attacks.',
      'Enforces rapid containment SLA (<5 minutes) through dedicated incident command teams.',
      'Deploys AI-driven threat hunting to neutralize zero-day exploits proactively.'
    ],
    valueDeliveryVI: 'Bảo vệ toàn vẹn tài sản số của doanh nghiệp và duy trì chỉ số sẵn sàng dịch vụ (Uptime SLA) đạt mức tối ưu 99.99%.',
    valueDeliveryEN: 'Safeguards core digital assets while maintaining mission-critical 99.99% service availability.'
  },
  {
    id: 4,
    memberNumber: '04',
    domainVI: 'Cố Vấn Chiến Lược & Chuyển Đổi Số',
    domainEN: 'Strategic Digital Transformation Advisory',
    rolePlaceholderVI: 'Hội Đồng Cố Vấn Ngành Dọc (Industry Advisory Board)',
    rolePlaceholderEN: 'Industry & Sector Advisory Fellow',
    overviewVI: 'Tập hợp các chuyên gia kỳ cựu cung cấp góc nhìn chuyên sâu về chính sách ngành, xu hướng hiện đại hóa mô hình kinh doanh và giải pháp tài chính công nghệ tối ưu cho doanh nghiệp.',
    overviewEN: 'Brings veteran insights on sector-specific policies, business model modernization, and technology investment optimization (TCO/ROI).',
    responsibilitiesVI: [
      'Tư vấn chiến lược lộ trình hiện đại hóa quy trình cho các ngành tài chính, bán lẻ, viễn thông.',
      'Đánh giá tác động kinh tế và bài toán hoàn vốn (ROI) trước khi triển khai quy mô lớn.',
      'Cầu nối giữa giới hoạch định chính sách chuyển đổi số và thực tiễn vận hành doanh nghiệp.'
    ],
    responsibilitiesEN: [
      'Advises transformation roadmaps tailored for BFSI, retail, healthcare, and telecom.',
      'Assesses economic viability and total cost of ownership before mass rollout.',
      'Bridges public digital transformation initiatives with private enterprise execution.'
    ],
    valueDeliveryVI: 'Bảo đảm nguồn vốn đầu tư công nghệ được phân bổ chính xác vào các điểm nghẽn sinh lời cao nhất của doanh nghiệp.',
    valueDeliveryEN: 'Ensures tech capital expenditure is targeted directly at highest-leverage organizational value drivers.'
  },
  {
    id: 5,
    memberNumber: '05',
    domainVI: 'Pháp Chế Công Nghệ & Quản Trị Tuân Thủ',
    domainEN: 'Legal, Data Sovereignty & Compliance',
    rolePlaceholderVI: 'Cố Vấn Pháp Chế & An Toàn Dữ Liệu (Chief Compliance & Legal Advisor)',
    rolePlaceholderEN: 'Chief Compliance & Data Governance Advisor',
    overviewVI: 'Bảo đảm toàn diện khuôn khổ pháp lý về dữ liệu, đáp ứng đầy đủ quy chuẩn bảo vệ dữ liệu cá nhân (Nghị định 13/2023/NĐ-CP), Luật An ninh mạng và các tiêu chuẩn bảo mật quốc tế.',
    overviewEN: 'Guarantees comprehensive regulatory alignment with Vietnam Decree 13 Personal Data Protection, National Cybersecurity Law, and international privacy standards.',
    responsibilitiesVI: [
      'Rà soát quy trình lưu trữ, xử lý và phân loại dữ liệu người dùng theo chuẩn pháp luật.',
      'Thiết lập chính sách truyền dữ liệu xuyên biên giới an toàn và minh bạch.',
      'Hỗ trợ khách hàng hoàn thiện hồ sơ đánh giá tác động xử lý dữ liệu (DPIA).'
    ],
    responsibilitiesEN: [
      'Audits user data classification, storage, and processing pipelines against national statutes.',
      'Architects compliant and transparent cross-border data transfer mechanisms.',
      'Guides enterprises in completing mandatory Data Protection Impact Assessments (DPIA).'
    ],
    valueDeliveryVI: 'Loại bỏ hoàn toàn nguy cơ rủi ro pháp lý và phạt hành chính cho doanh nghiệp khi ứng dụng các công nghệ đám mây mới.',
    valueDeliveryEN: 'Eliminates legal liabilities and regulatory penalties when deploying next-generation cloud architectures.'
  },
  {
    id: 6,
    memberNumber: '06',
    domainVI: 'Phòng Lab Thực Nghiệm & Kiểm Chứng PoC',
    domainEN: 'PoC Engineering Lab & Integration Testing',
    rolePlaceholderVI: 'Trưởng Ban Thực Nghiệm Kỹ Thuật (Director of PoC Validation Lab)',
    rolePlaceholderEN: 'Director of PoC Validation Lab',
    overviewVI: 'Trực tiếp phụ trách cơ sở thử nghiệm Lab PoC độc lập của V-Tech Hub, nơi doanh nghiệp được giả lập tình huống thực tế và đo lường hiệu năng giải pháp trước khi đưa vào sản xuất.',
    overviewEN: 'Directs V-Tech Hub’s independent PoC validation facility, enabling enterprises to simulate live workloads and benchmark KPIs risk-free prior to procurement.',
    responsibilitiesVI: [
      'Xây dựng môi trường giả lập (Sandbox) mô phỏng tải thực tế và thử thách bảo mật.',
      'Cung cấp báo cáo kiểm chứng kỹ thuật độc lập và khuyến nghị cấu hình tối ưu.',
      'Chuyển giao tri thức và hướng dẫn đội ngũ kỹ sư nội bộ của khách hàng tiếp quản hệ thống.'
    ],
    responsibilitiesEN: [
      'Provisions high-fidelity sandbox environments to stress-test throughput and security resilience.',
      'Delivers objective benchmark reports with optimized production sizing parameters.',
      'Executes knowledge transfer and hands-on operational enablement for in-house client teams.'
    ],
    valueDeliveryVI: 'Xác thực 100% tính hiệu quả của giải pháp trên số liệu thực trước khi chi ngân sách triển khai chính thức.',
    valueDeliveryEN: 'Delivers 100% evidence-based validation on live data before capital is committed to deployment.'
  }
];
