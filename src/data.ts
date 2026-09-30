import { Partner, SuccessStory, Solution } from './types';

export const SOLUTIONS: Solution[] = [
  {
    id: 'bfsi',
    title: 'Banking, Financial Services & Insurance (BFSI)',
    category: 'BFSI',
    description: 'VCLOUD & Email Security, AI Legal & Compliance assistant, Data Loss Prevention and core banking Database Security.',
    imageAlt: 'Digital banking transaction security',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0tedN6xe18Wc1bc3oEhyoKblowHRX5gRPCxTLMIMOxy4DoEHhH5P71QBEkWmCLUsfOrYVxrACkXeNpQlMpSWmbvXRhQ04jSKpXOnmCKVvcP4u6yWHZZ98bcm3XoBFygBi18-ubkG-yAeEy0frnwzb2oOBgYMs7E9jMikiKApxDNG5dY4T8tcdDs0xmXbENWmfO7jmXKA733PdFq3epjjhQilVXAjB45aGS01s0VmvTE62ewgY_sw5cLaCdAS3WtSPNff31KQyXEbV',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    presentationImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop',
    transformationHeadline: 'Key Challenges in Banking, Financial Services, and Insurance',
    challengeEyebrow: 'INDUSTRY CHALLENGES',
    capabilitySectionTitle: 'Key Capabilities for BFSI',
    transformationStory: 'Digital transformation is expanding the attack surface and compliance burden for banks, financial institutions, and insurers. IT and security teams must maintain secure, uninterrupted operations while protecting sensitive data, supporting fast-moving business processes, and responding to increasingly sophisticated internal and external threats.',
    challenges: 'Fraudulent payments & transaction tampering, customer data leakage & compliance pressure, uncontrolled access to core banking databases, phishing & ransomware, slow legal & compliance reviews.',
    solutionText: 'VCLOUD & Email Security + AI Legal & Compliance + Data Loss Prevention + Database Security',
    outcomes: 'Proactive financial fraud mitigation, streamlined regulatory compliance & data protection, resilient core infrastructure, and secure corporate communications.',
    whyChooseTitle: 'WHY CHOOSE V-TECH HUB FOR BFSI?',
    whyChooseSubtitle: 'Strengthening financial compliance, data security, and operational resilience.',
    whyChooseItems: [
      {
        title: 'Protect Customer Data & Trust',
        description: 'Protect KYC data, account information, and transaction records across email, users, infrastructure, and Core Banking systems - reducing the risk of data leakage and unauthorized access.'
      },
      {
        title: 'Stay Ahead of Compliance Requirements',
        description: 'VCLOUD infrastructure in Vietnam, combined with data protection and access controls, helps financial institutions better prepare for data protection requirements, audits, and industry regulations.'
      },
      {
        title: 'Optimize Operations & Control Costs',
        description: 'Automate security controls, data monitoring, and document review to reduce manual work, minimize incident response costs, and optimize IT resources.'
      }
    ],
    fourKeyChallenges: [
      {
        title: 'Fraudulent Payments and Transaction Changes',
        description: 'Online banking and digital payments make it easier for criminals to use stolen identities, submit fraudulent payment requests, or alter transaction information. If these incidents are not detected early, the bank faces direct financial loss, operational disruption, and customer complaints.'
      },
      {
        title: 'Customer Data Leakage and Compliance Pressure',
        description: 'Banks and financial institutions hold highly sensitive data, including customer identity information, account details, card data, loan records, and insurance documents. A single data leak can create serious compliance issues under Decree 13, SBV requirements, and PCI DSS — as well as lasting damage to customer trust.'
      },
      {
        title: 'Uncontrolled Access to Core Banking Data',
        description: 'Core banking databases are accessed by internal teams, administrators, developers, and external service providers. Without clear access control and monitoring, privileged users may view, copy, or change sensitive data without timely detection.'
      },
      {
        title: 'Phishing and Ransomware Through Email',
        description: 'Email is one of the most common ways attackers enter financial organisations. Phishing emails, fake payment requests, and ransomware can steal employee credentials, trigger fraudulent transfers, and disrupt critical banking operations.'
      },
      {
        title: 'Slow Legal and Compliance Reviews',
        description: 'Loan agreements, insurance contracts, and regulatory documents often require detailed manual review. This slows down approvals, delays customer service, and makes it harder for legal and compliance teams to keep up with changing regulations.'
      }
    ],
    capabilityPillars: [
      {
        title: 'VCLOUD & Email Security',
        description: 'Secure cloud hosting that keeps your financial data inside Vietnam, paired with advanced email defense that stops phishing, executive spoofing, and ransomware before they reach employee inboxes.',
        deliverables: ['Sovereign Cloud Hosting', 'Anti-Phishing & Executive Spoofing', 'Ransomware Inbox Defense']
      },
      {
        title: 'AI Legal & Compliance',
        description: 'A specialized AI assistant trained on State Bank of Vietnam regulations with 95% accuracy. It automates loan and contract reviews to cut routine workload by 42%, with an on-premise option to ensure total data privacy.',
        deliverables: ['95% Accuracy SBV Regulation AI', 'Automated Loan & Contract Review', 'On-Premise Privacy Option']
      },
      {
        title: 'Data Loss Prevention',
        description: 'Full 360-degree monitoring across chat apps, personal webmail, and USB drives. It automatically detects sensitive customer records to stop insider fraud, prevent data leaks, and ensure Decree 13 compliance.',
        deliverables: ['Chat & Webmail Monitoring', 'Insider Fraud Prevention', 'Decree 13 Compliance Automation']
      },
      {
        title: 'Database Security',
        description: 'Direct query-level access control and real-time data masking built for Core Banking systems. It stops privileged admin abuse without slowing down live transactions or overloading systems with junk logs.',
        deliverables: ['Query-Level Access Control', 'Real-Time Core Banking Masking', 'Zero-Junk Log Overhead']
      }
    ],
    details: [
      'Advanced monitoring and data protection tools help identify risky activities and protect sensitive financial records, customer profiles, and business-critical files.',
      'AI helps reduce manual effort in contract reviews, allowing legal teams to process financial agreements more efficiently and support alignment with regulatory requirements.',
      'Integrated database access controls and dynamic data masking help protect critical transactional data from unauthorized internal and external access.',
      'Comprehensive email security helps block phishing, malware, and other cyber threats targeting financial networks.'
    ],
    keyChallenges: [
      {
        num: '01.',
        title: 'Financial & Transaction Fraud Risks',
        description: 'Digital payment fraud, transaction tampering, and identity spoofing directly jeopardize capital reserves and enterprise liquidity.'
      },
      {
        num: '02.',
        title: 'Regulatory Compliance & Data Leakage Risks',
        description: 'Strict regulatory mandates (Decree 13, PCI DSS) where unauthorized customer data leakage and manual contract compliance errors trigger severe sanctions.'
      },
      {
        num: '03.',
        title: 'Core Banking Vulnerabilities & Cyber Threats',
        description: 'Financial databases face unauthorized queries and privileged access abuse, while corporate channels face targeted phishing and malware attacks.'
      }
    ],
    strategicPartners: [
      { name: 'DatumBridge' },
      { name: 'PNPSECURE' },
      { name: 'SearchInform' },
      { name: 'VNETWORK' }
    ],
    faqs: [
      {
        question: 'How does the platform secure core banking databases from privileged internal accounts?',
        answer: 'DBSAFER DB restricts direct database access through proxy gateways, enforces approval workflows for sensitive SQL queries, and applies DATACRYPTO masking to render account numbers and balances unreadable to unauthorized administrators.'
      },
      {
        question: 'How does the AI Legal solution reduce compliance processing times?',
        answer: 'The AI system reviews loan contracts, credit agreements, and financial paperwork by automatically flagging risky clauses, verifying policy citations, and aligning documents with banking regulations.'
      }
    ]
  },
  {
    id: 'government',
    title: 'Government & Public Sector',
    category: 'Government & Public Sector',
    description: 'Sovereign Cloud platform complying with Decree 13 and Cybersecurity Law for Public Service portals.',
    imageAlt: 'Public digital services and national infrastructure',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZqhdTXw5jv9CDzbQiVxQ5-TmZbYENLTAv4C6TN6Rh3UI6iJ4wcBzVHwEDxoGpgXxmhPvsIdKE1tVSYCH2GHSjGRdmb3w08BWyUVx7WTztmeNhraUrRcYewxx2VLfnmIaFJYOzsoxkxxC50OZEdPwC3sT9SskIFBrPFiqOi6s2U4ahGPPe2hpxaaHPi7PE3-4HEl6I3EL4_MUMo868sQUWtP2lemtNz6byCNei5YQ9__mpK-bgDHY-DxzWXCl2nA1_e_znOJl31seO',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    presentationImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    transformationHeadline: 'Key Challenges in the Government & Public Sector',
    challengeEyebrow: 'INDUSTRY CHALLENGES',
    capabilitySectionTitle: 'Public Sector Security & Infrastructure Capabilities',
    transformationStory: 'Government agencies manage highly sensitive citizen information and classified documents, requiring strict data protection and alignment with national cybersecurity regulations, including Decree 13. They also face internal fraud, targeted cyberattacks on critical infrastructure, and audit log inefficiencies.',
    challenges: 'Citizen data & regulatory compliance, internal fraud & insider threats, targeted cyberattacks on public infrastructure, audit log inefficiencies.',
    solutionText: 'VCLOUD & Email Security + Data Loss Prevention + Database Security',
    outcomes: 'Stronger regulatory compliance, proactive insider risk management, streamlined audit operations, and resilient government networks.',
    whyChooseTitle: 'WHY CHOOSE V-TECH HUB FOR PUBLIC SECTOR?',
    whyChooseSubtitle: 'Strengthening data protection, compliance, and public trust.',
    whyChooseItems: [
      {
        title: 'Stronger Regulatory Compliance',
        description: 'Data classification and protection tools help government agencies manage sensitive information and support alignment with data privacy and cybersecurity requirements.'
      },
      {
        title: 'Proactive Insider Risk Management',
        description: 'Behavior analysis and file monitoring help identify risky internal activities and reduce the risk of unauthorized data sharing and misuse.'
      },
      {
        title: 'Streamlined Audit Operations',
        description: 'Clear and efficient audit logs help government IT teams monitor database activity and maintain accountability with less unnecessary data noise.'
      },
      {
        title: 'Resilient Government Networks',
        description: 'Integrated email and database security help protect critical IT infrastructure from malicious threats and support reliable public service delivery.'
      }
    ],
    fourKeyChallenges: [
      {
        title: 'Citizen Data & Regulatory Compliance',
        description: 'Government agencies manage highly sensitive citizen information and classified documents, requiring strict data protection and alignment with national cybersecurity regulations, including Decree 13.'
      },
      {
        title: 'Internal Fraud & Insider Threats',
        description: 'The public sector faces risks of internal data misuse, unauthorized access to classified files, and potential fraud by authorized personnel.'
      },
      {
        title: 'Targeted Cyberattacks on Public Infrastructure',
        description: 'Cyber threats, ransomware, and phishing campaigns can target government email networks and critical IT infrastructure.'
      },
      {
        title: 'Audit Log Inefficiencies',
        description: 'Critical public infrastructure requires detailed database access logs, but traditional monitoring systems can generate excessive noise, making compliance audits costly and complex.'
      }
    ],
    capabilityPillars: [
      {
        title: 'VCLOUD & Email Security',
        description: 'Secure VCLOUD infrastructure paired with an enterprise email gateway that filters malware, phishing, and spam to help protect official government communications from external threats.',
        deliverables: ['VCLOUD Infrastructure', 'Enterprise Email Gateway', 'Malware & Phishing Defense']
      },
      {
        title: 'Government Data Loss Prevention',
        description: 'Data-centric audit and protection via FileAuditor, combined with user behavior monitoring through Risk Monitor, helps detect suspicious activities, reduce internal data risks, and protect sensitive public records.',
        deliverables: ['FileAuditor DCAP', 'Risk Monitor Behavior Analysis', 'Public Records Protection']
      },
      {
        title: 'Database Security',
        description: 'Real-time database monitoring, query policy enforcement, and efficient audit logging help secure centralized citizen databases and critical public infrastructure against unauthorized access and misuse.',
        deliverables: ['Real-time DB Monitoring', 'Query Policy Enforcement', 'Streamlined Audit Logging']
      }
    ],
    details: [
      'Data classification and protection tools help government agencies manage sensitive information and support alignment with data privacy and cybersecurity requirements.',
      'Behavior analysis and file monitoring help identify risky internal activities and reduce the risk of unauthorized data sharing and misuse.',
      'Clear and efficient audit logs help government IT teams monitor database activity and maintain accountability with less unnecessary data noise.',
      'Integrated email and database security help protect critical IT infrastructure from malicious threats and support reliable public service delivery.'
    ],
    keyChallenges: [
      {
        num: '01.',
        title: 'Citizen Data & Regulatory Compliance',
        description: 'Government agencies manage highly sensitive citizen information and classified documents, requiring strict data protection and alignment with national cybersecurity regulations, including Decree 13.'
      },
      {
        num: '02.',
        title: 'Internal Fraud & Insider Threats',
        description: 'The public sector faces risks of internal data misuse, unauthorized access to classified files, and potential fraud by authorized personnel.'
      },
      {
        num: '03.',
        title: 'Targeted Cyberattacks on Public Infrastructure',
        description: 'Cyber threats, ransomware, and phishing campaigns can target government email networks and critical IT infrastructure.'
      }
    ],
    strategicPartners: [
      { name: 'SearchInform' },
      { name: 'PNPSECURE' },
      { name: 'DatumBridge' },
      { name: 'VNETWORK' }
    ],
    faqs: [
      {
        question: 'How does the system resolve audit log inefficiencies for critical public infrastructure?',
        answer: 'DBSAFER DB utilizes active query policy filtering to log only relevant administrative transactions, eliminating redundant noise and ensuring compliance audits remain efficient, manageable, and performant.'
      },
      {
        question: 'What mechanisms prevent internal fraud and unauthorized handling of classified public files?',
        answer: 'Risk Monitor tracks endpoint operations and behavioral anomalies to detect kickback attempts, internal fraud, and policy violations, while FileAuditor audits permissions and tracks changes across sensitive public directories.'
      }
    ]
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    category: 'Healthcare',
    description: 'Secure cloud infrastructure, database access control, medical data privacy compliance, and AI-assisted health insurance processing.',
    imageAlt: 'Healthcare medical technology and secure EMR database infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    presentationImage: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop',
    transformationHeadline: 'Key Challenges in Modern Healthcare & Clinical Operations',
    challengeEyebrow: 'INDUSTRY CHALLENGES',
    capabilitySectionTitle: 'Healthcare Modernisation Capabilities',
    transformationStory: 'Hospitals and healthcare networks face severe operational pressures from complex health insurance procedures, strict patient data privacy requirements under Decree 13, and escalating cyberattack threats targeting critical EMR and database infrastructure.',
    challenges: 'Ransomware & compliance gaps, sensitive data leaks & EMR mandates, vulnerable external gateways, inefficient administrative workflows.',
    solutionText: 'InfoSec Level Assessment + VCloud + HIS + EMR + WAAP & API Security + Email Security + DLP + Health Insurance AI Assistant',
    outcomes: 'Under 60s policy lookup, zero prescription errors, protected patient records, governed hospital database access.',
    whyChooseTitle: 'WHY CHOOSE V-TECH HUB FOR HEALTHCARE?',
    whyChooseItems: [
      {
        title: 'Faster Healthcare Operations',
        description: 'AI Assistant digitizes 55+ health insurance regulations, helping medical staff quickly look up policies and check compliance in under 60 seconds.'
      },
      {
        title: 'Secure Patient Data',
        description: 'Database access control and Data Loss Prevention help protect patient information and support compliance with Decree 13.'
      },
      {
        title: 'Stronger Cyber Protection',
        description: 'Email security helps block phishing, malware, and ransomware targeting critical healthcare systems.'
      },
      {
        title: 'Easy HIS Integration',
        description: 'Deploy via Web, Zalo, or directly within existing HIS without disrupting clinical workflows.'
      }
    ],
    fourKeyChallenges: [
      {
        title: 'Ransomware & Compliance Gaps',
        description: 'Hospitals are prime targets for ransomware. Many institutions have not yet established the mandatory security classifications required by Decree 85 and Circular 12, leaving critical HIS/EMR systems vulnerable to encryption that can paralyze clinical operations and endanger patients.'
      },
      {
        title: 'Sensitive Data Leaks & EMR Mandates',
        description: 'As the Ministry of Health mandates EMR adoption, many provincial hospitals procure systems without integrated security. This exposes highly sensitive personal data, including CT/MRI results, medical records, and payment information, to breaches, risking severe violations of Decree 13.'
      },
      {
        title: 'Vulnerable External Gateways',
        description: 'Patient booking applications, web portals, and hospital email networks are directly exposed to the internet, making them prime targets for vulnerability scanning, DDoS attacks, and credential theft.'
      },
      {
        title: 'Inefficient Administrative Workflows',
        description: 'Medical staff often rely on manual processes to cross-check complex clinical and administrative regulations, leading to compliance errors and severe delays in the patient care process.'
      }
    ],
    capabilityPillars: [
      {
        title: 'Compliant Cloud & Clinical Systems',
        description: 'Conducts Decree 85 security level assessments prior to investment, running core HIS and EMR platforms on Tier III VCloud to guarantee continuous hospital uptime.',
        iconName: 'server',
        deliverables: ['Decree 85 Assessment', 'Tier III VCloud Hosting', 'Core HIS & EMR Uptime']
      },
      {
        title: 'Perimeter & Communication Security',
        description: 'Deploys WAAP to shield booking portals and clinical APIs against active exploits, backed by AI-driven email filtering to block ransomware and spoofing attacks.',
        iconName: 'shield',
        deliverables: ['WAAP & API Defense', 'AI Email Filtering', 'Ransomware & Spoofing Defense']
      },
      {
        title: 'Patient Data Loss Prevention',
        description: 'Monitors data transfers and user actions across the network to stop unauthorized copying, sharing, or exfiltration of sensitive medical and test records.',
        iconName: 'lock',
        deliverables: ['Network Data Transfer Monitoring', 'User Activity Auditing', 'Prevent Exfiltration of Records']
      },
      {
        title: 'Health Insurance AI Assistant',
        description: 'Enables medical staff to instantly verify insurance coverage and cross-check regulations directly through hospital web portals, Zalo, and on-site kiosks.',
        iconName: 'sparkles',
        deliverables: ['Instant Coverage Verification', 'Regulation Cross-Checking', 'Web, Zalo & Kiosk Access']
      }
    ],
    details: [
      'AI Assistant digitizes 55+ health insurance regulations, helping medical staff quickly look up policies and check compliance in under 60 seconds.',
      'Database access control and Data Loss Prevention help protect patient information and support compliance with Decree 13.',
      'Email security helps block phishing, malware, and ransomware targeting critical healthcare systems.',
      'Deploy via Web, Zalo, or directly within existing HIS without disrupting clinical workflows.'
    ],
    keyChallenges: [
      {
        num: '01.',
        title: 'Ransomware & Compliance Gaps',
        description: 'Critical HIS/EMR systems vulnerable to ransomware encryption and gaps under Decree 85 & Circular 12.'
      },
      {
        num: '02.',
        title: 'Sensitive Data Leaks & EMR Mandates',
        description: 'Accelerated EMR adoption without integrated security risks exposure of sensitive CT/MRI results under Decree 13.'
      },
      {
        num: '03.',
        title: 'Vulnerable Gateways & Inefficient Workflows',
        description: 'External booking portals face cyber threats while manual regulatory cross-checks cause compliance errors and care delays.'
      }
    ],
    strategicPartners: [
      { name: 'Lumination' },
      { name: 'PNPSECURE' },
      { name: 'SearchInform' },
      { name: 'VNETWORK' }
    ],
    faqs: [
      {
        question: 'How does the solution help healthcare facilities comply with Decree 85 and Decree 13?',
        answer: 'We conduct preliminary IT infrastructure assessments to prepare mandatory security level classification dossiers under Decree 85. For Decree 13, FileAuditor and Risk Monitor classify medical data, track access to sensitive electronic medical records (EMR), and prevent unauthorized exfiltration.'
      },
      {
        question: 'Can the Health Insurance AI Assistant integrate directly into existing Hospital Information Systems (HIS)?',
        answer: 'Yes. The AI Assistant can be embedded directly into existing HIS software, clinical portals, Zalo, or hospital kiosks to cross-reference coverage terms and insurance regulations in real time without altering clinical workflows.'
      },
      {
        question: 'How are hospitals protected against ransomware attacks targeting patient databases?',
        answer: 'DBSAFER DB enforces granular access control policies to block unauthorized SQL queries and access bypass attempts, while DATACRYPTO encrypts sensitive database columns. Concurrently, AI email security blocks malicious attachments and phishing vectors before they reach clinical staff.'
      }
    ]
  },
  {
    id: 'retail',
    title: 'Retail & E-Commerce',
    category: 'Retail & E-Commerce',
    description: 'High-speed Multi-CDN, Web Security, AI Sales Agent, and Data Security. Accelerate digital shopping experiences, protect websites from automated threats, and secure customer and transaction data across your entire system.',
    imageAlt: 'E-commerce digital payment analytics and cloud multi-CDN performance dashboard',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    presentationImage: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200&auto=format&fit=crop',
    transformationHeadline: 'Key Challenges in Digital Commerce & Retail',
    challengeEyebrow: 'INDUSTRY CHALLENGES',
    capabilitySectionTitle: 'Key Capabilities for Retail & E-Commerce',
    capabilitySubtitle: 'An integrated architecture designed to improve shopping experiences, support high-traffic sales campaigns, and protect customer data across digital commerce operations.',
    transformationStory: 'Retail and e-commerce businesses need to maintain fast website performance during traffic peaks, control voucher abuse and data scraping, and protect customer and transaction data from unauthorized access.',
    challenges: 'Slow response & cart abandonment, voucher abuse & price scraping, customer data leakage, loyalty & payment data protection risks.',
    solutionText: 'Multi-CDN & Web/API Security + AI Sales Agent + Data Loss Prevention (DLP) + Database Security & Masking',
    outcomes: '24/7 customer engagement, stable performance during traffic peaks, customer data protection, and secure loyalty & transaction data.',
    whyChooseTitle: 'WHY CHOOSE V-TECH HUB FOR RETAIL & E-COMMERCE?',
    whyChooseSubtitle: 'Improve sales performance, maintain a reliable digital experience, and strengthen customer data protection across your business.',
    whyChooseItems: [
      {
        title: '24/7 Customer Engagement',
        description: 'AI Sales Agent responds to customer inquiries around the clock, provides product guidance, and recommends relevant options throughout the shopping journey.'
      },
      {
        title: 'Stable Performance During Traffic Peaks',
        description: 'Multi-CDN and Web/API Security help maintain fast and stable access while protecting digital commerce platforms from abnormal traffic during Flash Sales and other high-demand campaigns.'
      },
      {
        title: 'Protect Customer Data',
        description: 'DLP controls the copying, exporting, and transfer of customer data outside the organization, helping reduce the risk of internal data leakage.'
      },
      {
        title: 'Secure Loyalty & Transaction Data',
        description: 'Database Security & Masking controls access to sensitive data, protects critical information, and records database activities for better monitoring and traceability.'
      }
    ],
    fourKeyChallenges: [
      {
        title: 'Slow Response & Cart Abandonment',
        description: 'Customers expect quick answers about products, sizes, pricing, and delivery fees. Slow responses, especially during peak hours, can lead to missed conversions and lost upselling opportunities.'
      },
      {
        title: 'Voucher Abuse & Price Scraping',
        description: 'During Flash Sales, automated bots can rapidly claim vouchers, reserve limited-stock items, and generate abnormal traffic. Price-scraping bots can also continuously collect product and pricing data, increasing system load and affecting business operations.'
      },
      {
        title: 'Customer Data Leakage',
        description: 'Customer profiles, purchase histories, and VIP records require strict access controls. Employees with excessive access privileges may copy or transfer sensitive data to external devices, messaging applications, or storage platforms.'
      },
      {
        title: 'Loyalty & Payment Data Protection',
        description: 'Reward points, account balances, and transaction data are stored in critical databases. Uncontrolled privileged access can allow unauthorized users to view or modify sensitive information beyond their assigned permissions.'
      }
    ],
    capabilityPillars: [
      {
        title: 'Multi-CDN & Web/API Security',
        description: 'Multi-CDN distributes content through optimized edge locations to maintain stable website and application performance during traffic peaks. Web/API Security detects and controls automated bots, voucher abuse, and abnormal data-scraping activities.',
        deliverables: ['Multi-CDN Edge Distribution', 'Automated Bot & Scraping Control', 'Peak Traffic Availability'],
        iconName: 'server'
      },
      {
        title: 'AI Sales Agent',
        description: 'AI Sales Agent operates 24/7 across websites, applications, and digital channels to answer product questions, recommend relevant products, and assist customers throughout the purchasing journey.',
        deliverables: ['24/7 Omnichannel Assistance', 'Product Guidance & Recommendation', 'Purchasing Journey Support'],
        iconName: 'sparkles'
      },
      {
        title: 'Data Loss Prevention (DLP)',
        description: 'Discover and classify sensitive data, control data copying and export activities, and monitor file transfers through external devices, messaging applications, or storage platforms.',
        deliverables: ['Sensitive Data Classification', 'Copy & Export Control', 'External Channel Monitoring'],
        iconName: 'shield'
      },
      {
        title: 'Database Security & Masking',
        description: 'Control and monitor database queries involving customer and transaction data. Dynamic Data Masking protects sensitive information from privileged accounts while maintaining activity logs for auditing and investigation.',
        deliverables: ['DB Query Monitoring', 'Dynamic Data Masking', 'Audit & Investigation Logs'],
        iconName: 'lock'
      }
    ],
    details: [
      'AI Sales Agent responds to customer inquiries around the clock, provides product guidance, and recommends relevant options throughout the shopping journey.',
      'Multi-CDN and Web/API Security help maintain fast and stable access while protecting digital commerce platforms from abnormal traffic during Flash Sales and other high-demand campaigns.',
      'DLP controls the copying, exporting, and transfer of customer data outside the organization, helping reduce the risk of internal data leakage.',
      'Database Security & Masking controls access to sensitive data, protects critical information, and records database activities for better monitoring and traceability.'
    ],
    keyChallenges: [
      {
        num: '01.',
        title: 'Slow Response & Cart Abandonment',
        description: 'Customers expect quick answers about products, sizes, pricing, and delivery fees. Slow responses, especially during peak hours, can lead to missed conversions and lost upselling opportunities.'
      },
      {
        num: '02.',
        title: 'Voucher Abuse & Price Scraping',
        description: 'During Flash Sales, automated bots can rapidly claim vouchers, reserve limited-stock items, and generate abnormal traffic. Price-scraping bots can also continuously collect product and pricing data, increasing system load and affecting business operations.'
      },
      {
        num: '03.',
        title: 'Customer Data Leakage & Payment Security',
        description: 'Customer profiles, purchase histories, and reward point databases require strict access controls to prevent internal leaks and unauthorized privileged modifications.'
      }
    ],
    strategicPartners: [
      { name: 'DatumBridge' },
      { name: 'SearchInform' },
      { name: 'PNPSECURE' },
      { name: 'VNETWORK' }
    ],
    faqs: [
      {
        question: 'How does Multi-CDN & Web/API Security maintain portal availability during high-traffic sales campaigns?',
        answer: 'Multi-CDN distributes content through optimized edge locations to maintain stable website and application performance during traffic peaks, while Web/API Security detects and mitigates Layer 7 DDoS, automated bots, voucher abuse, and abnormal scraping activities.'
      },
      {
        question: 'How does Data Loss Prevention (DLP) and Database Security protect customer and loyalty transaction data?',
        answer: 'DLP discovers and classifies sensitive data, controlling copy and export activities across devices and messaging platforms. Database Security & Masking monitors database queries in real time and dynamically masks sensitive records to protect them from unauthorized privileged access.'
      }
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    category: 'Manufacturing',
    description: 'Industrial IoT connectivity, high-speed edge computing, and real-time smart factory operational monitoring.',
    imageAlt: 'Industrial IoT smart manufacturing',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    presentationImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
    transformationHeadline: 'Key Challenges in Modern Manufacturing',
    challengeEyebrow: 'INDUSTRY CHALLENGES',
    capabilitySectionTitle: 'Key Capabilities for Manufacturing',
    transformationStory: 'Manufacturing companies handle valuable intellectual property, blueprints, and proprietary designs that are vulnerable to internal leakage or unauthorized sharing. Meanwhile, operational disruptions from cyber threats, centralized ERP and database vulnerabilities, and supply chain partner portal risks demand a comprehensive, hardened defense.',
    challenges: 'Intellectual property & design risks, operational disruptions from cyber threats, ERP & database vulnerabilities, supply chain portal security.',
    solutionText: 'Content Delivery Network & Email Security + Data Loss Prevention + Database Security',
    outcomes: 'Proactive IP protection, resilient communication channels, secure core infrastructure, and stable partner portals.',
    whyChooseTitle: 'WHY CHOOSE V-TECH HUB FOR MANUFACTURING?',
    whyChooseSubtitle: 'Protect IP, strengthen security, and support operational continuity.',
    whyChooseItems: [
      {
        title: 'Proactive IP Protection',
        description: 'Audit and behavior monitoring tools help identify risky activities and protect proprietary designs, blueprints, and business-critical files.'
      },
      {
        title: 'Resilient Communication Channels',
        description: 'Email security helps block malware and phishing attempts that could compromise manufacturing networks.'
      },
      {
        title: 'Secure Core Infrastructure',
        description: 'Integrated database access controls and data masking help protect critical production and ERP data from unauthorized queries and access.'
      },
      {
        title: 'Stable Partner Portals',
        description: 'Web security and traffic distribution help maintain fast, reliable, and secure access for supply chain and B2B applications.'
      }
    ],
    fourKeyChallenges: [
      {
        title: 'Intellectual Property & Design Risks',
        description: 'Manufacturing companies handle valuable intellectual property, blueprints, and proprietary designs that are vulnerable to internal leakage or unauthorized sharing.'
      },
      {
        title: 'Operational Disruptions from Cyber Threats',
        description: 'Phishing, malware, and ransomware targeting corporate emails can disrupt critical communication and production workflows.'
      },
      {
        title: 'ERP & Database Vulnerabilities',
        description: 'Centralized manufacturing databases and ERP systems are prime targets for unauthorized queries, application exploits, and privileged access abuse.'
      },
      {
        title: 'Supply Chain Portal Security',
        description: 'Web portals used by suppliers and partners require reliable availability and protection against malicious traffic and DDoS attacks.'
      }
    ],
    capabilityPillars: [
      {
        title: 'Content Delivery Network & Email Security',
        description: 'WAF and DDoS protection help secure external partner portals, while a secure email gateway filters spam, phishing, and malware to protect corporate communications.',
        deliverables: ['External Portal WAF & DDoS', 'Secure Email Gateway', 'Malware & Spam Filtering']
      },
      {
        title: 'Manufacturing Data Loss Prevention',
        description: 'Data-Centric Audit and Protection via FileAuditor and user behavior monitoring through Risk Monitor help detect suspicious activities and prevent unauthorized data sharing or leakage of intellectual property and sensitive corporate data.',
        deliverables: ['FileAuditor DCAP', 'Risk Monitor Behavior Analysis', 'IP & Blueprint Leakage Defense']
      },
      {
        title: 'Database Security',
        description: 'Real-time database monitoring, access control, and query policy enforcement help secure core manufacturing databases and ERP systems against unauthorized access and misuse.',
        deliverables: ['Real-time DB Monitoring', 'ERP Access Control', 'Query Policy Enforcement']
      }
    ],
    details: [
      'Audit and behavior monitoring tools help identify risky activities and protect proprietary designs, blueprints, and business-critical files.',
      'Email security helps block malware and phishing attempts that could compromise manufacturing networks.',
      'Integrated database access controls and data masking help protect critical production and ERP data from unauthorized queries and access.',
      'Web security and traffic distribution help maintain fast, reliable, and secure access for supply chain and B2B applications.'
    ],
    keyChallenges: [
      {
        num: '01.',
        title: 'Intellectual Property & Design Risks',
        description: 'Manufacturing companies handle valuable intellectual property, blueprints, and proprietary designs that are vulnerable to internal leakage or unauthorized sharing.'
      },
      {
        num: '02.',
        title: 'Operational Disruptions from Cyber Threats',
        description: 'Phishing, malware, and ransomware targeting corporate emails can disrupt critical communication and production workflows.'
      },
      {
        num: '03.',
        title: 'ERP & Database Vulnerabilities',
        description: 'Centralized manufacturing databases and ERP systems are prime targets for unauthorized queries, application exploits, and privileged access abuse.'
      }
    ],
    strategicPartners: [
      { name: 'SearchInform' },
      { name: 'PNPSECURE' },
      { name: 'VNETWORK' }
    ],
    faqs: [
      {
        question: 'How are proprietary product blueprints and CAD designs protected from exfiltration?',
        answer: 'FileAuditor identifies and tags intellectual property across file servers, while Risk Monitor tracks endpoint channels to intercept attempts to upload designs to unauthorized external repositories or communication tools.'
      },
      {
        question: 'How are supply chain partner portals protected from web-based threats?',
        answer: 'The system deploys WAAP and Multi-CDN at the application layer to inspect partner traffic, filter injection attacks, and ensure uninterrupted access for B2B supplier logistics.'
      }
    ]
  },
  {
    id: 'logistics',
    title: 'Logistics',
    category: 'Logistics',
    description: 'Domestic cloud, Multi-CDN acceleration, WAAP & API security, email protection, and CRM data unification for high-availability supply chain operations.',
    imageAlt: 'High-tech automated logistics fulfillment center and cloud tracking network',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    presentationImage: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop',
    transformationHeadline: 'Key Challenges in Modern Logistics & Supply Chain',
    challengeEyebrow: 'LOGISTICS & SUPPLY CHAIN CHALLENGES',
    capabilitySectionTitle: 'Logistics & Supply Chain Modernisation Capabilities',
    capabilitySubtitle: 'Infrastructure modernization suite focused on high operational availability, transaction security, and unified data flows.',
    transformationStory: 'Logistics and supply chain enterprises struggle with closed legacy ERP silos, business email compromise targeting freight billing, tracking portal downtime during shipment peaks, and strict domestic data sovereignty mandates for international operations.',
    challenges: 'Closed legacy ERP silos, business email compromise targeting freight billing, tracking portal downtime during shipment peaks, and strict domestic data sovereignty mandates for international operations.',
    solutionText: 'Cloud & Multi-CDN + WAAP & API Security + Email Security + CRM Integration',
    outcomes: 'Zero payment diversion scams, guaranteed domestic data residency, zero tracking portal downtime, and bridged legacy ERP gaps.',
    whyChooseTitle: 'WHY CHOOSE V-TECH HUB FOR LOGISTICS?',
    whyChooseSubtitle: 'Uninterrupted digital tracking, defensible transactions, and integrated operational visibility.',
    whyChooseItems: [
      {
        title: 'Eliminate Payment Diversion Scams',
        description: 'Blocks supplier impersonation and fraudulent billing invoices before phishing messages reach accounts payable.'
      },
      {
        title: 'Guaranteed Domestic Data Residency',
        description: 'Anchors mission-critical transit logs and customer databases inside Vietnam to satisfy national cyber sovereignty laws.'
      },
      {
        title: 'Zero Portal Downtime During Surges',
        description: 'Prevents tracking outages and application latency during peak shipping campaigns through edge caching and elastic cloud scaling.'
      },
      {
        title: 'Bridge Closed ERP Gaps',
        description: 'Unifies legacy operational milestones into actionable customer service workflows without requiring disruptive core system replacements.'
      }
    ],
    fourKeyChallenges: [
      {
        title: 'Closed Legacy ERPs & Fragmented Warehouse Data',
        description: 'Legacy ERP, WMS, and TMS software often operate in rigid, isolated silos. The lack of standard connectors prevents real-time data sync across regional depots, crippling customer reconciliation and consolidated tracking.'
      },
      {
        title: 'Payment Fraud & Email Vulnerabilities',
        description: 'Email serves as the critical channel for bills of lading, customs releases, and payment instructions. Attackers frequently weaponize spoofed carrier domains and spear-phishing to alter banking details and divert freight transactions.'
      },
      {
        title: 'Tracking Portal Downtime & Web Vulnerabilities',
        description: 'Tracking apps, driver portals, and e-commerce partner APIs experience immense traffic spikes during seasonal shopping events. These gateways are heavily targeted by automated scraping bots and Layer 7 DDoS attacks.'
      },
      {
        title: 'Data Residency & Sovereignty Mandates',
        description: 'Multinational forwarders operating in Vietnam must adhere to strict cybersecurity regulations requiring operational transit logs, commercial records, and recipient details to be stored strictly on domestic cloud infrastructure.'
      }
    ],
    capabilityPillars: [
      {
        title: 'Cloud & Multi-CDN',
        description: 'Hosts central TMS and dispatch operations on Tier III domestic cloud infrastructure backed by a 99.997% uptime SLA. Integrates 2,300+ global CDN nodes to cache static assets and absorb traffic surges, keeping tracking queries responsive.',
        iconName: 'cloud',
        deliverables: ['Tier III Domestic Cloud', '2,300+ Global CDN Nodes', '99.997% Uptime SLA']
      },
      {
        title: 'Email Security',
        description: 'Deploys inbound and outbound mail protection to intercept domain spoofing, zero-day malware attachments, and payment redirect fraud targeting dispatchers and accounting departments.',
        iconName: 'lock',
        deliverables: ['Anti-Domain Spoofing', 'Zero-Day Malware Intercept', 'Payment Redirect Defense']
      },
      {
        title: 'WAAP & API Security',
        description: 'Shields driver applications, tracking web interfaces, and partner data-exchange APIs against OWASP Top 10 vulnerabilities, unauthorized bot access, and volumetric DDoS attacks.',
        iconName: 'shield',
        deliverables: ['OWASP Top 10 WAAP', 'Anti-Scraping Bot Defense', 'Volumetric DDoS Mitigation']
      },
      {
        title: 'CRM Integration & Data Unification',
        description: 'Aggregates disparate shipping milestones and warehouse inventory events from closed legacy systems into a unified CRM, providing end-to-end milestone visibility for operations teams.',
        iconName: 'server',
        deliverables: ['Unified Milestone Stream', 'Warehouse & TMS Sync', 'End-to-End Visibility']
      }
    ],
    details: [
      'Hosts central TMS and dispatch operations on Tier III domestic cloud infrastructure backed by a 99.997% uptime SLA.',
      'Deploys inbound and outbound mail protection to intercept domain spoofing, zero-day malware attachments, and payment redirect fraud.',
      'Shields driver applications, tracking web interfaces, and partner data-exchange APIs against OWASP Top 10 and volumetric DDoS attacks.',
      'Aggregates disparate shipping milestones and warehouse inventory events from closed legacy systems into a unified CRM.'
    ],
    keyChallenges: [
      {
        num: '01.',
        title: 'Closed Legacy ERPs & Fragmented Data',
        description: 'Legacy ERP, WMS, TMS software operate in rigid silos without standard real-time sync across regional depots.'
      },
      {
        num: '02.',
        title: 'Payment Fraud & Email Vulnerabilities',
        description: 'Attackers weaponize spoofed carrier domains and spear-phishing to alter banking details and divert freight transactions.'
      },
      {
        num: '03.',
        title: 'Tracking Portal Downtime & Cyber Attacks',
        description: 'Tracking web interfaces and driver APIs experience immense spikes and attacks during peak shipping periods.'
      }
    ],
    strategicPartners: [
      { name: 'VNETWORK' },
      { name: 'PNPSECURE' },
      { name: 'SearchInform' }
    ],
    faqs: [
      {
        question: 'How does V-Tech Hub protect logistics firms against freight payment diversion and invoice fraud?',
        answer: 'Email Security deploys multi-layered inbound and outbound inspection that validates domain authentication (SPF, DKIM, DMARC), detects forged carrier addresses, and isolates suspicious attachments before fraudulent billing instructions reach finance teams.'
      },
      {
        question: 'How do Cloud infrastructure and Multi-CDN ensure tracking portals stay online during peak shipping volumes?',
        answer: 'Tier III domestic cloud environment provides elastic compute backed by a 99.997% SLA, while Multi-CDN caches dynamic and static assets across 2,300+ global Points of Presence to absorb massive traffic surges without degradation.'
      }
    ]
  },
  {
    id: 'media',
    title: 'Media & Digital Content',
    category: 'Media & Digital Content',
    description: 'Ultra-fast Content Delivery Network, high-definition 4K/8K live streaming without buffering for millions of viewers.',
    imageAlt: 'Broadcast media streaming and CDN',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAk7_TAe4ukT-HnMxrz7hivm6rywM9JDpDMfOtneirQC8NiYOFho4PvWm24vsvVseb6p8GA1_EdRmZFvWBbBBYHOA7W-lrowquXkbxSsc1u6TmHVCv10Q3tWi9tZ596NXBuWm9h-SHViebajnC7zJTL7cOwB6R-MfoNdTVvLbv8lQK3MVcON-2eVRfd1wZr6BTakt-DvZ4KeqUTy4soR5tMH3Y00EALfkK977VC1VpWUCat2RfMZu-vz6vyygttMOUd9IZnrDDkmAj',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    presentationImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop',
    transformationHeadline: 'Key Challenges in Media & Digital Content',
    challengeEyebrow: 'INDUSTRY CHALLENGES',
    capabilitySectionTitle: 'Media & Digital Content Modernisation Capabilities',
    transformationStory: 'Media and digital content organizations face unique operational pressures: protecting unreleased scripts and video IP from insider theft, absorbing sudden traffic surges and web attacks, managing brand reputation crises in real time, and capturing rapid audience insights.',
    challenges: 'Digital asset & IP protection, web vulnerabilities & traffic surges, brand reputation & crisis management, trend & audience insights.',
    solutionText: 'Content Delivery Network & Web/App/API Security + Social Listening + Data Loss Prevention (DLP)',
    outcomes: 'Proactive IP protection, real-time audience intelligence, and secure, reliable content delivery during traffic peaks.',
    whyChooseTitle: 'WHY CHOOSE V-TECH HUB FOR MEDIA?',
    whyChooseSubtitle: 'Protect digital assets, strengthen security, and stay ahead of audience trends.',
    whyChooseItems: [
      {
        title: 'Proactive IP Protection',
        description: 'DLP and behavior monitoring help identify risky activities and protect unreleased content and sensitive files.'
      },
      {
        title: 'Real-Time Audience Intelligence',
        description: 'Social Listening helps track audience sentiment, identify emerging trends, and support faster content and communication decisions.'
      },
      {
        title: 'Secure & Reliable Content Delivery',
        description: 'Integrated CDN and security controls help protect Web, App, and API environments while maintaining content availability during high-traffic periods.'
      }
    ],
    fourKeyChallenges: [
      {
        title: 'Digital Asset & IP Protection',
        description: 'Unreleased scripts, videos, and proprietary content are vulnerable to insider theft, unauthorized access, and data leakage.'
      },
      {
        title: 'Web Vulnerabilities & Traffic Surges',
        description: 'Media platforms face sudden traffic spikes, application-layer attacks, and DDoS threats that can affect content availability.'
      },
      {
        title: 'Brand Reputation & Crisis Management',
        description: 'Negative mentions and social media crises can spread quickly without real-time monitoring and timely response.'
      },
      {
        title: 'Trend & Audience Insights',
        description: 'Limited visibility into audience sentiment and emerging trends can make it harder to create relevant and engaging content.'
      }
    ],
    capabilityPillars: [
      {
        title: 'Content Delivery Network & Web Security',
        description: 'CDN, WAF, and DDoS protection help secure media platforms and maintain fast, stable content delivery during traffic peaks.',
        deliverables: ['Multi-CDN Acceleration', 'WAF & DDoS Mitigation', 'Traffic Peak Availability']
      },
      {
        title: 'Social Listening',
        description: 'Monitor social media to understand audience sentiment, identify emerging trends, and detect potential reputation risks early.',
        deliverables: ['Audience Sentiment Tracking', 'Emerging Trend Detection', 'Early Crisis Alerts']
      },
      {
        title: 'Digital Asset Data Loss Prevention (DLP)',
        description: 'Monitor user activity and file operations to help prevent unauthorized sharing or leakage of intellectual property and sensitive content.',
        deliverables: ['User Activity Monitoring', 'File Operation Audits', 'IP Leakage Prevention']
      }
    ],
    details: [
      'DLP and behavior monitoring help identify risky activities and protect unreleased content and sensitive files.',
      'Social Listening helps track audience sentiment, identify emerging trends, and support faster content and communication decisions.',
      'Integrated CDN and security controls help protect Web, App, and API environments while maintaining content availability during high-traffic periods.',
      'Proactive protection against application-layer attacks and DDoS threats targeting media platforms.'
    ],
    keyChallenges: [
      {
        num: '01.',
        title: 'Digital Asset & IP Protection',
        description: 'Unreleased scripts, videos, and proprietary content are vulnerable to insider theft, unauthorized access, and data leakage.'
      },
      {
        num: '02.',
        title: 'Web Vulnerabilities & Traffic Surges',
        description: 'Media platforms face sudden traffic spikes, application-layer attacks, and DDoS threats that can affect content availability.'
      },
      {
        num: '03.',
        title: 'Brand Reputation & Crisis Management',
        description: 'Negative mentions and social media crises can spread quickly without real-time monitoring and timely response.'
      }
    ],
    strategicPartners: [
      { name: 'VNETWORK' },
      { name: 'SearchInform' }
    ],
    faqs: [
      {
        question: 'How does the platform ensure zero buffering during high-concurrency live streaming events?',
        answer: 'Multi-CDN dynamically balances traffic across tier-1 edge networks, caching video segments closer to audiences to eliminate latency and maintain uninterrupted 4K broadcast delivery.'
      },
      {
        question: 'How does the system detect and mitigate online reputation crises early?',
        answer: 'AI-driven Social Listening continuously tracks brand mentions, social media conversations, and sentiment shifts, flagging negative trends before they escalate into widespread crises.'
      }
    ]
  },
  {
    id: 'education',
    title: 'Education',
    category: 'Education',
    description: 'E-learning CDN acceleration, scalable cloud storage, and robust security for virtual classrooms and online exam portals.',
    imageAlt: 'Modern digital learning environment with students using cloud e-learning laptops and smart displays',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    presentationImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop',
    transformationHeadline: 'Key Challenges in Modern Education & Academic Operations',
    challengeEyebrow: 'INDUSTRY CHALLENGES',
    capabilitySectionTitle: 'Education Modernisation Capabilities',
    transformationStory: 'Educational institutions and universities face heavy operational hurdles during peak registration periods, strict student data privacy mandates under Decree 13, and escalating cyber threats targeting student records, tuition transaction channels, and research data.',
    challenges: 'Traffic surges & service downtime, academic record breaches & compliance gaps, external web & portal vulnerabilities, manual inquiries & disconnected channels.',
    solutionText: 'Multi-CDN & VCloud + WAAP & API Security + Email Security + DLP + Database Security + AI Education Assistant',
    outcomes: 'Continuous peak-period uptime, defensible student data compliance, resilient perimeter defense, and streamlined admissions support.',
    whyChooseTitle: 'WHY CHOOSE V-TECH HUB FOR EDUCATION?',
    whyChooseSubtitle: 'Comprehensive suite uniting scalable cloud delivery, Zero-Trust security, and automated engagement validated by V-Tech Hub Alliance.',
    whyChooseItems: [
      {
        title: 'Continuous Peak-Period Uptime',
        description: 'Multi-CDN edge caching and scalable cloud infrastructure maintain sub-second response times and prevent site crashes during registration surges.'
      },
      {
        title: 'Defensible Student Data & Compliance',
        description: 'Role-based database access controls, dynamic data masking, and DLP policies safeguard student transcripts, billing records, and personal profiles under Decree 13.'
      },
      {
        title: 'Resilient Perimeter Defense',
        description: 'Integrated WAAP and email filtering protect web portals and communication links against bot traffic, credential theft, and targeted ransomware.'
      },
      {
        title: 'Streamlined Admissions Support',
        description: 'Omnichannel AI assistants handle high-volume student inquiries around the clock without adding manual workload to admissions staff.'
      }
    ],
    fourKeyChallenges: [
      {
        title: 'Traffic Surges & Service Downtime',
        description: 'Course registration portals, learning management systems, and online testing platforms experience massive traffic spikes during enrollment seasons, frequently causing server overloads, latency, and service disruptions.'
      },
      {
        title: 'Academic Record Breaches & Compliance Gaps',
        description: 'Universities store sensitive student profiles, citizen IDs, and financial payment records that fall under strict Decree 13 compliance requirements. Unrestricted internal access creates high risks of grade manipulation or unauthorized sharing of student records.'
      },
      {
        title: 'External Web & Portal Vulnerabilities',
        description: 'Admissions websites, student service apps, and public academic APIs exposed directly to the internet are frequent targets for automated bot scrapers, DDoS attacks, and vulnerability exploitation.'
      },
      {
        title: 'Manual Inquiries & Disconnected Channels',
        description: 'Admissions departments receive repetitive inquiries regarding enrollment procedures, tuition policies, and academic programs across multiple digital touchpoints, straining staff resources during peak seasons.'
      }
    ],
    capabilityPillars: [
      {
        title: 'Scalable Cloud Delivery & High Availability',
        description: 'Multi-CDN combined with VCloud infrastructure scales bandwidth on demand, keeping registration portals and online exam systems fast and reliable during high-traffic surges.',
        iconName: 'server',
        deliverables: ['Multi-CDN Edge Caching', 'VCloud On-Demand Scaling', 'High-Traffic Availability']
      },
      {
        title: 'Portal & Communication Protection',
        description: 'WAAP shields admissions web apps and academic APIs against exploits and DDoS traffic, while AI-powered email security filters malicious payloads, phishing, and ransomware.',
        iconName: 'shield',
        deliverables: ['WAAP Portal Defense', 'API Exploit & DDoS Shield', 'AI Email Security Filtering']
      },
      {
        title: 'Student & Research Data Loss Prevention',
        description: 'Monitors file activity and internal user actions to identify policy violations, blocking unauthorized sharing of sensitive student records, financial information, and research documents.',
        iconName: 'lock',
        deliverables: ['File Activity Auditing', 'Student Record Leak Prevention', 'Research IP Safeguards']
      },
      {
        title: 'AI Education Assistant',
        description: 'Deploys an omnichannel conversational assistant across web and social channels to automate admissions counseling, resolve common queries 24/7, and guide applicants seamlessly.',
        iconName: 'sparkles',
        deliverables: ['Omnichannel Admissions Bot', '24/7 Inquiry Resolution', 'Seamless Applicant Guidance']
      }
    ],
    details: [
      'Multi-CDN edge caching and scalable cloud infrastructure maintain sub-second response times and prevent site crashes during registration surges.',
      'Role-based database access controls, dynamic data masking, and DLP policies safeguard student transcripts, billing records, and personal profiles under Decree 13.',
      'Integrated WAAP and email filtering protect web portals and communication links against bot traffic, credential theft, and targeted ransomware.',
      'Omnichannel AI assistants handle high-volume student inquiries around the clock without adding manual workload to admissions staff.'
    ],
    keyChallenges: [
      {
        num: '01.',
        title: 'Traffic Surges & Service Downtime',
        description: 'Course registration portals and LMS platforms experience massive traffic spikes during enrollment seasons.'
      },
      {
        num: '02.',
        title: 'Academic Record Breaches & Decree 13',
        description: 'Unrestricted internal access creates high risks of grade manipulation or unauthorized student record sharing.'
      },
      {
        num: '03.',
        title: 'External Web & Portal Vulnerabilities',
        description: 'Admissions websites and academic APIs face automated bot scrapers, DDoS attacks, and manual inquiry bottlenecks.'
      }
    ],
    strategicPartners: [
      { name: 'Lumination' },
      { name: 'SearchInform' },
      { name: 'VNETWORK' }
    ],
    faqs: [
      {
        question: 'How does the architecture prevent registration portal crashes during course enrollment peaks?',
        answer: 'VCloud virtual resources scale on demand, paired with Multi-CDN edge caching to absorb incoming traffic surges and serve registration assets without straining origin servers.'
      },
      {
        question: 'What controls prevent unauthorized grade changes or tampering with student transcripts?',
        answer: 'DBSAFER DB restricts SQL update queries on academic databases to authorized IP ranges and designated accounts, triggering real-time alerts on non-standard modification attempts.'
      }
    ]
  }
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'vpbank',
    clientName: 'VPBank x V-Infra',
    sector: 'BFSI & SME Digital Transformation',
    logoIcon: 'account_balance',
    quote: "Strategic partnership between V-Infra and VPBank empowers thousands of Vietnamese SMEs with comprehensive cloud infrastructure and cybersecurity solutions.",
    fullStory: "V-Infra officially signed a strategic agreement with VPBank to accelerate digital transformation for Small and Medium Enterprises (SMEs) across Vietnam. Through this partnership, VPBank SME clients gain exclusive access to V-Infra's high-performance CDN, Cloud-WAF, and Anti-DDoS security suite alongside optimized digital financial packages, ensuring maximum data security, seamless online operations, and accelerated growth.",
    metrics: "10,000+ SMEs empowered • Comprehensive Cloud & WAF protection • 99.99% operational uptime",
    imageUrl: '/images/vpbank-vnetwork-signing.jpg'
  },
  {
    id: 'vietcombank',
    clientName: 'Vietcombank',
    sector: 'Banking & Finance',
    logoIcon: 'account_balance',
    quote: "V-Infra's security stack allowed us to accelerate our digital banking roll-out by 3 months while maintaining strict SOC2 and compliance standards.",
    fullStory: "To support our next-generation mobile banking services, we needed a robust, SBV-compliant infrastructure that could guarantee data security and 99.99% uptime. V-Infra delivered a unified, sovereign-cloud architecture equipped with custom-tailored active DDoS mitigation and real-time fraud monitoring. The onboarding phase took under 14 days, helping us beat our deployment deadline by an entire quarter.",
    metrics: "Accelerated deployment by 90 days • Zero security breaches • 100% SBV Compliance",
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'vinfast',
    clientName: 'VinFast',
    sector: 'Smart Manufacturing',
    logoIcon: 'precision_manufacturing',
    quote: "Implementing localized edge nodes reduced our factory line response time by 45%, significantly improving production yield.",
    fullStory: "Our smart manufacturing systems rely on instant responses between local assembly IoT systems and processing nodes. V-Infra established dedicated edge infrastructure within proximity of our main automated hubs, yielding sub-millisecond network round-trip response times. This optimization stabilized our high-throughput assembly line telemetry, preventing costly micro-disruptions.",
    metrics: "45% latency reduction • 99.99% system availability • Sub-millisecond local loop",
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'vtv',
    clientName: 'VTV Digital',
    sector: 'Media & CDN',
    logoIcon: 'broadcast_on_home',
    quote: "Handling 10M+ concurrent viewers during major events is now possible with zero buffering using the V-Infra CDN hub.",
    fullStory: "During live national broadcasts, spikes in traffic routinely tested our delivery caps. By joining forces with the V-Infra CDN hub, we unlocked scalable smart-routing clusters capable of scaling instantly. High-volume traffic is dynamically distributed to optimal local edge caches, guaranteeing seamless full-HD stream deliveries without a single frame drop.",
    metrics: "10M+ concurrent viewers • Zero stream buffering • 40% reduction in bandwidth overhead",
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop'
  }
];

export const PARTNERS: Partner[] = [
  { 
    id: 'p-datumbridge', 
    name: 'DatumBridge', 
    category: 'AI & Data', 
    description: 'Đối tác chiến lược cung cấp các giải pháp AI chuyên biệt (Vertical AI) cho ngành Tài chính, Ngân hàng và Pháp chế.', 
    descriptionVI: 'Đối tác chiến lược cung cấp các giải pháp AI chuyên biệt (Vertical AI) cho ngành Tài chính, Ngân hàng và Pháp chế.',
    descriptionEN: 'Strategic partner providing specialized Vertical AI solutions for Finance, Banking, and Legal & Compliance.',
    website: 'https://datumbridge.com', 
    logoText: 'DatumBridge',
    jointTechnology: 'Đồng phát triển các mô hình Vertical AI (AI Pháp chế & Tuân thủ, SuperSales AI, Debt Collection AI) tích hợp hạ tầng Sovereign Cloud.',
    jointTechnologyVI: 'Đồng phát triển các mô hình Vertical AI (AI Pháp chế & Tuân thủ, SuperSales AI, Debt Collection AI) tích hợp hạ tầng Sovereign Cloud.',
    jointTechnologyEN: 'Joint development of Vertical AI models (Legal & Compliance AI, SuperSales AI, Debt Collection AI) natively integrated with Sovereign Cloud infrastructure.',
    integrationStack: ['BFSI Vertical AI Models', 'SBV Regulatory Knowledge Engine', 'LEXcentra Legal AI Integration'],
    certifiedTier: 'Strategic AI Partner'
  },
  { 
    id: 'p-lumination', 
    name: 'Lumination', 
    category: 'AI & Data', 
    description: 'Đối tác công nghệ lõi về ứng dụng AI số hóa quy trình nghiệp vụ Y tế (BHYT) và Quản trị Tuyển sinh (CRM).', 
    descriptionVI: 'Đối tác công nghệ lõi về ứng dụng AI số hóa quy trình nghiệp vụ Y tế (BHYT) và Quản trị Tuyển sinh (CRM).',
    descriptionEN: 'Core technology partner specializing in AI-driven digital transformation for Healthcare (Health Insurance) and Admissions CRM.',
    website: 'https://lumination.vn', 
    logoText: 'Lumination',
    jointTechnology: 'Công nghệ lõi Skill Files số hóa quy trình bảo hiểm y tế bệnh viện và hệ thống AI CRM tuyển sinh Lead360 trên nền tảng đám mây.',
    jointTechnologyVI: 'Công nghệ lõi Skill Files số hóa quy trình bảo hiểm y tế bệnh viện và hệ thống AI CRM tuyển sinh Lead360 trên nền tảng đám mây.',
    jointTechnologyEN: 'Core Skill Files technology digitizing hospital health insurance workflows and the Lead360 admissions AI CRM platform.',
    integrationStack: ['Clinical Healthcare AI & BHYT', 'Lead360 Education CRM', 'Hospital Kiosk Smart Assistant'],
    certifiedTier: 'Core Tech Partner'
  },
  { 
    id: 'p-searchinform', 
    name: 'SearchInform', 
    category: 'Security', 
    description: 'Đối tác bảo mật cung cấp hệ sinh thái chống rò rỉ dữ liệu (DLP), kiểm soát rủi ro nội bộ (Risk Monitor) và kiểm toán tài liệu (DCAP / FileAuditor).', 
    descriptionVI: 'Đối tác bảo mật cung cấp hệ sinh thái chống rò rỉ dữ liệu (DLP), kiểm soát rủi ro nội bộ (Risk Monitor) và kiểm toán tài liệu (DCAP / FileAuditor).',
    descriptionEN: 'Cybersecurity partner delivering an integrated Data Loss Prevention (DLP), Insider Risk Management (Risk Monitor), and DCAP (FileAuditor) ecosystem.',
    website: 'https://searchinform.com', 
    logoText: 'SearchInform',
    jointTechnology: 'Hệ sinh thái bảo mật dữ liệu nội bộ 3 tầng (FileAuditor DCAP + Next-Gen DLP + Risk Monitor) tích hợp trực tiếp hạ tầng V-Tech Hub.',
    jointTechnologyVI: 'Hệ sinh thái bảo mật dữ liệu nội bộ 3 tầng (FileAuditor DCAP + Next-Gen DLP + Risk Monitor) tích hợp trực tiếp hạ tầng V-Tech Hub.',
    jointTechnologyEN: 'Three-tiered internal data security ecosystem (FileAuditor DCAP + Next-Gen DLP + Risk Monitor) directly integrated into the V-Tech Hub infrastructure.',
    integrationStack: ['FileAuditor DCAP', 'Next-Gen DLP Enterprise', 'Risk Monitor & UBA Analytics'],
    certifiedTier: 'Strategic Security Partner'
  },
  { 
    id: 'p-pnpsecure', 
    name: 'PNPSECURE', 
    category: 'Security', 
    description: 'Đối tác hàng đầu về giải pháp bảo mật tầng cơ sở dữ liệu (DBSAFER), kiểm soát truy cập và phòng chống sửa đổi dữ liệu trái phép.', 
    descriptionVI: 'Đối tác hàng đầu về giải pháp bảo mật tầng cơ sở dữ liệu (DBSAFER), kiểm soát truy cập và phòng chống sửa đổi dữ liệu trái phép.',
    descriptionEN: 'Global database security leader delivering DBSAFER Database Access Control (DBAC), system access governance, and dynamic data masking.',
    website: 'https://pnpsecure.com', 
    logoText: 'PNPSECURE',
    jointTechnology: 'Giải pháp DBSAFER kiểm soát truy cập CSDL (DBAC) và máy chủ (SAC), Dynamic Data Masking với độ trễ dưới 1ms cho hệ thống lõi.',
    jointTechnologyVI: 'Giải pháp DBSAFER kiểm soát truy cập CSDL (DBAC) và máy chủ (SAC), Dynamic Data Masking với độ trễ dưới 1ms cho hệ thống lõi.',
    jointTechnologyEN: 'DBSAFER database access control (DBAC) and server access control (SAC) with sub-millisecond Dynamic Data Masking for mission-critical core systems.',
    integrationStack: ['DBSAFER DB Access Control', 'DBSAFER AM System Access Control', 'Dynamic Data Masking & Audit'],
    certifiedTier: 'Global Database Security Partner'
  }
];

