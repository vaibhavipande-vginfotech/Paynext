import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadiantLines } from "@/components/site/motion"

export const metadata = {
  title: "404 | PayNext",
}

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-5 pt-24 text-center">
      <RadiantLines />
      <div className="relative">
        <p className="text-brand-gradient text-7xl font-semibold sm:text-9xl">404</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/">
              PayNext <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
