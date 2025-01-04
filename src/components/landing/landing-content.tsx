import Balancer from "react-wrap-balancer";
import { ArrowRight, Code2 } from "lucide-react";

export default function LandingContent() {
  return (
    <div className="relative flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center px-4">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center space-x-2 rounded-full bg-background/20 px-5 py-2.5 text-sm backdrop-blur-xl border border-primary/10 mb-6 hover:border-primary/20 transition-colors dark:border-zinc-700/50 dark:hover:border-zinc-700">
          <Code2 className="h-4 w-4 text-cyan-500" />
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent font-medium">
            Welcome to LeetLens Beta!
          </span>
        </div>

        {/* <h1 className="text-center md:max-w-6xl animate-fade-up bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-3xl md:text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:min-h-[160px]"> */}
        <h1 className="text-center md:max-w-6xl animate-fade-up text-3xl md:text-6xl font-bold tracking-tighter bg-gradient-to-br from-gray-900 to-cyan-500 dark:from-cyan-500 dark:to-gray-400 text-transparent bg-clip-text sm:text-6xl md:min-h-[130px]">
          <Balancer>
            Master Company-Specific Questions Across All Coding Platforms
          </Balancer>
        </h1>
        <p className="mt-4 text-muted-foreground sm:text-lg text-center mx-auto max-w-5xl dark:text-zinc-400">
          <Balancer>
            Access curated collections of interview questions from top
            companies. Practice, learn, and prepare with our comprehensive
            question bank from LeetCode, GeeksForGeeks, and more.
          </Balancer>
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="group relative flex items-center space-x-2 rounded-full border border-primary/20 bg-background/40 px-6 py-3 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:bg-background/60 hover:shadow-[0_0_2rem_-0.5rem_rgba(0,0,0,0.2)] dark:border-zinc-700/50 dark:hover:border-zinc-700 dark:hover:shadow-[0_0_2rem_-0.5rem_#666] cursor-pointer">
          <span className="text-base font-medium text-muted-foreground transition-colors group-hover:text-foreground dark:text-zinc-400 dark:group-hover:text-zinc-200">
            Explore LeetLens
          </span>
          <ArrowRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground dark:group-hover:text-zinc-200" />
        </div>
      </div>
    </div>
  );
}
