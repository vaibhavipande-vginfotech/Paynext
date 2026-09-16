import Link from 'next/link'
import { FileText } from 'lucide-react'

export const metadata = {
  title: 'Terms of Service | PayNext',
  description:
    'The terms and conditions governing use of the PayNext website and payment platforms.',
}

const LAST_UPDATED = 'September 16, 2026'

const sections = [
  {
    heading: '1. Agreement to Terms',
    body: [
      'These Terms of Service ("Terms") govern your access to and use of the website and any products, platforms, and services provided by PayNext Private Limited ("PayNext", "we", "us", or "our"). By accessing our website or using our Services, you agree to be bound by these Terms. If you do not agree, do not use the Services.',
      'Use of our payment platforms by financial institutions and enterprises is additionally governed by a separate written master services agreement ("MSA"). Where these Terms conflict with a signed MSA, the MSA prevails.',
    ],
  },
  {
    heading: '2. Definitions',
    body: [
      '"Services" means the PayNext website together with the PerseusPay switching platform, VISTA card management system, Europa orchestration layer, and related products and support. "Client" means an institution that has entered into an MSA with PayNext. "Content" means text, graphics, software, and other material made available through the Services.',
    ],
  },
  {
    heading: '3. Eligibility & Accounts',
    body: [
      'The Services are intended for businesses and their authorised representatives. If you register for access on behalf of an organisation, you represent that you are authorised to bind that organisation. You are responsible for maintaining the confidentiality of any credentials and for all activity that occurs under your account.',
    ],
  },
  {
    heading: '4. Acceptable Use',
    body: [
      'You agree not to: (a) use the Services in violation of any applicable law, regulation, or payment-network rule; (b) attempt to gain unauthorised access to any system, data, or account; (c) interfere with or disrupt the integrity or performance of the Services; (d) reverse engineer or copy any part of the Services except as permitted by law; or (e) use the Services to facilitate fraudulent, deceptive, or unlawful transactions.',
    ],
  },
  {
    heading: '5. Intellectual Property',
    body: [
      'The Services, including all software, designs, logos, and Content, are owned by PayNext or its licensors and are protected by intellectual-property laws. Subject to these Terms, we grant you a limited, non-exclusive, non-transferable right to access and use the website for its intended purpose. No other rights are granted.',
    ],
  },
  {
    heading: '6. Fees',
    body: [
      'Pricing for the platforms is set out in the applicable order form or MSA and is based on transaction volume, enabled features, and support level. Website access is provided free of charge. Fees, taxes, and payment terms are governed by the relevant commercial agreement.',
    ],
  },
  {
    heading: '7. Third-Party Services',
    body: [
      'The Services may interoperate with third parties such as payment networks, banks, and infrastructure providers. We are not responsible for the availability, content, or practices of third-party services, and your use of them may be subject to their own terms.',
    ],
  },
  {
    heading: '8. Disclaimers',
    body: [
      'The website is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied, to the maximum extent permitted by law. We do not warrant that the website will be uninterrupted, error-free, or secure. Platform service levels are governed by the applicable MSA.',
    ],
  },
  {
    heading: '9. Limitation of Liability',
    body: [
      'To the maximum extent permitted by law, PayNext shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, revenue, or data, arising out of or related to your use of the website. Liability arising under a signed MSA is governed exclusively by that agreement.',
    ],
  },
  {
    heading: '10. Indemnification',
    body: [
      'You agree to indemnify and hold harmless PayNext and its officers, directors, employees, and agents from any claims, liabilities, damages, and expenses arising out of your misuse of the Services or violation of these Terms.',
    ],
  },
  {
    heading: '11. Termination',
    body: [
      'We may suspend or terminate your access to the website at any time if you breach these Terms or where necessary to protect the Services. Provisions that by their nature should survive termination will survive.',
    ],
  },
  {
    heading: '12. Governing Law',
    body: [
      'These Terms are governed by the laws of India, and the courts at Mumbai, Maharashtra shall have exclusive jurisdiction over any dispute arising from or relating to these Terms, subject to any dispute-resolution mechanism agreed in a signed MSA.',
    ],
  },
  {
    heading: '13. Changes to These Terms',
    body: [
      'We may revise these Terms from time to time. The "Last updated" date above reflects the latest version. Continued use of the Services after changes take effect constitutes acceptance of the revised Terms.',
    ],
  },
]

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-14 bg-gradient-to-br from-[#0a1628] via-[#0f2744] to-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 mb-6">
            <FileText className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-gray-400">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-semibold text-foreground mb-4">{section.heading}</h2>
                <div className="space-y-4">
                  {section.body.map((para, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-border bg-muted/30 p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-3">Questions?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions about these Terms, contact us at{' '}
                <a href="mailto:info@paynext.co.in" className="text-primary hover:underline">info@paynext.co.in</a>.
              </p>
              <Link href="/contact" className="text-primary font-medium hover:underline">
                Go to contact page &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
