"use client";

import { motion } from "framer-motion";
import { Fuel, ShieldCheck, Clock3, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { AnimatedCounter } from "./AnimatedCounter";

const ICONS = [Clock3, ShieldCheck, Sparkles, Fuel];

export function Diferenciais() {
  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue-dark/60">
            Por que abastecer no VN
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-blue-darker sm:text-4xl">
            Um posto novo, pensado para quem vive na estrada
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {siteConfig.highlights.map((h, i) => (
            <AnimatedCounter key={h.label} value={h.value} label={h.label} delay={i * 0.1} />
          ))}
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Bombas aferidas",
              desc: "Medição precisa em cada abastecimento, sem surpresas.",
            },
            {
              title: "Atendimento rápido",
              desc: "Equipe treinada para te atender sem enrolação.",
            },
            {
              title: "Aberto 24 horas",
              desc: "Combustível disponível a qualquer hora do dia ou da noite.",
            },
            {
              title: "Combustível de procedência",
              desc: "Qualidade certificada em cada litro abastecido.",
            },
          ].map(({ title, desc }, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-brand-blue/10 bg-gradient-to-b from-white to-brand-blue/5 p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-brand-blue/10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow text-brand-blue-darker transition-transform duration-300 group-hover:scale-110">
                  <Icon size={22} strokeWidth={2.4} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-brand-blue-darker">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm text-slate-600">{desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
