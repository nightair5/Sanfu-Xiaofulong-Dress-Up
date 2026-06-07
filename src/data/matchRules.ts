import { assets, wardrobeCategories, type Asset, type SceneId, type WardrobeCategory } from "./assets";
import { getSceneById, type Scene } from "./scenes";

export type OutfitSelection = Partial<Record<WardrobeCategory, Asset>>;

export type ScoreBreakdown = {
  sceneMatch: number;
  trend: number;
  practical: number;
  share: number;
  total: number;
};

export type Recommendation = {
  scene: Scene;
  background: Asset;
  poster: Asset;
  featuredCharacter: Asset;
  outfit: OutfitSelection;
  scores: ScoreBreakdown;
  reason: string;
};

const scoreCap = (value: number) => Math.max(0, Math.min(100, Math.round(value)));

const termsMatch = (left: string, right: string) => {
  const normalizedLeft = left.trim().toLowerCase();
  const normalizedRight = right.trim().toLowerCase();
  return (
    normalizedLeft === normalizedRight ||
    normalizedLeft.includes(normalizedRight) ||
    normalizedRight.includes(normalizedLeft)
  );
};

const intersects = (left: string[], right: string[]) => {
  const matches = left.filter((item) => right.some((term) => termsMatch(item, term)));
  return Array.from(new Set(matches));
};

export const matchAssetToScene = (asset: Asset, scene: Scene) => {
  const directHits = intersects(asset.tags, scene.keywords).length;
  const styleHits = intersects(asset.tags, scene.style).length;
  const sceneBonus = asset.scenes.includes(scene.id) ? 50 : 0;
  const directScore = (directHits / Math.max(scene.keywords.length, 1)) * 40;
  const styleScore = (styleHits / Math.max(scene.style.length, 1)) * 26;
  return scoreCap(directScore + styleScore + sceneBonus);
};

const byScore = (scene: Scene) => (a: Asset, b: Asset) => {
  const aScore = matchAssetToScene(a, scene) * 0.65 + a.trendScore * 0.2 + a.shareScore * 0.15;
  const bScore = matchAssetToScene(b, scene) * 0.65 + b.trendScore * 0.2 + b.shareScore * 0.15;
  return bScore - aScore;
};

export const pickBestAsset = (category: WardrobeCategory, scene: Scene) => {
  const candidates = assets.filter((asset) => asset.category === category);
  const sorted = [...candidates].sort(byScore(scene));
  return sorted[0] ?? assets.filter((asset) => asset.category === category).sort((a, b) => b.trendScore - a.trendScore)[0];
};

export const recommendOutfit = (scene: Scene): OutfitSelection =>
  wardrobeCategories.reduce<OutfitSelection>((selection, category) => {
    const best = pickBestAsset(category, scene);
    if (best) selection[category] = best;
    return selection;
  }, {});

export const calculateScores = (scene: Scene, outfit: OutfitSelection): ScoreBreakdown => {
  const selected = Object.values(outfit).filter(Boolean) as Asset[];
  const sceneMatch = scoreCap(
    selected.reduce((sum, asset) => sum + matchAssetToScene(asset, scene), 0) / Math.max(selected.length, 1)
  );
  const trend = scoreCap(selected.reduce((sum, asset) => sum + asset.trendScore, 0) / Math.max(selected.length, 1));
  const share = scoreCap(selected.reduce((sum, asset) => sum + asset.shareScore, 0) / Math.max(selected.length, 1));
  const practical = scoreCap((selected.length / wardrobeCategories.length) * 70 + sceneMatch * 0.3);
  const total = scoreCap(sceneMatch * 0.4 + trend * 0.25 + practical * 0.2 + share * 0.15);
  return { sceneMatch, trend, practical, share, total };
};

export const buildRecommendation = (sceneId: SceneId): Recommendation => {
  const scene = getSceneById(sceneId);
  const background = assets.find((asset) => asset.id === scene.backgroundId) ?? assets.find((asset) => asset.category === "background")!;
  const poster = assets.find((asset) => asset.id === scene.posterId) ?? assets.find((asset) => asset.category === "poster")!;
  const featuredCharacter =
    assets.find((asset) => asset.id === scene.outfitId) ?? assets.find((asset) => asset.category === "outfit")!;
  const outfit = recommendOutfit(scene);
  const scores = calculateScores(scene, outfit);
  const chosenNames = Object.values(outfit)
    .filter(Boolean)
    .slice(0, 4)
    .map((asset) => asset!.name)
    .join("、");
  const reason = `当前场景为${scene.name}，系统优先选择${scene.keywords.slice(0, 4).join("、")}标签的单品，因此推荐${chosenNames}等装备，形成适合「${scene.theme}」的轻松穿搭。`;

  return {
    scene,
    background,
    poster,
    featuredCharacter,
    outfit,
    scores,
    reason
  };
};

export const getReasonForItem = (asset: Asset, scene: Scene) => {
  const tags = intersects(asset.tags, [...scene.keywords, ...scene.style]).slice(0, 3);
  if (tags.length) {
    return `命中${tags.join("、")}，适合${scene.theme}。`;
  }
  return `该类别素材较少，优先复用潮流分较高的${asset.name}。`;
};
