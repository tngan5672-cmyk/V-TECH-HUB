import { SolutionCategory } from './solutionsCatalog';

export const SOLUTIONS_CATALOG_VI: SolutionCategory[] = [
  {
    id: 'cloud-delivery',
    title: 'Cloud & Delivery',
    pillar: 'engineer',
    pillarLabel: 'ENGINEER',
    description: 'Hạ tầng điện toán đám mây tốc độ cao, phân phối nội dung đa vùng và máy chủ vật lý chuyên dụng.',
    items: [
      {
        id: 'content-delivery-network',
        title: 'Content Delivery Network',
        category: 'cloud-delivery',
        categoryLabel: 'Cloud & Delivery',
        pillar: 'engineer',
        poweredBy: 'VNETWORK',
        providerLogos: ['VNETWORK'],
        tagline: 'Phân phối nội dung & truyền dẫn Livestream độ trễ dưới 1 giây với 2,300+ PoPs toàn cầu',
        concept: 'VNCDN là giải pháp Mạng phân phối nội dung (CDN) kết hợp Multi-CDN thông minh, dịch vụ quản lý video (VMS) và chuẩn truyền tải độ trễ cực thấp (HLS Low Latency, WebRTC). Hệ thống tự động điều phối lưu lượng đến cụm máy chủ gần người dùng nhất, đảm bảo video và nội dung tĩnh được phân phối mượt mà ngay cả khi có hàng triệu người truy cập đồng thời.',
        quoteHighlight: {
          quote: 'Mạng lưới Multi-CDN toàn cầu với 2,300+ PoPs tại 146 quốc gia, sẵn sàng gánh tải 20+ tỷ requests mỗi ngày và băng thông uplink hơn 200 Tbps.',
          source: 'Báo cáo Năng lực Hạ tầng Mạng 2026',
          accentValue: '2,300+',
          accentLabel: 'Global Edge PoPs'
        },
        keyStats: [
          { value: '< 1s', label: 'Độ trễ truyền hình trực tiếp', sub: 'HLS Low Latency & WebRTC' },
          { value: '200+ Tbps', label: 'Băng thông Uplink quốc tế', sub: '20+ tỷ requests/ngày' },
          { value: '99.99%', label: 'Cam kết SLA vận hành', sub: 'Chống nghẽn hạ tầng tuyệt đối' },
          { value: '-70%', label: 'Tiết kiệm tải máy chủ gốc', sub: 'Origin Shield & Multi-tier Cache' }
        ],
        problems: [
          {
            problem: 'Tốc độ tải website/app chậm trong giờ cao điểm',
            consequence: 'Người dùng gián đoạn trải nghiệm, rời bỏ ứng dụng và sụt giảm doanh thu.'
          },
          {
            problem: 'Máy chủ gốc bị quá tải khi lượng xem livestream tăng đột biến',
            consequence: 'Hiện tượng giật lag, đơ nghẽn hệ thống, chi phí băng thông máy chủ gốc tăng vọt.'
          },
          {
            problem: 'Thiếu hạ tầng phân phối đa thiết bị chuẩn 4K/8K',
            consequence: 'Khó khăn khi tối ưu chuẩn nén video cho từng kích thước màn hình và băng thông mạng.'
          },
          {
            problem: 'Nguy cơ vi phạm bản quyền và đánh cắp luồng stream (Hotlinking)',
            consequence: 'Thất thoát tài sản nội dung số giá trị cao và thiệt hại thương hiệu.'
          }
        ],
        targetAudiences: [
          { title: 'Đài Truyền Hình & OTT', desc: 'Phát sóng trực tiếp sự kiện thể thao, giải trí với hàng triệu người xem đồng thời (VTV, THVL, VieON, FPT Play).', iconName: 'media' },
          { title: 'Báo Chí & Tạp Chí Số', desc: 'Tải trang nhanh tức thì, phân phối hình ảnh và bài viết độ phân giải cao cho hàng chục triệu độc giả hàng ngày.', iconName: 'media' },
          { title: 'Sàn Thương Mại Điện Tử', desc: 'Tối ưu tốc độ tải trang sản phẩm và video bán hàng trực tiếp (Livestream Shopping) trong các đợt Siêu Sale.', iconName: 'retail' },
          { title: 'Game Online & Esports', desc: 'Tải bản cập nhật game (Patching) tốc độ gigabit và truyền trực tiếp các giải đấu thể thao điện tử.', iconName: 'tech' },
          { title: 'Giáo Dục Trực Tuyến (EdTech)', desc: 'Học trực tuyến không gián đoạn, phát bài giảng tương tác video mượt mà trên mọi thiết bị di động.', iconName: 'school' },
          { title: 'Doanh Nghiệp Đa Quốc Gia', desc: 'Phân phối ứng dụng và tài liệu nội bộ xuyên biên giới với chất lượng kết nối đồng đều tại 146 quốc gia.', iconName: 'enterprise' }
        ],
        highlights: [
          'Hạ tầng 2,300+ PoPs đặt tại tất cả ISP hàng đầu Việt Nam (Viettel, VNPT, FPT, Mobifone) và 146 quốc gia',
          'Tự động chuyển mã video theo yêu cầu (VMS Adaptive Bitrate) mượt mà trên mọi thiết bị',
          'Truyền hình trực tiếp HLS Low Latency giảm độ trễ xuống dưới 1 giây',
          'Bảo mật nội dung đa tầng: DRM (Widevine, FairPlay, PlayReady), Geo-blocking, Tokenized URL'
        ],
        keyFeatures: [
          {
            name: 'Multi-CDN AI Dynamic Routing',
            detail: 'Hệ thống AI liên tục giám sát chất lượng mạng từng ISP để tự động chuyển luồng người dùng đến CDN có tốc độ phản hồi nhanh nhất.'
          },
          {
            name: 'Transcoding & VMS On-Demand',
            detail: 'Chuyển mã video tự động sang các định dạng tối ưu (H.264, H.265, AV1) giúp tiết kiệm 40% dung lượng mà vẫn giữ trọn độ nét.'
          },
          {
            name: 'Origin Shield & Smart Caching',
            detail: 'Cơ chế bộ nhớ đệm phân tầng bảo vệ máy chủ gốc, giảm tải egress bandwidth lên đến 80%–95%.'
          },
          {
            name: 'Giám sát & Phát hiện vi phạm bản quyền',
            detail: 'Phát hiện và ngăn chặn các luồng phát lậu, chữ ký số bảo mật cho từng phiên xem video của người dùng.'
          }
        ],
        businessOutcomes: [
          'Nâng cao hiệu suất livestream lên 47%, chấm dứt hoàn toàn tình trạng giật lag giờ cao điểm (Case Study VTV)',
          'Tối ưu chi phí hạ tầng máy chủ nhờ mô hình thanh toán linh hoạt theo lưu lượng thực tế',
          'Đội ngũ chuyên gia kỹ thuật hỗ trợ trực chiến 24/7 theo từng chiến dịch phát sóng lớn'
        ],
        specs: [
          { label: 'Mạng lưới PoPs', value: '2,300+ PoPs toàn cầu' },
          { label: 'Băng thông CDN', value: '200+ Tbps Uplink' },
          { label: 'Chuẩn truyền tải', value: 'LL-HLS, WebRTC, RTMP, DASH' },
          { label: 'Thời gian phản hồi', value: '< 5ms tại Việt Nam' }
        ],
        trustedClients: ['VTV', 'THVL', 'VieON', 'FPT Play', 'Tiki', 'CellphoneS', 'Galaxy Cinema', 'Sendo']
      },
      {
        id: 'public-private-cloud',
        title: 'Hạ Tầng Điện Toán Đám Mây (Cloud Server)',
        category: 'cloud-delivery',
        categoryLabel: 'Cloud & Delivery',
        pillar: 'engineer',
        poweredBy: 'VNETWORK',
        providerLogos: ['VNETWORK'],
        tagline: 'Hạ tầng điện toán đám mây tự chủ, bảo mật tối ưu và lưu trữ dữ liệu 100% tại Việt Nam',
        concept: 'VCLOUD là nền tảng điện toán đám mây toàn diện, cung cấp các gói Public Cloud linh hoạt và Sovereign Private Cloud biệt lập phần cứng. Hệ thống tuân thủ tuyệt đối Nghị định 13/2023/NĐ-CP và Luật An ninh mạng về lưu trữ dữ liệu tại Việt Nam, đáp ứng tiêu chuẩn khắt khe của ngành Ngân hàng, Tài chính và Y tế.',
        quoteHighlight: {
          quote: 'Triển khai dễ dàng, quản lý hiệu quả và mở rộng quy mô không giới hạn với cấu hình CPU Intel Xeon 6 / AMD EPYC và ổ cứng NVMe Gen5 tốc độ cao.',
          source: 'Báo cáo Kỹ thuật Điện toán Đám mây Doanh nghiệp',
          accentValue: '800,000+',
          accentLabel: 'IOPS Read/Write'
        },
        keyStats: [
          { value: '99.99%', label: 'Uptime SLA Cam Kết', sub: 'Hạ tầng Tier III chuẩn quốc tế' },
          { value: '800k+', label: 'Tốc độ đọc ghi IOPS', sub: 'NVMe Gen5 Ultra Performance' },
          { value: '100+ Gbps', label: 'Băng thông Uplink trong nước', sub: 'Băng thông quốc tế 10+ Gbps' },
          { value: '< 1 Phút', label: 'Khởi tạo máy chủ tức thì', sub: 'Tích hợp sẵn n8n & Marketplace' }
        ],
        problems: [
          {
            problem: 'Quy định lưu trữ dữ liệu cá nhân bắt buộc tại Việt Nam (Nghị định 13, Luật ANM)',
            consequence: 'Doanh nghiệp dùng cloud quốc tế đối mặt rủi ro pháp lý, thanh tra và mức phạt lên đến hàng tỷ đồng.'
          },
          {
            problem: 'Chi phí Cloud quốc tế biến động lớn do tỷ giá ngoại tệ và phí egress',
            consequence: 'Khó kiểm soát ngân sách CNTT hàng năm, chi phí vận hành tăng vọt ngoài tầm kiểm soát.'
          },
          {
            problem: 'Độ trễ cao khi kết nối về máy chủ đặt ở nước ngoài',
            consequence: 'Ảnh hưởng đến các ứng dụng giao dịch tài chính thời gian thực và trải nghiệm người dùng.'
          },
          {
            problem: 'Hỗ trợ kỹ thuật từ xa chậm trễ, thiếu chuyên gia trực tiếp xử lý tại chỗ',
            consequence: 'Thời gian downtime kéo dài gây tổn thất lớn về doanh thu và uy tín doanh nghiệp.'
          }
        ],
        targetAudiences: [
          { title: 'Ngân Hàng & Fintech', desc: 'Triển khai hạ tầng Private Cloud biệt lập, lưu trữ dữ liệu giao dịch tài chính nội địa an toàn.', iconName: 'bank' },
          { title: 'Bệnh Viện & Y Tế', desc: 'Lưu trữ hồ sơ bệnh án điện tử (EMR) và hệ thống quản lý bệnh viện (HIS) đạt chuẩn Bộ Y tế.', iconName: 'hospital' },
          { title: 'Khối Cơ Quan Nhà Nước', desc: 'Đảm bảo chủ quyền dữ liệu số quốc gia, hệ thống phòng thủ mạng độc lập 100% trong nước.', iconName: 'gov' },
          { title: 'Doanh Nghiệp Bán Lẻ & ERP', desc: 'Hệ thống vận hành chuỗi bán lẻ, quản lý kho bãi và hóa đơn điện tử sẵn sàng chịu tải cao.', iconName: 'retail' },
          { title: 'Công Ty Phần Mềm (SaaS)', desc: 'Môi trường Kubernetes, CI/CD Pipeline và Database as a Service triển khai nhanh chóng.', iconName: 'tech' },
          { title: 'Tập Đoàn Đa Ngành', desc: 'Hạ tầng lai (Hybrid Cloud) kết nối liền mạch giữa Data Center vật lý và Cloud linh hoạt.', iconName: 'enterprise' }
        ],
        highlights: [
          'Hạ tầng 4,000+ máy chủ vật lý đặt tại Hà Nội, Đà Nẵng, Bình Dương và TP. Hồ Chí Minh',
          'Trang bị CPU Intel® Xeon® 6 Efficient 6740E và ổ cứng NVMe Gen5 tốc độ vượt trội',
          'Đạt chứng nhận quốc tế ISO 27001, ISO 20000-1 và Giấy phép An toàn thông tin mạng của Bộ TT-TT',
          'Tích hợp sẵn hệ sinh thái bảo mật (Anti-DDoS, WAF) và tự động sao lưu định kỳ'
        ],
        keyFeatures: [
          {
            name: 'VCLOUD Elastic Compute & GPU Servers',
            detail: 'Tùy chỉnh vCPU/RAM linh hoạt theo nhu cầu, hỗ trợ GPU Server chuyên dụng cho các tác vụ huấn luyện mô hình AI.'
          },
          {
            name: 'Database as a Service (DBaaS)',
            detail: 'Hỗ trợ sẵn các database engine thông dụng: PostgreSQL, MySQL, MariaDB, MongoDB, Redis, MS SQL với cơ chế auto-backup.'
          },
          {
            name: 'Containers & Managed Kubernetes (K8S)',
            detail: 'Tự động mở rộng cụm container theo tải thực tế, tích hợp sẵn Container Registry và quy trình CI/CD Devops.'
          },
          {
            name: 'Zero-Trust Virtual Private Cloud (VPC)',
            detail: 'Mạng riêng ảo cô lập hoàn toàn với tường lửa đa lớp, VPN kết nối Site-to-Site an toàn tuyệt đối.'
          }
        ],
        businessOutcomes: [
          'Cắt giảm 40%–60% chi phí hạ tầng so với các nhà cung cấp Cloud quốc tế',
          'Đảm bảo 100% tính tuân thủ pháp luật Việt Nam (Nghị định 53/2022 và Nghị định 13/2023)',
          'Đội ngũ kỹ sư hỗ trợ 1:1 trực tiếp tại Việt Nam 24/7/365 qua điện thoại và kênh hỗ trợ chuyên biệt'
        ],
        specs: [
          { label: 'Hạ tầng máy chủ', value: '4,000+ Server tại VN' },
          { label: 'Phần cứng', value: 'NVMe Gen5, CPU Intel Xeon 6' },
          { label: 'Chứng chỉ', value: 'ISO 27001 / ISO 20000-1' },
          { label: 'Data Center', value: 'Tier III quốc tế (HN, ĐN, HCM)' }
        ],
        trustedClients: ['Vietcap', 'MBS', 'FireAnt', 'Nhất Tín Logistics', 'GS25', 'ACFC', 'Fahasa', 'Ricons']
      },
      {
        id: 'bare-metal-data-center',
        title: 'Máy Chủ Vật Lý & Trung Tâm Dữ Liệu',
        category: 'cloud-delivery',
        categoryLabel: 'Cloud & Delivery',
        pillar: 'engineer',
        poweredBy: 'VNETWORK',
        providerLogos: ['VNETWORK'],
        tagline: 'Máy chủ vật lý dùng riêng hiệu năng tối đa & Không gian Data Center Tier III chuẩn quốc tế',
        concept: 'Dịch vụ cho thuê máy chủ vật lý riêng biệt (Bare Metal) và vị trí đặt máy chủ (Colocation Data Center) tại các trung tâm dữ liệu chuẩn Tier III trên toàn quốc. Doanh nghiệp nắm toàn quyền kiểm soát phần cứng 100%, không chia sẻ tài nguyên, đáp ứng tối đa nhu cầu xử lý dữ liệu lớn, Core Banking và Big Data.',
        quoteHighlight: {
          quote: 'Không gian máy chủ linh hoạt, bảo mật đa lớp từ camera giám sát sinh trắc học đến kết nối mạng dự phòng N+1 đảm bảo tính liên tục của doanh nghiệp.',
          source: 'Tài liệu Tiêu chuẩn Kỹ thuật Data Center Doanh nghiệp',
          accentValue: '100%',
          accentLabel: 'Dedicated Hardware'
        },
        keyStats: [
          { value: '100%', label: 'Tài nguyên phần cứng riêng biệt', sub: 'Không ảo hóa chia sẻ' },
          { value: 'Tier III', label: 'Tiêu chuẩn Data Center', sub: 'Nguồn điện & Làm mát 2N+1' },
          { value: '24/7', label: 'Giám sát an ninh vật lý', sub: 'Kiểm soát vân tay & Camera' },
          { value: 'Multi-ISP', label: 'Kết nối mạng đa nhà mạng', sub: 'Băng thông tùy chỉnh linh hoạt' }
        ],
        problems: [
          {
            problem: 'Ứng dụng Core Banking và Big Data đòi hỏi hiệu năng CPU & IOPS không bị chia sẻ',
            consequence: 'Máy chủ ảo hóa thông thường bị giảm hiệu năng do hiện tượng tranh chấp tài nguyên (Noisy Neighbors).'
          },
          {
            problem: 'Tự đầu tư xây dựng phòng máy chủ (Server Room) tốn kém hàng chục tỷ đồng',
            consequence: 'Gánh nặng chi phí CAPEX lớn, rủi ro hỏng hóc hệ thống điện, điều hòa và an ninh PCCC.'
          },
          {
            problem: 'Nguy cơ gián đoạn đường truyền Internet đơn lẻ khi xảy ra sự cố cáp quang',
            consequence: 'Downtime kéo dài làm ngưng trệ toàn bộ hoạt động giao dịch của doanh nghiệp.'
          },
          {
            problem: 'Thiếu nhân sự trực vận hành phần cứng tại chỗ 24/7',
            consequence: 'Không kịp thời thay thế ổ cứng, RAM, nguồn khi có cảnh báo lỗi vật lý.'
          }
        ],
        targetAudiences: [
          { title: 'Ngân Hàng & Chứng Khoán', desc: 'Vận hành hệ thống Core Banking, khớp lệnh chứng khoán tốc độ micro-giây.', iconName: 'bank' },
          { title: 'Nhà Phát Hành Game (Game Publisher)', desc: 'Chạy cụm máy chủ game nặng (MMORPG) yêu cầu độ trễ thấp và băng thông cực lớn.', iconName: 'tech' },
          { title: 'Doanh Nghiệp Fintech & Thanh Toán', desc: 'Đạt chuẩn bảo mật khắt khe PCI-DSS với hệ thống máy chủ vật lý riêng biệt.', iconName: 'dollar' },
          { title: 'Tập Đoàn Sản Xuất & Bán Lẻ', desc: 'Đặt cụm máy chủ SAP / Oracle ERP phục vụ hàng trăm chi nhánh trên toàn quốc.', iconName: 'enterprise' },
          { title: 'Doanh Nghiệp AI & Big Data', desc: 'Cụm máy chủ chuyên dụng gắn nhiều card GPU xử lý dữ liệu lớn và AI Training.', iconName: 'tech' },
          { title: 'Đơn Vị Cung Cấp Dịch Vụ CNTT (SI / MSP)', desc: 'Xây dựng giải pháp Cloud riêng để phục vụ lại cho tệp khách hàng doanh nghiệp.', iconName: 'briefcase' }
        ],
        highlights: [
          'Hệ thống máy chủ cấu hình mạnh mẽ sử dụng CPU Intel Xeon / AMD EPYC thế hệ mới nhất',
          'Triển khai linh hoạt trên mọi nhà mạng (Viettel, VNPT, FPT), không giới hạn khu vực',
          'Sẵn sàng triển khai bàn giao trong vòng 24 giờ, giúp rút ngắn thời gian Go-live',
          'Hệ thống an ninh đa lớp: quản lý máy chủ với camera giám sát, vân tay, hỗ trợ quản trị từ xa IP KVM/iLO'
        ],
        keyFeatures: [
          {
            name: 'Dedicated Bare Metal Compute',
            detail: 'Toàn bộ xung nhịp CPU, dung lượng RAM DDR5 và ổ cứng Enterprise NVMe thuộc quyền sở hữu riêng của doanh nghiệp.'
          },
          {
            name: 'Tier III High Availability Facility',
            detail: 'Hệ thống điện dự phòng UPS 2N, máy phát điện diesel tự động chuyển nguồn trong 15 giây, điều hòa chính xác duy trì nhiệt độ tối ưu.'
          },
          {
            name: 'Multi-Homed Network Uplink',
            detail: 'Kết nối trực tiếp vào các tuyến peering trong nước và quốc tế, băng thông chống nghẽn lên đến hàng trăm Gbps.'
          },
          {
            name: 'Dịch vụ Remote Hands 24/7',
            detail: 'Đội ngũ kỹ sư hỗ trợ cắm dây, kiểm tra phần cứng, khởi động lại và gắn thiết bị theo yêu cầu mọi lúc.'
          }
        ],
        businessOutcomes: [
          'Tiết kiệm 70% chi phí đầu tư ban đầu so với việc tự xây dựng trung tâm dữ liệu',
          'Đạt hiệu năng xử lý tối đa, loại bỏ hoàn toàn độ trễ ảo hóa',
          'Bảo vệ an toàn tuyệt đối tài sản công nghệ thông tin trọng yếu của doanh nghiệp'
        ],
        specs: [
          { label: 'Data Center', value: 'Chuẩn Tier III Quốc tế' },
          { label: 'Thời gian bàn giao', value: 'Trong vòng 24 giờ' },
          { label: 'Hạ tầng mạng', value: 'Đa nhà mạng (Multi-ISP)' },
          { label: 'Quản trị từ xa', value: 'IP KVM / iDRAC / iLO' }
        ],
        trustedClients: ['Vietcap', 'FireAnt', 'VNG Games', 'Galaxy Cinema', 'Hyundai', 'LG Electronics']
      },
      {
        id: 'cloud-storage',
        title: 'Lưu Trữ Đám Mây (Cloud Storage S3)',
        category: 'cloud-delivery',
        categoryLabel: 'Cloud & Delivery',
        pillar: 'engineer',
        poweredBy: 'VNETWORK',
        providerLogos: ['VNETWORK'],
        tagline: 'Lưu trữ đối tượng S3-Compatible không giới hạn, độ bền dữ liệu 99.999999999% (11 số 9)',
        concept: 'V-Storage là giải pháp lưu trữ đối tượng đám mây (Object Storage) chuẩn tương thích AWS S3, cho phép doanh nghiệp lưu trữ, sao lưu và truy xuất dữ liệu phi cấu trúc (hình ảnh, video, tài liệu, backup) với độ bền dữ liệu lên đến 11 số 9 và chi phí tối ưu.',
        quoteHighlight: {
          quote: 'Lưu trữ dữ liệu trực tuyến linh hoạt và mở rộng không giới hạn với chi phí tối ưu, mã hóa dữ liệu AES-256 và bảo mật chuẩn quốc tế.',
          source: 'Hướng dẫn Kiến trúc Lưu trữ Đám mây Doanh nghiệp',
          accentValue: '11 Chín',
          accentLabel: 'Độ Bền Dữ Liệu (99.999999999%)'
        },
        keyStats: [
          { value: '11 Số 9', label: 'Độ bền dữ liệu hàng năm', sub: '99.999999999% Data Durability' },
          { value: '100% S3', label: 'Tương thích chuẩn API S3', sub: 'Tích hợp mượt mà mọi ứng dụng' },
          { value: '-50%', label: 'Tiết kiệm chi phí lưu trữ', sub: 'Không tính phí Egress quá mức' },
          { value: 'AES-256', label: 'Mã hóa an toàn dữ liệu', sub: 'Bảo mật truyền dẫn & Lưu trữ' }
        ],
        problems: [
          {
            problem: 'Khối lượng dữ liệu sao lưu (backup, video, media) tăng theo cấp số nhân',
            consequence: 'Hệ thống ổ cứng cục bộ (SAN/NAS) nhanh chóng đầy dung lượng, chi phí mở rộng rất đắt đỏ.'
          },
          {
            problem: 'Chi phí tải dữ liệu (Egress fee) của các dịch vụ Cloud quốc tế rất cao',
            consequence: 'Hóa đơn lưu trữ hàng tháng tăng đột biến khi doanh nghiệp cần phục hồi hoặc truy xuất dữ liệu.'
          },
          {
            problem: 'Rủi ro hỏng ổ cứng hoặc thiên tai làm mất dữ liệu vĩnh viễn',
            consequence: 'Tổn thất không thể khắc phục các dữ liệu tài chính, hồ sơ khách hàng và chứng từ quan trọng.'
          },
          {
            problem: 'Khó khăn khi tích hợp với các công cụ sao lưu hiện có',
            consequence: 'Tốn thời gian phát triển lại mã nguồn và cấu hình phức tạp.'
          }
        ],
        targetAudiences: [
          { title: 'Nền Tảng Media & Truyền Thông', desc: 'Lưu trữ hàng triệu giờ video, hình ảnh chất lượng cao phục vụ phân phối qua CDN.', iconName: 'media' },
          { title: 'Tài Chính & Kế Toán', desc: 'Lưu trữ hóa đơn điện tử, chứng từ giao dịch phục vụ lưu trữ dài hạn theo quy định pháp luật.', iconName: 'bank' },
          { title: 'Hệ Thống Y Tế & Bệnh Viện', desc: 'Lưu trữ phim chụp X-quang, MRI, CT dung lượng lớn trong nhiều năm.', iconName: 'hospital' },
          { title: 'Doanh Nghiệp Triển Khai Sao Lưu (Backup & DR)', desc: 'Làm đích đến lưu trữ cho Veeam Backup, Commvault và Kubernetes Snapshots.', iconName: 'enterprise' },
          { title: 'Ứng Dụng Mobile & Web', desc: 'Lưu trữ avatar, file đính kèm và tài liệu người dùng tải lên.', iconName: 'tech' },
          { title: 'Cơ Quan Quản Lý & Giáo Dục', desc: 'Kho học liệu số, tài liệu nghiên cứu và hồ sơ học viên lưu trữ an toàn trọn đời.', iconName: 'school' }
        ],
        highlights: [
          'Tương thích 100% chuẩn S3 API, dễ dàng kết hợp với các tool backup phổ biến (Veeam, Rclone, Cyberduck)',
          'Dữ liệu được nhân bản tự động đa vùng (Multi-AZ) đảm bảo không bao giờ bị mất mát',
          'Mã hóa dữ liệu tại chỗ (Server-side Encryption AES-256) và trong quá trình truyền tải (TLS 1.3)',
          'Tích hợp trực tiếp với mạng phân phối VNCDN để tăng tốc tải file nhanh gấp 10 lần'
        ],
        keyFeatures: [
          {
            name: 'Chuẩn S3-Compatible API Đầy Đủ',
            detail: 'Hỗ trợ đầy đủ các lệnh Bucket Policy, Multipart Upload, Lifecycle Management và Pre-signed URL an toàn.'
          },
          {
            name: 'Phân Tầng Dữ Liệu Tự Động (Data Lifecycle)',
            detail: 'Tự động chuyển đổi dữ liệu ít truy cập sang các gói lưu trữ lạnh (Cold Storage) để giảm tối đa chi phí.'
          },
          {
            name: 'Bảo Vệ Chống Ghi Đè (Object Lock & WORM)',
            detail: 'Chống mã độc tống tiền (Ransomware) xóa hoặc mã hóa dữ liệu sao lưu với tính năng Write Once Read Many.'
          },
          {
            name: 'Băng Thông Nội Địa Không Giới Hạn',
            detail: 'Tốc độ tải dữ liệu lên và xuống cực nhanh nhờ hạ tầng mạng băng thông rộng đặt tại Việt Nam.'
          }
        ],
        businessOutcomes: [
          'Giảm 50% tổng chi phí sở hữu (TCO) cho lưu trữ dữ liệu dung lượng lớn',
          'Bảo vệ an toàn 100% dữ liệu doanh nghiệp trước nguy cơ tấn công mã độc ransomware',
          'Khôi phục dữ liệu nhanh chóng khi xảy ra sự cố nhờ băng thông trong nước tốc độ cao'
        ],
        specs: [
          { label: 'Độ bền dữ liệu', value: '99.999999999% (11 số 9)' },
          { label: 'Chuẩn giao tiếp', value: 'AWS S3 REST API' },
          { label: 'Mã hóa dữ liệu', value: 'AES-256 / SSL TLS 1.3' },
          { label: 'Cơ chế dự phòng', value: 'Multi-AZ Geo-Replication' }
        ],
        trustedClients: ['Tiki', 'Sendo', 'VTV', 'Fahasa', 'Vietcap', 'Nhất Tín Logistics']
      }
    ]
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    pillar: 'engineer',
    pillarLabel: 'ENGINEER',
    description: 'Bảo mật toàn diện từ biên Internet, ứng dụng Web/API, phòng chống rò rỉ dữ liệu nội bộ đến kiểm soát CSDL.',
    items: [
      {
        id: 'infrastructure-web-security',
        title: 'Web/App/API Security',
        category: 'cyber-security',
        categoryLabel: 'Cyber Security',
        pillar: 'engineer',
        poweredBy: 'VNETWORK',
        providerLogos: ['VNETWORK'],
        tagline: 'Tường lửa ứng dụng web thông minh & Phòng chống tấn công DDoS đa tầng Layer 3/4/7',
        concept: 'VNIS (VNETWORK Internet Security) là nền tảng bảo mật toàn diện cho Web, App và API ứng dụng AI/Machine Learning thế hệ mới. Hệ thống kết hợp mạng lưới Multi-CDN toàn cầu, tường lửa AI WAF với 2,400+ bộ quy tắc chuyên sâu, cơ chế cân bằng tải thông minh và đội ngũ chuyên gia SOC giám sát ứng cứu 24/7 chỉ trong vòng 5 phút.',
        quoteHighlight: {
          quote: 'Giải pháp VNIS WAAP bảo mật được kiến tạo từ AI — nơi AI không chỉ là công cụ hỗ trợ mà đóng vai trò trung tâm trong dự báo, nhận diện và phòng chống các cuộc tấn công mạng tinh vi.',
          source: 'Báo cáo An toàn Ứng dụng Web & API 2026',
          accentValue: '20+ Tbps',
          accentLabel: 'Dung lượng lọc DDoS'
        },
        keyStats: [
          { value: '20+ Tbps', label: 'Dung lượng lọc tấn công DDoS', sub: 'Chống đỡ mọi cuộc tấn công Layer 3, 4, 7' },
          { value: '2,400+', label: 'Bộ quy tắc an ninh AI WAF', sub: 'Chặn đứng OWASP Top 10 & Zero-Day' },
          { value: '< 5 Phút', label: 'Thời gian SOC ứng cứu khẩn cấp', sub: 'Chuyên gia an ninh trực chiến 24/7' },
          { value: '99.99%', label: 'Độ khả dụng hệ thống liên tục', sub: 'Cân bằng tải AI Smart Load Balancing' }
        ],
        problems: [
          {
            problem: 'Bị tấn công DDoS làm tê liệt website, sập máy chủ trong giờ cao điểm',
            consequence: 'Dịch vụ ngưng trệ nhiều ngày, khách hàng mất niềm tin và thiệt hại nặng nề về doanh thu.'
          },
          {
            problem: 'Lỗ hổng bảo mật Web & API bị tin tặc khai thác (SQL Injection, XSS, API Scraping)',
            consequence: 'Dữ liệu khách hàng bị rò rỉ, vi phạm pháp luật an toàn thông tin và chịu phạt nặng.'
          },
          {
            problem: 'Chi phí vận hành tăng vọt do phát sinh băng thông mạng khi bị botnet tấn công',
            consequence: 'Tốn kém chi phí máy chủ vô ích cho lưu lượng ảo của các cuộc tấn công.'
          },
          {
            problem: 'Thiếu đội ngũ chuyên gia an ninh mạng túc trực ban đêm và ngày lễ',
            consequence: 'Không kịp thời xử lý khi sự cố xảy ra trong đêm, dẫn đến kéo dài thời gian thiệt hại.'
          }
        ],
        targetAudiences: [
          { title: 'Cổng Thông Tin Tài Chính & Chứng Khoán', desc: 'Bảo vệ hệ thống giao dịch trực tuyến luôn thông suốt, không gián đoạn trong giờ khớp lệnh (FireAnt, Vietcap).', iconName: 'bank' },
          { title: 'Sàn Thương Mại Điện Tử & Bán Lẻ', desc: 'Chống bot cào giá (Price Scraping), giữ vững website trước các đợt DDoS siêu quy mô mùa Mega Sale.', iconName: 'retail' },
          { title: 'Cổng Dịch Vụ Công & Báo Điện Tử', desc: 'Bảo đảm an toàn tuyệt đối cho các cổng thông tin quốc gia trước các cuộc tấn công mạng có chủ đích (APT).', iconName: 'gov' },
          { title: 'Nền Tảng Game & Giải Trí Online', desc: 'Chống tấn công DDoS UDP/TCP flood gây lag và rớt mạng cho người chơi game trực tuyến.', iconName: 'tech' },
          { title: 'Ứng Dụng Di Động & Hệ Thống API', desc: 'Bảo vệ API Backend, xác thực danh tính và ngăn chặn các hành vi giả mạo yêu cầu từ botnet.', iconName: 'tech' },
          { title: 'Doanh Nghiệp Vận Tải & Logistics', desc: 'Duy trì hệ thống tra cứu đơn hàng và điều phối vận chuyển hoạt động 24/7 ổn định.', iconName: 'enterprise' }
        ],
        highlights: [
          'Kiến trúc phòng thủ 3 tầng: Tường lửa Layer 3,4 → Tường lửa Layer 7 (Cloud WAAP) → Origin Systems được ẩn hoàn toàn',
          'Tích hợp nhanh chóng chỉ qua cấu hình bản ghi DNS (Domain, Bộ Cert SSL, IP Origin)',
          'AI Smart Load Balancing tự động phân bổ luồng request sạch đến các máy chủ khỏe mạnh nhất',
          'Được khuyến nghị bởi các tổ chức an ninh thông tin uy tín quốc tế'
        ],
        keyFeatures: [
          {
            name: 'AI Web Application Firewall (AI WAF)',
            detail: 'Kết hợp học máy và phân tích hành vi để nhận diện sớm các mối đe dọa Zero-Day mà không gây cản trở người dùng thật.'
          },
          {
            name: 'Hệ Thống Chống DDoS Đa Tầng Tự Động',
            detail: 'Hấp thụ và lọc sạch các đợt tấn công SYN Flood, UDP Amplification, HTTP Flood với dung lượng lên đến 20+ Tbps.'
          },
          {
            name: 'Quản Trị Bot Thông Minh (Bot Management)',
            detail: 'Phân loại chính xác bot hữu ích (Googlebot) và ngăn chặn bot xấu (Credential stuffing, Account takeover, Web scraping).'
          },
          {
            name: 'Ẩn IP Gốc (Origin IP Masking)',
            detail: 'Toàn bộ lưu lượng đi qua lớp phòng thủ, địa chỉ IP thực của máy chủ gốc được bảo mật tuyệt đối.'
          }
        ],
        businessOutcomes: [
          'Bảo vệ thành công trước các đợt tấn công DDoS liên tục hơn 150 Gbps kéo dài nhiều tháng',
          'Giảm 99% các cuộc tấn công tự động nhắm vào lỗ hổng ứng dụng web và API',
          'Thời gian ứng cứu sự cố trung bình < 5 phút với sự đồng hành của chuyên gia SOC 24/7'
        ],
        specs: [
          { label: 'Dung lượng lọc', value: '20+ Tbps Toàn cầu' },
          { label: 'Bộ quy tắc WAF', value: '2,400+ Ruleset & AI' },
          { label: 'Giao thức bảo vệ', value: 'HTTP, HTTPS, HTTP/2, HTTP/3, API' },
          { label: 'Chứng nhận bảo mật', value: 'ITSCC, Gartner, Rapid7' }
        ],
        trustedClients: ['FireAnt', 'Vietcap', 'MBS', 'CellphoneS', 'Tiki', 'Fahasa', 'VieON', 'ACFC']
      },
      {
        id: 'email-security',
        title: 'Email Security',
        category: 'cyber-security',
        categoryLabel: 'Cyber Security',
        pillar: 'engineer',
        poweredBy: 'VNETWORK',
        providerLogos: ['VNETWORK'],
        tagline: 'Hệ thống bảo mật Email thông minh, công nghệ Virtual Zone Sandbox & Phòng chống tấn công giả mạo BEC',
        concept: 'EG-Platform là giải pháp bảo mật Email doanh nghiệp toàn diện ứng dụng trí tuệ nhân tạo AI/ML và công nghệ hộp cát Virtual Zone độc quyền. Hệ thống chủ động phát hiện và cô lập các cuộc tấn công Email tinh vi (Tấn công giả mạo doanh nghiệp BEC, Email lừa đảo Phishing, mã độc tống tiền Ransomware, mã độc đính kèm) trước khi chúng tiếp cận hộp thư nhân sự, đảm bảo an toàn tuyệt đối cho luồng trao đổi thông tin doanh nghiệp.',
        quoteHighlight: {
          quote: 'Chủ động ngăn chặn các cuộc tấn công lừa đảo và mạo danh qua email với công nghệ kích hoạt trong hộp cát ảo và mạng lưới tình báo mối đe dọa đa tầng.',
          source: 'Báo cáo An toàn Thư điện tử Doanh nghiệp 2026',
          accentValue: '99.9%',
          accentLabel: 'Tỷ lệ chặn Email độc hại'
        },
        keyStats: [
          { value: '99.9%', label: 'Tỷ lệ chặn thư rác & mã độc', sub: 'Bộ lọc đa tầng ứng dụng AI/ML' },
          { value: '< 3s', label: 'Tốc độ quét Sandbox', sub: 'Công nghệ Virtual Zone độc quyền' },
          { value: '20+ Tbps', label: 'Hạ tầng Mail Gateway đám mây', sub: 'Đảm bảo gửi nhận email liên tục' },
          { value: '100%', label: 'Bảo mật & Mã hóa thư gửi', sub: 'Chuẩn SPF, DKIM, DMARC & TLS 1.3' }
        ],
        problems: [
          {
            problem: 'Các cuộc tấn công giả mạo lãnh đạo (BEC) và gian lận hóa đơn nhắm vào ban giám đốc và kế toán',
            consequence: 'Thiệt hại tài chính hàng tỷ đồng do chuyển tiền nhầm vào tài khoản giả mạo của tin tặc.'
          },
          {
            problem: 'Tệp đính kèm chứa mã độc tống tiền (Ransomware), Trojan giả dạng hóa đơn, hợp đồng vượt qua bộ lọc cơ bản',
            consequence: 'Toàn bộ máy tính và máy chủ dữ liệu nội bộ bị mã hóa tống tiền.'
          },
          {
            problem: 'Đường dẫn liên kết độc hại (Phishing URL) dẫn đến trang đăng nhập giả mạo Microsoft 365, Google Workspace',
            consequence: 'Nhân viên bị đánh cắp mật khẩu và tin tặc chiếm quyền kiểm soát hộp thư doanh nghiệp.'
          },
          {
            problem: 'Tên miền doanh nghiệp bị giả mạo gửi thư rác khiến IP bị đưa vào danh sách đen (Blacklist)',
            consequence: 'Email gửi khách hàng và đối tác bị từ chối hoặc rơi thẳng vào hòm thư rác (Spam).'
          }
        ],
        targetAudiences: [
          { title: 'Ngân Hàng, Tài Chính & Bảo Hiểm', desc: 'Ngăn chặn gian lận chuyển tiền, giả mạo chứng từ thanh toán và tấn công chiếm đoạt hộp thư ban lãnh đạo.', iconName: 'bank' },
          { title: 'Doanh Nghiệp Vận Tải & Logistics', desc: 'Bảo vệ luồng email giao dịch vận đơn, chứng từ hải quan và thông báo cước tàu.', iconName: 'enterprise' },
          { title: 'Doanh Nghiệp Sản Xuất & Xuất Nhập Khẩu', desc: 'Bảo vệ đàm phán hợp đồng với đối tác quốc tế, phòng chống thay đổi số tài khoản thanh toán trái phép.', iconName: 'enterprise' },
          { title: 'Cơ Quan Nhà Nước & Khối Hành Chính', desc: 'Ngăn chặn các đợt tấn công lừa đảo có chủ đích (Spear-Phishing) và mã độc APT.', iconName: 'gov' },
          { title: 'Thương Mại Điện Tử & Dịch Vụ', desc: 'Đảm bảo tỷ lệ gửi email OTP, hóa đơn và thông báo đến hộp thư khách hàng đạt 100%.', iconName: 'retail' },
          { title: 'Y Tế, Bệnh Viện & Giáo Dục', desc: 'Bảo vệ thông tin người bệnh, chống rò rỉ dữ liệu qua email và chặn email lừa đảo học đường.', iconName: 'hospital' }
        ],
        highlights: [
          'Công nghệ Hộp cát ảo Virtual Zone: Kích hoạt và phân tích tệp đính kèm trong môi trường cách ly an toàn chỉ dưới 3 giây',
          'Phòng chống tấn công BEC & Mạo danh bằng AI: Phân tích hành vi người gửi, kiểm tra ký tự tương đồng tên miền và từ khóa thanh toán khẩn',
          'Bảo mật chiều gửi (Outbound) & Chống Spam: Tự động ký số SPF/DKIM/DMARC và kiểm soát rò rỉ dữ liệu nhạy cảm ra ngoài',
          'Tương thích mượt mà: Triển khai nhanh chóng dạng Mail Gateway cho Microsoft 365, Google Workspace, Exchange và Zimbra'
        ],
        keyFeatures: [
          {
            name: '01. ReceiveGUARD (Bảo vệ toàn diện chiều nhận)',
            detail: 'Lọc email độc hại đa tầng, kích hoạt file đính kèm trong hộp cát Virtual Zone và thay thế đường link (URL rewriting) để quét an toàn theo thời gian thực.'
          },
          {
            name: '02. SendGUARD (Xác thực và bảo vệ chiều gửi)',
            detail: 'Bảo vệ uy tín tên miền gửi đi, tự động xác thực DKIM/DMARC, chống rò rỉ dữ liệu mật và ngăn chặn IP bị rơi vào danh sách đen (Blacklist).'
          },
          {
            name: '03. SpamGUARD (Bộ lọc chống thư rác thông minh)',
            detail: 'Lọc sạch 99.9% thư rác, giảm tải tài nguyên lưu trữ máy chủ và tiết kiệm thời gian làm việc cho nhân viên.'
          },
          {
            name: '04. Bảng điều khiển quản trị & Kiểm toán Email tập trung',
            detail: 'Cung cấp nhật ký kiểm toán chi tiết, quản lý danh sách email bị cách ly, tra cứu lịch sử gửi nhận và phân tích mối đe dọa trực quan.'
          }
        ],
        businessOutcomes: [
          'Triệt tiêu 100% rủi ro gian lận tài chính từ các cuộc tấn công email mạo danh lãnh đạo (BEC)',
          'Giảm 99.9% lượng thư rác và email lừa đảo xâm nhập vào hòm thư nhân viên',
          'Duy trì uy tín tên miền doanh nghiệp sạch, đảm bảo 100% email quan trọng gửi tới đối tác không bị chặn'
        ],
        specs: [
          { label: 'Mô hình triển khai', value: 'Cloud Mail Gateway / Cấu hình bản ghi MX' },
          { label: 'Công nghệ Sandbox', value: 'Virtual Zone (Phân tích <3 giây)' },
          { label: 'Nền tảng hỗ trợ', value: 'M365, Google Workspace, Exchange, Zimbra' },
          { label: 'Tiêu chuẩn bảo mật', value: 'SPF, DKIM, DMARC, TLS 1.3, ISO 27001' }
        ],
        trustedClients: ['Vietcap', 'MBS', 'Nhat Tin Logistics', 'ACFC', 'Fahasa', 'GS25']
      },
      {
        id: 'data-endpoint-protection',
        title: 'Data Loss Prevention',
        category: 'cyber-security',
        categoryLabel: 'Cyber Security',
        pillar: 'engineer',
        poweredBy: 'SearchInform',
        providerLogos: ['SearchInform'],
        tagline: 'Bộ giải pháp bảo vệ dữ liệu 360°, chống thất thoát thông tin & kiểm soát rủi ro nội bộ',
        concept: 'Giải pháp Next-Gen DLP là hệ sinh thái an ninh nội bộ toàn diện gồm 3 cấp độ: Phân loại và kiểm toán dữ liệu (DCAP), Bảo vệ dữ liệu đang di chuyển (DLP) và Giám sát 360° hành vi nhân sự kết hợp phân tích rủi ro (UBA). Giải pháp giúp doanh nghiệp ngăn chặn rò rỉ bí mật kinh doanh, phát hiện gian lận nội bộ và tuân thủ Luật Bảo vệ dữ liệu cá nhân (Nghị định 13/2023).',
        quoteHighlight: {
          quote: 'Chuyển dịch từ ngăn ngừa thất thoát dữ liệu sang ngăn ngừa thất thoát tài chính. Một chuyên gia có thể kiểm soát và bảo vệ tới 1.500 máy tính nhờ hệ sinh thái tích hợp tự động hóa an ninh chuyên sâu.',
          source: 'Báo cáo Kiểm soát An ninh Dữ liệu Nội bộ 2026',
          accentValue: '360°',
          accentLabel: 'Kiểm Soát Rủi Ro Nội Bộ'
        },
        keyStats: [
          { value: '3 Cấp độ', label: 'Mô hình bảo vệ dữ liệu', sub: 'DCAP → DLP → Risk Monitor' },
          { value: '1,500', label: 'Máy tính/1 chuyên gia', sub: 'Tối ưu hóa năng suất kiểm soát an ninh' },
          { value: '100+', label: 'Dịch vụ tích hợp sẵn', sub: 'Email, Chat, USB, Cloud, Microphone, Camera' },
          { value: '100%', label: 'Tuân thủ pháp luật VN', sub: 'Nghị định 13, Luật ANM 2025, PCI-DSS, ISO' }
        ],
        problems: [
          {
            problem: 'Nhân viên gửi nhầm hoặc cố tình sao chép dữ liệu mật ra USB, Telegram, Zalo cá nhân',
            consequence: 'Bí mật kinh doanh, mã nguồn và tệp khách hàng rơi vào tay đối thủ cạnh tranh.'
          },
          {
            problem: 'Gian lận nội bộ: làm giả chứng từ, nâng giá mua sắm, làm việc ngoài (side jobs) trong giờ',
            consequence: 'Thất thoát tài chính nghiêm trọng cho doanh nghiệp mà ban lãnh đạo không hề hay biết.'
          },
          {
            problem: 'Không kiểm soát được dữ liệu nhạy cảm đang nằm rải rác ở đâu trên máy trạm nhân viên',
            consequence: 'Vi phạm Nghị định 13 về bảo vệ dữ liệu cá nhân, nguy cơ bị cơ quan quản lý xử phạt nặng.'
          },
          {
            problem: 'Khi xảy ra sự cố rò rỉ, không có bằng chứng số pháp lý để xử lý kỷ luật hoặc tố tụng',
            consequence: 'Bất lực trước hành vi phá hoại của nhân sự vi phạm do thiếu nhật ký kiểm toán và video ghi lại.'
          }
        ],
        targetAudiences: [
          { title: 'Ngân Hàng & Định Chế Tài Chính', desc: 'Bảo vệ thông tin tài khoản, dữ liệu thẻ tín dụng và phòng chống nhân viên cấu kết gian lận tín dụng.', iconName: 'bank' },
          { title: 'Doanh Nghiệp Sản Xuất & R&D', desc: 'Bảo vệ công thức sản phẩm, bản vẽ kỹ thuật, danh sách nhà cung ứng độc quyền trước nguy cơ bị đánh cắp.', iconName: 'enterprise' },
          { title: 'Công Ty Công Nghệ & Phần Mềm', desc: 'Bảo vệ mã nguồn (Source Code), cấu hình máy chủ và tài khoản truy cập cơ sở hạ tầng.', iconName: 'tech' },
          { title: 'Hệ Thống Y Tế & Dược Phẩm', desc: 'Bảo mật hồ sơ bệnh án bệnh nhân và các công trình nghiên cứu thử nghiệm lâm sàng.', iconName: 'hospital' },
          { title: 'Tập Đoàn Bán Lẻ & Chuỗi Dịch Vụ', desc: 'Kiểm soát dữ liệu hàng triệu khách hàng thân thiết, hóa đơn điện tử và chiến lược giá.', iconName: 'retail' },
          { title: 'Doanh Nghiệp Cần Dịch Vụ MSSP', desc: 'Thuê ngoài dịch vụ an ninh nội bộ trọn gói mà không cần thành lập phòng an ninh thông tin riêng.', iconName: 'briefcase' }
        ],
        highlights: [
          'Kiểm toán Dữ liệu (DCAP): Tự động quét và gắn nhãn tài liệu mật, phát hiện quyền truy cập bất thường trên máy chủ file',
          'Next-Gen DLP: Kiểm soát sâu nội dung văn bản, hình ảnh qua OCR, bản ghi âm micro và dữ liệu trên các thiết bị di động',
          'Risk Monitor: Ghi âm, ghi hình màn hình, nhận diện khuôn mặt qua webcam, phát hiện chụp ảnh màn hình bằng điện thoại, đóng dấu Watermark',
          'Phân tích tâm lý & Hành vi người dùng (UBA): Dự báo sớm nguy cơ nghỉ việc, bất mãn, cờ bạc nợ nần để phòng ngừa rủi ro'
        ],
        keyFeatures: [
          {
            name: '01. FileAuditor (Lớp DCAP)',
            detail: 'Tự động lập danh mục và đánh giá mức độ nhạy cảm của từng tệp tin trên toàn hệ thống máy chủ và máy trạm.'
          },
          {
            name: '02. Next-Gen DLP (Lớp Data-Centric)',
            detail: 'Chặn việc truyền dữ liệu mật qua các kênh: Email doanh nghiệp, Webmail cá nhân, Telegram, Zalo, WhatsApp, Cloud Drives, USB, Máy in.'
          },
          {
            name: '03. Risk Monitor (Lớp User-Centric)',
            detail: 'Ghi lại chi tiết mọi hành vi vi phạm có kèm video bằng chứng pháp lý, hỗ trợ điều tra pháp y số khi xảy ra sự cố.'
          },
          {
            name: 'Dịch vụ bảo mật thuê ngoài (MSSP)',
            detail: 'Cung cấp chuyên gia an ninh vận hành giám sát từ xa cho các doanh nghiệp vừa và nhỏ chưa có cán bộ chuyên trách.'
          }
        ],
        businessOutcomes: [
          'Ngăn chặn kịp thời các vụ đánh cắp cơ sở dữ liệu khách hàng trước khi nhân viên nghỉ việc',
          'Đạt 100% các tiêu chuẩn tuân thủ bảo vệ dữ liệu: Nghị định 13/2023, ISO 27001, PCI DSS, Luật ANM 2025',
          'Giảm 70% thời gian điều tra và thu thập bằng chứng pháp lý khi xảy ra vi phạm nội bộ'
        ],
        specs: [
          { label: 'Hệ điều hành hỗ trợ', value: 'Windows, macOS, Linux' },
          { label: 'Database hỗ trợ', value: 'MS SQL, PostgreSQL' },
          { label: 'Công nghệ phân tích', value: 'OCR, Stemming, Phân tích âm thanh, Sinh trắc học' },
          { label: 'Tiêu chuẩn tuân thủ', value: 'Nghị định 13/2023, ISO 27001, GDPR' }
        ],
        trustedClients: ['Tập đoàn Tài chính', 'Ngân hàng Thương mại', 'Doanh nghiệp FDI', 'Bộ phận Pháp chế & Nhân sự']
      },
      {
        id: 'database-security',
        title: 'Database Security',
        category: 'cyber-security',
        categoryLabel: 'Cyber Security',
        pillar: 'engineer',
        poweredBy: 'PNPSECURE',
        providerLogos: ['PNPSECURE'],
        tagline: 'Kiểm soát truy cập CSDL, mã hóa dữ liệu & ngăn chặn truy vấn trái phép thời gian thực',
        concept: 'Hệ thống Kiểm soát Truy cập Cơ sở Dữ liệu & Hệ thống (DBAC / SAC) là nền tảng quản trị truy cập cơ sở dữ liệu và hệ thống máy chủ chuyên sâu. Hệ thống cung cấp khả năng làm mờ dữ liệu động (Data Masking), chặn đứng các câu lệnh nguy hiểm (DROP, DELETE, SELECT vượt quyền) theo thời gian thực và ghi lại bằng chứng phiên làm việc của quản trị viên (DBA).',
        quoteHighlight: {
          quote: 'Kiểm soát trực tiếp tại tầng truy vấn (Query Policy), độ trễ <1ms và bảng điều khiển vận hành thống nhất duy nhất cho cả quản trị Database và System Access.',
          source: 'Tài liệu Kiến trúc Bảo mật Cơ sở Dữ liệu Doanh nghiệp',
          accentValue: '< 1ms',
          accentLabel: 'Độ trễ vận hành CSDL'
        },
        keyStats: [
          { value: '< 1ms', label: 'Độ trễ truy vấn CSDL', sub: 'Gần như không ảnh hưởng hiệu năng' },
          { value: '100%', label: 'Ngăn chặn truy vấn vượt quyền', sub: 'Chặn DROP, DELETE, SELECT hàng loạt' },
          { value: 'Real-Time', label: 'Mã hóa & Làm mờ dữ liệu', sub: 'Dynamic Data Masking tự động' },
          { value: 'Full Audit', label: 'Ghi lại video phiên DBA', sub: 'Lưu trữ bằng chứng pháp lý đầy đủ' }
        ],
        problems: [
          {
            problem: 'Quản trị viên CSDL (DBA) và lập trình viên có quyền truy cập trực tiếp vào dữ liệu nhạy cảm',
            consequence: 'Nguy cơ dữ liệu bị xem trộm, sao chép hoặc sửa đổi trái phép mà không có cơ chế giám sát độc lập.'
          },
          {
            problem: 'Các giải pháp tường lửa CSDL truyền thống tạo ra quá nhiều log rác và chi phí lưu trữ đắt đỏ',
            consequence: 'Tốn kém tài nguyên lưu trữ và đội ngũ bảo mật bị quá tải thông tin cảnh báo ảo.'
          },
          {
            problem: 'Nhiều môi trường CSDL hỗn hợp (Oracle, MS SQL, PostgreSQL, MySQL) khó quản lý phân quyền tập trung',
            consequence: 'Rủi ro bỏ sót lỗ hổng bảo mật khi phân quyền phân tán trên từng hệ quản trị khác nhau.'
          },
          {
            problem: 'Không thể chặn đứng tức thì câu lệnh độc hại khi đang được thực thi',
            consequence: 'Dữ liệu bị xóa hoặc rò rỉ trước khi hệ thống phát hiện ra sau sự cố.'
          }
        ],
        targetAudiences: [
          { title: 'Ngân Hàng & Core Banking', desc: 'Kiểm soát tuyệt đối mọi truy vấn vào bảng số dư, tài khoản và lịch sử giao dịch (Yang Shin Bank, Sanshin Bank).', iconName: 'bank' },
          { title: 'Tổ Chức Fintech & Ví Điện Tử', desc: 'Bảo vệ thông tin thẻ thanh toán, mã hóa dữ liệu theo chuẩn PCI-DSS và bảo mật API giao dịch.', iconName: 'dollar' },
          { title: 'Doanh Nghiệp Viễn Thông (Telco)', desc: 'Quản lý truy cập CSDL cước và thông tin định danh hàng chục triệu thuê bao di động.', iconName: 'telecom' },
          { title: 'Bệnh Viện & Hồ Sơ Y Tế', desc: 'Làm mờ động (Masking) thông tin chẩn đoán bệnh nhân khi nhân viên kỹ thuật hỗ trợ hệ thống.', iconName: 'hospital' },
          { title: 'Hạ Tầng Năng Lượng & Trọng Yếu', desc: 'Kiểm toán và bảo vệ CSDL vận hành hệ thống năng lượng quốc gia (NARI / Former INER).', iconName: 'gov' },
          { title: 'Tập Đoàn Bán Lẻ & CRM', desc: 'Phân quyền chặt chẽ cho các bên thứ ba khi bảo trì nâng cấp ứng dụng.', iconName: 'enterprise' }
        ],
        highlights: [
          'Kiến trúc linh hoạt: Hỗ trợ cả 3 mô hình triển khai (Inline 2-Tier, Sniffing Mode 3-Tier, Server Agent Mode)',
          'Ngăn chặn truy vấn theo ngữ cảnh (Query Policy): Chặn theo thời gian, IP, ứng dụng, số lượng bản ghi trả về',
          'Làm mờ dữ liệu động (Dynamic Data Masking): Tự động che số CMND/CCCD, số thẻ ngân hàng, tiền lương',
          'Lưu trữ nhật ký kiểm toán bất biến và ghi lại video màn hình thao tác của DBA'
        ],
        keyFeatures: [
          {
            name: 'DB Access Control (DBAC)',
            detail: 'Xác thực người dùng đa nhân tố, kiểm soát quyền truy cập chi tiết đến từng bảng (Table) và cột (Column) trong CSDL.'
          },
          {
            name: 'Real-time Query Blocking',
            detail: 'Tự động ngắt kết nối và chặn ngay lập tức các câu lệnh bất thường như SELECT * vượt hạn mức hoặc DROP TABLE.'
          },
          {
            name: 'Dynamic Data Masking & Encryption',
            detail: 'Mã hóa dữ liệu tại CSDL và tự động làm mờ thông tin nhạy cảm trên màn hình của lập trình viên/DBA mà không cần sửa code ứng dụng.'
          },
          {
            name: 'System Access Control & Session Evidence',
            detail: 'Quản trị đồng thời cả quyền truy cập SSH/Telnet/RDP vào máy chủ chứa CSDL với đầy đủ video bằng chứng ghi lại.'
          }
        ],
        businessOutcomes: [
          'Thay thế hiệu quả các hệ thống tường lửa CSDL đắt đỏ với chi phí vận hành giảm 40%',
          'Đạt 100% điểm tuân thủ an toàn CSDL của Ngân hàng Nhà nước và các chứng chỉ kiểm toán bảo mật quốc tế',
          'Không làm suy giảm hiệu năng xử lý của CSDL Core với độ trễ dưới 1 mili-giây'
        ],
        specs: [
          { label: 'Mô hình triển khai', value: 'Inline, Sniffing, Server Agent' },
          { label: 'Hệ quản trị CSDL', value: 'Oracle, MSSQL, PG, MySQL, MariaDB, DB2' },
          { label: 'Tính năng bảo mật', value: 'DBAC, SAC, Dynamic Masking, Real-time Block' },
          { label: 'Tiêu chuẩn bảo mật', value: 'PCI-DSS, ISO 27001, SOX Compliance' }
        ],
        trustedClients: ['Yang Shin Bank', 'Sanshin Bank', 'NARI (Critical Infra)', 'Hệ thống Ngân hàng Quốc tế']
      },
      {
        id: 'infrastructure-soc',
        title: 'SOC',
        category: 'cyber-security',
        categoryLabel: 'Cyber Security',
        pillar: 'engineer',
        poweredBy: 'VNETWORK',
        providerLogos: ['VNETWORK'],
        tagline: 'Trung tâm Giám sát & Điều hành An ninh mạng 24/7/365 với mạng lưới SOC đa quốc gia & phản ứng sự cố < 5 phút',
        concept: 'VNETWORK SOC là trung tâm điều hành và giám sát an ninh mạng toàn diện, kết hợp chặt chẽ giữa đội ngũ chuyên gia bảo mật quốc tế, quy trình chuẩn mực và công nghệ giám sát tân tiến. Hệ thống vận hành liên tục 24/7/365 trên mạng lưới trung tâm SOC tại Việt Nam, Hồng Kông, Đài Loan, Singapore và Anh Quốc, chủ động săn lùng mối đe dọa (Threat Hunting), tương quan hóa nhật ký sự kiện và ứng cứu sự cố tức thì với cam kết SLA dưới 5 phút.',
        quoteHighlight: {
          quote: 'Một trung tâm SOC đa quốc gia trực chiến 24/7/365 với thời gian phản ứng dưới 5 phút chính là tuyến phòng thủ kiên cố nhất bảo vệ toàn vẹn tài sản số của doanh nghiệp.',
          source: 'Báo cáo Vận hành An ninh Mạng & Ứng cứu Sự cố VNETWORK 2026',
          accentValue: '< 5 Phút',
          accentLabel: 'Thời gian ứng cứu khẩn cấp'
        },
        keyStats: [
          { value: '24/7/365', label: 'Giám sát & Vận hành liên tục', sub: 'Không gián đoạn ngày đêm và lễ Tết' },
          { value: '< 5 Phút', label: 'Thời gian ứng cứu khẩn cấp (SLA)', sub: 'Khoanh vùng và cách ly mối đe dọa tức thì' },
          { value: '5+ Quốc gia', label: 'Mạng lưới SOC quốc tế', sub: 'Việt Nam, Hồng Kông, Đài Loan, Singapore, UK' },
          { value: '99.99%', label: 'Độ tin cậy & Cam kết SLA', sub: 'Đạt chuẩn ISO 27001, ISO 20000-1 & PCI DSS' }
        ],
        problems: [
          {
            problem: 'Thiếu hụt nhân sự an ninh mạng chất lượng cao để duy trì ca trực 24/7 liên tục',
            consequence: 'Doanh nghiệp không thể phát hiện các cuộc tấn công xảy ra ngoài giờ làm việc hoặc ban đêm, dẫn đến thảm họa rò rỉ dữ liệu kéo dài.'
          },
          {
            problem: 'Chi phí đầu tư và vận hành một trung tâm SOC nội bộ quá đắt đỏ',
            consequence: 'Tốn hàng triệu USD cho bản quyền phần mềm SIEM/SOAR và chi phí tuyển dụng, đào tạo đội ngũ kỹ sư bảo mật túc trực 3 ca.'
          },
          {
            problem: 'Bị ngập trong hàng ngàn cảnh báo giả (Alert Fatigue) làm chậm thời gian xử lý sự cố thực',
            consequence: 'Đội ngũ IT quá tải bỏ sót các cuộc tấn công nguy hiểm, kéo dài thời gian phát hiện xâm nhập (MTTD) lên hàng tuần hoặc hàng tháng.'
          },
          {
            problem: 'Thiếu quy trình ứng cứu khẩn cấp và kinh nghiệm thực chiến khi bị tấn công mã độc ransomware',
            consequence: 'Lúng túng khi hệ thống bị mã hóa, làm tê liệt toàn bộ hoạt động sản xuất kinh doanh và đối mặt rủi ro pháp lý nặng nề.'
          }
        ],
        targetAudiences: [
          { title: 'Ngân Hàng, Tài Chính & FinTech', desc: 'Giám sát liên tục hệ thống giao dịch lõi, phát hiện bất thường và tuân thủ tuyệt đối quy định an toàn hệ thống thông tin của Ngân hàng Nhà nước.', iconName: 'bank' },
          { title: 'Doanh Nghiệp Lớn & Tập Đoàn Đa Ngành', desc: 'Bảo vệ toàn diện hạ tầng phân tán, máy chủ ứng dụng, ERP nội bộ và toàn bộ tài sản số của các chi nhánh.', iconName: 'enterprise' },
          { title: 'Cơ Quan Chính Phủ & Hạ Tầng Trọng Yếu', desc: 'Bảo đảm an toàn cơ sở dữ liệu công dân, duy trì tính sẵn sàng cao cho cổng dịch vụ công và ngăn chặn các cuộc tấn công APT.', iconName: 'gov' },
          { title: 'Thương Mại Điện Tử & Nền Tảng Số', desc: 'Bảo vệ cổng thanh toán, ngăn chặn botnet vét dữ liệu và phối hợp cùng WAF/CDN xử lý các đợt tấn công DDoS mùa cao điểm.', iconName: 'retail' }
        ],
        highlights: [
          'Giám sát an ninh tập trung 24/7/365: Thu thập và tương quan hóa nhật ký sự kiện (Logs) theo thời gian thực trên toàn bộ mạng lưới, máy chủ, ứng dụng và đám mây',
          'Thời gian phản ứng và ứng cứu khẩn cấp dưới 5 phút: Cam kết SLA khoanh vùng sự cố, cách ly máy chủ nhiễm độc và ngăn chặn mã độc lây lan tức thì',
          'Mạng lưới SOC đa quốc gia & Đội ngũ chuyên gia quốc tế: Kỹ sư an ninh túc trực tại Việt Nam, Hồng Kông, Đài Loan, Singapore và Vương quốc Anh',
          'Tích hợp sâu hệ sinh thái WAF/DDoS Scrubbing Center & Chuẩn ISO: Kết nối trực tiếp vào hạ tầng lọc sạch tấn công 20+ Tbps, tuân thủ ISO 27001, ISO 20000-1 và PCI DSS'
        ],
        keyFeatures: [
          {
            name: '01. Giám sát & Phân tích Nhật ký An ninh Tập trung 24/7',
            detail: 'Thu thập và tương quan hóa toàn diện log sự kiện từ Network, Endpoint, Server, Cloud và Database bằng công nghệ SIEM/AI tân tiến, phát hiện bất thường ngay khi chớm xuất hiện.'
          },
          {
            name: '02. Chủ động Săn lùng Mối đe dọa (Proactive Threat Hunting)',
            detail: 'Không chỉ chờ cảnh báo kích hoạt, các chuyên gia SOC liên tục giả lập tình huống, rà quét các dấu hiệu xâm phạm tiềm ẩn (IoC/IoA) và các kỹ thuật tấn công mới nhất.'
          },
          {
            name: '03. Ứng cứu Khẩn cấp & Điều tra Truy vết Số (Incident Response & Forensics)',
            detail: 'Quy trình ứng cứu chuẩn hóa giúp ngăn chặn lây lan mã độc chỉ trong vài phút, tiến hành phân tích mã độc chuyên sâu (Reverse Engineering) và cung cấp báo cáo pháp y số đầy đủ.'
          },
          {
            name: '04. Tích hợp Hệ thống Lọc DDoS & WAF Scrubbing Center',
            detail: 'Kết nối trực tiếp vào mạng lưới WAF và trung tâm làm sạch lưu lượng Scrubbing Center toàn cầu của VNETWORK, tự động điều phối lọc bỏ lưu lượng tấn công quy mô lớn.'
          }
        ],
        businessOutcomes: [
          'Giảm đến 80% thời gian phát hiện và xử lý sự cố an ninh (MTTD / MTTR) so với vận hành nội bộ thông thường',
          'Tiết kiệm đến 70% chi phí đầu tư CapEx và nhân sự so với việc tự xây dựng trung tâm điều hành SOC riêng',
          'Đáp ứng 100% các tiêu chuẩn kiểm toán an toàn thông tin bắt buộc (ISO 27001, PCI DSS, Luật An ninh mạng Việt Nam)',
          'Bảo vệ danh tiếng thương hiệu và đảm bảo tính liên tục của hoạt động kinh doanh trước các chiến dịch tống tiền ransomware'
        ],
        specs: [
          { label: 'Thời gian phản ứng (SLA)', value: '< 5 phút đối với sự cố nghiêm trọng' },
          { label: 'Thời gian vận hành', value: '24/7/365 (3 ca liên tục không gián đoạn)' },
          { label: 'Địa điểm SOC Centers', value: 'Việt Nam, Hồng Kông, Đài Loan, Singapore, UK' },
          { label: 'Chứng nhận & Tiêu chuẩn', value: 'ISO 27001:2013, ISO 20000-1, PCI DSS Level 1' },
          { label: 'Dung lượng phòng thủ DDoS', value: '20+ Tbps liên kết WAF Scrubbing Center' },
          { label: 'Khả năng tích hợp', value: 'SIEM, SOAR, EDR, Firewall, Multi-Cloud, On-Premises' }
        ],
        trustedClients: ['Tập đoàn Tài chính & Ngân hàng', 'Cơ quan Nhà nước', 'Doanh nghiệp Thương mại Điện tử', 'Tổ chức Đa quốc gia']
      }
    ]
  },
  {
    id: 'ai-operations',
    title: 'AI Operations & Business Process',
    pillar: 'operate',
    pillarLabel: 'OPERATE',
    description: 'Trợ lý AI chuyên biệt cho Pháp chế ngân hàng, Omnichannel AI Agent bán hàng & thu hồi nợ, AI Y tế và Tuyển sinh.',
    items: [
      {
        id: 'ai-legal-compliance',
        title: 'AI Pháp Chế & Tuân Thủ (AI Legal & Compliance)',
        category: 'ai-operations',
        categoryLabel: 'AI Operations',
        pillar: 'operate',
        poweredBy: 'DatumBridge',
        providerLogos: ['DatumBridge'],
        tagline: 'Trợ lý AI pháp chế & tuân thủ chuyên biệt cho Ngân hàng, BFSI và Doanh nghiệp lớn',
        concept: 'AI Legal & Compliance là nền tảng AI pháp chế chuyên biệt (Vertical AI) hàng đầu Việt Nam cho lĩnh vực BFSI. Bám sát chuẩn xác các quy định, thông tư của Ngân hàng Nhà nước và quy chế nội bộ, hệ thống tự động hóa tra cứu pháp lý, rà soát hợp đồng, đánh giá tác động điều chỉnh luật và soạn thảo văn bản với độ chính xác chuyên ngành lên tới 95%.',
        quoteHighlight: {
          quote: 'Giải pháp được xây dựng để bám sát các quy định của NHNN — điều mà các công cụ AI quốc tế hay các nền tảng AI tổng hợp khó lòng đáp ứng được một cách chuẩn xác và kịp thời.',
          source: 'Báo cáo Ứng dụng Trí tuệ Nhân tạo Ngành Tài chính - Pháp chế 2026',
          accentValue: '95%',
          accentLabel: 'Mức Độ Chính Xác'
        },
        keyStats: [
          { value: '95%', label: 'Mức độ chính xác pháp lý', sub: 'Trích dẫn 100% đúng điều khoản NHNN' },
          { value: '+72%', label: 'Hiệu suất xử lý nghiệp vụ', sub: 'Tự động hóa >50% công việc tài liệu' },
          { value: '-42%', label: 'Khối lượng việc vận hành', sub: 'Tiết kiệm nhân lực FTE ~1.5 tỷ/năm' },
          { value: '~45%', label: 'Tỷ suất hoàn vốn ROI', sub: 'Thời gian hoàn vốn ước tính ~20-22 tháng' }
        ],
        problems: [
          {
            problem: 'Khó theo dõi liên tục các thay đổi pháp lý nhanh chóng và thường xuyên từ Ngân hàng Nhà nước',
            consequence: 'Tác động: Doanh nghiệp chậm cập nhật, áp dụng sai quy định và đối mặt nguy cơ bị xử phạt nặng từ cơ quan quản lý.'
          },
          {
            problem: 'Tốn hàng trăm giờ rà soát và sửa đổi các quy trình, thủ tục ngân hàng nội bộ phức tạp',
            consequence: 'Tác động: Quy trình phê duyệt đình trệ và thiếu tính đồng bộ giữa các chi nhánh và phòng ban.'
          },
          {
            problem: 'Rủi ro sai sót con người trong quá trình rà soát thủ công hợp đồng tín dụng và bảo lãnh vay vốn',
            consequence: 'Tác động: Nguy cơ tranh chấp pháp lý tốn kém, tổn thất tài chính và ảnh hưởng tiêu cực đến uy tín của tổ chức.'
          },
          {
            problem: 'Phụ thuộc quá nhiều vào nhân sự pháp chế chuyên môn gây ra các điểm nghẽn trong ra quyết định',
            consequence: 'Tác động: Chi phí thuê luật sư và tư vấn ngoài tăng cao, thời gian thẩm định hồ sơ tín dụng bị kéo dài.'
          }
        ],
        targetAudiences: [
          { title: 'Ngân Hàng Thương Mại & Các Tổ Chức Tín Dụng', desc: 'Rà soát hợp đồng tín dụng, thẩm định hồ sơ tài sản bảo đảm và tuân thủ nghiêm ngặt các chỉ đạo của Ngân hàng Nhà nước.', iconName: 'bank' },
          { title: 'Doanh Nghiệp Ngoài Ngân Hàng & Tập Đoàn Đa Ngành', desc: 'Rà soát các thỏa thuận doanh nghiệp, tối ưu hóa vòng đời tài liệu pháp lý và đảm bảo tính tuân thủ nội bộ toàn diện.', iconName: 'enterprise' },
          { title: 'Công Ty Luật & Đơn Vị Tư Vấn Pháp Lý', desc: 'Đẩy nhanh tốc độ nghiên cứu án lệ, tra cứu quy định pháp luật và soạn thảo ý kiến tư vấn bằng tìm kiếm ngôn ngữ tự nhiên.', iconName: 'briefcase' }
        ],
        highlights: [
          'Tra cứu thông minh bằng ngôn ngữ tự nhiên: Tìm kiếm văn bản pháp luật, án lệ, công văn với trích dẫn rõ ràng số hiệu và điều khoản',
          'Rà soát & Soạn thảo tài liệu tự động: Tự động phát hiện điều khoản rủi ro, so sánh văn bản sửa đổi và đề xuất phương án chỉnh sửa tối ưu',
          'Đánh giá tác động thay đổi luật: Tự động đối chiếu văn bản mới của NHNN đối với các quy chế và quy trình nội bộ của doanh nghiệp',
          'Tích hợp Hệ thống Quản lý Văn bản DMS & Dịch thuật Đa ngữ: Tích hợp trực tiếp vào DMS nội bộ và hỗ trợ phiên dịch 6 ngôn ngữ'
        ],
        keyFeatures: [
          {
            name: '01. Tra cứu Pháp lý Thông minh & Bám sát Chỉ đạo NHNN',
            detail: 'Tìm kiếm toàn diện trên hệ thống Luật, Nghị định, Thông tư, Án lệ và Công văn với khả năng hiểu sâu thuật ngữ chuyên ngành BFSI.'
          },
          {
            name: '02. Rà soát Hợp đồng & Phát hiện Rủi ro Tự động',
            detail: 'So sánh hợp đồng của đối tác với mẫu chuẩn của ngân hàng, làm nổi bật các điều khoản bất lợi đồng thời hỗ trợ soạn thảo pháp lý tự động.'
          },
          {
            name: '03. Công cụ Đánh giá Tác động Quy định',
            detail: 'Tự động thẩm định tác động của các thay đổi quy định mới đối với văn bản và quy trình nội bộ của doanh nghiệp.'
          },
          {
            name: '04. Tích hợp Hệ thống Quản lý Văn bản DMS & Dịch thuật Đa ngữ',
            detail: 'Tích hợp trực tiếp vào Hệ thống Quản lý Văn bản (DMS) và quy trình làm việc nội bộ, tích hợp sẵn tính năng dịch thuật 6 ngôn ngữ.'
          }
        ],
        businessOutcomes: [
          'Tăng 72% hiệu suất xử lý nghiệp vụ pháp lý, tiết kiệm năng suất tương đương 850 triệu VND/năm',
          'Giảm 42% khối lượng công việc vận hành, tương đương mức tiết kiệm FTE ~1.5 tỷ VND/năm',
          'Tự động hóa hơn 50% công việc tài liệu, giảm chi phí thuê tư vấn luật ngoài từ 500 - 700 triệu VND/năm'
        ],
        specs: [
          { label: 'Độ chính xác', value: '95% (Benchmark chuyên biệt pháp lý)' },
          { label: 'Thời gian phản hồi', value: '< 10 Giây kèm trích dẫn nguồn' },
          { label: 'Thời gian triển khai', value: '3 Tháng (PoC sẵn sàng trong 2 tuần)' },
          { label: 'Mô hình triển khai', value: 'Private Cloud / Self-Hosted LLM' }
        ],
        trustedClients: ['HDBank (POC)', 'LPBank (POC)', 'Aristino (POC)', 'VIB (Pilot/Prod)', 'MTC', 'VNETWORK', 'Gialam Train', 'HACVN']
      },
      {
        id: 'ai-sales-cskh',
        title: 'AI Agent Bán Hàng & Nhắc Nợ',
        category: 'ai-operations',
        categoryLabel: 'AI Operations',
        pillar: 'operate',
        poweredBy: 'DatumBridge',
        providerLogos: ['DatumBridge'],
        tagline: 'Trợ lý AI bán hàng đa kênh SuperSales & AI nhắc nợ văn minh, tuân thủ pháp luật',
        concept: 'Nền tảng AI Agent là giải pháp trí tuệ nhân tạo toàn diện gồm hai bộ công cụ chủ lực: AI Agent SuperSales (tự động hóa tư vấn, chăm sóc khách hàng và bán hàng đa kênh 24/7) và Debt Collection AI Agent (nhắc nợ qua kênh số và voicebot thông minh, minh bạch, giảm chi phí thu hồi nợ và nâng cao tỷ lệ thanh toán đúng hạn).',
        quoteHighlight: {
          quote: 'Tiếp cận hơn 10 triệu khách hàng qua TikTok, Facebook, Zalo với tốc độ phản hồi <5 giây. Tự động xử lý hơn 5.000 cuộc hội thoại/ngày với tỷ lệ thu lead trung bình 30%.',
          source: 'Báo cáo Hiệu suất Hội thoại AI Doanh nghiệp',
          accentValue: '< 5s',
          accentLabel: 'Tốc Độ Phản Hồi Đa Kênh'
        },
        keyStats: [
          { value: '< 5 Giây', label: 'Tốc độ phản hồi tức thì', sub: 'Đa kênh Zalo, FB, Web, App 24/7' },
          { value: '30%', label: 'Tỷ lệ thu Lead trung bình', sub: 'Hơn 2.000+ lead chất lượng/tháng' },
          { value: '5,000+', label: 'Hội thoại xử lý tự động/ngày', sub: 'Giảm 70% tải cho nhân viên trực' },
          { value: '+20%', label: 'Tỷ lệ thanh toán nợ đúng hạn', sub: 'Nhắc nợ cá nhân hóa đa kênh số' }
        ],
        problems: [
          {
            problem: 'Khách hàng nhắn tin hỏi tư vấn ngoài giờ làm việc bị phản hồi chậm',
            consequence: 'Tỷ lệ rớt đơn cao, khách hàng chuyển sang mua của đối thủ cạnh tranh.'
          },
          {
            problem: 'Chi phí duy trì đội ngũ Telesales và CSKH quy mô lớn quá tốn kém',
            consequence: 'Gánh nặng chi phí nhân sự cố định, hiệu suất tư vấn không đồng đều giữa các nhân viên.'
          },
          {
            problem: 'Thu hồi nợ truyền thống qua gọi điện thoại dễ gây bức xúc và vi phạm quy định',
            consequence: 'Khách hàng phản ứng tiêu cực, khiếu nại ảnh hưởng nghiêm trọng đến thương hiệu ngân hàng/công ty.'
          },
          {
            problem: 'Dữ liệu tương tác phân tán trên nhiều kênh (Zalo, Messenger, Hotline, Webchat)',
            consequence: 'Không có bức tranh 360 độ về khách hàng, khó khăn trong việc Upsell và Cross-sell.'
          }
        ],
        targetAudiences: [
          { title: 'Ngân Hàng & Vay Tiêu Dùng', desc: 'Nhắc nợ thẻ tín dụng, nhắc kỳ hạn trả góp qua tin nhắn Zalo/SMS cá nhân hóa và Voicebot tự động.', iconName: 'bank' },
          { title: 'Sàn Thương Mại Điện Tử & Bán Lẻ', desc: 'Tư vấn sản phẩm, gợi ý voucher, hỗ trợ chốt đơn và tra cứu trạng thái vận chuyển 24/7.', iconName: 'retail' },
          { title: 'Doanh Nghiệp Bất Động Sản & Xe', desc: 'Tự động thu thập nhu cầu, phân loại khách hàng tiềm năng và xếp lịch hẹn lái thử/tham quan.', iconName: 'enterprise' },
          { title: 'Công Ty Bảo Hiểm & Dịch Vụ Tài Chính', desc: 'Tư vấn gói bảo hiểm, nhắc ngày đóng phí định kỳ và tiếp nhận yêu cầu bồi thường sơ bộ.', iconName: 'insurance' },
          { title: 'Chuỗi F&B và Dịch Vụ Giải Trí', desc: 'Đặt bàn, đặt vé tự động, trả lời menu và chăm sóc khách hàng thành viên sau mua hàng.', iconName: 'store' },
          { title: 'Nội Bộ Doanh Nghiệp (Internal Bot)', desc: 'Trợ lý AI hỗ trợ nhân viên tra cứu quy chế nội bộ, chính sách thuế, pháp chế và phúc lợi.', iconName: 'briefcase' }
        ],
        highlights: [
          'AI SuperSales: Phản hồi tức thì, đề xuất sản phẩm dựa trên hành vi, tự động upsell, cross-sell và chốt đơn đa kênh',
          'Debt Collection AI: Nhắc nợ thông qua call outbound trên mobile app và mạng xã hội, tích hợp CRM đánh dấu trạng thái thu hồi',
          'Độ hài lòng đạt 4.7/5 trên các kênh: Web Chat, Zalo OA, Messenger, iOS, Android',
          'Tích hợp sâu vào hệ thống CRM, ERP, JIRA, Google Drive, OneDrive'
        ],
        keyFeatures: [
          {
            name: 'AI Agent SuperSales Đa Kênh',
            detail: 'Tự động trò chuyện tự nhiên bằng tiếng Việt theo giọng điệu thương hiệu, phân loại nhu cầu và dẫn dắt khách hàng đến quyết định mua hàng.'
          },
          {
            name: 'Debt Collection AI Agent (Thu hồi nợ văn minh)',
            detail: 'Cho phép khách hàng tự tra cứu dư nợ, lịch sử trả nợ, tự chọn phương án thanh toán và nhận link thanh toán trực tiếp qua Zalo/SMS.'
          },
          {
            name: 'Hệ thống Quản trị & Guardrail An toàn',
            detail: 'Bộ lọc an toàn loại bỏ các chủ đề nhạy cảm, chính trị, tôn giáo; đảm bảo phản hồi luôn tuân thủ quy chuẩn đạo đức doanh nghiệp.'
          },
          {
            name: 'Đánh giá & So sánh hiệu năng mô hình (Model Hub)',
            detail: 'Dễ dàng chuyển đổi linh hoạt giữa GPT-4o, Claude 3.5, Gemini 1.5 Pro hoặc Self-hosted LLM để tối ưu chi phí và chất lượng.'
          }
        ],
        businessOutcomes: [
          'Tăng năng suất đội ngũ bán hàng gấp 3 lần, rút ngắn chu kỳ chuyển đổi khách hàng',
          'Giảm 60% chi phí vận hành tổng đài thu hồi nợ truyền thống',
          'Tăng 20% tỷ lệ khách hàng chủ động thanh toán dư nợ đúng hạn'
        ],
        specs: [
          { label: 'Kênh hỗ trợ', value: 'Zalo, Messenger, Webchat, App, Voice' },
          { label: 'Hội thoại xử lý', value: '> 5,000 phiên/ngày' },
          { label: 'Mô hình AI', value: 'Integrated Service Hub (Đa LLMs)' },
          { label: 'Mô hình triển khai', value: 'Cloud SaaS / On-Premise' }
        ],
        trustedClients: ['VPBank (Dự án Chatbot/Callbot)', 'VIB', 'HDBank', 'Thương mại điện tử & Bán lẻ']
      },
      {
        id: 'ai-healthcare-insurance',
        title: 'AI Y Tế & Bảo Hiểm Y Tế',
        category: 'ai-operations',
        categoryLabel: 'AI Operations',
        pillar: 'operate',
        poweredBy: 'Lumination',
        providerLogos: ['Lumination'],
        tagline: 'Trợ lý AI y tế & Bảo hiểm Y tế chuyên sâu cho Bệnh viện, Bác sĩ và Nhân viên y tế',
        concept: 'Nền tảng Trí tuệ AI Y tế Lâm sàng & Bảo hiểm Y tế là trợ lý chuyên biệt cho lĩnh vực Bảo hiểm Y tế ứng dụng AI tiên tiến. Đã được chứng minh qua vận hành thực tế tại Bệnh viện Nhi Trung ương, nền tảng số hóa 55+ văn bản quy phạm y tế để hỗ trợ nhân viên y tế kiểm tra tuân thủ tức thì kèm trích dẫn chính xác, đảm bảo xử lý bảo hiểm y tế chuẩn xác và giảm thiểu rủi ro tài chính cho bệnh viện.',
        quoteHighlight: {
          quote: 'Giải pháp không phải là "chatbot" trả lời chung chung — Hệ thống cung cấp trợ lý nghiệp vụ y tế có kiểm chứng, trích dẫn đúng điều khoản luật Bảo hiểm Y tế và hỗ trợ bác sĩ đối chiếu phác đồ điều trị.',
          source: 'Báo cáo Ứng dụng AI Y tế Lâm sàng tại Bệnh viện Tuyến Đầu',
          accentValue: '9,000+',
          accentLabel: 'Hội Thoại Nghiệp Vụ/Ngày'
        },
        keyStats: [
          { value: '9,000+', label: 'Hội thoại nghiệp vụ y tế/ngày', sub: 'Đang vận hành thực tế tại BV Nhi TW' },
          { value: '30,000+', label: 'Văn bản & Phụ lục tra cứu/ngày', sub: 'Số hóa 55+ văn bản luật & thông tư Bảo hiểm Y tế' },
          { value: '< 60 Giây', label: 'Tốc độ phản hồi có trích dẫn', sub: 'Đúng số văn bản, điều khoản, dòng trong luật' },
          { value: '-80%', label: 'Giảm thời gian tra cứu Bảo hiểm Y tế', sub: 'Từ 15-30 phút xuống chỉ vài giây' }
        ],
        problems: [
          {
            problem: '90% bệnh nhân tại các bệnh viện Việt Nam liên quan đến Bảo hiểm Y tế, yêu cầu tra cứu quy định thủ công',
            consequence: 'Tác động: Bác sĩ vừa khám bệnh vừa phải tra cứu luật Bảo hiểm Y tế thủ công, làm tăng thời gian chờ đợi và giảm hiệu quả khám chữa bệnh.'
          },
          {
            problem: 'Hơn 55+ văn bản pháp lý (Luật, Nghị định, Thông tư, Hướng dẫn) liên tục thay đổi và sửa đổi',
            consequence: 'Tác động: Các hướng dẫn mới ban hành mất nhiều thời gian để phổ biến tới các khoa lâm sàng, gây ra sai sót hệ thống trong kê đơn và quản trị.'
          },
          {
            problem: 'Sai sót trong kê đơn tiềm ẩn nguy cơ từ chối thanh toán và bị Bảo hiểm Xã hội xuất toán tài chính',
            consequence: 'Tác động: Bệnh viện đối mặt với việc bị truy thu hàng tỷ đồng và tranh chấp về quyền lợi chi trả bảo hiểm của bệnh nhân.'
          },
          {
            problem: 'Phòng Kế hoạch Tổng hợp và Tài chính bệnh viện bị quá tải với công tác hậu kiểm hồ sơ thanh toán',
            consequence: 'Tác động: Điểm nghẽn vận hành làm tiêu tốn các nguồn lực quản trị và y tế quan trọng khỏi hoạt động tuyến đầu.'
          }
        ],
        targetAudiences: [
          { title: 'Bệnh Viện Tuyến Trung Ương & Đa Khoa', desc: 'Hỗ trợ hàng trăm bác sĩ và điều dưỡng kiểm tra bảo hiểm y tế tức thì khi nhập y lệnh (ví dụ: Bệnh viện Nhi Trung ương).', iconName: 'hospital' },
          { title: 'Bệnh Viện & Phòng Khám Tư Nhân', desc: 'Đối chiếu nhanh quy định chi trả bảo hiểm y tế quốc gia để đảm bảo thanh toán viện phí tuân thủ đúng luật.', iconName: 'hospital' },
          { title: 'Phòng Kế Hoạch & Tài Chính', desc: 'Chủ động kiểm tra và ngăn ngừa nguy cơ xuất toán bảo hiểm y tế ngay tại thời điểm bác sĩ ra y lệnh.', iconName: 'briefcase' },
          { title: 'Bác Sĩ & Điều Dưỡng Tuyến Đầu', desc: 'Trợ thủ tin cậy giải đáp các thắc mắc phức tạp về tuyến chuyển viện và chế độ hưởng bảo hiểm đúng tuyến.', iconName: 'hospital' }
        ],
        highlights: [
          'Đã triển khai vận hành thực tế tại Bệnh viện Nhi Trung ương (Xử lý hơn 9.000 hội thoại và >30.000 lượt tra cứu/ngày)',
          'Trí tuệ nhân tạo chuyên sâu: Hiểu sâu bản chất 55+ văn bản quy định Bảo hiểm Y tế Việt Nam và từ điển y khoa',
          'Trích dẫn chính xác tuyệt đối: Chỉ rõ số văn bản, điều khoản, vị trí trong luật để nhân viên y tế kiểm tra chéo ngay lập tức',
          'Triển khai đa kênh linh hoạt: Hỗ trợ Web, Zalo OA và tiện ích nhúng Copilot trực tiếp trong phần mềm HIS bệnh viện'
        ],
        keyFeatures: [
          {
            name: '01. Trợ lý AI Bảo hiểm Y tế cho Bác sĩ',
            detail: 'Bác sĩ nhập tình huống (Bệnh nhân A + Mã bệnh B + Thẻ BHYT C) → AI trả về chính xác mức hưởng, điều kiện chi trả và các biểu mẫu yêu cầu trong dưới 60 giây.'
          },
          {
            name: '02. Hướng dẫn Tuân thủ & Tình huống Bảo hiểm',
            detail: 'Đánh giá các tình huống thanh toán y tế phức tạp và tự động thẩm định tác động tuân thủ khi có thông tư mới được ban hành để ngăn chặn việc bị xuất toán.'
          },
          {
            name: '03. Kho Dữ liệu Pháp lý Toàn diện',
            detail: 'Thư viện số hóa 55+ văn bản quy định bảo hiểm y tế với bộ lọc hiệu lực thực tế, trả kết quả kèm trích dẫn luật chính xác tuyệt đối.'
          },
          {
            name: '04. Triển khai Đa kênh Linh hoạt',
            detail: 'Hỗ trợ Cổng Web, Zalo OA và tiện ích nhúng Copilot trực tiếp vào phần mềm Quản lý Bệnh viện (HIS) cho quy trình làm việc thống nhất.'
          }
        ],
        businessOutcomes: [
          'Giảm thời gian tra cứu chính sách Bảo hiểm Y tế từ 15-30 phút xuống chỉ còn dưới 1 phút',
          'Giảm thiểu tối đa các lỗi sai sót nghiệp vụ và nguy cơ xuất toán Bảo hiểm Y tế cho bệnh viện',
          'Tăng sự tự tin cho nhân viên y tế khi tư vấn giải thích quyền lợi cho người bệnh',
          'Giảm tải áp lực cho Phòng Kế hoạch tổng hợp và bộ máy quản trị bệnh viện'
        ],
        specs: [
          { label: 'Đơn vị kiểm chứng', value: 'Bệnh viện Nhi Trung ương' },
          { label: 'Hạ tầng AI', value: 'Skill Files & Domain Ontology' },
          { label: 'Thời gian phản hồi', value: '< 60 giây có trích dẫn' },
          { label: 'Phạm vi văn bản', value: '55+ Luật & Thông tư Bảo hiểm Y tế' }
        ],
        trustedClients: ['Bệnh viện Nhi Trung ương', 'HD Bank (Đối tác Kiosk Y tế)', 'Các Bệnh viện Đa khoa Tuyến Tỉnh']
      },
      {
        id: 'ai-education-crm',
        title: 'AI Quản Trị Tuyển Sinh (AI CRM Lead360)',
        category: 'ai-operations',
        categoryLabel: 'AI Operations',
        pillar: 'operate',
        poweredBy: 'Lumination',
        providerLogos: ['Lumination'],
        tagline: 'Hệ sinh thái AI toàn diện quản trị tuyển sinh, chấm điểm AI Scoring & chân dung Lead360',
        concept: 'Hệ sinh thái AI Tuyển sinh (AI CRM Lead360) là giải pháp quản trị tuyển sinh và quan hệ học viên toàn diện, hoạt động trên nguyên tắc "One Unified Data – One Control Center". Nền tảng hợp nhất dữ liệu từ tất cả các kênh (Facebook, Zalo, Webchat, Hotline, CSV), ứng dụng AI để chấm điểm tiềm năng học sinh (AI Scoring), tạo chân dung học sinh 360 độ (Lead360 AI Persona) và tự động hóa toàn diện quy trình chăm sóc từ tiếp cận đến nhập học.',
        quoteHighlight: {
          quote: 'Platform là hệ sinh thái AI toàn diện phát triển riêng cho các đơn vị giáo dục, gồm các module chuyên biệt: Tổng quan tác nghiệp, Hiệu suất & KPI, Trí tuệ Marketing và Quản trị hệ thống đồng bộ duy nhất.',
          source: 'Tài liệu Kiến trúc AI CRM Giáo dục Đại học 2026',
          accentValue: '360°',
          accentLabel: 'Chân Dung Học Sinh Lead360'
        },
        keyStats: [
          { value: '3 Module', label: 'Cấu trúc hệ thống toàn diện', sub: 'Tác nghiệp - Hiệu suất - Marketing' },
          { value: '100%', label: 'Hợp nhất dữ liệu One Control', sub: 'Gom toàn bộ lead đa kênh về 1 nơi' },
          { value: '+35%', label: 'Tăng tỷ lệ nhập học thực tế', sub: 'Nhờ chấm điểm AI Scoring & Lead360' },
          { value: 'Real-time', label: 'Báo cáo hiệu suất theo Tier', sub: 'Giám sát chỉ tiêu từng trường THPT' }
        ],
        problems: [
          {
            problem: 'Dữ liệu tuyển sinh rời rạc, phân tán trên nhiều file Excel, fanpage và cộng tác viên (CTV)',
            consequence: 'Dẫn đến trùng lặp lead, bỏ sót học sinh tiềm năng và không có số liệu chuẩn xác để báo cáo Ban Giám Hiệu.'
          },
          {
            problem: 'Tư vấn viên không biết học sinh nào có khả năng nhập học cao nhất để ưu tiên chăm sóc',
            consequence: 'Lãng phí thời gian gọi điện đại trà, tỷ lệ chuyển đổi nhập học thấp và tốn kém chi phí marketing.'
          },
          {
            problem: 'Khó khăn trong việc phân công trường THPT và đo lường KPI thực tế cho từng chuyên viên tư vấn',
            consequence: 'Thiếu sự minh bạch, không kịp thời đôn đốc các trường có tỷ lệ quan tâm cao.'
          },
          {
            problem: 'Marketing không nắm được phản hồi thực tế của học sinh để điều chỉnh thông điệp và ngân sách quảng cáo',
            consequence: 'Quảng cáo sai đối tượng, lãng phí ngân sách truyền thông mà không mang lại hồ sơ chất lượng.'
          }
        ],
        targetAudiences: [
          { title: 'Trường Đại Học & Học Viện', desc: 'Số hóa toàn bộ quy trình tuyển sinh hàng chục ngàn hồ sơ mỗi mùa (Đã triển khai cho Đại học Hoa Sen).', iconName: 'school' },
          { title: 'Trường Cao Đẳng & Trung Cấp', desc: 'Tự động hóa chăm sóc học sinh tốt nghiệp THPT, phân loại nhu cầu học nghề và xét tuyển học bạ.', iconName: 'school' },
          { title: 'Hệ Thống Trường Liên Cấp Quốc Tế', desc: 'Quản trị hành trình phụ huynh từ lúc đăng ký tham quan trường (Campus Tour) đến khi đóng phí nhập học.', iconName: 'school' },
          { title: 'Trung Tâm Anh Ngữ & Du Học', desc: 'Chăm sóc học viên dài hạn, theo dõi tiến độ thi chứng chỉ và gợi ý lộ trình học phù hợp.', iconName: 'school' },
          { title: 'Ban Giám Hiệu & Phòng Tuyển Sinh', desc: 'Theo dõi dashboard realtime, phân bổ chỉ tiêu KPI theo từng khu vực và từng tier trường THPT.', iconName: 'briefcase' },
          { title: 'Đội Ngũ Chuyên Viên & CTV Tuyển Sinh', desc: 'Nhận cảnh báo nhiệm vụ cần làm ngay trong ngày (gọi lại, chăm sóc tiếp, hoàn tất hồ sơ).', iconName: 'users' }
        ],
        highlights: [
          'Module Quản trị & Tác nghiệp: Dashboard realtime, Quản lý hội thoại đa kênh (Zalo, FB, Hotline), Quản lý học sinh (nhập OCR/CSV), Nhiệm vụ & Cảnh báo',
          'Module Hiệu suất & KPI: AI Scoring & Phân tích hội thoại, Đánh giá hiệu suất theo Tier trường, Quản lý chỉ tiêu KPI, Phân công trường, Bảng xếp hạng Top Performers',
          'Module Marketing: Trí tuệ Marketing (Phân tích Insights chủ đề & Cảm xúc), Tự động sinh nội dung AI, Đề xuất chiến dịch & Ngân sách, Lắng nghe MXH, Chân dung Lead360',
          'Module Quản lý hệ thống: Quản lý người dùng theo sơ đồ phân cấp (Quản lý - Chuyên viên - CTV), Tiện ích tái phân tích AI'
        ],
        keyFeatures: [
          {
            name: 'AI Scoring & Phân Tích Hội Thoại Tự Động',
            detail: 'AI tự động đọc hiểu toàn bộ lịch sử trò chuyện, chấm điểm tiềm năng (0 - 100 điểm), trích xuất chủ đề quan tâm và gợi ý hành động tư vấn tiếp theo.'
          },
          {
            name: 'Lead360 AI Student Persona',
            detail: 'Tổng hợp hành vi tương tác từ mạng xã hội, tin nhắn và lịch sử gọi điện để dựng nên chân dung 360 độ về sở thích, tính cách và rào cản của học sinh.'
          },
          {
            name: 'Quản Lý Chỉ Tiêu KPI & Phân Công Trường THPT',
            detail: 'Phân loại các trường THPT theo Tier 1, Tier 2, Tier 3; gán nhân sự phụ trách và theo dõi tỷ lệ chuyển đổi của từng trường theo thời gian thực.'
          },
          {
            name: 'Trí Tuệ Marketing & Tự Động Sinh Nội Dung',
            detail: 'Phát hiện các chủ đề "Hot" được học sinh quan tâm nhiều nhất, tự động viết bài đăng mạng xã hội và đề xuất ngân sách phân bổ chiến dịch quảng cáo.'
          }
        ],
        businessOutcomes: [
          'Tăng 35% tỷ lệ học sinh hoàn tất hồ sơ nhập học nhờ chăm sóc đúng thời điểm',
          'Tiết kiệm 70% thời gian xử lý dữ liệu và nhập liệu thủ công nhờ tính năng trích xuất OCR',
          'Ban Giám Hiệu nắm bắt chính xác tiến độ tuyển sinh từng ngày qua Dashboard Realtime'
        ],
        roiMetrics: [
          { label: 'Tỷ lệ nhập học', value: '+35%', detail: 'Tối ưu hóa hành trình tư vấn học sinh' },
          { label: 'Thời gian phản hồi', value: '< 5 Giây', detail: 'Tự động đồng bộ tin nhắn đa kênh' },
          { label: 'Tiết kiệm thời gian nhập liệu', value: '70%', detail: 'Trích xuất tự động qua OCR & Import CSV' }
        ],
        specs: [
          { label: 'Kiến trúc', value: 'One Unified Data - One Control Center' },
          { label: 'Tích hợp đa kênh', value: 'Facebook, Zalo, Hotline, Webchat, Email' },
          { label: 'Công nghệ phân tích', value: 'Lead360 Behavioral AI & AI Scoring' },
          { label: 'Khả năng tích hợp', value: 'SIS, LMS, Cổng thanh toán, Webhook' }
        ],
        trustedClients: ['Đại học Hoa Sen (HSU CRM)', 'Hệ thống Trường Cao đẳng', 'Tổ chức Giáo dục Đào tạo']
      }
    ]
  }
];
