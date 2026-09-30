import Link from "next/link"
import { ArrowRight, Check, Mail, Building2, Clock, MessageSquare, Star } from "lucide-react"
import { Container, Eyebrow, Reveal, IconTile, SectionHeader } from "@/components/site/primitives"
import PageHero from "@/components/site/page-hero"
import CtaBand from "@/components/site/cta-band"
import SolutionsEnquiryForm from "@/components/site/solutions-enquiry-form"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta("/solutions", {
  title: "Solutions | PayNext",
  description:
    "Our unique service solutions help you offer your customers a swift transaction experience — from point-of-sale to payments and loyalty programs. One-stop for all things transactional.",
})

// ── DATA ─────────────────────────────────────────────────────────────────────

const coreSolutions = [
  {
    title: "POS / MPOS",
    desc: "Simplify your business processes with our comprehensive POS solutions. We offer transaction processing services, deployment and management, merchant analytics, reconciliation & back-office processing.",
    href: "/products/POS-MPOS",
  },
  {
    title: "E-Commerce Gateway",
    desc: "Convenient and cost-effective e-commerce payment solutions. Our gateway solution takes place in real-time, giving you secure and safe transactions with best-in-class fraud detection.",
    href: "/products/E-commerceGateway",
  },
  {
    title: "Bharat QR & UPI",
    desc: "We provide Bharat QR services to all our merchants, allowing customers to make payments via dynamic or static QR codes. No POS machine required — simply use the QR code on your cash counter.",
    href: "/products/BharatQR-UPI",
  },
  {
    title: "NETC",
    desc: "NPCI-certified NETC switching for FASTag issuance and acquiring. Enable seamless electronic toll collection with real-time authorization, reconciliation, and settlement across the national tolling network.",
    href: "/solutions/netc-switching",
  },
  {
    title: "NCMC",
    desc: "Power next-generation mobility payments with NCMC switching. One interoperable card for transit, retail, and toll — with contactless acceptance, offline support, and RuPay-compliant processing.",
    href: "/solutions/ncmc",
  },
  {
    title: "ATM Switching",
    desc: "Modernize your ATM network with secure, scalable switching. High-availability transaction routing, EMV and PIN management, dispute handling, and end-to-end reconciliation for banks and white-label operators.",
    href: "/solutions/atm-switching",
  },
]

const techItems = [
  {
    title: "Cloud-Native / On-Premise / Hybrid Deployment",
    desc: "Flexible deployment options to match your infrastructure requirements",
  },
  {
    title: "High TPS Capability",
    desc: "Process thousands of transactions per second with minimal latency",
  },
  {
    title: "Load Balancing & Failover",
    desc: "Automatic traffic distribution and failover for 99.99% uptime",
  },
  {
    title: "Secure API Framework",
    desc: "Enterprise-grade security with OAuth, encryption, and rate limiting",
  },
  {
    title: "Real-time Monitoring",
    desc: "Comprehensive dashboards and alerts for complete visibility",
  },
]

const differentiators = [
  "Core Acquiring Switch",
  "Card Issuance Processing",
  "Acquiring BAU Management",
  "Transaction-Level Financial Intelligence",
  "Dynamic Multi-Bank Optimization",
]

const comparison = [
  { label: "Aggregators", desc: "Limited to payment aggregation only" },
  { label: "Orchestration-Only", desc: "Routing only, no acquiring/issuance" },
  { label: "PayNext", desc: "Unified Acquiring + Issuance + Orchestration", highlight: true },
]

const additionalSolutions = [
  "Merchant Smart Onboarding",
  "PCI Compliance",
  "Portfolio Management",
  "Transaction Processing",
  "Faster Settlement & Funding",
  "Chargeback Support",
  "Merchant Statements",
  "E-Commerce Acquiring",
  "Analytics / Business Intelligence",
  "Merchant Portal & Advanced Reporting",
  "Advanced Fraud Management",
  "Tokenization & E2E Encryption",
  "Integration with Accounting / ERP",
  "Integrated POS System",
  "Loyalty Programs Support",
  "Mobile Recharge",
  "Consumer Loan at POS",
  "Omni-Channel Processing & Reporting",
  "BBPS Support",
]

const contactInfo = [
  {
    icon: Building2,
    title: "Head Office",
    lines: ["PayNext Private Limited", "Mumbai, India"],
  },
  {
    icon: Mail,
    title: "Enterprise Inquiries",
    lines: ["info@paynext.co.in"],
  },
  {
    icon: Clock,
    title: "Solutions Team Response Time",
    lines: ["24–48 Hours"],
  },
]

const nextSteps = [
  {
    step: "01",
    title: "We review your inquiry",
    desc: "Our solutions team reads every message and matches you with the right expert.",
  },
  {
    step: "02",
    title: "Response within 24–48 hrs",
    desc: "Expect a reply at info@paynext.co.in with initial guidance or a meeting invite.",
  },
  {
    step: "03",
    title: "Technical Consultation",
    desc: "We schedule a deep-dive session to understand your infrastructure requirements.",
  },
  {
    step: "04",
    title: "Tailored Proposal",
    desc: "Receive a solution proposal with implementation timeline — typically just 1 week.",
  },
]

// ── PAGE ─────────────────────────────────────────────────────────────────────

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Solutions"
        title="Swift Transactions,"
        highlight="Every Time"
        lead="Our unique service solutions help you offer your customers a swift transaction experience — from point-of-sale to payments and loyalty programs. One-stop for all things transactional."
        primary={{ label: "Get in Touch", href: "#contact" }}
        secondary={{ label: "Explore Platforms", href: "/products" }}
      />

      {/* Core Solutions */}
      <section className="py-24">
        <Container>
          <SectionHeader
            eyebrow="Core Solutions"
            title="Our Flagship"
            highlight="Service Offerings"
            lead="POS, E-Commerce, and QR / UPI — the three pillars of our merchant-facing payment infrastructure."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreSolutions.map((s, i) => (
              <Reveal
                key={s.title}
                delay={(i % 3) * 0.08}
                className="hover-card flex flex-col rounded-3xl border border-border bg-card p-8 hover:border-brand/40"
              >
                <span className="text-xs text-muted-foreground">0{i + 1}</span>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{s.desc}</p>
                <Link
                  href={s.href}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 self-start font-semibold text-brand transition-all hover:gap-3"
                >
                  Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology & Architecture */}
      <section className="border-y border-border bg-muted/50 py-24">
        <Container>
          <SectionHeader
            eyebrow="Technology & Architecture"
            title="Built for"
            highlight="Enterprise Scale"
            lead="Our payment infrastructure is designed to handle mission-critical workloads with uncompromising reliability."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {techItems.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 3) * 0.08}
                className="hover-card rounded-3xl border border-border bg-card p-8"
              >
                <div className="flex items-start gap-4">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-growth" aria-hidden="true" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Strategic Differentiation */}
      <section className="py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="hover-chip mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-brand-soft px-4 py-1.5">
              <Star className="h-4 w-4 text-brand" aria-hidden="true" />
              <Eyebrow>Strategic Differentiation</Eyebrow>
            </div>
            <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              PayNext = <span className="text-brand-gradient">Unified Infrastructure Partner</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Unlike aggregators or orchestration-only providers, PayNext delivers end-to-end payment infrastructure
            </p>
          </Reveal>

          <div className="mx-auto mt-14 max-w-5xl">
            <Reveal className="hover-card rounded-3xl border border-border bg-card p-6 sm:p-8">
              <p className="text-center text-lg text-foreground">
                Unlike aggregators or orchestration-only providers, PayNext delivers:
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {differentiators.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-muted/50 p-4 text-sm text-foreground"
                  >
                    <Check className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {comparison.map((c, i) => (
                <Reveal
                  key={c.label}
                  delay={i * 0.08}
                  className={`rounded-3xl border p-6 text-center ${
                    c.highlight ? "border-brand/40 bg-brand-soft" : "border-border bg-muted/50"
                  }`}
                >
                  <div
                    className={`text-sm ${c.highlight ? "font-semibold text-brand" : "text-muted-foreground"}`}
                  >
                    {c.label}
                  </div>
                  <div className={`mt-2 text-xs ${c.highlight ? "text-foreground" : "text-muted-foreground"}`}>
                    {c.desc}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Additional Solutions */}
      <section className="border-y border-border bg-muted/50 py-24">
        <Container>
          <SectionHeader
            eyebrow="Other Solutions"
            title="A Complete Suite of"
            highlight="Payment Services"
            lead="From fraud management to loyalty programs — every service you need to run a complete payment operation."
          />
          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {additionalSolutions.map((s, i) => (
              <Reveal
                key={s}
                delay={(i % 3) * 0.05}
                className="hover-card flex items-center gap-3 rounded-2xl border border-border bg-card p-4 text-sm font-medium text-foreground"
              >
                <Check className="h-4 w-4 shrink-0 text-growth" aria-hidden="true" />
                {s}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24 py-24">
        <Container>
          <SectionHeader
            eyebrow="Get in Touch"
            title="Ready to Get"
            highlight="Started?"
            lead="Reach out to our solutions team and we'll help you find the right service for your business — response within 24–48 hours."
          />

          <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Contact Info */}
            <div className="min-w-0 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                {contactInfo.map((info, i) => (
                  <Reveal
                    key={info.title}
                    delay={i * 0.06}
                    className={`hover-card rounded-3xl border border-border bg-card p-6 ${i === 0 ? "sm:col-span-2" : ""}`}
                  >
                    <IconTile icon={info.icon} className="mb-4" />
                    <h3 className="font-semibold text-foreground">{info.title}</h3>
                    <div className="mt-2">
                      {info.lines.map((line) => (
                        <p key={line} className="break-words text-sm leading-relaxed text-muted-foreground">
                          {line}
                        </p>
                      ))}
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal className="hover-card rounded-3xl border border-border bg-card p-6 sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-brand" aria-hidden="true" />
                  <h3 className="text-xl font-semibold text-foreground">What Happens Next?</h3>
                </div>
                <ol className="space-y-5">
                  {nextSteps.map((item) => (
                    <li key={item.step} className="flex items-start gap-4">
                      <span className="mt-0.5 font-mono text-sm font-semibold text-brand">{item.step}</span>
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.title}</p>
                        <p className="mt-0.5 text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>

              <Reveal className="flex items-center gap-4 rounded-3xl border border-border bg-brand-soft p-6">
                <IconTile icon={Mail} className="shrink-0 bg-card" />
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">For Enterprise Inquiries</p>
                  <a
                    href="mailto:info@paynext.co.in"
                    className="inline-flex min-h-11 items-center break-all font-semibold text-brand hover:underline"
                  >
                    info@paynext.co.in
                  </a>
                </div>
              </Reveal>

              <Reveal className="hover-card flex items-center gap-4 rounded-3xl border border-border bg-card p-6">
                <IconTile icon={MessageSquare} className="shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">For Technical Discussions</p>
                  <p className="text-sm font-medium text-foreground">
                    Schedule a Technical Consultation through our website
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Contact Form */}
            <Reveal delay={0.08} className="hover-card min-w-0 rounded-3xl border border-border bg-card p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl font-semibold text-foreground">Send us a Message</h2>
              <p className="mb-8 mt-2 text-muted-foreground">
                Fill out the form and our solutions team will get back to you within 24–48 hours.
              </p>
              <SolutionsEnquiryForm />
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
