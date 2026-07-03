import { BLUE, VIOLET, EMERALD } from "@/lib/constants";

const sources = [{ y: 20, label: "CSV / JSON" }, { y: 50, label: "Postgres" }, { y: 80, label: "Kafka" }];
const outputs = [{ y: 20, label: "Reports" }, { y: 50, label: "Dashboards" }, { y: 80, label: "Automations" }];
const cx = 400, cy = 50;

export default function PipelineViz({ activeStage }: { activeStage: number }) {
  return (
    <div className="relative w-full h-24 mb-6">
      <svg viewBox="0 0 800 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="pvGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          {(["pvBlue","pvViolet","pvEmerald"] as const).map((id, i) => (
            <radialGradient key={id} id={id} cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor={[BLUE, VIOLET, EMERALD][i]} stopOpacity="0.9" />
              <stop offset="100%" stopColor={[BLUE, VIOLET, EMERALD][i]} stopOpacity="0.1" />
            </radialGradient>
          ))}
        </defs>

        {sources.map((s, i) => (
          <line key={i} x1="90" y1={s.y} x2={cx - 28} y2={cy}
            stroke={activeStage === 0 ? "rgba(79,126,255,0.5)" : "rgba(255,255,255,0.1)"}
            strokeWidth="0.8" strokeDasharray={activeStage === 0 ? "none" : "3 4"} />
        ))}
        {outputs.map((o, i) => (
          <line key={i} x1={cx + 28} y1={cy} x2="710" y2={o.y}
            stroke={activeStage === 2 ? "rgba(16,185,129,0.5)" : "rgba(255,255,255,0.1)"}
            strokeWidth="0.8" strokeDasharray={activeStage === 2 ? "none" : "3 4"} />
        ))}

        {sources.map((s, i) => (
          <g key={i}>
            <circle cx="90" cy={s.y} r="7"
              fill={activeStage === 0 ? "rgba(79,126,255,0.15)" : "rgba(255,255,255,0.05)"}
              stroke={activeStage === 0 ? "rgba(79,126,255,0.5)" : "rgba(255,255,255,0.1)"}
              strokeWidth="0.8" />
            <circle cx="90" cy={s.y} r="3" fill={activeStage === 0 ? BLUE : "rgba(255,255,255,0.2)"} filter="url(#pvGlow)" />
            <text x="105" y={s.y + 3.5} fontSize="7" fill="rgba(255,255,255,0.35)" fontFamily="JetBrains Mono">{s.label}</text>
          </g>
        ))}

        <circle cx={cx} cy={cy} r="22"
          fill="rgba(79,126,255,0.07)" stroke="rgba(79,126,255,0.3)" strokeWidth="0.8"
          style={{ animation: "pvPulse 2s ease-in-out infinite" }} />
        <circle cx={cx} cy={cy} r="14"
          fill={activeStage === 1 ? "rgba(124,58,237,0.25)" : "rgba(79,126,255,0.1)"}
          stroke={activeStage === 1 ? "rgba(124,58,237,0.7)" : "rgba(79,126,255,0.4)"}
          strokeWidth="1" />
        <circle cx={cx} cy={cy} r="6" fill={activeStage === 1 ? VIOLET : BLUE} filter="url(#pvGlow)" />

        {outputs.map((o, i) => (
          <g key={i}>
            <circle cx="710" cy={o.y} r="7"
              fill={activeStage === 2 ? "rgba(16,185,129,0.15)" : "rgba(255,255,255,0.05)"}
              stroke={activeStage === 2 ? "rgba(16,185,129,0.5)" : "rgba(255,255,255,0.1)"}
              strokeWidth="0.8" />
            <circle cx="710" cy={o.y} r="3" fill={activeStage === 2 ? EMERALD : "rgba(255,255,255,0.2)"} filter="url(#pvGlow)" />
            <text x="722" y={o.y + 3.5} fontSize="7" fill="rgba(255,255,255,0.35)" fontFamily="JetBrains Mono">{o.label}</text>
          </g>
        ))}

        <circle r="3" fill={activeStage === 0 ? BLUE : activeStage === 1 ? VIOLET : EMERALD} filter="url(#pvGlow)" opacity="0.9">
          <animateMotion dur="2.4s" repeatCount="indefinite"
            path={`M90,${sources[1].y} L${cx},${cy} L710,${outputs[1].y}`} />
        </circle>
        <circle r="2" fill={BLUE} filter="url(#pvGlow)" opacity="0.7">
          <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.8s"
            path={`M90,${sources[0].y} L${cx},${cy} L710,${outputs[0].y}`} />
        </circle>
        <circle r="2" fill={EMERALD} filter="url(#pvGlow)" opacity="0.7">
          <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.6s"
            path={`M90,${sources[2].y} L${cx},${cy} L710,${outputs[2].y}`} />
        </circle>
      </svg>
    </div>
  );
}
