import { Monitor, CreditCard, Shield, RefreshCw, FileText, Headphones, QrCode, Globe } from 'lucide-react'
import ProductPage from '@/components/site/product-page'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta("/products/POS-MPOS", {
  title: 'POS / MPOS Solutions | PayNext',
  description: 'Simplify your business processes with PayNext POS solutions. Transaction processing, deployment, merchant analytics, reconciliation & back-office processing.',
})

const features = [
  'Supports Card Schemes like RUPAY, MasterCard, Visa and American Express',
  'On Us Connectivity',
  'PCI-DSS Certified Infrastructure',
  'Inter-Change Calculation',
  'Reconciliation & Settlement',
  'Merchant Payments',
  'Smart Dispute Management',
  'Field Services & Terminal Deployment',
  'Customer Support',
  'BQR Available on POS',
]

const featureIcons = {
  'Supports Card Schemes like RUPAY, MasterCard, Visa and American Express': CreditCard,
  'On Us Connectivity': Shield,
  'PCI-DSS Certified Infrastructure': Shield,
  'Inter-Change Calculation': RefreshCw,
  'Reconciliation & Settlement': FileText,
  'Merchant Payments': CreditCard,
  'Smart Dispute Management': Shield,
  'Field Services & Terminal Deployment': Monitor,
  'Customer Support': Headphones,
  'BQR Available on POS': QrCode,
}

export default function POSPage() {
  return (
    <ProductPage
      hero={{ eyebrow: "Products", title: "POS / MPOS", highlight: "Solutions", lead: "Simplify your business processes with our comprehensive POS solutions." }}
      overview={{
        icon: Monitor,
        title: "Simplify Your Business Processes",
        paragraphs: [
          "PayNext offers a swifter experience in digital business to banks & key financial institutions. Our gamut of POS solutions includes transaction processing services, deployment and management, merchant analytics, reconciliation & back-office processing. In case you wish to develop a merchant network or if your merchants need POS terminals, we're there to assist you, every step of the way.",
        ],
      }}
      services={{
        eyebrow: "Our Services",
        title: "End–to–End",
        highlight: "Service",
        items: features,
        icons: featureIcons,
        cta: { label: "Get in Touch", href: "/contact" },
      }}
      related={{
        title: "Explore Other",
        highlight: "Products",
        lead: "Discover our complete suite of payment solutions",
        items: [
          { href: "/products/E-commerceGateway", icon: Globe, name: "E-Commerce Gateway", desc: "Instant & hassle-free online payment" },
          { href: "/products/BharatQR-UPI", icon: QrCode, name: "Bharat QR & UPI", desc: "Decoding the puzzle to swift payment" },
        ],
      }}
    />
  )
}
