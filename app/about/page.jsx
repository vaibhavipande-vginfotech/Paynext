import Image from 'next/image'
import { Target, Eye, ShieldCheck, Zap, Search, Cpu, Check } from 'lucide-react'
import { Container, Eyebrow, Reveal, IconTile } from '@/components/site/primitives'
import { CountUp } from '@/components/site/motion'
import PageHero from '@/components/site/page-hero'
import CtaBand from '@/components/site/cta-band'
import { about, brand, stats, statsExtra, clients, compliance } from '@/lib/site-content'
import { pageMeta } from '@/lib/seo'
import { legacy } from '@/lib/legacy-content'

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
      <PageHero
        eyebrow="PayNext"
        title="About"
        highlight="Us"
        lead={about.intro}
        aside={
          // Design 1 "About" hero: stat cards on the right
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/85">Trust &amp; Scale Metrics</p>
            <dl className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-white p-5 text-[#1A1033] shadow-[0_16px_40px_-20px_rgba(18,8,46,0.5)]">
                  <dd className="whitespace-nowrap text-2xl font-bold text-[#6A1BEA] sm:text-3xl"><CountUp value={s.value} /></dd>
                  <dt className="mt-1 text-xs text-[#574F70]">{s.label}</dt>
                </div>
              ))}
            </dl>
            <ul className="mt-4 flex flex-wrap gap-2">
              {statsExtra.map((s) => (
                <li key={s} className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/20">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" /> {s}
                </li>
              ))}
            </ul>
          </div>
        }
      />

      {/* Old website About page — "Speed is in our DNA" (verbatim) */}
      <section className="pattern-grid py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal variant="left">
            <Eyebrow>About PayNext</Eyebrow>
            <h2 className="mt-4 text-4xl leading-tight text-foreground sm:text-5xl">
              Speed is in our <span className="text-brand-gradient">DNA</span>
            </h2>
            <div className="mt-8 space-y-4">
              {legacy.dna.questions.map((q) => (
                <p key={q} className="border-l-[3px] border-[#8030FD] pl-5 text-lg font-medium italic text-brand sm:text-xl">{q}</p>
              ))}
            </div>
          </Reveal>
          <Reveal variant="right" className="rounded-3xl border border-border bg-card p-8 text-lg leading-relaxed text-muted-foreground shadow-[0_24px_60px_-32px_rgba(79,0,205,0.35)] sm:p-10">
            {legacy.dna.text}
          </Reveal>
        </Container>
      </section>

      <section className="surface-lavender py-24">
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

      <section className="py-24">
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

      <section className="surface-lavender py-24">
        <Container>
          <Reveal>
            <Eyebrow>Milestones</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-[2.6rem]">Our journey</h2>
          </Reveal>
          {/* Design 1 "Our journey" grid */}
          <ol className="mt-12 grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, i) => (
              <Reveal as="li" key={m.year} delay={(i % 4) * 0.05} className="border-t-[3px] border-t-[#8030FD] pt-4">
                <p className="text-xl font-bold text-brand">{m.year}</p>
                <h3 className="mt-1 font-semibold text-foreground">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.description}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {[
        { title: 'Meet the Core Team', people: team },
        { title: 'Meet the Promoters', people: promoters },
      ].map((group) => (
        <section key={group.title} className="py-24 even:bg-muted">
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
