// Per-page SEO metadata: own canonical URL, Open Graph + Twitter card, share image,
// and a description clamped to search-friendly length (text comes from the client documents).
export const SITE_URL = "https://paynext.co.in"
export const OG_IMAGE = { url: "/og.png", width: 1200, height: 630, alt: "PayNext — One Switch. Every Channel. Total Control." }

// Clamp to ~158 chars on a word boundary so search results show the whole sentence.
export function clamp(text = "", max = 158) {
  const t = String(text).replace(/\s+/g, " ").trim()
  if (t.length <= max) return t
  const cut = t.slice(0, max - 1)
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:—–-]+$/, "") + "…"
}

export function pageMeta(path, { title, description, ...rest } = {}) {
  const desc = clamp(description)
  const plainTitle = typeof title === "object" ? title.absolute : title
  return {
    title,
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "PayNext",
      locale: "en_IN",
      url: path,
      title: plainTitle,
      description: desc,
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title: plainTitle, description: desc, images: [OG_IMAGE.url] },
    ...rest,
  }
}
