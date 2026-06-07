"use client";

import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { getAssetById, type SceneId } from "@/data/assets";
import type { Scene } from "@/data/scenes";

type SceneSelectorProps = {
  scenes: Scene[];
  activeSceneId: SceneId;
  onSelect: (sceneId: SceneId) => void;
};

export function SceneSelector({ scenes, activeSceneId, onSelect }: SceneSelectorProps) {
  return (
    <section id="scenes" className="section-shell py-16">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-black text-candy">01 · 选一道生活题</p>
          <h2 className="mt-2 text-4xl font-black tracking-normal text-ink md:text-5xl">今天，想和谁去哪里？</h2>
        </div>
        <p className="max-w-lg text-base font-medium leading-7 text-ink/64">
          不用先想穿什么。选一个真实场景，小福龙会直接给出一套能出门、能出片的答案。
        </p>
      </div>

      <div className="scrollbar-none -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
        {scenes.map((scene, index) => {
          const background = getAssetById(scene.backgroundId);
          const active = scene.id === activeSceneId;
          return (
            <motion.button
              key={scene.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.035 }}
              whileHover={{ y: -6 }}
              onClick={() => onSelect(scene.id)}
              aria-pressed={active}
              className={`group relative min-w-[248px] snap-start overflow-hidden rounded-[24px] text-left shadow-glass transition lg:min-w-0 ${
                active ? "ring-4 ring-candy/40" : ""
              }`}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={background?.path}
                  alt={scene.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/82 via-ink/5 to-transparent" />
              <div className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-white/88 text-ink shadow-lg backdrop-blur">
                {active ? <Check size={17} strokeWidth={3} /> : <ArrowUpRight size={17} />}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="mb-2 flex items-center gap-1.5 text-xs font-black text-white/76">
                  <MapPin size={13} />
                  {scene.theme}
                </div>
                <h3 className="text-2xl font-black">{scene.name}</h3>
                <p className="mt-2 line-clamp-2 text-sm font-semibold leading-6 text-white/82">{scene.slogan}</p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
