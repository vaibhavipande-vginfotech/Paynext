import Link from "next/link"
import { ArrowRight, Check, Server, ShieldCheck } from "lucide-react"
import { Container, Eyebrow, Reveal } from "@/components/site/primitives"
import { CountUp, Marquee } from "@/components/site/motion"
import HomeHero from "@/components/site/home-hero"
import SolutionsTabs from "@/components/site/solutions-tabs"
import CtaBand from "@/components/site/cta-band"
import {
  brand,
  platform,
  pillars,
  engines,
  stats,
  statsExtra,
  technology,
  compliance,
  faqHighlights,
  clients,
  layers,
  principles,
  channelChips,
  capabilityChips,
  PLACEHOLDER,
  differentiation,
  audiences,
} from "@/lib/site-content"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta("/", {
  title: { absolute: "PayNext — Certified Technology Service Provider (TSP)" },
  description: brand.positioning,
})

// Phase 3 home page: a mix of Design 1 "Classic" (structure) and Design 2 "Bold" (hero, tabs, CTA).
// All text comes from the client documents (see lib/site-content.js for sources).
const networks = ["Visa", "Mastercard", "RuPay", "NPCI"]

function GreenCheck() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-growth">
      <Check className="h-3 w-3 text-white dark:text-[#12082E]" strokeWidth={3} aria-hidden="true" />
    </span>
  )
}

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* STATS — Classic card overlapping the hero */}
      <section className="relative z-10 -mt-16" aria-label="Trust and scale metrics">
        <Container>
          <Reveal className="rounded-3xl border border-border bg-card p-2 shadow-[0_24px_60px_-28px_rgba(79,0,205,0.35)]">
            <Eyebrow className="px-5 pt-4 sm:px-7">Trust &amp; Scale Metrics</Eyebrow>
            <dl className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-5 py-6 sm:px-7 ${i % 2 ? "border-l border-border" : ""} ${i > 1 ? "border-t border-border lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
                >
                  <dd className="whitespace-nowrap text-2xl font-bold text-brand sm:text-3xl xl:text-[2.15rem] xl:leading-tight">
                    <CountUp value={s.value} />
                  </dd>
                  <dt className="mt-1 text-sm text-muted-foreground">{s.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal className="mt-5 flex flex-wrap justify-center gap-3">
            {statsExtra.map((s) => (
              <span key={s} className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground">
                <GreenCheck /> {s}
              </span>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* NETWORKS + CLIENTS — Classic */}
      <section className="pb-6 pt-16">
        <Container className="text-center">
          <Reveal>
            <Eyebrow>Compliance &amp; Network Ecosystem</Eyebrow>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              {compliance.networks} {compliance.pci}
            </p>
            <ul className="mt-6 flex flex-wrap justify-center gap-2.5">
              {[...networks, "PCI-DSS Compliant"].map((n) => (
                <li key={n} className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground">
                  <ShieldCheck className="h-4 w-4 text-brand" aria-hidden="true" /> {n}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="mt-14">
            <Eyebrow>Client Ecosystem</Eyebrow>
            <ul className="mx-auto mt-6 flex max-w-5xl flex-wrap justify-center gap-x-9 gap-y-4">
              {clients.map((c) => (
                <li key={c} className="text-lg font-bold tracking-tight text-muted-foreground transition-colors hover:text-foreground">
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* CHANNELS + CAPABILITIES — moving chip rows (terms from the master doc and deck) */}
      <section className="surface-lavender mt-16 space-y-3 border-y border-border py-8" aria-label="Channels and capabilities">
        <Marquee speed={45}>
          {channelChips.map((c) => (
            <span key={c} className="whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground">
              {c}
            </span>
          ))}
        </Marquee>
        <Marquee speed={55} reverse>
          {capabilityChips.map((c) => (
            <span key={c} className="whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
              {c}
            </span>
          ))}
        </Marquee>
      </section>

      {/* CORE PLATFORMS — Classic cards */}
      <section className="py-24">
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow>Core Platforms Overview</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-[2.6rem]">PerseusPay · VISTA · Europa</h2>
            <p className="mt-4 text-lg text-muted-foreground">{brand.statement}</p>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {engines.map((e, i) => (
              <Reveal
                key={e.id}
                delay={i * 0.08}
                className="hover-card flex flex-col rounded-3xl border border-border bg-card p-7 shadow-[0_10px_30px_-20px_rgba(79,0,205,0.25)]"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#4F00CD,#8030FD)] text-lg font-bold text-white">
                    {e.name[0]}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-bold text-foreground">{e.name}</h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{e.role}</p>
                <ul className="mt-6 space-y-3 border-t border-border pt-6">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-growth" strokeWidth={2.5} aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-semibold italic text-brand">{e.tagline}</p>
                <Link href={`/products#${e.id}`} className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand hover:underline">
                  Explore {e.name} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* SOLUTIONS — Bold tabs with illustrations */}
      <section className="pb-24">
        <Container>
          <Reveal className="mx-auto mb-10 max-w-3xl text-center">
            <Eyebrow>Products &amp; Solutions</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-[2.6rem]">One Switch. Every Channel.</h2>
            <p className="mt-4 text-lg text-muted-foreground">Multi-channel acquiring (POS, IPG, NCMC, NETC, Micro ATM, UPI)</p>
          </Reveal>
          <Reveal>
            <SolutionsTabs />
          </Reveal>
        </Container>
      </section>

      {/* STRATEGIC DIFFERENTIATION — Classic two-column with comparison card */}
      <section className="surface-lavender py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal variant="left">
            <Eyebrow>Strategic Differentiation</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-[2.4rem]">
              PayNext = <span className="text-brand-gradient">Unified Acquiring + Issuance + Orchestration</span> Infrastructure Partner
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">{differentiation.intro}</p>
          </Reveal>
          <Reveal variant="right" className="overflow-hidden rounded-3xl border border-border bg-card">
            <div className="flex items-center justify-between bg-[linear-gradient(120deg,#4F00CD,#8030FD)] px-6 py-4 text-sm font-semibold text-white">
              <span>Capability</span>
              <span>PayNext</span>
            </div>
            <ul>
              {differentiation.points.map((pt) => (
                <li key={pt} className="flex items-center justify-between gap-4 border-t border-border px-6 py-4 first:border-t-0">
                  <span className="font-medium text-foreground">{pt}</span>
                  <span className="flex items-center gap-2 text-sm font-semibold text-growth">
                    <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" /> Yes
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* PAYNEXT+ — Classic violet panel with the five pillars */}
      <section className="py-24">
        <Container>
          <Reveal variant="scale" className="hero-violet relative overflow-hidden rounded-[2rem] px-6 py-14 sm:px-12">
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-white/[0.07]" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/85">
                {platform.name} · {platform.label}
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl leading-tight sm:text-[2.6rem]">
                {platform.name} — {platform.title}
              </h2>
              <p className="mt-4 max-w-2xl text-white/90 sm:text-lg">{platform.lead}</p>
              <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {pillars.map((p, i) => (
                  <li key={p.id}>
                    <Link href={`/platform#${p.id}`} className="block h-full rounded-2xl bg-white p-5 text-[#1A1033] transition-transform hover:-translate-y-1 dark:bg-[#1c1140] dark:text-white dark:ring-1 dark:ring-white/10">
                      <span className="font-mono text-xs text-[#4F00CD] dark:text-[#C4A8FF]">0{i + 1}</span>
                      <p className="mt-2 text-lg font-bold">{p.name}</p>
                      <ul className="mt-2 space-y-1 text-xs leading-snug text-[#574F70] dark:text-[#C9BFEA]">
                        {p.lines.map((l) => (
                          <li key={l}>{l}</li>
                        ))}
                      </ul>
                    </Link>
                  </li>
                ))}
              </ol>
              <ul className="mt-3 grid gap-3 sm:grid-cols-3">
                {layers.map((l) => (
                  <li key={l.id}>
                    <Link href={l.href} className="block h-full rounded-2xl border border-white/25 bg-white/10 p-5 text-white backdrop-blur transition-colors hover:bg-white/15">
                      <p className="flex items-center gap-2 font-bold">
                        <l.icon className="h-4 w-4" aria-hidden="true" /> {l.name}
                      </p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/85">{l.tag}</p>
                      {l.placeholder ? (
                        <p className="mt-3 text-xs italic text-white/85">{PLACEHOLDER}</p>
                      ) : (
                        <ul className="mt-3 space-y-1 text-xs leading-snug text-white/90">
                          {l.lines.map((x) => (
                            <li key={x}>{x}</li>
                          ))}
                        </ul>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white/90">{principles.join("  •  ")}</p>
              <ol className="mt-10 flex flex-col gap-3 text-sm sm:flex-row sm:items-center">
                {platform.ambition.map((step, i) => (
                  <li key={step} className="flex items-center gap-3">
                    <span className={`rounded-full px-4 py-2 font-semibold ${i === 2 ? "bg-white text-[#4F00CD]" : "border border-white/50 text-white"}`}>{step}</span>
                    {i < 2 && <ArrowRight className="hidden h-4 w-4 text-white/80 sm:block" aria-hidden="true" />}
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-xs text-white/85">{platform.ambitionLine}</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/platform"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#4F00CD] transition-transform hover:-translate-y-0.5"
                >
                  Explore {platform.name} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/platform/vista"
                  className="inline-flex min-h-11 items-center rounded-full border border-white/60 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  VISTA
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* WHO WE SERVE — Classic grid */}
      <section className="pb-24">
        <Container>
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>
                {platform.name} · {platform.kicker}
              </Eyebrow>
              <h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-[2.6rem]">Who we serve</h2>
            </div>
            <Link href="/who-we-serve" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline">
              Who we serve <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {audiences.map((a, i) => (
              <Reveal as="li" key={a.id} delay={i * 0.05} className="hover-card rounded-2xl border-t-[3px] border-t-[#8030FD] bg-muted p-5">
                <a.icon className="h-6 w-6 text-brand" strokeWidth={1.75} aria-hidden="true" />
                <p className="mt-4 font-bold text-foreground">{a.name}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* TECHNOLOGY + ENTERPRISE FAQ HIGHLIGHTS — Classic two cards */}
      <section className="pb-4">
        <Container className="grid gap-5 lg:grid-cols-2">
          <Reveal variant="left" className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
              <Server className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl font-bold text-foreground">Technology &amp; Architecture</h2>
            <ul className="mt-6 space-y-3">
              {technology.map((t) => (
                <li key={t} className="flex gap-3 text-foreground">
                  <GreenCheck /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal variant="right" delay={0.08} className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl font-bold text-foreground">Enterprise FAQ Highlights</h2>
            <dl className="mt-6 divide-y divide-border">
              {faqHighlights.map((f) => (
                <div key={f.label} className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-foreground">{f.label}</dt>
                  <dd className="font-semibold text-growth">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
