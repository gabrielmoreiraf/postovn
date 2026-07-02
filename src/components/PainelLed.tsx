"use client";

import { motion } from "framer-motion";
import { Megaphone, MapPin, Ruler, Repeat, Wallet, Check } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppIcon } from "./SocialIcons";

const REASON_ICONS = [MapPin, Repeat, Wallet];

export function PainelLed() {
  const { ledPanel } = siteConfig;
  const whatsappHref = `https://wa.me/${ledPanel.whatsapp}?text=${encodeURIComponent(
    ledPanel.whatsappMessage
  )}`;

  return (
    <section id="painel-led" className="relative overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-blue">
            <Megaphone size={14} /> {ledPanel.badge}
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-brand-blue-darker sm:text-4xl">
            {ledPanel.title}
          </h2>
          <p className="mt-4 text-slate-600">{ledPanel.subtitle}</p>
        </motion.div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:items-start">
          {/* painel + números */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <LedBillboard />

            <div className="grid w-full max-w-sm grid-cols-3 gap-3">
              {ledPanel.adFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-brand-blue/10 bg-brand-blue/5 p-3 text-center"
                >
                  <p className="font-display text-xl font-extrabold text-brand-blue">{fact.value}</p>
                  <p className="mt-0.5 text-[11px] font-medium leading-tight text-slate-500">
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* informações */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <InfoCard icon={<MapPin size={20} />} title={ledPanel.location.title}>
              <p className="text-sm leading-relaxed text-slate-600">{ledPanel.location.text}</p>
            </InfoCard>

            <InfoCard icon={<Ruler size={20} />} title={ledPanel.specs.title}>
              <ul className="space-y-2">
                {ledPanel.specs.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <Check size={15} className="shrink-0 text-brand-blue" strokeWidth={2.6} />
                    {item}
                  </li>
                ))}
              </ul>
            </InfoCard>
          </motion.div>
        </div>

        {/* por que anunciar */}
        <div className="mt-14">
          <h3 className="text-center font-display text-2xl font-extrabold text-brand-blue-darker">
            {ledPanel.reasons.title}
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {ledPanel.reasons.items.map((reason, i) => {
              const Icon = REASON_ICONS[i] ?? MapPin;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl border border-brand-blue/10 bg-gradient-to-b from-white to-brand-blue/5 p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-brand-blue/10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow text-brand-blue-darker transition-transform duration-300 group-hover:scale-110">
                    <Icon size={22} strokeWidth={2.4} />
                  </div>
                  <h4 className="mt-4 font-display text-lg font-bold text-brand-blue-darker">
                    {reason.title}
                  </h4>
                  <p className="mt-1.5 text-sm text-slate-600">{reason.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href={whatsappHref}
            className="inline-flex items-center gap-2.5 rounded-full bg-brand-blue px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-blue/20 transition hover:scale-105 hover:bg-brand-blue-dark active:scale-95"
          >
            <WhatsAppIcon size={20} />
            {ledPanel.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-brand-blue/10 bg-white p-6 shadow-sm ring-1 ring-black/5">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue text-white">
          {icon}
        </span>
        <h3 className="font-display text-lg font-bold text-brand-blue-darker">{title}</h3>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function LedBillboard() {
  return (
    <div className="relative rounded-[1.75rem] bg-brand-blue-darker p-5 shadow-2xl shadow-brand-blue/30">
      {/* painel vertical (proporção 1,5 x 3m ≈ 1:2) */}
      <div className="rounded-xl border-4 border-slate-800 bg-black p-2.5">
        <motion.div
          className="relative flex aspect-[1/2] w-40 flex-col items-center justify-center overflow-hidden rounded-md bg-brand-blue p-4"
          animate={{ boxShadow: ["0 0 0px #FFC900", "0 0 34px #FFC900", "0 0 0px #FFC900"] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-center text-[9px] font-bold uppercase tracking-[0.25em] text-white/60">
            Posto VN apresenta
          </p>
          <motion.p
            className="mt-4 text-center font-display text-xl font-extrabold leading-tight text-brand-yellow"
            animate={{ opacity: [1, 0.55, 1] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          >
            SEU
            <br />
            ANÚNCIO
            <br />
            AQUI
          </motion.p>
          <p className="mt-4 text-center text-[10px] font-semibold text-white/70">
            {siteConfig.address.neighborhood}, {siteConfig.address.city}/{siteConfig.address.state}
          </p>
        </motion.div>
      </div>

      {/* poste */}
      <div className="mx-auto mt-3 h-4 w-3 rounded-b bg-slate-700" />
    </div>
  );
}
