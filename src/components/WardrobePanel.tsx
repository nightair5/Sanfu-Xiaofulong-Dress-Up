"use client";

import { RefreshCcw, Wand2, ImageDown, WandSparkles } from "lucide-react";
import { motion } from "framer-motion";
import { assets, wardrobeCategories, type Asset, type SceneId, type WardrobeCategory } from "@/data/assets";
import type { Scene } from "@/data/scenes";
import type { OutfitSelection, Recommendation } from "@/data/matchRules";
import { DressCanvas } from "./DressCanvas";

type WardrobePanelProps = {
  scenes: Scene[];
  activeSceneId: SceneId;
  recommendation: Recommendation;
  selectedOutfit: OutfitSelection;
  activeCategory: WardrobeCategory;
  onSceneSelect: (sceneId: SceneId) => void;
  onCategorySelect: (category: WardrobeCategory) => void;
  onItemSelect: (category: WardrobeCategory, asset: Asset) => void;
  onAutoMatch: () => void;
  onReset: () => void;
  onGeneratePoster: () => void;
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

export function WardrobePanel({
  scenes,
  activeSceneId,
  recommendation,
  selectedOutfit,
  activeCategory,
  onSceneSelect,
  onCategorySelect,
  onItemSelect,
  onAutoMatch,
  onReset,
  onGeneratePoster,
  onGenerateAI
}: WardrobePanelProps) {
  const categoryAssets = assets.filter((asset) => asset.category === activeCategory);

  return (
    <section id="lab" className="section-shell py-16">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-black text-candy">Wardrobe Lab</p>
        <h2 className="mt-2 text-4xl font-black tracking-normal text-ink md:text-5xl">换装实验室</h2>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-[190px_minmax(0,1fr)_260px]">
        <div className="glass order-2 min-w-0 rounded-[28px] p-3 lg:order-1">
          <div className="scrollbar-none flex gap-2 overflow-x-auto lg:block lg:space-y-2">
            {scenes.map((scene) => (
              <button
                key={scene.id}
                onClick={() => onSceneSelect(scene.id)}
                className={`min-w-28 rounded-2xl px-4 py-3 text-left text-sm font-black transition lg:w-full ${
                  scene.id === activeSceneId
                    ? "bg-ink text-white shadow-lg shadow-candy/20"
                    : "bg-white/70 text-ink/68 hover:bg-white"
                }`}
              >
                {scene.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={recommendation.scene.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="order-1 min-w-0 lg:order-2"
        >
          <DressCanvas
            background={recommendation.background}
            featuredCharacter={recommendation.featuredCharacter}
            poster={recommendation.poster}
            selectedOutfit={selectedOutfit}
            title={`${recommendation.scene.theme} · ${recommendation.scores.total} 分`}
          />
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <button
              onClick={onAutoMatch}
              className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-2xl bg-ink px-2 py-3 text-xs font-black text-white shadow-glow transition hover:-translate-y-0.5 sm:gap-2 sm:px-4 sm:text-sm"
            >
              <Wand2 size={16} />
              自动搭配
            </button>
            <button
              onClick={onReset}
              className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-2xl bg-white/80 px-2 py-3 text-xs font-black text-ink shadow-glass transition hover:-translate-y-0.5 sm:gap-2 sm:px-4 sm:text-sm"
            >
              <RefreshCcw size={16} />
              重置搭配
            </button>
            <button
              onClick={onGeneratePoster}
              className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-2xl bg-white/80 px-2 py-3 text-xs font-black text-ink shadow-glass transition hover:-translate-y-0.5 sm:gap-2 sm:px-4 sm:text-sm"
            >
              <ImageDown size={16} />
              基础海报
            </button>
            <button
              onClick={onGenerateAI}
              className="ai-action inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-2xl px-2 py-3 text-xs font-black text-white transition hover:-translate-y-0.5 sm:gap-2 sm:px-4 sm:text-sm"
            >
              <WandSparkles size={16} />
              AI 潮酷大片
            </button>
          </div>
        </motion.div>

        <div className="glass order-3 min-w-0 rounded-[28px] p-3">
          <div className="grid grid-cols-4 gap-2 lg:grid-cols-2">
            {wardrobeCategories.map((category) => (
              <button
                key={category}
                onClick={() => onCategorySelect(category)}
                className={`rounded-2xl px-3 py-3 text-sm font-black transition ${
                  category === activeCategory
                    ? "bg-candy text-white shadow-lg shadow-candy/25"
                    : "bg-white/72 text-ink/64 hover:bg-white"
                }`}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>
          <div className="mt-4 grid max-h-[420px] grid-cols-2 gap-3 overflow-y-auto pr-1">
            {categoryAssets.map((asset) => {
              const selected = selectedOutfit[activeCategory]?.id === asset.id;
              return (
                <button
                  key={asset.id}
                  onClick={() => onItemSelect(activeCategory, asset)}
                  className={`rounded-[22px] bg-white/76 p-2 text-left transition hover:-translate-y-0.5 ${
                    selected ? "ring-[3px] ring-candy/45" : ""
                  }`}
                >
                  <div className="grid aspect-square place-items-center rounded-2xl bg-white">
                    <img src={asset.path} alt={asset.name} className="h-[78%] w-[78%] object-contain" />
                  </div>
                  <p className="mt-2 line-clamp-2 text-xs font-black leading-4 text-ink">{asset.name}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
