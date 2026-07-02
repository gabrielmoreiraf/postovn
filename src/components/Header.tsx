"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { InstagramIcon } from "./SocialIcons";
import { siteConfig } from "@/lib/site-config";

const NAV_LINKS = [
  { href: "#combustiveis", id: "combustiveis", label: "Combustíveis" },
  { href: "#conveniencia", id: "conveniencia", label: "Loja" },
  { href: "#painel-led", id: "painel-led", label: "Anuncie" },
  { href: "#localizacao", id: "localizacao", label: "Localização" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Scrollspy: acende o link da seção cujo topo já passou da "linha de leitura".
      // No topo (hero) nenhuma seção passou a linha → nenhum item aceso.
      const line = window.scrollY + window.innerHeight * 0.35;
      let current: string | null = null;
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= line) current = link.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const instagramHref = siteConfig.social.instagram;

  return (
    <motion.div
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4"
    >
      <header
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 py-2 pl-5 pr-2 backdrop-blur-xl transition-[background-color,box-shadow] duration-300 ${
          scrolled
            ? "bg-brand-blue-darker/90 shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
            : "bg-brand-blue-darker/55 shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
        }`}
      >
        <a href="#top" aria-label="Posto VN" className="flex items-center">
          <Logo className="h-9 w-auto sm:h-10" />
        </a>

        <nav className="hidden items-center md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive ? "text-brand-blue-darker" : "text-white/70 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-brand-yellow"
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <motion.a
            href={instagramHref}            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden items-center gap-2 rounded-full bg-brand-yellow px-5 py-2.5 text-sm font-bold text-brand-blue-darker sm:inline-flex"
          >
            <InstagramIcon size={17} />
            Instagram
          </motion.a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:hidden"
          >
            <motion.span
              key={open ? "x" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-brand-blue-darker/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.2 }}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={instagramHref}              onClick={() => setOpen(false)}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * NAV_LINKS.length, duration: 0.2 }}
              className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-brand-yellow px-4 py-3 text-sm font-bold text-brand-blue-darker"
            >
              <InstagramIcon size={17} />
              Seguir no Instagram
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
