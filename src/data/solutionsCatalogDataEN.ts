import { SolutionCategory } from './solutionsCatalog';

export const SOLUTIONS_CATALOG_EN: SolutionCategory[] = [
  {
    id: 'cloud-delivery',
    title: 'Cloud & Delivery',
    pillar: 'engineer',
    pillarLabel: 'ENGINEER',
    description: 'High-speed cloud infrastructure, multi-region content delivery networks, and dedicated enterprise bare metal servers.',
    items: [
      {
        id: 'content-delivery-network',
        title: 'Content Delivery Network',
        category: 'cloud-delivery',
        categoryLabel: 'Cloud & Delivery',
        pillar: 'engineer',
        poweredBy: 'VNETWORK',
        providerLogos: ['VNETWORK'],
        tagline: 'Sub-second latency video streaming & content acceleration with 2,300+ global edge PoPs',
        concept: 'VNCDN is an enterprise Multi-CDN platform integrating AI-driven traffic routing, low-latency live streaming (LL-HLS, WebRTC), and on-demand Video Management Services (VMS). The network dynamically distributes workloads to edge nodes closest to end-users, ensuring flawless media streaming even during peak traffic events exceeding millions of concurrent viewers.',
        quoteHighlight: {
          quote: 'Global Multi-CDN network with 2,300+ PoPs in 146 countries, processing 20+ billion daily requests with over 200 Tbps uplink capacity.',
          source: 'Global Network Infrastructure Report 2026',
          accentValue: '2,300+',
          accentLabel: 'Global Edge PoPs'
        },
        keyStats: [
          { value: '< 1s', label: 'Live Stream Latency', sub: 'LL-HLS & WebRTC protocol' },
          { value: '200+ Tbps', label: 'Global Uplink Capacity', sub: '20+ billion requests/day' },
          { value: '99.99%', label: 'Uptime SLA Commitment', sub: 'Zero-congestion architecture' },
          { value: '-70%', label: 'Origin Server Load', sub: 'Origin Shield & Multi-tier Cache' }
        ],
        problems: [
          {
            problem: 'Slow website and app loading speeds during peak traffic hours',
            consequence: 'User churn, disrupted customer experience, and direct drops in conversion and revenue.'
          },
          {
            problem: 'Origin server overload when live streaming viewership surges',
            consequence: 'Video buffering, severe latency, server crashes, and skyrocketing origin egress bandwidth bills.'
          },
          {
            problem: 'Lack of multi-device adaptive bitrate streaming for 4K/8K content',
            consequence: 'Inability to deliver optimized video compression across varied device screens and network conditions.'
          },
          {
            problem: 'Digital copyright violations and stream hotlinking threats',
            consequence: 'Loss of premium proprietary content assets and unauthorized streaming distribution.'
          }
        ],
        targetAudiences: [
          { title: 'Broadcasters & OTT Platforms', desc: 'Live broadcast of high-profile sporting and entertainment events for millions of concurrent viewers (VTV, THVL, VieON, FPT Play).', iconName: 'media' },
          { title: 'Digital Media & Publishers', desc: 'Instant page loading and high-resolution media delivery for tens of millions of daily readers.', iconName: 'media' },
          { title: 'E-Commerce & Retail Giants', desc: 'Accelerate product catalogs and live video shopping during Mega Sale events.', iconName: 'retail' },
          { title: 'Online Gaming & Esports', desc: 'Gigabit-speed game patch delivery and low-latency esports live tournament feeds.', iconName: 'tech' },
          { title: 'EdTech & Online Learning', desc: 'Buffer-free video lectures and interactive streaming across all mobile and desktop devices.', iconName: 'school' },
          { title: 'Global Enterprises', desc: 'Seamless cross-border application and document distribution with uniform performance in 146 countries.', iconName: 'enterprise' }
        ],
        highlights: [
          '2,300+ PoPs interconnected with all major Vietnamese telcos (Viettel, VNPT, FPT, Mobifone) and 146 countries',
          'Automated on-demand video transcoding (VMS Adaptive Bitrate) for multi-screen playback',
          'Low-latency live streaming with LL-HLS and WebRTC reducing delays below 1 second',
          'Multi-tier digital rights management: DRM (Widevine, FairPlay, PlayReady), Geo-blocking, and tokenized URLs'
        ],
        keyFeatures: [
          {
            name: 'Multi-CDN AI Dynamic Routing',
            detail: 'Continuous AI monitoring of ISP network performance to route users automatically to the fastest performing edge node.'
          },
          {
            name: 'On-Demand Transcoding & VMS',
            detail: 'Automated video encoding into optimized formats (H.264, H.265, AV1), saving 40% file size while preserving resolution.'
          },
          {
            name: 'Origin Shield & Smart Caching',
            detail: 'Layered caching architecture safeguarding origin servers and reducing origin egress bandwidth by 80%–95%.'
          },
          {
            name: 'Anti-Piracy & DRM Protection',
            detail: 'Real-time detection and blocking of unauthorized restreaming with individual digital token signatures per video session.'
          }
        ],
        businessOutcomes: [
          'Boosted live stream efficiency by 47%, completely eliminating peak-hour buffering (VTV Case Study)',
          'Optimized server infrastructure costs via flexible pay-as-you-go traffic bandwidth billing',
          'Dedicated 24/7 technical engineering team actively standing by for high-traffic broadcasting campaigns'
        ],
        specs: [
          { label: 'PoP Network', value: '2,300+ Global PoPs' },
          { label: 'CDN Bandwidth', value: '200+ Tbps Uplink' },
          { label: 'Protocols', value: 'LL-HLS, WebRTC, RTMP, DASH' },
          { label: 'Response Time', value: '< 5ms in Vietnam' }
        ],
        trustedClients: ['VTV', 'THVL', 'VieON', 'FPT Play', 'Tiki', 'CellphoneS', 'Galaxy Cinema', 'Sendo']
      },
      {
        id: 'public-private-cloud',
        title: 'Public Cloud & Private Cloud',
        category: 'cloud-delivery',
        categoryLabel: 'Cloud & Delivery',
        pillar: 'engineer',
        poweredBy: 'VNETWORK',
        providerLogos: ['VNETWORK'],
        tagline: 'Sovereign, ultra-secure cloud infrastructure with 100% in-country data residency & Tier III facilities',
        concept: 'VCLOUD is a next-generation sovereign cloud platform offering agile Public Cloud and hardware-isolated Private Cloud instances. Compliant with Vietnam Decree 13/2023 and Cyber Security regulations, VCLOUD delivers uncompromising compute performance powered by Intel Xeon 6 and AMD EPYC processors with Gen5 NVMe storage for enterprise and BFSI workloads.',
        quoteHighlight: {
          quote: 'Deploy effortlessly, manage efficiently, and scale infinitely with Intel Xeon 6 / AMD EPYC CPUs and enterprise NVMe Gen5 high-IOPS storage.',
          source: 'Enterprise Cloud Infrastructure Datasheet',
          accentValue: '800,000+',
          accentLabel: 'IOPS Read/Write'
        },
        keyStats: [
          { value: '99.99%', label: 'Uptime SLA Commitment', sub: 'Tier III standard data centers' },
          { value: '800k+', label: 'IOPS Read/Write Speed', sub: 'NVMe Gen5 Ultra Performance' },
          { value: '100+ Gbps', label: 'Domestic Uplink Bandwidth', sub: 'International Uplink 10+ Gbps' },
          { value: '< 1 Min', label: 'Instant VM Provisioning', sub: 'Pre-integrated with Marketplace & n8n' }
        ],
        problems: [
          {
            problem: 'Mandatory in-country personal data localization laws (Decree 13, Cybersecurity Law)',
            consequence: 'Enterprises hosting on international clouds face compliance risks, audits, and steep financial penalties.'
          },
          {
            problem: 'Volatile foreign cloud billing (AWS, Azure) driven by currency fluctuations and high egress fees',
            consequence: 'Unpredictable IT budgets and uncontrolled operational expenditure inflation.'
          },
          {
            problem: 'High network latency when routing traffic to servers hosted in Singapore or Hong Kong',
            consequence: 'Degraded real-time financial trading responsiveness and sluggish end-user app experience.'
          },
          {
            problem: 'Delayed remote technical support without dedicated local on-site engineering teams',
            consequence: 'Prolonged downtime during incidents leading to severe revenue losses and reputation damage.'
          }
        ],
        targetAudiences: [
          { title: 'Banking & Fintech', desc: 'Deploy isolated Private Clouds to maintain highly secure domestic financial transaction data.', iconName: 'bank' },
          { title: 'Healthcare & Hospitals', desc: 'Securely host Electronic Medical Records (EMR) and Hospital Information Systems (HIS).', iconName: 'hospital' },
          { title: 'Government & Public Sector', desc: 'Enforce national digital data sovereignty with 100% domestic sovereign defense.', iconName: 'gov' },
          { title: 'Retail & Enterprise ERP', desc: 'Run high-throughput retail chain operations, warehouse management, and e-invoicing.', iconName: 'retail' },
          { title: 'Software & SaaS Providers', desc: 'Rapidly scale Kubernetes clusters, CI/CD pipelines, and Database as a Service.', iconName: 'tech' },
          { title: 'Multi-Industry Conglomerates', desc: 'Hybrid Cloud architecture seamlessly connecting on-premises data centers with agile cloud.', iconName: 'enterprise' }
        ],
        highlights: [
          '4,000+ physical server fleet hosted across Hanoi, Da Nang, Binh Duong, and Ho Chi Minh City',
          'Equipped with Intel® Xeon® 6 Efficient 6740E and ultra-fast NVMe Gen5 solid-state drives',
          'Certified ISO 27001, ISO 20000-1, and licensed for Cyber Information Security by MIC',
          'Built-in cybersecurity ecosystem (Anti-DDoS, AI WAF) with automated snapshot backups'
        ],
        keyFeatures: [
          {
            name: 'VCLOUD Elastic Compute & GPU Servers',
            detail: 'Flexible vCPU/RAM customization with dedicated GPU compute servers optimized for AI training workloads.'
          },
          {
            name: 'Database as a Service (DBaaS)',
            detail: 'Fully managed PostgreSQL, MySQL, MariaDB, MongoDB, Redis, and MS SQL with automated point-in-time recovery.'
          },
          {
            name: 'Managed Kubernetes (K8s) & Containers',
            detail: 'Auto-scaling container clusters with pre-integrated Container Registry and automated CI/CD DevOps workflows.'
          },
          {
            name: 'Zero-Trust Virtual Private Cloud (VPC)',
            detail: 'Completely isolated virtual private networks with multi-layer firewall rules and secure Site-to-Site IPsec VPNs.'
          }
        ],
        businessOutcomes: [
          'Slashed cloud infrastructure costs by 40%–60% compared to international hyperscalers',
          '100% compliant with Vietnam regulations (Decree 53/2022 and Decree 13/2023)',
          'Direct 1-on-1 Vietnamese 24/7/365 enterprise engineering support'
        ],
        specs: [
          { label: 'Server Fleet', value: '4,000+ Servers in Vietnam' },
          { label: 'Hardware', value: 'NVMe Gen5, Intel Xeon 6' },
          { label: 'Certifications', value: 'ISO 27001 / ISO 20000-1' },
          { label: 'Data Centers', value: 'International Tier III (HN, DN, HCM)' }
        ],
        trustedClients: ['Vietcap', 'MBS', 'FireAnt', 'Nhat Tin Logistics', 'GS25', 'ACFC', 'Fahasa', 'Ricons']
      },
      {
        id: 'bare-metal-data-center',
        title: 'Bare Metal Server & Data Center',
        category: 'cloud-delivery',
        categoryLabel: 'Cloud & Delivery',
        pillar: 'engineer',
        poweredBy: 'VNETWORK',
        providerLogos: ['VNETWORK'],
        tagline: 'Dedicated physical bare-metal hardware & international Tier III Colocation Data Centers',
        concept: 'Enterprise-grade Bare Metal Servers and Data Center Colocation housed in ISO-certified Tier III facilities across Vietnam. Organizations gain 100% single-tenant hardware control without virtualization overhead or noisy neighbors, engineered specifically for mission-critical core banking, databases, and large-scale computing.',
        quoteHighlight: {
          quote: 'Flexible rack configurations, multi-layer biometric security, and N+1 redundant power connectivity guarantee uninterrupted operational continuity.',
          source: 'Data Center Technical Specifications',
          accentValue: '100%',
          accentLabel: 'Dedicated Hardware'
        },
        keyStats: [
          { value: '100%', label: 'Dedicated Single-Tenant Compute', sub: 'Zero shared virtualization' },
          { value: 'Tier III', label: 'Data Center Standard', sub: '2N+1 Power & Precision Cooling' },
          { value: '24/7', label: 'Physical Security Monitoring', sub: 'Biometric access & CCTV surveillance' },
          { value: 'Multi-ISP', label: 'Carrier-Neutral Connectivity', sub: 'Customizable high-speed bandwidth' }
        ],
        problems: [
          {
            problem: 'Core Banking and Big Data applications demand 100% dedicated CPU and IOPS performance',
            consequence: 'Virtual machines suffer performance degradation from noisy neighbor resource contention.'
          },
          {
            problem: 'Building in-house server rooms requires tens of billions of VND in capital investment',
            consequence: 'Heavy CAPEX burdens and severe risks from power failures, cooling issues, and fire hazards.'
          },
          {
            problem: 'Single-ISP fiber cuts risk cutting off enterprise network access',
            consequence: 'Prolonged business downtime halting financial transactions and client operations.'
          },
          {
            problem: 'Lack of 24/7 on-site hardware maintenance personnel',
            consequence: 'Inability to immediately replace failed hard drives, RAM modules, or power supplies.'
          }
        ],
        targetAudiences: [
          { title: 'Core Banking & Stock Exchanges', desc: 'Host core transactional systems and order-matching engines requiring microsecond execution.', iconName: 'bank' },
          { title: 'Game Publishers & Studios', desc: 'Run heavy game server clusters (MMORPG) requiring ultra-low latency and immense throughput.', iconName: 'tech' },
          { title: 'Fintech & Payment Gateways', desc: 'Meet rigorous PCI-DSS physical and network security compliance standards.', iconName: 'dollar' },
          { title: 'Enterprise ERP & Manufacturing', desc: 'Host mission-critical SAP and Oracle ERP systems serving nationwide branches.', iconName: 'enterprise' },
          { title: 'AI & Big Data Clusters', desc: 'Dedicated multi-GPU server clusters for high-performance computing and LLM training.', iconName: 'tech' },
          { title: 'IT Service Integrators (SI/MSP)', desc: 'Build proprietary private cloud infrastructure for enterprise client portfolios.', iconName: 'briefcase' }
        ],
        highlights: [
          'High-performance enterprise servers powered by latest-generation Intel Xeon and AMD EPYC processors',
          'Carrier-neutral deployment across Viettel, VNPT, and FPT with flexible nationwide routing',
          'Rapid 24-hour hardware provisioning ensuring quick time-to-market',
          'Multi-layered physical security with biometric scanners, CCTV, and IP KVM / iLO out-of-band management'
        ],
        keyFeatures: [
          {
            name: 'Dedicated Bare Metal Compute',
            detail: 'Full clock speed of enterprise CPUs, DDR5 RAM, and Enterprise NVMe drives dedicated exclusively to your organization.'
          },
          {
            name: 'Tier III High Availability Facility',
            detail: '2N redundant UPS backup, automatic diesel generators with 15s transfer, and precision climate control.'
          },
          {
            name: 'Multi-Homed Network Uplink',
            detail: 'Direct peering with domestic and international exchanges providing hundreds of Gbps of anti-congestion capacity.'
          },
          {
            name: '24/7 Remote Hands Service',
            detail: 'On-site engineering team available around the clock for cabling, hardware replacement, power cycling, and diagnostics.'
          }
        ],
        businessOutcomes: [
          'Saved up to 70% in initial capital investment compared to building on-premises data centers',
          'Maximized computational throughput with zero virtualization hypervisor latency',
          'Secured critical institutional technology infrastructure under enterprise SLAs'
        ],
        specs: [
          { label: 'Data Center', value: 'International Tier III Standard' },
          { label: 'Provisioning', value: 'Within 24 Hours' },
          { label: 'Network', value: 'Carrier-Neutral (Multi-ISP)' },
          { label: 'Remote Access', value: 'IP KVM / iDRAC / iLO' }
        ],
        trustedClients: ['Vietcap', 'FireAnt', 'VNG Games', 'Galaxy Cinema', 'Hyundai', 'LG Electronics']
      },
      {
        id: 'cloud-storage',
        title: 'Cloud Storage',
        category: 'cloud-delivery',
        categoryLabel: 'Cloud & Delivery',
        pillar: 'engineer',
        poweredBy: 'VNETWORK',
        providerLogos: ['VNETWORK'],
        tagline: 'Unlimited S3-compatible object storage with 99.999999999% (11 9s) data durability',
        concept: 'V-Storage is an enterprise AWS S3-compatible object storage solution designed for secure, cost-effective storage, backup, and retrieval of unstructured data (video, images, backups, docs). Featuring 11 nines of annual data durability, multi-AZ replication, and zero exorbitant egress fees, V-Storage halves storage TCO compared to international clouds.',
        quoteHighlight: {
          quote: 'Scalable cloud object storage with enterprise AES-256 encryption, S3 compatibility, and high-speed local data retrieval.',
          source: 'Enterprise Storage Architecture Guide',
          accentValue: '11 Nines',
          accentLabel: 'Data Durability (99.999999999%)'
        },
        keyStats: [
          { value: '11 Nines', label: 'Annual Data Durability', sub: '99.999999999% Durability' },
          { value: '100% S3', label: 'S3 API Compatibility', sub: 'Seamless app integration' },
          { value: '-50%', label: 'Storage TCO Reduction', sub: 'Zero hidden egress fees' },
          { value: 'AES-256', label: 'Data Encryption', sub: 'In-transit & At-rest security' }
        ],
        problems: [
          {
            problem: 'Exponential growth of backup, media, and archive datasets',
            consequence: 'Local NAS/SAN systems run out of capacity rapidly, incurring exorbitant hardware expansion costs.'
          },
          {
            problem: 'Prohibitive data egress download fees from international hyperscale clouds',
            consequence: 'Monthly storage bills spike uncontrollably whenever data restoration or streaming retrieval occurs.'
          },
          {
            problem: 'Risk of drive failures or physical disasters causing permanent data loss',
            consequence: 'Irreversible loss of financial archives, customer records, and core legal documents.'
          },
          {
            problem: 'Complex integration requirements with existing enterprise backup tooling',
            consequence: 'Wasted engineering hours re-architecting applications and configurations.'
          }
        ],
        targetAudiences: [
          { title: 'Media & Broadcasting', desc: 'Store millions of hours of high-resolution video and images for high-speed CDN delivery.', iconName: 'media' },
          { title: 'Financial & Accounting', desc: 'Archive electronic invoices and transaction records for multi-year statutory compliance.', iconName: 'bank' },
          { title: 'Healthcare & Hospital Records', desc: 'Securely archive medical imaging (X-Ray, MRI, CT scans) across patient lifecycles.', iconName: 'hospital' },
          { title: 'Backup & Disaster Recovery (DR)', desc: 'Primary S3 target for Veeam Backup, Commvault, and Kubernetes snapshot archives.', iconName: 'enterprise' },
          { title: 'Mobile & Web Applications', desc: 'Scalable user file uploads, avatars, attachments, and static application assets.', iconName: 'tech' },
          { title: 'Public Sector & Academia', desc: 'Digital libraries, academic research repositories, and student records.', iconName: 'school' }
        ],
        highlights: [
          '100% AWS S3 API compatibility working out-of-the-box with Veeam, Rclone, Cyberduck, and SDKs',
          'Automatic Multi-AZ geographic replication ensuring zero data loss',
          'End-to-end encryption with server-side AES-256 and in-transit TLS 1.3 encryption',
          'Native integration with VNCDN edge caching for up to 10x faster file download speeds'
        ],
        keyFeatures: [
          {
            name: 'Full S3-Compatible REST API',
            detail: 'Complete support for Bucket Policies, Multipart Uploads, Lifecycle Rules, and Secure Pre-Signed URLs.'
          },
          {
            name: 'Automated Lifecycle Management',
            detail: 'Intelligent automated transition of aging data to Cold Storage tiers to maximize cost efficiencies.'
          },
          {
            name: 'Ransomware Protection (Object Lock & WORM)',
            detail: 'Write Once Read Many (WORM) immutability preventing ransomware or accidental deletion of critical backups.'
          },
          {
            name: 'Unlimited High-Speed Domestic Bandwidth',
            detail: 'Ultra-fast upload and download speeds leveraging high-capacity domestic network infrastructure in Vietnam.'
          }
        ],
        businessOutcomes: [
          'Reduced total cost of ownership (TCO) for large-scale data storage by 50%',
          '100% protection against ransomware data tampering with immutable object locking',
          'Fast recovery times during disaster recovery drills thanks to local high-bandwidth peering'
        ],
        specs: [
          { label: 'Durability', value: '99.999999999% (11 9s)' },
          { label: 'Interface', value: 'AWS S3 REST API' },
          { label: 'Encryption', value: 'AES-256 / SSL TLS 1.3' },
          { label: 'Redundancy', value: 'Multi-AZ Geo-Replication' }
        ],
        trustedClients: ['Tiki', 'Sendo', 'VTV', 'Fahasa', 'Vietcap', 'Nhat Tin Logistics']
      }
    ]
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    pillar: 'engineer',
    pillarLabel: 'ENGINEER',
    description: 'Comprehensive 360° security from edge network defenses, AI Web/API firewalls, email threat defense, data loss prevention to database access control.',
    items: [
      {
        id: 'infrastructure-web-security',
        title: 'Web/App/API Security',
        category: 'cyber-security',
        categoryLabel: 'Cyber Security',
        pillar: 'engineer',
        poweredBy: 'VNETWORK',
        providerLogos: ['VNETWORK'],
        tagline: 'Smart AI Web Application Firewall & Multi-layered Layer 3/4/7 DDoS mitigation',
        concept: 'VNIS (VNETWORK Internet Security) is a comprehensive Next-Gen AI/ML security platform for Web, Mobile Apps, and APIs. It merges global Multi-CDN edge routing, an AI WAF equipped with 2,400+ rulesets, smart load balancing, and a dedicated 24/7 SOC with <5-minute emergency response SLAs.',
        quoteHighlight: {
          quote: 'VNIS WAAP represents security architected with AI — where artificial intelligence plays a central role in predicting, identifying, and mitigating sophisticated cyber threats.',
          source: 'Enterprise Web & API Security Whitepaper 2026',
          accentValue: '20+ Tbps',
          accentLabel: 'DDoS Scrubbing Capacity'
        },
        keyStats: [
          { value: '20+ Tbps', label: 'Global DDoS Scrubbing Capacity', sub: 'Mitigating L3, L4, L7 volumetric floods' },
          { value: '2,400+', label: 'AI WAF Security Rulesets', sub: 'Blocking OWASP Top 10 & Zero-Days' },
          { value: '< 5 Mins', label: 'SOC Emergency Response Time', sub: '24/7 on-duty cybersecurity engineers' },
          { value: '99.99%', label: 'Continuous Service Availability', sub: 'AI-driven Smart Load Balancing' }
        ],
        problems: [
          {
            problem: 'Volumetric DDoS attacks knocking down web servers during peak trading hours',
            consequence: 'Prolonged business downtime, customer trust erosion, and direct revenue loss.'
          },
          {
            problem: 'Web and API vulnerabilities exploited by attackers (SQL Injection, XSS, Scraping)',
            consequence: 'Customer data breaches, regulatory compliance fines, and legal liability.'
          },
          {
            problem: 'Skyrocketing bandwidth costs caused by malicious botnet traffic floods',
            consequence: 'Wasted infrastructure budget serving junk requests and counterfeit clicks.'
          },
          {
            problem: 'Lack of in-house 24/7 security engineering personnel during off-hours and holidays',
            consequence: 'Delayed incident response when midnight breaches occur, compounding disaster damage.'
          }
        ],
        targetAudiences: [
          { title: 'Financial Portals & Securities', desc: 'Keep high-throughput financial trading portals running seamlessly during peak market hours (FireAnt, Vietcap).', iconName: 'bank' },
          { title: 'E-Commerce & Retail Giants', desc: 'Prevent malicious price scraping bots and protect checkout gateways during Mega Sale events.', iconName: 'retail' },
          { title: 'Government & Digital Media', desc: 'Protect critical national digital infrastructure and news portals against Advanced Persistent Threats (APT).', iconName: 'gov' },
          { title: 'Online Gaming Platforms', desc: 'Mitigate UDP/TCP flood attacks to prevent player disconnections and lag spikes.', iconName: 'tech' },
          { title: 'Mobile Apps & API Backends', desc: 'Secure backend microservices, authenticate requests, and block counterfeit bot calls.', iconName: 'tech' },
          { title: 'Logistics & Supply Chains', desc: 'Guarantee 24/7 operational continuity for track-and-trace shipping and warehouse management.', iconName: 'enterprise' }
        ],
        highlights: [
          '3-Tier Defense Architecture: L3/4 DDoS scrubbing → L7 Cloud WAAP → Fully hidden origin infrastructure',
          'Fast onboarding via simple DNS record configuration (Domain, SSL certificate, and origin IP)',
          'AI Smart Load Balancing directing clean requests to the healthiest server nodes',
          'Recognized and recommended by leading international cybersecurity authorities'
        ],
        keyFeatures: [
          {
            name: 'AI Web Application Firewall (AI WAF)',
            detail: 'Combines machine learning and behavioral heuristics to detect zero-day vulnerabilities with zero false positives.'
          },
          {
            name: 'Multi-Layer DDoS Mitigation System',
            detail: 'Absorbs and scrubs SYN Floods, UDP Amplifications, and HTTP Floods with massive 20+ Tbps capacity.'
          },
          {
            name: 'Intelligent Bot Management',
            detail: 'Distinguishes good crawlers (Googlebot) and blocks bad bots (Credential stuffing, Account takeover, Web scraping).'
          },
          {
            name: 'Origin IP Masking',
            detail: 'All traffic routes through hardened edge nodes, keeping real origin server IPs completely shielded from public discovery.'
          }
        ],
        businessOutcomes: [
          'Successfully deflected continuous >150 Gbps DDoS campaigns spanning multiple months',
          'Eliminated 99% of automated vulnerability exploits targeting web and API assets',
          'Under 5-minute incident resolution SLA backed by dedicated 24/7 SOC engineers'
        ],
        specs: [
          { label: 'Scrubbing Capacity', value: '20+ Tbps Global' },
          { label: 'WAF Rulesets', value: '2,400+ Rules & AI Model' },
          { label: 'Protocols', value: 'HTTP, HTTPS, HTTP/2, HTTP/3, API' },
          { label: 'Security Certs', value: 'ITSCC, Gartner, Rapid7' }
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
        tagline: 'Next-Gen AI Email Security, Virtual Zone sandbox inspection & BEC Anti-Phishing gateway',
        concept: 'EG-Platform (Enterprise Gateway Platform) delivers complete enterprise email protection powered by AI, Machine Learning, and proprietary Virtual Zone sandbox technology. It proactively intercepts sophisticated targeted email threats (BEC - Business Email Compromise, Phishing, Ransomware attachments, Brand Impersonation) before they reach corporate mailboxes, ensuring secure internal and external communication.',
        quoteHighlight: {
          quote: 'Proactively defending against advanced phishing and impersonation email attacks with real-time sandbox detonation and multi-engine threat intelligence.',
          source: 'Enterprise Email Security Benchmark 2026',
          accentValue: '99.9%',
          accentLabel: 'Spam & Threat Block Rate'
        },
        keyStats: [
          { value: '99.9%', label: 'Spam & Threat Block Rate', sub: 'Multi-layer AI/ML filtering' },
          { value: '< 3s', label: 'Sandbox Analysis Latency', sub: 'Proprietary Virtual Zone tech' },
          { value: '20+ Tbps', label: 'Cloud Infrastructure Capacity', sub: 'High-availability Mail Gateway' },
          { value: '100%', label: 'Email Encryption & DLP', sub: 'SPF, DKIM, DMARC & TLS 1.3' }
        ],
        problems: [
          {
            problem: 'Sophisticated Business Email Compromise (BEC) and invoice fraud targeting C-level executives and finance teams',
            consequence: 'Huge financial losses through counterfeit wire transfer requests and unauthorized bank accounts.'
          },
          {
            problem: 'Malicious attachments (Ransomware, Trojans, Spyware) disguised as PDFs, invoices, or resumes bypassing legacy filters',
            consequence: 'Corporate endpoints encrypted and entire internal networks hijacked.'
          },
          {
            problem: 'Phishing links leading to credential-harvesting replica portals of Microsoft 365 or Google Workspace',
            consequence: 'Employee corporate account takeover and subsequent internal lateral movement.'
          },
          {
            problem: 'Corporate domain spoofing and lack of DMARC enforcement damaging brand credibility and causing email blacklisting',
            consequence: 'Legitimate business emails misclassified as spam by client mail servers.'
          }
        ],
        targetAudiences: [
          { title: 'Banking, Financial Services & Insurance (BFSI)', desc: 'Prevent wire transfer fraud, payment verification spoofing, and executive account compromise.', iconName: 'bank' },
          { title: 'Logistics, Supply Chain & Freight', desc: 'Secure transaction emails, shipping notices, and vendor bill-of-lading communications.', iconName: 'enterprise' },
          { title: 'Manufacturing & Export Enterprises', desc: 'Protect overseas buyer contract negotiations and prevent international purchase order tampering.', iconName: 'enterprise' },
          { title: 'Government & Public Administration', desc: 'Shield public officials from targeted spear-phishing campaigns and state-sponsored APT malware.', iconName: 'gov' },
          { title: 'E-Commerce & Digital Services', desc: 'Guarantee 100% email deliverability for customer OTPs, order receipts, and marketing campaigns.', iconName: 'retail' },
          { title: 'Healthcare & Higher Education', desc: 'Prevent patient data leakage via outbound emails and block phishing targeting faculty and staff.', iconName: 'hospital' }
        ],
        highlights: [
          'Virtual Zone Sandbox: Detonates suspicious attachments in isolated virtual machines within <3 seconds without delaying inbound mail',
          'AI BEC & Impersonation Defense: Analyzes sender identity, writing patterns, domain homoglyphs, and urgent payment keywords',
          'Outbound Email Security & DLP: Enforces SPF/DKIM/DMARC authentication and scans outbound emails for confidential data leakage',
          'Seamless Compatibility: Deploys effortlessly as a Mail Gateway for Microsoft 365, Google Workspace, Exchange, and Zimbra'
        ],
        keyFeatures: [
          {
            name: '01. ReceiveGUARD (Inbound Advanced Email Security)',
            detail: 'Multi-layered AI engine inspecting all incoming emails, detonating attachments via Virtual Zone sandbox, and rewriting URLs for real-time click protection.'
          },
          {
            name: '02. SendGUARD (Outbound Authentication & Leak Prevention)',
            detail: 'Secures outbound email delivery, enforces DKIM/DMARC signatures, prevents IP reputation blacklisting, and blocks unauthorized PII transfers.'
          },
          {
            name: '03. SpamGUARD (Anti-Spam & Intelligent Mail Filtering)',
            detail: 'High-throughput Bayesian and heuristic spam filtering filtering out 99.9% of junk mail, reducing server load and mailbox clutter.'
          },
          {
            name: '04. Centralized Email Governance & Audit Logs',
            detail: 'Real-time dashboard providing granular visibility into quarantined threats, delivery queues, and comprehensive forensic search logs.'
          }
        ],
        businessOutcomes: [
          'Zero financial fraud incidents caused by Business Email Compromise (BEC) and spoofed payment requests',
          '99.9% reduction in malicious spam and phishing emails reaching employee inboxes',
          'Maintained 100% sender domain reputation and high inbox delivery rates for critical business communications'
        ],
        specs: [
          { label: 'Deployment Mode', value: 'Cloud Mail Gateway / MX Record' },
          { label: 'Sandbox Tech', value: 'Virtual Zone (Detonation <3s)' },
          { label: 'Compatibility', value: 'M365, Google Workspace, Exchange, Zimbra' },
          { label: 'Compliance', value: 'SPF, DKIM, DMARC, TLS 1.3, ISO 27001' }
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
        tagline: '360° insider risk control, automated DCAP classification & data loss prevention suite',
        concept: 'Next-Gen DLP is an enterprise internal security ecosystem operating across three integrated tiers: Data Classification & File Auditing (DCAP), Data-in-Motion Protection (DLP), and 360° User Behavioral Analytics (Risk Monitor & UBA). It enables organizations to protect trade secrets, detect corporate fraud, and enforce strict compliance with Personal Data Protection regulations (Decree 13/2023).',
        quoteHighlight: {
          quote: 'Shifting the paradigm from preventing data leaks to preventing financial loss. A single security specialist can oversee up to 1,500 endpoints through an integrated automated security ecosystem.',
          source: 'Enterprise Cybersecurity & Data Protection Report 2026',
          accentValue: '360°',
          accentLabel: 'Insider Threat Control'
        },
        keyStats: [
          { value: '3 Tiers', label: 'Layered Data Protection', sub: 'DCAP → DLP → Risk Monitor' },
          { value: '1,500', label: 'Endpoints per Specialist', sub: 'Maximized operational security efficiency' },
          { value: '100+', label: 'Integrated Channels', sub: 'Email, Chat, USB, Cloud, Mic, Cam' },
          { value: '100%', label: 'Regulatory Compliance', sub: 'Decree 13, Cybersecurity Law, PCI-DSS, ISO' }
        ],
        problems: [
          {
            problem: 'Employees accidentally or maliciously exfiltrating confidential files to USBs, Telegram, or personal Zalo',
            consequence: 'Trade secrets, proprietary source code, and client databases leaked to competitors.'
          },
          {
            problem: 'Internal corporate fraud: invoice fabrication, procurement kickbacks, or illicit moonlight jobs during work hours',
            consequence: 'Severe financial loss and organizational damage hidden from executive leadership.'
          },
          {
            problem: 'Lack of visibility into where sensitive PII data is scattered across employee workstations',
            consequence: 'Direct violations of Personal Data Protection regulations and exposure to heavy regulatory fines.'
          },
          {
            problem: 'Absence of digital forensic evidence when security breaches occur',
            consequence: 'Inability to enforce disciplinary actions or pursue legal litigation due to missing audit logs and screen captures.'
          }
        ],
        targetAudiences: [
          { title: 'Banks & Financial Institutions', desc: 'Protect account records, cardholder information, and detect internal loan fraud schemes.', iconName: 'bank' },
          { title: 'Manufacturing & R&D Labs', desc: 'Secure chemical formulas, CAD schematics, and exclusive supplier contract lists.', iconName: 'enterprise' },
          { title: 'Software & Technology Firms', desc: 'Safeguard proprietary Source Code, server credentials, and infrastructure keys.', iconName: 'tech' },
          { title: 'Healthcare & Pharmaceuticals', desc: 'Secure electronic medical histories, clinical research results, and patient privacy records.', iconName: 'hospital' },
          { title: 'Retail & Service Franchises', desc: 'Control loyalty program datasets, electronic invoices, and strategic pricing roadmaps.', iconName: 'retail' },
          { title: 'Enterprises Seeking MSSP Services', desc: 'Outsource complete internal security management without needing to hire a full in-house team.', iconName: 'briefcase' }
        ],
        highlights: [
          'File Auditing (DCAP): Automatically scans and classifies confidential documents while detecting abnormal file server access',
          'Next-Gen DLP: Deep inspection of text, image OCR, microphone recordings, and mobile data transfers',
          'Risk Monitor: Screen video recording, webcam face recognition, phone screen-photo detection, and forensic watermarking',
          'Psychological & User Behavior Analytics (UBA): Early forecasting of flight risk, disgruntlement, and gambling debts to prevent breaches'
        ],
        keyFeatures: [
          {
            name: '01. FileAuditor (DCAP Tier)',
            detail: 'Automatically inventories and categorizes data sensitivity across all file servers, network drives, and employee endpoints.'
          },
          {
            name: '02. Next-Gen DLP (Data-Centric Tier)',
            detail: 'Blocks exfiltration attempts across corporate emails, personal webmails, Telegram, Zalo, WhatsApp, Cloud Drives, USB, and printers.'
          },
          {
            name: '03. Risk Monitor (User-Centric Tier)',
            detail: 'Maintains comprehensive legal video evidence of security infractions, supporting digital forensic investigations.'
          },
          {
            name: 'Managed Security Services (MSSP)',
            detail: 'Remote SOC surveillance and threat incident analysis for SMEs without dedicated internal infosec officers.'
          }
        ],
        businessOutcomes: [
          'Proactively blocked customer database exfiltration attempts prior to key personnel resignations',
          '100% compliance across data governance frameworks: Decree 13/2023, ISO 27001, PCI DSS, and Cyber Security Law',
          '70% reduction in digital forensic investigation turnaround time during internal incidents'
        ],
        specs: [
          { label: 'Supported OS', value: 'Windows, macOS, Linux' },
          { label: 'Database Support', value: 'MS SQL, PostgreSQL' },
          { label: 'Inspection Tech', value: 'OCR, Stemming, Audio Analysis, Biometrics' },
          { label: 'Compliance Standards', value: 'Decree 13/2023, ISO 27001, GDPR' }
        ],
        trustedClients: ['Financial Conglomerates', 'Commercial Banks', 'Multinational Corporations', 'Legal & HR Departments']
      },
      {
        id: 'database-security',
        title: 'Database Security',
        category: 'cyber-security',
        categoryLabel: 'Cyber Security',
        pillar: 'engineer',
        poweredBy: 'PNPSECURE',
        providerLogos: ['PNPSECURE'],
        tagline: 'Granular database access control, dynamic masking & real-time rogue query termination',
        concept: 'The Database Access Control & System Access Governance (DBAC / SAC) suite is an industry-leading database and server security management platform. It delivers real-time Dynamic Data Masking, immediate blocking of rogue SQL queries (DROP, DELETE, mass SELECT), and immutable video recording of DBA sessions.',
        quoteHighlight: {
          quote: 'Architected with direct query-level policy inspection, <1ms latency, and a unified console for both Database and System Access control.',
          source: 'Enterprise Database Security Architecture Whitepaper',
          accentValue: '< 1ms',
          accentLabel: 'Query Processing Overhead'
        },
        keyStats: [
          { value: '< 1ms', label: 'Database Query Overhead', sub: 'Negligible performance impact' },
          { value: '100%', label: 'Rogue Query Termination', sub: 'Blocks DROP, DELETE, Bulk SELECT' },
          { value: 'Real-Time', label: 'Dynamic Data Masking', sub: 'Automated on-the-fly redaction' },
          { value: 'Full Audit', label: 'DBA Session Video Log', sub: 'Immutable forensic audit trail' }
        ],
        problems: [
          {
            problem: 'DBAs and developers possess direct unmonitored access to sensitive core databases',
            consequence: 'Risk of unauthorized viewing, bulk copying, or data tampering without independent governance.'
          },
          {
            problem: 'Legacy database firewalls generate excessive junk logs and incur massive storage costs',
            consequence: 'Wasted log storage budgets and alert fatigue overwhelming security teams.'
          },
          {
            problem: 'Heterogeneous database fleets (Oracle, MS SQL, PostgreSQL, MySQL) managed in isolated silos',
            consequence: 'Inconsistent security policies and unmonitored blind spots across multi-engine estates.'
          },
          {
            problem: 'Inability to terminate destructive SQL queries in real-time before execution',
            consequence: 'Irreversible data loss and catastrophic downtime discovered only after the breach occurs.'
          }
        ],
        targetAudiences: [
          { title: 'Core Banking & Financial Services', desc: 'Enforce strict access controls over account balances, ledger tables, and transactional journals.', iconName: 'bank' },
          { title: 'Fintech & Payment Gateways', desc: 'Protect cardholder PAN data, enforce PCI-DSS encryption, and secure API database connections.', iconName: 'dollar' },
          { title: 'Telecommunications Providers', desc: 'Govern access to billing databases and identity records for tens of millions of mobile subscribers.', iconName: 'telecom' },
          { title: 'Healthcare & Hospital Systems', desc: 'Dynamically mask patient diagnostic and insurance records during IT maintenance activities.', iconName: 'hospital' },
          { title: 'Critical National Infrastructure', desc: 'Audit and protect databases powering national power grids and energy distribution systems.', iconName: 'gov' },
          { title: 'Enterprise CRM & E-Commerce', desc: 'Apply granular permissions for third-party vendors and contractors upgrading application modules.', iconName: 'enterprise' }
        ],
        highlights: [
          'Flexible Architecture: Supports Inline 2-Tier, Sniffing 3-Tier, and Server Agent deployment modes',
          'Contextual Query Policies: Restrict queries by time of day, source IP, application, and result row limit',
          'Dynamic Data Masking: Redacts Citizen IDs, credit card PANs, and salary records without altering application code',
          'Immutable Audit Logs & Video Recording of DBA desktop sessions'
        ],
        keyFeatures: [
          {
            name: 'Granular Database Access Control (DBAC)',
            detail: 'Multi-factor authentication with granular authorization down to specific tables and columns.'
          },
          {
            name: 'Real-Time Rogue Query Blocking',
            detail: 'Instantly terminates sessions attempting abnormal queries such as unauthorized DROP TABLE or unbounded SELECTs.'
          },
          {
            name: 'Dynamic Data Masking & Encryption',
            detail: 'Encrypts database columns and dynamically masks sensitive records in transit without altering application code.'
          },
          {
            name: 'System Access Control (SAC) & Session Logging',
            detail: 'Governs SSH, Telnet, and RDP access to database server hosts with full video session recording.'
          }
        ],
        businessOutcomes: [
          'Replaced costly legacy database firewalls with a 40% reduction in operating expenses',
          'Achieved 100% compliance with State Bank data security regulations and international audit standards',
          'Zero transaction throughput degradation on mission-critical databases with <1ms query overhead'
        ],
        specs: [
          { label: 'Deployment', value: 'Inline, Sniffing, Server Agent' },
          { label: 'Databases', value: 'Oracle, MSSQL, PG, MySQL, MariaDB, DB2' },
          { label: 'Security Features', value: 'DBAC, SAC, Dynamic Masking, Real-time Block' },
          { label: 'Standards', value: 'PCI-DSS, ISO 27001, SOX Compliance' }
        ],
        trustedClients: ['Yang Shin Bank', 'Sanshin Bank', 'NARI (Critical Infra)', 'International Banking Systems']
      },
      {
        id: 'infrastructure-soc',
        title: 'SOC',
        category: 'cyber-security',
        categoryLabel: 'Cyber Security',
        pillar: 'engineer',
        poweredBy: 'VNETWORK',
        providerLogos: ['VNETWORK'],
        tagline: '24/7/365 Next-Gen SOC with global multi-location SOC hubs & <5-minute incident containment',
        concept: 'VNETWORK SOC is an enterprise cybersecurity operations and monitoring service that combines elite security analysts, standardized incident response workflows, and cutting-edge telemetry technology. Operating 24/7/365 across distributed SOC hubs in Vietnam, Hong Kong, Taiwan, Singapore, and the UK, VNETWORK SOC delivers proactive threat hunting, deep log correlation, real-time alert triage, and rapid containment with a guaranteed <5-minute SLA to maintain business continuity and ensure compliance with ISO 27001, PCI DSS, and cybersecurity mandates.',
        quoteHighlight: {
          quote: 'With cyber threats striking around the clock, a globally distributed 24/7 SOC with sub-5-minute emergency response represents the ultimate operational defense for mission-critical enterprise digital assets.',
          source: 'VNETWORK Cybersecurity Operations & Incident Response Report 2026',
          accentValue: '< 5 Mins',
          accentLabel: 'Emergency Incident Response'
        },
        keyStats: [
          { value: '24/7/365', label: 'Continuous Monitoring & Operations', sub: 'Zero-downtime surveillance year-round' },
          { value: '< 5 Mins', label: 'Emergency Incident Response SLA', sub: 'Rapid containment and threat mitigation' },
          { value: '5+ Countries', label: 'Global Distributed SOC Network', sub: 'Vietnam, Hong Kong, Taiwan, Singapore, UK' },
          { value: '99.99%', label: 'Service Reliability & SLA Commitment', sub: 'Certified ISO 27001, ISO 20000-1 & PCI DSS' }
        ],
        problems: [
          {
            problem: 'Severe shortage of qualified cybersecurity analysts to maintain round-the-clock 24/7 shifts',
            consequence: 'Organizations miss intrusions occurring overnight or on holidays, resulting in prolonged, undetected breaches.'
          },
          {
            problem: 'Prohibitive CapEx and OpEx required to build and staff an in-house SOC',
            consequence: 'Millions of dollars spent on SIEM/SOAR licensing, specialized tooling, and high salaries for multi-shift security engineers.'
          },
          {
            problem: 'Alert fatigue caused by thousands of noisy alerts burying high-severity zero-day threats',
            consequence: 'Internal IT teams miss actual targeted breaches, ballooning Mean Time to Detect (MTTD) to weeks or months.'
          },
          {
            problem: 'Lack of battle-tested Incident Response playbooks and forensic capabilities during active crises',
            consequence: 'Delayed containment during ransomware outbreaks, leading to catastrophic operational shutdown and regulatory sanctions.'
          }
        ],
        targetAudiences: [
          { title: 'Banking, Financial Services & FinTech', desc: 'Continuous core infrastructure surveillance, fraud telemetry, and strict adherence to central bank cybersecurity regulations.', iconName: 'bank' },
          { title: 'Enterprises & Large Conglomerates', desc: 'Holistic defense of distributed cloud assets, internal ERP systems, and multi-branch network perimeters.', iconName: 'enterprise' },
          { title: 'Government & Critical Infrastructure', desc: 'Safeguard citizen registries, sustain continuous public service availability, and neutralize sophisticated state-sponsored APTs.', iconName: 'gov' },
          { title: 'E-Commerce & Digital Platforms', desc: 'Protect payment gateways, mitigate high-volume credential stuffing bots, and ensure peak sale event uptime.', iconName: 'retail' }
        ],
        highlights: [
          'Centralized 24/7/365 Security Monitoring: Real-time telemetry ingestion and correlation across networks, servers, endpoints, and cloud workloads',
          'Sub-5-Minute Emergency Incident Response: Guaranteed SLA to isolate compromised assets, remediate active exploits, and restore services',
          'Global Multi-Country SOC Network: Tiered security engineering teams located in Vietnam, Hong Kong, Taiwan, Singapore, and the United Kingdom',
          'Deep Ecosystem Integration & Compliance: Seamless synergy with VNIS WAF/Scrubbing Centers, certified for ISO 27001, ISO 20000-1, and PCI DSS'
        ],
        keyFeatures: [
          {
            name: '01. 24/7 Centralized Security Telemetry & Log Correlation',
            detail: 'Comprehensive event log aggregation across networks, endpoints, servers, and databases using advanced SIEM/AI intelligence to flag anomalies instantly.'
          },
          {
            name: '02. Proactive Threat Hunting & Intelligence Grounding',
            detail: 'Rather than passively awaiting alerts, seasoned SOC hunters actively search for latent Indicators of Compromise (IoCs/IoAs) and emerging threat actor tactics.'
          },
          {
            name: '03. Rapid Incident Response & Digital Forensics',
            detail: 'Standardized containment procedures isolate compromised nodes within minutes, followed by malware reverse engineering and comprehensive forensic reporting.'
          },
          {
            name: '04. Integrated WAF & Global Scrubbing Center Defense',
            detail: 'Direct bidirectional telemetry with VNETWORK global WAF and multi-Tbps Scrubbing Centers to automatically reroute and neutralize large-scale DDoS assaults.'
          }
        ],
        businessOutcomes: [
          'Reduce Mean Time to Detect and Remediate (MTTD / MTTR) by over 80% compared to traditional in-house models',
          'Cut operational and licensing CapEx/OpEx by up to 70% without sacrificing elite 24/7 security coverage',
          'Achieve 100% compliance with strict regulatory security audits (ISO 27001, PCI DSS, Decree 13, National Cyber Law)',
          'Shield enterprise brand reputation and maintain uninterrupted digital operations against targeted ransomware campaigns'
        ],
        specs: [
          { label: 'Incident Response SLA', value: '< 5 minutes for high-severity threats' },
          { label: 'Operational Coverage', value: '24/7/365 uninterrupted multi-shift surveillance' },
          { label: 'SOC Hub Locations', value: 'Vietnam, Hong Kong, Taiwan, Singapore, UK' },
          { label: 'Compliance & Standards', value: 'ISO 27001:2013, ISO 20000-1, PCI DSS Level 1' },
          { label: 'Integrated Scrubbing Capacity', value: '20+ Tbps paired with global WAF centers' },
          { label: 'Deployment Integration', value: 'SIEM, SOAR, EDR, Firewalls, Multi-Cloud, On-Prem' }
        ],
        trustedClients: ['Financial Conglomerates & Banks', 'Government Agencies', 'E-Commerce Enterprises', 'Multinational Corporations']
      }
    ]
  },
  {
    id: 'ai-operations',
    title: 'AI Operations & Business Process',
    pillar: 'operate',
    pillarLabel: 'OPERATE',
    description: 'Specialized Vertical AI assistants for banking compliance, omnichannel sales & debt collection, clinical healthcare, and admissions CRM.',
    items: [
      {
        id: 'ai-legal-compliance',
        title: 'AI Legal & Compliance',
        category: 'ai-operations',
        categoryLabel: 'AI Operations',
        pillar: 'operate',
        poweredBy: 'BFSI Vertical Intelligence',
        providerLogos: ['DatumBridge'],
        tagline: 'Vertical AI legal assistant optimized for BFSI regulations, State Bank directives & contract analysis',
        concept: 'AI Legal & Compliance is Vietnam’s premier specialized Vertical AI for the BFSI sector. Accurately grounded in State Bank of Vietnam regulations, circulars, and internal policies, the system automates legal search, contract review, regulatory impact assessment, and drafting with up to 95% domain accuracy.',
        quoteHighlight: {
          quote: 'Architected specifically to adhere to State Bank of Vietnam regulations — a domain where generic international AI platforms fail to deliver accurate, legally sound answers.',
          source: 'BFSI Vertical AI Architecture Whitepaper 2026',
          accentValue: '95%',
          accentLabel: 'Legal Accuracy Rate'
        },
        keyStats: [
          { value: '95%', label: 'Legal Accuracy Rate', sub: '100% exact citation of SBV circulars' },
          { value: '+72%', label: 'Operational Processing Speed', sub: 'Automates >50% of document workloads' },
          { value: '-42%', label: 'Operational Task Load', sub: 'FTE savings equivalent to ~1.5B VND/year' },
          { value: '~45%', label: 'Projected ROI Rate', sub: 'Estimated payback period of ~20-22 months' }
        ],
        problems: [
          {
            problem: 'Difficult to continuously monitor rapid and frequent regulatory changes from the State Bank of Vietnam',
            consequence: 'Impact: Delayed institutional adoption, non-compliant operational practices, and risks of severe regulatory sanctions.'
          },
          {
            problem: 'Hundreds of hours spent manually reviewing and revising complex internal banking procedures',
            consequence: 'Impact: Stalled approval workflows and inconsistencies across nationwide branch networks.'
          },
          {
            problem: 'Human error risks during manual review of credit and loan guarantee contracts',
            consequence: 'Impact: Costly legal disputes, financial exposure, and reputational damage to the institution.'
          },
          {
            problem: 'Heavy reliance on specialized legal personnel creating decision-making bottlenecks',
            consequence: 'Impact: Escalating external counsel fees and prolonged loan assessment turnaround times.'
          }
        ],
        targetAudiences: [
          { title: 'Commercial Banks & Credit Institutions', desc: 'Review loan agreements, audit collateral documentation, and stay strictly aligned with SBV directives.', iconName: 'bank' },
          { title: 'Non-Bank Enterprises & Conglomerates', desc: 'Review corporate agreements, optimize the legal document lifecycle, and ensure comprehensive internal compliance.', iconName: 'enterprise' },
          { title: 'Law Firms & Legal Consultancies', desc: 'Accelerate legal precedent research, regulatory lookups, and advisory drafting using natural language search.', iconName: 'briefcase' }
        ],
        highlights: [
          'Natural language intelligent legal search: Comprehensive search across Laws, Decrees, Circulars, Case Precedents, and Official Letters',
          'Automated Contract Review & Risk Detection: Compares counterparty contracts against bank standard templates, highlighting unfavorable terms',
          'Regulatory Impact Assessment Engine: Automatically evaluates the impact of new statutory changes on internal corporate procedures',
          'Enterprise DMS Integration & Translation: Integrates into Document Management Systems with built-in 6-language translation'
        ],
        keyFeatures: [
          {
            name: '01. Smart Legal Search & SBV Directive Grounding',
            detail: 'Comprehensive search across Laws, Decrees, Circulars, Case Precedents, and Official Letters with deep BFSI terminology comprehension.'
          },
          {
            name: '02. Automated Contract Review & Risk Detection',
            detail: 'Compares counterparty contracts against bank standard templates, highlighting unfavorable terms while supporting automated legal drafting.'
          },
          {
            name: '03. Regulatory Impact Assessment Engine',
            detail: 'Automatically evaluates the impact of new statutory changes on internal corporate documents and procedures.'
          },
          {
            name: '04. Enterprise DMS Integration & Translation',
            detail: 'Integrates directly into Document Management Systems and internal workflows, featuring built-in 6-language translation capabilities.'
          }
        ],
        businessOutcomes: [
          'Increased legal workflow throughput by 72%, saving 850M VND/year in productivity',
          'Reduced operational document workload by 42%, equivalent to ~1.5B VND/year in FTE savings',
          'Automated over 50% of routine document tasks, reducing external legal consultancy spend by 500M - 700M VND/year'
        ],
        specs: [
          { label: 'Accuracy', value: '95% (BFSI Legal Benchmark)' },
          { label: 'Response Time', value: '< 10s with exact citations' },
          { label: 'Deployment', value: '3 Months (PoC in 2 weeks)' },
          { label: 'Infrastructure', value: 'Private Cloud / Self-Hosted LLM' }
        ],
        trustedClients: ['HDBank (POC)', 'LPBank (POC)', 'Aristino (POC)', 'VIB (Pilot/Prod)', 'MTC', 'VNETWORK', 'Gialam Train', 'HACVN']
      },
      {
        id: 'ai-sales-cskh',
        title: 'AI Agent',
        category: 'ai-operations',
        categoryLabel: 'AI Operations',
        pillar: 'operate',
        poweredBy: 'DatumBridge',
        providerLogos: ['DatumBridge'],
        tagline: 'Omnichannel SuperSales AI assistant & compliant digital debt collection voicebots',
        concept: 'The Omnichannel AI Agent platform delivers enterprise-grade conversational AI across two key operational modules: SuperSales AI Agent (24/7 automated sales consulting, customer care, and multi-channel checkout) and Debt Collection AI Agent (civilized, compliant payment reminders and self-service resolution across voice and digital channels).',
        quoteHighlight: {
          quote: 'Engaging over 10 million users across TikTok, Facebook, and Zalo with <5s response speeds. Handling 5,000+ daily conversations with an average 30% lead capture rate.',
          source: 'Enterprise Conversational AI Benchmark Report',
          accentValue: '< 5s',
          accentLabel: 'Multi-Channel Response Time'
        },
        keyStats: [
          { value: '< 5s', label: 'Instant Multi-Channel Response', sub: 'Zalo, FB, Web, App 24/7/365' },
          { value: '30%', label: 'Average Lead Capture Rate', sub: '2,000+ qualified leads per month' },
          { value: '5,000+', label: 'Daily Handled Conversations', sub: '70% reduction in agent workload' },
          { value: '+20%', label: 'On-Time Debt Payment Uplift', sub: 'Personalized digital reminders' }
        ],
        problems: [
          {
            problem: 'Slow customer response times during off-hours and weekends',
            consequence: 'Lost sales opportunities as prospects immediately switch to competitors.'
          },
          {
            problem: 'High fixed costs of maintaining large in-house telesales and support teams',
            consequence: 'Heavy salary overheads and inconsistent service quality between staff members.'
          },
          {
            problem: 'Traditional aggressive debt collection phone calls causing consumer friction and regulatory complaints',
            consequence: 'Customer backlash and severe brand reputation damage for financial institutions.'
          },
          {
            problem: 'Customer interaction data fragmented across disparate silos (Zalo, Messenger, Hotline, Webchat)',
            consequence: 'Lack of a 360-degree customer view, impeding upsell and cross-sell execution.'
          }
        ],
        targetAudiences: [
          { title: 'Banking & Consumer Lending', desc: 'Automate credit card and installment payment reminders via personalized Zalo/SMS and AI Voicebots.', iconName: 'bank' },
          { title: 'E-Commerce & Retail Brands', desc: 'Product advisory, coupon recommendations, order assistance, and delivery tracking 24/7.', iconName: 'retail' },
          { title: 'Real Estate & Automotive', desc: 'Capture customer requirements, qualify high-intent buyers, and book showroom appointments.', iconName: 'enterprise' },
          { title: 'Insurance & Financial Services', desc: 'Explain policy coverage, remind premium due dates, and intake initial claims info.', iconName: 'insurance' },
          { title: 'Hospitality & Dining Chains', desc: 'Automated table booking, event ticketing, menu inquiries, and post-visit loyalty care.', iconName: 'store' },
          { title: 'Enterprise Internal Copilots', desc: 'Internal AI assistant answering employee questions on HR policies, tax, and IT helpdesk.', iconName: 'briefcase' }
        ],
        highlights: [
          'AI SuperSales: Instant natural response in Vietnamese, behavioral product suggestions, and automated multi-channel checkout',
          'Debt Collection AI: Outbound automated calls on app and social channels with integrated CRM collection tracking',
          'High customer satisfaction score of 4.7/5 across Web Chat, Zalo OA, Messenger, iOS, and Android',
          'Deep turnkey integration into CRM, ERP, JIRA, Google Drive, and OneDrive'
        ],
        keyFeatures: [
          {
            name: 'Omnichannel SuperSales AI Agent',
            detail: 'Engages naturally in Vietnamese matching brand tone, qualifies requirements, and guides customers to purchases.'
          },
          {
            name: 'Debt Collection AI Agent (Compliant & Civilized)',
            detail: 'Enables customers to review balances, select installment payment plans, and receive secure payment links via Zalo/SMS.'
          },
          {
            name: 'Enterprise Guardrails & Safety Filters',
            detail: 'Built-in safety guardrails preventing sensitive, political, or off-topic discussions to ensure ethical brand compliance.'
          },
          {
            name: 'Model Hub & Performance Benchmark',
            detail: 'Flexible model switching between GPT-4o, Claude 3.5, Gemini 1.5 Pro, or Self-hosted LLMs to balance cost and quality.'
          }
        ],
        businessOutcomes: [
          'Tripled sales team productivity while accelerating sales conversion velocity',
          'Reduced traditional call center debt collection operating costs by 60%',
          'Increased on-time customer payment rates by 20%'
        ],
        specs: [
          { label: 'Channels', value: 'Zalo, Messenger, Webchat, App, Voice' },
          { label: 'Conversations', value: '> 5,000 sessions/day' },
          { label: 'AI Architecture', value: 'Integrated Service Hub (Multi-LLM)' },
          { label: 'Deployment', value: 'Omnichannel Cloud / On-Premise' }
        ],
        trustedClients: ['VPBank (Chatbot/Callbot)', 'VIB', 'HDBank', 'E-Commerce & Retail Leaders']
      },
      {
        id: 'ai-healthcare-insurance',
        title: 'AI Healthcare & Health Insurance',
        category: 'ai-operations',
        categoryLabel: 'AI Operations',
        pillar: 'operate',
        poweredBy: 'Lumination',
        providerLogos: ['Lumination'],
        tagline: 'Clinical decision support & health insurance verification assistant for hospitals',
        concept: 'The Clinical AI Intelligence & Healthcare platform is a domain-specific Health Insurance assistant powered by advanced AI. Proven in live operation at the Vietnam National Children’s Hospital, the platform digitizes 55+ health regulations to assist medical staff with instant, cited compliance checks, ensuring accurate health insurance processing and minimizing hospital financial risks.',
        quoteHighlight: {
          quote: 'The system does not provide generic chatbots — It delivers verified medical intelligence assistants that cite exact clauses in Health Insurance law and support physician clinical workflows.',
          source: 'Clinical AI Healthcare Implementation Report',
          accentValue: '9,000+',
          accentLabel: 'Daily Clinical Interactions'
        },
        keyStats: [
          { value: '9,000+', label: 'Daily Clinical Interactions', sub: 'In live operation at National Children’s Hospital' },
          { value: '30,000+', label: 'Daily Regulation Queries', sub: '55+ digitized health insurance laws & circulars' },
          { value: '< 60s', label: 'Cited Response Speed', sub: 'Exact law number, article, and clause citation' },
          { value: '-80%', label: 'Search Time Reduction', sub: 'From 15-30 minutes down to seconds' }
        ],
        problems: [
          {
            problem: '90% of hospital patients in Vietnam involve Health Insurance, requiring manual regulatory checks',
            consequence: 'Impact: Doctors must split time between clinical examination and manual law lookups, increasing wait times and reducing examination efficiency.'
          },
          {
            problem: '55+ legal documents (Laws, Decrees, Circulars, Guidelines) undergo continuous revisions',
            consequence: 'Impact: Newly issued guidelines take time to cascade to clinical departments, causing systemic prescription and administrative errors.'
          },
          {
            problem: 'Prescription errors risk claim rejections and retroactive financial disallowances (Xuất toán) by Social Security',
            consequence: 'Impact: Hospitals face billions of VND in clawbacks and patient insurance coverage disputes.'
          },
          {
            problem: 'Hospital Planning and Finance departments are overburdened with post-treatment claim audits',
            consequence: 'Impact: Operational bottlenecks that divert critical administrative and medical resources away from frontline operations.'
          }
        ],
        targetAudiences: [
          { title: 'National & General Hospitals', desc: 'Support hundreds of doctors and nurses with instant health insurance checks during prescription entry (e.g., Vietnam National Children’s Hospital).', iconName: 'hospital' },
          { title: 'Private Hospitals & Clinics', desc: 'Instantly cross-check national health insurance coverage regulations to ensure compliant billing.', iconName: 'hospital' },
          { title: 'Hospital Planning & Finance', desc: 'Proactively audit and prevent insurance claim rejections at the point of doctor order entry.', iconName: 'briefcase' },
          { title: 'Frontline Physicians & Nurses', desc: 'A reliable assistant resolving complex referral routes and correct-line hospital admission coverage questions.', iconName: 'hospital' }
        ],
        highlights: [
          'Operational at Vietnam National Children’s Hospital (Handling 9,000+ conversations and >30,000 queries daily)',
          'Advanced AI: Deep domain understanding of 55+ Vietnamese Health Insurance regulations and medical ontology',
          '100% exact legal citations: Specifies document number, article, and clause for instant medical staff verification',
          'Multi-channel deployment across Web portals, Zalo OA, and hospital HIS copilot integrations'
        ],
        keyFeatures: [
          {
            name: '01. Physician Health Insurance Copilot',
            detail: 'Physician enters scenario (Patient A + Disease Code B + Health Insurance Card C) → AI returns exact coverage rate, conditions, and required forms in under 60 seconds.'
          },
          {
            name: '02. Insurance Scenario & Compliance Guidance',
            detail: 'Assesses complex medical billing scenarios and automatically evaluates compliance impacts when new circulars are enacted to prevent claim rejections.'
          },
          {
            name: '03. Comprehensive Legal Repository',
            detail: 'Digitized library of 55+ statutory health insurance regulations with active validity filters, returning results with absolute precision legal citations.'
          },
          {
            name: '04. Flexible Multi-Channel Deployment',
            detail: 'Supports Web portals, Zalo OA, and seamless embedded copilot widgets directly inside Hospital HIS software for unified workflows.'
          }
        ],
        businessOutcomes: [
          'Reduced health insurance lookup times from 15-30 minutes down to under 1 minute',
          'Minimized prescription compliance errors and prevented hospital insurance claim disallowances',
          'Elevated clinical staff confidence when explaining coverage rights to patients and families'
        ],
        specs: [
          { label: 'Validated By', value: 'National Children’s Hospital' },
          { label: 'AI Architecture', value: 'Skill Files & Domain Ontology' },
          { label: 'Response Time', value: '< 60s with full citations' },
          { label: 'Regulatory Coverage', value: '55+ Health Insurance Laws & Circulars' }
        ],
        trustedClients: ['National Children’s Hospital', 'HD Bank (Smart Kiosk Partner)', 'Provincial General Hospitals']
      },
      {
        id: 'ai-education-crm',
        title: 'AI CRM',
        category: 'ai-operations',
        categoryLabel: 'AI Operations',
        pillar: 'operate',
        poweredBy: 'Lumination',
        providerLogos: ['Lumination'],
        tagline: 'Unified admissions CRM ecosystem featuring AI scoring & 360° prospective student personas',
        concept: 'The Education AI CRM is an end-to-end educational admissions intelligence platform operating under the "One Unified Data – One Control Center" model. It consolidates multi-channel inquiries, calculates real-time AI scoring for prospective students, generates Lead360 personas, and automates marketing campaigns from initial lead to confirmed enrollment.',
        quoteHighlight: {
          quote: 'A unified admissions intelligence ecosystem built for education institutions, featuring operational dashboards, KPI performance tracking, and marketing intelligence.',
          source: 'Education Admissions AI Architecture Guide 2026',
          accentValue: '360°',
          accentLabel: 'Lead360 Student Persona'
        },
        keyStats: [
          { value: '3 Modules', label: 'Unified System Architecture', sub: 'Operations - Performance - Marketing' },
          { value: '100%', label: 'Unified Multi-Channel Data', sub: 'Consolidates all leads in one control center' },
          { value: '+35%', label: 'Enrollment Conversion Rate', sub: 'Powered by AI Scoring & Lead360' },
          { value: 'Real-time', label: 'Tiered High School KPI Reports', sub: 'Monitors quotas by high school tier' }
        ],
        problems: [
          {
            problem: 'Admissions data scattered across multiple Excel spreadsheets, fanpages, and external admission agents',
            consequence: 'Lead duplication, missed prospective students, and lack of accurate real-time data for university leadership.'
          },
          {
            problem: 'Admissions counselors cannot identify which students have the highest enrollment intent to prioritize outreach',
            consequence: 'Wasted call center hours, low enrollment conversion rates, and inflated marketing customer acquisition costs.'
          },
          {
            problem: 'Difficult to allocate high school territories and measure real-time KPI performance per counselor',
            consequence: 'Lack of operational transparency and inability to double down on high-converting high schools.'
          },
          {
            problem: 'Marketing teams lack real-time visibility into student feedback to adjust messaging and ad budgets',
            consequence: 'Misallocated ad spend on wrong demographics without generating quality application dossiers.'
          }
        ],
        targetAudiences: [
          { title: 'Universities & Academies', desc: 'Digitize admissions pipelines handling tens of thousands of student applications per season (Hoa Sen University).', iconName: 'school' },
          { title: 'Colleges & Vocational Institutes', desc: 'Automate high school graduate outreach, vocational counseling, and transcript assessments.', iconName: 'school' },
          { title: 'K-12 International School Systems', desc: 'Manage prospective parent journeys from initial Campus Tour bookings to enrollment fee payments.', iconName: 'school' },
          { title: 'Language Centers & Study Abroad', desc: 'Nurture long-term student pipelines, track exam readiness, and suggest customized study roadmaps.', iconName: 'school' },
          { title: 'Admissions Leadership & Boards', desc: 'Track real-time executive dashboards and allocate KPI quotas across regional school tiers.', iconName: 'briefcase' },
          { title: 'Admissions Counselors & Field Agents', desc: 'Receive intelligent daily action lists (follow-ups, document completion reminders).', iconName: 'users' }
        ],
        highlights: [
          'Operations Module: Real-time dashboard, multi-channel chat management (Zalo, FB, Hotline), student record management (OCR/CSV), automated tasks & alerts',
          'Performance & KPI Module: AI Scoring & conversation analytics, high school tier performance, quota tracking, counselor leaderboards',
          'Marketing Intelligence Module: Topic & sentiment analytics, automated AI copywriting, budget suggestions, social listening, Lead360 personas',
          'System Administration: Hierarchical role management (Dean - Manager - Counselor - Agent) with AI re-analysis utilities'
        ],
        keyFeatures: [
          {
            name: 'Automated AI Scoring & Conversation Intelligence',
            detail: 'AI analyzes conversation histories, scores enrollment probability (0-100), extracts interest topics, and suggests next counseling actions.'
          },
          {
            name: 'Lead360 AI Student Behavioral Personas',
            detail: 'Aggregates social interactions, chat transcripts, and call histories to construct a 360° profile of student interests and decision barriers.'
          },
          {
            name: 'High School Tiering & KPI Management',
            detail: 'Categorizes high schools into Tier 1, 2, and 3; assigns counselors and monitors real-time conversion rates per school.'
          },
          {
            name: 'Marketing Intelligence & AI Content Generation',
            detail: 'Identifies trending topics among students, drafts targeted social media copy, and recommends campaign budget allocations.'
          }
        ],
        businessOutcomes: [
          'Increased completed student enrollment rates by 35% through timely, personalized counseling',
          'Saved 70% of manual data entry time through automated OCR document extraction',
          'Enabled university leadership to monitor daily admissions velocity through real-time executive dashboards'
        ],
        specs: [
          { label: 'Architecture', value: 'One Unified Data - One Control Center' },
          { label: 'Omnichannel', value: 'Facebook, Zalo, Hotline, Webchat, Email' },
          { label: 'Analytics', value: 'Lead360 Behavioral AI & AI Scoring' },
          { label: 'Integrations', value: 'SIS, LMS, Payment Gateways, Webhook' }
        ],
        trustedClients: ['Hoa Sen University (HSU CRM)', 'Vocational College Systems', 'Educational Institutions']
      }
    ]
  }
];
