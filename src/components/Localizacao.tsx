"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Localizacao() {
  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappMessage
  )}`;

  return (
    <section id="localizacao" className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue-dark/60">
            Como chegar
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-blue-darker sm:text-4xl">
            Estamos te esperando em Palestina
          </h2>
        </motion.div>

        <div className="mt-12 grid overflow-hidden rounded-3xl shadow-xl shadow-brand-blue/10 ring-1 ring-black/5 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-6 bg-brand-blue-darker p-8 text-white sm:p-10"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-yellow text-brand-blue-darker">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-semibold">Endereço</p>
                <p className="mt-1 text-sm text-white/85">{siteConfig.address.full}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-yellow text-brand-blue-darker">
                <Clock size={20} />
              </div>
              <div>
                <p className="font-semibold">Horário</p>
                <p className="mt-1 text-sm text-white/85">{siteConfig.hours.label}</p>
                <p className="text-sm text-white/85">{siteConfig.hours.detail}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-yellow text-brand-blue-darker">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-semibold">Contato</p>
                <p className="mt-1 text-sm text-white/85">{siteConfig.contact.whatsappDisplay}</p>
              </div>
            </div>

            <a
              href={whatsappHref}              className="mt-2 w-fit rounded-full bg-brand-yellow px-6 py-3 text-sm font-bold text-brand-blue-darker shadow-lg transition hover:scale-105 active:scale-95"
            >
              Chamar no WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="min-h-[320px]"
          >
            <iframe
              title="Localização do Posto VN"
              src={siteConfig.address.mapsEmbedUrl}
              className="h-full min-h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
