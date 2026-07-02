"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

type Props = {
  value: string;
  label: string;
  delay?: number;
};

export function AnimatedCounter({ value, label, delay = 0 }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(value.replace(/[0-9]/g, "0"));

  useEffect(() => {
    if (!inView) return;

    const numericMatch = value.match(/\d+/);
    // Sem dígitos, o estado inicial (value sem substituições) já está correto.
    if (!numericMatch) return;

    const target = parseInt(numericMatch[0], 10);
    const prefix = value.slice(0, numericMatch.index);
    const suffix = value.slice((numericMatch.index ?? 0) + numericMatch[0].length);

    const controls = animate(0, target, {
      duration: 1.4,
      delay,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(`${prefix}${Math.round(v)}${suffix}`),
    });

    return () => controls.stop();
    // value/delay são fixos por instância — incluí-los recriaria a animação a cada onUpdate.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div className="text-center">
      <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay }}
        className="font-display text-4xl font-extrabold text-brand-blue sm:text-5xl"
      >
        {display}
      </motion.p>
      <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand-blue-dark/70">
        {label}
      </p>
    </div>
  );
}
