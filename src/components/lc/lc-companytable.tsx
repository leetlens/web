"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Filter, Search, ArrowUpDown, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Question {
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  frequency: number;
  isSolved: boolean;
  hasAISolution: boolean;
}

export default function LcCompanyQuestions() {
  const [searchQuery, setSearchQuery] = useState("");
  const { theme } = useTheme();

  // Sample data - replace with actual data
  const questions: Question[] = [
    {
      title: "Two Sum",
      difficulty: "Easy",
      frequency: 45,
      isSolved: false,
      hasAISolution: true,
    },
    // Add more questions as needed
  ];

  return (
    <div className="mt-6 flex w-full flex-col items-center gap-4">
      <div className="flex w-full justify-between">
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowUpDown className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="rounded-full" disabled>
            <Shuffle className="h-4 w-4" />
          </Button>
          <Button
            className="rounded-full text-xs"
            style={{
              background:
                "linear-gradient(91deg, rgb(255, 228, 178) 0%, rgb(249, 191, 105) 100%)",
            }}
          >
            30 days
          </Button>
        </div>
      </div>

      <div className="w-full">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Frequency</th>
              <th className="p-4 text-left">Difficulty</th>
              <th className="p-4 text-left">AI Solution</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <tr key={index} className="border-b hover:bg-accent">
                <td className="p-4">
                  <input
                    type="checkbox"
                    checked={question.isSolved}
                    className="rounded border-gray-300"
                  />
                </td>
                <td className="p-4">{question.title}</td>
                <td className="p-4">{question.frequency}%</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs
                    ${
                      question.difficulty === "Easy"
                        ? "bg-green-100 text-green-800"
                        : question.difficulty === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {question.difficulty}
                  </span>
                </td>
                <td className="p-4">
                  {question.hasAISolution ? "Available" : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
