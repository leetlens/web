"use client";

import { useState } from "react";
import {
  Star,
  ExternalLink,
  Video,
  ChevronDown,
  ChevronUp,
  Globe,
  Brain,
  Rocket,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import problemsData from "./data.json";

type SheetType = "neetcode75" | "neetcode150" | "neetcode250" | "neetcodeall";

interface Problem {
  question_id: number;
  question_title: string;
  question_pattern: string;
  question_difficulty: string;
  question_lcLink: string;
  question_ncLink: string;
  question_solLink: string;
  question_ytLink?: string;
  question_neetcode75: boolean;
  question_neetcode150: boolean;
  question_neetcode250: boolean;
  question_neetcodeall: boolean;
}

interface Category {
  name: string;
  totalProblems: number;
  problems: Problem[];
}

interface SheetStats {
  total: number;
  easy: number;
  medium: number;
  hard: number;
}

const SHEET_OPTIONS = [
  {
    value: "neetcode75" as const,
    label: "Blind 75",
    icon: Brain,
    description: "Must-do coding interview problems",
  },
  {
    value: "neetcode150" as const,
    label: "NeetCode 150",
    icon: Rocket,
    description: "Extended list of popular problems",
  },
  {
    value: "neetcode250" as const,
    label: "NeetCode 250",
    icon: Zap,
    description: "Comprehensive problem set",
  },
  {
    value: "neetcodeall" as const,
    label: "NeetCode All",
    icon: Globe,
    description: "Complete problem collection",
  },
];

// Process the raw data into categories based on sheet type
const processProblems = (
  problems: Problem[],
  sheetType: SheetType
): { categories: Category[]; stats: SheetStats } => {
  const categoryMap = new Map<string, Problem[]>();
  const stats: SheetStats = {
    total: 0,
    easy: 0,
    medium: 0,
    hard: 0,
  };

  // Filter problems based on sheet type
  const filteredProblems = problems.filter((p) => p[`question_${sheetType}`]);

  // Calculate stats
  stats.total = filteredProblems.length;
  stats.easy = filteredProblems.filter(
    (p) => p.question_difficulty === "Easy"
  ).length;
  stats.medium = filteredProblems.filter(
    (p) => p.question_difficulty === "Medium"
  ).length;
  stats.hard = filteredProblems.filter(
    (p) => p.question_difficulty === "Hard"
  ).length;

  // Group problems by pattern
  filteredProblems.forEach((problem) => {
    const pattern = problem.question_pattern;
    if (!categoryMap.has(pattern)) {
      categoryMap.set(pattern, []);
    }
    categoryMap.get(pattern)?.push(problem);
  });

  // Convert map to array of categories
  const categories = Array.from(categoryMap.entries()).map(
    ([name, problems]) => ({
      name,
      totalProblems: problems.length,
      problems,
    })
  );

  return { categories, stats };
};

export default function SheetsNeetcode() {
  const [selectedSheet, setSelectedSheet] = useState<SheetType>("neetcode150");
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );

  const { categories, stats } = processProblems(problemsData, selectedSheet);

  const toggleCategory = (categoryName: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryName)) {
      newExpanded.delete(categoryName);
    } else {
      newExpanded.add(categoryName);
    }
    setExpandedCategories(newExpanded);
  };

  const closeAllCategories = () => {
    setExpandedCategories(new Set());
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">NeetCode Problems</h1>
        <Button
          variant="outline"
          size="sm"
          onClick={closeAllCategories}
          className="text-sm"
        >
          Collapse All
        </Button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Sheet Selection Card */}
        <div className="col-span-3 space-y-6">
          <div className="rounded-lg border border-gray-200 dark:border-white/30 bg-zinc-900 p-4 space-y-6">
            {/* Sheet Options */}
            <div className="space-y-2">
              <h2 className="text-lg font-semibold mb-3">Problem Sheets</h2>
              {SHEET_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedSheet(option.value)}
                  className={cn(
                    "w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors",
                    selectedSheet === option.value
                      ? "bg-primary text-primary-foreground bg-white/20 font-medium shadow-sm hover:bg-primary/90"
                      : "hover:bg-zinc-800 text-muted-foreground"
                  )}
                >
                  <option.icon
                    className={cn(
                      "h-4 w-4",
                      selectedSheet === option.value
                        ? "text-primary-foreground"
                        : "text-muted-foreground"
                    )}
                  />
                  <span
                    className={
                      selectedSheet === option.value
                        ? "text-primary-foreground"
                        : "text-muted-foreground"
                    }
                  >
                    {option.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Stats Section */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">
                Statistics
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-zinc-800 rounded-lg p-2">
                  <div className="text-sm text-muted-foreground">Total</div>
                  <div className="text-lg font-semibold">{stats.total}</div>
                </div>
                <div className="bg-green-500/10 rounded-lg p-2">
                  <div className="text-sm text-green-500">Easy</div>
                  <div className="text-lg font-semibold text-green-500">
                    {stats.easy}
                  </div>
                </div>
                <div className="bg-yellow-500/10 rounded-lg p-2">
                  <div className="text-sm text-yellow-500">Medium</div>
                  <div className="text-lg font-semibold text-yellow-500">
                    {stats.medium}
                  </div>
                </div>
                <div className="bg-red-500/10 rounded-lg p-2">
                  <div className="text-sm text-red-500">Hard</div>
                  <div className="text-lg font-semibold text-red-500">
                    {stats.hard}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Problems Section */}
        <div className="col-span-9 space-y-4">
          <h2 className="text-xl font-semibold mb-4">
            {SHEET_OPTIONS.find((opt) => opt.value === selectedSheet)?.label}
          </h2>

          {/* Categories */}
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.name} className="space-y-2">
                {/* Rest of the category and table code remains the same */}
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="w-full rounded-lg bg-zinc-900 p-4 flex items-center justify-between hover:bg-zinc-800 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-medium">{category.name}</span>
                    <span className="text-sm text-muted-foreground">
                      (0 / {category.totalProblems})
                    </span>
                  </div>
                  {expandedCategories.has(category.name) ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>

                {expandedCategories.has(category.name) && (
                  <div className="rounded-lg border border-gray-200 dark:border-white/30 overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-muted">
                        <tr className="border-b border-gray-200 dark:border-white/30">
                          <th className="p-4 text-left font-medium text-muted-foreground">
                            Status
                          </th>
                          <th className="p-4 text-left font-medium text-muted-foreground">
                            Star
                          </th>
                          <th className="p-4 text-left font-medium text-muted-foreground">
                            Problem
                          </th>
                          <th className="p-4 text-left font-medium text-muted-foreground">
                            Difficulty
                          </th>
                          <th className="p-4 text-left font-medium text-muted-foreground">
                            Solution
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.problems.map((problem) => (
                          <tr
                            key={problem.question_id}
                            className="border-b border-gray-200 dark:border-white/30 hover:bg-muted/50 transition-colors"
                          >
                            <td className="p-4">
                              <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-input"
                              />
                            </td>
                            <td className="p-4">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                              >
                                <Star className="h-4 w-4" />
                              </Button>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-2">
                                <a
                                  href={problem.question_lcLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-medium hover:underline flex items-center gap-2"
                                >
                                  {problem.question_title}
                                  <ExternalLink className="h-3 w-3" />
                                </a>
                              </div>
                            </td>
                            <td className="p-4">
                              <span
                                className={`inline-flex items-center gap-1.5 before:w-1.5 before:h-1.5 before:rounded-full px-2.5 py-1 rounded-full text-xs font-medium
                                ${
                                  problem.question_difficulty === "Easy"
                                    ? "text-green-500 border border-green-500/20 bg-green-500/10 before:bg-green-500"
                                    : problem.question_difficulty === "Medium"
                                    ? "text-yellow-500 border border-yellow-500/20 bg-yellow-500/10 before:bg-yellow-500"
                                    : "text-red-500 border border-red-500/20 bg-red-500/10 before:bg-red-500"
                                }`}
                              >
                                {problem.question_difficulty}
                              </span>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-2">
                                {problem.question_ytLink && (
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8"
                                    title="Watch video solution"
                                    onClick={() =>
                                      window.open(
                                        problem.question_ytLink,
                                        "_blank"
                                      )
                                    }
                                  >
                                    <Video className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
