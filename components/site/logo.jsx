import Link from "next/link"

// Official logofolio marks: primary colour logo on light, "logo on black" (white) on dark. (logo-navy.svg = unused recolour.)
// Both are rendered and swapped with CSS so there's no flash or hydration mismatch.
export default function Logo({ className = "h-7", href = "/", onClick }) {
  return (
    <Link href={href} onClick={onClick} className="-my-2 inline-flex min-h-11 shrink-0 items-center py-2" aria-label="PayNext home">
      <img src="/brand/logo-color.svg" alt="PayNext" className={`${className} w-auto dark:hidden`} />
      <img src="/brand/logo-white.svg" alt="PayNext" className={`${className} hidden w-auto dark:block`} />
    </Link>
  )
}
