import type { TagColor } from "@/types";

export default function SectionLabel({ children, color = "blue" }: { children: string; color?: TagColor }) {
  return (
    <div className="inline-flex items-center gap-2 mb-5">
      <div className="w-4 h-px bg-primary/50" />
      <span className={`text-xs font-bold tracking-[0.14em] uppercase ${
        color === "violet" ? "text-violet-400" :
        color === "emerald" ? "text-emerald-400" :
        "text-primary"
      }`}>
        {children}
      </span>
    </div>
  );
}
