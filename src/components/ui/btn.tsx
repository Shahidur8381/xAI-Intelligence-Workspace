import { BLUE, VIOLET } from "@/lib/constants";
import type { BtnVariant } from "@/types";

interface BtnProps {
  children: React.ReactNode;
  variant?: BtnVariant;
  onClick?: () => void;
  className?: string;
}

export default function Btn({ children, variant = "primary", onClick, className = "" }: BtnProps) {
  if (variant === "primary") {
    return (
      <button
        onClick={onClick}
        className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 cursor-pointer hover:-translate-y-0.5 ${className}`}
        style={{ background: `linear-gradient(135deg, ${BLUE}, ${VIOLET})`, boxShadow: "none" }}
        onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 8px 32px ${BLUE}40`)}
        onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
      >
        {children}
      </button>
    );
  }
  if (variant === "secondary") {
    return (
      <button
        onClick={onClick}
        className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm text-white/80 border border-white/12 hover:border-white/20 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer hover:-translate-y-0.5 ${className}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-4 py-2 text-white/45 hover:text-white text-sm transition-colors cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
