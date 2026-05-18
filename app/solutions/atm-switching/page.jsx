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
  CreditCard,
  RefreshCw,
  Eye,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ATMSwitchingPage() {
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
                🏧 ATM Switching Solutions
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Modernize Your ATM Network
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                with Secure Switching Solutions
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Enable secure, scalable, and interoperable ATM transaction processing with a trusted technology partner. OEM-compatible switching provider for all major ATM vendors.
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
                Robust ATM Switching Platform for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Modern Banking Ecosystems
                </span>
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                PayNext offers a robust, secure, and scalable ATM switching platform enabling banks and financial institutions to seamlessly manage and process transactions across on-us, off-us, and interoperable ATM networks.
              </p>
              <p className="text-lg leading-relaxed">
                As an <strong className="text-foreground">OEM-compatible switching provider</strong>, PayNext integrates with all major ATM hardware vendors and software stacks, ensuring flexibility, faster deployment, and long-term scalability. Our platform is designed to deliver high availability, real-time processing, and regulatory compliance, making it ideal for modern banking ecosystems.
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
                ATM Infrastructure
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* ATM Transaction Switching */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <CreditCard className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                ATM Transaction Switching
              </h3>
              <p className="text-muted-foreground mb-6">
                High-performance ATM switch supporting all transaction types.
              </p>
              <ul className="space-y-3">
                {[
                  "Cash Withdrawal (On-us / Off-us)",
                  "Balance Inquiry",
                  "Mini Statement",
                  "PIN Change / PIN Generation",
                  "Fund Transfer (where enabled)",
                  "Value-added services",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                Supports domestic and interoperable transactions across networks.
              </p>
            </div>

            {/* Multi-Network Integration */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Network className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Multi-Network Integration
              </h3>
              <p className="text-muted-foreground mb-6">
                Seamless connectivity ensuring interoperability and high transaction success rates.
              </p>
              <ul className="space-y-3">
                {[
                  "Card Networks (RuPay, Visa, Mastercard)",
                  "Interchange networks (as per bank integrations)",
                  "Sponsor / settlement banks",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* OEM Compatibility */}
            <div className="bg-card border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Settings className="w-7 h-7 text-primary" />
              </div>
              <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                KEY DIFFERENTIATOR
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                OEM Compatibility
              </h3>
              <p className="text-muted-foreground mb-6">
                PayNext ATM switch is OEM-agnostic and fully compatible with:
              </p>
              <ul className="space-y-3">
                {[
                  "NCR, Diebold Nixdorf, Hitachi, Vortex, and other ATM providers",
                  "Multiple ATM middleware systems",
                  "Legacy and modern ATM infrastructures",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-foreground font-medium mt-4">
                This ensures no vendor lock-in and smooth migration from existing systems.
              </p>
            </div>

            {/* ATM Monitoring & Management */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                ATM Monitoring & Management
              </h3>
              <p className="text-muted-foreground mb-6">
                Integrated capabilities for comprehensive ATM operations.
              </p>
              <ul className="space-y-3">
                {[
                  "Real-time ATM health monitoring",
                  "Transaction tracking and alerts",
                  "Downtime and fault management",
                  "Centralized dashboard for operations teams",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* EMV & Security Compliance */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 lg:col-span-2">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Lock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                EMV & Security Compliance
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "EMV-compliant transaction processing",
                  "End-to-end encryption",
                  "PCI-DSS aligned infrastructure",
                  "Secure key management & HSM integration",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
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
                ATM Platform
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Server,
                title: "High Availability",
                desc: "99.9%+ uptime architecture",
              },
              {
                icon: Zap,
                title: "Real-Time Authorization",
                desc: "Instant transaction processing",
              },
              {
                icon: BarChart3,
                title: "Scalable High TPS",
                desc: "Handle peak loads seamlessly",
              },
              {
                icon: Settings,
                title: "OEM-Agnostic",
                desc: "Works with all major ATM vendors",
              },
              {
                icon: Network,
                title: "Smart Routing",
                desc: "Centralized switch with intelligent routing",
              },
              {
                icon: Database,
                title: "Advanced Logging",
                desc: "Complete audit trails",
              },
              {
                icon: RefreshCw,
                title: "API-Driven",
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Reconciliation & Settlement
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Comprehensive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Reconciliation Engine
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                PayNext provides a comprehensive reconciliation engine for ATM operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "On-us and off-us transaction reconciliation",
                "Switch vs network reconciliation",
                "Automated settlement tracking",
                "Exception handling and reporting",
                "Chargeback and dispute support",
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

      {/* Fraud & Risk Management */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Fraud & Risk Management
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Advanced{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Security Controls
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Transaction monitoring rules",
                "Velocity checks and limits",
                "Suspicious activity alerts",
                "Integration with bank fraud systems",
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Why PayNext for ATM Switching
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Your Trusted{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  ATM Partner
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "OEM-Compatible (Works with all major ATM vendors)",
                "Proven expertise in high-volume transaction switching",
                "Unified platform supporting ATM, POS, UPI, NETC, NCMC, Micro ATM, IPG",
                "Faster deployment and seamless migration",
                "Strong reconciliation & dispute management",
                "Enterprise-grade security and compliance",
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
              Ready to Modernize Your ATM Network?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with our ATM switching solutions team to discuss your banking infrastructure requirements.
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