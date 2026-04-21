"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TerminalTextProps {
  children: string;
  className?: string;
  prefix?: string;
  delay?: number;
  speed?: number;
  cursor?: boolean;
}

export function TerminalText({
  children,
  className,
  prefix = ">",
  delay = 0,
  speed = 30,
  cursor = true,
}: TerminalTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(cursor);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= children.length) {
          setDisplayedText(children.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          if (cursor) {
            setTimeout(() => setShowCursor(false), 1000);
          }
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [children, delay, speed, cursor]);

  return (
    <span className={cn("font-mono", className)}>
      <span className="text-primary">{prefix}</span>{" "}
      {displayedText}
      {showCursor && (
        <span className="animate-pulse text-primary">|</span>
      )}
    </span>
  );
}
