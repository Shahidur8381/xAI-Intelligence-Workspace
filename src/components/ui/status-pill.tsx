import type { StatusType } from "@/types";

const statusMap: Record<StatusType, { dot: string; text: string; label: string }> = {
  operational: { dot: "bg-emerald-400", text: "text-emerald-400", label: "Operational" },
  degraded:    { dot: "bg-amber-400",   text: "text-amber-400",   label: "Degraded"    },
  outage:      { dot: "bg-red-400",     text: "text-red-400",     label: "Outage"      },
};

export default function StatusPill({ status }: { status: StatusType }) {
  const s = statusMap[status];
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-['JetBrains_Mono'] ${s.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot} animate-pulse`} />
      {s.label}
    </span>
  );
}
