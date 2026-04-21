"use client";

import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "muted";
}

export function GradientText({
  children,
  className,
  variant = "primary",
}: GradientTextProps) {
  const gradients = {
    primary: "from-[#00d4aa] to-[#6366f1]",
    secondary: "from-[#fafafa] to-[#a1a1aa]",
    muted: "from-[#a1a1aa] to-[#71717a]",
  };

  return (
    <span
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r",
        gradients[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
