"use client"

import { useEffect, useRef } from "react"
import { motion, useReducedMotion } from "framer-motion"

// Hero background: a faint grid ("payment rails"), slow drifting brand glows, and small light
// pulses travelling along the grid lines — transactions moving through the network.
const GRID = 56

export default function HeroBackground() {
  const reduce = useReducedMotion()
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* drifting glows */}
      <motion.div
        className="absolute left-[8%] top-[-10%] h-[520px] w-[520px] rounded-full bg-[var(--glow-1)] blur-[120px]"
        animate={reduce ? {} : { x: [0, 90, 0], y: [0, 50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[5%] top-[10%] h-[460px] w-[460px] rounded-full bg-[var(--glow-2)] blur-[120px]"
        animate={reduce ? {} : { x: [0, -110, 0], y: [0, 70, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-[-20%] left-[35%] h-[380px] w-[380px] rounded-full bg-[var(--glow-2)] opacity-70 blur-[120px]"
        animate={reduce ? {} : { x: [0, 60, -40, 0], y: [0, -40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* grid rails */}
      <div
        className="absolute inset-0 [mask-image:radial-gradient(75%_70%_at_50%_40%,#000_40%,transparent_100%)]"
        style={{
          backgroundImage: "linear-gradient(var(--hairline) 1px, transparent 1px), linear-gradient(90deg, var(--hairline) 1px, transparent 1px)",
          backgroundSize: `${GRID}px ${GRID}px`,
          backgroundPosition: "center top",
        }}
      />

      {/* transaction pulses */}
      {!reduce && <Pulses />}
    </div>
  )
}

function Pulses() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext("2d")
    let w = 0, h = 0, raf, running = true
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const colors = () => {
      const c = getComputedStyle(document.documentElement)
      return [c.getPropertyValue("--brand").trim() || "#1A73B8", c.getPropertyValue("--accent").trim() || "#2489D8", c.getPropertyValue("--grad-to").trim() || "#2489D8"]
    }
    let palette = colors()

    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      palette = colors()
    }
    resize()

    // Grid is centred horizontally (background-position: center top), so align pulses to it.
    const offsetX = () => ((w / 2) % GRID)
    const spawn = () => {
      const horizontal = Math.random() < 0.6
      const speed = 70 + Math.random() * 80 // px per second
      const dir = Math.random() < 0.5 ? 1 : -1
      if (horizontal) {
        const rows = Math.floor(h / GRID)
        const y = Math.max(1, Math.floor(Math.random() * rows)) * GRID
        return { horizontal, x: dir > 0 ? -40 : w + 40, y, dir, speed, color: palette[Math.floor(Math.random() * 3)], len: 50 + Math.random() * 60 }
      }
      const cols = Math.floor(w / GRID)
      const x = offsetX() + Math.floor(Math.random() * cols) * GRID
      return { horizontal, x, y: dir > 0 ? -40 : h + 40, dir, speed, color: palette[Math.floor(Math.random() * 3)], len: 40 + Math.random() * 50 }
    }

    const count = () => Math.max(6, Math.min(16, Math.round((w * h) / 90000)))
    let pulses = Array.from({ length: count() }, () => {
      const p = spawn()
      if (p.horizontal) p.x = Math.random() * w
      else p.y = Math.random() * h
      return p
    })

    let last = performance.now()
    const tick = (now) => {
      if (!running) return
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < pulses.length; i++) {
        const p = pulses[i]
        const step = p.speed * dt * p.dir
        if (p.horizontal) p.x += step
        else p.y += step
        const hx = p.horizontal ? p.x : p.x
        const hy = p.horizontal ? p.y : p.y
        const tx = p.horizontal ? p.x - p.len * p.dir : p.x
        const ty = p.horizontal ? p.y : p.y - p.len * p.dir
        // fade near the edges so pulses melt into the mask
        const edge = p.horizontal ? Math.min(hx, w - hx) : Math.min(hy, h - hy)
        const alpha = Math.max(0, Math.min(1, edge / 160)) * 0.9
        const g = ctx.createLinearGradient(tx, ty, hx, hy)
        g.addColorStop(0, "transparent")
        g.addColorStop(1, p.color)
        ctx.globalAlpha = alpha
        ctx.strokeStyle = g
        ctx.lineWidth = 1.6
        ctx.beginPath()
        ctx.moveTo(tx, ty)
        ctx.lineTo(hx, hy)
        ctx.stroke()
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(hx, hy, 2.2, 0, Math.PI * 2)
        ctx.fill()
        const out = p.horizontal ? (p.dir > 0 ? hx > w + 60 : hx < -60) : p.dir > 0 ? hy > h + 60 : hy < -60
        if (out) pulses[i] = spawn()
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const onVis = () => {
      running = !document.hidden
      if (running) {
        last = performance.now()
        raf = requestAnimationFrame(tick)
      } else cancelAnimationFrame(raf)
    }
    const onResize = () => {
      resize()
      pulses = pulses.slice(0, count())
      while (pulses.length < count()) pulses.push(spawn())
    }
    // Recolour when the theme toggles (class change on <html>)
    const mo = new MutationObserver(() => (palette = colors()))
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    window.addEventListener("resize", onResize)
    document.addEventListener("visibilitychange", onVis)
    return () => {
      running = false
      cancelAnimationFrame(raf)
      mo.disconnect()
      window.removeEventListener("resize", onResize)
      document.removeEventListener("visibilitychange", onVis)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 h-full w-full [mask-image:radial-gradient(70%_65%_at_50%_42%,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.25)_30%,#000_60%,transparent_100%)]"
    />
  )
}
