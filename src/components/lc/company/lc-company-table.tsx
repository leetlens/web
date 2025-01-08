"use client";

import { useState } from "react";
import {
  Filter,
  Search,
  ArrowUpDown,
  Shuffle,
  ChevronDown,
  Bot,
  ChevronUp,
  ChevronsUpDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Question {
  id: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  frequency: number;
  isSolved: boolean;
  hasAISolution: boolean;
  category?: string;
  hints?: number;
}

type SortKey = keyof Question;
type SortDirection = "asc" | "desc" | null;

interface SortConfig {
  key: SortKey | null;
  direction: SortDirection;
}

export default function LcCompanyQuestions() {
  const [timePeriod, setTimePeriod] = useState("last 6 months");
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: null,
  });

  const questions: Question[] = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      frequency: 45,
      isSolved: true,
      hasAISolution: true,
      category: "Array",
      hints: 2,
    },
    {
      id: 2,
      title: "Add Two Numbers",
      difficulty: "Medium",
      frequency: 38,
      isSolved: false,
      hasAISolution: true,
      category: "Linked List",
      hints: 1,
    },
    {
      id: 3,
      title: "Median of Two Sorted Arrays",
      difficulty: "Hard",
      frequency: 32,
      isSolved: false,
      hasAISolution: true,
      category: "Array",
      hints: 3,
    },
    {
      id: 4,
      title: "Valid Parentheses",
      difficulty: "Easy",
      frequency: 41,
      isSolved: true,
      hasAISolution: true,
      category: "Stack",
      hints: 1,
    },
    {
      id: 5,
      title: "Merge k Sorted Lists",
      difficulty: "Hard",
      frequency: 35,
      isSolved: false,
      hasAISolution: true,
      category: "Linked List",
      hints: 2,
    },
  ];

  const getSortedQuestions = () => {
    if (!sortConfig.key) return questions;

    return [...questions].sort((a, b) => {
      const key = sortConfig.key as keyof Question;

      if (key === "difficulty") {
        const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 };
        const aValue = difficultyOrder[a.difficulty];
        const bValue = difficultyOrder[b.difficulty];
        return sortConfig.direction === "asc"
          ? aValue - bValue
          : bValue - aValue;
      }

      const aValue = a[key];
      const bValue = b[key];

      if (typeof aValue === "undefined" && typeof bValue === "undefined")
        return 0;
      if (typeof aValue === "undefined") return 1;
      if (typeof bValue === "undefined") return -1;

      if (aValue < bValue) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  };

  const requestSort = (key: SortKey) => {
    let direction: SortDirection = "asc";

    if (sortConfig.key === key) {
      if (sortConfig.direction === null) {
        direction = "asc";
      } else if (sortConfig.direction === "asc") {
        direction = "desc";
      } else {
        direction = null;
      }
    }

    setSortConfig({ key, direction });
  };

  const getSortIcon = (key: SortKey) => {
    if (sortConfig.key !== key) return <ChevronsUpDown className="h-4 w-4" />;
    if (sortConfig.direction === "asc")
      return <ChevronUp className="h-4 w-4" />;
    if (sortConfig.direction === "desc")
      return <ChevronDown className="h-4 w-4" />;
    return <ChevronsUpDown className="h-4 w-4" />;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between rounded-lg bg-card p-4 border border-gray-200 dark:border-white/30">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-accent"
            title="Sort"
          >
            <ArrowUpDown className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-accent"
            title="Filter"
          >
            <Filter className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-accent"
            title="Search"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-accent"
            disabled
            title="Random"
          >
            <Shuffle className="h-4 w-4" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full text-xs font-medium shadow-sm hover:opacity-90 transition-opacity"
                style={{
                  background:
                    "linear-gradient(91deg, rgb(255, 228, 178) 0%, rgb(249, 191, 105) 100%)",
                }}
              >
                {timePeriod} <ChevronDown className="ml-1 h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-popover bg-black">
              <DropdownMenuItem onClick={() => setTimePeriod("last 6 months")}>
                last 6 months
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTimePeriod("last 1 years")}>
                last 1 years
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTimePeriod("last 2 years")}>
                last 2 years
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTimePeriod("Alltime")}>
                Alltime
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 dark:border-white/30 overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted">
            <tr className="border-b border-gray-200 dark:border-white/30">
              <th
                className="p-4 text-left font-medium text-muted-foreground cursor-pointer hover:text-foreground dark:text-gray-400"
                onClick={() => requestSort("isSolved")}
              >
                <div className="flex items-center gap-1">
                  Status
                  {getSortIcon("isSolved")}
                </div>
              </th>
              <th
                className="p-4 text-left font-medium text-muted-foreground cursor-pointer hover:text-foreground dark:text-gray-400"
                onClick={() => requestSort("id")}
              >
                <div className="flex items-center gap-1">
                  #{getSortIcon("id")}
                </div>
              </th>
              <th
                className="p-4 text-left font-medium text-muted-foreground cursor-pointer hover:text-foreground dark:text-gray-400"
                onClick={() => requestSort("title")}
              >
                <div className="flex items-center gap-1">
                  Title
                  {getSortIcon("title")}
                </div>
              </th>
              <th
                className="p-4 text-left font-medium text-muted-foreground cursor-pointer hover:text-foreground dark:text-gray-400"
                onClick={() => requestSort("category")}
              >
                <div className="flex items-center gap-1">
                  Category
                  {getSortIcon("category")}
                </div>
              </th>
              <th
                className="p-4 text-left font-medium text-muted-foreground cursor-pointer hover:text-foreground dark:text-gray-400"
                onClick={() => requestSort("difficulty")}
              >
                <div className="flex items-center gap-1">
                  Difficulty
                  {getSortIcon("difficulty")}
                </div>
              </th>
              <th
                className="p-4 text-left font-medium text-muted-foreground cursor-pointer hover:text-foreground dark:text-gray-400"
                onClick={() => requestSort("frequency")}
              >
                <div className="flex items-center gap-1">
                  Frequency
                  {getSortIcon("frequency")}
                </div>
              </th>
              <th
                className="p-4 text-left font-medium text-muted-foreground cursor-pointer hover:text-foreground dark:text-gray-400"
                onClick={() => requestSort("hints")}
              >
                <div className="flex items-center gap-1">
                  Hints
                  {getSortIcon("hints")}
                </div>
              </th>
              <th className="p-4 text-left font-medium text-muted-foreground dark:text-gray-400">
                AI Help
              </th>
            </tr>
          </thead>
          <tbody>
            {getSortedQuestions().map((question) => (
              <tr
                key={question.id}
                className="border-b border-gray-200 dark:border-white/30 hover:bg-muted/50 transition-colors"
              >
                <td className="p-4">
                  <input
                    type="checkbox"
                    checked={question.isSolved}
                    readOnly
                    className="h-4 w-4 rounded border-input"
                  />
                </td>
                <td className="p-4 text-sm text-muted-foreground">
                  {question.id}
                </td>
                <td className="p-4 font-medium">{question.title}</td>
                <td className="p-4 text-sm text-muted-foreground">
                  {question.category}
                </td>
                <td className="p-4">
                  <span
                    className={`inline-flex items-center gap-1.5 before:w-1.5 before:h-1.5 before:rounded-full px-2.5 py-1 rounded-full text-xs font-medium
                    ${
                      question.difficulty === "Easy"
                        ? "text-green-500 border border-green-500/20 bg-green-500/10 before:bg-green-500"
                        : question.difficulty === "Medium"
                        ? "text-yellow-500 border border-yellow-500/20 bg-yellow-500/10 before:bg-yellow-500"
                        : "text-red-500 border border-red-500/20 bg-red-500/10 before:bg-red-500"
                    }`}
                  >
                    {question.difficulty}
                  </span>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/20 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                    {question.frequency}%
                  </span>
                </td>
                <td className="p-4">
                  <span className="text-sm text-muted-foreground">
                    {question.hints}
                  </span>
                </td>
                <td className="p-4">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium inline-flex items-center justify-center ${
                      question.hasAISolution
                        ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300"
                        : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    }`}
                  >
                    {question.hasAISolution ? (
                      <Bot className="h-3.5 w-3.5" />
                    ) : (
                      "N/A"
                    )}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
