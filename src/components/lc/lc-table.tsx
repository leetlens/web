import { Button } from "@/components/ui/button";
import { Lightbulb, Bot, ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Problem {
  id: string;
  isCompleted: boolean;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  statistics: {
    totalAccepted: number;
    totalSubmitted: number;
  };
  companies: {
    name: string;
    logo: string;
  }[];
}

type SortConfig = {
  key:
    | keyof Problem
    | "acceptance"
    | "totalAccepted"
    | "totalSubmitted"
    | "companiesCount"
    | null;
  direction: "asc" | "desc" | null;
};

export default function ProblemTable() {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: null,
  });

  const problems: Problem[] = [
    {
      id: "1",
      isCompleted: true,
      title: "Two Sum",
      difficulty: "Easy",
      category: "Array",
      statistics: {
        totalAccepted: 4859632,
        totalSubmitted: 9876543,
      },
      companies: [
        { name: "Amazon", logo: "/assets/company-logos/amazon.png" },
        { name: "Google", logo: "/assets/company-logos/google.png" },
        { name: "Microsoft", logo: "/assets/company-logos/microsoft.png" },
        { name: "Facebook", logo: "/assets/company-logos/facebook.png" },
        { name: "Apple", logo: "/assets/company-logos/apple.png" },
      ],
    },
    {
      id: "2",
      isCompleted: false,
      title: "Add Two Numbers",
      difficulty: "Medium",
      category: "Linked List",
      statistics: {
        totalAccepted: 2859632,
        totalSubmitted: 5876543,
      },
      companies: [
        { name: "Microsoft", logo: "/assets/company-logos/microsoft.png" },
        { name: "Apple", logo: "/assets/company-logos/apple.png" },
      ],
    },
    {
      id: "3",
      isCompleted: false,
      title: "Median of Two Sorted Arrays",
      difficulty: "Hard",
      category: "Binary Search",
      statistics: {
        totalAccepted: 859632,
        totalSubmitted: 2876543,
      },
      companies: [
        { name: "Google", logo: "/assets/company-logos/google.png" },
        { name: "Amazon", logo: "/assets/company-logos/amazon.png" },
        { name: "Facebook", logo: "/assets/company-logos/facebook.png" },
      ],
    },
  ];

  const getDifficultyColor = (difficulty: Problem["difficulty"]) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-500 border border-green-500/20 bg-green-500/10 inline-flex items-center gap-1.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-green-500 px-2.5 py-1 rounded-full";
      case "Medium":
        return "text-yellow-500 border border-yellow-500/20 bg-yellow-500/10 inline-flex items-center gap-1.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-yellow-500 px-2.5 py-1 rounded-full";
      case "Hard":
        return "text-red-500 border border-red-500/20 bg-red-500/10 inline-flex items-center gap-1.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-red-500 px-2.5 py-1 rounded-full";
      default:
        return "";
    }
  };

  const calculateAcceptanceRate = (accepted: number, submitted: number) => {
    return ((accepted / submitted) * 100).toFixed(1);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  const getSortedProblems = () => {
    if (!sortConfig.key) return problems;

    return [...problems].sort((a, b) => {
      if (sortConfig.key === "acceptance") {
        const aRate = Number(
          calculateAcceptanceRate(
            a.statistics.totalAccepted,
            a.statistics.totalSubmitted
          )
        );
        const bRate = Number(
          calculateAcceptanceRate(
            b.statistics.totalAccepted,
            b.statistics.totalSubmitted
          )
        );
        return sortConfig.direction === "asc" ? aRate - bRate : bRate - aRate;
      }
      if (sortConfig.key === "totalAccepted") {
        return sortConfig.direction === "asc"
          ? a.statistics.totalAccepted - b.statistics.totalAccepted
          : b.statistics.totalAccepted - a.statistics.totalAccepted;
      }
      if (sortConfig.key === "totalSubmitted") {
        return sortConfig.direction === "asc"
          ? a.statistics.totalSubmitted - b.statistics.totalSubmitted
          : b.statistics.totalSubmitted - a.statistics.totalSubmitted;
      }
      if (sortConfig.key === "companiesCount") {
        return sortConfig.direction === "asc"
          ? a.companies.length - b.companies.length
          : b.companies.length - a.companies.length;
      }
      if (
        sortConfig.key &&
        typeof a[sortConfig.key] !== "undefined" &&
        typeof b[sortConfig.key] !== "undefined"
      ) {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
      }
      return 0;
    });
  };

  const requestSort = (key: SortConfig["key"]) => {
    let direction: SortConfig["direction"] = "asc";

    if (sortConfig.key === key) {
      if (sortConfig.direction === null) {
        direction = "desc";
      } else if (sortConfig.direction === "desc") {
        direction = "asc";
      } else {
        direction = null;
      }
    }

    setSortConfig({ key, direction });
  };

  const getSortIcon = (key: SortConfig["key"]) => {
    if (sortConfig.key !== key) return <ArrowUpDown className="h-4 w-4 ml-1" />;
    if (sortConfig.direction === "desc")
      return <ArrowDown className="h-4 w-4 ml-1" />;
    if (sortConfig.direction === "asc")
      return <ArrowUp className="h-4 w-4 ml-1" />;
    return <ArrowUpDown className="h-4 w-4 ml-1" />;
  };

  return (
    <div className="max-w-[100rem] mx-auto">
      <div className="rounded-xl border border-zinc-800 bg-zinc-950">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="h-12 w-[60px] px-4 text-left align-middle font-medium text-zinc-400">
                  Status
                </th>
                <th className="h-12 w-[60px] px-4 text-left align-middle font-medium text-zinc-400">
                  <button
                    className="flex items-center"
                    onClick={() => requestSort("id")}
                  >
                    # {getSortIcon("id")}
                  </button>
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">
                  <button
                    className="flex items-center"
                    onClick={() => requestSort("title")}
                  >
                    Title {getSortIcon("title")}
                  </button>
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">
                  <button
                    className="flex items-center"
                    onClick={() => requestSort("category")}
                  >
                    Category {getSortIcon("category")}
                  </button>
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400">
                  <button
                    className="flex items-center"
                    onClick={() => requestSort("difficulty")}
                  >
                    Difficulty {getSortIcon("difficulty")}
                  </button>
                </th>
                <th className="h-12 px-4 text-center align-middle font-medium text-zinc-400">
                  <button
                    className="flex items-center justify-center mx-auto"
                    onClick={() => requestSort("acceptance")}
                  >
                    Acceptance {getSortIcon("acceptance")}
                  </button>
                </th>
                <th className="h-12 px-4 text-center align-middle font-medium text-zinc-400">
                  <button
                    className="flex items-center justify-center mx-auto"
                    onClick={() => requestSort("totalSubmitted")}
                  >
                    Submissions {getSortIcon("totalSubmitted")}
                  </button>
                </th>
                <th className="h-12 px-4 text-center align-middle font-medium text-zinc-400">
                  <button
                    className="flex items-center justify-center mx-auto"
                    onClick={() => requestSort("totalAccepted")}
                  >
                    Accepted {getSortIcon("totalAccepted")}
                  </button>
                </th>
                <th className="h-12 px-4 text-center align-middle font-medium text-zinc-400">
                  <button
                    className="flex items-center justify-center mx-auto"
                    onClick={() => requestSort("companiesCount")}
                  >
                    Companies {getSortIcon("companiesCount")}
                  </button>
                </th>
                <th className="h-12 px-4 text-center align-middle font-medium text-zinc-400">
                  Hints
                </th>
                <th className="h-12 px-4 text-center align-middle font-medium text-zinc-400">
                  AI Help
                </th>
              </tr>
            </thead>
            <tbody>
              {getSortedProblems().map((problem) => (
                <tr
                  key={problem.id}
                  className="border-b border-zinc-800 transition-colors hover:bg-zinc-800/50"
                >
                  <td className="p-4">
                    <input
                      type="checkbox"
                      checked={problem.isCompleted}
                      className="h-4 w-4 rounded border-zinc-700 bg-zinc-900"
                      onChange={() => {}}
                    />
                  </td>
                  <td className="p-4 text-zinc-400">{problem.id}</td>
                  <td className="p-4">
                    <Link
                      href={`/problems/${problem.id}`}
                      className="text-zinc-100 hover:text-blue-500"
                    >
                      {problem.title}
                    </Link>
                  </td>
                  <td className="p-4 text-zinc-300">{problem.category}</td>
                  <td className="p-4">
                    <span
                      className={`font-medium ${getDifficultyColor(
                        problem.difficulty
                      )}`}
                    >
                      {problem.difficulty}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col items-center text-zinc-300">
                      <span>
                        {calculateAcceptanceRate(
                          problem.statistics.totalAccepted,
                          problem.statistics.totalSubmitted
                        )}
                        %
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col items-center text-zinc-300">
                      <span>
                        {formatNumber(problem.statistics.totalSubmitted)}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col items-center text-zinc-300">
                      <span>
                        {formatNumber(problem.statistics.totalAccepted)}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-2">
                      {problem.companies.slice(0, 3).map((company, index) => (
                        <Image
                          key={index}
                          src={company.logo}
                          alt={company.name}
                          width={20}
                          height={20}
                          className="rounded-sm"
                        />
                      ))}
                      {problem.companies.length > 3 && (
                        <span className="text-sm text-zinc-500">
                          +{problem.companies.length - 3}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-zinc-400 hover:text-zinc-100"
                    >
                      <Lightbulb className="h-4 w-4" />
                    </Button>
                  </td>
                  <td className="p-4 text-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-zinc-400 hover:text-zinc-100"
                    >
                      <Bot className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
