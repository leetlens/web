import { CSSProperties, FC, ReactNode } from "react";

import { cn } from "@/lib/utils";
// import { ArrowRightIcon } from "lucide-react";

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  className,
  shimmerWidth = 150, // Increased default shimmer width
}) => {
  return (
    <div className="z-10 flex my-6 items-center justify-center">
      <div
        className={cn(
          "group rounded-full border-2 border-black/5 bg-neutral-100 text-lg text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        )}
      >
        <p
          style={
            {
              "--shiny-width": `${shimmerWidth}px`,
            } as CSSProperties
          }
          className={cn(
            "mx-auto max-w-lg text-neutral-600/70 dark:text-neutral-400/70",
            "animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_0.5s_cubic-bezier(.6,.6,0,1)_infinite]",
            "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80",
            "inline-flex items-center justify-center px-6 py-2 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400",
            className
          )}
        >
          <span className="text-lg font-medium">✨ Introducing LeetLens!</span>
          {/* <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
        </p>
      </div>
    </div>
  );
};

export default AnimatedShinyText;
