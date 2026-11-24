import { Globe, CreditCard, Shield, RefreshCw, FileText, Headphones, Monitor, QrCode } from 'lucide-react'
import ProductPage from '@/components/site/product-page'
import { oldServiceList } from '@/lib/legacy-content'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta("/products/E-commerceGateway", {
  title: 'E-Commerce Gateway | PayNext',
  description: 'Instant & hassle-free online payment solutions. Secure, real-time transactions with best-in-class fraud detection for your e-commerce business.',
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

export default function EcommerceGatewayPage() {
  return (
    <ProductPage
      path="/products/E-commerceGateway"
      art="ecom"
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
