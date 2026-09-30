"use client"

import { motion, useReducedMotion } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1]

// Scroll-entrance variants. "up" is the default for sections; "left"/"right" pair up in two-column
// layouts; "scale" suits highlight panels.
const FROM = {
  up: { opacity: 0, y: 32, filter: "blur(6px)" },
  left: { opacity: 0, x: -48, filter: "blur(6px)" },
  right: { opacity: 0, x: 48, filter: "blur(6px)" },
  scale: { opacity: 0, scale: 0.94, filter: "blur(6px)" },
  fade: { opacity: 0 },
}
const TO = { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }

export default function Reveal({ children, className = "", delay = 0, variant = "up", as = "div" }) {
  const reduce = useReducedMotion()
  const Tag = motion[as] || motion.div
  if (reduce) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }
  return (
    <Tag
      className={className}
      initial={FROM[variant] || FROM.up}
      whileInView={TO}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </Tag>
  )
}
