import JsonLd from "@/components/site/json-ld"
import { SITE_URL } from "@/lib/seo"

// schema.org Service markup for a product or solution page, so search engines and AI assistants
// can read what PayNext offers on each page. Name and description come from the page's own text.
export default function ServiceJsonLd({ name, description, path }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url: `${SITE_URL}${path}`,
        serviceType: "Payment processing",
        areaServed: { "@type": "Country", name: "India" },
        provider: { "@type": "Organization", name: "PayNext Private Limited", url: SITE_URL },
      }}
    />
  )
}
