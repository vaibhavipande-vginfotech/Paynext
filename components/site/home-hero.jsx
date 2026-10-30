"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { Container } from "@/components/site/primitives"
import { brand } from "@/lib/site-content"

// Phase 3 hero: violet panel (Design 2 "Bold") with the PerseusPay tagline and the positioning line.
// Networks come from the master doc ("Visa, Mastercard, RuPay, and NPCI ecosystems"); audiences from the deck.
const NODES = [
  { label: "Visa", x: 92, y: 70 },
  { label: "Mastercard", x: 260, y: 38 },
  { label: "RuPay", x: 428, y: 70 },
  { label: "Fintechs", x: 92, y: 310 },
  { label: "Banks", x: 260, y: 342 },
  { label: "NPCI", x: 428, y: 310 },
]
const CX = 260
const CY = 190

function NetworkDiagram() {
  const reduce = useReducedMotion()
  return (
    <svg
      viewBox="0 0 520 380"
      className="h-auto w-full"
      role="img"
      aria-label="PayNext at the centre, connected to Visa, Mastercard, RuPay, NPCI, banks and fintechs"
    >
      <defs>
        <radialGradient id="pn-core" cx="50%" cy="35%" r="70%">
          <stop offset="0" stopColor="#8030FD" />
          <stop offset="1" stopColor="#4F00CD" />
        </radialGradient>
      </defs>
      {/* decorative circles, as in the design */}
      <circle cx="470" cy="20" r="90" fill="#E3D5FF" opacity="0.7" />
      <circle cx="40" cy="380" r="80" fill="#E3D5FF" opacity="0.6" />

      {NODES.map((n, i) => {
        const path = `M${CX},${CY} L${n.x},${n.y}`
        return (
          <g key={n.label}>
            <path d={path} stroke="#8030FD" strokeWidth="2" strokeDasharray="5 6" fill="none" className={reduce ? "" : "pn-dash"} />
            {!reduce && (
              <circle r="5" fill="#42BE5C">
                <animateMotion dur={`${2.6 + (i % 3) * 0.5}s`} repeatCount="indefinite" path={i % 2 ? `M${n.x},${n.y} L${CX},${CY}` : path} />
              </circle>
            )}
          </g>
        )
      })}

      <circle cx={CX} cy={CY} r="78" fill="none" stroke="#8030FD" strokeOpacity="0.35" strokeWidth="2" />
      <motion.circle
        cx={CX}
        cy={CY}
        r="78"
        fill="none"
        stroke="#8030FD"
        strokeWidth="2"
        initial={{ opacity: 0.5, scale: 1 }}
        animate={reduce ? undefined : { opacity: [0.5, 0], scale: [1, 1.25] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
        style={{ transformOrigin: `${CX}px ${CY}px` }}
      />
      <circle cx={CX} cy={CY} r="62" fill="url(#pn-core)" />
      <text x={CX} y={CY + 6} textAnchor="middle" fontSize="18" fontWeight="700" fill="#FFFFFF" fontFamily="var(--font-poppins), Poppins, sans-serif">
        PayNext
      </text>

      {NODES.map((n) => {
        const w = n.label.length * 9 + 40
        return (
          <g key={`node-${n.label}`}>
            <rect x={n.x - w / 2} y={n.y - 19} width={w} height="38" rx="10" fill="#FFFFFF" stroke="#E3D5FF" />
            <text x={n.x} y={n.y + 5} textAnchor="middle" fontSize="14" fontWeight="600" fill="#1A1033" fontFamily="var(--font-poppins), Poppins, sans-serif">
              {n.label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

export default function HomeHero() {
  return (
    <section className="pt-[76px]">
      <div className="hero-violet relative overflow-hidden rounded-b-[2.5rem] pb-28 pt-14 sm:pb-32 sm:pt-20">
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-white/[0.06]" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white">
              Certified TSP · Visa · Mastercard · RuPay · NPCI
            </p>
            {/* PerseusPay tagline — Content Master Document */}
            <h1 className="mt-6 text-[2.6rem] leading-[1.05] text-white sm:text-5xl lg:text-[4rem]">
              One Switch. Every Channel. Total Control.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">{brand.positioning}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#4F00CD] shadow-[0_10px_30px_rgba(18,8,46,0.25)] transition-transform hover:-translate-y-0.5"
              >
                Schedule a consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/products"
                className="inline-flex min-h-12 items-center rounded-full border border-white/60 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Core Platforms Overview
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[1.75rem] bg-[#F1E8FF] p-4 shadow-[0_30px_80px_-20px_rgba(18,8,46,0.45)] sm:p-6"
          >
            <NetworkDiagram />
          </motion.div>
        </Container>
      </div>
    </section>
  )
}
