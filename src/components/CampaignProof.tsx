"use client";

import { ArrowRight, BadgeCheck, Images, Store, TicketCheck } from "lucide-react";
import { motion } from "framer-motion";
import { assets } from "@/data/assets";
import { campaignStages } from "@/data/campaign";
import { scenes } from "@/data/scenes";

const proofItems = [
  { icon: Images, value: `${assets.length}+`, label: "可复用视觉资产" },
  { icon: BadgeCheck, value: `${scenes.length}`, label: "生活场景搭案" },
  { icon: TicketCheck, value: "1键", label: "生成社交大片" },
  { icon: Store, value: "闭环", label: "内容连接到店" }
];

export function CampaignProof() {
  return (
    <section id="campaign-proof" className="section-shell pb-20 pt-8">
      <div className="overflow-hidden rounded-[28px] bg-ink text-white shadow-glow">
        <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
          <div className="relative min-h-[440px] overflow-hidden">
            <img
              src="/assets/campaign/generated/summer-keyvisual.png"
              alt="小福龙夏日默契题活动视觉"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/12 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
              <p className="text-xs font-black text-candy">CAMPAIGN LOOP</p>
              <h2 className="mt-2 max-w-md text-4xl font-black leading-tight md:text-5xl">
                从一次搭配，走到一次到店
              </h2>
              <p className="mt-3 max-w-md text-sm font-semibold leading-7 text-white/72">
                小福龙不是只负责可爱，而是把用户的生活题，翻译成商品组合、分享内容和门店行动。
              </p>
            </div>
          </div>

          <div className="p-6 md:p-9">
            <p className="text-sm font-black text-candy">三阶段，不重复做活动</p>
            <div className="mt-5 space-y-3">
              {campaignStages.map((stage, index) => (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: index * 0.08 }}
                  className="grid grid-cols-[42px_1fr_auto] items-center gap-3 border-b border-white/10 py-4 last:border-b-0"
                >
                  <span className="grid size-10 place-items-center rounded-full bg-white/10 text-sm font-black text-candy">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-black">{stage.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-white/54">{stage.subtitle}</p>
                  </div>
                  <ArrowRight className="text-white/30" size={18} />
                </motion.div>
              ))}
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {proofItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-[18px] bg-white/8 p-4">
                    <Icon className="text-candy" size={18} />
                    <p className="mt-3 text-2xl font-black">{item.value}</p>
                    <p className="mt-1 text-xs font-bold text-white/52">{item.label}</p>
                  </div>
                );
              })}
            </div>

            <a
              href="#scenes"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-ink transition hover:-translate-y-1"
            >
              再答一道生活题
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
