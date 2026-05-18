import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Image from 'next/image'
import { Shield, Target, Eye, Award, Globe, Building2, Zap, Cpu, BarChart3 } from 'lucide-react'

export const metadata = {
  title: 'About Us | PayNext',
  description: 'Learn about PayNext — end-to-end digital and automated payment solutions ensuring connected and secure transactions. Based in Mumbai, India.',
}

const values = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'Every platform we build is PCI-DSS compliant by design — security is never an afterthought.',
  },
  {
    icon: Zap,
    title: 'Reliability & Performance',
    description: '99.99% uptime SLA backed by cloud-native architecture with load balancing and instant failover.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Transaction-level financial intelligence and full network cost visibility for every client.',
  },
  {
    icon: Cpu,
    title: 'Modular Innovation',
    description: 'Mix-and-match platform capabilities — deploy what you need, scale when you grow.',
  },
]

const milestones = [
  { year: '2017', title: 'PayNext Founded', description: 'Incorporated in Mumbai with a vision to modernize institutional payment infrastructure and offer end-to-end digital payment solutions across India.' },
  { year: '2018', title: 'First Bank Partnership', description: 'Onboarded first commercial bank client. Launched POS / MPOS services across acquiring and card scheme networks including RuPay, Mastercard and Visa.' },
  { year: '2019', title: 'PCI-DSS Certification', description: 'Achieved PCI-DSS compliant infrastructure certification, enabling onboarding of regulated bank and fintech clients at scale.' },
  { year: '2020', title: 'PerseusPay & VISTA Launch', description: 'Released PerseusPay (core switching) and VISTA (acquiring management), covering the full acquiring lifecycle for financial institutions.' },
  { year: '2021', title: 'Expanded Client Ecosystem', description: 'Onboarded YES Bank, Federal Bank, RBL Bank and a growing base of fintech clients including Mswipe, Cashfree and CC Avenue.' },
  { year: '2022', title: 'Europa Platform', description: 'Introduced Europa — dynamic multi-bank payment orchestration with API-based intelligent routing engine for improved authorization and cost optimization.' },
  { year: '2023', title: '₹18 Trillion Processed', description: 'Crossed ₹18 trillion in cumulative transaction volume processed. Grew to serve 12+ marquee client institutions across banking and fintech.' },
  { year: '2024', title: '7+ Years of Operations', description: 'Over 7 years of trusted infrastructure operations with 99.99% platform uptime and average implementation timeline of just 1 week.' },
]


const team = [
  {
    name: 'Maulik Joshi',
    role: 'Founder & Managing Director — Business Development',
    image: '/images/team/maulik-joshi.jpg',
    bio: 'With over 20 years of rich experience in the financial services industry, Maulik is the Founder and Managing Director of PayNext. Prior to co-founding PayNext, he was the Vice President, Sales for Digital Business at Hitachi Payment Services. A B.Com Graduate from Mumbai University and Diploma holder in Business Management from NMIMS — Maulik was also a part of ICICI Bank and Citibank prior to joining HDFC.',
  },
  {
    name: 'Manoj Achrekar',
    role: 'Co-Founder & Project Director',
    image: '/images/team/manoj.jpg',
    bio: 'Manoj brings over 20 years of experience to his role as Co-Founder and Director, Projects, at PayNext. He has been an integral part of the financial services industry with his stint as Assistant Vice President, Projects in the Technology Department at Hitachi Payment Services. A B.Sc. Graduate from Mumbai University, Manoj also worked at ICICI Bank during the early days of his career.',
  },
  {
    name: 'Abhishek Mukhopadhyay',
    role: 'Co-Founder & Director, Technology & Infrastructure',
    image: '/images/team/abhishek.jpg',
    bio: 'Well-versed and highly skilled in the technological landscape, Abhishek is the Co-Founder and Director of Technology and Infrastructure at PayNext. Prior to this, he was the Chief Technology Officer (CTO) at M-swipe Technologies Pvt. Ltd and Sr. Vice President, Technology at Hitachi Payments Pvt. Ltd. His technology journey began at Euronet Services India Pvt Ltd as a Senior Software Engineer.',
  },
  {
    name: 'Sulesh Sivan',
    role: 'Co-Founder & Director — Operations & Reconciliation',
    image: '/images/team/sulesh.jpg',
    bio: 'Backed by over 18 years of rich experience in the payment processing industry, Sulesh is the Co-Founder and Director of Operations & Reconciliation at PayNext. Prior to PayNext, he was the Sr. Vice President at Hitachi Payment Services and Venture Infotek (now Worldline). He has gained vast expertise in customer service, vendor management, relationship management, and reconciliation.',
  },
]

const promoters = [
  {
    name: 'Avinash Shende',
    role: 'Managing Director — Operation & Planning',
    image: '/images/team/avinashende.jpg',
    bio: 'Avinash Shende brings 25+ years of IT industry experience including Software Development, System Management, IT Facility Management, Networking, and Database Management. He co-founded VGIPL in 1997 with Sachin Pande and has deep knowledge of the banking environment. A BE in Computer Engineering (1995) and MBA in IT from Nagpur University.',
  },
  {
    name: 'Sachin Pande',
    role: 'Managing Director — Business Development',
    image: '/images/team/sachinpande.jpg',
    bio: 'Sachin Pande brings 25+ years of IT industry experience with expertise in System Management, Database design, Web & Cloud applications, AI, ML, Blockchain and Digital Payment. He co-founded VGIPL in 1997, is a first-generation entrepreneur with strategic mergers and acquisitions strengths. A BE in Computer Engineering (1994) and MBA in IT from Nagpur University.',
  },
]

const certifications = [
  { title: 'PCI-DSS Compliant', description: 'Payment Card Industry Data Security Standard — certified infrastructure' },
  { title: 'Visa & Mastercard', description: 'Designed to operate within Visa and Mastercard network ecosystems' },
  { title: 'RuPay & NPCI', description: 'Native support for RuPay and NPCI ecosystems including UPI and Bharat QR' },
  { title: 'Cloud-Native', description: 'Cloud, on-premise, and hybrid deployment architectures supported' },
]

const clientEcosystem = [
  { category: 'Banks', clients: ['YES Bank', 'Federal Bank', 'RBL Bank', 'Goa State Co-operative Bank'] },
  { category: 'Fintechs & Acquirers', clients: ['Pine Labs', 'CC Avenue', 'Cashfree', 'Mswipe', 'PayGlocal', 'Chalo', 'EnKash', 'Rapipay'] },
]

/**
 * Reusable member avatar:
 * - Shows <Image> when `image` path is provided
 * - Falls back to gradient initial avatar if image is null
 */
function MemberAvatar({ name, image }) {
  if (image) {
    return (
      <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary/20">
        <Image
          src={image}
          alt={`Photo of ${name}`}
          width={80}
          height={80}
          className="w-full h-full object-cover object-top"
        />
      </div>
    )
  }

  return (
    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 ring-2 ring-primary/20">
      <span className="text-2xl font-bold text-primary">{name.charAt(0)}</span>
    </div>
  )
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0a1628] via-[#0f2744] to-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">About PayNext</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Speed Is in Our DNA
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Payments at the Next Level
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              At PayNext, we offer end-to-end digital and automated payment solutions to ensure connected and secure transactions. Since time is the currency of the modern world, we offer the fastest possible cashless payment solutions to clients — managing complex solutions and handling both long and short processes effortlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-card border border-border rounded-3xl p-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To enable banks and fintechs with unified switching, operational intelligence, and routing
                infrastructure — delivering bank-grade reliability, transaction-level financial visibility,
                and dynamic multi-bank optimization for institutions operating at scale.
              </p>
            </div>
            <div className="bg-card border border-border rounded-3xl p-10">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To power secure, scalable, and intelligent payment ecosystems — becoming the most trusted
                unified infrastructure partner for acquiring, issuance, and payment orchestration
                across India and emerging markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">What Drives Us</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Trust & Scale</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">By the Numbers</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: '₹18T+', label: 'Transaction Volume Processed', icon: BarChart3 },
              { value: '99.99%', label: 'Platform Uptime SLA', icon: Shield },
              { value: '7+', label: 'Years in Operation', icon: Award },
              { value: '1 Week', label: 'Average Implementation', icon: Zap },
            ].map((metric, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Our Journey</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Milestones</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ml-12 md:ml-0`}>
                    <div className="bg-card border border-border rounded-2xl p-6">
                      <span className="text-primary font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-lg font-semibold text-foreground mt-2">{milestone.title}</h3>
                      <p className="text-muted-foreground mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Core Team</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Meet the Core Team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8">
                <div className="flex items-start gap-5 mb-4">
                  <MemberAvatar name={member.name} image={member.image} />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mt-1">{member.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders & Promoters */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Founders & Promoters</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Meet the Promoters</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {promoters.map((member, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8">
                <div className="flex items-start gap-5 mb-4">
                  <MemberAvatar name={member.name} image={member.image} />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mt-1">{member.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Ecosystem */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Client Ecosystem</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Trusted By Industry Leaders</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From leading private sector banks to fast-growing payment fintechs — institutions across India rely on PayNext infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {clientEcosystem.map((group, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    {index === 0 ? <Building2 className="w-5 h-5 text-primary" /> : <Globe className="w-5 h-5 text-primary" />}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {group.clients.map((client, i) => (
                    <span key={i} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Compliance & Networks</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Certifications & Standards</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}