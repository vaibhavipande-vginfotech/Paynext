import SolutionPage from "@/components/site/solution-page"
import content from "@/lib/solutions-content.json"
import { pageMeta } from "@/lib/seo"

// Content: website-addtions.docx (ATM section), verbatim.
export const metadata = pageMeta("/solutions/atm-switching", {
  title: "ATM Switching Solutions | PayNext",
  description: content.atm.hero[1],
})

export default function ATMPage() {
  return <SolutionPage data={content.atm} eyebrow="ATM" title="ATM Switching" highlight="Solutions" />
}
