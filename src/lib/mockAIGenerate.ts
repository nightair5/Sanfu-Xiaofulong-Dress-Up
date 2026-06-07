import { aiSamples, type AISample } from "@/data/aiSamples";
import type { SceneId } from "@/data/assets";

type GenerateInput = {
  sceneId: SceneId;
  personality?: string;
  outfitTags?: string[];
  type?: AISample["type"];
};

const sleep = (duration: number) => new Promise((resolve) => window.setTimeout(resolve, duration));

export async function mockAIGenerate({ sceneId, type }: GenerateInput) {
  await sleep(1800 + Math.round(Math.random() * 600));
  const exact = aiSamples.filter((item) => item.sceneId === sceneId && (!type || item.type === type));
  const scenePool = aiSamples.filter((item) => item.sceneId === sceneId);
  const pool = exact.length ? exact : scenePool.length ? scenePool : aiSamples;
  return pool[Math.floor(Math.random() * pool.length)];
}
