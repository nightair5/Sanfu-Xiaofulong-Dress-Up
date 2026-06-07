import { assets, wardrobeCategories, type Asset, type SceneId, type WardrobeCategory } from "@/data/assets";
import { mockCalendarNodes } from "@/data/mockCalendarNodes";
import { mockDiscountRules } from "@/data/mockDiscountRules";
import { mockInventory } from "@/data/mockInventory";
import { mockWeather } from "@/data/mockWeather";
import { getSceneById } from "@/data/scenes";
import type { OutfitSelection } from "@/data/matchRules";

export type SmartDecision = {
  recommendedOutfit: OutfitSelection;
  smartScore: number;
  discount: number;
  couponName: string;
  decisionFactors: {
    inventoryReason: string;
    weatherReason: string;
    nodeReason: string;
    couponReason: string;
  };
  signals: {
    inventory: number;
    weather: number;
    node: number;
    conversion: number;
  };
  reason: string;
};

const overlapRatio = (left: string[], right: string[]) => {
  const hits = left.filter((tag) => right.some((term) => tag.includes(term) || term.includes(tag))).length;
  return Math.min(100, Math.round((hits / Math.max(Math.min(right.length, 4), 1)) * 100));
};

const inventoryFor = (asset: Asset) => mockInventory.find((item) => item.productId === asset.id);

const scoreAsset = (asset: Asset, sceneId: SceneId) => {
  const scene = getSceneById(sceneId);
  const inventory = inventoryFor(asset);
  const activeNodes = mockCalendarNodes.filter((node) => node.active);
  const tagMatchScore = overlapRatio(asset.tags, [...scene.keywords, ...scene.style]);
  const sceneMatchScore = asset.scenes.includes(sceneId) ? 100 : 48;
  const inventoryWeight = inventory?.stockLevel === "high" ? 100 : inventory?.stockLevel === "low" ? 20 : 62;
  const weatherHits = overlapRatio(asset.tags, mockWeather.recommendationTags);
  const weatherWeight = weatherHits > 0 ? 70 + weatherHits * 0.3 : 52;
  const nodeHit = activeNodes.some(
    (node) => node.priorityScenes.includes(sceneId) || node.boostTags.some((tag) => asset.tags.includes(tag))
  );
  const calendarNodeWeight = nodeHit ? 100 : 46;

  const weighted =
    tagMatchScore * 0.35 +
    sceneMatchScore * 0.2 +
    inventoryWeight * 0.2 +
    weatherWeight * 0.15 +
    calendarNodeWeight * 0.1;
  return Math.min(100, Math.round(34 + weighted * 0.66));
};

const pickForCategory = (category: WardrobeCategory, sceneId: SceneId) =>
  assets
    .filter((asset) => asset.category === category)
    .sort((a, b) => scoreAsset(b, sceneId) - scoreAsset(a, sceneId))[0];

export const buildSmartRecommendation = (sceneId: SceneId): SmartDecision => {
  const scene = getSceneById(sceneId);
  const recommendedOutfit = wardrobeCategories.reduce<OutfitSelection>((outfit, category) => {
    const asset = pickForCategory(category, sceneId);
    if (asset) outfit[category] = asset;
    return outfit;
  }, {});
  const selected = Object.values(recommendedOutfit).filter(Boolean) as Asset[];
  const highInventoryItems = selected.filter((asset) => inventoryFor(asset)?.stockLevel === "high");
  const activeNode =
    mockCalendarNodes.find((node) => node.active && node.priorityScenes.includes(sceneId)) ??
    mockCalendarNodes.find((node) => node.active)!;
  const smartScore = Math.round(selected.reduce((sum, asset) => sum + scoreAsset(asset, sceneId), 0) / selected.length);
  const inventoryPressure =
    selected.reduce((sum, asset) => sum + (inventoryFor(asset)?.pressure ?? 0.35), 0) / selected.length;
  const nodePriority = activeNode.priorityScenes.includes(sceneId) ? 1 : 0.55;
  const conversionPotential = selected.reduce((sum, asset) => sum + asset.shareScore / 100, 0) / selected.length;
  const discountScore = inventoryPressure * 0.45 + nodePriority * 0.35 + conversionPotential * 0.2;
  const discountRule =
    discountScore > 0.72 ? mockDiscountRules[0] : nodePriority > 0.8 ? mockDiscountRules[2] : mockDiscountRules[1];
  const names = selected.slice(0, 4).map((asset) => asset.name).join(" + ");

  return {
    recommendedOutfit,
    smartScore,
    discount: discountRule.discount,
    couponName: discountRule.couponName,
    signals: {
      inventory: Math.round(inventoryPressure * 100),
      weather: 82,
      node: Math.round(nodePriority * 100),
      conversion: Math.round(conversionPotential * 100)
    },
    decisionFactors: {
      inventoryReason: highInventoryItems.length
        ? `${highInventoryItems[0].name}库存较充足，推荐权重自动提升。`
        : "当前搭案库存结构健康，按常规权重推荐。",
      weatherReason: `${mockWeather.city}今日${mockWeather.temperature}℃${mockWeather.condition}，优先推荐清爽、轻便单品。`,
      nodeReason: `当前模拟节点：${activeNode.name}，${scene.name}相关装备权重提升。`,
      couponReason: `系统自动匹配：满${discountRule.threshold}减${discountRule.discount}${discountRule.couponName}。`
    },
    reason: `系统识别到「${scene.theme}」，并结合${mockWeather.city}今日天气、${activeNode.name}与模拟库存，优先推荐${names}。`
  };
};
