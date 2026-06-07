"use client";

import { ArrowRight, BrainCircuit, CloudSun, ImageIcon, PackageOpen, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const signals = [
  { icon: CloudSun, title: "看天气", copy: "温度和降雨改变实用权重" },
  { icon: PackageOpen, title: "看库存", copy: "优先推荐当下可买单品" },
  { icon: BrainCircuit, title: "懂场景", copy: "生活任务决定风格组合" },
  { icon: ImageIcon, title: "会生成", copy: "一键输出大片与到店清单" }
];

export function TechUpgradeSection({ onGenerateAI }: { onGenerateAI: () => void }) {
  return (
    <section id="upgrade" className="section-shell py-16">
      <div className="grid overflow-hidden rounded-[28px] bg-ink text-white shadow-glow lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[340px] overflow-hidden p-7 md:p-10">
          <img
            src="/assets/posters/cocreation-poster.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/24" />
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <p className="flex items-center gap-2 text-xs font-black text-candy">
                <Sparkles size={16} />
                BEHIND THE MAGIC
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">不是随机换装，是动态生活搭案</h2>
              <p className="mt-4 max-w-md text-sm font-semibold leading-7 text-white/64">
                同一个场景，也会因为天气、库存和活动节点得到不同答案。
              </p>
            </div>
            <button
              onClick={onGenerateAI}
              className="ai-action mt-7 inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 text-sm font-black text-white transition hover:-translate-y-1"
            >
              <span>生成 AI 潮趣大片</span>
              <ArrowRight size={17} />
            </button>
          </div>
        </div>

        <div className="grid gap-px bg-white/10 sm:grid-cols-2">
          {signals.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <motion.div
                key={signal.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.06 }}
                className="bg-[#fffafc] p-7 text-ink md:p-9"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-candy/12 text-candy">
                  <Icon size={20} />
                </span>
                <h3 className="mt-5 text-2xl font-black">{signal.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-ink/56">{signal.copy}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
