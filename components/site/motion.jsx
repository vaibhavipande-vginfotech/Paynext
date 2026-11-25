"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform, useReducedMotion } from "framer-motion"

/* ───────────────── Radiating lines (hero backdrop) ─────────────────
   Curved lines fan out from the centre; small light points travel along them. */
export function RadiantLines({ className = "" }) {
  const reduce = useReducedMotion()
  const lines = Array.from({ length: 18 }, (_, i) => {
    const t = i / 17
    const spread = (t - 0.5) * 2 // -1 … 1
    const yEnd = 60 + t * 480
    return {
      left: `M720 300 C 520 ${300 + spread * 40}, 300 ${yEnd - 40}, -40 ${yEnd}`,
      right: `M720 300 C 920 ${300 + spread * 40}, 1140 ${yEnd - 40}, 1480 ${yEnd}`,
    }
  })
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1440 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="rl-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="var(--accent)" stopOpacity="0.35" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="rl-fade" x1="0" x2="1">
          <stop offset="0" stopColor="var(--primary)" stopOpacity="0" />
          <stop offset="0.5" stopColor="var(--primary)" stopOpacity="0.28" />
          <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <ellipse cx="720" cy="300" rx="520" ry="260" fill="url(#rl-glow)" />
      {lines.map((l, i) => (
        <g key={i}>
          <path d={l.left} fill="none" stroke="url(#rl-fade)" strokeWidth="1" />
          <path d={l.right} fill="none" stroke="url(#rl-fade)" strokeWidth="1" />
          {!reduce && i % 3 === 0 && (
            <>
              <circle r="3" fill="var(--accent)" opacity="0.8">
                <animateMotion dur={`${7 + (i % 5)}s`} repeatCount="indefinite" path={l.left} keyPoints="1;0" keyTimes="0;1" calcMode="linear" />
              </circle>
              <circle r="3" fill="var(--accent)" opacity="0.8">
                <animateMotion dur={`${8 + (i % 4)}s`} repeatCount="indefinite" path={l.right} keyPoints="1;0" keyTimes="0;1" calcMode="linear" />
              </circle>
            </>
          )}
        </g>
      ))}
    </svg>
  )
}

/* ───────────────── Floating card ───────────────── */
export function Float({ children, className = "", delay = 0, distance = 10, duration = 6 }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -distance, 0] }}
      transition={
        reduce
          ? { duration: 0.6, delay }
          : { opacity: { duration: 0.8, delay }, y: { duration, delay, repeat: Infinity, ease: "easeInOut" } }
      }
    >
      {children}
    </motion.div>
  )
}

/* ───────────────── Endless marquee row ───────────────── */
export function Marquee({ children, reverse = false, speed = 40, className = "" }) {
  return (
    <div className={`group relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] ${className}`}>
      {[0, 1].map((k) => (
        <div
          key={k}
          aria-hidden={k === 1}
          className="flex shrink-0 items-center gap-4 pr-4 [animation:marquee_var(--marquee-speed)_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:[animation:none]"
          style={{ "--marquee-speed": `${speed}s`, animationDirection: reverse ? "reverse" : "normal" }}
        >
          {children}
        </div>
      ))}
    </div>
  )
}

/* ───────────────── Circle that grows with scroll to reveal a dark panel ───────────────── */
export function CircleReveal({ children, className = "" }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 20%"] })
  const radius = useTransform(scrollYProgress, [0, 1], ["18%", "150%"])
  const clip = useTransform(radius, (r) => `circle(${r} at 50% 45%)`)
  return (
    <section ref={ref} className={`relative ${className}`}>
      <motion.div style={{ clipPath: clip }} className="relative overflow-hidden bg-[linear-gradient(160deg,#12082E,#1A0F33_60%,#2A0A6B)] text-white">
        <Rings />
        <div className="relative">{children}</div>
      </motion.div>
    </section>
  )
}

function Rings() {
  return (
    <svg className="pointer-events-none absolute left-1/2 top-[45%] h-[1400px] w-[1400px] -translate-x-1/2 -translate-y-1/2" viewBox="0 0 1400 1400" aria-hidden="true">
      {Array.from({ length: 9 }, (_, i) => (
        <circle key={i} cx="700" cy="700" r={120 + i * 70} fill="none" stroke="rgba(255,255,255,0.06)" />
      ))}
    </svg>
  )
}

/* ───────────────── Count-up for stat values (keeps any prefix/suffix text) ───────────────── */
export function CountUp({ value, className = "" }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()
  const m = String(value).match(/^(\D*)([\d.]+)(.*)$/)
  // Server HTML carries the real figure (search engines, AI crawlers, link previews, no-JS visitors).
  const [shown, setShown] = useState(value)
  const armed = useRef(false)

  // In the browser only: reset to zero before the count-up starts.
  useLayoutEffect(() => {
    if (m && !reduce) {
      armed.current = true
      setShown(`${m[1]}0${m[3]}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!m || !inView || !armed.current) return
    const target = parseFloat(m[2])
    const decimals = (m[2].split(".")[1] || "").length
    const start = performance.now()
    let raf
    const step = (now) => {
      const p = Math.min(1, (now - start) / 1400)
      const eased = 1 - Math.pow(1 - p, 3)
      setShown(`${m[1]}${(target * eased).toFixed(decimals)}${m[3]}`)
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <span ref={ref} className={className} aria-label={value}>
      {shown}
    </span>
  )
}
