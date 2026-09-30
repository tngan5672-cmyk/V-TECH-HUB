import { Solution } from '../types';
import { Language } from '../translations';

const VI_SOLUTIONS_DATA: Record<string, Partial<Solution>> = {
  bfsi: {
    title: 'Tài chính, Ngân hàng & Bảo hiểm',
    category: 'Tài chính, Ngân hàng & Bảo hiểm',
    description: 'Hạ tầng VCLOUD & Bảo mật Email, Trợ lý AI Pháp lý & Tuân thủ, Phòng chống thất thoát dữ liệu (DLP) và An ninh Cơ sở dữ liệu ngân hàng lõi.',
    transformationHeadline: 'Những thách thức hàng đầu trong ngành Tài chính, Ngân hàng & Bảo hiểm',
    challengeEyebrow: 'THÁCH THỨC NGÀNH TÀI CHÍNH - NGÂN HÀNG',
    capabilitySectionTitle: 'Năng lực Trọng yếu cho Ngành Tài chính - Ngân hàng',
    transformationStory: 'Chuyển đổi số đang mở rộng bề mặt tấn công và gia tăng gánh nặng tuân thủ đối với các ngân hàng, tổ chức tài chính và bảo hiểm. Đội ngũ CNTT và an ninh mạng phải duy trì hoạt động an toàn, không gián đoạn trong khi vừa bảo vệ dữ liệu nhạy cảm, vừa hỗ trợ các quy trình kinh doanh diễn ra nhanh chóng và ứng phó với các mối đe dọa tinh vi từ cả bên trong lẫn bên ngoài.',
    challenges: 'Gian lận thanh toán & sửa đổi giao dịch, rò rỉ dữ liệu khách hàng & áp lực tuân thủ, truy cập CSDL ngân hàng lõi không kiểm soát, lừa đảo & ransomware qua email, rà soát pháp lý & tuân thủ chậm trễ.',
    solutionText: 'VCLOUD & Email Security + AI Legal & Compliance + Data Loss Prevention + Database Security',
    outcomes: 'Chủ động ngăn ngừa gian lận tài chính, tự động hóa tuân thủ & bảo vệ dữ liệu khách hàng, củng cố vững chắc hạ tầng lõi và làm sạch luồng liên lạc doanh nghiệp.',
    whyChooseTitle: 'TẠI SAO CÁC TỔ CHỨC TÀI CHÍNH - NGÂN HÀNG CHỌN V-TECH HUB?',
    whyChooseSubtitle: 'Nâng chuẩn an toàn dữ liệu, chủ động đáp ứng tuân thủ và tối ưu hóa chi phí vận hành.',
    whyChooseItems: [
      {
        title: 'Bảo Vệ Dữ Liệu Khách Hàng & Xây Dựng Niềm Tin',
        description: 'Bảo vệ dữ liệu định danh KYC, thông tin tài khoản và nhật ký giao dịch xuyên suốt qua email, người dùng, hạ tầng và hệ thống Core Banking — giảm thiểu rủi ro rò rỉ dữ liệu và truy cập trái phép.'
      },
      {
        title: 'Chủ Động Đáp Ứng Mọi Yêu Cầu Tuân Thủ',
        description: 'Hạ tầng VCLOUD tại Việt Nam kết hợp các lớp bảo vệ dữ liệu và kiểm soát truy cập chặt chẽ, giúp các tổ chức tài chính sẵn sàng đáp ứng các quy định bảo vệ dữ liệu cá nhân, kiểm toán và tiêu chuẩn an toàn ngành.'
      },
      {
        title: 'Tối Ưu Hóa Vận Hành & Kiểm Soát Chi Phí',
        description: 'Tự động hóa các biện pháp kiểm soát an ninh, giám sát luồng dữ liệu và rà soát tài liệu nhằm cắt giảm thao tác thủ công, giảm thiểu chi phí ứng cứu sự cố và tối ưu nguồn lực CNTT.'
      }
    ],
    fourKeyChallenges: [
      {
        title: 'Gian Lận Thanh Toán & Thay Đổi Giao Dịch',
        description: 'Ngân hàng trực tuyến và thanh toán số tạo điều kiện cho tội phạm sử dụng danh tính đánh cắp, gửi yêu cầu thanh toán gian lận hoặc thay đổi thông tin giao dịch. Nếu không phát hiện kịp thời, ngân hàng phải đối mặt với thiệt hại tài chính trực tiếp, gián đoạn vận hành và khiếu nại từ khách hàng.'
      },
      {
        title: 'Rò Rỉ Dữ Liệu Khách Hàng & Áp Lực Tuân Thủ',
        description: 'Các ngân hàng và tổ chức tài chính nắm giữ dữ liệu đặc biệt nhạy cảm, bao gồm thông tin định danh khách hàng, tài khoản, dữ liệu thẻ, hồ sơ vay và bảo hiểm. Một sự cố rò rỉ dữ liệu có thể dẫn đến rủi ro tuân thủ nghiêm trọng theo Nghị định 13, quy định của NHNN, PCI DSS — cùng tổn hại lâu dài đến uy tín và niềm tin khách hàng.'
      },
      {
        title: 'Truy Cập Cơ Sở Dữ Liệu Ngân Hàng Lõi Không Kiểm Soát',
        description: 'Cơ sở dữ liệu ngân hàng lõi được truy cập bởi các nhóm nội bộ, quản trị viên, lập trình viên và nhà cung cấp dịch vụ bên ngoài. Nếu thiếu cơ chế kiểm soát và giám sát truy cập rõ ràng, người dùng đặc quyền có thể xem, sao chép hoặc thay đổi dữ liệu nhạy cảm mà không bị phát hiện kịp thời.'
      },
      {
        title: 'Lừa Đảo & Mã Độc Tống Tiền Qua Email',
        description: 'Email là một trong những con đường phổ biến nhất để kẻ tấn công thâm nhập vào các tổ chức tài chính. Email lừa đảo, yêu cầu thanh toán giả mạo và ransomware có thể đánh cắp thông tin đăng nhập của nhân viên, kích hoạt chuyển tiền gian lận và làm gián đoạn các hoạt động ngân hàng trọng yếu.'
      },
      {
        title: 'Quy Trình Rà Soát Pháp Lý & Tuân Thủ Chậm Trễ',
        description: 'Hợp đồng vay, hợp đồng bảo hiểm và tài liệu tuân thủ quy chế thường đòi hỏi rà soát thủ công tỉ mỉ. Điều này làm chậm quá trình phê duyệt, kéo dài thời gian phục vụ khách hàng và khiến các nhóm pháp chế khó bắt kịp các thay đổi nhanh chóng của quy định pháp lý.'
      }
    ],
    capabilityPillars: [
      {
        title: 'VCLOUD & Bảo mật Email (Email Security)',
        description: 'Dịch vụ lưu trữ đám mây an toàn lưu giữ toàn bộ dữ liệu tài chính tại Việt Nam, kết hợp cùng hệ thống phòng thủ email nâng cao ngăn chặn lừa đảo, giả mạo lãnh đạo và ransomware trước khi tiếp cận hộp thư nhân viên.',
        deliverables: ['Lưu trữ đám mây chủ quyền tại VN', 'Chặn đứng Phishing & Giả mạo lãnh đạo', 'Bảo vệ hộp thư trước Ransomware']
      },
      {
        title: 'Trợ lý AI Pháp lý & Tuân thủ (AI Legal & Compliance)',
        description: 'Trợ lý AI chuyên trách được huấn luyện dựa trên các quy định của Ngân hàng Nhà nước Việt Nam với độ chính xác 95%. Tự động hóa rà soát hợp đồng và hồ sơ vay giúp cắt giảm 42% khối lượng công việc thủ công, với tùy chọn triển khai on-premise đảm bảo bảo mật dữ liệu tuyệt đối.',
        deliverables: ['AI am hiểu quy định NHNN 95%', 'Tự động rà soát hợp đồng & hồ sơ vay', 'Tùy chọn On-Premise bảo mật']
      },
      {
        title: 'Phòng chống Thất thoát Dữ liệu (Data Loss Prevention)',
        description: 'Giám sát toàn diện 360 độ trên các ứng dụng chat, webmail cá nhân và thiết bị USB. Tự động phát hiện các hồ sơ khách hàng nhạy cảm nhằm ngăn chặn gian lận nội bộ, chống rò rỉ dữ liệu và đảm bảo tuân thủ Nghị định 13.',
        deliverables: ['Giám sát ứng dụng chat, webmail & USB', 'Ngăn chặn gian lận nội bộ', 'Tự động tuân thủ Nghị định 13']
      },
      {
        title: 'An ninh Cơ sở Dữ liệu (Database Security)',
        description: 'Kiểm soát truy cập trực tiếp ở cấp độ truy vấn và che giấu dữ liệu thời gian thực cho hệ thống Core Banking. Ngăn chặn lạm quyền của quản trị viên mà không làm chậm giao dịch thực tế hay làm quá tải hệ thống bởi nhật ký rác.',
        deliverables: ['Kiểm soát truy cập cấp độ truy vấn', 'Che giấu dữ liệu Core Banking', 'Không làm chậm giao dịch trực tiếp']
      }
    ],
    details: [
      'Bộ công cụ giám sát chuyên sâu giúp khoanh vùng hoạt động rủi ro, ngăn chặn rò rỉ hồ sơ giao dịch, dữ liệu người dùng và thông tin kinh doanh tối mật.',
      'Trí tuệ nhân tạo (AI) giải phóng sức lao động thủ công trong khâu rà soát hợp đồng và hồ sơ tín dụng, giúp đội ngũ pháp chế phản hồi nhanh chóng và chuẩn xác.',
      'Cơ chế kiểm soát truy cập phân quyền sâu và che giấu dữ liệu động (Data Masking) bảo vệ tuyệt đối các kho dữ liệu giao dịch trước cả mối đe dọa bên trong lẫn bên ngoài.',
      'Cổng bảo mật email thế hệ mới chặn đứng các cuộc tấn công lừa đảo (phishing), mã độc và thư rác tinh vi nhắm vào hệ thống mạng tài chính.'
    ],
    keyChallenges: [
      {
        num: '01.',
        title: 'Rủi Ro Thất Thoát Tài Chính & Gian Lận Giao Dịch',
        description: 'Các hành vi gian lận giao dịch số, thao túng thanh toán và tấn công chiếm đoạt tài khoản đe dọa trực tiếp đến an toàn nguồn vốn và khả năng thanh khoản.'
      },
      {
        num: '02.',
        title: 'Tuân Thủ Pháp Lý & Rủi Ro Lộ Lọt Dữ Liệu',
        description: 'Khung pháp lý khắt khe (Nghị định 13, PCI DSS) nơi các sự cố rò rỉ dữ liệu khách hàng và sai sót rà soát thủ công kéo theo các án phạt hành chính nghiêm khắc.'
      },
      {
        num: '03.',
        title: 'Lỗ hổng CSDL Lõi & Tấn công Mạng',
        description: 'Bảo vệ kho dữ liệu giao dịch cốt lõi trước hành vi truy vấn trái phép và chặn đứng các đợt email lừa đảo, mã độc xâm nhập hệ thống.'
      }
    ],
    faqs: [
      {
        question: 'Làm thế nào để nền tảng bảo vệ cơ sở dữ liệu Core Banking trước các tài khoản đặc quyền nội bộ?',
        answer: 'DBSAFER DB giới hạn truy cập trực tiếp vào CSDL qua cổng proxy trung gian, bắt buộc phê duyệt các truy vấn SQL nhạy cảm và ứng dụng DATACRYPTO che giấu dữ liệu (data masking) để số tài khoản và số dư không thể đọc được bởi quản trị viên không được phân quyền.'
      },
      {
        question: 'Giải pháp AI Pháp lý giúp rút ngắn thời gian xử lý và thẩm định tuân thủ như thế nào?',
        answer: 'Hệ thống AI tự động rà soát hợp đồng vay, thỏa thuận tín dụng và hồ sơ tài chính; tự động đánh dấu các điều khoản rủi ro, đối chiếu trích dẫn chính sách và đảm bảo tính tương thích với các quy định ngân hàng.'
      }
    ]
  },
  government: {
    title: 'Chính phủ & Khối Công',
    category: 'Chính phủ & Khối Công',
    description: 'Hạ tầng VCLOUD & Bảo mật Email, Giải pháp phòng chống thất thoát dữ liệu (DLP) hồ sơ công dân và an ninh cơ sở dữ liệu hạ tầng công.',
    transformationHeadline: 'Những thách thức trọng yếu trong Khối Chính phủ & Hành chính công',
    challengeEyebrow: 'THÁCH THỨC KHỐI CHÍNH PHỦ & HÀNH CHÍNH CÔNG',
    capabilitySectionTitle: 'Năng lực An ninh & Hạ tầng Khối Công',
    transformationStory: 'Các cơ quan nhà nước nắm giữ khối lượng khổng lồ thông tin định danh công dân và tài liệu hành chính tối mật, đặt ra yêu cầu tuyệt đối về an toàn thông tin theo Luật An ninh mạng và Nghị định 13. Tuy nhiên, nguy cơ lạm dụng dữ liệu nội bộ, các chiến dịch tấn công mạng có chủ đích (APT) vào hạ tầng số và sự quá tải của hệ thống ghi nhận nhật ký kiểm toán truyền thống đang đặt ra bài toán cấp thiết về một giải pháp bảo vệ chuyên sâu, đồng bộ.',
    challenges: 'Bảo vệ dữ liệu công dân & tuân thủ pháp lý, rủi ro nội bộ & lạm dụng dữ liệu mật, tấn công mạng có chủ đích vào hạ tầng công, quá tải nhật ký kiểm toán.',
    solutionText: 'VCLOUD & Email Security + Data Loss Prevention + Database Security',
    outcomes: 'Bảo đảm tuân thủ toàn diện, chủ động ngăn ngừa rủi ro nội bộ, tinh gọn công tác kiểm toán và kiến tạo mạng lưới hành chính số vững chắc.',
    whyChooseTitle: 'TẠI SAO CÁC CƠ QUAN KHỐI CÔNG CHỌN V-TECH HUB?',
    whyChooseSubtitle: 'Tăng cường chủ quyền dữ liệu số, tối ưu kiểm toán và củng cố niềm tin của người dân.',
    whyChooseItems: [
      {
        title: 'Đảm bảo Tuân thủ Tuyệt đối Quy chuẩn Nhà nước',
        description: 'Bộ giải pháp phân loại và kiểm soát dữ liệu tự động giúp các đơn vị hành chính quản lý tài liệu mật hiệu quả, đáp ứng trọn vẹn quy định về bảo vệ dữ liệu cá nhân và an ninh mạng.'
      },
      {
        title: 'Chủ động Triệt tiêu Nguy cơ Rò rỉ Nội bộ',
        description: 'Phân tích hành vi chuyên sâu kết hợp kiểm soát thao tác tệp tin giúp phát hiện sớm các hành vi bất thường, ngăn chặn việc sao chép hoặc phát tán dữ liệu mật trái thẩm quyền.'
      },
      {
        title: 'Tinh gọn & Nâng cao Hiệu quả Kiểm toán Nhật ký',
        description: 'Hệ thống nhật ký kiểm toán thông minh loại bỏ cảnh báo rác vô giá trị, cung cấp báo cáo truy vết minh bạch giúp đội ngũ chuyên trách dễ dàng thanh tra và giám sát.'
      },
      {
        title: 'Hạ tầng Số Công vụ Kiên cường & An toàn',
        description: 'Mô hình bảo vệ tích hợp giữa cổng email công vụ và cơ sở dữ liệu giúp bảo vệ hạ tầng trọng yếu trước các cuộc tấn công mạng, duy trì cung cấp dịch vụ công thông suốt.'
      }
    ],
    fourKeyChallenges: [
      {
        title: 'Dữ liệu Công dân & Tuân thủ Pháp lý',
        description: 'Cơ quan công quyền quản lý dữ liệu định danh công dân và hồ sơ mật quốc gia, đòi hỏi cơ chế bảo vệ nghiêm ngặt và tuân thủ chặt chẽ các quy chuẩn an toàn thông tin.'
      },
      {
        title: 'Nguy cơ Lạm dụng Dữ liệu & Rủi ro Nội bộ',
        description: 'Khối công đối mặt với nguy cơ rò rỉ dữ liệu mật từ người dùng nội bộ, truy cập tệp tin trái thẩm quyền hoặc hành vi vượt cấp ngoài quy chế.'
      },
      {
        title: 'Tấn công Mạng có Chủ đích (APT) vào Hạ tầng Công',
        description: 'Các cổng dịch vụ công và hộp thư điện tử công vụ liên tục là mục tiêu của các chiến dịch tấn công APT, mã độc tống tiền (ransomware) và email lừa đảo tinh vi.'
      },
      {
        title: 'Hệ thống Nhật ký Kiểm toán Quá tải & Kém hiệu quả',
        description: 'Hạ tầng công cần ghi nhận nhật ký truy cập CSDL chi tiết, nhưng công nghệ cũ thường tạo ra lượng cảnh báo nhiễu khổng lồ, khiến việc thanh tra và kiểm toán trở nên tốn kém, chậm trễ.'
      }
    ],
    capabilityPillars: [
      {
        title: 'VCLOUD & Bảo mật Email (Email Security)',
        description: 'Hạ tầng đám mây an toàn kết hợp cùng cổng email bảo mật phân lọc mã độc, phishing và thư rác, bảo vệ kênh liên lạc công vụ luôn thông suốt và an toàn tuyệt đối.',
        deliverables: ['Hạ tầng VCLOUD an toàn', 'Cổng Email Secure Gateway', 'Chặn đứng Phishing & Mã độc']
      },
      {
        title: 'Phòng chống Thất thoát Dữ liệu Khối Công (DLP)',
        description: 'Kiểm soát dữ liệu tại nguồn qua FileAuditor kết hợp phân tích hành vi với Risk Monitor, giúp nhận diện sớm các nguy cơ rò rỉ và bảo vệ toàn diện hồ sơ dữ liệu công dân.',
        deliverables: ['Kiểm toán tệp FileAuditor', 'Phân tích hành vi Risk Monitor', 'Bảo vệ hồ sơ công dân']
      },
      {
        title: 'Bảo mật Cơ sở Dữ liệu Hành chính (Database Security)',
        description: 'Giám sát hoạt động CSDL thời gian thực, thực thi nghiêm ngặt chính sách truy vấn và cung cấp nhật ký kiểm toán thông minh, bảo vệ kho dữ liệu công trước mọi truy cập trái phép.',
        deliverables: ['Giám sát CSDL thời gian thực', 'Thực thi chính sách truy vấn', 'Nhật ký kiểm toán tinh gọn']
      }
    ],
    details: [
      'Bộ giải pháp phân loại và kiểm soát dữ liệu tự động giúp các đơn vị hành chính quản lý tài liệu mật hiệu quả, đáp ứng trọn vẹn quy định về bảo vệ dữ liệu cá nhân và an ninh mạng.',
      'Phân tích hành vi chuyên sâu kết hợp kiểm soát thao tác tệp tin giúp phát hiện sớm các hành vi bất thường, ngăn chặn việc sao chép hoặc phát tán dữ liệu mật trái thẩm quyền.',
      'Hệ thống nhật ký kiểm toán thông minh loại bỏ cảnh báo rác vô giá trị, cung cấp báo cáo truy vết minh bạch giúp đội ngũ chuyên trách dễ dàng thanh tra và giám sát.',
      'Mô hình bảo vệ tích hợp giữa cổng email công vụ và cơ sở dữ liệu giúp bảo vệ hạ tầng trọng yếu trước các cuộc tấn công mạng, duy trì cung cấp dịch vụ công thông suốt.'
    ],
    keyChallenges: [
      {
        num: '01.',
        title: 'Bảo vệ Dữ liệu Định danh Công dân',
        description: 'Quản lý thông tin công dân và tài liệu mật nhạy cảm, bảo đảm tuân thủ nghiêm ngặt Luật An ninh mạng và Nghị định 13.'
      },
      {
        num: '02.',
        title: 'Kiểm soát Nguy cơ Rò rỉ Nội bộ',
        description: 'Phòng ngừa hành vi sao chép, trích xuất dữ liệu mật trái thẩm quyền và rủi ro thất thoát từ người dùng nội bộ.'
      },
      {
        num: '03.',
        title: 'Chống Tấn công APT & Tinh gọn Kiểm toán CSDL',
        description: 'Phòng thủ trước mã độc, phishing nhắm vào email công vụ và nâng cao hiệu quả thanh tra, kiểm toán hạ tầng dữ liệu quốc gia.'
      }
    ],
    faqs: [
      {
        question: 'Hệ thống giải quyết tình trạng quá tải nhật ký kiểm toán (audit log) cho hạ tầng công quan trọng như thế nào?',
        answer: 'DBSAFER DB sử dụng bộ lọc chính sách truy vấn chủ động để chỉ ghi nhận các giao dịch quản trị thực sự cần thiết, loại bỏ nhật ký dư thừa và đảm bảo công tác kiểm toán tuân thủ luôn hiệu quả, dễ quản lý và không gây suy giảm hiệu năng hệ thống.'
      },
      {
        question: 'Cơ chế nào giúp ngăn chặn gian lận nội bộ và xử lý trái phép các tài liệu công mật?',
        answer: 'Risk Monitor giám sát hoạt động đầu cuối và các hành vi bất thường nhằm phát hiện nguy cơ gian lận nội bộ và vi phạm chính sách, trong khi FileAuditor kiểm toán phân quyền và theo dõi mọi biến động trên các thư mục dữ liệu công nhạy cảm.'
      }
    ]
  },
  healthcare: {
    title: 'Y tế & Chăm sóc Sức khỏe',
    category: 'Y tế & Chăm sóc Sức khỏe',
    description: 'Hạ tầng Đám mây bảo mật, Kiểm soát truy cập CSDL bệnh viện, Bảo vệ dữ liệu bệnh nhân chuẩn Nghị định 13 và Trợ lý AI thẩm định BHYT.',
    transformationHeadline: 'Thách thức Trọng yếu trong Vận hành Y tế & Lâm sàng Hiện đại',
    challengeEyebrow: 'THÁCH THỨC NGÀNH Y TẾ',
    capabilitySectionTitle: 'Năng lực Hiện đại hóa Y tế Số',
    transformationStory: 'Các cơ sở y tế và hệ thống bệnh viện chịu sức ép nặng nề từ thủ tục hành chính bảo hiểm y tế phức tạp, yêu cầu nghiêm ngặt về bảo vệ hồ sơ bệnh án theo Nghị định 13, cùng mối hiểm họa leo thang từ các đợt tấn công mạng nhắm thẳng vào hạ tầng EMR và cơ sở dữ liệu y khoa.',
    challenges: 'Mã độc tống tiền & lỗ hổng tuân thủ, rò rỉ dữ liệu nhạy cảm & quy định EMR, cổng giao tiếp dễ bị xâm nhập, quy trình hành chính thủ công.',
    solutionText: 'InfoSec Level Assessment + VCloud + HIS + EMR + WAAP & API Security + Email Security + DLP + Health Insurance AI Assistant',
    outcomes: 'Tra cứu quy chế BHYT dưới 60 giây, giảm thiểu sai sót y lệnh xuất toán, bảo mật tuyệt đối hồ sơ bệnh án và kiểm soát chặt chẽ truy cập dữ liệu bệnh viện.',
    whyChooseTitle: 'TẠI SAO CÁC BỆNH VIỆN CHỌN V-TECH HUB?',
    whyChooseSubtitle: 'Nâng cao chất lượng khám chữa bệnh, tối ưu chi phí vận hành và bảo vệ toàn diện dữ liệu y tế.',
    whyChooseItems: [
      {
        title: 'Tăng tốc Vận hành Y tế & Khám chữa bệnh',
        description: 'Trợ lý AI số hóa hơn 55 thông tư, nghị định BHYT cập nhật liên tục, hỗ trợ nhân viên y tế đối chiếu quy định chuẩn xác trong chưa đầy 60 giây.'
      },
      {
        title: 'Bảo mật Tuyệt đối Hồ sơ Bệnh nhân',
        description: 'Hệ thống kiểm soát truy cập CSDL kết hợp phòng chống thất thoát dữ liệu (DLP) bảo vệ hồ sơ bệnh án điện tử, đáp ứng trọn vẹn Nghị định 13 về bảo vệ dữ liệu cá nhân.'
      },
      {
        title: 'Lá chắn An ninh Mạng Chuyên sâu',
        description: 'Cổng bảo mật email ngăn chặn kịp thời các đợt tấn công giả mạo (phishing), mã độc và ransomware tống tiền nhắm vào mạng lưới y tế trọng yếu.'
      },
      {
        title: 'Tích hợp Thông suốt vào Hệ thống HIS',
        description: 'Triển khai linh hoạt qua Web, Zalo hoặc nhúng trực tiếp vào phần mềm quản lý bệnh viện (HIS) mà không làm xáo trộn quy trình lâm sàng.'
      }
    ],
    fourKeyChallenges: [
      {
        title: 'Ransomware & Lỗ hổng Tuân thủ (Ransomware & Compliance Gaps)',
        description: 'Bệnh viện là mục tiêu hàng đầu của ransomware. Nhiều cơ sở chưa thiết lập hồ sơ cấp độ an toàn thông tin theo Nghị định 85 và Thông tư 12, khiến hệ thống HIS/EMR cốt lõi có nguy cơ bị mã hóa, làm tê liệt vận hành lâm sàng và đe dọa an toàn người bệnh.'
      },
      {
        title: 'Rò rỉ Dữ liệu Nhạy cảm & Quy định EMR (Sensitive Data Leaks & EMR Mandates)',
        description: 'Khi Bộ Y tế đẩy mạnh chuyển đổi bệnh án điện tử (EMR), nhiều bệnh viện tuyến tỉnh mua sắm hệ thống chưa tích hợp bảo mật. Điều này khiến dữ liệu cá nhân nhạy cảm (kết quả CT/MRI, bệnh án, thông tin thanh toán) dễ bị lộ lọt, đối mặt với vi phạm nghiêm trọng Nghị định 13.'
      },
      {
        title: 'Cổng Giao tiếp Bên ngoài Dễ Bị Xâm nhập (Vulnerable External Gateways)',
        description: 'Các ứng dụng đặt lịch khám của bệnh nhân, cổng thông tin web và hệ thống email bệnh viện kết nối trực tiếp Internet, trở thành đích ngắm của các đợt quét lỗ hổng, tấn công DDoS và đánh cắp thông tin xác thực.'
      },
      {
        title: 'Quy trình Hành chính Kém Hiệu quả (Inefficient Administrative Workflows)',
        description: 'Đội ngũ y tế thường phải dựa vào quy trình thủ công để đối chiếu chéo các quy định lâm sàng và văn bản hành chính phức tạp, dẫn đến sai sót tuân thủ và gây chậm trễ nghiêm trọng trong quy trình chăm sóc bệnh nhân.'
      }
    ],
    capabilityPillars: [
      {
        title: 'Hạ tầng Cloud Tuân thủ & Hệ thống Lâm sàng',
        description: 'Thực hiện đánh giá hồ sơ cấp độ an toàn thông tin theo Nghị định 85 trước khi đầu tư, vận hành hệ thống HIS và EMR cốt lõi trên nền tảng VCloud chuẩn Tier III đảm bảo tính liên tục của bệnh viện.',
        iconName: 'server',
        deliverables: ['Đánh giá cấp độ Nghị định 85', 'Hạ tầng VCloud Tier III', 'Vận hành liên tục HIS & EMR']
      },
      {
        title: 'Bảo mật Vành đai & Kênh Truyền thông',
        description: 'Triển khai WAAP bảo vệ cổng đặt lịch khám và các API lâm sàng trước các khai thác lỗ hổng, kết hợp bộ lọc email bằng AI ngăn chặn ransomware và tấn công giả mạo.',
        iconName: 'shield',
        deliverables: ['Bảo vệ WAAP & API lâm sàng', 'Bộ lọc Email AI chuyên dụng', 'Chặn Ransomware & Tấn công Giả mạo']
      },
      {
        title: 'Chống Thất thoát Dữ liệu Bệnh nhân (DLP)',
        description: 'Giám sát hoạt động truyền dữ liệu và thao tác người dùng trên toàn mạng để ngăn chặn việc sao chép, chia sẻ hoặc trích xuất trái phép hồ sơ bệnh án và kết quả xét nghiệm.',
        iconName: 'lock',
        deliverables: ['Giám sát truyền dữ liệu mạng', 'Kiểm toán hành vi người dùng', 'Bảo vệ hồ sơ bệnh án & xét nghiệm']
      },
      {
        title: 'Trợ lý AI Bảo hiểm Y tế',
        description: 'Hỗ trợ đội ngũ y tế tra cứu quyền lợi bảo hiểm tức thì và đối chiếu quy chế pháp lý trực tiếp qua cổng thông tin bệnh viện, Zalo và kiosk tại chỗ.',
        iconName: 'sparkles',
        deliverables: ['Xác thực quyền lợi tức thì', 'Đối chiếu quy chuẩn pháp lý', 'Tích hợp Web, Zalo & Kiosk']
      }
    ],
    details: [
      'Trợ lý AI số hóa hơn 55 thông tư, nghị định BHYT cập nhật liên tục, hỗ trợ nhân viên y tế đối chiếu quy định chuẩn xác trong chưa đầy 60 giây.',
      'Hệ thống kiểm soát truy cập CSDL kết hợp phòng chống thất thoát dữ liệu (DLP) bảo vệ hồ sơ bệnh án điện tử, đáp ứng trọn vẹn Nghị định 13 về bảo vệ dữ liệu cá nhân.',
      'Cổng bảo mật email ngăn chặn kịp thời các đợt tấn công giả mạo (phishing), mã độc và ransomware tống tiền nhắm vào mạng lưới y tế trọng yếu.',
      'Triển khai linh hoạt qua Web, Zalo hoặc nhúng trực tiếp vào phần mềm quản lý bệnh viện (HIS) mà không làm xáo trộn quy trình lâm sàng.'
    ],
    keyChallenges: [
      {
        num: '01.',
        title: 'Mã độc Tống tiền & Lỗ hổng Tuân thủ',
        description: 'Hệ thống HIS/EMR cốt lõi đối mặt nguy cơ bị mã hóa do thiếu phân loại cấp độ an toàn thông tin theo Nghị định 85 & Thông tư 12.'
      },
      {
        num: '02.',
        title: 'Lộ lọt Dữ liệu Bệnh án Điện tử (EMR)',
        description: 'Triển khai EMR thiếu lớp bảo mật tích hợp dẫn đến nguy cơ lộ lọt hình ảnh CT/MRI và vi phạm nghiêm trọng Nghị định 13.'
      },
      {
        num: '03.',
        title: 'Cổng Ngoài Dễ Tổn Thương & Thủ Tục Kém Hiệu Quả',
        description: 'Cổng đặt lịch trực tuyến bị tấn công mạng kết hợp quy trình đối chiếu quy chế thủ công gây chậm trễ quy trình chăm sóc bệnh nhân.'
      }
    ],
    faqs: [
      {
        question: 'Giải pháp hỗ trợ các cơ sở y tế tuân thủ Nghị định 85 và Nghị định 13 như thế nào?',
        answer: 'Chúng tôi thực hiện khảo sát, đánh giá hiện trạng hạ tầng CNTT để xây dựng hồ sơ đề xuất cấp độ an toàn thông tin theo Nghị định 85. Đối với Nghị định 13, FileAuditor và Risk Monitor hỗ trợ phân loại dữ liệu y tế, giám sát truy cập hồ sơ bệnh án điện tử (EMR) nhạy cảm và ngăn ngừa thất thoát dữ liệu ra bên ngoài.'
      },
      {
        question: 'Trợ lý AI Bảo hiểm Y tế có thể tích hợp trực tiếp vào hệ thống Thông tin Bệnh viện (HIS) hiện có không?',
        answer: 'Có. Trợ lý AI có thể nhúng trực tiếp vào phần mềm HIS hiện tại, cổng thông tin lâm sàng, Zalo hoặc kiosk tra cứu tại bệnh viện để đối chiếu điều khoản và quy chuẩn BHYT theo thời gian thực mà không làm xáo trộn quy trình khám chữa bệnh.'
      },
      {
        question: 'Làm thế nào để bảo vệ bệnh viện trước các cuộc tấn công mã độc tống tiền (ransomware) nhắm vào cơ sở dữ liệu bệnh nhân?',
        answer: 'DBSAFER DB thiết lập chính sách kiểm soát truy cập phân quyền chi tiết giúp chặn đứng các truy vấn SQL trái phép và hành vi vượt quyền, kết hợp DATACRYPTO mã hóa các trường dữ liệu nhạy cảm. Đồng thời, hệ thống bảo mật email ứng dụng AI ngăn chặn tệp đính kèm độc hại và mã độc tống tiền trước khi tiếp cận nhân viên y tế.'
      }
    ]
  },
  retail: {
    title: 'Thương mại Điện tử & Bán lẻ',
    category: 'Thương mại Điện tử & Bán lẻ',
    description: 'Multi-CDN tốc độ cao, Bảo mật Web, Trợ lý AI Bán hàng và An toàn Dữ liệu. Tăng tốc trải nghiệm mua sắm số, bảo vệ website trước các mối đe dọa tự động và bảo mật dữ liệu khách hàng cùng giao dịch trên toàn hệ thống.',
    transformationHeadline: 'Những thách thức cốt lõi trong Thương mại số & Bán lẻ',
    challengeEyebrow: 'THÁCH THỨC NGÀNH BÁN LẺ & THƯƠNG MẠI ĐIỆN TỬ',
    capabilitySectionTitle: 'Năng lực Trọng yếu cho Ngành Bán lẻ & Thương mại Điện tử',
    capabilitySubtitle: 'Kiến trúc giải pháp tích hợp được thiết kế để nâng cao trải nghiệm mua sắm, đáp ứng các chiến dịch bán hàng lưu lượng lớn và bảo vệ dữ liệu khách hàng trên toàn bộ hoạt động thương mại số.',
    transformationStory: 'Các doanh nghiệp bán lẻ và thương mại điện tử cần duy trì hiệu suất website tốc độ cao trong các đợt cao điểm truy cập, kiểm soát gian lận voucher và cào quét dữ liệu, đồng thời bảo vệ dữ liệu khách hàng và giao dịch trước các truy cập trái phép.',
    challenges: 'Phản hồi chậm trễ & bỏ giỏ hàng, gian lận voucher & cào quét giá, nguy cơ rò rỉ dữ liệu khách hàng, rủi ro bảo mật dữ liệu điểm thưởng & thanh toán.',
    solutionText: 'Multi-CDN & Web/API Security + AI Sales Agent + Data Loss Prevention (DLP) + Database Security & Masking',
    outcomes: 'Tương tác khách hàng 24/7, hiệu suất ổn định mùa cao điểm, bảo vệ dữ liệu khách hàng toàn diện và an toàn dữ liệu điểm thưởng & giao dịch.',
    whyChooseTitle: 'TẠI SAO CHỌN V-TECH HUB CHO BÁN LẺ & THƯƠNG MẠI ĐIỆN TỬ?',
    whyChooseSubtitle: 'Nâng cao hiệu quả bán hàng, duy trì trải nghiệm số tin cậy và tăng cường bảo vệ dữ liệu khách hàng trên toàn doanh nghiệp.',
    whyChooseItems: [
      {
        title: 'Tương tác Khách hàng 24/7',
        description: 'Trợ lý AI bán hàng phản hồi thắc mắc của khách hàng suốt ngày đêm, cung cấp hướng dẫn sản phẩm và gợi ý các lựa chọn phù hợp trong suốt hành trình mua hàng.'
      },
      {
        title: 'Hiệu suất Ổn định trong Mùa Cao điểm',
        description: 'Multi-CDN và Bảo mật Web/API giúp duy trì truy cập nhanh chóng, ổn định đồng thời bảo vệ các nền tảng thương mại số trước lưu lượng bất thường trong các đợt Flash Sale và chiến dịch mua sắm lớn.'
      },
      {
        title: 'Bảo vệ Dữ liệu Khách hàng',
        description: 'DLP kiểm soát hoạt động sao chép, xuất và truyền dữ liệu khách hàng ra ngoài tổ chức, giúp giảm thiểu nguy cơ rò rỉ dữ liệu nội bộ.'
      },
      {
        title: 'Bảo mật Dữ liệu Điểm thưởng & Giao dịch',
        description: 'Bảo mật & Che giấu CSDL kiểm soát truy cập vào dữ liệu nhạy cảm, bảo vệ thông tin trọng yếu và ghi lại hoạt động cơ sở dữ liệu để giám sát và truy vết hiệu quả hơn.'
      }
    ],
    fourKeyChallenges: [
      {
        title: 'Phản hồi Chậm trễ & Tỷ lệ Bỏ Giỏ hàng',
        description: 'Khách hàng luôn kỳ vọng nhận được câu trả lời nhanh chóng về sản phẩm, kích cỡ, giá bán và phí giao hàng. Phản hồi chậm, đặc biệt vào giờ cao điểm, có thể dẫn đến đánh mất cơ hội chuyển đổi đơn hàng và bán thêm (upsell).'
      },
      {
        title: 'Gian lận Voucher & Cào quét Giá Tự động',
        description: 'Trong các đợt Flash Sale, bot tự động có thể nhanh chóng thu thập voucher, giữ chỗ các mặt hàng số lượng có hạn và tạo ra lưu lượng truy cập bất thường. Bot cào quét giá cũng liên tục trích xuất dữ liệu sản phẩm và giá cả, gây quá tải hệ thống và ảnh hưởng đến hoạt động kinh doanh.'
      },
      {
        title: 'Rò rỉ Dữ liệu Khách hàng',
        description: 'Hồ sơ khách hàng, lịch sử mua hàng và thông tin khách hàng VIP đòi hỏi các cơ chế kiểm soát truy cập nghiêm ngặt. Nhân viên sở hữu đặc quyền truy cập quá mức có thể sao chép hoặc chuyển dữ liệu nhạy cảm ra thiết bị ngoài, ứng dụng nhắn tin hoặc nền tảng lưu trữ cá nhân.'
      },
      {
        title: 'Bảo vệ Dữ liệu Điểm thưởng & Thanh toán',
        description: 'Điểm thưởng tích lũy, số dư tài khoản và dữ liệu giao dịch được lưu trữ trong các cơ sở dữ liệu quan trọng. Việc truy cập đặc quyền không được kiểm soát có thể cho phép người dùng trái phép xem hoặc chỉnh sửa thông tin nhạy cảm vượt quá thẩm quyền được giao.'
      }
    ],
    capabilityPillars: [
      {
        title: 'Multi-CDN & Bảo mật Web/API',
        description: 'Multi-CDN phân phối nội dung qua các vị trí máy chủ biên tối ưu nhằm duy trì hiệu suất website và ứng dụng ổn định trong các đợt cao điểm truy cập. Bảo mật Web/API phát hiện và kiểm soát bot tự động, gian lận voucher và các hành vi cào quét dữ liệu bất thường.',
        deliverables: ['Phân phối biên Multi-CDN', 'Kiểm soát botnet & cào dữ liệu', 'Đảm bảo khả dụng mùa cao điểm']
      },
      {
        title: 'Trợ lý AI Bán hàng (AI Sales Agent)',
        description: 'Trợ lý AI bán hàng hoạt động 24/7 trên website, ứng dụng và các kênh số để giải đáp thắc mắc về sản phẩm, gợi ý sản phẩm phù hợp và đồng hành cùng khách hàng trong suốt hành trình mua sắm.',
        deliverables: ['Hỗ trợ đa kênh 24/7', 'Tư vấn & gợi ý sản phẩm', 'Đồng hành chốt đơn tự động']
      },
      {
        title: 'Phòng chống Thất thoát Dữ liệu (DLP)',
        description: 'Khám phá và phân loại dữ liệu nhạy cảm, kiểm soát hoạt động sao chép và xuất dữ liệu, đồng thời giám sát luồng truyền tệp qua thiết bị gắn ngoài, ứng dụng nhắn tin và các nền tảng lưu trữ.',
        deliverables: ['Phân loại dữ liệu nhạy cảm', 'Kiểm soát sao chép & xuất tệp', 'Giám sát kênh ngoài & thiết bị']
      },
      {
        title: 'Bảo mật & Che giấu Cơ sở Dữ liệu (Masking)',
        description: 'Kiểm soát và giám sát các truy vấn cơ sở dữ liệu liên quan đến dữ liệu khách hàng và giao dịch. Che giấu dữ liệu động (Dynamic Data Masking) bảo vệ thông tin nhạy cảm trước các tài khoản đặc quyền, đồng thời duy trì nhật ký hoạt động phục vụ kiểm toán và điều tra.',
        deliverables: ['Giám sát truy vấn CSDL', 'Che giấu dữ liệu động (Masking)', 'Nhật ký kiểm toán & điều tra']
      }
    ],
    details: [
      'Trợ lý AI bán hàng phản hồi thắc mắc của khách hàng suốt ngày đêm, cung cấp hướng dẫn sản phẩm và gợi ý các lựa chọn phù hợp trong suốt hành trình mua hàng.',
      'Multi-CDN và Bảo mật Web/API giúp duy trì truy cập nhanh chóng, ổn định đồng thời bảo vệ các nền tảng thương mại số trước lưu lượng bất thường trong các đợt Flash Sale và chiến dịch mua sắm lớn.',
      'DLP kiểm soát hoạt động sao chép, xuất và truyền dữ liệu khách hàng ra ngoài tổ chức, giúp giảm thiểu nguy cơ rò rỉ dữ liệu nội bộ.',
      'Bảo mật & Che giấu CSDL kiểm soát truy cập vào dữ liệu nhạy cảm, bảo vệ thông tin trọng yếu và ghi lại hoạt động cơ sở dữ liệu để giám sát và truy vết hiệu quả hơn.'
    ],
    keyChallenges: [
      {
        num: '01.',
        title: 'Phản hồi Chậm trễ & Tỷ lệ Bỏ Giỏ hàng',
        description: 'Khách hàng luôn kỳ vọng nhận được câu trả lời nhanh chóng về sản phẩm, kích cỡ, giá bán và phí giao hàng. Phản hồi chậm, đặc biệt vào giờ cao điểm, có thể dẫn đến đánh mất cơ hội chuyển đổi đơn hàng và bán thêm (upsell).'
      },
      {
        num: '02.',
        title: 'Gian lận Voucher & Cào quét Giá Tự động',
        description: 'Trong các đợt Flash Sale, bot tự động có thể nhanh chóng thu thập voucher, giữ chỗ các mặt hàng số lượng có hạn và tạo ra lưu lượng truy cập bất thường. Bot cào quét giá cũng liên tục trích xuất dữ liệu sản phẩm và giá cả, gây quá tải hệ thống và ảnh hưởng đến hoạt động kinh doanh.'
      },
      {
        num: '03.',
        title: 'Rò rỉ Dữ liệu Khách hàng & Bảo mật Thanh toán',
        description: 'Hồ sơ khách hàng, lịch sử mua sắm và cơ sở dữ liệu điểm thưởng đòi hỏi kiểm soát quyền nghiêm ngặt để ngăn chặn rò rỉ nội bộ và can thiệp trái phép.'
      }
    ],
    faqs: [
      {
        question: 'Multi-CDN & Bảo mật Web/API duy trì tính sẵn sàng của cổng bán hàng trực tuyến trong các đợt sale cao điểm như thế nào?',
        answer: 'Multi-CDN phân phối nội dung qua các vị trí biên tối ưu duy trì hiệu suất ổn định trong các đợt bùng nổ truy cập, kết hợp giải pháp Web/API Security phát hiện và ngăn chặn tấn công DDoS tầng 7, botnet gian lận voucher và hành vi cào quét giá tự động.'
      },
      {
        question: 'Gói giải pháp DLP và Bảo mật Cơ sở Dữ liệu bảo vệ dữ liệu khách hàng và điểm thưởng tích lũy ra sao?',
        answer: 'DLP khám phá, phân loại dữ liệu nhạy cảm và kiểm soát chặt chẽ việc sao chép hoặc xuất tệp ra ngoài, trong khi giải pháp Bảo mật & Che giấu CSDL giám sát truy vấn thời gian thực và che giấu dữ liệu động (Masking) trước các tài khoản đặc quyền.'
      }
    ]
  },
  manufacturing: {
    title: 'Sản xuất & Chế tạo',
    category: 'Sản xuất & Chế tạo',
    description: 'Mạng phân phối nội dung & Bảo mật Email công nghiệp, Phòng chống thất thoát tài sản trí tuệ (DLP) và An ninh CSDL ERP/MES.',
    transformationHeadline: 'Những thách thức trọng yếu trong ngành Sản xuất hiện đại',
    challengeEyebrow: 'THÁCH THỨC NGÀNH SẢN XUẤT',
    capabilitySectionTitle: 'Năng lực Chuyển đổi Số & An ninh Nhà máy',
    transformationStory: 'Các doanh nghiệp sản xuất sở hữu khối lượng tài sản sở hữu trí tuệ vô giá như bản vẽ kỹ thuật, thiết kế độc quyền và công thức chế tạo – những dữ liệu luôn đối mặt với nguy cơ rò rỉ nội bộ hoặc bị đánh cắp. Bên cạnh đó, các cuộc tấn công mã độc nhắm vào email có thể làm tê liệt dây chuyền vận hành, trong khi các hệ thống lõi ERP và cổng kết nối đối tác chuỗi cung ứng luôn là đích ngắm của các cuộc tấn công DDoS và khai thác lỗ hổng.',
    challenges: 'Nguy cơ đánh cắp bản vẽ & sở hữu trí tuệ, tê liệt dây chuyền do mã độc, lỗ hổng hệ thống ERP/CSDL lõi, rủi ro an ninh cổng đối tác chuỗi cung ứng.',
    solutionText: 'Content Delivery Network & Email Security + Data Loss Prevention + Database Security',
    outcomes: 'Bảo vệ trọn vẹn tài sản trí tuệ nhà máy, làm sạch luồng trao đổi thông tin, bảo đảm an toàn hệ thống ERP và duy trì cổng đối tác thông suốt.',
    whyChooseTitle: 'TẠI SAO CÁC DOANH NGHIỆP SẢN XUẤT CHỌN V-TECH HUB?',
    whyChooseSubtitle: 'Bảo vệ bản quyền thiết kế, giữ vững an ninh nhà xưởng và bảo đảm chuỗi cung ứng không gián đoạn.',
    whyChooseItems: [
      {
        title: 'Bảo vệ Tuyệt đối Sở hữu Trí tuệ & Bản vẽ Kỹ thuật',
        description: 'Công cụ kiểm toán thao tác tệp và giám sát hành vi giúp phát hiện các hoạt động rủi ro, bảo vệ các bản vẽ CAD/CAM, công thức chế tạo và tài liệu thiết kế mật.'
      },
      {
        title: 'Kênh Trao đổi Thông tin Doanh nghiệp Kiên cường',
        description: 'Hệ thống bảo mật email ngăn chặn các cuộc tấn công lừa đảo (phishing), mã độc và ransomware gián đoạn chuỗi cung ứng và điều hành sản xuất.'
      },
      {
        title: 'Bảo vệ Hệ thống ERP & Cơ sở Dữ liệu Lõi',
        description: 'Cơ chế phân quyền truy cập CSDL và che giấu dữ liệu giúp bảo vệ thông tin nguyên vật liệu, định mức sản xuất và hồ sơ tài chính ERP trước mọi truy vấn trái phép.'
      },
      {
        title: 'Cổng Đối tác Chuỗi Cung ứng Ổn định & An toàn',
        description: 'Tăng tốc truyền tải và tường lửa ứng dụng giúp cổng kết nối nhà cung ứng (Supplier Portal) và ứng dụng B2B luôn vận hành ổn định, chống chịu mọi đợt tấn công DDoS.'
      }
    ],
    fourKeyChallenges: [
      {
        title: 'Nguy cơ Rò rỉ Bản vẽ & Sở hữu Trí tuệ (IP)',
        description: 'Bản vẽ kỹ thuật, sơ đồ thiết kế sản phẩm và công thức sản xuất có nguy cơ bị nhân viên sao chép trái phép qua USB, email cá nhân hoặc các ứng dụng lưu trữ đám mây.'
      },
      {
        title: 'Tê liệt Dây chuyền Vận hành do Tấn công Mạng',
        description: 'Các đợt email lừa đảo (phishing) và ransomware tống tiền có thể lây lan vào mạng nội bộ, làm gián đoạn hệ thống điều hành sản xuất và truyền thông nhà máy.'
      },
      {
        title: 'Lỗ hổng tại Hệ thống ERP & Cơ sở Dữ liệu Sản xuất',
        description: 'Cơ sở dữ liệu ERP/MES tập trung chứa toàn bộ dữ liệu tài chính, kho vận và định mức nguyên vật liệu là mục tiêu hàng đầu của các hành vi can thiệp trái phép.'
      },
      {
        title: 'Rủi ro An ninh Cổng Đối tác Chuỗi Cung ứng',
        description: 'Cổng thông tin trao đổi dữ liệu với các đối tác và nhà cung cấp thường xuyên đối mặt với nguy cơ tấn công DDoS, lưu lượng độc hại và khai thác lỗ hổng API.'
      }
    ],
    capabilityPillars: [
      {
        title: 'CDN & Cổng Bảo mật Email Công nghiệp',
        description: 'Tường lửa WAF và lá chắn chống DDoS bảo vệ các cổng portal chuỗi cung ứng, kết hợp cùng cổng email an toàn lọc sạch mã độc và thư rác công nghiệp.',
        deliverables: ['WAF & Chống DDoS cổng Portal', 'Cổng Email Gateway chuyên dụng', 'Chặn đứng Phishing & Ransomware']
      },
      {
        title: 'Phòng chống Thất thoát Bản vẽ & Dữ liệu Nhà máy (DLP)',
        description: 'Kiểm soát chặt chẽ các thao tác trên tệp tin thiết kế qua FileAuditor và nhận diện hành vi nhân sự bất thường với Risk Monitor, ngăn chặn triệt để nguy cơ tuồn tài sản trí tuệ.',
        deliverables: ['Kiểm soát tệp tin thiết kế CAD', 'Phát hiện hành vi trích xuất lén', 'Bảo vệ bí mật công nghệ']
      },
      {
        title: 'An ninh Cơ sở Dữ liệu ERP & MES (Database Security)',
        description: 'Giám sát hoạt động truy vấn CSDL sản xuất thời gian thực, thực thi chính sách hạn chế đặc quyền và ghi nhật ký minh bạch giúp bảo vệ dữ liệu sản xuất cốt lõi.',
        deliverables: ['Giám sát CSDL ERP thời gian thực', 'Kiểm soát tài khoản quản trị', 'Thực thi chính sách truy vấn']
      }
    ],
    details: [
      'Công cụ kiểm toán thao tác tệp và giám sát hành vi giúp phát hiện các hoạt động rủi ro, bảo vệ các bản vẽ CAD/CAM, công thức chế tạo và tài liệu thiết kế mật.',
      'Hệ thống bảo mật email ngăn chặn các cuộc tấn công lừa đảo (phishing), mã độc và ransomware gián đoạn chuỗi cung ứng và điều hành sản xuất.',
      'Cơ chế phân quyền truy cập CSDL và che giấu dữ liệu giúp bảo vệ thông tin nguyên vật liệu, định mức sản xuất và hồ sơ tài chính ERP trước mọi truy vấn trái phép.',
      'Tăng tốc truyền tải và tường lửa ứng dụng giúp cổng kết nối nhà cung ứng (Supplier Portal) và ứng dụng B2B luôn vận hành ổn định, chống chịu mọi đợt tấn công DDoS.'
    ],
    keyChallenges: [
      {
        num: '01.',
        title: 'Mất mát Bản quyền & Thiết kế',
        description: 'Bản vẽ kỹ thuật và công thức chế tạo độc quyền đối mặt nguy cơ bị sao chép hoặc rò rỉ trái phép.'
      },
      {
        num: '02.',
        title: 'Nguy cơ Gián đoạn Sản xuất',
        description: 'Email lừa đảo và mã độc tống tiền có thể làm ngưng trệ đường truyền và hoạt động của nhà máy.'
      },
      {
        num: '03.',
        title: 'Lỗ hổng Hệ thống ERP & CSDL',
        description: 'Bảo vệ cơ sở dữ liệu định mức, kho bãi và tài chính ERP trước các truy vấn vượt thẩm quyền.'
      }
    ],
    faqs: [
      {
        question: 'Các bản vẽ thiết kế sản phẩm độc quyền và file CAD được bảo vệ chống đánh cắp như thế nào?',
        answer: 'FileAuditor tự động nhận diện và gán nhãn tài sản trí tuệ trên toàn bộ máy chủ tệp tin, trong khi Risk Monitor theo dõi các kênh đầu cuối để ngăn chặn kịp thời các nỗ lực tải bản vẽ lên kho lưu trữ ngoài hoặc công cụ trao đổi trái phép.'
      },
      {
        question: 'Cổng thông tin đối tác chuỗi cung ứng được bảo vệ trước các mối đe dọa trên web như thế nào?',
        answer: 'Hệ thống triển khai WAAP và Multi-CDN tại tầng ứng dụng để kiểm soát luồng truy cập của đối tác, lọc sạch các cuộc tấn công chèn mã (injection) và đảm bảo thông suốt cho hoạt động hậu cần của nhà cung cấp B2B.'
      }
    ]
  },
  logistics: {
    title: 'Hậu cần & Vận tải Chuỗi Cung ứng',
    category: 'Vận tải & Chuỗi Cung ứng',
    description: 'Đám mây nội địa, tăng tốc Multi-CDN, bảo mật WAAP & API, phòng vệ thư điện tử và hợp nhất dữ liệu CRM cho chuỗi vận tải.',
    transformationHeadline: 'Những Thách thức Trọng yếu trong Vận tải & Chuỗi Cung ứng Hiện đại',
    challengeEyebrow: 'THÁCH THỨC NGÀNH VẬN TẢI & CHUỖI CUNG ỨNG',
    capabilitySectionTitle: 'Năng lực Hiện đại hóa Vận tải & Chuỗi Cung ứng',
    capabilitySubtitle: 'Bộ giải pháp hiện đại hóa hạ tầng tập trung vào tính sẵn sàng vận hành cao, an toàn giao dịch và luồng dữ liệu hợp nhất.',
    transformationStory: 'Các doanh nghiệp logistics và chuỗi cung ứng gặp khó khăn với các hệ thống ERP kế thừa khép kín, rủi ro email doanh nghiệp lừa đảo thanh toán cước, tình trạng quá tải cổng tra cứu trong các đợt cao điểm và các quy chuẩn nghiêm ngặt về chủ quyền dữ liệu trong nước cho các hoạt động quốc tế.',
    challenges: 'ERP kế thừa khép kín, lừa đảo email chiếm đoạt cước vận chuyển, sập cổng tra cứu mùa cao điểm, yêu cầu nghiêm ngặt về chủ quyền dữ liệu nội địa.',
    solutionText: 'Cloud & Multi-CDN + Bảo mật WAAP & API + Bảo mật Email + Tích hợp CRM',
    outcomes: 'Chặn đứng lừa đảo thanh toán cước, đảm bảo chủ quyền dữ liệu nội địa, loại bỏ downtime mùa cao điểm, và kết nối thông suốt các hệ thống ERP cũ.',
    whyChooseTitle: 'TẠI SAO CHỌN V-TECH HUB CHO NGÀNH LOGISTICS?',
    whyChooseSubtitle: 'Tra cứu kỹ thuật số không gián đoạn, giao dịch an toàn và minh bạch dữ liệu vận hành toàn trình.',
    whyChooseItems: [
      {
        title: 'Loại Bỏ Thủ Đoạn Gian Lận Chuyển Hướng Thanh Toán',
        description: 'Chặn đứng các hành vi mạo danh nhà cung cấp và hóa đơn cước giả mạo trước khi email lừa đảo tiếp cận phòng kế toán thanh toán.'
      },
      {
        title: 'Cam Kết Lưu Trữ Dữ Liệu Nội Địa Tuyệt Đối',
        description: 'Lưu trữ an toàn nhật ký vận chuyển trọng yếu và cơ sở dữ liệu khách hàng trong nước, đáp ứng trọn vẹn quy định an ninh mạng quốc gia.'
      },
      {
        title: 'Không Gián Đoạn Cổng Tra Cứu Vào Mùa Cao Điểm',
        description: 'Ngăn ngừa sự cố sập cổng theo dõi đơn và giảm độ trễ ứng dụng trong các chiến dịch giao hàng cao điểm nhờ bộ nhớ đệm biên và đám mây co giãn.'
      },
      {
        title: 'Hàn Gắn Khoảng Trống Giữa Các ERP Khép Kín',
        description: 'Hợp nhất các mốc dữ liệu vận hành kế thừa thành quy trình chăm sóc khách hàng liền mạch mà không cần thay thế tốn kém hệ thống lõi.'
      }
    ],
    fourKeyChallenges: [
      {
        title: 'ERP Kế Thừa Khép Kín & Dữ Liệu Kho Bãi Phân Mảnh',
        description: 'Các phần mềm ERP, WMS và TMS kế thừa thường vận hành độc lập, khép kín. Việc thiếu các cổng kết nối chuẩn hóa cản trở đồng bộ dữ liệu thời gian thực giữa các kho bãi vùng, gây đình trệ đối soát khách hàng và theo dõi tập trung.'
      },
      {
        title: 'Gian Lận Thanh Toán & Lỗ Hổng Bảo Mật Email',
        description: 'Email là kênh trao đổi vận đơn, chứng từ hải quan và lệnh chuyển tiền. Tin tặc thường mạo danh tên miền hãng vận chuyển và gửi email lừa đảo tinh vi để thay đổi số tài khoản và chiếm đoạt tiền cước giao dịch.'
      },
      {
        title: 'Nguy Cơ Gián Đoạn Cổng Tra Cứu & Lỗ Hổng Web',
        description: 'Ứng dụng theo dõi, cổng tài xế và API đối tác thương mại điện tử đối mặt lưu lượng truy cập khổng lồ vào mùa cao điểm, trở thành mục tiêu của bot thu thập trái phép và các đợt tấn công DDoS tầng 7.'
      },
      {
        title: 'Quy Định Nghiêm Ngặt Về Chủ Quyền & Lưu Trữ Dữ Liệu',
        description: 'Các hãng giao nhận quốc tế hoạt động tại Việt Nam phải tuân thủ nghiêm ngặt quy định an ninh mạng, yêu cầu nhật ký hành trình, hồ sơ thương mại và thông tin người nhận phải lưu trữ trên hạ tầng đám mây trong nước.'
      }
    ],
    capabilityPillars: [
      {
        title: 'Cloud & Multi-CDN',
        description: 'Vận hành hệ thống TMS và điều phối trung tâm trên hạ tầng điện toán đám mây nội địa chuẩn Tier III với cam kết SLA 99.997%. Tích hợp hơn 2.300 PoP CDN toàn cầu giúp lưu đệm tài nguyên tĩnh và phân tán lưu lượng đỉnh, duy trì tốc độ phản hồi tra cứu.',
        deliverables: ['Hạ tầng Cloud Tier III', 'Mạng lưới 2.300+ CDN PoP', 'Cam kết 99.997% SLA']
      },
      {
        title: 'Bảo Mật Email',
        description: 'Triển khai bảo vệ thư điện tử hai chiều, ngăn chặn giả mạo tên miền, tệp đính kèm mã độc zero-day và thủ đoạn chuyển hướng thanh toán nhắm vào đội ngũ điều vận và kế toán.',
        deliverables: ['Chống giả mạo tên miền', 'Chặn mã độc zero-day', 'Bảo vệ lệnh thanh toán cước']
      },
      {
        title: 'Bảo Mật WAAP & API',
        description: 'Bảo vệ ứng dụng tài xế, cổng tra cứu web và API trao đổi dữ liệu với đối tác trước các lỗ hổng OWASP Top 10, bot truy cập trái phép và tấn công DDoS lưu lượng lớn.',
        deliverables: ['Tường lửa OWASP Top 10', 'Chặn bot thu thập dữ liệu', 'Phòng vệ DDoS quy mô lớn']
      },
      {
        title: 'Tích Hợp CRM & Hợp Nhất Dữ Liệu',
        description: 'Tổng hợp các mốc vận chuyển và dữ liệu kho bãi từ các hệ thống kế thừa khép kín vào một hệ thống CRM duy nhất, mang lại khả năng giám sát toàn trình cho đội ngũ vận hành.',
        deliverables: ['Luồng dữ liệu hợp nhất', 'Đồng bộ TMS & Kho bãi', 'Minh bạch mốc vận chuyển']
      }
    ],
    details: [
      'Vận hành hệ thống TMS và điều phối trung tâm trên hạ tầng điện toán đám mây nội địa chuẩn Tier III với cam kết SLA 99.997%.',
      'Triển khai bảo vệ thư điện tử hai chiều, ngăn chặn giả mạo tên miền, tệp đính kèm mã độc zero-day và thủ đoạn chuyển hướng thanh toán.',
      'Bảo vệ ứng dụng tài xế, cổng tra cứu web và API trao đổi dữ liệu với đối tác trước các lỗ hổng OWASP Top 10 và tấn công DDoS.',
      'Tổng hợp các mốc vận chuyển và dữ liệu kho bãi từ các hệ thống kế thừa khép kín vào một hệ thống CRM duy nhất.'
    ],
    keyChallenges: [
      {
        num: '01.',
        title: 'ERP Kế Thừa Khép Kín & Dữ Liệu Kho Bãi Phân Mảnh',
        description: 'Phần mềm ERP, WMS, TMS kế thừa vận hành rời rạc, thiếu kết nối đồng bộ thời gian thực.'
      },
      {
        num: '02.',
        title: 'Gian Lận Thanh Toán & Lỗ Hổng Bảo Mật Email',
        description: 'Kẻ tấn công giả mạo tên miền nhà vận chuyển để can thiệp thông tin thanh toán cước.'
      },
      {
        num: '03.',
        title: 'Cổng Tra Cứu Quá Tải & Nguy Cơ Tấn Công Web',
        description: 'Lưu lượng đỉnh vào mùa mua sắm cao điểm dễ gây tắc nghẽn cổng theo dõi và lỗ hổng bảo mật.'
      }
    ],
    faqs: [
      {
        question: 'V-Tech Hub bảo vệ doanh nghiệp vận tải khỏi các vụ lừa đảo chiếm đoạt thanh toán cước như thế nào?',
        answer: 'Giải pháp bảo mật email đa lớp kiểm tra chuyên sâu thư đến và thư đi, xác thực tên miền nghiêm ngặt (SPF, DKIM, DMARC) và ngăn chặn mã độc, kịp thời cách ly các hóa đơn và chỉ thị thanh toán giả mạo.'
      },
      {
        question: 'Làm thế nào hạ tầng Cloud và Multi-CDN đảm bảo cổng tra cứu vận đơn luôn sẵn sàng trong mùa cao điểm?',
        answer: 'Hạ tầng điện toán đám mây nội địa chuẩn Tier III cam kết SLA 99.997%, kết hợp mạng lưới Multi-CDN với hơn 2.300 điểm PoP toàn cầu giúp phân tán lưu lượng và phản hồi tra cứu tức thì.'
      }
    ]
  },
  media: {
    title: 'Truyền thông & Nội dung Số',
    category: 'Truyền thông & Nội dung Số',
    description: 'Hạ tầng Multi-CDN & Bảo mật Web/App/API, Công cụ Lắng nghe Mạng xã hội (Social Listening) và Phòng chống thất thoát bản quyền số (DLP).',
    transformationHeadline: 'Những thách thức trọng yếu trong ngành Truyền thông & Nội dung số',
    challengeEyebrow: 'THÁCH THỨC NGÀNH TRUYỀN THÔNG',
    capabilitySectionTitle: 'Năng lực Hiện đại hóa Truyền thông Số',
    transformationStory: 'Các cơ quan báo chí và tổ chức truyền thông đối mặt với thách thức bảo mật các tác phẩm, kịch bản và tư liệu video chưa công bố trước nguy cơ lộ lọt từ nội bộ. Đồng thời, các đợt lưu lượng truy cập tăng vọt khi có sự kiện nóng đòi hỏi hạ tầng truyền tải ổn định, trong khi khủng hoảng truyền thông trên mạng xã hội có thể bùng nổ chỉ trong vài phút nếu thiếu công cụ giám sát và cảnh báo sớm.',
    challenges: 'Nguy cơ rò rỉ bản quyền & kịch bản chưa phát hành, nghẽn mạng do lưu lượng tin tức đột biến, bùng phát khủng hoảng truyền thông mạng xã hội, thiếu dữ liệu đo lường thị hiếu khán giả.',
    solutionText: 'Content Delivery Network & Web/App/API Security + Social Listening + Data Loss Prevention (DLP)',
    outcomes: 'Bảo vệ tuyệt đối tài sản trí tuệ số, lắng nghe thị hiếu khán giả theo thời gian thực và duy trì phát sóng tin tức mượt mà trong mọi đợt tin nóng.',
    whyChooseTitle: 'TẠI SAO CÁC ĐƠN VỊ TRUYỀN THÔNG CHỌN V-TECH HUB?',
    whyChooseSubtitle: 'Bảo vệ tài sản bản quyền, kiểm soát dư luận thông minh và bảo đảm tốc độ truyền tải nội dung đỉnh cao.',
    whyChooseItems: [
      {
        title: 'Khóa Chặt Tài sản Bản quyền & Nội dung Số',
        description: 'Giải pháp DLP và giám sát hành vi ngăn chặn hành vi tải lén hoặc chia sẻ kịch bản, ấn phẩm video và tài liệu độc quyền trước giờ phát hành chính thức.'
      },
      {
        title: 'Thấu hiểu Thị hiếu & Dư luận Thời gian thực',
        description: 'Công cụ Social Listening liên tục đo lường sắc thái cảm xúc của cộng đồng, phát hiện sớm các chủ đề đang nóng và hỗ trợ định hướng nội dung kịp thời.'
      },
      {
        title: 'Phát sóng & Tải trang Ổn định Mùa Cao điểm',
        description: 'Mạng lưới Multi-CDN kết hợp cùng các tầng bảo vệ chuyên sâu giúp nền tảng báo điện tử và ứng dụng xem video vận hành mượt mà, không bị sập nguồn khi lượng truy cập tăng đột biến.'
      }
    ],
    fourKeyChallenges: [
      {
        title: 'Nguy cơ Lộ lọt Bản quyền & Nội dung Chưa Phát hành',
        description: 'Kịch bản phim, tư liệu phóng sự độc quyền và video chưa lên sóng đối mặt với nguy cơ bị rò rỉ từ nội bộ hoặc bị trích xuất trái phép, gây thiệt hại nghiêm trọng về doanh thu và danh tiếng.'
      },
      {
        title: 'Nghẽn Mạng & Sập Nền tảng khi Tin Nóng Bùng nổ',
        description: 'Các sự kiện thời sự hoặc giải trí thu hút hàng triệu lượt truy cập cùng thời điểm, dễ dẫn đến quá tải máy chủ và tạo thời cơ cho các đợt tấn công phá hoại DDoS.'
      },
      {
        title: 'Rủi ro Khủng hoảng Danh tiếng trên Mạng Xã hội',
        description: 'Thông tin sai lệch hoặc làn sóng bình luận tiêu cực có thể lan rộng theo cấp số nhân nếu đơn vị truyền thông không có công cụ giám sát và phản ứng nhanh trong những giờ đầu.'
      },
      {
        title: 'Khó khăn trong Đo lường Xu hướng Khán giả',
        description: 'Thiếu dữ liệu phân tích cảm xúc và hành vi độc giả trên không gian số khiến việc xây dựng chiến lược nội dung và tiếp cận công chúng thiếu độ chuẩn xác.'
      }
    ],
    capabilityPillars: [
      {
        title: 'Content Delivery Network & Lá chắn Bảo vệ Nền tảng Truyền thông',
        description: 'Tăng tốc độ truyền tải nội dung tĩnh và phát trực tiếp (Live Stream) với Multi-CDN, kết hợp tường lửa WAF chống tấn công lớp ứng dụng và phòng thủ DDoS quy mô lớn.',
        deliverables: ['Tăng tốc tải trang Multi-CDN', 'Chống nghẽn mạng giờ cao điểm', 'Tường lửa WAF & Chống DDoS']
      },
      {
        title: 'Lắng nghe & Phân tích Mạng Xã hội (Social Listening)',
        description: 'Thu thập và phân tích tương tác trên Facebook, TikTok, YouTube và diễn đàn theo thời gian thực, đo lường cảm xúc cộng đồng và phát đi cảnh báo khủng hoảng sớm.',
        deliverables: ['Đo lường cảm xúc dư luận', 'Cảnh báo khủng hoảng tự động', 'Phát hiện xu hướng thịnh hành']
      },
      {
        title: 'Bảo vệ Bản quyền & Chống Thất thoát Nội dung (DLP)',
        description: 'Kiểm soát thao tác sao chép, gửi tệp và trích xuất tài nguyên video/hình ảnh, ngăn chặn triệt để hành vi rò rỉ tác phẩm truyền thông mật ra bên ngoài.',
        deliverables: ['Bảo vệ kịch bản & tư liệu số', 'Giám sát quyền truy cập tệp', 'Ngăn chặn tuồn tin nội bộ']
      }
    ],
    details: [
      'Giải pháp DLP và giám sát hành vi ngăn chặn hành vi tải lén hoặc chia sẻ kịch bản, ấn phẩm video và tài liệu độc quyền trước giờ phát hành chính thức.',
      'Công cụ Social Listening liên tục đo lường sắc thái cảm xúc của cộng đồng, phát hiện sớm các chủ đề đang nóng và hỗ trợ định hướng nội dung kịp thời.',
      'Mạng lưới Multi-CDN kết hợp cùng các tầng bảo vệ chuyên sâu giúp nền tảng báo điện tử và ứng dụng xem video vận hành mượt mà, không bị sập nguồn khi lượng truy cập tăng đột biến.',
      'Chủ động phòng vệ trước các cuộc tấn công DDoS và khai thác ứng dụng nhắm vào các nền tảng truyền thông.'
    ],
    keyChallenges: [
      {
        num: '01.',
        title: 'Bảo vệ Bản quyền Tác phẩm Số',
        description: 'Bản thảo kịch bản, video và tư liệu độc quyền chưa công bố đối mặt với nguy cơ rò rỉ từ nội bộ.'
      },
      {
        num: '02.',
        title: 'Quá tải Nền tảng khi Tin Nóng Bùng nổ',
        description: 'Lưu lượng độc giả tăng vọt đột ngột dễ gây nghẽn mạng và tạo cơ hội cho tấn công DDoS.'
      },
      {
        num: '03.',
        title: 'Kiểm soát & Xử lý Khủng hoảng Mạng xã hội',
        description: 'Làn sóng bình luận tiêu cực có thể lan nhanh nếu thiếu công cụ giám sát và cảnh báo thời gian thực.'
      }
    ],
    faqs: [
      {
        question: 'Hệ thống đảm bảo phát trực tuyến không giật lag khi hàng triệu người xem đồng thời bằng cách nào?',
        answer: 'Mạng lưới Multi-CDN điều phối lưu lượng động qua các nhà cung cấp CDN hàng đầu, lưu trữ bộ nhớ đệm gần người xem nhất để loại bỏ độ trễ và duy trì phát sóng 4K mượt mà liên tục.'
      },
      {
        question: 'Giải pháp phát hiện và xử lý sớm khủng hoảng truyền thông như thế nào?',
        answer: 'Hệ thống Social Listening ứng dụng AI liên tục quét thảo luận mạng xã hội, đo lường sắc thái dư luận và gửi cảnh báo sớm ngay khi xuất hiện xu hướng tiêu cực trước khi bùng phát thành khủng hoảng.'
      }
    ]
  },
  education: {
    title: 'Giáo dục & Đào tạo',
    category: 'Giáo dục & Đào tạo',
    description: 'Hạ tầng Multi-CDN & VCloud, Bảo mật WAAP & API, Lọc Email AI, Chống rò rỉ dữ liệu (DLP), An toàn CSDL và Trợ lý AI Tuyển sinh thông minh.',
    transformationHeadline: 'Thách thức Trọng yếu trong Giáo dục & Vận hành Học thuật Hiện đại',
    challengeEyebrow: 'THÁCH THỨC NGÀNH GIÁO DỤC',
    capabilitySectionTitle: 'Năng lực Hiện đại hóa Giáo dục & Học thuật Số',
    transformationStory: 'Các trường đại học và cơ sở giáo dục đối mặt với áp lực vận hành nặng nề trong các đợt đăng ký tín chỉ cao điểm, yêu cầu nghiêm ngặt về bảo vệ dữ liệu người học theo Nghị định 13, cùng hiểm họa an ninh mạng nhắm vào hồ sơ sinh viên, cổng thanh toán học phí và dữ liệu nghiên cứu khoa học.',
    challenges: 'Tắc nghẽn lưu lượng & sập hệ thống, lộ lọt hồ sơ học thuật & chuẩn Nghị định 13, lỗ hổng cổng đào tạo & ứng dụng, tư vấn thủ công & kênh liên lạc rời rạc.',
    solutionText: 'Multi-CDN & VCloud + WAAP & API Security + Email Security + DLP + Database Security + AI Education Assistant',
    outcomes: 'Đảm bảo sẵn sàng tuyệt đối mùa cao điểm, chuẩn hóa tuân thủ Nghị định 13, lá chắn vành đai vững chắc và tự động hóa tư vấn tuyển sinh.',
    whyChooseTitle: 'TẠI SAO CÁC CƠ SỞ GIÁO DỤC CHỌN V-TECH HUB?',
    whyChooseSubtitle: 'Bộ giải pháp toàn diện kết hợp hạ tầng đám mây co giãn, bảo mật Zero-Trust và tự động hóa tương tác được kiểm định bởi V-Tech Hub Alliance.',
    whyChooseItems: [
      {
        title: 'Đảm bảo Sẵn sàng Tuyệt đối Mùa Cao điểm',
        description: 'Bộ nhớ đệm Multi-CDN biên và hạ tầng đám mây co giãn duy trì phản hồi dưới 1 giây, ngăn ngừa sập trang trong các đợt đăng ký tín chỉ.'
      },
      {
        title: 'Bảo vệ Dữ liệu Sinh viên & Chuẩn hóa Nghị định 13',
        description: 'Phân quyền truy cập CSDL theo vai trò, che giấu dữ liệu động và chính sách DLP bảo vệ bảng điểm, hồ sơ học phí và thông tin cá nhân.'
      },
      {
        title: 'Lá chắn Bảo mật Vành đai Vững chắc',
        description: 'Tích hợp WAAP và lọc email bảo vệ cổng thông tin và luồng liên lạc trước lưu lượng bot, đánh cắp danh tính và ransomware có chủ đích.'
      },
      {
        title: 'Tự động hóa & Tối ưu Tư vấn Tuyển sinh',
        description: 'Trợ lý AI đa kênh tiếp nhận và giải đáp lượng lớn thắc mắc của thí sinh suốt ngày đêm mà không làm gia tăng áp lực nhân sự.'
      }
    ],
    fourKeyChallenges: [
      {
        title: 'Tắc nghẽn Lưu lượng & Gián đoạn Dịch vụ (Traffic Surges & Service Downtime)',
        description: 'Cổng đăng ký tín chỉ, hệ thống quản lý học tập (LMS) và nền tảng thi trực tuyến đối mặt với lượng truy cập tăng vọt trong mùa tuyển sinh và đăng ký học phần, thường xuyên gây quá tải máy chủ, chậm trễ và gián đoạn dịch vụ.'
      },
      {
        title: 'Lộ lọt Hồ sơ Học thuật & Lỗ hổng Tuân thủ (Academic Record Breaches & Compliance Gaps)',
        description: 'Các trường đại học lưu trữ dữ liệu cá nhân nhạy cảm của sinh viên, CCCD và thông tin thanh toán tài chính thuộc diện bảo vệ nghiêm ngặt của Nghị định 13. Quyền truy cập nội bộ chưa kiểm soát tiềm ẩn nguy cơ chỉnh sửa điểm hoặc chia sẻ trái phép hồ sơ người học.'
      },
      {
        title: 'Lỗ hổng Ứng dụng & Cổng Thông tin (External Web & Portal Vulnerabilities)',
        description: 'Website tuyển sinh, ứng dụng sinh viên và các API học thuật công khai kết nối trực tiếp Internet là mục tiêu thường xuyên của botnet thu thập dữ liệu, tấn công từ chối dịch vụ (DDoS) và khai thác lỗ hổng.'
      },
      {
        title: 'Tư vấn Thủ công & Kênh Tiếp nhận Rời rạc (Manual Inquiries & Disconnected Channels)',
        description: 'Phòng tuyển sinh tiếp nhận vô số câu hỏi lặp đi lặp lại về thủ tục xét tuyển, chính sách học phí và chương trình đào tạo trên nhiều kênh khác nhau, gây quá tải nguồn lực nhân sự trong các đợt cao điểm.'
      }
    ],
    capabilityPillars: [
      {
        title: 'Phân phối Cloud Co giãn & Sẵn sàng Cao',
        description: 'Multi-CDN kết hợp hạ tầng VCloud mở rộng băng thông theo nhu cầu, giữ cho cổng đăng ký và hệ thống thi trực tuyến luôn nhanh chóng, ổn định trong các đợt cao điểm.',
        iconName: 'server',
        deliverables: ['Đệm dữ liệu Multi-CDN biên', 'Mở rộng VCloud theo nhu cầu', 'Đảm bảo thời gian sẵn sàng mùa thi']
      },
      {
        title: 'Bảo vệ Cổng Thông tin & Kênh Liên lạc',
        description: 'WAAP bảo vệ cổng web tuyển sinh và API học thuật trước các đợt khai thác và tấn công DDoS, kết hợp bảo mật email bằng AI ngăn chặn mã độc, lừa đảo và ransomware.',
        iconName: 'shield',
        deliverables: ['Lá chắn WAAP cổng đào tạo', 'Chặn DDoS & Khai thác API', 'Bộ lọc Email AI chuyên dụng']
      },
      {
        title: 'Chống Thất thoát Dữ liệu Sinh viên & Nghiên cứu',
        description: 'Giám sát hoạt động tệp tin và hành vi người dùng nội bộ để phát hiện vi phạm chính sách, ngăn chặn chia sẻ trái phép hồ sơ sinh viên, thông tin tài chính và đề tài nghiên cứu.',
        iconName: 'lock',
        deliverables: ['Kiểm toán thao tác tệp tin', 'Chống lộ lọt hồ sơ sinh viên', 'Bảo vệ sở hữu trí tuệ nghiên cứu']
      },
      {
        title: 'Trợ lý AI Giáo dục & Tuyển sinh',
        description: 'Triển khai trợ lý trò chuyện đa kênh trên website và mạng xã hội tự động hóa tư vấn tuyển sinh, giải đáp thắc mắc thường gặp 24/7 và dẫn dắt thí sinh liền mạch.',
        iconName: 'sparkles',
        deliverables: ['Bot tư vấn tuyển sinh đa kênh', 'Giải đáp thắc mắc 24/7', 'Hỗ trợ nộp hồ sơ tức thì']
      }
    ],
    details: [
      'Bộ nhớ đệm Multi-CDN biên và hạ tầng đám mây co giãn duy trì phản hồi dưới 1 giây, ngăn ngừa sập trang trong các đợt đăng ký tín chỉ.',
      'Phân quyền truy cập CSDL theo vai trò, che giấu dữ liệu động và chính sách DLP bảo vệ bảng điểm, hồ sơ học phí và thông tin cá nhân theo Nghị định 13.',
      'Tích hợp WAAP và lọc email bảo vệ cổng thông tin và luồng liên lạc trước lưu lượng bot, đánh cắp danh tính và ransomware có chủ đích.',
      'Trợ lý AI đa kênh tiếp nhận và giải đáp lượng lớn thắc mắc của thí sinh suốt ngày đêm mà không làm gia tăng áp lực nhân sự.'
    ],
    keyChallenges: [
      {
        num: '01.',
        title: 'Tắc nghẽn Lưu lượng Mùa Tuyển sinh',
        description: 'Cổng đăng ký tín chỉ và LMS đối mặt lưu lượng truy cập khổng lồ gây quá tải và gián đoạn vận hành.'
      },
      {
        num: '02.',
        title: 'Rủi ro Dữ liệu Học thuật & Nghị định 13',
        description: 'Truy cập nội bộ thiếu kiểm soát tiềm ẩn rủi ro lộ lọt bảng điểm, học bổng và thông tin cá nhân sinh viên.'
      },
      {
        num: '03.',
        title: 'Lỗ hổng Cổng Thông tin & Quá tải Tư vấn',
        description: 'Website tuyển sinh bị tấn công DDoS kết hợp hàng ngàn câu hỏi lặp lại gây quá tải đội ngũ tư vấn.'
      }
    ],
    faqs: [
      {
        question: 'Kiến trúc hệ thống ngăn ngừa sập cổng đăng ký tín chỉ trong các đợt cao điểm như thế nào?',
        answer: 'Tài nguyên máy chủ ảo VCloud co giãn linh hoạt theo nhu cầu thực tế, kết hợp bộ nhớ đệm Multi-CDN biên để hấp thụ lưu lượng truy cập đột biến và phân phối nội dung đăng ký mà không gây quá tải máy chủ gốc.'
      },
      {
        question: 'Cơ chế nào ngăn chặn hành vi sửa điểm trái phép hoặc can thiệp vào bảng điểm của sinh viên?',
        answer: 'DBSAFER DB giới hạn các lệnh cập nhật SQL trên cơ sở dữ liệu học thuật chỉ từ các dải IP được ủy quyền và tài khoản chỉ định, đồng thời kích hoạt cảnh báo thời gian thực ngay khi xuất hiện các nỗ lực chỉnh sửa bất thường.'
      }
    ]
  }
};

export function getLocalizedSolution(sol: Solution, lang: Language): Solution {
  if (lang === 'EN') return sol;
  const viData = VI_SOLUTIONS_DATA[sol.id] || (sol.id === 'banking' ? VI_SOLUTIONS_DATA.bfsi : undefined);
  if (!viData) return sol;

  return {
    ...sol,
    title: viData.title || sol.title,
    category: viData.category || sol.category,
    description: viData.description || sol.description,
    challenges: viData.challenges || sol.challenges,
    solutionText: viData.solutionText || sol.solutionText,
    outcomes: viData.outcomes || sol.outcomes,
    transformationHeadline: viData.transformationHeadline || sol.transformationHeadline,
    challengeEyebrow: viData.challengeEyebrow || sol.challengeEyebrow,
    capabilitySectionTitle: viData.capabilitySectionTitle || sol.capabilitySectionTitle,
    capabilitySubtitle: viData.capabilitySubtitle || sol.capabilitySubtitle,
    whyChooseTitle: viData.whyChooseTitle || sol.whyChooseTitle,
    whyChooseSubtitle: viData.whyChooseSubtitle || sol.whyChooseSubtitle,
    whyChooseItems: viData.whyChooseItems || sol.whyChooseItems,
    transformationStory: viData.transformationStory || sol.transformationStory,
    fourKeyChallenges: viData.fourKeyChallenges || sol.fourKeyChallenges,
    capabilityPillars: viData.capabilityPillars || sol.capabilityPillars,
    details: viData.details || sol.details,
    keyChallenges: viData.keyChallenges || sol.keyChallenges,
    faqs: viData.faqs || sol.faqs,
  };
}
