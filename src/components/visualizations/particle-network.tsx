import { BLUE, VIOLET, CYAN } from "@/lib/constants";
import { networkNodes, networkEdges, hubNodes } from "@/lib/data";

export default function ParticleNetwork() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <filter id="pnGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="hubGlow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="pnBg" cx="50%" cy="50%" r="60%">
          <stop offset="0%"   stopColor={BLUE}   stopOpacity="0.09" />
          <stop offset="60%"  stopColor={VIOLET} stopOpacity="0.04" />
          <stop offset="100%" stopColor={BLUE}   stopOpacity="0"    />
        </radialGradient>
      </defs>

      <rect width="100" height="100" fill="url(#pnBg)" />

      {networkEdges.map(([a, b], i) => (
        <line
          key={i}
          x1={networkNodes[a].x} y1={networkNodes[a].y}
          x2={networkNodes[b].x} y2={networkNodes[b].y}
          stroke={hubNodes.has(a) || hubNodes.has(b) ? "rgba(79,126,255,0.28)" : "rgba(79,126,255,0.13)"}
          strokeWidth={hubNodes.has(a) || hubNodes.has(b) ? "0.35" : "0.22"}
          style={{
            animation: `edgeFade ${2.5 + (i % 5) * 0.4}s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.07}s`,
          }}
        />
      ))}

      {networkNodes.map((node, i) => {
        const isHub = hubNodes.has(i);
        const colors = [BLUE, VIOLET, CYAN];
        const color  = isHub ? BLUE : colors[i % 3];
        const r      = isHub ? 1.1 : 0.6;
        return (
          <g key={i}>
            <circle cx={node.x} cy={node.y} r={isHub ? 3 : 2} fill={color} opacity="0.06"
              style={{ animation: `ringPulse ${2 + (i % 4) * 0.7}s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }} />
            <circle cx={node.x} cy={node.y} r={r} fill={color}
              filter={isHub ? "url(#hubGlow)" : "url(#pnGlow)"}
              style={{ animation: `nodePulse ${1.6 + (i % 3) * 0.8}s ease-in-out infinite alternate`, animationDelay: `${i * 0.11}s` }} />
          </g>
        );
      })}

      {[
        { color: BLUE,   path: "M12,15 L32,8 L54,14 L78,6 L91,22 L72,30 L50,42 L28,34 L12,15", dur: "3.2s", begin: "0s"   },
        { color: VIOLET, path: "M7,38 L28,34 L50,42 L40,68 L50,84 L62,57 L85,65 L93,45 L72,30 L50,42", dur: "4.6s", begin: "1.1s" },
        { color: CYAN,   path: "M16,60 L40,68 L50,84 L62,57 L50,42 L28,34 L16,60", dur: "5.2s", begin: "2.3s" },
      ].map((p, i) => (
        <circle key={i} r="0.6" fill={p.color} opacity="0.95" filter="url(#pnGlow)">
          <animateMotion dur={p.dur} repeatCount="indefinite" begin={p.begin} path={p.path} />
        </circle>
      ))}
    </svg>
  );
}
