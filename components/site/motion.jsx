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
      <motion.div style={{ clipPath: clip }} className="relative overflow-hidden bg-[linear-gradient(160deg,#081A2E,#0F2D4E_70%,#123A63)] text-white">
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

/* ───────────────── Rotating dotted globe ───────────────── */
export function Globe({ size = 280, className = "" }) {
  const reduce = useReducedMotion()
  const [rot, setRot] = useState(0)
  useEffect(() => {
    if (reduce) return
    let raf
    let last = performance.now()
    const tick = (now) => {
      setRot((r) => (r + (now - last) * 0.012) % 360)
      last = now
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reduce])

  const R = size / 2 - 6
  const pts = []
  for (let lat = -80; lat <= 80; lat += 10) {
    const ring = Math.max(6, Math.round(36 * Math.cos((lat * Math.PI) / 180)))
    for (let k = 0; k < ring; k++) {
      const lon = (k / ring) * 360 + rot
      const la = (lat * Math.PI) / 180
      const lo = (lon * Math.PI) / 180
      const z = Math.cos(la) * Math.cos(lo)
      if (z < -0.05) continue
      pts.push({
        x: (size / 2 + R * Math.cos(la) * Math.sin(lo)).toFixed(2),
        y: (size / 2 - R * Math.sin(la)).toFixed(2),
        o: (0.25 + 0.75 * Math.max(0, z)).toFixed(2),
      })
    }
  }
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={className} aria-hidden="true">
      <defs>
        <radialGradient id="globe-fill" cx="40%" cy="35%" r="70%">
          <stop offset="0" stopColor="#7CC0F0" stopOpacity="0.55" />
          <stop offset="1" stopColor="#081A2E" stopOpacity="0.95" />
        </radialGradient>
      </defs>
      <circle cx={size / 2} cy={size / 2} r={R} fill="url(#globe-fill)" />
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="1.4" fill="#ffffff" opacity={p.o} />
      ))}
      <circle cx={size / 2} cy={size / 2} r={R} fill="none" stroke="rgba(255,255,255,0.25)" />
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
