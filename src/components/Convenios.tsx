"use client";

import { motion } from "framer-motion";
import { CreditCard } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import LogoLoop from "./LogoLoop";

type Card = { name: string; src?: string };

export function Convenios() {
  const { convenios } = siteConfig;

  const logos = convenios.cards.map((card: Card) => ({
    title: card.name,
    node: (
      <span className="flex h-24 w-44 items-center justify-center rounded-2xl bg-white px-6 shadow-sm ring-1 ring-brand-blue/10">
        {card.src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={card.src}
            alt={card.name}
            className="max-h-14 max-w-full object-contain"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        ) : (
          <span className="font-display text-base font-bold text-brand-blue-darker">
            {card.name}
          </span>
        )}
      </span>
    ),
  }));

  return (
    <section id="convenios" className="relative overflow-hidden bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-blue">
            <CreditCard size={14} /> {convenios.label}
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-brand-blue-darker sm:text-4xl">
            {convenios.title}
          </h2>
          <p className="mt-4 text-slate-600">{convenios.subtitle}</p>
        </motion.div>

        <div className="relative mt-12">
          <LogoLoop
            logos={logos}
            speed={60}
            direction="left"
            logoHeight={96}
            gap={20}
            pauseOnHover
            scaleOnHover
            ariaLabel="Cartões de convênio aceitos"
          />
        </div>
      </div>
    </section>
  );
}
