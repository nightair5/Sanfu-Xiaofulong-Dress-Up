"use client";

import { Sparkles, WandSparkles } from "lucide-react";
import { motion } from "framer-motion";
import { getReasonForItem, type Recommendation } from "@/data/matchRules";
import { wardrobeCategories, type WardrobeCategory } from "@/data/assets";
import { DressCanvas } from "./DressCanvas";
import { ScorePanel } from "./ScorePanel";
import { SmartDecisionPanel } from "./SmartDecisionPanel";
import type { SmartDecision } from "@/lib/smartRecommend";

type OutfitMatcherProps = {
  recommendation: Recommendation;
  smartDecision: SmartDecision;
  onGenerateAI: () => void;
};

const categoryLabels: Record<WardrobeCategory, string> = {
  top: "上衣",
  outerwear: "外套",
  bottom: "下装",
  shoes: "鞋子",
  bag: "包包",
  hat: "帽子",
  glasses: "眼镜",
  prop: "道具"
};

export function OutfitMatcher({ recommendation, smartDecision, onGenerateAI }: OutfitMatcherProps) {
  return (
    <section id="matcher" className="section-shell py-16">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-black text-candy">SMART OUTFIT</p>
        <h2 className="mt-2 text-4xl font-black tracking-normal text-ink md:text-5xl">这一题，小福龙先替你打个样</h2>
        <p className="mt-4 text-base font-medium leading-7 text-ink/64">{smartDecision.reason}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <SmartDecisionPanel decision={smartDecision} />
          <button
            onClick={onGenerateAI}
            data-testid="matcher-ai-generate"
            className="ai-action inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-black text-white"
          >
            <WandSparkles size={15} />
            AI 生成潮酷大片
          </button>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.96fr_1.04fr]">
        <DressCanvas
          background={recommendation.background}
          featuredCharacter={recommendation.featuredCharacter}
          poster={recommendation.poster}
          selectedOutfit={recommendation.outfit}
          title={`${recommendation.scene.name} · ${recommendation.scene.theme}`}
        />
        <div className="space-y-5">
          <ScorePanel scores={recommendation.scores} smartScore={smartDecision.smartScore} />
          <div className="grid gap-3 sm:grid-cols-2">
            {wardrobeCategories.map((category, index) => {
              const asset = recommendation.outfit[category];
              if (!asset) return null;
              return (
                <motion.div
                  key={`${recommendation.scene.id}-${category}-${asset.id}`}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.04 }}
                  className="glass rounded-[24px] p-3"
                >
                  <div className="flex gap-3">
                    <div className="grid size-20 shrink-0 place-items-center rounded-[18px] bg-white">
                      <img src={asset.path} alt={asset.name} className="h-16 w-16 object-contain" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-black text-candy">{categoryLabels[category]}</p>
                      <h3 className="truncate text-base font-black text-ink">{asset.name}</h3>
                      <p className="mt-1 line-clamp-2 text-xs leading-5 text-ink/60">
                        {getReasonForItem(asset, recommendation.scene)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {asset.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="rounded-full bg-white/76 px-2.5 py-1 text-[11px] font-bold text-ink/64">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="rounded-[28px] border border-dashed border-candy/40 bg-white/54 p-5">
            <div className="flex items-start gap-3">
              <Sparkles className="mt-1 text-candy" size={20} />
              <p className="text-sm font-semibold leading-7 text-ink/68">{recommendation.reason}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
