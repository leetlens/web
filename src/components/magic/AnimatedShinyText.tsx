"use client";

import { cn } from "@/lib/utils";

interface AnimatedShinyTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedShinyText({
  children,
  className,
}: AnimatedShinyTextProps) {
  return (
    <div className={cn("relative inline-block", className)}>
      <div className="pointer-events-none absolute -inset-px animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100" />
      {children}
    </div>
  );
}
