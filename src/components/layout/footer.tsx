import { Server, Globe2, Link2, ExternalLink as LinkedinIcon } from "lucide-react";
import { BLUE, VIOLET, EMERALD } from "@/lib/constants";
import { apiEndpoints, footerLinks } from "@/lib/data";
import StatusPill from "@/components/ui/status-pill";

export default function Footer() {
  return (
    <footer className="border-t border-white/6 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-6 gap-8 mb-14">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${BLUE}, ${VIOLET})` }}
              >
                <span className="text-white text-xs font-bold">X</span>
              </div>
              <span className="font-['Outfit'] font-bold text-white text-[1.05rem]">Xai</span>
              <span className="text-[10px] text-white/20 border border-white/8 px-1.5 py-0.5 rounded-md font-['JetBrains_Mono'] ml-1">v2.1.4</span>
            </div>

            <p className="text-[13px] text-white/28 leading-relaxed max-w-[210px] mb-5">
              Intelligence infrastructure for modern data teams. Raw data in — clear decisions out.
            </p>

            <div className="flex items-center gap-2 mb-6">
              {[Globe2, Link2, LinkedinIcon].map((Icon, i) => (
                <button key={i} className="w-8 h-8 rounded-lg border border-white/8 bg-white/[0.025] flex items-center justify-center text-white/28 hover:text-white hover:border-white/18 transition-all duration-150">
                  <Icon size={13} />
                </button>
              ))}
            </div>

            {/* API Status panel */}
            <div className="p-3.5 rounded-xl border border-white/7 bg-white/[0.018]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-white/50">API Status</span>
                <StatusPill status="operational" />
              </div>
              <div className="space-y-2">
                {apiEndpoints.map(({ name, status }) => (
                  <div key={name} className="flex items-center justify-between">
                    <span className="text-[11px] text-white/25 font-['JetBrains_Mono']">{name}</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-emerald-400" />
                      <span className="text-[10px] text-white/20 font-['JetBrains_Mono']">online</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map(({ label, items }) => (
            <div key={label}>
              <div className="text-[10px] font-bold text-white/35 uppercase tracking-[0.14em] mb-4">{label}</div>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[13px] text-white/25 hover:text-white/60 transition-colors duration-150 leading-none">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <p className="text-[11px] text-white/18 font-['JetBrains_Mono']">© 2024 Xai Technologies, Inc. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3 text-[11px] text-white/18 font-['JetBrains_Mono']">
              <span>Uptime</span>
              <div className="flex items-end gap-0.5 h-3">
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i} className="w-1 rounded-sm"
                    style={{ height: `${60 + (i % 3) * 20}%`, background: i === 9 ? "#F59E0B" : EMERALD, opacity: 0.7 }} />
                ))}
              </div>
              <span className="text-emerald-400 font-semibold">99.9%</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-1.5 text-[11px] text-white/18 font-['JetBrains_Mono']">
              <Server size={10} className="text-white/20" />
              <span>us-east-1 · eu-west-1 · ap-southeast-1</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
