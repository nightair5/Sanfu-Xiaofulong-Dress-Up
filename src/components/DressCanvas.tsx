"use client";

import { motion } from "framer-motion";
import { getAssetById, type Asset, type WardrobeCategory } from "@/data/assets";

type DressCanvasProps = {
  background: Asset;
  featuredCharacter: Asset;
  poster?: Asset;
  selectedOutfit?: Partial<Record<WardrobeCategory, Asset>>;
  title?: string;
};

const layerOrder: WardrobeCategory[] = ["bottom", "shoes", "top", "outerwear", "bag", "hat", "glasses", "prop"];

export function DressCanvas({ background, featuredCharacter, poster, selectedOutfit, title }: DressCanvasProps) {
  const baseCharacter = getAssetById("character_base");
  const selectedLayers = layerOrder.map((category) => selectedOutfit?.[category]).filter(Boolean) as Asset[];

  return (
    <div className="relative overflow-hidden rounded-[34px] bg-white p-3 shadow-glass">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] stage-grid">
        {poster ? (
          <motion.img
            key={poster.path}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55 }}
            src={poster.path}
            alt={poster.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <>
            <motion.img
              key={background.path}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55 }}
              src={background.path}
              alt={background.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/34 via-transparent to-white/12" />
            <motion.img
              key={featuredCharacter.path}
              initial={{ opacity: 0, y: 20, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              src={featuredCharacter.path}
              alt={featuredCharacter.name}
              className="absolute bottom-0 left-1/2 z-20 h-[82%] max-w-none -translate-x-1/2 object-contain drop-shadow-[0_24px_38px_rgba(23,32,51,0.18)]"
            />
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/16 via-transparent to-white/6" />
        {selectedLayers.slice(0, 5).map((asset, index) => (
          <motion.div
            key={`${asset.id}-${index}`}
            initial={{ opacity: 0, y: 18, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: index % 2 ? 4 : -4 }}
            transition={{ delay: index * 0.05 }}
            className="absolute z-30 grid size-16 place-items-center rounded-2xl border border-white/80 bg-white/74 p-1 shadow-glass backdrop-blur"
            style={{
              right: `${14 + (index % 2) * 70}px`,
              bottom: `${18 + index * 42}px`
            }}
          >
            <img src={asset.path} alt={asset.name} className="h-full w-full object-contain" />
          </motion.div>
        ))}
        {baseCharacter ? (
          <span className="sr-only">
            layer source: {baseCharacter.path}; order: background, baseCharacter, bottom, shoes, top, outerwear, bag,
            hat, glasses, prop, sticker
          </span>
        ) : null}
      </div>
      {title ? <p className="px-2 pt-3 text-sm font-black text-ink/72">{title}</p> : null}
    </div>
  );
}
