import { cn } from "@/lib/utils";

interface LCBannerProps {
  className?: string;
}

export function LCBanner({ className }: LCBannerProps) {
  const stats = {
    totalQuestions: 2834,
    easy: 742,
    medium: 1473,
    hard: 619,
    companies: 75,
  };

  return (
    <div className="w-full">
      <div
        className={cn(
          "max-w-[95%] mx-auto flex items-center justify-between p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg",
          className
        )}
      >
        <div className="flex items-center gap-6">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 bg-blue-500 rounded-full animate-pulse opacity-50"></div>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full text-blue-500 relative z-10"
            >
              <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.901-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.981 2.337 1.494 3.834 1.494 1.498 0 2.853-.513 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 text-sm">
              Ace Your Coding Interview
            </span>
            <h1 className="text-2xl font-bold text-white">LeetCode</h1>
            <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors w-fit">
              Start
            </button>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-8 pr-8">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">
              {stats.totalQuestions}
            </span>
            <span className="text-sm text-gray-400">Total</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-green-500">
              {stats.easy}
            </span>
            <span className="text-sm text-gray-400">Easy</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-yellow-500">
              {stats.medium}
            </span>
            <span className="text-sm text-gray-400">Medium</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-red-500">
              {stats.hard}
            </span>
            <span className="text-sm text-gray-400">Hard</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-blue-500">
              {stats.companies}
            </span>
            <span className="text-sm text-gray-400">Companies</span>
          </div>
        </div>
      </div>
    </div>
  );
}
