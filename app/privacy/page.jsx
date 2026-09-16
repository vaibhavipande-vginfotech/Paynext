import Link from 'next/link'
import { Shield } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy | PayNext',
  description:
    'How PayNext collects, uses, protects, and shares information across its payment switching, card management, and orchestration platforms.',
}

const LAST_UPDATED = 'September 16, 2026'

const sections = [
  {
    heading: '1. Introduction',
    body: [
      'This Privacy Policy explains how PayNext Private Limited ("PayNext", "we", "us", or "our") collects, uses, discloses, and safeguards information when you visit our website, engage with our sales and support teams, or use our payment switching, card management, and orchestration platforms (collectively, the "Services").',
      'As a certified Technology Service Provider (TSP) operating in the payments ecosystem, we handle information in accordance with applicable Indian law, including the Reserve Bank of India (RBI) directions on data storage and the Digital Personal Data Protection Act, 2023, together with the PCI-DSS security standard.',
    ],
  },
  {
    heading: '2. Information We Collect',
    body: [
      'Business & contact information you provide directly — such as your name, work email, phone number, company, and role — when you request a demo, contact sales, or apply for a role.',
      'Technical and usage information collected automatically when you visit our website, such as IP address, device and browser type, pages viewed, and referring URLs, gathered through cookies and similar technologies.',
      'Transaction metadata processed on behalf of our financial-institution clients when they deploy our platforms. This data is processed under our clients’ instructions; those clients act as the data controller/fiduciary, and PayNext acts as a processor.',
    ],
  },
  {
    heading: '3. How We Use Information',
    body: [
      'To provide, operate, secure, and improve the Services; to respond to enquiries and provide customer support; to process and route transactions on behalf of client institutions; to detect, prevent, and investigate fraud and security incidents; to comply with legal, regulatory, and audit obligations; and to send service and, where permitted, marketing communications you can opt out of at any time.',
    ],
  },
  {
    heading: '4. How We Share Information',
    body: [
      'We do not sell personal information. We share information only with: (a) client financial institutions and their authorised partners as required to deliver the Services; (b) payment networks, acquirers, and issuers to complete transactions; (c) vetted service providers acting under contract on our behalf; and (d) regulators, law enforcement, or other parties where required by law or to protect our rights and the security of the payments ecosystem.',
    ],
  },
  {
    heading: '5. Data Security',
    body: [
      'We maintain a PCI-DSS aligned control environment with encryption in transit and at rest, network segmentation, strict access controls on a least-privilege basis, continuous monitoring, and regular independent security assessments. While no method of transmission or storage is completely secure, we work to protect information using industry-standard safeguards.',
    ],
  },
  {
    heading: '6. Data Retention & Localisation',
    body: [
      'We retain information only for as long as necessary to fulfil the purposes described in this policy or as required by applicable law and RBI directions. Payment data subject to RBI storage requirements is stored within India. When information is no longer required, it is securely deleted or anonymised.',
    ],
  },
  {
    heading: '7. Your Rights',
    body: [
      'Subject to applicable law, you may request access to, correction of, or deletion of your personal information, withdraw consent, or object to certain processing. Where PayNext processes data on behalf of a client institution, we will refer your request to that institution as the responsible data fiduciary. To exercise your rights, contact us using the details below.',
    ],
  },
  {
    heading: '8. Cookies',
    body: [
      'Our website uses essential cookies to function and, where you consent, analytics cookies to understand usage and improve the experience. You can control cookies through your browser settings; disabling some cookies may affect site functionality.',
    ],
  },
  {
    heading: '9. Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. Material changes will be reflected by updating the "Last updated" date above and, where appropriate, through additional notice.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-14 bg-gradient-to-br from-[#0a1628] via-[#0f2744] to-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
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
              <h2 className="text-2xl font-semibold text-foreground mb-3">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For any privacy questions or to exercise your rights, reach our team at{' '}
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
