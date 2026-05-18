"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Rocket,
  Layers,
  MessageSquare,
  Mail,
  Building2,
  Phone,
  Clock,
  Send,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ── DATA ─────────────────────────────────────────────────────────────────────

const coreSolutions = [
  {
    icon: "💳",
    title: "POS / MPOS",
    desc: "Simplify your business processes with our comprehensive POS solutions. We offer transaction processing services, deployment and management, merchant analytics, reconciliation & back-office processing.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🌐",
    title: "E-Commerce Gateway",
    desc: "Convenient and cost-effective e-commerce payment solutions. Our gateway solution takes place in real-time, giving you secure and safe transactions with best-in-class fraud detection.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: "📱",
    title: "Bharat QR & UPI",
    desc: "We provide Bharat QR services to all our merchants, allowing customers to make payments via dynamic or static QR codes. No POS machine required — simply use the QR code on your cash counter.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: "🛣️",
    title: "NETC", // Changed from "NETC Switching"
    desc: "NPCI-certified NETC switching solutions for FASTag issuance...",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: "🚇",
    title: "NCMC", // Changed from "NCMC Solutions"
    desc: "Power next-generation mobility payments with NCMC switching...",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: "🏧",
    title: "ATM Switching",
    desc: "Modernize your ATM network with secure, scalable...",
    gradient: "from-cyan-500 to-blue-500",
  },
];

const additionalSolutions = [
  "Merchant Smart Onboarding",
  "PCI Compliance",
  "Portfolio Management",
  "Transaction Processing",
  "Faster Settlement & Funding",
  "Chargeback Support",
  "Merchant Statements",
  "E-Commerce Acquiring",
  "Analytics / Business Intelligence",
  "Merchant Portal & Advanced Reporting",
  "Advanced Fraud Management",
  "Tokenization & E2E Encryption",
  "Integration with Accounting / ERP",
  "Integrated POS System",
  "Loyalty Programs Support",
  "Mobile Recharge",
  "Consumer Loan at POS",
  "Omni-Channel Processing & Reporting",
  "BBPS Support",
];

// Updated contact info - matching careers page style
const contactInfo = [
  {
    icon: Building2,
    title: "Head Office",
    lines: ["PayNext Private Limited", "Mumbai, India"],
  },
  {
    icon: Mail,
    title: "Enterprise Inquiries",
    lines: ["info@paynext.co.in"],
  },
  {
    icon: Clock,
    title: "Solutions Team Response Time",
    lines: ["24–48 Hours"],
  },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0a1628] via-[#0f2744] to-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Our Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Swift Transactions,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Every Time
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our unique service solutions help you offer your customers a swift
              transaction experience — from point-of-sale to payments and
              loyalty programs. One-stop for all things transactional.
            </p>
            <div className="flex gap-4 justify-center flex-wrap mt-10">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <a href="#contact">
                  Get in Touch
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                size="lg"
                className="border-white/20 hover:bg-white/10 text-white"
              >
                <Link href="/products">Explore Platforms</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Core Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Our Flagship{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Service Offerings
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              POS, E-Commerce, and QR / UPI — the three pillars of our
              merchant-facing payment infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coreSolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="text-5xl mb-6">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {solution.desc}
                </p>
                <Link
                  href={
                    solution.title === "POS / MPOS"
                      ? "/products/POS-MPOS"
                      : solution.title === "E-Commerce Gateway"
                        ? "/products/E-commerceGateway"
                        : solution.title === "Bharat QR & UPI"
                          ? "/products/BharatQR-UPI"
                          : solution.title === "NETC"
                            ? "/solutions/netc-switching"
                            : solution.title === "NCMC"
                              ? "/solutions/ncmc"
                              : solution.title === "ATM Switching"
                                ? "/solutions/atm-switching"
                                : "#"
                  }
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Architecture */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Technology & Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Enterprise Scale
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our payment infrastructure is designed to handle mission-critical
              workloads with uncompromising reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Cloud-Native / On-Premise / Hybrid Deployment",
                desc: "Flexible deployment options to match your infrastructure requirements",
              },
              {
                title: "High TPS Capability",
                desc: "Process thousands of transactions per second with minimal latency",
              },
              {
                title: "Load Balancing & Failover",
                desc: "Automatic traffic distribution and failover for 99.99% uptime",
              },
              {
                title: "Secure API Framework",
                desc: "Enterprise-grade security with OAuth, encryption, and rate limiting",
              },
              {
                title: "Real-time Monitoring",
                desc: "Comprehensive dashboards and alerts for complete visibility",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Differentiation */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-5 py-2 mb-5">
              <Star className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">
                Strategic Differentiation
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              PayNext ={" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Unified Infrastructure Partner
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Unlike aggregators or orchestration-only providers, PayNext
              delivers end-to-end payment infrastructure
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 mb-8">
              <p className="text-foreground text-center text-lg mb-8">
                Unlike aggregators or orchestration-only providers, PayNext
                delivers:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Core Acquiring Switch",
                  "Card Issuance Processing",
                  "Acquiring BAU Management",
                  "Transaction-Level Financial Intelligence",
                  "Dynamic Multi-Bank Optimization",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison highlight */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-muted/30 border border-border">
                <div className="text-red-400/60 text-sm mb-2">Aggregators</div>
                <div className="text-muted-foreground text-xs">
                  Limited to payment aggregation only
                </div>
              </div>
              <div className="text-center p-6 rounded-xl bg-muted/30 border border-border">
                <div className="text-yellow-400/60 text-sm mb-2">
                  Orchestration-Only
                </div>
                <div className="text-muted-foreground text-xs">
                  Routing only, no acquiring/issuance
                </div>
              </div>
              <div className="text-center p-6 rounded-xl bg-primary/5 border border-primary/30">
                <div className="text-primary text-sm mb-2 font-semibold">
                  PayNext
                </div>
                <div className="text-foreground text-xs">
                  Unified Acquiring + Issuance + Orchestration
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Solutions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Other Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              A Complete Suite of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Payment Services
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From fraud management to loyalty programs — every service you need
              to run a complete payment operation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalSolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">
                    {solution}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Get{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Started?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Reach out to our solutions team and we'll help you find the right
              service for your business — response within 24–48 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`bg-card border border-border rounded-2xl p-6 ${index === 0 ? "sm:col-span-2" : ""}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    {info.lines.map((line, i) => (
                      <p
                        key={i}
                        className="text-sm text-muted-foreground leading-relaxed"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {/* What happens next */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">
                    What Happens Next?
                  </h3>
                </div>
                <div className="space-y-5">
                  {[
                    {
                      step: "01",
                      title: "We review your inquiry",
                      desc: "Our solutions team reads every message and matches you with the right expert.",
                    },
                    {
                      step: "02",
                      title: "Response within 24–48 hrs",
                      desc: "Expect a reply at info@paynext.co.in with initial guidance or a meeting invite.",
                    },
                    {
                      step: "03",
                      title: "Technical Consultation",
                      desc: "We schedule a deep-dive session to understand your infrastructure requirements.",
                    },
                    {
                      step: "04",
                      title: "Tailored Proposal",
                      desc: "Receive a solution proposal with implementation timeline — typically just 1 week.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <span className="text-primary font-bold text-sm font-mono mt-0.5">
                        {item.step}
                      </span>
                      <div>
                        <p className="font-medium text-foreground text-sm">
                          {item.title}
                        </p>
                        <p className="text-muted-foreground text-sm mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct email CTA */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    For Enterprise Inquiries
                  </p>
                  <a
                    href="mailto:info@paynext.co.in"
                    className="text-primary font-semibold hover:underline"
                  >
                    info@paynext.co.in
                  </a>
                </div>
              </div>

              {/* Technical Consultation CTA */}
              <div className="bg-card border border-border rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    For Technical Discussions
                  </p>
                  <p className="text-foreground font-medium text-sm">
                    Schedule a Technical Consultation through our website
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-3xl p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Send us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form and our solutions team will get back to you
                within 24–48 hours.
              </p>

              <form action="https://formspree.io/f/your-form-id" method="POST">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Work Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john@yourbank.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Organisation Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your Bank / Fintech"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      I'm interested in
                    </label>
                    <select
                      name="interest"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a solution</option>
                      <option value="pos">POS / MPOS Solutions</option>
                      <option value="ecommerce">E-Commerce Gateway</option>
                      <option value="bharatqr">Bharat QR & UPI</option>
                      <option value="fraud">Advanced Fraud Management</option>
                      <option value="analytics">
                        Analytics / Business Intelligence
                      </option>
                      <option value="demo">Request a Demo</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us about your payment requirements..."
                      required
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
