"use client";

import { useEffect, useMemo, useState } from "react";
import { type Asset, type SceneId, type WardrobeCategory } from "@/data/assets";
import { scenes } from "@/data/scenes";
import { buildRecommendation, calculateScores, type OutfitSelection, type Recommendation } from "@/data/matchRules";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { SceneSelector } from "@/components/SceneSelector";
import { OutfitMatcher } from "@/components/OutfitMatcher";
import { WardrobePanel } from "@/components/WardrobePanel";
import { PosterGenerator } from "@/components/PosterGenerator";
import { AIGenerationModal } from "@/components/AIGenerationModal";
import { TechUpgradeSection } from "@/components/TechUpgradeSection";
import { CampaignProof } from "@/components/CampaignProof";
import { buildSmartRecommendation } from "@/lib/smartRecommend";

const makeReason = (recommendation: Recommendation, outfit: OutfitSelection) => {
  const names = Object.values(outfit)
    .filter(Boolean)
    .slice(0, 4)
    .map((asset) => asset!.name)
    .join("、");

  return `当前场景为${recommendation.scene.name}，系统结合天气、库存与${recommendation.scene.keywords
    .slice(0, 3)
    .join("、")}标签，优先推荐${names}等装备，形成适合「${recommendation.scene.theme}」的生活搭案。`;
};

export default function Home() {
  const [activeSceneId, setActiveSceneId] = useState<SceneId>("school");
  const [activeCategory, setActiveCategory] = useState<WardrobeCategory>("top");
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const recommendation = useMemo(() => buildRecommendation(activeSceneId), [activeSceneId]);
  const smartDecision = useMemo(() => buildSmartRecommendation(activeSceneId), [activeSceneId]);
  const [selectedOutfit, setSelectedOutfit] = useState<OutfitSelection>(recommendation.outfit);

  useEffect(() => {
    setSelectedOutfit(smartDecision.recommendedOutfit);
  }, [smartDecision]);

  const liveRecommendation = useMemo<Recommendation>(() => {
    const scores = calculateScores(recommendation.scene, selectedOutfit);
    return {
      ...recommendation,
      outfit: selectedOutfit,
      scores,
      reason: makeReason(recommendation, selectedOutfit)
    };
  }, [recommendation, selectedOutfit]);

  const handleItemSelect = (category: WardrobeCategory, asset: Asset) => {
    setSelectedOutfit((current) => ({ ...current, [category]: asset }));
  };

  const autoMatch = () => setSelectedOutfit(smartDecision.recommendedOutfit);

  const resetMatch = () => {
    setSelectedOutfit(recommendation.outfit);
    setActiveCategory("top");
  };

  const jumpToPoster = () => {
    document.getElementById("poster")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main>
      <Navigation />
      <HeroSection recommendation={liveRecommendation} />
      <SceneSelector scenes={scenes} activeSceneId={activeSceneId} onSelect={setActiveSceneId} />
      <OutfitMatcher
        recommendation={liveRecommendation}
        smartDecision={smartDecision}
        onGenerateAI={() => setAiModalOpen(true)}
      />
      <WardrobePanel
        scenes={scenes}
        activeSceneId={activeSceneId}
        recommendation={liveRecommendation}
        selectedOutfit={selectedOutfit}
        activeCategory={activeCategory}
        onSceneSelect={setActiveSceneId}
        onCategorySelect={setActiveCategory}
        onItemSelect={handleItemSelect}
        onAutoMatch={autoMatch}
        onReset={resetMatch}
        onGeneratePoster={jumpToPoster}
        onGenerateAI={() => setAiModalOpen(true)}
      />
      <PosterGenerator
        recommendation={liveRecommendation}
        onRematch={autoMatch}
        onGenerateAI={() => setAiModalOpen(true)}
      />
      <TechUpgradeSection onGenerateAI={() => setAiModalOpen(true)} />
      <CampaignProof />
      <AIGenerationModal
        open={aiModalOpen}
        recommendation={liveRecommendation}
        smartDecision={smartDecision}
        onClose={() => setAiModalOpen(false)}
      />
    </main>
  );
}
