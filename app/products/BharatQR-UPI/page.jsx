import { QrCode, CreditCard, Shield, RefreshCw, FileText, Headphones, Monitor, Globe } from 'lucide-react'
import ProductPage from '@/components/site/product-page'
import { oldServiceList } from '@/lib/legacy-content'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta("/products/BharatQR-UPI", {
  title: 'Bharat QR & UPI | PayNext',
  description: 'Interoperable QR payments across MasterCard, Visa and RuPay. Dynamic or static QR codes — no POS machine required.',
})

// Same list as the old website's product page.
const features = oldServiceList

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
}

export default function BharatQRPage() {
  return (
    <ProductPage
      path="/products/BharatQR-UPI"
      art="qr"
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
