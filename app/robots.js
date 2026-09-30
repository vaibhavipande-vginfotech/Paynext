export const dynamic = "force-static"

// Search engines and AI assistants (GEO) may crawl the whole public site.
const AI_CRAWLERS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-User", "PerplexityBot", "Google-Extended", "Applebot-Extended", "Bingbot"]

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }, ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" }))],
    sitemap: "https://paynext.co.in/sitemap.xml",
    host: "https://paynext.co.in",
  }
}
