"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Check, BedDouble } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const photoAlt = `Fachada do ${siteConfig.name} em ${siteConfig.address.neighborhood}, ${siteConfig.address.city}/${siteConfig.address.state}`;

  return (
    <section id="top" className="relative overflow-hidden bg-brand-blue-darker">
      {/* Desktop: foto nítida na metade direita, corte diagonal no ângulo da testeira/logo */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] md:block">
        {/* faixa amarela ao longo da diagonal, como a testeira do posto */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 bg-brand-yellow"
          style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 2% 100%)" }}
        />
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="absolute inset-0"
          style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 6% 100%)" }}
        >
          <Image
            src="/posto-fachada.jpg"
            alt={photoAlt}
            fill
            priority
            sizes="(min-width: 768px) 52vw, 100vw"
            className="object-cover object-center"
          />
          {/* leve sombra na borda do corte + topo escurecido onde o menu passa */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-darker/30 via-transparent to-transparent" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-blue-darker/95 via-brand-blue-darker/55 to-transparent" />
        </motion.div>
      </div>

      <div className="relative mx-auto grid min-h-[92svh] w-full max-w-6xl items-center px-4 pb-10 pt-28 sm:px-6 md:pt-32">
        <div className="max-w-xl md:w-[42%] md:max-w-none">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-yellow ring-1 ring-white/20"
          >
            <MapPin size={13} />
            Palestina · Canindé/CE
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl"
          >
            Combustível de verdade,
            <br />
            <span className="text-brand-yellow">Direto na sua estrada.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-md text-lg text-white/85"
          >
            {siteConfig.description}
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 flex flex-wrap gap-x-5 gap-y-2"
          >
            {siteConfig.trustBadges.map((badge) => (
              <li
                key={badge}
                className="flex items-center gap-2 text-sm font-medium text-white/90"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-yellow text-brand-blue-darker">
                  <Check size={12} strokeWidth={3} />
                </span>
                {badge}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <a
              href="#pousada"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-brand-yellow px-7 py-3.5 text-sm font-bold text-brand-blue-darker shadow-lg shadow-black/25 transition hover:scale-105 hover:brightness-105 active:scale-95 sm:w-56"
            >
              <BedDouble size={18} />
              Conheça a pousada
            </a>
            <a
              href="#localizacao"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15 active:scale-95 sm:w-56"
            >
              <MapPin size={18} />
              Como chegar
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex items-center gap-2 text-sm font-medium text-white/80"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-yellow" />
            {siteConfig.hours.label}
          </motion.div>
        </div>

        {/* Mobile: foto num card limpo e arredondado, com moldura amarela e selo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative mt-10 rounded-3xl bg-brand-yellow p-1.5 shadow-2xl shadow-black/40 md:hidden"
        >
          <div className="overflow-hidden rounded-[1.35rem]">
            <Image
              src="/posto-fachada.jpg"
              alt={photoAlt}
              width={1600}
              height={1200}
              priority
              sizes="100vw"
              className="h-64 w-full object-cover"
            />
          </div>
          <div className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-brand-blue-darker/90 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
            <MapPin size={12} className="text-brand-yellow" />
            Nossa unidade no Bairro {siteConfig.address.neighborhood}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
