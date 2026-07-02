"use client";

import { motion } from "framer-motion";
import { Megaphone, Check } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function PainelLed() {
  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.ledPanel.whatsappMessage
  )}`;

  return (
    <section id="painel-led" className="relative overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-blue">
              <Megaphone size={14} /> Espaço publicitário
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-brand-blue-darker sm:text-4xl">
              {siteConfig.ledPanel.title}
            </h2>
            <p className="mt-4 text-slate-600">{siteConfig.ledPanel.subtitle}</p>

            <ul className="mt-7 space-y-4">
              {siteConfig.ledPanel.bullets.map((b, i) => (
                <motion.li
                  key={b.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-brand-blue-darker">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <div>
                    <p className="font-semibold text-brand-blue-darker">{b.title}</p>
                    <p className="text-sm text-slate-500">{b.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <a
              href={whatsappHref}              className="mt-8 inline-block rounded-full bg-brand-blue px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-blue/20 transition hover:scale-105 hover:bg-brand-blue-dark active:scale-95"
            >
              {siteConfig.ledPanel.cta}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto w-full max-w-sm"
          >
            <LedBillboard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LedBillboard() {
  return (
    <div className="relative rounded-[1.75rem] bg-brand-blue-darker p-6 shadow-2xl shadow-brand-blue/30">
      <div className="rounded-xl border-4 border-slate-800 bg-black p-3">
        <motion.div
          className="relative overflow-hidden rounded-md bg-brand-blue p-6"
          animate={{ boxShadow: ["0 0 0px #FFC900", "0 0 34px #FFC900", "0 0 0px #FFC900"] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
            Posto VN apresenta
          </p>
          <motion.p
            className="mt-3 text-center font-display text-2xl font-extrabold leading-tight text-brand-yellow"
            animate={{ opacity: [1, 0.55, 1] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          >
            SEU ANÚNCIO
            <br />
            AQUI
          </motion.p>
          <p className="mt-3 text-center text-[11px] font-semibold text-white/70">
            {siteConfig.address.neighborhood}, {siteConfig.address.city}/{siteConfig.address.state}
          </p>
        </motion.div>
      </div>

      <div className="mx-auto mt-3 h-3 w-10 rounded-b-md bg-slate-700" />
    </div>
  );
}
