import { ShoppingCart, Utensils, ShoppingBag, Fuel, Wifi, Building2 } from "lucide-react"
import { Container, Eyebrow, Reveal, IconTile } from "@/components/site/primitives"
import { Globe } from "@/components/site/motion"
import PageHero from "@/components/site/page-hero"
import CtaBand from "@/components/site/cta-band"
import { audiences, clients, platform } from "@/lib/site-content"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta("/who-we-serve", {
  title: "Who we serve | PayNext",
  description: `${platform.lead} Banks • Fintechs • Merchants • Payment processors.`,
})

// Content from the current website — approved by the client (Sankar, 29 Sep 2026) for this
// iteration; to be refined in the next iteration. Descriptions verbatim from the old home page.
const industries = [
  { icon: Building2, title: "Banking & Finance", desc: "We help banks and other financial institutions run their operations at a swift pace. Business banking or retail—your customers can enjoy a seamless banking experience." },
  { icon: ShoppingCart, title: "Department & Retail", desc: "Your shoppers want you to be wherever they are. We help you give your shoppers what they want—personalisation, faster checkouts, convenience, and consistency." },
  { icon: Utensils, title: "Restaurants", desc: "When you’re running a restaurant, it’s all about the experience. Our digital service solutions allow you to offer an unmatched dining experience to your customers." },
  { icon: ShoppingBag, title: "Grocery & Mass Merchandise", desc: "This industry is all about attracting new shoppers and retaining the old ones. We make you stand out in the crowd and help you build meaningful relationships with your customers." },
  { icon: Fuel, title: "Convenience Industry", desc: "From food services and car wash to fuel expenses—we simplify the payment process to help your customers get going in no time." },
  { icon: Wifi, title: "Telecom & Technology", desc: "Technology is driving the digital economy. And we’re here to get your network to the markets faster, maximise your global presence, and optimise the customer experience." },
]

export default function WhoWeServePage() {
  return (
    <>
      <PageHero
        eyebrow={platform.kicker}
        title="Who we"
        highlight="serve"
        lead={platform.lead}
        primary={{ label: "Schedule a consultation", href: "/contact" }}
        chips={audiences.map((a) => a.name)}
      />

      <section className="py-24">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {audiences.map((a, i) => (
              <Reveal key={a.id} delay={i * 0.06} className="hover-card rounded-2xl border-t-[3px] border-t-[#8030FD] bg-muted p-7 text-center">
                <IconTile icon={a.icon} className="mx-auto" />
                <h2 className="mt-5 text-lg font-semibold uppercase tracking-wider text-foreground">{a.name}</h2>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 flex justify-center">
            <Globe size={220} />
          </Reveal>
        </Container>
      </section>

      <section className="surface-lavender py-24">
        <Container>
          <Reveal className="text-center">
            <Eyebrow>Industries We Work For</Eyebrow>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.title} delay={i * 0.05} className="hover-card rounded-2xl border border-border bg-card p-6">
                <ind.icon className="h-5 w-5 text-brand" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="mt-5 font-semibold text-foreground">{ind.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ind.desc}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal className="text-center">
            <Eyebrow>Client Ecosystem</Eyebrow>
            <p className="mx-auto mt-5 max-w-4xl text-lg leading-relaxed text-muted-foreground">{clients.join("  ·  ")}</p>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
