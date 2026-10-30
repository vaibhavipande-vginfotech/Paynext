import Link from "next/link"
import { ArrowRight, Mail, Phone, Clock, MapPin } from "lucide-react"
import { Container, Reveal } from "@/components/site/primitives"
import { contact } from "@/lib/site-content"

// Closing call to action (Design 2 "Bold" violet panel). Wording from the master document's "Contact Us" section.
export default function CtaBand() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal variant="scale" className="hero-violet relative overflow-hidden rounded-[2rem] px-6 py-14 sm:px-12 lg:py-16">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-white/[0.07]" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/85">{contact.technical}</p>
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">Schedule a Technical Consultation</h2>
              <p className="mt-4 max-w-xl text-white/90">{contact.technicalLine}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#4F00CD] shadow-[0_8px_24px_rgba(18,8,46,0.25)] transition-transform hover:-translate-y-0.5"
                >
                  Schedule a consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-white/50 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  {contact.email}
                </a>
              </div>
            </div>
            <ul className="space-y-3 rounded-2xl bg-white/10 p-6 text-sm text-white backdrop-blur">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  {contact.enterprise}:{" "}
                  <a href={`mailto:${contact.email}`} className="font-semibold underline-offset-4 hover:underline">
                    {contact.email}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={contact.phoneHref} className="font-semibold underline-offset-4 hover:underline">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0" aria-hidden="true" /> {contact.response}
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" /> Head Office: {contact.office}
              </li>
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
