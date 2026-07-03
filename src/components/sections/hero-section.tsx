"use client";

import { motion } from "motion/react";
import { AlertCircle, ArrowRight, Play } from "lucide-react";
import { BLUE, VIOLET } from "@/lib/constants";
import Btn from "@/components/ui/btn";
import ParticleNetwork from "@/components/visualizations/particle-network";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Layered atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, #4F7EFF 0%, transparent 65%)" }} />
        <div className="absolute top-[55%] left-[8%] w-[600px] h-[600px] rounded-full opacity-12"
          style={{ background: "radial-gradient(ellipse, #7C3AED 0%, transparent 65%)" }} />
        <div className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(ellipse, #22D3EE 0%, transparent 65%)" }} />
        <div className="absolute inset-0 opacity-[0.18]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)", backgroundSize: "44px 44px" }} />
        <div className="absolute top-1/2 left-0 right-0 h-px opacity-10"
          style={{ background: "linear-gradient(90deg, transparent, #4F7EFF, transparent)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-[1fr_1.15fr] gap-20 items-center w-full">
        {/* Left: Copy */}
        <div>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}>
            {/* Version badge */}
            <div className="inline-flex items-center gap-2.5 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/[0.07] cursor-default">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs text-primary font-semibold">Intelligence Platform v2.0 — Now in GA</span>
              </div>
            </div>

            <h1
              className="font-['Outfit'] font-bold text-white leading-[1.04] tracking-[-0.025em] mb-7"
              style={{ fontSize: "clamp(2.75rem, 5vw, 4.5rem)" }}
            >
              <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                Transform Raw Data
              </span>
              <br />
              <span style={{ background: `linear-gradient(125deg, ${BLUE}, ${VIOLET}, #A855F7)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                into Intelligence
              </span>
              <br />
              <span className="bg-gradient-to-r from-white/90 to-white/60 bg-clip-text text-transparent">
                That Acts.
              </span>
            </h1>

            <p className="text-[1.0625rem] text-white/45 leading-[1.7] mb-9 max-w-[400px]">
              Xai unifies your data, applies foundation AI, and delivers clear decisions — not dashboards you have to interpret.
            </p>

            <div className="flex items-center gap-3 flex-wrap mb-10">
              <Btn variant="primary">
                Explore Workspace <ArrowRight size={14} />
              </Btn>
              <Btn variant="secondary">
                <div className="w-6 h-6 rounded-full flex items-center justify-center border border-white/20">
                  <Play size={10} fill="currentColor" className="ml-0.5" />
                </div>
                Watch 90s demo
              </Btn>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-0 border-t border-white/[0.08] pt-8">
              {[
                { value: "2.4B+", label: "Data points / day", sub: "across all sources" },
                { value: "99.9%", label: "Platform uptime",   sub: "SLA guaranteed"     },
                { value: "140ms", label: "Avg. inference",    sub: "p95 latency"         },
              ].map(({ value, label, sub }, i) => (
                <div key={label} className={`pr-6 ${i > 0 ? "pl-6 border-l border-white/[0.08]" : ""}`}>
                  <div className="font-['JetBrains_Mono'] text-[1.6rem] font-bold text-white leading-none">{value}</div>
                  <div className="text-[11px] text-white/50 mt-1 font-medium">{label}</div>
                  <div className="text-[10px] text-white/25 mt-0.5">{sub}</div>
                </div>
              ))}
            </div>

            {/* Trust strip */}
            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <p className="text-[10px] text-white/22 uppercase tracking-[0.14em] font-semibold mb-3">Trusted by engineering teams at</p>
              <div className="flex items-center gap-5 flex-wrap">
                {["Meridian Corp", "Nexus Financial", "Apex Analytics", "Orbit Systems", "Quantum Labs"].map((name) => (
                  <span key={name} className="text-xs text-white/22 font-semibold tracking-tight">{name}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Network viz card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div
            className="relative h-[540px] rounded-2xl border border-white/[0.08] overflow-hidden"
            style={{ background: "radial-gradient(ellipse at 30% 30%, rgba(79,126,255,0.08) 0%, rgba(11,15,25,0.6) 60%)" }}
          >
            <div className="absolute inset-0">
              <ParticleNetwork />
            </div>

            {/* Status chip — top left */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 rounded-xl border border-white/[0.08]"
              style={{ background: "rgba(11,15,25,0.75)", backdropFilter: "blur(16px)" }}>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] text-white/50 font-['JetBrains_Mono']">network.active</span>
              <span className="text-[11px] text-emerald-400 font-['JetBrains_Mono'] font-semibold">· 17 nodes</span>
            </div>

            {/* Inference rate — top right */}
            <div className="absolute top-4 right-4 px-3 py-2 rounded-xl border border-blue-500/20"
              style={{ background: "rgba(79,126,255,0.08)", backdropFilter: "blur(16px)" }}>
              <div className="text-[10px] text-white/35 font-['JetBrains_Mono'] mb-0.5">inferences / sec</div>
              <div className="text-[1.1rem] font-['JetBrains_Mono'] font-bold" style={{ color: BLUE }}>87.4</div>
            </div>

            {/* Anomaly alert — bottom left */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute bottom-14 left-4 px-3 py-2.5 rounded-xl border border-amber-500/25 max-w-[200px]"
              style={{ background: "rgba(245,158,11,0.06)", backdropFilter: "blur(16px)" }}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <AlertCircle size={10} className="text-amber-400" />
                <span className="text-[10px] text-amber-400 font-semibold">Anomaly · APAC</span>
              </div>
              <div className="text-[10px] text-white/45 leading-relaxed">Revenue deviation −8.3% detected in cluster 3</div>
            </motion.div>

            {/* Model confidence — bottom right */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="absolute bottom-14 right-4 px-3 py-2.5 rounded-xl border border-violet-500/25"
              style={{ background: "rgba(124,58,237,0.08)", backdropFilter: "blur(16px)" }}
            >
              <div className="text-[10px] text-white/35 font-['JetBrains_Mono'] mb-1">Atlas Model · confidence</div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1 rounded-full bg-white/[0.08]">
                  <div className="h-full rounded-full w-[94%]" style={{ background: `linear-gradient(90deg, ${BLUE}, ${VIOLET})` }} />
                </div>
                <span className="text-[11px] font-['JetBrains_Mono'] font-bold text-violet-400">94%</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <div className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/30" style={{ animation: "scrollDot 1.8s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
}
