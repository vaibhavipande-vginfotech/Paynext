import Image from 'next/image'
import { Target, Eye, ShieldCheck, Zap, Search, Cpu, Check } from 'lucide-react'
import { Container, Eyebrow, Reveal, IconTile } from '@/components/site/primitives'
import { CountUp } from '@/components/site/motion'
import PageHero from '@/components/site/page-hero'
import CtaBand from '@/components/site/cta-band'
import { about, brand, stats, statsExtra, clients, compliance } from '@/lib/site-content'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta("/about", {
  title: 'About Us | PayNext',
  description: about.intro,
})

const valueIcons = [ShieldCheck, Zap, Search, Cpu]

// Content from the current website — approved by the client (Sankar, 29 Sep 2026) for this
// iteration; to be refined in the next iteration.
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

function MemberAvatar({ name, image }) {
  if (image) {
    return (
      <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary/20">
        <Image
          src={image}
          alt={`Photo of ${name}`}
          width={80}
          height={80}
          className="avatar-img w-full h-full object-cover object-top"
        />
      </div>
    )
  }

  return (
    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 ring-2 ring-primary/20">
      <span className="text-2xl font-semibold text-primary">{name.charAt(0)}</span>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="PayNext" title="About" highlight="Us" lead={about.intro} />

      <section className="py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">{brand.positioning}</Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {[
              { icon: Eye, title: 'Vision', text: about.vision },
              { icon: Target, title: 'Mission', text: about.mission },
            ].map((b, i) => (
              <Reveal key={b.title} variant={i % 2 ? "right" : "left"} delay={i * 0.08} className="hover-card rounded-3xl border border-border bg-card p-10">
                <IconTile icon={b.icon} />
                <h2 className="mt-6 text-2xl font-semibold text-foreground">{b.title}</h2>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{b.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-muted/50 py-24">
        <Container>
          <Reveal className="text-center">
            <Eyebrow>Core Values</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((v, i) => (
              <Reveal key={v} delay={i * 0.06} className="hover-card rounded-2xl border border-border bg-card p-7 text-center">
                <IconTile icon={valueIcons[i]} className="mx-auto" />
                <h3 className="mt-5 text-lg font-semibold text-foreground">{v}</h3>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal className="text-center">
            <Eyebrow>Trust &amp; Scale Metrics</Eyebrow>
          </Reveal>
          <dl className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} className="hover-card rounded-3xl border border-border bg-card p-7 text-center">
                <dd className="text-3xl font-semibold text-brand-gradient sm:text-4xl"><CountUp value={s.value} /></dd>
                <dt className="mt-3 text-sm text-muted-foreground">{s.label}</dt>
              </Reveal>
            ))}
          </dl>
          <Reveal className="mt-6 flex flex-wrap justify-center gap-3">
            {statsExtra.map((s) => (
              <span key={s} className="hover-chip flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
                <Check className="h-4 w-4 text-growth" aria-hidden="true" /> {s}
              </span>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-border bg-muted/50 py-24">
        <Container>
          <Reveal className="text-center">
            <Eyebrow>Milestones</Eyebrow>
          </Reveal>
          <ol className="relative mx-auto mt-12 max-w-3xl space-y-4 border-l border-border pl-8">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={(i % 3) * 0.05} className="hover-card relative rounded-2xl border border-border bg-card p-6">
                <span className="absolute -left-[41px] top-7 h-4 w-4 rounded-full border-4 border-background bg-primary" aria-hidden="true" />
                <p className="text-sm font-semibold text-brand">{m.year}</p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.description}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {[
        { title: 'Meet the Core Team', people: team },
        { title: 'Meet the Promoters', people: promoters },
      ].map((group) => (
        <section key={group.title} className="py-24 even:border-y even:border-border even:bg-muted/50">
          <Container>
            <Reveal className="text-center">
              <Eyebrow>{group.title}</Eyebrow>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {group.people.map((m, i) => (
                <Reveal key={m.name} variant={i % 2 ? "right" : "left"} delay={(i % 2) * 0.08} className="hover-card min-w-0 rounded-3xl border border-border bg-card p-6 sm:p-8">
                  <div className="flex flex-col items-start gap-4 min-[380px]:flex-row min-[380px]:items-center min-[380px]:gap-5">
                    <MemberAvatar name={m.name} image={m.image} />
                    <div className="min-w-0 break-words">
                      <h3 className="text-lg font-semibold text-foreground">{m.name}</h3>
                      <p className="mt-1 text-sm font-medium text-brand">{m.role}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <section className="border-t border-border py-24">
        <Container className="grid gap-5 lg:grid-cols-2">
          <Reveal className="hover-card rounded-3xl border border-border bg-card p-8">
            <Eyebrow>Client Ecosystem</Eyebrow>
            <p className="mt-4 leading-relaxed text-foreground/90">{clients.join(', ')}</p>
          </Reveal>
          <Reveal delay={0.08} className="hover-card rounded-3xl border border-border bg-card p-8">
            <Eyebrow>Compliance &amp; Network Ecosystem</Eyebrow>
            <p className="mt-4 text-foreground/90">{compliance.networks}</p>
            <p className="mt-2 text-foreground/90">{compliance.pci}</p>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
