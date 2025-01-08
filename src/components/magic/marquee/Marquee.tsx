"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  reverse?: boolean;
  repeat?: number;
  className?: string;
}

export default function Marquee({
  children,
  reverse,
  repeat = 2,
  className,
}: MarqueeProps) {
  const content = Array(repeat).fill(children);

  return (
    <div
      className={cn(
        "flex w-full gap-4 overflow-hidden [--gap:1rem]",
        className
      )}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 animate-marquee items-center justify-around gap-4",
          reverse && "animate-marquee-reverse"
        )}
      >
        {content}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 animate-marquee items-center justify-around gap-4",
          reverse && "animate-marquee-reverse"
        )}
      >
        {content}
      </div>
    </div>
  );
}
