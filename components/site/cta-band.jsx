import Link from "next/link"
import { ArrowRight, Mail, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container, Reveal } from "@/components/site/primitives"
import { contact } from "@/lib/site-content"

// Closing call to action — wording from the master document's "Contact Us" section.
export default function CtaBand() {
  return (
    <section className="py-24">
      <Container>
        <Reveal variant="scale" className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,#0F2D4E,#123A63)] px-6 py-16 text-center text-white sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_90%_at_50%_0%,rgba(36,137,216,0.45),transparent_70%)]"
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">{contact.technical}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">Schedule a Technical Consultation</h2>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-white! text-[#0F2D4E]! shadow-[0_8px_24px_rgba(0,0,0,0.25)]!">
                <Link href="/contact">
                  Schedule a consultation <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/25! bg-white/10! text-white!">
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#7CC0F0]" aria-hidden="true" /> {contact.enterprise}
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#7CC0F0]" aria-hidden="true" /> {contact.response}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#7CC0F0]" aria-hidden="true" /> Head Office: {contact.office}
              </li>
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
