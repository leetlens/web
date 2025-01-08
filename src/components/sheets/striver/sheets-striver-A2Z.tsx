"use client";

import { useState } from "react";
import {
  Star,
  ExternalLink,
  Video,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import A2ZData from "./A2Zfinaldata.json";

interface Problem {
  question_id: string;
  question_title?: string;
  question_step_title?: string;
  question_difficulty?: string;
  question_lc_link?: string | null;
  question_cn_link?: string | null;
  question_gfg_link?: string | null;
  question_yt_link?: string | null;
  question_topics?: string[];
  [key: string]: unknown;
}

interface SubStep {
  question_sub_step_no: number;
  question_sub_step_title: string;
  topics: Problem[];
}

interface Category {
  question_step_no: number;
  question_step_title: string;
  sub_steps: SubStep[];
}

const getProblemUrl = (problem: Problem): string => {
  if (problem.question_lc_link) return problem.question_lc_link;
  if (problem.question_cn_link) return problem.question_cn_link;
  if (problem.question_gfg_link) return problem.question_gfg_link;
  return "#";
};

const openYoutubeVideo = (url: string | null | undefined) => {
  if (url) window.open(url, "_blank", "noopener,noreferrer");
};

interface Props {
  expandedCategories: Set<string>;
  setExpandedCategories: React.Dispatch<React.SetStateAction<Set<string>>>;
}

export default function SheetsStriverA2Z({
  expandedCategories,
  setExpandedCategories,
}: Props) {
  const [expandedSubSteps, setExpandedSubSteps] = useState<Set<string>>(
    new Set()
  );

  const categories = A2ZData;

  const toggleCategory = (categoryNo: number) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryNo.toString())) {
      newExpanded.delete(categoryNo.toString());
    } else {
      newExpanded.add(categoryNo.toString());
    }
    setExpandedCategories(newExpanded);
  };

  const toggleSubStep = (categoryNo: number, subStepNo: number) => {
    const key = `${categoryNo}-${subStepNo}`;
    const newExpanded = new Set(expandedSubSteps);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedSubSteps(newExpanded);
  };

  return (
    <div className="space-y-2">
      {A2ZData.map((category: Category) => (
        <div key={category.question_step_no} className="space-y-2">
          <button
            onClick={() => toggleCategory(category.question_step_no)}
            className="w-full rounded-lg bg-zinc-900 p-4 flex items-center justify-between hover:bg-zinc-800 transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="text-lg font-medium">
                {category.question_step_title}
              </span>
            </div>
            {expandedCategories.has(category.question_step_no.toString()) ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </button>

          {expandedCategories.has(category.question_step_no.toString()) && (
            <div className="space-y-2 pl-4">
              {category.sub_steps.map((subStep) => (
                <div key={subStep.question_sub_step_no} className="space-y-2">
                  <button
                    onClick={() =>
                      toggleSubStep(
                        category.question_step_no,
                        subStep.question_sub_step_no
                      )
                    }
                    className="w-full rounded-lg bg-zinc-800 p-4 flex items-center justify-between hover:bg-zinc-700 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-md font-medium">
                        {subStep.question_sub_step_title}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        (0 / {subStep.topics.length})
                      </span>
                    </div>
                    {expandedSubSteps.has(
                      `${category.question_step_no}-${subStep.question_sub_step_no}`
                    ) ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>

                  {expandedSubSteps.has(
                    `${category.question_step_no}-${subStep.question_sub_step_no}`
                  ) && (
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
                          {subStep.topics.map((problem) => (
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
                                    href={getProblemUrl(problem)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium hover:underline flex items-center gap-2"
                                  >
                                    {problem.question_title ||
                                      problem.question_step_title}
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
                                  {problem.question_yt_link && (
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8"
                                      title="Watch video solution"
                                      onClick={() =>
                                        openYoutubeVideo(
                                          problem.question_yt_link
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
          )}
        </div>
      ))}
    </div>
  );
}
