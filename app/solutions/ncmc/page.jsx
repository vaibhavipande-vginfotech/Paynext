import SolutionPage from "@/components/site/solution-page"
import content from "@/lib/solutions-content.json"
import { pageMeta } from "@/lib/seo"

// Content: website-addtions.docx (NCMC section), verbatim.
export const metadata = pageMeta("/solutions/ncmc", {
  title: "NCMC (National Common Mobility Card) Solutions | PayNext",
  description: content.ncmc.meta,
})

export default function NCMCPage() {
  return <SolutionPage data={content.ncmc} eyebrow="NCMC" title="NCMC (National Common Mobility Card)" highlight="Solutions" />
}
