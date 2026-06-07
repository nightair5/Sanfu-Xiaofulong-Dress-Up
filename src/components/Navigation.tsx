"use client";

import { useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: "选生活题", href: "#scenes" },
  { label: "智能搭案", href: "#matcher" },
  { label: "自由换装", href: "#lab" },
  { label: "生成大片", href: "#poster" }
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 py-3"
    >
      <nav className="relative mx-auto flex h-14 w-full max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/78 px-4 shadow-glass backdrop-blur-xl">
        <a href="#hero" className="flex min-w-0 items-center gap-2 font-black text-ink">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-candy to-skysoft text-white shadow-glow">
            <Sparkles size={18} />
          </span>
          <span className="truncate">小福龙搭子世界</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-ink/70 transition hover:bg-white hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#scenes"
          className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-candy/20 transition hover:-translate-y-0.5 md:inline-flex"
        >
          立即搭一套
        </a>
        <button
          onClick={() => setOpen((value) => !value)}
          className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-ink md:hidden"
          aria-label={open ? "关闭导航" : "打开导航"}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
        {open ? (
          <div className="absolute inset-x-0 top-[66px] rounded-[22px] border border-white/70 bg-white/92 p-3 shadow-glass backdrop-blur-xl md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-ink/6 px-3 py-3 text-sm font-black text-ink last:border-b-0"
              >
                {item.label}
              </a>
            ))}
          </div>
        ) : null}
      </nav>
    </motion.header>
  );
}
