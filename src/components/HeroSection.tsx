"use client";

import { ArrowDown, ArrowRight, Sparkles, Wand2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Recommendation } from "@/data/matchRules";

type HeroSectionProps = {
  recommendation: Recommendation;
};

export function HeroSection({ recommendation }: HeroSectionProps) {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 0.42], [0, 54]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -28]);

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-[#f7eaf0]">
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0"
      >
        <img
          src={recommendation.poster.path}
          alt={recommendation.poster.name}
          className="h-full w-full object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,250,252,0.98)_0%,rgba(255,250,252,0.9)_35%,rgba(255,250,252,0.12)_72%),linear-gradient(0deg,rgba(23,32,51,0.7)_0%,transparent_32%)]" />
      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-between px-5 pb-6 pt-28 md:px-8 md:pb-8 lg:px-12">
        <motion.div style={{ y: textY }} className="max-w-2xl pt-[8svh] md:pt-[12svh]">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-5 flex items-center gap-2 text-sm font-black text-candy"
          >
            <Sparkles size={16} />
            SANFU × 小福龙 · 潮趣好搭子互动 Demo
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.62 }}
            className="text-balance text-[clamp(3.6rem,9vw,7.8rem)] font-black leading-[0.9] tracking-normal text-ink"
          >
            小福龙搭子世界
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-xl text-2xl font-black leading-9 text-ink md:text-3xl"
          >
            生活不设限，潮趣自由搭！
          </motion.p>
          <p className="mt-3 max-w-md text-sm font-semibold leading-7 text-ink/60">
            从一道生活题，搭出一套会替你说话的答案。小福龙会根据场景、天气与活动节点，为你打个样。
          </p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#scenes"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-1"
            >
              <Wand2 size={18} />
              领取今日搭案
              <ArrowRight size={17} />
            </a>
            <a
              href="#upgrade"
              className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/82 px-6 py-3.5 text-sm font-black text-ink backdrop-blur transition hover:-translate-y-1"
            >
              <ArrowDown size={18} />
              查看高配玩法
            </a>
          </motion.div>
          <p className="mt-5 text-xs font-black text-ink/50 sm:hidden">选生活题 → 自动成搭案 → 生成潮酷大片</p>
        </motion.div>

        <div className="hidden border-t border-white/26 pt-5 text-white sm:grid sm:grid-cols-3">
          {[
            ["01", "选一道生活题", "毕业、夏日、开学或当下任意场景"],
            ["02", "自动生成搭案", "风格、天气、库存与节点一起判断"],
            ["03", "晒出潮酷大片", "把搭配变成可分享、可到店的内容"]
          ].map(([number, title, copy], index) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62 + index * 0.08 }}
              className="border-white/22 py-3 sm:border-r sm:px-5 first:pl-0 last:border-r-0"
            >
              <p className="text-xs font-black text-candy">{number}</p>
              <p className="mt-1 text-base font-black">{title}</p>
              <p className="mt-1 text-xs font-semibold text-white/58">{copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
