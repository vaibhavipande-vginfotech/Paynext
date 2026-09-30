import { Globe, CreditCard, Shield, RefreshCw, FileText, Headphones, Monitor, QrCode } from 'lucide-react'
import ProductPage from '@/components/site/product-page'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta("/products/E-commerceGateway", {
  title: 'E-Commerce Gateway | PayNext',
  description: 'Instant & hassle-free online payment solutions. Secure, real-time transactions with best-in-class fraud detection for your e-commerce business.',
})

const features = [
  'Supports Card Schemes: RuPay, MasterCard, Visa & American Express',
  'Multiple Payment Modes — Cards, Net Banking, UPI & Wallets',
  'PCI-DSS Certified Infrastructure',
  'Best-in-Class Fraud Detection & Prevention',
  'Tokenization & End-to-End Encryption',
  'Seamless, Localised Checkout Experience',
  'Reconciliation & Settlement',
  'Smart Dispute & Chargeback Management',
  'Developer-Friendly APIs & SDKs',
  'Customer Support',
]

const featureIcons = {
  'Supports Card Schemes: RuPay, MasterCard, Visa & American Express': CreditCard,
  'Multiple Payment Modes — Cards, Net Banking, UPI & Wallets': QrCode,
  'PCI-DSS Certified Infrastructure': Shield,
  'Best-in-Class Fraud Detection & Prevention': Shield,
  'Tokenization & End-to-End Encryption': Shield,
  'Seamless, Localised Checkout Experience': Globe,
  'Reconciliation & Settlement': FileText,
  'Smart Dispute & Chargeback Management': RefreshCw,
  'Developer-Friendly APIs & SDKs': Monitor,
  'Customer Support': Headphones,
}

export default function EcommerceGatewayPage() {
  return (
    <ProductPage
      hero={{ eyebrow: "Products", title: "E-Commerce", highlight: "Gateway", lead: "Instant & hassle-free online payment solutions for your e-commerce business." }}
      overview={{
        icon: Globe,
        title: "Instant & Hassle-Free Online Payment",
        paragraphs: [
          "Convenient and cost-effective e-commerce payment solutions are the need of the hour. Our e-commerce gateway solution takes place in real-time, giving you secure and safe transactions.",
          "We help you take your business to new markets, boost your conversion rates by offering you a localised shopping experience, and minimising fraud with our best-in-class fraud detection and prevention system. This not only optimises the customer experience but also generates revenue.",
          "We combine our experience and expertise to help you grow your e-commerce business and expand to new markets. We know how things work and what it takes to make your e-commerce business reach greater heights.",
        ],
      }}
      services={{
        eyebrow: "Our Services",
        title: "End–to–End E-Commerce",
        highlight: "Hosted Services",
        items: features,
        icons: featureIcons,
        cta: { label: "Get in Touch", href: "/contact" },
      }}
      related={{
        title: "Explore Other",
        highlight: "Products",
        lead: "Discover our complete suite of payment solutions",
        items: [
          { href: "/products/POS-MPOS", icon: Monitor, name: "POS / MPOS", desc: "Simplify your business processes" },
          { href: "/products/BharatQR-UPI", icon: QrCode, name: "Bharat QR & UPI", desc: "Decoding the puzzle to swift payment" },
        ],
      }}
    />
  )
}
