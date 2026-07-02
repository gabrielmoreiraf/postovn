"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { BedDouble, Check, Expand, X, ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppIcon } from "./SocialIcons";

// Layout bento só a partir de md; no mobile é um grid 2 colunas uniforme (sem células vazias).
const SPANS = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-2",
  "",
  "",
  "md:col-span-2",
  "md:col-span-2",
];

export function Pousada() {
  const { pousada } = siteConfig;
  const photos = pousada.photos;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const whatsappHref = `https://wa.me/${pousada.whatsapp}?text=${encodeURIComponent(
    pousada.whatsappMessage
  )}`;

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length]
  );
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [photos.length]
  );

  // Teclado + trava de scroll enquanto o modal está aberto.
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, next, prev]);

  return (
    <section
      id="pousada"
      className="relative overflow-hidden bg-gradient-to-b from-brand-blue-darker to-brand-blue-dark py-20"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-brand-yellow/15 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          {/* texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-yellow ring-1 ring-brand-yellow/20">
              <BedDouble size={14} />
              {pousada.badge}
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              {pousada.title}
            </h2>
            <p className="mt-4 max-w-md text-lg text-white/80">{pousada.subtitle}</p>

            <ul className="mt-6 space-y-3">
              {pousada.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm font-medium text-white/90">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-brand-blue-darker">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <motion.a
              href={whatsappHref}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 0px rgba(255,201,0,0.5)",
                  "0 0 26px rgba(255,201,0,0.5)",
                  "0 0 0px rgba(255,201,0,0.5)",
                ],
              }}
              transition={{ boxShadow: { duration: 2.4, repeat: Infinity, ease: "easeInOut" } }}
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-brand-yellow px-7 py-3.5 text-sm font-bold text-brand-blue-darker"
            >
              <WhatsAppIcon size={18} />
              {pousada.cta}
            </motion.a>
          </motion.div>

          {/* grid bento de fotos (clicáveis) */}
          <div className="grid auto-rows-[120px] grid-cols-2 gap-3 sm:auto-rows-[150px] md:auto-rows-[130px] md:grid-cols-4">
            {photos.map((photo, i) => (
              <motion.button
                type="button"
                key={photo.src}
                onClick={() => setOpenIndex(i)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                aria-label={`Ampliar foto: ${photo.alt}`}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl ring-1 ring-white/10 ${SPANS[i] ?? ""}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-brand-blue-darker/0 opacity-0 transition duration-300 group-hover:bg-brand-blue-darker/30 group-hover:opacity-100">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow text-brand-blue-darker shadow-lg">
                    <Expand size={18} strokeWidth={2.5} />
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / modal */}
      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-xl sm:p-8"
            role="dialog"
            aria-modal="true"
          >
            {/* fechar */}
            <button
              type="button"
              onClick={close}
              aria-label="Fechar"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-yellow hover:text-brand-blue-darker"
            >
              <X size={22} />
            </button>

            {/* anterior */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Foto anterior"
              className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-yellow hover:text-brand-blue-darker sm:left-6"
            >
              <ChevronLeft size={24} />
            </button>

            {/* imagem */}
            <motion.div
              key={openIndex}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl ring-1 ring-white/15">
                <Image
                  src={photos[openIndex].src}
                  alt={photos[openIndex].alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="mt-3 flex items-center justify-between gap-4 text-sm text-white/80">
                <span>{photos[openIndex].alt}</span>
                <span className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                  {openIndex + 1} / {photos.length}
                </span>
              </div>
            </motion.div>

            {/* próxima */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Próxima foto"
              className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-yellow hover:text-brand-blue-darker sm:right-6"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
