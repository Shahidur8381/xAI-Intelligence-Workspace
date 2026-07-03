"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { flowStages } from "@/lib/data";
import SectionLabel from "@/components/ui/section-label";
import PipelineViz from "@/components/visualizations/pipeline-viz";
import type { FlowColor } from "@/types";
import * as Icons from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type LucideIconName = keyof typeof Icons;

const colorStyles: Record<FlowColor, { text: string; border: string; activeBorder: string }> = {
  blue:    { text: "text-primary",     border: "border-primary/20",     activeBorder: "border-primary/50"     },
  violet:  { text: "text-violet-400",  border: "border-violet-500/20",  activeBorder: "border-violet-500/50"  },
  emerald: { text: "text-emerald-400", border: "border-emerald-500/20", activeBorder: "border-emerald-500/50" },
};

interface FlowCardProps {
  stage: typeof flowStages[0];
  isActive: boolean;
  onClick: () => void;
}

function FlowCard({ stage, isActive, onClick }: FlowCardProps) {
  const c = colorStyles[stage.color];
  const Icon = Icons[stage.iconName as LucideIconName] as React.ElementType;

  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.18 } }}
      onClick={onClick}
      className={`relative p-7 rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden ${isActive ? c.activeBorder : c.border}`}
      style={{
        background: isActive
          ? `radial-gradient(ellipse at 0% 0%, ${stage.glowColor}12 0%, rgba(13,19,33,0.9) 60%)`
          : "rgba(13,19,33,0.7)",
        boxShadow: isActive
          ? `0 0 60px ${stage.glowColor}14, inset 0 1px 0 rgba(255,255,255,0.05)`
          : "inset 0 1px 0 rgba(255,255,255,0.03)",
      }}
    >
      {isActive && (
        <div className="absolute left-0 top-8 bottom-8 w-0.5 rounded-r-full" style={{ background: stage.glowColor }} />
      )}

      <div className="flex items-start justify-between mb-5">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center"
          style={{ background: `${stage.glowColor}14`, border: `1px solid ${stage.glowColor}25` }}>
          {Icon && <Icon size={18} style={{ color: stage.glowColor }} />}
        </div>
        <span className="font-['JetBrains_Mono'] text-[2rem] font-bold leading-none"
          style={{ color: stage.glowColor, opacity: isActive ? 0.25 : 0.12 }}>
          {stage.step}
        </span>
      </div>

      <h3 className="text-[1.1rem] font-['Outfit'] font-bold text-white mb-2 tracking-tight">{stage.title}</h3>
      <p className="text-[13px] text-white/38 leading-relaxed mb-5">{stage.description}</p>

      <ul className="space-y-2 mb-6">
        {stage.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-[13px] text-white/50">
            <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: stage.glowColor, opacity: 0.65 }} />
            {f}
          </li>
        ))}
      </ul>

      <div className="pt-5 border-t border-white/[0.06]">
        <span className="font-['JetBrains_Mono'] text-[1.5rem] font-bold" style={{ color: stage.glowColor }}>
          {stage.metric.value}
        </span>
        <div className="text-[11px] text-white/28 mt-0.5">{stage.metric.label}</div>
      </div>
    </motion.div>
  );
}

export default function IntelligenceFlow() {
  const [activeStage, setActiveStage] = useState(1);
  const sectionRef  = useRef<HTMLElement>(null);
  const headerRef   = useRef<HTMLDivElement>(null);
  const pipeRef     = useRef<HTMLDivElement>(null);
  const cardsRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── header ──────────────────────────────────────────────────────────
      gsap.fromTo(
        Array.from(headerRef.current?.children ?? []),
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "expo.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      // ── pipeline viz slides in ───────────────────────────────────────────
      gsap.fromTo(
        pipeRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0,
          duration: 0.7,
          ease: "expo.out",
          scrollTrigger: {
            trigger: pipeRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // ── flow cards stagger ───────────────────────────────────────────────
      const cards = cardsRef.current
        ? Array.from(cardsRef.current.children)
        : [];

      gsap.fromTo(
        cards,
        { opacity: 0, y: 36, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.65,
          stagger: 0.12,
          ease: "expo.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="mb-14">
          <SectionLabel>Intelligence Pipeline</SectionLabel>
          <h2 className="text-[2.6rem] font-['Outfit'] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-4">
            Raw data in.<br />Clear decisions out.
          </h2>
          <p className="text-white/38 max-w-md leading-relaxed text-[0.9375rem]">
            Three interconnected stages — automatically orchestrated. No configuration, no stitching together tools.
          </p>
        </div>

        {/* Pipeline viz */}
        <div ref={pipeRef} style={{ opacity: 0 }}>
          <PipelineViz activeStage={activeStage} />
        </div>

        {/* Flow cards */}
        <div ref={cardsRef} className="relative grid lg:grid-cols-3 gap-4">
          {flowStages.map((stage, i) => (
            <div key={stage.step} style={{ opacity: 0 }}>
              <FlowCard stage={stage} isActive={activeStage === i} onClick={() => setActiveStage(i)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
