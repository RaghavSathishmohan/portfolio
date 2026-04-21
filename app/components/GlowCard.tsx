"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glowColor?: string;
}

export function GlowCard({
  children,
  className,
  hover = true,
  glowColor = "rgba(0, 212, 170, 0.3)",
}: GlowCardProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-xl bg-card border border-border overflow-hidden",
        className
      )}
      whileHover={
        hover
          ? {
              boxShadow: `0 0 30px ${glowColor}, 0 0 60px ${glowColor}`,
              borderColor: "rgba(0, 212, 170, 0.3)",
            }
          : undefined
      }
      transition={{ duration: 0.3 }}
    >
      {/* Gradient border effect */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${glowColor} 0%, transparent 50%, transparent 50%, ${glowColor} 100%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />
      {children}
    </motion.div>
  );
}
