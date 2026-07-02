"use client";

import { motion } from "framer-motion";
import { Coffee, Beer, Sandwich, Tag } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const ICONS = [Beer, Coffee, Sandwich, Tag];

export function Conveniencia() {
  return (
    <section id="conveniencia" className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue-dark/60">
              {siteConfig.store.title}
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-blue-darker sm:text-4xl">
              {siteConfig.store.subtitle}
            </h2>
            <p className="mt-4 text-slate-600">
              Enquanto o carro abastece, aproveite pra tomar um café, pegar uma
              bebida gelada ou conferir as ofertas da semana, tudo dentro do
              posto.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-brand-yellow/15 px-4 py-1.5 text-sm font-semibold text-brand-yellow-dark">
                Ofertas toda semana
              </span>
              <span className="rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-semibold text-brand-blue">
                Sempre gelado
              </span>
            </div>
          </motion.div>

          <div className="grid auto-rows-fr grid-cols-2 gap-5">
            {siteConfig.store.items.map((item, i) => {
              const Icon = ICONS[i];
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className={`group h-full rounded-2xl p-5 shadow-sm ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-xl ${
                    i % 2 === 0
                      ? "bg-brand-blue text-white"
                      : "bg-brand-yellow text-brand-blue-darker"
                  }`}
                >
                  <Icon
                    size={26}
                    strokeWidth={2.2}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3 className="mt-4 font-display text-base font-bold">
                    {item.name}
                  </h3>
                  <p
                    className={`mt-1 text-xs ${
                      i % 2 === 0
                        ? "text-white/85"
                        : "text-brand-blue-darker/75"
                    }`}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
