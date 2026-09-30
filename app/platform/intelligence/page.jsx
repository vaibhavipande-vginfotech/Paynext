import LayerPage from "@/components/site/layer-page"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta("/platform/intelligence", {
  title: "Intelligence Layer — CxO Buddy | PayNext",
  description: "Intelligence Layer — CxO Buddy. PayNext+ — The international payments operating platform.",
})

export default function IntelligencePage() {
  return <LayerPage id="intelligence" />
}
