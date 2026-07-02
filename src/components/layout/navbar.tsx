"use client";

import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { BLUE, VIOLET } from "@/lib/constants";
import Btn from "@/components/ui/btn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background: scrolled ? "rgba(11,15,25,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div
              className="relative w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${BLUE}, ${VIOLET})` }}
            >
              <Sparkles size={13} className="text-white" />
              <div
                className="absolute inset-0 rounded-lg opacity-40"
                style={{ background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent)" }}
              />
            </div>
            <span className="font-['Outfit'] font-bold text-white text-[1.05rem] tracking-[-0.01em]">Xai</span>
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-7">
            {["Platform", "Solutions", "Docs", "Pricing"].map((item) => (
              <a key={item} href="#" className="text-sm text-white/40 hover:text-white/80 transition-colors duration-150 tracking-[-0.01em]">
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/[0.08]">
            <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-semibold text-emerald-400 tracking-wide">99.9% uptime</span>
          </div>
          <button className="text-sm text-white/40 hover:text-white/80 transition-colors">Sign in</button>
          <Btn variant="primary" className="!py-2 !px-4 !text-xs">Get started free</Btn>
        </div>
      </div>
    </nav>
  );
}
