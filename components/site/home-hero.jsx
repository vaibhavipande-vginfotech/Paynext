"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Container, Eyebrow } from "@/components/site/primitives"
import { brand } from "@/lib/site-content"
import HeroBackground from "@/components/site/hero-background"

export default function HomeHero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  // Text fades out before it reaches the navbar, so it never shows through it.
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90])
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, reduce ? 1 : 0])
  const bgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60])

  return (
    <section ref={ref} className="relative flex min-h-[88vh] items-center overflow-hidden pb-24 pt-32 sm:pt-36">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <HeroBackground />
      </motion.div>
      <Container className="relative">
        <motion.div style={{ y: textY, opacity: textOpacity }}>
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Eyebrow>PayNext</Eyebrow>
          {/* PerseusPay tagline — Content Master Document */}
          <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.05] text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            <span className="block lg:inline">One Switch.</span> <span className="block lg:inline">Every Channel.</span>{" "}
            <span className="block text-brand-gradient">Total Control.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{brand.positioning}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/contact">
                Schedule a consultation <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/products">Core Platforms Overview</Link>
            </Button>
          </div>
        </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
