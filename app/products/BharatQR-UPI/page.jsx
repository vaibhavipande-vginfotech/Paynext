import { QrCode, CreditCard, Shield, RefreshCw, FileText, Headphones, Monitor, Globe } from 'lucide-react'
import ProductPage from '@/components/site/product-page'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta("/products/BharatQR-UPI", {
  title: 'Bharat QR & UPI | PayNext',
  description: 'Interoperable QR payments across MasterCard, Visa and RuPay. Dynamic or static QR codes — no POS machine required.',
})

const features = [
  'Interoperable QR across RuPay, MasterCard & Visa',
  'Dynamic & Static QR Codes — No POS Machine Required',
  'UPI Collect & Intent Payment Flows',
  'Instant Payment Confirmation & Notifications',
  'PCI-DSS Certified Infrastructure',
  'Reconciliation & Settlement',
  'Smart Dispute Management',
  'Merchant QR Onboarding & Management',
  'Customer Support',
]

const featureIcons = {
  'Interoperable QR across RuPay, MasterCard & Visa': QrCode,
  'Dynamic & Static QR Codes — No POS Machine Required': QrCode,
  'UPI Collect & Intent Payment Flows': CreditCard,
  'Instant Payment Confirmation & Notifications': RefreshCw,
  'PCI-DSS Certified Infrastructure': Shield,
  'Reconciliation & Settlement': FileText,
  'Smart Dispute Management': Shield,
  'Merchant QR Onboarding & Management': Monitor,
  'Customer Support': Headphones,
}

export default function BharatQRPage() {
  return (
    <ProductPage
      hero={{ eyebrow: "Products", title: "Bharat QR &", highlight: "UPI", lead: "Decoding the puzzle to swift payment with interoperable QR solutions." }}
      overview={{
        icon: QrCode,
        title: "Decoding the Puzzle to Swift Payment",
        paragraphs: [
          "We also offer cashless payment solutions that promote digital transactions. We provide Bharat QR services to all our merchants, which allows customers to make payments to you with the help of a dynamic or static QR code. This solution is interoperable among major card schemes like MasterCard, Visa, RuPay, etc.",
          "As a merchant, if you don't have a POS machine installed at your facility, you can simply use the QR code on your cash counter and receive payments through this medium. This way, you can easily escape the hassles of maintaining records of charge slips. Instead, you simply get the notification on your Bharat QR app.",
        ],
      }}
      services={{
        eyebrow: "Our Services",
        title: "Complete QR & UPI",
        highlight: "Solution",
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
          { href: "/products/E-commerceGateway", icon: Globe, name: "E-Commerce Gateway", desc: "Instant & hassle-free online payment" },
        ],
      }}
    />
  )
}
