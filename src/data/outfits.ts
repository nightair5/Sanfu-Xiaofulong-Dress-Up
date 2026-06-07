import { assets, type Asset, type SceneId, type WardrobeCategory } from "./assets";
import { scenes } from "./scenes";

export type OutfitLayerMap = Partial<Record<WardrobeCategory, string>>;

export type SceneOutfitSeed = {
  sceneId: SceneId;
  featuredCharacterId: string;
  layerSeed: OutfitLayerMap;
};

export const sceneOutfitSeeds: SceneOutfitSeed[] = scenes.map((scene) => ({
  sceneId: scene.id,
  featuredCharacterId: scene.outfitId,
  layerSeed: {
    top:
      scene.id === "music"
        ? "top_star_gradient_hoodie"
        : scene.id === "seaside"
          ? "top_mint_basic_tee"
          : "top_rainbow_sweatshirt",
    outerwear:
      scene.id === "commute" || scene.id === "music"
        ? "outerwear_utility_pocket_vest"
        : scene.id === "school" || scene.id === "graduation"
          ? "outerwear_pink_varsity_jacket"
          : scene.id === "cocreation"
            ? "outerwear_pastel_bomber_jacket"
            : "outerwear_beige_light_jacket",
    bottom:
      scene.id === "commute" || scene.id === "music"
        ? "bottom_cream_cargo_pants"
        : scene.id === "gift" || scene.id === "blindbox"
          ? "bottom_lavender_pleated_skirt"
          : scene.id === "seaside"
            ? "bottom_blue_sport_skirt"
            : "bottom_cream_cargo_pants",
    shoes: "shoes_pastel_chunky",
    bag: scene.id === "music" || scene.id === "blindbox" ? "bag_star_lock_satchel" : "bag_candy_crossbody",
    hat:
      scene.id === "cocreation" || scene.id === "gift" || scene.id === "blindbox"
        ? "hat_lavender_star_beanie"
        : "hat_pink_baseball_cap",
    glasses:
      scene.id === "blindbox" || scene.id === "music" || scene.id === "seaside"
        ? "glasses_star_party"
        : undefined,
    prop: scene.id === "music" || scene.id === "commute" ? "prop_pastel_headphones" : undefined
  }
}));

export const characterOutfits = assets.filter(
  (asset): asset is Asset => asset.type === "character" && asset.category === "outfit"
);

export const getSceneOutfitSeed = (sceneId: SceneId) =>
  sceneOutfitSeeds.find((seed) => seed.sceneId === sceneId) ?? sceneOutfitSeeds[0];

