import { kpiSparklines } from "@/lib/data";
import { EMERALD } from "@/lib/constants";
import { TrendingUp, TrendingDown } from "lucide-react";
import type { KPICardProps } from "@/types";
import Sparkline from "@/components/dashboard/sparkline";
import * as Icons from "lucide-react";

type LucideIconName = keyof typeof Icons;

export default function KPICard({ label, value, change, trend, iconName, iconBg, iconColor, sparkKey }: KPICardProps) {
  const Icon = Icons[iconName as LucideIconName] as React.ElementType;
  const sparkColor = trend === "up" ? EMERALD : "#EF4444";

  return (
    <div
      className="rounded-xl p-4 border border-white/7 hover:border-white/12 transition-all duration-200 cursor-default"
      style={{ background: "rgba(255,255,255,0.022)" }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${iconBg}`}>
          {Icon && <Icon size={13} className={iconColor} />}
        </div>
        <span className={`text-xs font-semibold flex items-center gap-1 ${trend === "up" ? "text-emerald-400" : "text-red-400"}`}>
          {trend === "up" ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
          {change}
        </span>
      </div>
      <div data-kpi-value className="font-['JetBrains_Mono'] text-[1.35rem] font-bold text-white leading-none mb-1">{value}</div>
      <div className="text-[11px] text-white/35 mb-3">{label}</div>
      <Sparkline values={kpiSparklines[sparkKey]} color={sparkColor} />
    </div>
  );
}
