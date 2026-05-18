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
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NETCPage() {
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
                🛣️ NETC Switching Solutions
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              NPCI-Certified NETC
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Switching Solutions
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Enable seamless FASTag-based toll payments across National Highways, State Toll Plazas, and Parking ecosystems with our robust and scalable NETC switching platform.
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
                Complete NETC Infrastructure for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Toll & Parking Ecosystems
                </span>
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                PayNext offers a robust and scalable NETC switching solution that enables seamless FASTag-based toll payments across National Highways, State Toll Plazas, and Parking ecosystems. As an <strong className="text-foreground">NPCI-certified Technology Service Provider (TSP)</strong> for both Issuance and Acquiring, PayNext empowers banks, toll operators, and ecosystem partners with a fully compliant and high-performance transaction processing platform.
              </p>
              <p className="text-lg leading-relaxed">
                Our solution is designed to ensure real-time authorization, high transaction success rates, and efficient reconciliation, enabling a frictionless experience for both operators and end users.
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
              Comprehensive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                NETC Solutions
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* NETC Acquiring Switch */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Network className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                NETC Acquiring Switch
              </h3>
              <p className="text-muted-foreground mb-6">
                Fully compliant acquiring switch connecting toll plazas and parking operators to the NETC ecosystem.
              </p>
              <ul className="space-y-3">
                {[
                  "Integration with NPCI NETC central system",
                  "Real-time FASTag transaction processing",
                  "Multi-lane, high TPS capability",
                  "Support for National & State Toll Plazas",
                  "Parking integration (malls, airports, smart cities)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NETC Issuance Switch */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Server className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                NETC Issuance Switch
              </h3>
              <p className="text-muted-foreground mb-6">
                Complete FASTag issuance switch solution for banks and issuers.
              </p>
              <ul className="space-y-3">
                {[
                  "FASTag lifecycle management (issuance, activation, closure)",
                  "Wallet/account linking",
                  "Balance validation & debit processing",
                  "Tag status management (hotlist, blacklist, low balance)",
                  "Integration with CBS / Wallet systems",
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
                Central switching layer ensuring secure routing and minimal latency.
              </p>
              <ul className="space-y-3">
                {[
                  "Toll Plazas / Parking Operators",
                  "Acquiring Banks",
                  "Issuing Banks",
                  "NPCI NETC system",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Parking & Smart Mobility */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Activity className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Parking & Smart Mobility Integration
              </h3>
              <p className="text-muted-foreground mb-6">
                Extend NETC capabilities beyond tolling to parking and mobility.
              </p>
              <ul className="space-y-3">
                {[
                  "Smart city parking solutions",
                  "Airport parking systems",
                  "Commercial parking operators",
                  "Closed-loop mobility ecosystems",
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
                NETC Platform
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "NPCI Certified",
                desc: "Certified for NETC Issuance & Acquiring",
              },
              {
                icon: Zap,
                title: "Real-time Processing",
                desc: "Instant transaction authorization",
              },
              {
                icon: Server,
                title: "99.9%+ Uptime",
                desc: "High availability architecture",
              },
              {
                icon: BarChart3,
                title: "Scalable Infrastructure",
                desc: "Handle peak toll traffic seamlessly",
              },
              {
                icon: Database,
                title: "Advanced Reconciliation",
                desc: "T+0 / T+1 support with automation",
              },
              {
                icon: Lock,
                title: "Fraud Monitoring",
                desc: "Real-time fraud & risk detection",
              },
              {
                icon: Network,
                title: "API-driven Integration",
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

      {/* Reconciliation & Settlement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Reconciliation & Settlement
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Comprehensive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Reconciliation Framework
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                PayNext provides a comprehensive reconciliation framework ensuring transparency and accuracy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Switch vs NPCI file reconciliation",
                "Acquirer vs Issuer reconciliation",
                "Automated exception handling",
                "Detailed MIS & reporting dashboards",
                "Support for dispute and chargeback workflows",
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
                "Fully compliant with NPCI NETC guidelines",
                "PCI-DSS compliant infrastructure",
                "Secure data encryption & tokenization",
                "Audit-ready reporting and logs",
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
                Why PayNext for NETC
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Your Trusted{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  NETC Partner
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Certified TSP with deep ecosystem integration",
                "Proven expertise in high-volume transaction switching",
                "Unified platform supporting POS, UPI, NETC, NCMC, PG, Micro ATM",
                "Faster go-live with ready integrations",
                "Strong reconciliation & dispute management capabilities",
                "Dedicated support for banks, toll operators, and aggregators",
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

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Deploy NETC Switching?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with our NETC solutions team to discuss your toll plaza or parking ecosystem requirements.
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