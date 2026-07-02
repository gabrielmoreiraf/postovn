"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Droplet } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

type Fuel = (typeof siteConfig.fuels)[number];

export function FuelCard({ fuel, index }: { fuel: Fuel; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [10, -10]), { stiffness: 250, damping: 20 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-10, 10]), { stiffness: 250, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ scale: 1.03 }}
      className="group relative overflow-hidden rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10 backdrop-blur transition-colors hover:bg-white/[0.1]"
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full ${
          fuel.color === "brand-yellow" ? "bg-brand-yellow" : "bg-brand-yellow/90"
        } text-brand-blue-darker`}
        style={{ transform: "translateZ(30px)" }}
      >
        <Droplet size={22} strokeWidth={2.4} />
      </div>
      <h3 className="mt-5 font-display text-xl font-bold text-white">{fuel.name}</h3>
      <p className="mt-2 text-sm text-white/80">{fuel.note}</p>

      <motion.div
        className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand-yellow transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden
      />
    </motion.div>
  );
}
