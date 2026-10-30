"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import content from "@/lib/solutions-content.json"

// Design 2 "Bold" tabbed panel. Text sources:
//  - ATM / NCMC / NETC: website-addtions.docx (hero line + capability titles, verbatim)
//  - POS / E-Commerce / Bharat QR: approved old-site product page text
const caps = (key, skip = []) => content[key].capabilities.map((c) => c.title).filter((t) => !skip.includes(t)).slice(0, 4)

const TABS = [
  {
    id: "pos",
    tab: "POS / MPOS",
    eyebrow: "Products",
    title: "POS / MPOS Solutions",
    lead: "Simplify your business processes with our comprehensive POS solutions.",
    points: ["Supports Card Schemes like RUPAY, MasterCard, Visa and American Express", "Reconciliation & Settlement", "Merchant Payments", "BQR Available on POS"],
    href: "/products/POS-MPOS",
    art: "pos",
  },
  {
    id: "ecom",
    tab: "E-Commerce",
    eyebrow: "Products",
    title: "E-Commerce Gateway",
    lead: "Instant & hassle-free online payment solutions for your e-commerce business.",
    points: ["Supports Card Schemes: RuPay, MasterCard, Visa & American Express", "Best-in-Class Fraud Detection & Prevention", "Seamless, Localised Checkout Experience", "Reconciliation & Settlement"],
    href: "/products/E-commerceGateway",
    art: "ecom",
  },
  {
    id: "bqr",
    tab: "Bharat QR & UPI",
    eyebrow: "Products",
    title: "Bharat QR & UPI",
    lead: "Decoding the puzzle to swift payment with interoperable QR solutions.",
    points: ["Interoperable QR across RuPay, MasterCard & Visa", "Dynamic & Static QR Codes — No POS Machine Required", "Reconciliation & Settlement"],
    href: "/products/BharatQR-UPI",
    art: "qr",
  },
  {
    id: "atm",
    tab: "ATM",
    eyebrow: "Solutions",
    title: "ATM Switching Solutions",
    lead: content.atm.hero.join(" "),
    points: caps("atm"),
    href: "/solutions/atm-switching",
    art: "atm",
  },
  {
    id: "ncmc",
    tab: "NCMC",
    eyebrow: "Solutions",
    title: "NCMC (National Common Mobility Card) Solutions",
    lead: content.ncmc.hero.join(" "),
    points: caps("ncmc", ["NCMC — Section 3"]),
    href: "/solutions/ncmc",
    art: "transit",
  },
  {
    id: "netc",
    tab: "NETC",
    eyebrow: "Solutions",
    title: "NETC Switching",
    lead: content.netc.hero.join(" "),
    points: caps("netc"),
    href: "/solutions/netc-switching",
    art: "toll",
  },
]

// Flat illustrations in the style of Design 2 (lavender panel, violet shapes, green accents).
function Art({ kind }) {
  const common = { viewBox: "0 0 400 300", className: "h-full w-full", "aria-hidden": true }
  const frame = (
    <>
      <rect width="400" height="300" rx="28" style={{ fill: "var(--art-bg)" }} />
      <circle cx="350" cy="40" r="80" style={{ fill: "var(--art-c1)" }} />
      <circle cx="40" cy="270" r="60" style={{ fill: "var(--art-c2)" }} />
    </>
  )
  switch (kind) {
    case "pos":
      return (
        <svg {...common}>
          {frame}
          <rect x="140" y="70" width="110" height="190" rx="18" style={{ fill: "var(--art-device)" }} />
          <rect x="155" y="88" width="80" height="60" rx="8" fill="#6A1BEA" />
          <circle cx="195" cy="118" r="17" fill="#42BE5C" />
          <path d="M187 118 l6 6 l11 -12" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {[0, 1, 2].map((r) => [0, 1, 2].map((c) => <rect key={`${r}${c}`} x={158 + c * 26} y={165 + r * 26} width="20" height="16" rx="4" style={{ fill: r === 2 && c === 1 ? "#8030FD" : r === 2 && c === 2 ? "#42BE5C" : "var(--art-key)" }} />))}
          <g transform="rotate(-14 300 110)">
            <rect x="240" y="80" width="120" height="76" rx="12" fill="#8030FD" />
            <rect x="256" y="98" width="24" height="18" rx="4" fill="#E3D5FF" />
            <rect x="256" y="132" width="60" height="7" rx="3" fill="#C9B3FF" />
          </g>
          <path d="M268 175 q14 14 0 28 M282 168 q22 21 0 42" stroke="#42BE5C" strokeWidth="5" fill="none" strokeLinecap="round" />
        </svg>
      )
    case "ecom":
      return (
        <svg {...common}>
          {frame}
          <rect x="60" y="55" width="280" height="190" rx="16" style={{ fill: "var(--art-card)", stroke: "var(--art-line)" }} strokeWidth="2" />
          <rect x="60" y="55" width="280" height="32" rx="16" style={{ fill: "var(--art-c1)" }} />
          {[0, 1, 2].map((i) => <circle key={i} cx={82 + i * 16} cy="71" r="5" fill={["#8030FD", "#C9B3FF", "#42BE5C"][i]} />)}
          <rect x="84" y="108" width="140" height="10" rx="5" fill="#E3D5FF" />
          <rect x="84" y="130" width="230" height="30" rx="8" style={{ fill: "var(--art-c2)", stroke: "var(--art-line)" }} />
          <rect x="84" y="170" width="110" height="30" rx="8" style={{ fill: "var(--art-c2)", stroke: "var(--art-line)" }} />
          <rect x="204" y="170" width="110" height="30" rx="8" style={{ fill: "var(--art-c2)", stroke: "var(--art-line)" }} />
          <rect x="84" y="210" width="230" height="22" rx="11" fill="#4F00CD" />
          <rect x="176" y="218" width="46" height="6" rx="3" fill="#FFFFFF" />
          <circle cx="330" cy="70" r="26" fill="#42BE5C" />
          <rect x="320" y="66" width="20" height="16" rx="3" fill="#fff" />
          <path d="M324 66 v-5 a6 6 0 0 1 12 0 v5" stroke="#fff" strokeWidth="3" fill="none" />
        </svg>
      )
    case "qr":
      return (
        <svg {...common}>
          {frame}
          <rect x="140" y="40" width="130" height="230" rx="22" style={{ fill: "var(--art-device)" }} />
          <rect x="152" y="62" width="106" height="186" rx="10" fill="#FFFFFF" />
          <g transform="translate(167 92)">
            {Array.from({ length: 49 }, (_, i) => {
              const r = Math.floor(i / 7)
              const c = i % 7
              const corner = (r < 2 && c < 2) || (r < 2 && c > 4) || (r > 4 && c < 2)
              const on = corner || (r * 3 + c * 5) % 4 === 0
              return on ? <rect key={i} x={c * 11} y={r * 11} width="10" height="10" rx="2" fill={corner ? "#4F00CD" : "#1A1033"} /> : null
            })}
          </g>
          <rect x="167" y="186" width="76" height="22" rx="11" fill="#42BE5C" />
          <path d="M193 197 l5 5 l10 -10" stroke="#fff" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="285" y="110" width="80" height="34" rx="10" style={{ fill: "var(--art-card)", stroke: "var(--art-line)" }} />
          <text x="325" y="132" textAnchor="middle" fontSize="13" fontWeight="700" style={{ fill: "var(--art-accent)" }}>UPI</text>
        </svg>
      )
    case "atm":
      return (
        <svg {...common}>
          {frame}
          <rect x="110" y="45" width="180" height="225" rx="16" style={{ fill: "var(--art-device)" }} />
          <rect x="130" y="65" width="140" height="80" rx="8" fill="#6A1BEA" />
          <rect x="146" y="82" width="70" height="8" rx="4" fill="#E3D5FF" />
          <rect x="146" y="98" width="100" height="8" rx="4" fill="#C9B3FF" />
          <rect x="146" y="114" width="54" height="16" rx="5" fill="#42BE5C" />
          {[0, 1, 2].map((r) => [0, 1, 2].map((c) => <rect key={`${r}${c}`} x={140 + c * 24} y={160 + r * 20} width="18" height="13" rx="3" style={{ fill: "var(--art-key)" }} />))}
          <rect x="222" y="162" width="48" height="10" rx="5" fill="#8030FD" />
          <rect x="130" y="232" width="140" height="12" rx="6" style={{ fill: "var(--art-key)" }} />
          <rect x="160" y="240" width="80" height="34" rx="4" fill="#42BE5C" />
          <rect x="172" y="250" width="56" height="5" rx="2" fill="#E8FBEF" />
        </svg>
      )
    case "transit":
      return (
        <svg {...common}>
          {frame}
          <rect x="200" y="40" width="160" height="60" rx="16" style={{ fill: "var(--art-card)", stroke: "var(--art-line)" }} />
          {[0, 1, 2, 3].map((i) => <rect key={i} x={214 + i * 35} y="54" width="27" height="20" rx="4" fill="#C9B3FF" />)}
          <rect x="200" y="86" width="160" height="7" fill="#4F00CD" />
          <rect x="140" y="140" width="34" height="130" rx="8" style={{ fill: "var(--art-device)" }} />
          <rect x="250" y="140" width="34" height="130" rx="8" style={{ fill: "var(--art-device)" }} />
          <rect x="128" y="120" width="58" height="34" rx="8" fill="#6A1BEA" />
          <circle cx="157" cy="137" r="8" fill="#42BE5C" />
          <rect x="182" y="190" width="30" height="9" rx="4" fill="#8030FD" />
          <rect x="216" y="190" width="30" height="9" rx="4" fill="#8030FD" />
          <g transform="rotate(-18 85 110)">
            <rect x="50" y="88" width="72" height="46" rx="8" fill="#8030FD" />
            <rect x="60" y="99" width="16" height="12" rx="3" fill="#E3D5FF" />
          </g>
          <path d="M128 112 q9 9 0 18" stroke="#42BE5C" strokeWidth="4" fill="none" strokeLinecap="round" />
          <rect x="90" y="276" width="240" height="4" rx="2" fill="#C9B3FF" />
        </svg>
      )
    case "toll":
    default:
      return (
        <svg {...common}>
          {frame}
          <rect x="70" y="230" width="270" height="6" rx="3" fill="#C9B3FF" />
          <rect x="260" y="90" width="44" height="140" rx="8" style={{ fill: "var(--art-device)" }} />
          <rect x="268" y="104" width="28" height="22" rx="4" fill="#42BE5C" />
          <rect x="96" y="104" width="170" height="16" rx="8" fill="#4F00CD" />
          {[0, 1, 2, 3].map((i) => <rect key={i} x={112 + i * 38} y="104" width="16" height="16" fill="#FFFFFF" opacity="0.85" />)}
          <path d="M70 230 v-34 q0 -18 18 -22 l30 -6 q12 -26 34 -26 h40 q20 0 30 26 l14 4 q14 4 14 18 v40 z" fill="#8030FD" />
          <circle cx="104" cy="232" r="16" style={{ fill: "var(--art-device)" }} />
          <circle cx="204" cy="232" r="16" style={{ fill: "var(--art-device)" }} />
          <rect x="148" y="150" width="40" height="18" rx="4" fill="#E3D5FF" />
          <rect x="300" y="160" width="70" height="30" rx="8" style={{ fill: "var(--art-card)", stroke: "var(--art-line)" }} />
          <text x="335" y="180" textAnchor="middle" fontSize="12" fontWeight="700" style={{ fill: "var(--art-accent)" }}>FASTag</text>
        </svg>
      )
  }
}

export default function SolutionsTabs() {
  const [active, setActive] = useState(TABS[0].id)
  const reduce = useReducedMotion()
  const t = TABS.find((x) => x.id === active)

  return (
    <div>
      <div role="tablist" aria-label="Solutions" className="mx-auto flex w-fit max-w-full flex-wrap justify-center gap-1 rounded-full bg-muted p-1.5">
        {TABS.map((x) => (
          <button
            key={x.id}
            role="tab"
            id={`tab-${x.id}`}
            aria-selected={active === x.id}
            aria-controls={`panel-${x.id}`}
            onClick={() => setActive(x.id)}
            className={`min-h-10 rounded-full px-4 text-sm font-semibold transition-colors ${
              active === x.id ? "bg-primary text-primary-foreground shadow-[0_6px_16px_-6px_rgba(79,0,205,0.6)]" : "text-foreground hover:bg-brand-soft"
            }`}
          >
            {x.tab}
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-[2rem] bg-muted p-6 sm:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={t.id}
            role="tabpanel"
            id={`panel-${t.id}`}
            aria-labelledby={`tab-${t.id}`}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid items-center gap-10 lg:grid-cols-2"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-brand">{t.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-bold leading-tight text-foreground sm:text-3xl">{t.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{t.lead}</p>
              <ul className="mt-6 space-y-3">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm font-medium text-foreground">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-growth">
                      <Check className="h-3 w-3 text-white dark:text-[#12082E]" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href={t.href}
                className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Explore {t.tab} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mx-auto w-full max-w-md">
              <Art kind={t.art} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
