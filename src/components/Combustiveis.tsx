"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { FuelCard } from "./FuelCard";

export function Combustiveis() {
  return (
    <section id="combustiveis" className="relative bg-brand-blue-darker py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow">
            Nossos combustíveis
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">
            Qualidade em cada gota
          </h2>
          <p className="mt-3 text-white/85">
            Combustível de procedência e bombas calibradas em cada abastecimento.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.fuels.map((fuel, i) => (
            <FuelCard key={fuel.name} fuel={fuel} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
