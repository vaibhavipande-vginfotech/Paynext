import SolutionPage from "@/components/site/solution-page"
import content from "@/lib/solutions-content.json"
import { pageMeta } from "@/lib/seo"

// Content: website-addtions.docx (NETC section), verbatim.
export const metadata = pageMeta("/solutions/netc-switching", {
  title: "NETC Switching Solutions | PayNext",
  description: content.netc.hero[0],
})

export default function NETCPage() {
  return <SolutionPage data={content.netc} eyebrow="NETC" title="NETC" highlight="switching solutions" />
}
