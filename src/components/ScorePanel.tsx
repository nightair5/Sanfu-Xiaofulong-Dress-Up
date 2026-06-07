"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { ScoreBreakdown } from "@/data/matchRules";

type ScorePanelProps = {
  scores: ScoreBreakdown;
  smartScore?: number;
};

function AnimatedNumber({ value }: { value: number }) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 24;
    const start = shown;
    const delta = value - start;
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setShown(Math.round(start + delta * eased));
      if (progress >= 1) window.clearInterval(timer);
    }, 18);
    return () => window.clearInterval(timer);
  }, [value]);

  return <span>{shown}</span>;
}

export function ScorePanel({ scores, smartScore }: ScorePanelProps) {
  const rows = [
    ["场景匹配值", scores.sceneMatch],
    ["潮趣值", scores.trend],
    ["实用值", scores.practical],
    ["分享值", scores.share]
  ] as const;

  return (
    <div className="glass rounded-[28px] p-5">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-sm font-black text-candy">Dazi Score</p>
          <h3 className="mt-1 text-xl font-black text-ink">综合搭子分</h3>
        </div>
        <p className="text-6xl font-black leading-none text-ink">
          <AnimatedNumber value={scores.total} />
        </p>
      </div>
      {smartScore ? (
        <div className="mt-4 flex items-center justify-between border-y border-ink/8 py-3 text-xs font-black">
          <span className="text-ink/46">动态智能推荐分</span>
          <span className="rounded-full bg-candy/10 px-3 py-1 text-candy">{smartScore} / 100</span>
        </div>
      ) : null}
      <div className="mt-5 space-y-3">
        {rows.map(([label, value], index) => (
          <div key={label}>
            <div className="mb-1.5 flex items-center justify-between text-xs font-bold text-ink/64">
              <span>{label}</span>
              <span>{value}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/80">
              <motion.div
                key={`${label}-${value}`}
                initial={{ width: 0 }}
                animate={{ width: `${value}%` }}
                transition={{ delay: index * 0.06, duration: 0.6, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-candy via-lilac to-skysoft"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
