export const dynamic = "force-static"

const BASE = "https://paynext.co.in"
const BUILT = new Date().toISOString().slice(0, 10) // date of this build

const routes = [
  "",
  "/platform",
  "/platform/vista",
  "/platform/coconet",
  "/platform/intelligence",
  "/products",
  "/solutions",
  "/solutions/atm-switching",
  "/solutions/ncmc",
  "/solutions/netc-switching",
  "/products/POS-MPOS",
  "/products/E-commerceGateway",
  "/products/BharatQR-UPI",
  "/who-we-serve",
  "/about",
  "/careers",
  "/contact",
  "/faq",
  "/privacy",
  "/terms",
  "/disclaimer",
]

export default function sitemap() {
  return routes.map((r) => ({
    url: `${BASE}${r}`,
    lastModified: BUILT,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : r.startsWith("/platform") || r.startsWith("/solutions") ? 0.8 : 0.6,
  }))
}
