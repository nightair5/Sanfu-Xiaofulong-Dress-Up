"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  Download,
  Film,
  ImageIcon,
  Loader2,
  RotateCcw,
  Share2,
  Sparkles,
  X
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { AISample } from "@/data/aiSamples";
import type { Recommendation } from "@/data/matchRules";
import type { SmartDecision } from "@/lib/smartRecommend";
import { mockAIGenerate } from "@/lib/mockAIGenerate";

type AIGenerationModalProps = {
  open: boolean;
  recommendation: Recommendation;
  smartDecision: SmartDecision;
  onClose: () => void;
};

const steps = [
  "读取当前小福龙穿搭",
  "识别生活场景与搭子人格",
  "匹配天气、库存与活动节点",
  "生成潮酷大片与短视频封面",
  "同步搭子清单与专属优惠"
];

export function AIGenerationModal({ open, recommendation, smartDecision, onClose }: AIGenerationModalProps) {
  const [mode, setMode] = useState<AISample["type"]>("poster");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<AISample | null>(null);
  const tags = useMemo(
    () => Object.values(recommendation.outfit).flatMap((asset) => asset?.tags.slice(0, 2) ?? []),
    [recommendation.outfit]
  );

  const generate = async (nextMode = mode) => {
    setMode(nextMode);
    setResult(null);
    setLoading(true);
    setProgress(6);
    const timer = window.setInterval(() => setProgress((value) => Math.min(value + 7, 92)), 150);
    const sample = await mockAIGenerate({
      sceneId: recommendation.scene.id,
      personality: recommendation.scene.theme,
      outfitTags: tags,
      type: nextMode
    });
    window.clearInterval(timer);
    setProgress(100);
    setResult(sample);
    window.setTimeout(() => setLoading(false), 260);
  };

  useEffect(() => {
    if (open) void generate(mode);
    if (!open) {
      setResult(null);
      setProgress(0);
      setLoading(false);
    }
    // Generate only when the modal is opened.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const activeStep = Math.min(steps.length - 1, Math.floor((progress / 100) * steps.length));

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] grid place-items-center bg-ink/68 p-3 backdrop-blur-md md:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ type: "spring", damping: 24, stiffness: 240 }}
            className="max-h-[94svh] w-full max-w-5xl overflow-y-auto rounded-[28px] bg-[#fffafc] shadow-2xl"
            data-testid="ai-generation-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="sticky top-0 z-10 flex items-center justify-between border-b border-ink/8 bg-[#fffafc]/94 px-5 py-4 backdrop-blur-xl md:px-7">
              <div>
                <p className="text-xs font-black text-candy">AI CONTENT STUDIO · DEMO</p>
                <h2 className="mt-1 text-xl font-black text-ink md:text-2xl" data-testid="ai-modal-title">
                  AI 正在生成你的搭子大片
                </h2>
              </div>
              <button
                onClick={onClose}
                data-testid="ai-modal-close"
                className="grid size-10 place-items-center rounded-full bg-ink/6 text-ink transition hover:bg-ink hover:text-white"
                aria-label="关闭 AI 生成弹窗"
              >
                <X size={19} />
              </button>
            </header>

            {loading || !result ? (
              <div className="grid min-h-[620px] gap-8 p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-candy/10 px-3 py-1.5 text-xs font-black text-candy">
                      <Sparkles size={15} />
                      模拟生成流程
                    </span>
                    <h3 className="mt-5 text-3xl font-black leading-tight text-ink">把当前搭案，升级成会传播的内容</h3>
                    <p className="mt-3 text-sm font-semibold leading-7 text-ink/58">
                      Demo 不调用真实 AI API。系统正在用预设样图模拟真实落地时的读取、决策与生成过程。
                    </p>
                  </div>
                  <div className="mt-8 space-y-3">
                    {steps.map((step, index) => (
                      <div
                        key={step}
                        className={`flex items-center gap-3 border-b border-ink/8 py-3 text-sm font-black ${
                          index <= activeStep ? "text-ink" : "text-ink/30"
                        }`}
                      >
                        <span
                          className={`grid size-7 place-items-center rounded-full ${
                            index < activeStep
                              ? "bg-ink text-white"
                              : index === activeStep
                                ? "bg-candy text-white"
                                : "bg-ink/5 text-ink/34"
                          }`}
                        >
                          {index < activeStep ? <Check size={14} /> : index + 1}
                        </span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative min-h-[440px] overflow-hidden rounded-[26px] bg-ink">
                  <img
                    src={recommendation.poster.path}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-36"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/62 to-ink/16" />
                  <div className="relative flex h-full min-h-[440px] flex-col items-center justify-center p-8 text-center text-white">
                    <motion.div
                      animate={{ rotate: 360, scale: [1, 1.08, 1] }}
                      transition={{ rotate: { duration: 3, repeat: Infinity, ease: "linear" }, scale: { duration: 1.4, repeat: Infinity } }}
                      className="grid size-24 place-items-center rounded-full border border-white/18 bg-white/10 backdrop-blur-md"
                    >
                      <Sparkles className="text-candy" size={42} />
                    </motion.div>
                    <p className="mt-7 text-lg font-black">{steps[activeStep]}</p>
                    <p className="mt-2 text-sm font-semibold text-white/60">
                      正在分析「{recommendation.scene.theme}」关键词……
                    </p>
                    <div className="mt-8 h-2 w-full max-w-sm overflow-hidden rounded-full bg-white/14">
                      <motion.div className="h-full rounded-full bg-candy" animate={{ width: `${progress}%` }} />
                    </div>
                    <p className="mt-3 text-xs font-black text-white/48">{progress}%</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid gap-7 p-5 lg:grid-cols-[1.02fr_0.98fr] lg:p-8" data-testid="ai-generation-result">
                <div className="relative mx-auto aspect-[3/4] w-full max-w-[470px] overflow-hidden rounded-[26px] bg-ink shadow-2xl">
                  <img src={result.image} alt={result.title} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/88 via-transparent to-ink/18" />
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/18 px-3 py-1.5 text-xs font-black text-white backdrop-blur-md">
                    {result.type === "poster" ? <ImageIcon size={14} /> : <Film size={14} />}
                    {result.type === "poster" ? "AI 海报样片" : "AI 短视频封面"}
                  </div>
                  <div className="absolute inset-x-5 bottom-5 text-white">
                    <p className="text-xs font-black text-candy">SANFU · 小福龙搭子世界</p>
                    <h3 className="mt-2 text-3xl font-black leading-tight">{result.title}</h3>
                    <p className="mt-2 text-sm font-bold text-white/76">{result.slogan}</p>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-ink px-3 py-1.5 text-xs font-black text-white">生成完成</span>
                      <span className="text-xs font-black text-ink/42">模拟结果 · 非真实 API</span>
                    </div>
                    <h3 className="mt-5 text-3xl font-black text-ink">{result.personality}</h3>
                    <p className="mt-3 text-sm font-semibold leading-7 text-ink/62">{result.recommendation}</p>

                    <div className="mt-6 border-y border-ink/8 py-5">
                      <p className="text-xs font-black text-ink/42">AI 生成关键词</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {result.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-candy/10 px-3 py-1.5 text-xs font-black text-candy">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 rounded-[22px] bg-ink p-5 text-white">
                      <p className="text-xs font-black text-candy">同步生成搭子券</p>
                      <div className="mt-2 flex items-end justify-between gap-4">
                        <div>
                          <p className="text-lg font-black">{smartDecision.couponName}</p>
                          <p className="mt-1 text-xs font-semibold text-white/54">{smartDecision.decisionFactors.couponReason}</p>
                        </div>
                        <p className="text-4xl font-black">-{smartDecision.discount}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-ink px-4 py-3 text-sm font-black text-white">
                      <Download size={17} />
                      保存样片
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-black text-ink shadow-sm">
                      <Share2 size={17} />
                      分享搭案
                    </button>
                    <button
                      onClick={() => void generate(mode === "poster" ? "video-cover" : "poster")}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-candy/10 px-4 py-3 text-sm font-black text-candy"
                    >
                      <RotateCcw size={17} />
                      换一种生成
                    </button>
                    <a
                      href="#lab"
                      onClick={onClose}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#dff6ff] px-4 py-3 text-sm font-black text-ink"
                    >
                      查看搭子清单
                      <ArrowRight size={17} />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
