import Link from "next/link"
import { ArrowRight, Check, Mail, Building2, Clock, MessageSquare, Star } from "lucide-react"
import { Container, Eyebrow, Reveal, IconTile, SectionHeader } from "@/components/site/primitives"
import PageHero from "@/components/site/page-hero"
import CtaBand from "@/components/site/cta-band"
import SolutionsEnquiryForm from "@/components/site/solutions-enquiry-form"
import { Art } from "@/components/site/art"
import { pageMeta } from "@/lib/seo"
import { legacy, otherSolutions } from "@/lib/legacy-content"
import content from "@/lib/solutions-content.json"

export const metadata = pageMeta("/solutions", {
  title: "Solutions | PayNext",
  description:
    "Our unique service solutions help you offer your customers a swift transaction experience — from point-of-sale to payments and loyalty programs. One-stop for all things transactional.",
})

// ── DATA ─────────────────────────────────────────────────────────────────────

const coreSolutions = [
  {
    title: "POS / MPOS",
    desc: "Our gamut of POS solutions like deployment, management, and transaction processing services, amongst others offer a swifter experience to leading banks and key financial institutions.",
    href: "/products/POS-MPOS", art: "pos",
  },
  {
    title: "E-Commerce Gateway",
    desc: "Our e-commerce gateway solution takes place in real-time, giving you secure and safe transactions. We help you take your business to new markets, boost your conversion rates by offering you a localised shopping experience.",
    href: "/products/E-commerceGateway", art: "ecom",
  },
  {
    title: "Bharat QR & UPI",
    desc: "We provide Bharat QR services to all our merchants, which allows customers to make payments to you with the help of a dynamic or static QR code.",
    href: "/products/BharatQR-UPI", art: "qr",
  },
  {
    title: "NETC",
    desc: content.netc.hero.join(" "),
    href: "/solutions/netc-switching", art: "toll",
  },
  {
    title: "NCMC",
    desc: content.ncmc.hero.join(" "),
    href: "/solutions/ncmc", art: "transit",
  },
  {
    title: "ATM Switching",
    desc: content.atm.hero.join(" "),
    href: "/solutions/atm-switching", art: "atm",
  },
]

const techItems = [
  {
    title: "Cloud-Native / On-Premise / Hybrid Deployment",
  },
  {
    title: "High TPS Capability",
  },
  {
    title: "Load Balancing & Failover",
  },
  {
    title: "Secure API Framework",
  },
  {
    title: "Real-time Monitoring",
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
  { label: "Aggregators" },
  { label: "Orchestration-Only" },
  { label: "PayNext", desc: "Unified Acquiring + Issuance + Orchestration", highlight: true },
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


// ── PAGE ─────────────────────────────────────────────────────────────────────

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Solutions"
        title="Swift Transactions,"
        highlight="Every Time"
        lead={legacy.coreIntro}
        primary={{ label: "Get in Touch", href: "#contact" }}
        secondary={{ label: "Explore Platforms", href: "/products" }}
        chips={coreSolutions.map((s) => s.title)}
      />

      {/* Core Solutions */}
      <section className="py-24">
        <Container>
          <SectionHeader
            eyebrow="Core Solutions"
            title="Our Flagship"
            highlight="Service Offerings"
          />
          {/* Design 2 alternating illustration + text rows */}
          <div className="mt-16 space-y-20 lg:space-y-24">
            {coreSolutions.map((s, i) => (
              <div key={s.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <Reveal variant={i % 2 ? "right" : "left"} className={`parallax mx-auto w-full max-w-lg ${i % 2 ? "lg:order-2" : ""}`}>
                  <div className="parallax art-zoom"><Art kind={s.art} /></div>
                </Reveal>
                <Reveal variant={i % 2 ? "left" : "right"} className="min-w-0">
                  <span className="font-mono text-xs uppercase tracking-wider text-brand">0{i + 1}</span>
                  <h3 className="mt-2 text-3xl leading-tight text-foreground sm:text-[2.2rem]">{s.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{s.desc}</p>
                  <Link
                    href={s.href}
                    className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-brand transition-all hover:gap-3"
                  >
                    Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology & Architecture */}
      <section className="surface-lavender py-24">
        <Container>
          <SectionHeader
            eyebrow="Technology & Architecture"
            title="Built for"
            highlight="Enterprise Scale"
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
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
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
                  {c.desc && <div className="mt-2 text-xs text-foreground">{c.desc}</div>}
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Other Solutions — old website "Speed shapes your NEXT experience" page, all 23 services */}
      <section id="other-solutions" className="surface-lavender pattern-dots scroll-mt-24 py-24">
        <Container>
          <SectionHeader eyebrow="Other Solutions" title={legacy.otherTitle} />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherSolutions.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.05} className="hover-card flex flex-col rounded-2xl border border-border bg-card p-6">
                <span className="font-mono text-xs font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
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
            lead="For Enterprise Inquiries: Email: info@paynext.co.in · Solutions Team Response Time: 24–48 Hours"
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
