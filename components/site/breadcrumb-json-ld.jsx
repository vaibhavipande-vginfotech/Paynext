"use client"

import { usePathname } from "next/navigation"
import JsonLd from "@/components/site/json-ld"
import { SITE_URL } from "@/lib/seo"

// Breadcrumb names for each URL segment (schema.org BreadcrumbList).
// Rendered at build time too, so crawlers see it in the static HTML.
const LABELS = {
  platform: "PayNext+ Platform",
  vista: "VISTA",
  coconet: "CocoNet",
  intelligence: "Intelligence Layer",
  products: "Products",
  "POS-MPOS": "POS / MPOS",
  "E-commerceGateway": "E-Commerce Gateway",
  "BharatQR-UPI": "Bharat QR & UPI",
  solutions: "Solutions",
  "atm-switching": "ATM Switching",
  ncmc: "NCMC",
  "netc-switching": "NETC Switching",
  "who-we-serve": "Who We Serve",
  about: "About Us",
  careers: "Careers",
  contact: "Contact",
  faq: "FAQ",
  privacy: "Privacy Statement",
  terms: "Terms of Use",
  disclaimer: "Disclaimer",
}

export default function BreadcrumbJsonLd() {
  const pathname = usePathname() || "/"
  const segments = pathname.split("/").filter(Boolean)
  // Home has no trail; unknown paths (404) get none either.
  if (!segments.length || segments.some((s) => !LABELS[s])) return null

  const items = [{ name: "Home", path: "/" }]
  segments.forEach((s, i) => items.push({ name: LABELS[s], path: "/" + segments.slice(0, i + 1).join("/") }))

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: SITE_URL + (item.path === "/" ? "" : item.path),
        })),
      }}
    />
  )
}
