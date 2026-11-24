"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { Container } from "@/components/site/primitives"
import { brand, stats, engines, statsExtra } from "@/lib/site-content"

const EASE = [0.22, 1, 0.36, 1]

// PerseusPay tagline (Content Master Document), revealed word by word.
const HEADLINE = ["One", "Switch.", "Every", "Channel.", "Total", "Control."]

const uptime = stats.find((s) => s.label === "Platform Uptime")?.value
const volume = stats.find((s) => s.label === "Transaction Volume Processed")?.value
const engine = (id) => engines.find((e) => e.id === id)

// Everything in the flow comes from the client documents: the channels from PerseusPay
// ("Multi-channel acquiring (POS, IPG, NCMC, NETC, Micro ATM, UPI)"), the platforms and their roles,
// and the networks ("Visa, Mastercard, RuPay, and NPCI ecosystems").
const CHANNELS = ["POS", "IPG", "UPI", "NCMC", "NETC", "Micro ATM"]
const NETWORKS = ["Visa", "Mastercard", "RuPay", "NPCI"]

function Chip({ label, active }) {
  return (
    <span
      className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-500 ${
        active ? "bg-white text-[#6A1BEA] shadow-[0_0_0_4px_rgba(255,255,255,0.18)]" : "bg-white/10 text-white ring-1 ring-white/15"
      }`}
    >
      {label}
    </span>
  )
}

// Vertical connector with a glowing dot that travels down it on every step.
function Connector({ step, delay, reduce }) {
  return (
    <div className="relative mx-auto h-7 w-px bg-white/25" aria-hidden="true">
      {!reduce && (
        <motion.span
          key={step}
          initial={{ top: "-10%", opacity: 0 }}
          animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
          transition={{ duration: 0.55, delay, ease: "easeInOut" }}
          className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#8CF0A4] shadow-[0_0_10px_2px_rgba(140,240,164,0.8)]"
        />
      )}
    </div>
  )
}

function Stage({ name, role, lit }) {
  return (
    <div
      className={`rounded-2xl px-4 py-3 text-center ring-1 transition-colors duration-500 ${
        lit ? "bg-white/[0.16] ring-white/40" : "bg-white/[0.07] ring-white/15"
      }`}
    >
      <p className="text-sm font-bold text-white">{name}</p>
      <p className="text-xs text-white/85">{role}</p>
    </div>
  )
}

// PayNext flow: a channel lights up, the signal runs through PerseusPay and Europa, and reaches a network.
function PlatformFlow() {
  const reduce = useReducedMotion()
  const [step, setStep] = useState(0)
  const [phase, setPhase] = useState(3)

  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setStep((s) => s + 1), 2400)
    return () => clearInterval(id)
  }, [reduce])

  useEffect(() => {
    if (reduce) return
    setPhase(0)
    const t = [1, 2, 3].map((p) => setTimeout(() => setPhase(p), p * 550))
    return () => t.forEach(clearTimeout)
  }, [step, reduce])

  const ch = step % CHANNELS.length
  const nw = step % NETWORKS.length
  const perseus = engine("perseuspay")
  const europa = engine("europa")
  const vista = engine("vista")

  return (
    <div className="relative rounded-[1.75rem] bg-white/[0.08] p-5 shadow-[0_40px_100px_-30px_rgba(10,2,40,0.7)] ring-1 ring-white/20 backdrop-blur-md sm:p-6">
      <p className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/85">Multi-channel acquiring</p>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {CHANNELS.map((c, i) => (
          <Chip key={c} label={c} active={!reduce && i === ch} />
        ))}
      </div>
      <Connector step={step} delay={0} reduce={reduce} />
      <Stage name={perseus.name} role={perseus.role} lit={!reduce && phase >= 1} />
      <Connector step={step} delay={0.55} reduce={reduce} />
      <Stage name={europa.name} role={europa.role} lit={!reduce && phase >= 2} />
      <Connector step={step} delay={1.1} reduce={reduce} />
      <div className="flex flex-wrap justify-center gap-2">
        {NETWORKS.map((n, i) => (
          <Chip key={n} label={n} active={!reduce && phase >= 3 && i === nw} />
        ))}
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/15 pt-4 text-center">
        <div>
          <p className="whitespace-nowrap text-base font-bold text-white">{uptime}</p>
          <p className="text-[0.7rem] text-white/85">Platform Uptime</p>
        </div>
        <div>
          <p className="whitespace-nowrap text-base font-bold text-white">{volume}</p>
          <p className="text-[0.7rem] text-white/85">Processed</p>
        </div>
        <div>
          <p className="text-base font-bold text-white">{vista.name}</p>
          <p className="text-[0.7rem] text-white/85">Acquiring Management</p>
        </div>
      </div>
    </div>
  )
}

export default function HomeHero() {
  const reduce = useReducedMotion()
  const ref = useRef(null)

  // Scroll-linked depth: as the page scrolls, the text drifts up and fades a little,
  // while the platform card rises faster and settles back slightly.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const textY = useTransform(scrollYProgress, [0, 1], [0, -70])
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25])
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -140])
  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 0.92])

  return (
    <section ref={ref} className="pt-[63px]">
      <div
        className="hero-violet hero-aurora relative isolate overflow-hidden rounded-b-[2.5rem] pb-32 pt-14 sm:pb-36 sm:pt-20"
      >
        <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 -z-10" />
        <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <motion.div style={reduce ? undefined : { y: textY, opacity: textOpacity }}>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white ring-1 ring-white/20"
            >
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /> Certified TSP · Visa · Mastercard · RuPay · NPCI
            </motion.p>
            {/* PerseusPay tagline — Content Master Document */}
            <h1 className="mt-6 text-[2.6rem] leading-[1.05] text-white sm:text-5xl lg:text-[4.1rem]">
              {HEADLINE.map((w, i) => (
                <motion.span
                  key={w}
                  initial={reduce ? false : { opacity: 0, y: "0.45em", filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.09, ease: EASE }}
                  className={`mr-[0.25em] inline-block ${i >= 4 ? "hero-accent" : ""}`}
                >
                  {w}
                </motion.span>
              ))}
            </h1>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg"
            >
              {brand.positioning}
            </motion.p>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#6A1BEA] shadow-[0_10px_30px_rgba(18,8,46,0.25)] transition-transform hover:-translate-y-0.5"
              >
                Schedule a consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/products"
                className="inline-flex min-h-12 items-center rounded-full border border-white/60 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Core Platforms Overview
              </Link>
            </motion.div>
          </motion.div>

          <motion.div style={reduce ? undefined : { y: cardY, scale: cardScale }}>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.35, ease: EASE }}
            className="relative mx-auto w-full max-w-md"
          >
            <PlatformFlow />
            {/* Floating badges */}
            {[
              { t: statsExtra[1], c: "-right-4 -top-5 sm:-right-10", d: 1.2 },
              { t: statsExtra[0], c: "-bottom-5 left-6", d: 2.1 },
            ].map((b) => (
              <motion.span
                key={b.t}
                aria-hidden="true"
                animate={reduce ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 4, delay: b.d, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute hidden items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-[#1A1033] shadow-[0_14px_30px_-10px_rgba(10,2,40,0.6)] sm:flex ${b.c}`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#42BE5C]" /> {b.t}
              </motion.span>
            ))}
          </motion.div>
          </motion.div>
        </Container>
      </div>
    </section>
  )
}
