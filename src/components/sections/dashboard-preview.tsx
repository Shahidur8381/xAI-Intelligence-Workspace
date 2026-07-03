"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis,
  Tooltip, ResponsiveContainer, CartesianGrid, Cell,
} from "recharts";
import {
  LayoutDashboard, Database, Cpu, Sparkles, Zap, Shield, Settings,
  ChevronRight, Search, Bell, Filter, Globe, Eye, MoreHorizontal, ExternalLink,
} from "lucide-react";
import { BLUE, VIOLET, EMERALD } from "@/lib/constants";
import { lineData, barData, activityFeed } from "@/lib/data";
import SectionLabel from "@/components/ui/section-label";
import KPICard from "@/components/dashboard/kpi-card";
import SidebarItem from "@/components/dashboard/sidebar-item";
import InsightsTable from "@/components/dashboard/insights-table";
import * as Icons from "lucide-react";
import type { KPICardProps } from "@/types";

type LucideIconName = keyof typeof Icons;

const kpis: KPICardProps[] = [
  { label: "Total Insights", value: "2,341", change: "+18.6%", trend: "up",   iconName: "Sparkles", iconBg: "bg-blue-500/10",    iconColor: "text-blue-400",    sparkKey: "insights"    },
  { label: "Active Models",  value: "23",    change: "+2",     trend: "up",   iconName: "Cpu",      iconBg: "bg-violet-500/10",  iconColor: "text-violet-400",  sparkKey: "models"      },
  { label: "Data Sources",   value: "12",    change: "−1",     trend: "down", iconName: "Database", iconBg: "bg-amber-500/10",   iconColor: "text-amber-400",   sparkKey: "sources"     },
  { label: "Automations",    value: "8",     change: "+3",     trend: "up",   iconName: "Zap",      iconBg: "bg-emerald-500/10", iconColor: "text-emerald-400", sparkKey: "automations" },
];

const navItems = [
  { iconName: "LayoutDashboard", label: "Overview"     },
  { iconName: "Database",        label: "Data Sources", badge: "12" },
  { iconName: "Cpu",             label: "Models"       },
  { iconName: "Sparkles",        label: "Insights",     badge: "5"  },
  { iconName: "Zap",             label: "Automations"  },
  { iconName: "Shield",          label: "Governance"   },
  { iconName: "Settings",        label: "Settings"     },
];

export default function DashboardPreview() {
  const [activeNav, setActiveNav] = useState("Overview");

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{ background: "radial-gradient(ellipse at bottom, rgba(79,126,255,0.06) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <SectionLabel color="violet">Dashboard Preview</SectionLabel>
          <h2 className="text-[2.6rem] font-['Outfit'] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-4">
            Built for teams who<br />ship on intelligence.
          </h2>
          <p className="text-white/38 max-w-md leading-relaxed text-[0.9375rem]">
            A real product — not a demo. Every element is interactive, every number is live.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.16 }}
          className="rounded-2xl border border-white/[0.08] overflow-hidden"
          style={{ background: "#090E1A", boxShadow: "0 40px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)" }}
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06]" style={{ background: "rgba(255,255,255,0.02)" }}>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
            </div>
            <div className="flex-1 mx-8 flex items-center justify-center">
              <div className="px-4 py-1 rounded-md border border-white/[0.06] bg-white/[0.02] flex items-center gap-2">
                <Globe size={10} className="text-white/20" />
                <span className="text-[11px] text-white/18 font-['JetBrains_Mono']">app.xai.io/workspace/overview</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded flex items-center justify-center bg-white/[0.04] border border-white/[0.06]">
                <Eye size={9} className="text-white/25" />
              </div>
              <div className="w-5 h-5 rounded flex items-center justify-center bg-white/[0.04] border border-white/[0.06]">
                <MoreHorizontal size={9} className="text-white/25" />
              </div>
            </div>
          </div>

          <div className="flex" style={{ height: 720 }}>
            {/* Sidebar */}
            <div className="w-[216px] flex-shrink-0 border-r border-white/[0.06] flex flex-col" style={{ background: "rgba(0,0,0,0.25)" }}>
              {/* Workspace header */}
              <div className="px-4 py-4 border-b border-white/[0.05]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${BLUE}, ${VIOLET})` }}>
                    <Sparkles size={10} className="text-white" />
                  </div>
                  <span className="text-[13px] font-['Outfit'] font-bold text-white">Xai Workspace</span>
                  <ChevronRight size={11} className="text-white/20 ml-auto" />
                </div>
                <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                  <Search size={10} className="text-white/25" />
                  <span className="text-[11px] text-white/25">Quick search...</span>
                  <span className="ml-auto text-[10px] text-white/15 border border-white/10 px-1 rounded font-['JetBrains_Mono']">⌘K</span>
                </div>
              </div>

              {/* Nav */}
              <div className="flex-1 px-2 py-3 space-y-0.5">
                <div className="px-3 mb-2">
                  <span className="text-[10px] font-bold text-white/18 uppercase tracking-[0.12em]">Main</span>
                </div>
                {navItems.slice(0, 5).map((item) => (
                  <div key={item.label} onClick={() => setActiveNav(item.label)}>
                    <SidebarItem {...item} active={activeNav === item.label} />
                  </div>
                ))}
                <div className="px-3 pt-3 pb-1">
                  <span className="text-[10px] font-bold text-white/18 uppercase tracking-[0.12em]">Admin</span>
                </div>
                {navItems.slice(5).map((item) => (
                  <div key={item.label} onClick={() => setActiveNav(item.label)}>
                    <SidebarItem {...item} active={activeNav === item.label} />
                  </div>
                ))}
              </div>

              {/* Credits + user */}
              <div className="px-3 pb-3 space-y-2 border-t border-white/[0.05] pt-3">
                <div className="p-3 rounded-xl border border-primary/12" style={{ background: "rgba(79,126,255,0.05)" }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold text-primary/60">AI Credits</span>
                    <span className="text-[10px] text-white/22 font-['JetBrains_Mono']">66.4k / 100k</span>
                  </div>
                  <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: "66%", background: `linear-gradient(90deg, ${BLUE}, ${VIOLET})` }} />
                  </div>
                </div>
                <div className="flex items-center gap-2.5 px-1 py-1.5">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${VIOLET}, ${BLUE})` }}>A</div>
                  <div>
                    <div className="text-[12px] font-semibold text-white/60">Avery Chen</div>
                    <div className="text-[10px] text-white/22">Admin · Engineering</div>
                  </div>
                  <MoreHorizontal size={12} className="text-white/20 ml-auto" />
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
              {/* Top bar */}
              <div className="flex items-center justify-between px-6 py-3 border-b border-white/[0.05] flex-shrink-0">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-[13px] font-['Outfit'] font-bold text-white">{activeNav}</h3>
                    <span className="text-[10px] font-['JetBrains_Mono'] text-white/20 border border-white/[0.08] px-1.5 py-0.5 rounded-md">Live</span>
                  </div>
                  <p className="text-[11px] text-white/22 font-['JetBrains_Mono'] mt-0.5">Updated 90s ago · Jul 3, 2024</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/7 bg-white/[0.025] text-[11px] text-white/30 cursor-text">
                    <Search size={10} /><span>Search insights...</span>
                    <span className="ml-2 text-[10px] border border-white/[0.08] px-1 rounded font-['JetBrains_Mono']">⌘F</span>
                  </div>
                  <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/7 bg-white/[0.025] text-[11px] text-white/30 hover:text-white/55 transition-colors">
                    <Filter size={10} /> Filter
                  </button>
                  <div className="relative w-7 h-7 flex items-center justify-center rounded-lg border border-white/7 bg-white/[0.025] cursor-pointer hover:border-white/15 transition-colors">
                    <Bell size={12} className="text-white/30" />
                    <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full" style={{ background: BLUE }} />
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-5 space-y-4" style={{ scrollbarWidth: "none" }}>
                {/* KPIs */}
                <div className="grid grid-cols-4 gap-3">
                  {kpis.map((k) => <KPICard key={k.label} {...k} />)}
                </div>

                {/* Charts */}
                <div className="grid grid-cols-5 gap-3">
                  <div className="col-span-3 rounded-xl p-4 border border-white/7" style={{ background: "rgba(255,255,255,0.018)" }}>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-[12px] font-['Outfit'] font-bold text-white">Revenue Intelligence</div>
                        <div className="text-[10px] text-white/28 mt-0.5 font-['JetBrains_Mono']">Actual vs. AI Prediction · Jan–Aug 2024 · $M</div>
                      </div>
                      <div className="flex items-center gap-4">
                        {[{ color: BLUE, label: "Actual" }, { color: VIOLET, label: "Predicted", dashed: true }].map(({ color, label, dashed }) => (
                          <span key={label} className="flex items-center gap-1.5 text-[10px] text-white/30">
                            <span className="inline-block" style={{ width: 16, height: 1.5, background: dashed ? "none" : color, borderTop: dashed ? `1.5px dashed ${color}` : "none", opacity: 0.8 }} />
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ResponsiveContainer width="100%" height={128}>
                      <AreaChart data={lineData} margin={{ top: 4, right: 2, left: -26, bottom: 0 }}>
                        <defs>
                          <linearGradient id="gBlue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={BLUE} stopOpacity={0.2} />
                            <stop offset="95%" stopColor={BLUE} stopOpacity={0} />
                          </linearGradient>
                          <linearGradient id="gViolet" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={VIOLET} stopOpacity={0.12} />
                            <stop offset="95%" stopColor={VIOLET} stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="2 4" stroke="rgba(255,255,255,0.04)" vertical={false} />
                        <XAxis dataKey="month" tick={{ fill: "rgba(255,255,255,0.25)", fontSize: 9, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fill: "rgba(255,255,255,0.25)", fontSize: 9, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}M`} />
                        <Tooltip contentStyle={{ background: "#0F172A", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 10, fontSize: 11, color: "white", fontFamily: "JetBrains Mono" }}
                          cursor={{ stroke: "rgba(255,255,255,0.07)", strokeWidth: 1 }}
                          formatter={(v) => [`$${v}M`, ""]} />
                        <Area type="monotone" dataKey="actual" stroke={BLUE} strokeWidth={2} fill="url(#gBlue)" dot={false} />
                        <Area type="monotone" dataKey="predicted" stroke={VIOLET} strokeWidth={1.5} fill="url(#gViolet)" dot={false} strokeDasharray="4 3" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="col-span-2 rounded-xl p-4 border border-white/7" style={{ background: "rgba(255,255,255,0.018)" }}>
                    <div className="mb-3">
                      <div className="text-[12px] font-['Outfit'] font-bold text-white">Model Accuracy</div>
                      <div className="text-[10px] text-white/28 mt-0.5 font-['JetBrains_Mono']">By capability · Aug 2024</div>
                    </div>
                    <ResponsiveContainer width="100%" height={128}>
                      <BarChart data={barData} margin={{ top: 4, right: 2, left: -26, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="2 4" stroke="rgba(255,255,255,0.04)" vertical={false} />
                        <XAxis dataKey="label" tick={{ fill: "rgba(255,255,255,0.25)", fontSize: 9, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fill: "rgba(255,255,255,0.25)", fontSize: 9, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} domain={[50, 100]} tickFormatter={(v) => `${v}%`} />
                        <Tooltip contentStyle={{ background: "#0F172A", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 10, fontSize: 11, color: "white", fontFamily: "JetBrains Mono" }}
                          cursor={{ fill: "rgba(255,255,255,0.02)" }}
                          formatter={(v) => [`${v}%`, "Accuracy"]} />
                        <Bar dataKey="accuracy" radius={[4, 4, 0, 0]}>
                          {barData.map((entry, i) => <Cell key={i} fill={entry.fill} fillOpacity={0.85} />)}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Bottom row */}
                <div className="grid grid-cols-5 gap-3">
                  {/* Activity feed */}
                  <div className="col-span-2 rounded-xl p-4 border border-white/7" style={{ background: "rgba(255,255,255,0.018)" }}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-[12px] font-['Outfit'] font-bold text-white">Activity</div>
                      <button className="text-[10px] text-primary/60 hover:text-primary transition-colors">View all</button>
                    </div>
                    <div className="space-y-3.5">
                      {activityFeed.map((item, i) => {
                        const Icon = Icons[item.iconName as LucideIconName] as React.ElementType;
                        return (
                          <div key={i} className="flex items-start gap-3 relative">
                            {i < activityFeed.length - 1 && (
                              <div className="absolute left-[13px] top-6 bottom-[-8px] w-px" style={{ background: "rgba(255,255,255,0.05)" }} />
                            )}
                            <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 z-10 border border-white/[0.06]"
                              style={{ background: `${item.dot}12` }}>
                              {Icon && <Icon size={10} className={item.color} />}
                            </div>
                            <div className="min-w-0 pt-0.5">
                              <p className="text-[11px] text-white/50 leading-[1.5]">{item.text}</p>
                              <p className="text-[10px] mt-1 font-['JetBrains_Mono']" style={{ color: "rgba(255,255,255,0.2)" }}>{item.time}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* AI Recommendation */}
                  <div className="col-span-3 rounded-xl p-5 border" style={{ background: "rgba(79,126,255,0.04)", borderColor: "rgba(79,126,255,0.15)" }}>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: `${BLUE}20` }}>
                        <Sparkles size={10} style={{ color: BLUE }} />
                      </div>
                      <span className="text-[12px] font-['Outfit'] font-bold" style={{ color: BLUE }}>AI Recommendation</span>
                      <div className="ml-auto flex items-center gap-1.5 px-2 py-0.5 rounded-md border border-white/[0.08] bg-white/[0.03]">
                        <div className="w-1 h-1 rounded-full" style={{ background: EMERALD }} />
                        <span className="text-[10px] text-white/30 font-['JetBrains_Mono']">94% confidence</span>
                      </div>
                    </div>
                    <p className="text-[13px] text-white/60 leading-relaxed mb-4">
                      APAC revenue declined 8.3% WoW. Root-cause analysis identified a campaign attribution mismatch — the{" "}
                      <span className="text-white/80 font-medium">Summer Launch cohort</span> was mis-tagged across 3 data sources since Jun 28. AI recommends re-syncing Salesforce CRM and re-attributing 1,240 affected sessions before EOD.
                    </p>
                    <div className="space-y-1.5 mb-4">
                      {["Re-sync Salesforce CRM connector", "Re-run attribution model on Jun 28–Jul 3", "Notify APAC revenue lead"].map((step, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] text-white/40">
                          <div className="w-4 h-4 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 font-['JetBrains_Mono'] text-[9px] text-white/25">{i + 1}</div>
                          {step}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-3.5 py-1.5 rounded-lg text-[12px] font-semibold transition-colors"
                        style={{ background: `${BLUE}25`, color: BLUE }}
                        onMouseEnter={e => { e.currentTarget.style.background = `${BLUE}35`; }}
                        onMouseLeave={e => { e.currentTarget.style.background = `${BLUE}25`; }}>
                        Apply all fixes
                      </button>
                      <button className="px-3.5 py-1.5 rounded-lg border border-white/[0.08] text-[12px] text-white/30 hover:text-white/55 transition-colors">
                        Dismiss
                      </button>
                      <button className="ml-auto flex items-center gap-1 text-[11px] text-white/22 hover:text-white/45 transition-colors">
                        Full analysis <ExternalLink size={9} />
                      </button>
                    </div>
                  </div>
                </div>

                <InsightsTable />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
