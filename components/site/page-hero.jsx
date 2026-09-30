import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/site/primitives"

export default function PageHero({ eyebrow, title, highlight, lead, primary, secondary, children }) {
  return (
    <section className="hero-surface relative overflow-hidden border-b border-border pb-16 pt-28 sm:pb-20 sm:pt-40">
      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
          <h1 className="text-[2rem] font-semibold leading-[1.1] text-foreground min-[400px]:text-4xl sm:text-5xl lg:text-6xl">
            {title}
            {highlight && (
              <>
                {" "}
                <span className="text-brand-gradient">{highlight}</span>
              </>
            )}
          </h1>
          {lead && (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{lead}</p>
          )}
          {(primary || secondary) && (
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {primary && (
                <Button asChild size="lg">
                  <Link href={primary.href}>
                    {primary.label}
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              )}
              {secondary && (
                <Button asChild size="lg" variant="outline">
                  <Link href={secondary.href}>{secondary.label}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
        {children}
      </Container>
    </section>
  )
}
