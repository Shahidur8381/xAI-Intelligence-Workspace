import { Filter } from "lucide-react";
import { recentInsights } from "@/lib/data";
import Tag from "@/components/ui/tag";

export default function InsightsTable() {
  return (
    <div className="rounded-xl border border-white/7 overflow-hidden" style={{ background: "rgba(255,255,255,0.015)" }}>
      <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[12px] font-['Outfit'] font-bold text-white">Recent Insights</span>
          <span className="text-[10px] font-['JetBrains_Mono'] text-white/20 border border-white/8 px-1.5 py-0.5 rounded-md">5 new</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 text-[11px] text-white/25 hover:text-white/50 transition-colors">
            <Filter size={9} /> Filter
          </button>
          <button className="text-[11px] text-primary/60 hover:text-primary transition-colors">View all →</button>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/4">
            {["ID", "Insight", "Type", "Severity", "Impact", "Time"].map((h, i) => (
              <th key={h} className={`text-[10px] text-white/22 font-semibold px-5 py-2 ${i >= 4 ? "text-right" : "text-left"} tracking-[0.06em] uppercase`}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {recentInsights.map((row, i) => (
            <tr key={row.id}
              className={`group hover:bg-white/[0.015] transition-colors cursor-pointer ${i < recentInsights.length - 1 ? "border-b border-white/4" : ""}`}
            >
              <td className="px-5 py-2.5 text-[10px] font-['JetBrains_Mono'] text-white/22">{row.id}</td>
              <td className="px-5 py-2.5 text-[11px] text-white/55 max-w-[260px]">{row.title}</td>
              <td className="px-5 py-2.5">
                <Tag color={
                  row.type === "Anomaly" ? "amber" : row.type === "Alert" ? "amber" :
                  row.type === "Trend" ? "emerald" : row.type === "Risk" ? "red" : "blue"
                }>
                  {row.type}
                </Tag>
              </td>
              <td className="px-5 py-2.5">
                <span className={`text-[10px] font-['JetBrains_Mono'] font-semibold uppercase tracking-wide ${
                  row.severity === "critical" ? "text-red-400" :
                  row.severity === "high"     ? "text-orange-400" :
                  row.severity === "positive" ? "text-emerald-400" :
                  row.severity === "medium"   ? "text-amber-400" : "text-white/28"
                }`}>
                  {row.severity}
                </span>
              </td>
              <td className="px-5 py-2.5 text-right">
                <span className={`text-[10px] font-['JetBrains_Mono'] font-semibold ${
                  row.delta.startsWith("+") ? "text-emerald-400" :
                  row.delta.startsWith("−") ? "text-red-400" : "text-white/28"
                }`}>
                  {row.delta}
                </span>
              </td>
              <td className="px-5 py-2.5 text-right text-[10px] font-['JetBrains_Mono'] text-white/22">{row.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
