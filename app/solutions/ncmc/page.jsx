"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Zap,
  Database,
  Network,
  BarChart3,
  Lock,
  Server,
  Activity,
  Train,
  Wifi,
  WifiOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NCMCPage() {
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
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-6">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                🚇 NCMC Solutions
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              National Common Mobility Card
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Switching Solutions
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Power next-generation mobility payments with PayNext NCMC Switching Solutions. Enable seamless, interoperable, and scalable transit ecosystems with a trusted NPCI-certified TSP.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <a href="#contact">
                  Request Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                size="lg"
                className="border-white/20 hover:bg-white/10 text-white"
              >
                <Link href="/solutions">All Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Comprehensive NCMC Platform for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Transit & Mobility Ecosystems
                </span>
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                PayNext provides a comprehensive NCMC switching platform enabling seamless, interoperable, and contactless payments across public transport, toll plazas, and parking ecosystems. As an <strong className="text-foreground">NPCI-certified Technology Service Provider (TSP)</strong> for both Issuance and Acquiring, PayNext empowers banks, transit operators, and mobility partners with a high-performance, compliant, and scalable switching infrastructure.
              </p>
              <p className="text-lg leading-relaxed">
                Our platform supports real-time and offline (stored value) transactions, ensuring uninterrupted commuter experience even in low-connectivity environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Complete{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                NCMC Infrastructure
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* NCMC Acquiring Switch */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Network className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                NCMC Acquiring Switch
              </h3>
              <p className="text-muted-foreground mb-6">
                Fully compliant acquiring switch connecting transit operators and acceptance infrastructure to the NCMC ecosystem.
              </p>
              <ul className="space-y-3">
                {[
                  "Integration with metro, bus, rail, toll, and parking systems",
                  "Support for offline & online transaction modes",
                  "High-speed processing for AFC (Automatic Fare Collection) environments",
                  "Multi-operator and multi-city interoperability",
                  "QR / card / hybrid acceptance support (where applicable)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NCMC Issuance Switch */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Server className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                NCMC Issuance Switch
              </h3>
              <p className="text-muted-foreground mb-6">
                End-to-end switching solution for banks issuing NCMC cards (RuPay-based).
              </p>
              <ul className="space-y-3">
                {[
                  "Card lifecycle management (issuance, activation, blocking, renewal)",
                  "Integration with CBS / prepaid / wallet systems",
                  "Support for stored value (offline purse) and online account-based transactions",
                  "Hotlisting, balance checks, and transaction controls",
                  "Customer usage tracking and reporting",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* End-to-End Switching Platform */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Database className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                End-to-End Switching Platform
              </h3>
              <p className="text-muted-foreground mb-6">
                Central switching layer between transit operators, banks, and NPCI.
              </p>
              <ul className="space-y-3">
                {[
                  "Transit operators (Metro, Bus, Rail)",
                  "Acquiring Banks",
                  "Issuing Banks",
                  "NPCI NCMC system",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Multi-Use Acceptance Ecosystem */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Activity className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Multi-Use Acceptance Ecosystem
              </h3>
              <p className="text-muted-foreground mb-6">
                Extend NCMC usage beyond transit to multiple acceptance points.
              </p>
              <ul className="space-y-3">
                {[
                  "Toll Plazas (National & State Highways)",
                  "Parking (Airports, Malls, Smart Cities)",
                  "Retail acceptance (where enabled)",
                  "Integrated urban mobility ecosystems",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Key Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Enterprise-Grade{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                NCMC Platform
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "NPCI Certified",
                desc: "Certified for NCMC Issuance & Acquiring",
              },
              {
                icon: WifiOff,
                title: "Offline Capability",
                desc: "Stored value transactions without connectivity",
              },
              {
                icon: Wifi,
                title: "Real-Time & Deferred",
                desc: "Support for both clearing modes",
              },
              {
                icon: Zap,
                title: "High Throughput",
                desc: "Handle peak transit loads seamlessly",
              },
              {
                icon: Train,
                title: "Multi-City Interoperable",
                desc: "Works across cities & operators",
              },
              {
                icon: Lock,
                title: "Secure & Compliant",
                desc: "PCI-DSS aligned architecture",
              },
              {
                icon: Network,
                title: "API-Driven Integration",
                desc: "Fast and flexible integrations",
              },
              {
                icon: Activity,
                title: "Centralized Monitoring",
                desc: "Complete visibility with alerts",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transaction Processing Modes */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Transaction Processing
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Dual-Mode{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Processing Architecture
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Offline Mode */}
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <WifiOff className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Offline Mode (Transit Use Case)
                </h3>
                <ul className="space-y-3">
                  {[
                    "Fast tap-and-go experience",
                    "Transactions stored locally and synced later",
                    "Ideal for metro/bus environments with high throughput",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Online Mode */}
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Wifi className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Online Mode
                </h3>
                <ul className="space-y-3">
                  {[
                    "Real-time authorization via issuing bank",
                    "Used in tolls, parking, and retail scenarios",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reconciliation & Settlement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Reconciliation & Settlement
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Robust{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Settlement Engine
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                PayNext provides a robust reconciliation and settlement engine
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Offline transaction clearing & batching",
                "Switch vs NPCI reconciliation",
                "Issuer vs Acquirer settlement validation",
                "Exception management & reporting",
                "Automated MIS and dashboards",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Compliance & Security
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Enterprise-Grade{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Security Standards
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Fully compliant with NPCI NCMC guidelines",
                "EMV-based RuPay card standards",
                "PCI-DSS compliant infrastructure",
                "Secure encryption and transaction validation",
                "Audit-ready logs and reporting",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why PayNext */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Why PayNext for NCMC
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Your Trusted{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  NCMC Partner
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Certified TSP for both Issuance & Acquiring",
                "Proven expertise in high-volume switching (Transit + Toll + Payments)",
                "Unified platform across NCMC, NETC, UPI, POS, Micro ATM, PG",
                "Strong support for offline + online hybrid models",
                "Faster deployment with ready integrations",
                "Advanced reconciliation & dispute handling",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Use Cases
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                NCMC Across{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Multiple Sectors
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Metro Rail Ticketing Systems",
                "City Bus Transport Systems",
                "Integrated Urban Mobility Projects",
                "Toll & Parking Integration with NCMC",
                "Bank-led NCMC Card Issuance Programs",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <Train className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Deploy NCMC Solutions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with our NCMC solutions team to discuss your transit ecosystem requirements.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                size="lg"
                className="border-border hover:bg-muted"
              >
                <Link href="/solutions">View All Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}