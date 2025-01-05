import { useState } from "react";
import LcTableHeader from "./lc-table-header";
import LcProblemRow from "./lc-problem-row";
import { Problem } from "@/types/type";
import { SortConfig } from "@/types/type";

export default function LcTable() {
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

  const getSortedProblems = () => {
    if (!sortConfig.key) return problems;

    return [...problems].sort((a, b) => {
      if (sortConfig.key === "acceptance") {
        const aRate = Number(
          (
            (a.statistics.totalAccepted / a.statistics.totalSubmitted) *
            100
          ).toFixed(1)
        );
        const bRate = Number(
          (
            (b.statistics.totalAccepted / b.statistics.totalSubmitted) *
            100
          ).toFixed(1)
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

  return (
    <div className="max-w-[100rem] mx-auto">
      <div className="rounded-xl border border-zinc-800 bg-zinc-950">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <LcTableHeader sortConfig={sortConfig} onSort={requestSort} />
            <tbody>
              {getSortedProblems().map((problem) => (
                <LcProblemRow key={problem.id} problem={problem} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
