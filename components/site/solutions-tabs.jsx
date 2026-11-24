"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import content from "@/lib/solutions-content.json"
import { Art } from "@/components/site/art"

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
            className={`relative min-h-10 rounded-full px-4 text-sm font-semibold transition-colors ${
              active === x.id ? "text-primary-foreground" : "text-foreground hover:bg-brand-soft"
            }`}
          >
            {active === x.id && (
              <motion.span
                layoutId="solutions-tab-pill"
                aria-hidden="true"
                className="absolute inset-0 -z-0 rounded-full bg-primary shadow-[0_6px_16px_-6px_rgba(79,0,205,0.6)]"
                transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <span className="relative">{x.tab}</span>
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
                {t.points.map((p, i) => (
                  <motion.li
                    key={p}
                    initial={reduce ? false : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="flex gap-3 text-sm font-medium text-foreground">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-growth">
                      <Check className="h-3 w-3 text-white dark:text-[#0E0D13]" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {p}
                  </motion.li>
                ))}
              </ul>
              <Link
                href={t.href}
                className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Explore {t.tab} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="parallax art-zoom mx-auto w-full max-w-md">
              <Art kind={t.art} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
