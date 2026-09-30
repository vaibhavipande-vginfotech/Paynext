// Single source of truth for site copy. Every string here is taken from the client's documents:
//   [MASTER] PayNext_Website_Content_Master_Document_v2.pdf
//   [DECK]   PayNext_Plus_International_Positioning v1.1.pptx
// Do not add wording that is not in those documents.

import {
  CreditCard,
  Wallet,
  Network,
  ShieldCheck,
  TrendingUp,
  Building2,
  Boxes,
  BrainCircuit,
  Landmark,
  Rocket,
  Store,
  Cpu,
  Globe2,
  Repeat,
  GitBranch,
} from "lucide-react"

// [MASTER] Brand Positioning
export const brand = {
  positioning:
    "PayNext is a Certified Technology Service Provider (TSP) delivering unified payment infrastructure across acquiring, issuance, and orchestration ecosystems.",
  statement:
    "PayNext delivers bank-grade switching, operational intelligence, and dynamic routing infrastructure for institutions operating at scale.",
}

// [DECK] headline block
export const platform = {
  kicker: "Global positioning",
  name: "PayNext+",
  title: "The international payments operating platform",
  lead: "One platform to accept, issue, move, control and optimize money — with VISTA, CocoNet and intelligence woven in.",
  label: "Payments operating platform",
  ambition: ["Payment processor", "Payments platform", "Payments operating system"],
  ambitionLine: "Positioning ambition: evolve from payment processor → payments platform → payments operating system.",
}

// [DECK] five pillars (items verbatim)
export const pillars = [
  { id: "accept", name: "Accept", icon: CreditCard, lines: ["Card-Present", "Card-Not-Present", "PG • POS • UPI • NCMC • NETC"] },
  { id: "issue", name: "Issue", icon: Wallet, lines: ["Debit • Prepaid", "Cards • CMS • ACS"] },
  { id: "connect", name: "Connect", icon: Network, lines: ["Switch • Route", "Clear • Settle • Payout"] },
  { id: "control", name: "Control", icon: ShieldCheck, lines: ["Recon • Disputes", "Fraud • Risk • Compliance"] },
  { id: "optimize", name: "Optimize", icon: TrendingUp, lines: ["Merchant Scoring", "Profitability • Analytics"] },
]

// [DECK] layers (items verbatim). CocoNet and Intelligence Layer are placeholders per client instruction.
export const PLACEHOLDER = "Content coming soon"
export const layers = [
  {
    id: "vista",
    name: "VISTA",
    // Client (Sankar, 29 Sep 2026): use "Acquiring Management Platform"; "Payments Company ERP" is a future name.
    tag: "Acquiring Management Platform", // [MASTER] Core Platforms Overview
    href: "/platform/vista",
    icon: Building2,
    lines: ["Merchant Management", "Payment economics (Staging, Merchant Payments, Disputes, Recon)", "Finance"],
  },
  {
    id: "coconet",
    name: "CocoNet",
    tag: "Commerce Intelligence",
    href: "/platform/coconet",
    icon: Boxes,
    // Client: leave a placeholder until the content is written and vetted.
    placeholder: true,
    lines: [],
  },
  {
    id: "intelligence",
    name: "Intelligence Layer",
    tag: "CxO Buddy",
    href: "/platform/intelligence",
    icon: BrainCircuit,
    // Client: leave a placeholder until the content is written and vetted.
    placeholder: true,
    lines: [],
  },
]

// [DECK]
export const principles = ["One platform", "Modular", "API-first", "Controlled AI", "Enterprise-ready"]

// [DECK] audiences
export const audiences = [
  { id: "banks", name: "Banks", icon: Landmark },
  { id: "fintechs", name: "Fintechs", icon: Rocket },
  { id: "merchants", name: "Merchants", icon: Store },
  { id: "processors", name: "Payment processors", icon: Cpu },
  { id: "global", name: "Global", icon: Globe2 },
]

// [MASTER] Core Platforms Overview + capabilities + taglines
export const engines = [
  {
    id: "perseuspay",
    name: "PerseusPay",
    role: "Core Switching & Card Processing Platform",
    icon: Repeat,
    tagline: "One Switch. Every Channel. Total Control.",
    points: [
      "Multi-channel acquiring (POS, IPG, NCMC, NETC, Micro ATM, UPI)",
      "Card Management & Issuance Processing",
      "DCC & MCC Transaction Support",
      "High-success-rate MPI",
      "Domestic & International Processing",
    ],
  },
  {
    id: "vista",
    name: "VISTA",
    role: "Acquiring Management Platform",
    icon: Building2,
    tagline: "Control the Entire Acquiring Lifecycle.",
    points: [
      "Merchant Onboarding & Inventory Management",
      "Transaction-Level Interchange Calculation",
      "Domestic, International, DCC & MCC Analytics",
      "Network Cost Breakup (Switching, Chargeback, MPI, Pre-auth, Refund)",
      "Merchant & Aggregator Payout",
      "Fraud, Risk, Refund & Dispute Management",
    ],
  },
  {
    id: "europa",
    name: "Europa",
    role: "Payment Orchestration Platform",
    icon: GitBranch,
    tagline: "Route Smarter. Convert Better.",
    points: [
      "Dynamic Multi-Bank Routing",
      "API-based Rule Engine",
      "Routing Based on Pricing & Success Rate",
      "Improved Authorization & Cost Optimization",
    ],
  },
]

// Where each [MASTER] platform capability matches a [DECK] pillar's own wording.
export const pillarEngines = {
  accept: ["perseuspay"], // "Multi-channel acquiring (POS, IPG, NCMC, NETC, Micro ATM, UPI)"
  issue: ["perseuspay"], // "Card Management & Issuance Processing"
  connect: ["perseuspay", "europa"], // "Core Switching" / "Dynamic Multi-Bank Routing"
  control: ["vista"], // "Fraud, Risk, Refund & Dispute Management"
  optimize: ["vista", "europa"], // "Analytics" / "Cost Optimization"
}

// [MASTER] Trust & Scale Metrics
export const stats = [
  // Founded 2017 (company milestones) — computed so it never goes stale. Master doc said "7+" (written earlier).
  { value: `${new Date().getFullYear() - 2017}+`, label: "Years in Operation" },
  { value: "₹18 Trillion+", label: "Transaction Volume Processed" },
  { value: "99.99%", label: "Platform Uptime" },
  { value: "1 Week", label: "Average Implementation Timeline" },
]
export const statsExtra = ["Multi-Acquirer Infrastructure Support", "Cloud-Native Deployment Architecture"]

// [MASTER] Technology & Architecture
export const technology = [
  "Cloud-Native / On-Premise / Hybrid Deployment",
  "High TPS Capability",
  "Load Balancing & Failover",
  "Secure API Framework",
  "Real-time Monitoring",
]

// [MASTER] Compliance & Network Ecosystem
export const compliance = {
  networks: "Designed to work with Visa, Mastercard, RuPay, and NPCI ecosystems.",
  pci: "PCI-DSS Compliant Infrastructure.",
}

// [MASTER] Enterprise FAQ Highlights
export const faqHighlights = [
  { label: "Multi-acquirer support", value: "Yes" },
  { label: "CBS integration (VISTA)", value: "Yes" },
  { label: "Cloud-native deployment", value: "Yes" },
  { label: "DCC settlement support", value: "Yes" },
  { label: "Average implementation timeline", value: "1 Week" },
]

// [MASTER] Client Ecosystem
export const clients = [
  "Pine Labs", "CC Avenue", "Cashfree", "Mswipe", "PayGlocal", "Chalo",
  "YES Bank", "Federal Bank", "RBL Bank", "EnKash", "Rapipay", "Goa State Co-operative Bank",
]

// [MASTER] Strategic Differentiation
export const differentiation = {
  equation: "PayNext = Unified Acquiring + Issuance + Orchestration Infrastructure Partner",
  intro: "Unlike aggregators or orchestration-only providers, PayNext delivers:",
  points: [
    "Core Acquiring Switch",
    "Card Issuance Processing",
    "Acquiring BAU Management",
    "Transaction-Level Financial Intelligence",
    "Dynamic Multi-Bank Optimization",
  ],
}

// [MASTER] About Us
export const about = {
  intro:
    "Founded with a vision to modernize institutional payment infrastructure, PayNext operates as a B2B payment technology partner headquartered in Mumbai.",
  vision: "To power secure, scalable, and intelligent payment ecosystems.",
  mission: "To enable banks and fintechs with unified switching, operational intelligence, and routing infrastructure.",
  values: ["Security First", "Reliability & Performance", "Transparency", "Modular Innovation"],
}

// [MASTER] Careers
export const careers = {
  title: "Join a team building next-generation payment infrastructure.",
  whyTitle: "Why Work With PayNext?",
  why: [
    "Work on enterprise-grade fintech infrastructure",
    "Exposure to banking & network ecosystems",
    "High-performance engineering culture",
    "Growth-focused environment",
  ],
  welcome: "We welcome professionals across Engineering, Product, Risk, Compliance, and Sales.",
}

// [MASTER] Contact Us + [LIVE] https://paynext.co.in/pages/contact-us.html (address, telephone, sales email)
export const contact = {
  legalName: "PayNext Private Limited",
  address: [
    "A-1, Esspee Tower, 2nd Floor, Datta Pada Road,",
    "Opp Oberoy Sky City, Borivali East,",
    "Mumbai - 400 066, Maharashtra, India.",
  ],
  phone: "+91 6262676764",
  phoneHref: "tel:+916262676764",
  salesEmail: "sales@paynext.co.in",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=PayNext%20Private%20Limited%2C%20Esspee%20Tower%2C%20Borivali%20East%2C%20Mumbai",
  email: "info@paynext.co.in",
  enterprise: "For Enterprise Inquiries",
  response: "Solutions Team Response Time: 24–48 Hours",
  office: "Mumbai, India",
  technical: "For Technical Discussions",
  technicalLine: "Schedule a Technical Consultation through our website.",
}

// [MASTER] + [DECK] multi-channel terms, used for the moving chip rows
export const channelChips = [
  "POS", "IPG", "PG", "UPI", "NCMC", "NETC", "Micro ATM", "Card-Present", "Card-Not-Present",
  "Debit", "Prepaid", "CMS", "ACS", "Switch", "Route", "Clear", "Settle", "Payout",
]
export const capabilityChips = [
  "DCC & MCC Transaction Support", "High-success-rate MPI", "Domestic & International Processing",
  "Dynamic Multi-Bank Routing", "API-based Rule Engine", "Merchant & Aggregator Payout",
  "Recon", "Disputes", "Fraud", "Risk", "Compliance", "Merchant Scoring", "Profitability", "Analytics",
]

// Navigation targets (names are the document titles of each page)
export const solutionsNav = [
  { name: "ATM Switching Solutions", href: "/solutions/atm-switching" },
  { name: "NCMC (National Common Mobility Card) Solutions", href: "/solutions/ncmc" },
  { name: "NETC Switching", href: "/solutions/netc-switching" },
  { name: "POS / MPOS", href: "/products/POS-MPOS" },
  { name: "E-Commerce Gateway", href: "/products/E-commerceGateway" },
  { name: "Bharat QR & UPI", href: "/products/BharatQR-UPI" },
]
