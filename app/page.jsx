import Link from "next/link"
import { ArrowRight, Check, ShieldCheck, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container, Eyebrow, Reveal, IconTile } from "@/components/site/primitives"
import { Marquee, CircleReveal, Globe, CountUp } from "@/components/site/motion"
import PlatformStack from "@/components/site/platform-stack"
import HomeHero from "@/components/site/home-hero"
import CtaBand from "@/components/site/cta-band"
import {
  brand,
  platform,
  engines,
  stats,
  statsExtra,
  technology,
  compliance,
  clients,
  differentiation,
  audiences,
  channelChips,
  capabilityChips,
} from "@/lib/site-content"
import { pageMeta } from "@/lib/seo"

const chipTone = ["bg-brand-soft text-brand", "bg-[var(--brand-soft)] text-accent", "bg-muted text-foreground"]

function Chip({ label, i }) {
  return (
    <span className="hover-chip flex items-center gap-3 whitespace-nowrap rounded-full border border-border bg-card py-2 pl-2 pr-5 text-sm text-foreground">
      <span className={`flex h-8 w-8 items-center justify-center rounded-full text-[0.65rem] font-semibold ${chipTone[i % 3]}`}>
        {label.slice(0, 2).toUpperCase()}
      </span>
      {label}
    </span>
  )
}

export const metadata = pageMeta("/", {
  title: { absolute: "PayNext — Certified Technology Service Provider (TSP)" },
  description: brand.positioning,
})

export default function HomePage() {
  return (
    <>
      {/* HERO — PayNext (the company) first, per client; three animation styles to compare */}
      <HomeHero />

      {/* MOVING CHIP ROWS */}
      <section className="space-y-4 border-y border-border bg-muted/50 py-10" aria-label="Channels and capabilities">
        <Marquee speed={45}>
          {channelChips.map((c, i) => (
            <Chip key={c} label={c} i={i} />
          ))}
        </Marquee>
        <Marquee speed={55} reverse>
          {capabilityChips.map((c, i) => (
            <Chip key={c} label={c} i={i + 1} />
          ))}
        </Marquee>
      </section>

      {/* TRUST & SCALE METRICS */}
      <section className="py-24">
        <Container>
          <Reveal className="text-center">
            <Eyebrow>Trust &amp; Scale Metrics</Eyebrow>
          </Reveal>
          <dl className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="hover-card rounded-3xl border border-border bg-card p-7 text-center">
                <dd className="text-3xl font-semibold text-brand-gradient sm:text-4xl">
                  <CountUp value={s.value} />
                </dd>
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

      {/* CORE PLATFORMS OVERVIEW */}
      <section className="py-28">
        <Container>
          <Reveal className="text-center">
            <Eyebrow>Core Platforms Overview</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">PerseusPay · VISTA · Europa</h2>
          </Reveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {engines.map((e, i) => (
              <Reveal key={e.id} delay={i * 0.1} className="hover-card flex flex-col rounded-3xl border border-border bg-card p-8">
                <IconTile icon={e.icon} />
                <h3 className="mt-6 text-2xl font-semibold text-foreground">{e.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.role}</p>
                <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm text-foreground/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-6 text-sm font-medium italic text-brand">{e.tagline}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* STRATEGIC DIFFERENTIATION */}
      <section className="border-y border-border bg-muted/50 py-24">
        <Container>
          <Reveal className="mx-auto max-w-4xl text-center">
            <Eyebrow>Strategic Differentiation</Eyebrow>
            <h2 className="mt-5 text-2xl font-semibold leading-snug text-foreground sm:text-4xl">
              PayNext = <span className="text-brand-gradient">Unified Acquiring + Issuance + Orchestration</span> Infrastructure Partner
            </h2>
            <p className="mt-6 text-muted-foreground">{differentiation.intro}</p>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {differentiation.points.map((pt, i) => (
              <Reveal key={pt} delay={i * 0.06} className="hover-card rounded-2xl border border-border bg-card p-5 text-center">
                <span className="text-xs text-platinum">0{i + 1}</span>
                <p className="mt-2 font-medium text-foreground">{pt}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* PAYNEXT+ — the offering, introduced after the company (dark circle opens on scroll) */}
      <CircleReveal>
        <Container className="py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
              {platform.name} · {platform.kicker}
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
              {platform.name} — The international payments <span className="text-[#7CC0F0]">operating platform</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/70 sm:text-lg">{platform.lead}</p>
            <Link
              href="/platform"
              className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-[#0F2D4E] transition-opacity hover:opacity-90"
            >
              Explore PayNext+ <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mx-auto mt-12 max-w-5xl">
            <PlatformStack tone="dark" />
          </div>
          <ol className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-center gap-3 text-sm sm:flex-row">
            {platform.ambition.map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                <span
                  className={`rounded-full border px-4 py-2 ${
                    i === 2 ? "border-[#2489D8] bg-[#2489D8] text-white" : "border-white/20 text-white/80"
                  }`}
                >
                  {step}
                </span>
                {i < 2 && <ArrowRight className="hidden h-4 w-4 text-white/40 sm:block" aria-hidden="true" />}
              </li>
            ))}
          </ol>
          <p className="mt-5 text-center text-xs text-white/50">{platform.ambitionLine}</p>
        </Container>
      </CircleReveal>

      {/* TECHNOLOGY + COMPLIANCE */}
      <section className="py-24">
        <Container className="grid gap-5 lg:grid-cols-2">
          <Reveal variant="left" className="hover-card rounded-3xl border border-border bg-card p-8 sm:p-10">
            <IconTile icon={Server} />
            <h2 className="mt-6 text-2xl font-semibold text-foreground">Technology &amp; Architecture</h2>
            <ul className="mt-6 space-y-3">
              {technology.map((t) => (
                <li key={t} className="flex gap-3 text-foreground/90">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal variant="right" delay={0.1} className="hover-card rounded-3xl border border-border bg-card p-8 sm:p-10">
            <IconTile icon={ShieldCheck} />
            <h2 className="mt-6 text-2xl font-semibold text-foreground">Compliance &amp; Network Ecosystem</h2>
            <p className="mt-6 text-lg text-foreground/90">{compliance.networks}</p>
            <p className="mt-3 text-lg text-foreground/90">{compliance.pci}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Visa", "Mastercard", "RuPay", "NPCI", "PCI-DSS"].map((n) => (
                <span key={n} className="hover-chip rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground">
                  {n}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* GLOBAL POSITIONING — rounded violet banner with globe */}
      <section className="pb-24">
        <Container>
          <Reveal variant="scale" className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(160deg,#0F2D4E,#1A73B8)] px-6 pb-14 pt-10 text-center text-white sm:px-12">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_70%_at_50%_0%,rgba(124,192,240,0.45),transparent_70%)]" />
            <div className="relative">
              <Globe size={200} className="mx-auto" />
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-white/70">{platform.kicker}</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{platform.name}</h2>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {audiences.map((a) => (
                  <span key={a.id} className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium backdrop-blur">
                    <a.icon className="h-4 w-4 text-[#7CC0F0]" aria-hidden="true" /> {a.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CLIENT ECOSYSTEM — moving strip */}
      <section className="border-y border-border py-16">
        <Reveal className="text-center">
          <Eyebrow>Client Ecosystem</Eyebrow>
        </Reveal>
        <Marquee speed={50} className="mt-10">
          {clients.map((c) => (
            <span
              key={c}
              className="hover-card whitespace-nowrap rounded-2xl border border-border bg-card px-8 py-5 text-base font-medium text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </Marquee>
      </section>

      <CtaBand />
    </>
  )
}
