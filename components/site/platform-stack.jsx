import Link from "next/link"
import { pillars, layers, principles, platform, PLACEHOLDER } from "@/lib/site-content"

// The PayNext+ diagram exactly as laid out in the positioning deck:
// five pillars, three layers, and the principles line. All text is verbatim from the deck.
export default function PlatformStack({ tone = "default" }) {
  const dark = tone === "dark"
  const box = dark
    ? "border-white/10 bg-white/[0.04] hover:border-white/30"
    : "border-border bg-background/70 hover:border-brand/50"
  const title = dark ? "text-white" : "text-foreground"
  const sub = dark ? "text-white/60" : "text-muted-foreground"
  const icon = dark ? "text-[#7CC0F0]" : "text-brand"

  return (
    <div
      className={`relative rounded-3xl border p-3 sm:p-4 ${
        dark ? "border-white/10 bg-white/[0.03]" : "border-border bg-card/90 shadow-[0_40px_120px_-40px_color-mix(in_srgb,var(--primary)_35%,transparent)] backdrop-blur"
      }`}
    >
      <p className={`px-2 pb-3 pt-1 text-[0.7rem] font-medium uppercase tracking-[0.2em] ${dark ? "text-white/60" : "text-platinum"}`}>
        {platform.name} · {platform.label}
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        {pillars.map((p) => (
          <Link key={p.id} href={`/platform#${p.id}`} className={`w-[calc(50%-0.25rem)] rounded-xl border p-3 transition-colors sm:w-[calc(33.333%-0.34rem)] lg:w-[calc(20%-0.4rem)] ${box}`}>
            <p.icon className={`mb-2 h-4 w-4 ${icon}`} strokeWidth={1.75} aria-hidden="true" />
            <p className={`text-sm font-semibold uppercase tracking-wide ${title}`}>{p.name}</p>
            <ul className={`mt-1 space-y-0.5 text-[0.7rem] leading-snug ${sub}`}>
              {p.lines.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>

      <div className="mt-2 space-y-2">
        {layers.map((l) => (
          <Link key={l.id} href={l.href} className={`flex flex-col gap-1 rounded-xl border px-4 py-3 transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-4 ${box}`}>
            <p className={`flex items-center gap-3 text-sm font-semibold ${title}`}>
              <l.icon className={`h-4 w-4 shrink-0 ${icon}`} strokeWidth={1.75} aria-hidden="true" />
              <span>
                {l.name} <span className={`font-normal ${sub}`}>— {l.tag}</span>
              </span>
            </p>
            <p className={`text-[0.72rem] sm:text-right ${sub} ${l.placeholder ? "italic" : ""}`}>{l.placeholder ? PLACEHOLDER : l.lines.join(" • ")}</p>
          </Link>
        ))}
      </div>

      <p className={`mt-3 px-2 pb-1 text-center text-[0.68rem] uppercase tracking-[0.18em] ${dark ? "text-white/60" : "text-platinum"}`}>
        {principles.join("  •  ")}
      </p>
    </div>
  )
}
