"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue-dark/60">
            Dúvidas
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-blue-darker sm:text-4xl">
            {siteConfig.faq.title}
          </h2>
          <p className="mt-3 text-slate-600">{siteConfig.faq.subtitle}</p>
        </motion.div>

        <div className="mt-12 space-y-3">
          {siteConfig.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl border border-brand-blue/10 bg-gradient-to-b from-white to-brand-blue/[0.03]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-base font-bold text-brand-blue-darker sm:text-lg">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-brand-blue-darker transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <Plus size={18} strokeWidth={2.6} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
