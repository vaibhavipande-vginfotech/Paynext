import { Clock } from "lucide-react"
import { PLACEHOLDER } from "@/lib/site-content"

// Visible stand-in for content the client will supply later.
export default function Placeholder({ label, className = "" }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-brand/30 bg-brand-soft/40 px-6 py-12 text-center ${className}`}
      data-placeholder="true"
    >
      <Clock className="h-6 w-6 text-brand" aria-hidden="true" />
      {label && <p className="font-semibold text-foreground">{label}</p>}
      <p className="text-sm text-muted-foreground">{PLACEHOLDER}</p>
    </div>
  )
}
