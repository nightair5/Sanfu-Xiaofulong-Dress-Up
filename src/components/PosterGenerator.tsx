"use client";

import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { Download, Loader2, Shuffle, WandSparkles } from "lucide-react";
import { motion } from "framer-motion";
import type { Recommendation } from "@/data/matchRules";

type PosterGeneratorProps = {
  recommendation: Recommendation;
  onRematch: () => void;
  onGenerateAI: () => void;
};

export function PosterGenerator({ recommendation, onRematch, onGenerateAI }: PosterGeneratorProps) {
  const posterRef = useRef<HTMLDivElement>(null);
  const [saving, setSaving] = useState(false);

  const savePoster = async () => {
    if (!posterRef.current) return;
    setSaving(true);
    try {
      const canvas = await html2canvas(posterRef.current, {
        backgroundColor: null,
        scale: 2,
        useCORS: true
      });
      const link = document.createElement("a");
      link.download = `${recommendation.scene.id}-xiaofulong-poster.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } finally {
      setSaving(false);
    }
  };

  return (
    <section id="poster" className="section-shell py-16">
      <div className="grid items-center gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <p className="text-sm font-black text-candy">Poster Maker</p>
          <h2 className="mt-2 text-4xl font-black tracking-normal text-ink md:text-5xl">一键生成搭子海报</h2>
          <p className="mt-4 max-w-xl text-base font-medium leading-7 text-ink/64">
            把场景、穿搭、分数和推荐语压成一张竖版传播物料，让互动结果变成可转发内容。
          </p>
          <div className="mt-5 border-l-2 border-candy pl-4 text-sm font-semibold leading-6 text-ink/54">
            基础版保存当前 PNG 搭配；高配版会模拟读取场景、天气、节点与库存，生成一张专属内容样片。
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              onClick={savePoster}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-black text-white shadow-glow transition hover:-translate-y-1"
            >
              {saving ? <Loader2 className="animate-spin" size={18} /> : <Download size={18} />}
              保存海报
            </button>
            <button
              onClick={onRematch}
              className="inline-flex items-center gap-2 rounded-full bg-white/76 px-6 py-3.5 text-sm font-black text-ink shadow-glass transition hover:-translate-y-1"
            >
              <Shuffle size={18} />
              重新搭配
            </button>
            <button
              onClick={onGenerateAI}
              className="ai-action inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-1"
            >
              <WandSparkles size={18} />
              AI 生成潮酷大片
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto w-full max-w-[430px]"
        >
          <div
            ref={posterRef}
            className="relative aspect-[3/4] overflow-hidden rounded-[36px] bg-white p-5 shadow-glow"
          >
            <img
              src={recommendation.poster.path}
              alt={recommendation.poster.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/86 via-ink/18 to-white/0" />
            <div className="absolute inset-x-5 bottom-5 text-white">
              <div className="mb-3 inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-black backdrop-blur">
                {recommendation.scene.theme}
              </div>
              <h3 className="text-3xl font-black leading-tight">{recommendation.scene.name}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {recommendation.scene.keywords.slice(0, 5).map((keyword) => (
                  <span key={keyword} className="rounded-full bg-white/18 px-2.5 py-1 text-xs font-bold backdrop-blur">
                    {keyword}
                  </span>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-[1fr_82px] gap-3">
                <div className="rounded-[22px] bg-white/16 p-3 backdrop-blur">
                  <p className="text-xs font-bold text-white/72">综合搭子分</p>
                  <p className="text-5xl font-black leading-none">{recommendation.scores.total}</p>
                  <p className="mt-2 text-xs font-semibold leading-5 text-white/78">{recommendation.reason}</p>
                </div>
                <div className="grid aspect-square place-items-center rounded-[22px] bg-white p-2">
                  <div className="grid size-full grid-cols-4 gap-1">
                    {Array.from({ length: 16 }).map((_, index) => (
                      <span
                        key={index}
                        className={`rounded-sm ${index % 3 === 0 || index % 5 === 0 ? "bg-ink" : "bg-candy/24"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-center text-sm font-black tracking-normal">发现生活新可能</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
