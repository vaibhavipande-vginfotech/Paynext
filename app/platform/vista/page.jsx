import LayerPage, { CheckList } from "@/components/site/layer-page"
import { engines } from "@/lib/site-content"
import { pageMeta } from "@/lib/seo"

const vista = engines.find((e) => e.id === "vista")

export const metadata = pageMeta("/platform/vista", {
  title: "VISTA — Acquiring Management Platform | PayNext",
  description: `VISTA — Acquiring Management Platform. ${vista.tagline}`,
})

export default function VistaPage() {
  return (
    <LayerPage
      id="vista"
      extra={<CheckList eyebrow="Acquiring Management Platform" title="VISTA Capabilities" items={[...vista.points, "CBS integration (VISTA) – Yes"]} footnote={vista.tagline} />}
    />
  )
}
