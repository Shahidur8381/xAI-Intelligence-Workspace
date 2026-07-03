"use client";

import { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import { BLUE, VIOLET, CYAN, EMERALD } from "@/lib/constants";
import SectionLabel from "@/components/ui/section-label";
import { gsap, ScrollTrigger } from "@/lib/gsap";

// ─── Pre-computed constants (module level = identical on server & client) ──────
const rings: [number, string, string, boolean, string][] = [
  [160, "rotateX(72deg)",               "28s", false, "rgba(79,126,255,0.18)" ],
  [130, "rotateX(60deg) rotateZ(30deg)","18s", true,  "rgba(124,58,237,0.22)"],
  [105, "rotateX(80deg) rotateZ(60deg)","22s", false, "rgba(34,211,238,0.14)"],
  [85,  "rotateX(50deg) rotateZ(-20deg)","15s", true, "rgba(79,126,255,0.25)"],
];

const dataChips = [
  { angle: 40,  radius: 210, label: "Pattern Score", value: "97.3",  color: BLUE    },
  { angle: 155, radius: 200, label: "Graph Density",  value: "1,240", color: VIOLET  },
  { angle: 260, radius: 215, label: "Entropy Index",  value: "0.042", color: CYAN    },
  { angle: 335, radius: 205, label: "Convergence",    value: "98.1%", color: EMERALD },
];

const round = (n: number) => parseFloat(n.toFixed(4));

const particles = Array.from({ length: 32 }, (_, i) => {
  const angle = (i / 32) * 360;
  const r     = 85 + (i % 5) * 18;
  const rad   = (angle * Math.PI) / 180;
  return {
    x:       round(Math.cos(rad) * r),
    y:       round(Math.sin(rad) * r),
    size:    1.5 + (i % 4) * 0.8,
    opacity: 0.15 + (i % 5) * 0.08,
    color:   [BLUE, VIOLET, CYAN][i % 3],
    dur:     `${2.5 + (i % 5) * 0.7}s`,
    delay:   `${(i * 0.18) % 2}s`,
  };
});

const ORBIT_R       = 148;
const orbitColors   = [BLUE, VIOLET, CYAN, BLUE, VIOLET];
const orbitDegrees  = [0, 72, 144, 216, 288];

const orbitNodes = orbitDegrees.map((deg, i) => {
  const rad = (deg * Math.PI) / 180;
  return {
    cx: round(Math.cos(rad) * ORBIT_R - 5),
    cy: round(Math.sin(rad) * ORBIT_R - 5),
    color:      orbitColors[i],
    animDur:    `${1.8 + i * 0.4}s`,
    animDelay:  `${i * 0.3}s`,
  };
});

const svgLines = orbitDegrees.map((deg, i) => ({
  x2:         round(240 + Math.cos((deg * Math.PI) / 180) * ORBIT_R),
  y2:         round(240 + Math.sin((deg * Math.PI) / 180) * ORBIT_R),
  color:      orbitColors[i],
  animDur:    `${2 + i * 0.4}s`,
  animDelay:  `${i * 0.2}s`,
}));

const chipPositions = dataChips.map((chip) => {
  const rad = (chip.angle * Math.PI) / 180;
  return {
    left: `calc(50% + ${round(Math.cos(rad) * chip.radius - 52)}px)`,
    top:  `calc(50% + ${round(Math.sin(rad) * chip.radius - 22)}px)`,
  };
});

// ─── Component ────────────────────────────────────────────────────────────────
export default function SphereSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const headerRef   = useRef<HTMLDivElement>(null);
  const cardRef     = useRef<HTMLDivElement>(null);
  const sphereRef   = useRef<HTMLDivElement>(null);
  const chipsRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── header stagger ───────────────────────────────────────────────────
      const headerChildren = headerRef.current
        ? Array.from(headerRef.current.children)
        : [];

      gsap.fromTo(
        headerChildren,
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0,
          duration: 0.75,
          stagger: 0.14,
          ease: "expo.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      // ── card entrance with scrub ─────────────────────────────────────────
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.93, y: 40 },
        {
          opacity: 1, scale: 1, y: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // ── sphere scale-in ──────────────────────────────────────────────────
      gsap.fromTo(
        sphereRef.current,
        { scale: 0.7, opacity: 0, rotate: -15 },
        {
          scale: 1, opacity: 1, rotate: 0,
          duration: 1.2,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // ── data chip satellites stagger ─────────────────────────────────────
      const chips = chipsRef.current
        ? Array.from(chipsRef.current.querySelectorAll("[data-chip]"))
        : [];

      gsap.fromTo(
        chips,
        { opacity: 0, scale: 0.6 },
        {
          opacity: 1, scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 65%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-15"
          style={{ background: "radial-gradient(ellipse, #7C3AED 0%, transparent 60%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #4F7EFF 0%, transparent 65%)" }} />
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "44px 44px" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <SectionLabel color="violet">Signature Experience</SectionLabel>
          <h2 className="text-[2.6rem] font-['Outfit'] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-4">
            See Intelligence Come Alive
          </h2>
          <p className="text-white/38 max-w-[400px] mx-auto leading-relaxed text-[0.9375rem]">
            A living knowledge graph — continuously reorganizing your data into structured intelligence as new signals arrive.
          </p>
        </div>

        {/* Viz card */}
        <div
          ref={cardRef}
          className="relative rounded-2xl border border-white/7 overflow-hidden flex items-center justify-center"
          style={{ height: 640, background: "radial-gradient(ellipse at center, rgba(124,58,237,0.09) 0%, rgba(9,14,26,0.95) 65%)", opacity: 0 }}
        >
          {/* Ray burst */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 640" preserveAspectRatio="xMidYMid meet">
            {Array.from({ length: 16 }, (_, i) => {
              const rad = (i / 16) * 2 * Math.PI;
              return (
                <line key={i} x1="600" y1="320"
                  x2={round(600 + Math.cos(rad) * 500)}
                  y2={round(320 + Math.sin(rad) * 500)}
                  stroke={i % 2 === 0 ? "rgba(79,126,255,0.04)" : "rgba(124,58,237,0.03)"}
                  strokeWidth="1"
                  style={{ animation: `rayPulse ${3 + (i % 4)}s ease-in-out infinite alternate`, animationDelay: `${i * 0.2}s` }}
                />
              );
            })}
          </svg>

          {/* Concentric background rings */}
          {[440, 360, 280, 210].map((d, i) => (
            <div key={i} className="absolute rounded-full border border-white/[0.04]"
              style={{ width: d, height: d, opacity: 0.5 - i * 0.08 }} />
          ))}

          {/* Sphere system */}
          <div ref={sphereRef} className="relative flex items-center justify-center" style={{ width: 480, height: 480, perspective: "600px", opacity: 0 }}>

            {/* 3D orbital rings */}
            {rings.map(([r, tilt, speed, rev, color], i) => (
              <div key={i} className="absolute rounded-full"
                style={{
                  width: r * 2, height: r * 2,
                  left: `calc(50% - ${r}px)`, top: `calc(50% - ${r}px)`,
                  border: `1px solid ${color}`,
                  transform: tilt,
                  animation: `orbitSpin ${speed} linear infinite ${rev ? "reverse" : ""}`,
                  transformStyle: "preserve-3d",
                }} />
            ))}

            {/* Particle spray */}
            {particles.map((p, i) => (
              <div key={i} className="absolute rounded-full"
                style={{
                  width: p.size,
                  height: p.size,
                  left: `calc(50% + ${p.x - p.size / 2}px)`,
                  top:  `calc(50% + ${p.y - p.size / 2}px)`,
                  background: p.color,
                  opacity: p.opacity,
                  boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
                  animation: `orbPulse ${p.dur} ease-in-out infinite alternate`,
                  animationDelay: p.delay,
                }} />
            ))}

            {/* Orbiting hub nodes */}
            {orbitNodes.map((node, i) => (
              <div key={i} className="absolute rounded-full"
                style={{
                  width: 10,
                  height: 10,
                  left: `calc(50% + ${node.cx}px)`,
                  top:  `calc(50% + ${node.cy}px)`,
                  background: node.color,
                  boxShadow: `0 0 16px ${node.color}, 0 0 32px ${node.color}40`,
                  animation: `orbPulse ${node.animDur} ease-in-out infinite alternate`,
                  animationDelay: node.animDelay,
                }} />
            ))}

            {/* Connection lines */}
            <svg className="absolute inset-0 pointer-events-none" style={{ width: 480, height: 480 }} viewBox="0 0 480 480">
              {svgLines.map((ln, i) => (
                <line key={i}
                  x1="240" y1="240"
                  x2={ln.x2} y2={ln.y2}
                  stroke={ln.color} strokeWidth="0.6" strokeDasharray="4 3" opacity="0.25"
                  style={{ animation: `edgeFade ${ln.animDur} ease-in-out infinite alternate`, animationDelay: ln.animDelay }}
                />
              ))}
            </svg>

            {/* Core sphere */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-40 h-40 rounded-full"
                style={{
                  background: `radial-gradient(circle at 33% 30%, rgba(124,58,237,0.9), rgba(79,126,255,0.5) 45%, rgba(9,14,26,0.98))`,
                  boxShadow: `0 0 80px rgba(124,58,237,0.45), 0 0 160px rgba(79,126,255,0.18), 0 0 240px rgba(124,58,237,0.08), inset 0 0 60px rgba(0,0,0,0.7)`,
                }}>
                <div className="absolute top-5 left-7 w-16 h-10 rounded-full opacity-30"
                  style={{ background: "radial-gradient(ellipse, rgba(255,255,255,0.8), transparent)" }} />
                <div className="absolute inset-4 rounded-full opacity-40"
                  style={{ background: `radial-gradient(circle, ${VIOLET}, transparent)`, animation: "pvPulse 3s ease-in-out infinite" }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles size={24} className="text-white/30" />
                </div>
              </div>
            </div>

            {/* Data chip satellites — GSAP will stagger them in */}
            <div ref={chipsRef}>
              {dataChips.map((chip, i) => (
                <div
                  key={i}
                  data-chip
                  className="absolute px-3 py-2 rounded-xl border"
                  style={{
                    left: chipPositions[i].left,
                    top:  chipPositions[i].top,
                    background: `${chip.color}0A`,
                    borderColor: `${chip.color}22`,
                    backdropFilter: "blur(12px)",
                    animation: `shapeFloat ${3.5 + i * 0.6}s ease-in-out infinite alternate`,
                    animationDelay: `${i * 0.4}s`,
                    opacity: 0,
                  }}>
                  <div className="text-[9px] whitespace-nowrap" style={{ color: `${chip.color}80` }}>{chip.label}</div>
                  <div className="text-[13px] font-['JetBrains_Mono'] font-bold text-white">{chip.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Corner metadata */}
          <div className="absolute top-5 left-5 font-['JetBrains_Mono'] text-[10px] text-white/18">knowledge_graph · v3.1</div>
          <div className="absolute top-5 right-5 font-['JetBrains_Mono'] text-[10px] text-white/18">nodes: 1,240 · edges: 4,871</div>

          {/* Bottom badge */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/[0.08]"
            style={{ background: "rgba(9,14,26,0.7)", backdropFilter: "blur(20px)" }}>
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: VIOLET }} />
            <span className="text-[10px] text-white/28 font-['JetBrains_Mono']">@react-three/fiber · React Three Fiber placeholder — coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
