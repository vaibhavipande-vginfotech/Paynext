"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"
import Logo from "@/components/site/logo"
import { ScrollProgress } from "@/components/site/scroll-extras"
import { pillars, layers, solutionsNav } from "@/lib/site-content"

const menus = [
  {
    name: "Solutions",
    href: "/solutions",
    columns: [{ title: "Solutions", items: [{ name: "Core Platforms Overview", href: "/products", desc: "PerseusPay · VISTA · Europa" }, ...solutionsNav] }],
  },
  {
    name: "PayNext+",
    href: "/platform",
    columns: [
      {
        title: "PayNext+",
        items: pillars.map((p) => ({ name: p.name, href: `/platform#${p.id}`, desc: p.lines.join(" · "), icon: p.icon })),
      },
      {
        title: "VISTA · CocoNet · Intelligence Layer",
        items: layers.map((l) => ({ name: l.name, href: l.href, desc: l.tag, icon: l.icon })),
      },
    ],
  },
  {
    name: "Company",
    href: "/about",
    columns: [
      {
        title: "Company",
        items: [
          { name: "About Us", href: "/about" },
          { name: "Careers", href: "/careers" },
          { name: "FAQ", href: "/faq" },
        ],
      },
    ],
  },
]

const links = [
  { name: "Who we serve", href: "/who-we-serve" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(null) // name of open desktop menu
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const closeTimer = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setOpen(null)
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === "Escape" && setOpen(null)
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const enter = (name) => {
    clearTimeout(closeTimer.current)
    setOpen(name)
  }
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 150)
  }

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname?.startsWith(href))

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-border bg-background/85 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="top-stripe h-[3px] w-full" aria-hidden="true" />
      <ScrollProgress />
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-6 lg:px-8" aria-label="Main">
        <Logo className="h-7" />

        {/* Desktop */}
        <div className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          {menus.map((m) => (
            <div key={m.name} className="relative" onMouseEnter={() => enter(m.name)} onMouseLeave={leave}>
              <button
                type="button"
                className={`nav-link flex items-center gap-1 rounded-full px-2.5 py-2 text-sm transition-colors xl:px-3.5 ${
                  isActive(m.href) || open === m.name ? "text-foreground" : "text-nav hover:text-foreground"
                }`}
                aria-expanded={open === m.name}
                aria-haspopup="true"
                onClick={() => setOpen(open === m.name ? null : m.name)}
              >
                {m.name}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${open === m.name ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence>
                {open === m.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                  >
                    <div
                      className={`grid gap-6 rounded-2xl border border-border bg-popover p-5 shadow-2xl shadow-black/10 ${
                        m.columns.length > 1 ? "w-[680px] grid-cols-2" : "w-[380px] grid-cols-1"
                      }`}
                    >
                      {m.columns.map((col) => (
                        <div key={col.title}>
                          <p className="eyebrow mb-3 px-3">{col.title}</p>
                          <ul className="space-y-0.5">
                            {col.items.map((it) => (
                              <li key={it.name}>
                                <Link
                                  href={it.href}
                                  className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-[background-color,translate] duration-300 hover:translate-x-1 hover:bg-muted"
                                >
                                  {it.icon && (
                                    <it.icon className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={1.75} aria-hidden="true" />
                                  )}
                                  <span>
                                    <span className="block text-sm font-medium text-foreground">{it.name}</span>
                                    {it.desc && <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">{it.desc}</span>}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <Link
                        href={m.href}
                        className={`flex items-center justify-between rounded-xl border border-border px-4 py-3 text-sm text-foreground transition-colors hover:bg-muted ${
                          m.columns.length > 1 ? "col-span-2" : ""
                        }`}
                      >
                        {m.name}
                        <ArrowRight className="h-4 w-4 text-brand" aria-hidden="true" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          {links.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              className={`nav-link rounded-full px-2.5 py-2 text-sm transition-colors xl:px-3.5 ${
                isActive(l.href) ? "text-foreground" : "text-nav hover:text-foreground"
              }`}
            >
              {l.name}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Link href="/contact" className="hidden px-3 text-sm text-nav transition-colors hover:text-foreground xl:block">
            Contact
          </Link>
          <Button asChild size="sm" className="h-9 px-5">
            <Link href="/contact">Schedule consultation</Link>
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2.5 text-foreground hover:bg-muted"
            onClick={() => setMobileOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 260 }}
              className="fixed inset-y-0 right-0 z-50 flex w-full flex-col overflow-y-auto border-l border-border bg-background px-5 py-5 sm:max-w-sm"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
            >
              <div className="mb-6 flex items-center justify-between">
                <Logo className="h-7" onClick={() => setMobileOpen(false)} />
                <button
                  type="button"
                  className="rounded-lg p-2.5 text-foreground hover:bg-muted"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="flex flex-col">
                {menus.map((m) => (
                  <div key={m.name} className="border-b border-border">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-4 text-base font-medium text-foreground"
                      aria-expanded={mobileSection === m.name}
                      onClick={() => setMobileSection(mobileSection === m.name ? null : m.name)}
                    >
                      {m.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileSection === m.name ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {mobileSection === m.name && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pb-3"
                        >
                          {m.columns.flatMap((c) => c.items).map((it) => (
                            <li key={it.name}>
                              <Link
                                href={it.href}
                                className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                              >
                                {it.name}
                              </Link>
                            </li>
                          ))}
                          <li>
                            <Link href={m.href} className="block px-3 py-2 text-sm font-medium text-brand">
                              {m.name} →
                            </Link>
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                {[...links, { name: "Contact", href: "/contact" }].map((l) => (
                  <Link key={l.name} href={l.href} className="border-b border-border py-4 text-base font-medium text-foreground">
                    {l.name}
                  </Link>
                ))}
              </div>

              <Button asChild size="lg" className="mt-8 w-full">
                <Link href="/contact">Schedule a Technical Consultation</Link>
              </Button>
              <p className="mt-6 text-center text-xs text-muted-foreground">Certified Technology Service Provider (TSP) · PCI-DSS Compliant Infrastructure</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
