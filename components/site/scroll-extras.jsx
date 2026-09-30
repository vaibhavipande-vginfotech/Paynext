"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useScroll, useSpring, useReducedMotion } from "framer-motion"
import { ArrowUp } from "lucide-react"

// Thin reading-progress bar that fills as the page scrolls.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })
  return (
    <motion.div
      aria-hidden="true"
      className="top-stripe absolute inset-x-0 bottom-0 h-[2px] origin-left"
      style={{ scaleX }}
    />
  )
}

// Floating back-to-top button, shown after the first screen.
export function BackToTop() {
  const [show, setShow] = useState(false)
  const reduce = useReducedMotion()
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })}
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="btn-primary fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full transition-[translate,filter] hover:-translate-y-1"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
