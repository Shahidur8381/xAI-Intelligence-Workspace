// ─── Color / Tag Types ────────────────────────────────────────────────────────
export type TagColor = "blue" | "violet" | "emerald" | "amber" | "red";
export type BtnVariant = "primary" | "secondary" | "ghost";
export type StatusType = "operational" | "degraded" | "outage";
export type TrendDir = "up" | "down";
export type FlowColor = "blue" | "violet" | "emerald";

// ─── KPI Card ────────────────────────────────────────────────────────────────
export interface KPICardProps {
  label: string;
  value: string;
  change: string;
  trend: TrendDir;
  iconName: string;
  iconBg: string;
  iconColor: string;
  sparkKey: string;
}

// ─── Sidebar Nav Item ─────────────────────────────────────────────────────────
export interface NavItem {
  iconName: string;
  label: string;
  badge?: string;
}

// ─── Insights Table ───────────────────────────────────────────────────────────
export interface InsightRow {
  id: string;
  title: string;
  type: string;
  severity: string;
  time: string;
  delta: string;
}
