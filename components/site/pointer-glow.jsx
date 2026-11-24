"use client"

import { useEffect } from "react"

// One document-level listener feeds the pointer position to whichever .hover-card is under it,
// so every card's spotlight (see globals.css) follows the cursor without per-card handlers.
export default function PointerGlow() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return
    let frame = 0
    const onMove = (e) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const card = e.target instanceof Element && e.target.closest(".hover-card")
        if (!card) return
        const r = card.getBoundingClientRect()
        card.style.setProperty("--mx", `${e.clientX - r.left}px`)
        card.style.setProperty("--my", `${e.clientY - r.top}px`)
      })
    }
    document.addEventListener("pointermove", onMove, { passive: true })
    return () => {
      document.removeEventListener("pointermove", onMove)
      cancelAnimationFrame(frame)
    }
  }, [])
  return null
}
