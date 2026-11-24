"use client"

import { motion, useReducedMotion } from "framer-motion"

// Flat illustrations in the style of Design 2 (lavender panel, violet shapes, green accents).
export function Art({ kind }) {
  const common = { viewBox: "0 0 400 300", className: "h-full w-full", "aria-hidden": true }
  const frame = (
    <>
      <rect width="400" height="300" rx="28" style={{ fill: "var(--art-bg)" }} />
      <circle cx="350" cy="40" r="80" style={{ fill: "var(--art-c1)" }} />
      <circle cx="40" cy="270" r="60" style={{ fill: "var(--art-c2)" }} />
    </>
  )
  switch (kind) {
    case "pos":
      return (
        <svg {...common}>
          {frame}
          <rect x="140" y="70" width="110" height="190" rx="18" style={{ fill: "var(--art-device)" }} />
          <rect x="155" y="88" width="80" height="60" rx="8" fill="#6A1BEA" />
          <circle cx="195" cy="118" r="17" fill="#42BE5C" />
          <path d="M187 118 l6 6 l11 -12" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {[0, 1, 2].map((r) => [0, 1, 2].map((c) => <rect key={`${r}${c}`} x={158 + c * 26} y={165 + r * 26} width="20" height="16" rx="4" style={{ fill: r === 2 && c === 1 ? "#8030FD" : r === 2 && c === 2 ? "#42BE5C" : "var(--art-key)" }} />))}
          <g transform="rotate(-14 300 110)">
            <rect x="240" y="80" width="120" height="76" rx="12" fill="#8030FD" />
            <rect x="256" y="98" width="24" height="18" rx="4" fill="#E3D5FF" />
            <rect x="256" y="132" width="60" height="7" rx="3" fill="#C9B3FF" />
          </g>
          <path d="M268 175 q14 14 0 28 M282 168 q22 21 0 42" stroke="#42BE5C" strokeWidth="5" fill="none" strokeLinecap="round" />
        </svg>
      )
    case "ecom":
      return (
        <svg {...common}>
          {frame}
          <rect x="60" y="55" width="280" height="190" rx="16" style={{ fill: "var(--art-card)", stroke: "var(--art-line)" }} strokeWidth="2" />
          <rect x="60" y="55" width="280" height="32" rx="16" style={{ fill: "var(--art-c1)" }} />
          {[0, 1, 2].map((i) => <circle key={i} cx={82 + i * 16} cy="71" r="5" fill={["#8030FD", "#C9B3FF", "#42BE5C"][i]} />)}
          <rect x="84" y="108" width="140" height="10" rx="5" fill="#E3D5FF" />
          <rect x="84" y="130" width="230" height="30" rx="8" style={{ fill: "var(--art-c2)", stroke: "var(--art-line)" }} />
          <rect x="84" y="170" width="110" height="30" rx="8" style={{ fill: "var(--art-c2)", stroke: "var(--art-line)" }} />
          <rect x="204" y="170" width="110" height="30" rx="8" style={{ fill: "var(--art-c2)", stroke: "var(--art-line)" }} />
          <rect x="84" y="210" width="230" height="22" rx="11" fill="#4F00CD" />
          <rect x="176" y="218" width="46" height="6" rx="3" fill="#FFFFFF" />
          <circle cx="330" cy="70" r="26" fill="#42BE5C" />
          <rect x="320" y="66" width="20" height="16" rx="3" fill="#fff" />
          <path d="M324 66 v-5 a6 6 0 0 1 12 0 v5" stroke="#fff" strokeWidth="3" fill="none" />
        </svg>
      )
    case "qr":
      return (
        <svg {...common}>
          {frame}
          <rect x="140" y="40" width="130" height="230" rx="22" style={{ fill: "var(--art-device)" }} />
          <rect x="152" y="62" width="106" height="186" rx="10" fill="#FFFFFF" />
          <g transform="translate(167 92)">
            {Array.from({ length: 49 }, (_, i) => {
              const r = Math.floor(i / 7)
              const c = i % 7
              const corner = (r < 2 && c < 2) || (r < 2 && c > 4) || (r > 4 && c < 2)
              const on = corner || (r * 3 + c * 5) % 4 === 0
              return on ? <rect key={i} x={c * 11} y={r * 11} width="10" height="10" rx="2" fill={corner ? "#4F00CD" : "#1A1033"} /> : null
            })}
          </g>
          <rect x="167" y="186" width="76" height="22" rx="11" fill="#42BE5C" />
          <path d="M193 197 l5 5 l10 -10" stroke="#fff" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="285" y="110" width="80" height="34" rx="10" style={{ fill: "var(--art-card)", stroke: "var(--art-line)" }} />
          <text x="325" y="132" textAnchor="middle" fontSize="13" fontWeight="700" style={{ fill: "var(--art-accent)" }}>UPI</text>
        </svg>
      )
    case "atm":
      return (
        <svg {...common}>
          {frame}
          <rect x="110" y="45" width="180" height="225" rx="16" style={{ fill: "var(--art-device)" }} />
          <rect x="130" y="65" width="140" height="80" rx="8" fill="#6A1BEA" />
          <rect x="146" y="82" width="70" height="8" rx="4" fill="#E3D5FF" />
          <rect x="146" y="98" width="100" height="8" rx="4" fill="#C9B3FF" />
          <rect x="146" y="114" width="54" height="16" rx="5" fill="#42BE5C" />
          {[0, 1, 2].map((r) => [0, 1, 2].map((c) => <rect key={`${r}${c}`} x={140 + c * 24} y={160 + r * 20} width="18" height="13" rx="3" style={{ fill: "var(--art-key)" }} />))}
          <rect x="222" y="162" width="48" height="10" rx="5" fill="#8030FD" />
          <rect x="130" y="232" width="140" height="12" rx="6" style={{ fill: "var(--art-key)" }} />
          <rect x="160" y="240" width="80" height="34" rx="4" fill="#42BE5C" />
          <rect x="172" y="250" width="56" height="5" rx="2" fill="#E8FBEF" />
        </svg>
      )
    case "transit":
      return (
        <svg {...common}>
          {frame}
          <rect x="200" y="40" width="160" height="60" rx="16" style={{ fill: "var(--art-card)", stroke: "var(--art-line)" }} />
          {[0, 1, 2, 3].map((i) => <rect key={i} x={214 + i * 35} y="54" width="27" height="20" rx="4" fill="#C9B3FF" />)}
          <rect x="200" y="86" width="160" height="7" fill="#4F00CD" />
          <rect x="140" y="140" width="34" height="130" rx="8" style={{ fill: "var(--art-device)" }} />
          <rect x="250" y="140" width="34" height="130" rx="8" style={{ fill: "var(--art-device)" }} />
          <rect x="128" y="120" width="58" height="34" rx="8" fill="#6A1BEA" />
          <circle cx="157" cy="137" r="8" fill="#42BE5C" />
          <rect x="182" y="190" width="30" height="9" rx="4" fill="#8030FD" />
          <rect x="216" y="190" width="30" height="9" rx="4" fill="#8030FD" />
          <g transform="rotate(-18 85 110)">
            <rect x="50" y="88" width="72" height="46" rx="8" fill="#8030FD" />
            <rect x="60" y="99" width="16" height="12" rx="3" fill="#E3D5FF" />
          </g>
          <path d="M128 112 q9 9 0 18" stroke="#42BE5C" strokeWidth="4" fill="none" strokeLinecap="round" />
          <rect x="90" y="276" width="240" height="4" rx="2" fill="#C9B3FF" />
        </svg>
      )
    case "card":
      return (
        <svg {...common}>
          {frame}
          <g transform="rotate(-10 200 150)">
            <rect x="110" y="90" width="190" height="120" rx="16" fill="#6A1BEA" />
            <rect x="130" y="72" width="190" height="120" rx="16" fill="#4F00CD" />
            <rect x="150" y="96" width="34" height="26" rx="5" fill="#E3D5FF" />
            <text x="150" y="160" fontSize="15" fontWeight="700" fill="#E3D5FF" letterSpacing="3">•••• 4821</text>
            <path d="M282 100 q8 10 0 20 M292 94 q14 16 0 32" stroke="#E3D5FF" strokeWidth="3" fill="none" strokeLinecap="round" />
          </g>
          <rect x="44" y="44" width="96" height="30" rx="8" style={{ fill: "var(--art-card)", stroke: "var(--art-line)" }} />
          <text x="92" y="64" textAnchor="middle" fontSize="12" fontWeight="600" style={{ fill: "var(--art-ink)" }}>Tokenised</text>
          <rect x="236" y="226" width="124" height="34" rx="10" style={{ fill: "var(--art-card)", stroke: "var(--art-line)" }} />
          <rect x="248" y="236" width="28" height="14" rx="7" fill="#42BE5C" />
          <circle cx="269" cy="243" r="5" fill="#fff" />
          <text x="286" y="248" fontSize="12" fontWeight="600" style={{ fill: "var(--art-ink)" }}>Online use</text>
        </svg>
      )
    case "shield":
      return (
        <svg {...common}>
          {frame}
          <path d="M200 46 l86 30 v62 q0 70 -86 112 q-86 -42 -86 -112 v-62 z" fill="#4F00CD" />
          <path d="M200 70 l64 22 v46 q0 52 -64 86 q-64 -34 -64 -86 v-46 z" fill="#6A1BEA" />
          <path d="M172 146 l20 20 l38 -42" stroke="#fff" strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {[["PCI-DSS", 40, 90], ["PCI-DSS", 300, 200]].map(([t, x, y], i) => (
            <g key={i}>
              <rect x={x} y={y} width="72" height="28" rx="8" style={{ fill: "var(--art-card)", stroke: "var(--art-line)" }} />
              <text x={x + 36} y={y + 18} textAnchor="middle" fontSize="11" fontWeight="700" style={{ fill: "var(--art-accent)" }}>{i ? "Secure" : t}</text>
            </g>
          ))}
        </svg>
      )
    case "dashboard":
      return (
        <svg {...common}>
          {frame}
          <rect x="50" y="40" width="300" height="220" rx="18" style={{ fill: "var(--art-card)", stroke: "var(--art-line)" }} strokeWidth="2" />
          {[0, 1, 2].map((i) => <circle key={i} cx={72 + i * 14} cy="60" r="4" fill="#C9B3FF" />)}
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={70 + i * 88} y="78" width="78" height="38" rx="8" style={{ fill: "var(--art-c2)" }} />
              <rect x={78 + i * 88} y="86" width="34" height="5" rx="2" fill="#C9B3FF" />
              <rect x={78 + i * 88} y="98" width="48" height="9" rx="3" fill={i === 2 ? "#42BE5C" : "#4F00CD"} />
            </g>
          ))}
          {[38, 52, 46, 70, 62, 88, 80].map((h, i) => (
            <rect key={i} x={74 + i * 26} y={236 - h} width="16" height={h} rx="4" fill={i === 5 ? "#4F00CD" : "#C9B3FF"} />
          ))}
          <path d="M74 196 L100 184 L126 190 L152 166 L178 174 L204 146 L230 152" stroke="#42BE5C" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="294" cy="196" r="30" fill="none" stroke="#E3D5FF" strokeWidth="12" />
          <path d="M294 166 a30 30 0 1 1 -28 41" fill="none" stroke="#4F00CD" strokeWidth="12" />
        </svg>
      )
    case "code":
      return (
        <svg {...common}>
          {frame}
          <rect x="50" y="50" width="230" height="170" rx="16" fill="#1A1033" />
          {[0, 1, 2].map((i) => <circle key={i} cx={70 + i * 14} cy="70" r="4" fill="#574F70" />)}
          {[[70, 96, 110, "#42BE5C"], [70, 116, 150, "#8030FD"], [86, 136, 90, "#C9B3FF"], [86, 156, 130, "#42BE5C"], [70, 176, 70, "#8030FD"]].map(([x, y, w, c], i) => (
            <rect key={i} x={x} y={y} width={w} height="8" rx="4" fill={c} />
          ))}
          <rect x="210" y="150" width="150" height="100" rx="14" style={{ fill: "var(--art-card)", stroke: "var(--art-line)" }} strokeWidth="2" />
          <text x="226" y="178" fontSize="12" fontWeight="600" fontFamily="monospace" style={{ fill: "var(--art-ink)" }}>POST /v1/...</text>
          <rect x="226" y="192" width="54" height="20" rx="6" fill="#E8FBEF" />
          <text x="253" y="206" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1E7A34">200 OK</text>
          <rect x="226" y="222" width="110" height="7" rx="3" fill="#C9B3FF" />
        </svg>
      )
    case "team":
      return (
        <svg {...common}>
          {frame}
          {[[120, 120, "#4F00CD"], [200, 100, "#6A1BEA"], [280, 120, "#8030FD"]].map(([x, y, c], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="26" fill={c} />
              <path d={`M${x - 44} ${y + 110} q0 -66 44 -66 q44 0 44 66 z`} fill={c} />
            </g>
          ))}
          <rect x="70" y="236" width="260" height="10" rx="5" fill="#C9B3FF" />
          <circle cx="330" cy="70" r="16" fill="#42BE5C" />
          <path d="M323 70 l5 5 l9 -10" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case "toll":
    default:
      return (
        <svg {...common}>
          {frame}
          <rect x="70" y="230" width="270" height="6" rx="3" fill="#C9B3FF" />
          <rect x="260" y="90" width="44" height="140" rx="8" style={{ fill: "var(--art-device)" }} />
          <rect x="268" y="104" width="28" height="22" rx="4" fill="#42BE5C" />
          <rect x="96" y="104" width="170" height="16" rx="8" fill="#4F00CD" />
          {[0, 1, 2, 3].map((i) => <rect key={i} x={112 + i * 38} y="104" width="16" height="16" fill="#FFFFFF" opacity="0.85" />)}
          <path d="M70 230 v-34 q0 -18 18 -22 l30 -6 q12 -26 34 -26 h40 q20 0 30 26 l14 4 q14 4 14 18 v40 z" fill="#8030FD" />
          <circle cx="104" cy="232" r="16" style={{ fill: "var(--art-device)" }} />
          <circle cx="204" cy="232" r="16" style={{ fill: "var(--art-device)" }} />
          <rect x="148" y="150" width="40" height="18" rx="4" fill="#E3D5FF" />
          <rect x="300" y="160" width="70" height="30" rx="8" style={{ fill: "var(--art-card)", stroke: "var(--art-line)" }} />
          <text x="335" y="180" textAnchor="middle" fontSize="12" fontWeight="700" style={{ fill: "var(--art-accent)" }}>FASTag</text>
        </svg>
      )
  }
}

// Phase 3 hero: violet panel (Design 2 "Bold") with the PerseusPay tagline and the positioning line.
// Networks come from the master doc ("Visa, Mastercard, RuPay, and NPCI ecosystems"); audiences from the deck.
const NODES = [
  { label: "Visa", x: 92, y: 70 },
  { label: "Mastercard", x: 260, y: 38 },
  { label: "RuPay", x: 428, y: 70 },
  { label: "Fintechs", x: 92, y: 310 },
  { label: "Banks", x: 260, y: 342 },
  { label: "NPCI", x: 428, y: 310 },
]
const CX = 260
const CY = 190

export function NetworkDiagram({ intro = false }) {
  const reduce = useReducedMotion()
  // With `intro`, the links fade in one by one and the network nodes pop in after the core.
  const anim = intro && !reduce
  const pop = (i) =>
    anim
      ? {
          initial: { opacity: 0, scale: 0.6 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.5, delay: 0.75 + i * 0.09, ease: [0.22, 1, 0.36, 1] },
        }
      : {}
  return (
    <svg
      viewBox="0 0 520 380"
      className="h-auto w-full"
      role="img"
      aria-label="PayNext at the centre, connected to Visa, Mastercard, RuPay, NPCI, banks and fintechs"
    >
      <defs>
        <radialGradient id="pn-core" cx="50%" cy="35%" r="70%">
          <stop offset="0" stopColor="#8030FD" />
          <stop offset="1" stopColor="#4F00CD" />
        </radialGradient>
      </defs>
      {/* decorative circles, as in the design */}
      <circle cx="470" cy="20" r="90" opacity="0.7" style={{ fill: "var(--art-c1)" }} />
      <circle cx="40" cy="380" r="80" opacity="0.6" style={{ fill: "var(--art-c1)" }} />

      {NODES.map((n, i) => {
        const path = `M${CX},${CY} L${n.x},${n.y}`
        return (
          <motion.g key={n.label} {...(anim ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6, delay: 0.6 + i * 0.09 } } : {})}>
            <path d={path} stroke="#8030FD" strokeWidth="2" strokeDasharray="5 6" fill="none" className={reduce ? "" : "pn-dash"} />
            {!reduce && (
              <circle r="5" fill="#42BE5C">
                <animateMotion dur={`${2.6 + (i % 3) * 0.5}s`} repeatCount="indefinite" path={i % 2 ? `M${n.x},${n.y} L${CX},${CY}` : path} />
              </circle>
            )}
          </motion.g>
        )
      })}

      <circle cx={CX} cy={CY} r="78" fill="none" stroke="#8030FD" strokeOpacity="0.35" strokeWidth="2" />
      <motion.circle
        cx={CX}
        cy={CY}
        r="78"
        fill="none"
        stroke="#8030FD"
        strokeWidth="2"
        initial={{ opacity: 0.5, scale: 1 }}
        animate={reduce ? undefined : { opacity: [0.5, 0], scale: [1, 1.25] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
        style={{ transformOrigin: `${CX}px ${CY}px` }}
      />
      <motion.circle
        cx={CX}
        cy={CY}
        r="62"
        fill="url(#pn-core)"
        style={{ transformOrigin: `${CX}px ${CY}px` }}
        {...(anim ? { initial: { scale: 0 }, animate: { scale: 1 }, transition: { type: "spring", stiffness: 200, damping: 16, delay: 0.45 } } : {})}
      />
      <text x={CX} y={CY + 6} textAnchor="middle" fontSize="18" fontWeight="700" fill="#FFFFFF" fontFamily="var(--font-poppins), Poppins, sans-serif">
        PayNext
      </text>

      {NODES.map((n, i) => {
        const w = n.label.length * 9 + 40
        return (
          <motion.g key={`node-${n.label}`} {...pop(i)} style={{ transformOrigin: `${n.x}px ${n.y}px` }}>
            <rect x={n.x - w / 2} y={n.y - 19} width={w} height="38" rx="10" style={{ fill: "var(--art-card)", stroke: "var(--art-line)" }} />
            <text x={n.x} y={n.y + 5} textAnchor="middle" fontSize="14" fontWeight="600" style={{ fill: "var(--art-ink)" }} fontFamily="var(--font-poppins), Poppins, sans-serif">
              {n.label}
            </text>
          </motion.g>
        )
      })}
    </svg>
  )
}
