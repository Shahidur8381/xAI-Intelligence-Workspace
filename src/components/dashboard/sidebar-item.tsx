import { BLUE } from "@/lib/constants";
import * as Icons from "lucide-react";

type LucideIconName = keyof typeof Icons;

interface SidebarItemProps {
  iconName: string;
  label: string;
  active?: boolean;
  badge?: string;
}

export default function SidebarItem({ iconName, label, active = false, badge }: SidebarItemProps) {
  const Icon = Icons[iconName as LucideIconName] as React.ElementType;

  return (
    <div
      className={`relative flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-pointer transition-all duration-150 text-[13px] select-none ${
        active ? "text-white font-semibold" : "text-white/35 hover:text-white/65 hover:bg-white/[0.04]"
      }`}
      style={active ? { background: "rgba(79,126,255,0.1)" } : {}}
    >
      {active && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 rounded-r-full" style={{ background: BLUE }} />
      )}
      {Icon && <Icon size={13} strokeWidth={active ? 2.5 : 1.8} className={active ? "text-primary" : ""} />}
      <span>{label}</span>
      {badge && (
        <span className="ml-auto text-[10px] bg-primary/[0.18] text-primary px-1.5 py-0.5 rounded-md font-['JetBrains_Mono'] font-semibold">
          {badge}
        </span>
      )}
    </div>
  );
}
