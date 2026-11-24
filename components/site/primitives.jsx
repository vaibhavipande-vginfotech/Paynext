import Reveal from "@/components/site/reveal"

export { Reveal }

export function Container({ className = "", children }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}

export function Eyebrow({ children, className = "" }) {
  return <p className={`eyebrow ${className}`}>{children}</p>
}

// Section heading block: eyebrow, title (with optional highlighted tail) and lead.
export function SectionHeader({ eyebrow, title, highlight, lead, align = "center", className = "" }) {
  const alignCls = align === "center" ? "mx-auto text-center" : ""
  return (
    <div className={`scroll-rise max-w-3xl ${alignCls} ${className}`}>
      {eyebrow && (
        <Reveal variant="fade" className="mb-4">
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal as="h2" delay={0.06} className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
        {title}
        {highlight && <> <span className="text-brand-gradient">{highlight}</span></>}
      </Reveal>
      {lead && (
        <Reveal as="p" delay={0.14} className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {lead}
        </Reveal>
      )}
    </div>
  )
}

export function IconTile({ icon: Icon, className = "" }) {
  return (
    <div
      className={`icon-tile flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-brand-soft text-brand ${className}`}
    >
      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
    </div>
  )
}
