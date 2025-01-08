"use client";

import { Star, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import striverCPData from "./strivercpfinal.json";

interface Problem {
  question_no: number;
  question_title: string;
  question_link: string;
  question_id: string;
}

interface Props {
  expandedCategories: Set<string>;
  setExpandedCategories: React.Dispatch<React.SetStateAction<Set<string>>>;
}

const getProblemUrl = (problem: Problem): string => {
  return problem.question_link || "#";
};

export default function SheetsStriverCP({
  expandedCategories,
  setExpandedCategories,
}: Props) {
  const categories = striverCPData;

  const toggleCategory = (categoryNo: number) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryNo.toString())) {
      newExpanded.delete(categoryNo.toString());
    } else {
      newExpanded.add(categoryNo.toString());
    }
    setExpandedCategories(newExpanded);
  };

  return (
    <div className="space-y-2">
      {categories.map((category) => (
        <div key={category.question_step_no} className="space-y-2">
          <button
            onClick={() => toggleCategory(category.question_step_no)}
            className="w-full rounded-lg bg-zinc-900 p-4 flex items-center justify-between hover:bg-zinc-800 transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="text-lg font-medium">
                {category.steps[0].question_title}
              </span>
              <span className="text-sm text-muted-foreground">
                (0 / {category.steps.length})
              </span>
            </div>
            {expandedCategories.has(category.question_step_no.toString()) ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </button>

          {expandedCategories.has(category.question_step_no.toString()) && (
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
                  </tr>
                </thead>
                <tbody>
                  {category.steps.map((problem) => (
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
                        <Button variant="ghost" size="icon" className="h-8 w-8">
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
                            {problem.question_title}
                            <ExternalLink className="h-3 w-3" />
                          </a>
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
  );
}
