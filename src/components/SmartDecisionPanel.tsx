"use client";

import { useState } from "react";
import { CloudSun, PackageOpen, Sparkles, Tag, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { SmartDecision } from "@/lib/smartRecommend";

type SmartDecisionPanelProps = {
  decision: SmartDecision;
};

const signalMeta = [
  { key: "inventory", label: "库存信号", icon: PackageOpen, color: "bg-[#fff0f6] text-candy" },
  { key: "weather", label: "天气信号", icon: CloudSun, color: "bg-[#e4f7ff] text-[#2487b9]" },
  { key: "node", label: "节点信号", icon: Sparkles, color: "bg-[#f1ecff] text-[#7c5bd8]" },
  { key: "conversion", label: "转化信号", icon: Tag, color: "bg-[#fff6d9] text-[#a67500]" }
] as const;

export function SmartDecisionPanel({ decision }: SmartDecisionPanelProps) {
  const [open, setOpen] = useState(false);
  const reasons = [
    decision.decisionFactors.inventoryReason,
    decision.decisionFactors.weatherReason,
    decision.decisionFactors.nodeReason,
    decision.decisionFactors.couponReason
  ];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        data-testid="smart-decision-open"
        className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-xs font-black text-white transition hover:-translate-y-0.5"
      >
        <Sparkles size={15} />
        查看智能推荐逻辑
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[75] grid place-items-center bg-ink/64 p-4 backdrop-blur-md"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: 24, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 18, opacity: 0, scale: 0.98 }}
              className="w-full max-w-3xl rounded-[28px] bg-[#fffafc] p-5 shadow-2xl md:p-7"
              data-testid="smart-decision-modal"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black text-candy">SMART OUTFIT · DEMO</p>
                  <h3 className="mt-1 text-2xl font-black text-ink">AI 搭案决策面板</h3>
                  <p className="mt-2 text-sm font-semibold text-ink/54">用模拟数据展示真实商业落地后的推荐逻辑。</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  data-testid="smart-decision-close"
                  className="grid size-10 place-items-center rounded-full bg-ink/6 text-ink"
                  aria-label="关闭智能推荐逻辑"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {signalMeta.map((signal, index) => {
                  const Icon = signal.icon;
                  const value = decision.signals[signal.key];
                  return (
                    <div key={signal.key} className="border-b border-ink/8 bg-white p-4 sm:rounded-[20px] sm:border">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className={`grid size-10 place-items-center rounded-xl ${signal.color}`}>
                            <Icon size={18} />
                          </span>
                          <p className="text-sm font-black text-ink">{signal.label}</p>
                        </div>
                        <p className="text-2xl font-black text-ink">{value}</p>
                      </div>
                      <p className="mt-3 text-xs font-semibold leading-5 text-ink/56">{reasons[index]}</p>
                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ink/6">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${value}%` }}
                          className="h-full rounded-full bg-candy"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex flex-col gap-4 rounded-[22px] bg-ink p-5 text-white sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-black text-candy">本次推荐结论</p>
                  <p className="mt-2 max-w-xl text-sm font-semibold leading-6 text-white/72">{decision.reason}</p>
                </div>
                <div className="shrink-0">
                  <p className="text-xs font-black text-white/42">智能推荐分</p>
                  <p className="text-5xl font-black">{decision.smartScore}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
