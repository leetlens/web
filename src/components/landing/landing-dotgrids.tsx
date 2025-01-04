"use client";

import { cn } from "@/lib/utils";
import DotPattern from "../ui/dot-pattern";

export function DotPatternBackground() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <DotPattern
          cr={1.5}
          width={20}
          height={20}
          className={cn(
            "absolute inset-0 h-full w-full fill-white/30 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:fill-white/[0.15]",
            "animate-fade-in"
          )}
        />
      </div>
    </div>
  );
}
