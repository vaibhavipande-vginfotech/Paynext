"use client"

import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import {
  ArrowRight,
  Zap,
  Shield,
  Globe,
  BarChart3,
  Award,
  Sparkles,
  Cpu,
  Network,
  Lock,
  Activity,
  TrendingUp,
  Layers,
  Rocket,
  Star,
  CheckCircle2,
  ArrowUpRight,
  Play,
  Users,
  Building2,
  CreditCard,
  GitBranch,
  BadgeCheck,
  ShoppingCart,
  Utensils,
  ShoppingBag,
  Fuel,
  Wifi,
  QrCode,
  Monitor,
  Infinity,
  X
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

const useScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])
  return { scrollYProgress, scaleX }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
}

const cardHoverVariants = {
  initial: { y: 0, scale: 1 },
  hover: {
    y: -12, scale: 1.02,
    transition: { type: "spring", stiffness: 400, damping: 25 }
  }
}

const statItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay) => ({
    opacity: 1, scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 20, delay }
  })
}

// Modal Component
const ProductModal = ({ product, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const getProductContent = () => {
    switch(product) {
      case 'PerseusPay':
        return {
          title: 'PerseusPay',
          tagline: 'One Switch. Every Channel. Total Control.',
          capabilities: [
            'Multi-channel acquiring (POS, IPG, NCMC, NETC, Micro ATM, UPI)',
            'Card Management & Issuance Processing',
            'DCC & MCC Transaction Support',
            'High-success-rate MPI',
            'Domestic & International Processing'
          ],
          gradient: 'from-blue-500 to-cyan-500'
        }
      case 'VISTA':
        return {
          title: 'VISTA',
          tagline: 'Control the Entire Acquiring Lifecycle.',
          capabilities: [
            'Merchant Onboarding & Inventory Management',
            'Transaction-Level Interchange Calculation',
            'Domestic, International, DCC & MCC Analytics',
            'Network Cost Breakup (Switching, Chargeback, MPI, Pre-auth, Refund)',
            'Merchant & Aggregator Payout',
            'Fraud, Risk, Refund & Dispute Management'
          ],
          gradient: 'from-emerald-500 to-teal-500'
        }
      case 'Europa':
        return {
          title: 'Europa',
          tagline: 'Route Smarter. Convert Better.',
          capabilities: [
            'Dynamic Multi-Bank Routing',
            'API-based Rule Engine',
            'Routing Based on Pricing & Success Rate',
            'Improved Authorization & Cost Optimization'
          ],
          gradient: 'from-purple-500 to-pink-500'
        }
      default:
        return null
    }
  }

  const content = getProductContent()
  if (!content) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative max-w-2xl w-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-white/20 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`bg-gradient-to-r ${content.gradient} p-6 relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-3xl font-bold text-white">{content.title}</h2>
          <p className="text-white/80 mt-2 text-lg">{content.tagline}</p>
        </div>

        {/* Body */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-400" />
            Capabilities
          </h3>
          <ul className="space-y-3">
            {content.capabilities.map((cap, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{cap}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-8 flex justify-end">
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600">
              <Link href="/contact" onClick={onClose}>
                Request Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function HomePage() {
  const { scaleX } = useScrollProgress()
  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const featuresRef = useRef(null)
  const ctaRef = useRef(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [particles, setParticles] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)

  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 })
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.1 })
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.5 })

  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 150])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.5])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const newParticles = Array.from({ length: 50 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        duration: Math.random() * 15 + 8,
        delay: Math.random() * 5,
        size: Math.random() * 3 + 1
      }))
      setParticles(newParticles)
    }
  }, [])

  const stats = [
    { value: "₹18T+", label: "Transaction Volume", icon: BarChart3, description: "Processed across our infrastructure", color: "from-blue-400 to-cyan-500" },
    { value: "99.99%", label: "Platform Uptime", icon: Shield, description: "Enterprise-grade reliability SLA", color: "from-emerald-400 to-teal-500" },
    { value: "7+", label: "Years in Operation", icon: Award, description: "Trusted fintech infrastructure partner", color: "from-purple-400 to-pink-500" },
    { value: "1 Week", label: "Avg. Implementation", icon: Zap, description: "Fast deployment, zero disruption", color: "from-orange-400 to-red-500" },
  ]

  const features = [
    {
      icon: CreditCard,
      title: "PerseusPay",
      desc: "Core switching & card processing across POS, IPG, NCMC, NETC, Micro ATM and UPI. Supports DCC & MCC transactions with high-success-rate MPI and domestic & international processing.",
      gradient: "from-blue-500 to-cyan-500",
      benefit: "One Switch. Every Channel. Total Control.",
      href: "#",
      onClick: () => setSelectedProduct("PerseusPay")
    },
    {
      icon: Building2,
      title: "VISTA",
      desc: "Full acquiring lifecycle management — merchant onboarding & inventory, transaction-level interchange calculation, network cost breakup, fraud & dispute management, and payout.",
      gradient: "from-emerald-500 to-teal-500",
      benefit: "Control the Entire Acquiring Lifecycle.",
      href: "#",
      onClick: () => setSelectedProduct("VISTA")
    },
    {
      icon: GitBranch,
      title: "Europa",
      desc: "Dynamic multi-bank routing engine. API-based rules with intelligent routing on pricing & success rate for improved authorization rates and cost optimization across all acquirers.",
      gradient: "from-purple-500 to-pink-500",
      benefit: "Route Smarter. Convert Better.",
      href: "#",
      onClick: () => setSelectedProduct("Europa")
    },
    {
      icon: BarChart3,
      title: "Smart Analytics",
      desc: "Transaction-level financial intelligence with domestic, international, DCC & MCC analytics. Full network cost breakup across switching, chargeback, MPI, pre-auth, and refund.",
      gradient: "from-orange-500 to-red-500",
      benefit: "Data-driven decisions at scale"
    },
    {
      icon: Infinity,
      title: "Elastic Scalability",
      desc: "Cloud-native, on-premise, or hybrid deployment with high TPS capability, load balancing and instant failover — built to scale with your institution's growth.",
      gradient: "from-blue-500 to-purple-500",
      benefit: "Cloud-Native / Hybrid / On-Premise"
    },
    {
      icon: BadgeCheck,
      title: "Compliance Ready",
      desc: "PCI-DSS compliant infrastructure designed to work natively with Visa, Mastercard, RuPay and NPCI ecosystems including UPI, across all regulated environments.",
      gradient: "from-cyan-500 to-emerald-500",
      benefit: "PCI-DSS Certified"
    }
  ]

  const coreSolutions = [
    {
      icon: Monitor,
      title: "POS / MPOS",
      desc: "Deployment, management, transaction processing, merchant analytics, reconciliation and back-office processing for banks and financial institutions.",
      href: "/products/POS-MPOS"
    },
    {
      icon: Globe,
      title: "E-Commerce Gateway",
      desc: "Real-time secure transactions, localised shopping experience, best-in-class fraud detection, and boosted conversion rates for your online business.",
      href: "/products/E-commerceGateway"
    },
    {
      icon: QrCode,
      title: "Bharat QR & UPI",
      desc: "Interoperable QR payments across MasterCard, Visa and RuPay. Dynamic or static QR codes — no POS machine required. Instant payment confirmation.",
      href: "/products/BharatQR-UPI"
    },
  ]

  const industries = [
    { icon: Building2, title: "Banking & Finance", desc: "Swift operations for business and retail banking — seamless customer experiences at every touchpoint." },
    { icon: ShoppingCart, title: "Department & Retail", desc: "Personalisation, faster checkouts, convenience and consistency wherever your shoppers are." },
    { icon: Utensils, title: "Restaurants", desc: "Digital service solutions that allow you to offer an unmatched dining experience to your customers." },
    { icon: ShoppingBag, title: "Grocery & Mass Merchandise", desc: "Stand out in the crowd and build meaningful relationships with shoppers — new and returning." },
    { icon: Fuel, title: "Convenience Industry", desc: "From food services and car wash to fuel — simplified payments to keep your customers moving." },
    { icon: Wifi, title: "Telecom & Technology", desc: "Get your network to markets faster, maximise global presence and optimise the customer experience." },
  ]

  const whyPayNext = [
    {
      letter: "N",
      title: "Never Let You Down",
      desc: "With a team comprising a dynamic and passionate group of individuals, our clients trust us because we are dependable. At PayNext, we strive to build and maintain long-term relationships with all our clients.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      letter: "E",
      title: "Experience the Best",
      desc: "With great experience comes great service, and PayNext is an expert in offering you both. We manage numerous complex solutions at the back-end while simplifying the front-end experience for your customers.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      letter: "X",
      title: "Xtra Value for You",
      desc: "We believe that things are the best when they bring you maximum value. When it comes to payments, we offer our clients solutions that are effective and affordable.",
      color: "from-purple-500 to-pink-500"
    },
    {
      letter: "T",
      title: "There Is Always a Solution",
      desc: "Being ahead of the curve in providing cashless payment solutions, no challenge is too big for us. No matter what your need, we endeavour to offer best-in-class solutions that deliver maximum satisfaction.",
      color: "from-orange-500 to-red-500"
    },
  ]

  const clients = [
    "Pine Labs", "CC Avenue", "Cashfree", "Mswipe", "PayGlocal",
    "Chalo", "YES Bank", "Federal Bank", "RBL Bank", "EnKash",
    "Rapipay", "Goa State Co-operative Bank"
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      {/* Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* ... hero content remains the same ... */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-[150px]"
            animate={{ x: [0, 100, 0], y: [0, -80, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-[150px]"
            animate={{ x: [0, -120, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[200px]"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <motion.div
          className="container mx-auto px-6 text-center relative z-10"
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        >
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <motion.span
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2 mb-8"
              whileHover={{ scale: 1.05 }}
              animate={{ boxShadow: ["0 0 0 0 rgba(59,130,246,0)", "0 0 0 2px rgba(59,130,246,0.3)", "0 0 0 0 rgba(59,130,246,0)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                Certified Technology Service Provider
              </span>
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight"
          >
            Speed Shapes Your
            <motion.span
              className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent relative"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% auto" }}
            >
              NEXT Experience
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-2xl -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base  mb-12 leading-relaxed"
          >
            PayNext is a Certified Technology Service Provider (TSP) delivering unified payment
            infrastructure across acquiring, issuance, and orchestration ecosystems.{" "}
            <span className="text-white/80">
              Delivering bank-grade switching, operational intelligence, and dynamic routing
              infrastructure for institutions operating at scale.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-5 justify-center flex-wrap"
          >
            <Button asChild size="lg" className="group relative overflow-hidden text-base px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 border-0">
              <Link href="/contact">
                <span className="relative z-10 flex items-center gap-2">
                  Request Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </Button>

            <Button variant="outline" asChild size="lg" className="backdrop-blur-xl border-white/20 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 text-base px-8 py-6 text-white">
              <Link href="/solutions" className="flex items-center gap-2">
                Know Our Solutions
                <Play className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

         
        </motion.div>
      </section>

      {/* STATS */}
      <section ref={statsRef} className="py-28 relative">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                custom={i * 0.1}
                variants={statItemVariants}
                whileHover={{ y: -12, transition: { duration: 0.2 } }}
                className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center overflow-hidden cursor-pointer"
              >
                <motion.div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} p-0.5 mx-auto mb-5`}>
                    <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <motion.div
                    className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-300 text-sm mt-3 font-semibold">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-2">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CORE SOLUTIONS */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-5 py-2 mb-5"
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Core Solutions</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              One-Stop for All Things{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Transactional
              </span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
              From point-of-sale to payments and loyalty programs — our unique service solutions help your customers enjoy a swift transaction experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreSolutions.map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden cursor-pointer hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <solution.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">{solution.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{solution.desc}</p>
                <Link href={solution.href} className="inline-flex items-center gap-1 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS / FEATURES */}
      <section ref={featuresRef} className="py-28 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-5 py-2 mb-5"
            >
              <Rocket className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Platform Capabilities</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Engineered for{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                Scale & Reliability
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
              Three unified platforms covering acquiring, issuance, and orchestration for modern financial institutions
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={cardHoverVariants}
                initial="initial"
                whileHover="hover"
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden cursor-pointer"
                onClick={feature.onClick}
              >
                <motion.div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <motion.div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-6`}
                    whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.3 } }}
                  >
                    <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{feature.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-blue-400/60 font-mono">{feature.benefit}</span>
                    {feature.onClick && (
                      <motion.div className="flex items-center gap-1 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="flex items-center gap-1">
                          View Details <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-28 relative bg-gradient-to-b from-slate-900/0 via-slate-900/30 to-slate-900/0">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-emerald-500/10 rounded-full px-5 py-2 mb-5"
            >
              <Globe className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Industries We Work For</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
              Serving Every{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Sector That Transacts
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative flex items-start gap-5 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <motion.div
                  className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300 flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <industry.icon className="w-6 h-6 text-blue-400" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2 text-lg group-hover:text-blue-400 transition-colors">{industry.title}</h3>
                  <p className="text-gray-400 text-sm">{industry.desc}</p>
                </div>
                <CheckCircle2 className="w-5 h-5 text-blue-400/30 group-hover:text-blue-400 transition-colors absolute bottom-4 right-4" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PAYNEXT — N-E-X-T */}
      <section className="py-28 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-5 py-2 mb-5"
            >
              <Star className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Why PayNext</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
              4 Reasons Clients{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Choose Us
              </span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
              We call ourselves PayNext for a reason. By doing things differently, we keep ourselves ahead of the curve and believe in pushing our clients to the next level.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPayNext.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden cursor-pointer"
              >
                <motion.div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6`}>
                    <span className="text-3xl font-black text-white">{item.letter}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT ECOSYSTEM */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-5 py-2 mb-5">
              <Users className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Trusted Client Ecosystem</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Powering Industry Leaders</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              From leading private banks to fast-growing fintechs — institutions across India trust PayNext.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {clients.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-400/40 hover:bg-white/10 transition-all duration-300 cursor-default"
              >
                <span className="text-gray-300 font-medium text-sm">{client}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="py-32 relative overflow-hidden">
        {particles.length > 0 && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                style={{ width: particle.size, height: particle.size, opacity: 0.3 }}
                initial={{ x: particle.x, y: particle.y }}
                animate={{ y: [particle.y, -100, window.innerHeight + 100], opacity: [0, 0.5, 0] }}
                transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay, ease: "linear" }}
              />
            ))}
          </div>
        )}

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-6"
            >
              <div className="p-4 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-xl">
                <Rocket className="w-10 h-10 text-blue-400" />
              </div>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Payment Stack?
              </span>
            </h2>

            <p className="text-gray-300 mb-10 text-xl max-w-2xl mx-auto leading-relaxed">
              Join banks and fintechs across India who have modernized their payment infrastructure with PayNext. Average go-live in just 1 week.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Button asChild size="lg" className="group relative overflow-hidden text-lg px-10 py-7 bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 border-0">
                <Link href="/contact">
                  <span className="relative z-10 flex items-center gap-2">
                    Book a Demo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap justify-center gap-6 text-gray-500 text-sm"
            >
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400/60" /> Solutions team responds in 24–48 hours</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400/60" /> Free technical consultation</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400/60" /> sales@paynext.co.in</span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}