import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, HelpCircle, CheckCircle2, Building2, Cloud, Shield, Calendar, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const metadata = {
  title: 'FAQ | Paynext',
  description: 'Frequently asked questions about Paynext payment solutions and services.',
}

// Enterprise FAQ Highlights
const enterpriseHighlights = [
  { icon: Building2, title: 'Multi-acquirer support', value: 'Yes', color: 'from-blue-500 to-cyan-500' },
  { icon: Shield, title: 'CBS integration (VISTA)', value: 'Yes', color: 'from-emerald-500 to-teal-500' },
  { icon: Cloud, title: 'Cloud-native deployment', value: 'Yes', color: 'from-purple-500 to-pink-500' },
  { icon: Zap, title: 'DCC settlement support', value: 'Yes', color: 'from-orange-500 to-red-500' },
  { icon: Calendar, title: 'Avg. implementation timeline', value: '1 Week', color: 'from-cyan-500 to-blue-500' },
]

const faqCategories = [
  {
    category: 'Enterprise FAQ',
    icon: Building2,
    questions: [
      {
        question: 'Do you support multi-acquirer?',
        answer: 'Yes, PayNext fully supports multi-acquirer setups. Our platform allows you to connect with multiple acquiring banks simultaneously, providing flexibility, redundancy, and the ability to optimize routing based on cost and success rates.',
      },
      {
        question: 'Does VISTA support CBS integration?',
        answer: 'Yes, VISTA seamlessly integrates with Core Banking Systems (CBS). This integration enables real-time synchronization of customer data, transaction processing, and settlement across your banking infrastructure.',
      },
      {
        question: 'What deployment options are available?',
        answer: 'We offer flexible deployment options including cloud-native (AWS, Azure, GCP), on-premise, and hybrid deployments. You can choose the option that best fits your security requirements, compliance needs, and infrastructure preferences.',
      },
      {
        question: 'Do you support DCC settlement?',
        answer: 'Yes, our platform fully supports Dynamic Currency Conversion (DCC) settlement. This allows cardholders to pay in their home currency while merchants receive settlement in local currency, with full transparency and competitive exchange rates.',
      },
      {
        question: 'How long does implementation take?',
        answer: 'Average implementation timeline is just 1 week for standard integrations. Our streamlined onboarding process, comprehensive documentation, and dedicated support team ensure a fast and smooth deployment with minimal disruption to your operations.',
      },
    ],
  },
  {
    category: 'General',
    icon: HelpCircle,
    questions: [
      {
        question: 'What is Paynext?',
        answer: 'Paynext is a certified Payment Technology Service Provider that delivers next-generation payment switching, card management, and orchestration platforms to banks and fintech companies. We help financial institutions modernize their payment infrastructure with secure, scalable, and innovative solutions.',
      },
      {
        question: 'What certifications does Paynext hold?',
        answer: 'Paynext is PCI DSS certified, PA DSS compliant, ISO 27001 certified for information security management. These certifications ensure that we meet the highest security and compliance standards in the payment industry.',
      },
      {
        question: 'Which regions do you serve?',
        answer: 'We primarily serve banks and financial institutions in India and Southeast Asia. Our platforms support multi-currency transactions and can connect to major payment networks globally.',
      },
    ],
  },
  {
    category: 'Products',
    icon: Zap,
    questions: [
      {
        question: 'What is POS / MPOS?',
        answer: 'Our POS/MPOS solution offers a swifter experience in digital business to banks & key financial institutions. It includes transaction processing services, deployment and management, merchant analytics, reconciliation & back-office processing. Supports card schemes like RuPay, MasterCard, Visa, and American Express.',
      },
      {
        question: 'What is E-Commerce Gateway?',
        answer: 'Our E-Commerce Gateway provides convenient and cost-effective online payment solutions. It takes place in real-time, giving you secure and safe transactions. We help you take your business to new markets, boost conversion rates with localised shopping experience, and minimise fraud with best-in-class detection.',
      },
      {
        question: 'What is Bharat QR & UPI?',
        answer: 'We provide Bharat QR services to all our merchants, allowing customers to make payments via dynamic or static QR codes. This solution is interoperable among major card schemes like MasterCard, Visa, RuPay, etc. No POS machine required — simply use the QR code on your cash counter.',
      },
      {
        question: 'Can I use multiple products together?',
        answer: 'Yes, our platforms are designed to work seamlessly together. Many of our clients use POS/MPOS for in-store payments, E-Commerce Gateway for online transactions, and Bharat QR for contactless payments to create a complete end-to-end payment solution.',
      },
    ],
  },
  {
    category: 'Security & Compliance',
    icon: Shield,
    questions: [
      {
        question: 'How do you ensure transaction security?',
        answer: 'We employ multiple layers of security including end-to-end encryption, PCI-DSS certified infrastructure, tokenization, multi-factor authentication, and real-time fraud monitoring. All data at rest is encrypted using industry-standard encryption algorithms.',
      },
      {
        question: 'What is your uptime guarantee?',
        answer: 'We guarantee 99.99% uptime for our platforms, backed by SLA commitments. Our infrastructure is built on redundant systems with automatic failover to ensure continuous availability.',
      },
      {
        question: 'Is your infrastructure PCI-DSS certified?',
        answer: 'Yes, our entire infrastructure is PCI-DSS certified, ensuring that we meet the highest security standards for handling cardholder data. We undergo regular audits and maintain strict security controls.',
      },
    ],
  },
  {
    category: 'Integration & Support',
    icon: Calendar,
    questions: [
      {
        question: 'How long does integration typically take?',
        answer: 'Our average implementation timeline is just 1 week for standard integrations. We provide comprehensive documentation, dedicated support, and a streamlined onboarding process to ensure fast deployment.',
      },
      {
        question: 'Do you provide sandbox environments?',
        answer: 'Yes, we provide fully-featured sandbox environments for development and testing. This allows your team to integrate and test our solutions without affecting production systems.',
      },
      {
        question: 'What support do you provide?',
        answer: 'We provide 24/7 technical support for production issues, dedicated account managers for enterprise clients, comprehensive documentation, and regular training sessions. Our solutions team responds within 24-48 hours.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0a1628] via-[#0f2744] to-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">FAQ</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Frequently Asked
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Questions
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our products, services, and company. 
              Can't find what you're looking for? Contact our team.
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise FAQ Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-5">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Enterprise FAQ Highlights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Quick Answers for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Enterprise
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key capabilities and features for enterprise payment infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {enterpriseHighlights.map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-0.5 flex-shrink-0`}>
                    <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                    <p className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">{category.category}</h2>
                </div>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-primary/30"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our solutions team is here to help. Reach out to us and we'll get back to you within 24–48 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="mailto:info@paynext.co.in">
                  Email Support
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}