"use client"

import { useEffect, useState, useRef } from 'react'

const stats = [
  { value: 7, suffix: '+', label: 'Years of Excellence', description: 'Delivering trusted payment solutions' },
  { value: 18, suffix: ' Trillion+', label: 'Transactions Processed', description: 'Secure payment volume handled' },
  { value: 99.99, suffix: '%', label: 'Uptime Guaranteed', description: 'Industry-leading reliability' },
  { value: 50, suffix: '+', label: 'Partner Institutions', description: 'Banks and fintechs served' },
]

function AnimatedNumber({ value, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    let startTime
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * value * 100) / 100)
      if (progress < 1) requestAnimationFrame(animate)
      else setCount(value)
    }
    requestAnimationFrame(animate)
  }, [isVisible, value, duration])

  return (
    <span ref={ref}>
      {Number.isInteger(value) ? Math.floor(count) : count.toFixed(2)}{suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Trusted by Industry Leaders</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Our numbers speak for themselves. Join the growing network of institutions that trust Paynext.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
