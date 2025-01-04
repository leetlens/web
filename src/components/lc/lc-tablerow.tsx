import { CheckIcon, InfoIcon } from "lucide-react";

interface Problem {
  id: number;
  title: string;
  acceptance: string;
  difficulty: "Easy" | "Medium" | "Hard";
  hasSolution: boolean;
  isComplete?: boolean;
  companiesAsked?: number;
  hasAISolution?: boolean;
}

interface TableRowProps {
  problem: Problem;
}

interface DifficultyBadgeProps {
  difficulty: "Easy" | "Medium" | "Hard";
}

function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
  const colorClasses = {
    Easy: "text-olive-s dark:text-dark-olive-s",
    Medium: "text-yellow-s dark:text-dark-yellow-s", 
    Hard: "text-red-s dark:text-dark-red-s"
  };

  return (
    <span className={colorClasses[difficulty]}>
      {difficulty}
    </span>
  );
}

export function TableRow({ problem }: TableRowProps) {
  return (
    <div
      role="row"
      className="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4 flex w-full"
    >
      <div role="cell" className="mx-2 py-[11px] w-[52px]">
        {problem.isComplete && <CheckIcon />}
      </div>
      <div role="cell" className="mx-2 py-[11px] w-[600px]">
        <a
          href={`/problems/${problem.title.toLowerCase().replace(/\s+/g, "-")}`}
          className="hover:text-blue-s dark:hover:text-dark-blue-s"
        >
          {problem.id}. {problem.title}
        </a>
      </div>
      <div role="cell" className="mx-2 py-[11px] w-[200px]">
        {problem.companiesAsked || "0"} companies
      </div>
      <div role="cell" className="mx-2 py-[11px] w-[84px]">
        <DifficultyBadge difficulty={problem.difficulty} />
      </div>
      <div role="cell" className="mx-2 py-[11px] w-[84px]">
        {problem.hasAISolution && <InfoIcon />}
      </div>
    </div>
  );
}