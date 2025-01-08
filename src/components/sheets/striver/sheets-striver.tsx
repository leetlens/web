"use client";

import { useState } from "react";
import { Brain, Rocket, Zap, Target, Code } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import SheetsStriverSde7975 from "./sheets-striver-sde7975";
import SheetsStriverA2Z from "./sheets-striver-A2Z";
import SheetsStriverCP from "./sheets-striver-cp";
import blind75Data from "./blind75final.json";
import striver79Data from "./striver79final.json";
import sdeSheetData from "./sdesheetfinal.json";
import A2ZData from "./A2Zfinaldata.json";
import striverCPData from "./strivercpfinal.json";

interface BaseProblem {
  question_difficulty?: string;
  question_title?: string | null;
  question_step_title?: string;
  question_id: string;
}

interface StandardProblem extends BaseProblem {
  question_sl_no: number;
  question_post_link: string | null;
  question_lc_link: string | null;
  question_cn_link: string | null;
  question_gfg_link: string | null;
  question_yt_link: string | null;
  question_topics: string[];
}

interface CPProblem extends BaseProblem {
  question_no: number;
  question_link: string;
}

interface A2ZProblem extends BaseProblem {
  question_step_no: number;
  question_sub_step_no: number;
  question_sub_step_title: string;
  question_post_link: string | null;
  question_lc_link: string | null;
  question_cn_link: string | null;
  question_gfg_link: string | null;
  question_yt_link: string | null;
}

interface A2ZSubStep {
  question_sub_step_no: number;
  question_sub_step_title: string;
  topics: A2ZProblem[];
}

interface A2ZCategory {
  question_step_no: number;
  question_step_title: string;
  sub_steps: A2ZSubStep[];
}

interface StandardCategory {
  question_step_no: number;
  question_step_title: string;
  steps: StandardProblem[];
}

interface CPCategory {
  question_step_no: number;
  steps: CPProblem[];
}

interface SheetStats {
  total: number;
  easy: number;
  medium: number;
  hard: number;
}

type SheetType =
  | "blind75"
  | "sdesheets"
  | "striver79"
  | "strivercp"
  | "a2zfinal";

const SHEET_OPTIONS = [
  {
    value: "a2zfinal" as const,
    label: "Striver's A2Z Sheet",
    icon: Zap,
    description: "Complete DSA coverage",
  },
  {
    value: "sdesheets" as const,
    label: "Striver's SDE Sheet",
    icon: Target,
    description: "Structured interview preparation",
  },
  {
    value: "striver79" as const,
    label: "Striver's 79 Sheet",
    icon: Rocket,
    description: "Curated list of top problems",
  },
  {
    value: "blind75" as const,
    label: "Blind 75 Sheet",
    icon: Brain,
    description: "Must-do coding interview problems",
  },
  {
    value: "strivercp" as const,
    label: "Striver's CP Sheet",
    icon: Code,
    description: "Competitive programming sheet",
  },
];

export default function SheetsStriver() {
  const [selectedSheet, setSelectedSheet] = useState<SheetType>("a2zfinal");
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );

  const closeAllCategories = () => {
    setExpandedCategories(new Set());
  };

  const calculateStats = (sheetType: SheetType): SheetStats => {
    const stats: SheetStats = {
      total: 0,
      easy: 0,
      medium: 0,
      hard: 0,
    };

    let data: unknown;
    switch (sheetType) {
      case "blind75":
        data = blind75Data;
        break;
      case "striver79":
        data = striver79Data;
        break;
      case "sdesheets":
        data = sdeSheetData;
        break;
      case "strivercp":
        data = striverCPData;
        break;
      case "a2zfinal":
        data = A2ZData;
        break;
      default:
        data = A2ZData;
    }

    // For A2Z data which has a different structure
    if (sheetType === "a2zfinal" && Array.isArray(data)) {
      (data as A2ZCategory[]).forEach((category) => {
        category.sub_steps.forEach((subStep) => {
          subStep.topics.forEach((problem) => {
            stats.total++;
            if (problem.question_difficulty === "Easy") stats.easy++;
            else if (problem.question_difficulty === "Medium") stats.medium++;
            else if (problem.question_difficulty === "Hard") stats.hard++;
          });
        });
      });
    } else if (Array.isArray(data)) {
      // For other sheets with standard structure
      if (sheetType === "strivercp") {
        (data as CPCategory[]).forEach((category) => {
          category.steps.forEach((problem) => {
            stats.total++;
            if (problem.question_difficulty === "Easy") stats.easy++;
            else if (problem.question_difficulty === "Medium") stats.medium++;
            else if (problem.question_difficulty === "Hard") stats.hard++;
          });
        });
      } else {
        (data as StandardCategory[]).forEach((category) => {
          category.steps.forEach((problem) => {
            stats.total++;
            if (problem.question_difficulty === "Easy") stats.easy++;
            else if (problem.question_difficulty === "Medium") stats.medium++;
            else if (problem.question_difficulty === "Hard") stats.hard++;
          });
        });
      }
    }

    return stats;
  };

  const stats = calculateStats(selectedSheet);

  const renderSelectedComponent = () => {
    switch (selectedSheet) {
      case "blind75":
      case "sdesheets":
      case "striver79":
        return (
          <SheetsStriverSde7975
            sheetType={selectedSheet}
            expandedCategories={expandedCategories}
            setExpandedCategories={setExpandedCategories}
          />
        );
      case "strivercp":
        return (
          <SheetsStriverCP
            expandedCategories={expandedCategories}
            setExpandedCategories={setExpandedCategories}
          />
        );
      case "a2zfinal":
        return (
          <SheetsStriverA2Z
            expandedCategories={expandedCategories}
            setExpandedCategories={setExpandedCategories}
          />
        );
      default:
        return (
          <SheetsStriverSde7975
            sheetType="blind75"
            expandedCategories={expandedCategories}
            setExpandedCategories={setExpandedCategories}
          />
        );
    }
  };

  return (
    <div className="max-w-[90rem] mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Striver Problems</h1>
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
        <div className="sticky top-28 col-span-3 space-y-6 h-fit">
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
                      ? "bg-primary text-primary-foreground bg-white/20 font-medium shadow-sm"
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
                  <span>{option.label}</span>
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
          {renderSelectedComponent()}
        </div>
      </div>
    </div>
  );
}
