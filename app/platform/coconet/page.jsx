import LayerPage from "@/components/site/layer-page"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta("/platform/coconet", {
  title: "CocoNet — Commerce Intelligence | PayNext",
  description: "CocoNet — Commerce Intelligence. PayNext+ — The international payments operating platform.",
})

export default function CocoNetPage() {
  return <LayerPage id="coconet" />
}
