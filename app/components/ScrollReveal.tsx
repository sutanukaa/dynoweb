"use client";
import { ReactNode, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  /** Extra class names forwarded to the wrapper */
  className?: string;
  /** How far below the element starts before floating up (px) */
  offset?: number;
  /** Total animation duration in seconds */
  duration?: number;
  /** Delay before this element starts animating (seconds) */
  delay?: number;
  /** Viewport margin – triggers earlier/later. e.g. "-100px" triggers 100px before element enters viewport */
  margin?: string;
  /** If true, animation replays every time the element enters viewport */
  once?: boolean;
  /** Direction the element floats in from */
  direction?: "up" | "down" | "left" | "right";
  /** Blur amount while hidden (px). 0 = no blur */
  blur?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  offset = 60,
  duration = 0.7,
  delay = 0,
  margin = "-80px",
  once = true,
  direction = "up",
  blur = 6,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: margin as any });

  const axis = direction === "up" || direction === "down" ? "y" : "x";
  const sign =
    direction === "up" || direction === "left" ? 1 : -1;

  const hidden: Record<string, number | string> = {
    opacity: 0,
    [axis]: offset * sign,
  };

  const visible: Record<string, number | string> = {
    opacity: 1,
    [axis]: 0,
  };

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={isInView ? visible : hidden}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // smooth ease-out
      }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

/* ── Staggered children wrapper ──────────────────────────── */

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  /** Seconds between each child's animation start */
  stagger?: number;
  /** Viewport margin to trigger earlier */
  margin?: string;
  once?: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.1 },
  }),
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function StaggerReveal({
  children,
  className = "",
  stagger = 0.12,
  margin = "-60px",
  once = true,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: margin as any });

  return (
    <motion.div
      ref={ref}
      className={className}
      custom={stagger}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

/** Wrap individual items inside a StaggerReveal */
export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
