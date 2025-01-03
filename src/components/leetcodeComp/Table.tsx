"use client";

import { useState } from "react";
import { TableHeader } from "./TableHeader";
import { Pagination } from "./Pagination";
import { TableRow } from "./TableRow";

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

type SortField = 'title' | 'difficulty' | 'acceptance' | 'companiesAsked';
type SortOrder = 'asc' | 'desc';

export default function Table() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    field: SortField;
    order: SortOrder;
  } | null>(null);

  const problems: Problem[] = [
    {
      id: 2415,
      title: "Reverse Odd Levels of Binary Tree",
      acceptance: "83.2%",
      difficulty: "Medium",
      hasSolution: true,
      isComplete: true,
    },
    {
      id: 1,
      title: "Two Sum",
      acceptance: "54.4%",
      difficulty: "Easy",
      hasSolution: true,
    },
    // Add more problems...
  ];

  const sortProblems = (problems: Problem[]) => {
    if (!sortConfig) return problems;

    return [...problems].sort((a, b) => {
      if (sortConfig.field === 'title') {
        return sortConfig.order === 'asc' 
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      }
      if (sortConfig.field === 'difficulty') {
        const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 };
        return sortConfig.order === 'asc'
          ? difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]
          : difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty];
      }
      if (sortConfig.field === 'acceptance') {
        const aValue = parseFloat(a.acceptance);
        const bValue = parseFloat(b.acceptance);
        return sortConfig.order === 'asc' ? aValue - bValue : bValue - aValue;
      }
      if (sortConfig.field === 'companiesAsked') {
        const aValue = a.companiesAsked || 0;
        const bValue = b.companiesAsked || 0;
        return sortConfig.order === 'asc' ? aValue - bValue : bValue - aValue;
      }
      return 0;
    });
  };

  const handleSort = (field: SortField) => {
    setSortConfig((currentConfig) => {
      if (currentConfig?.field === field) {
        return {
          field,
          order: currentConfig.order === 'asc' ? 'desc' : 'asc',
        };
      }
      return { field, order: 'asc' };
    });
  };

  const sortedProblems = sortProblems(problems);

  // Calculate total pages
  const totalPages = Math.ceil(problems.length / itemsPerPage);

  return (
    <div>
      <TableHeader onSearch={setSearchQuery} />

      <div className="-mx-4 md:mx-0">
        <div role="table" className="border-spacing-0 overflow-auto">
          <div className="inline-block min-w-full">
            <div className="border-b border-divider-border-2 dark:border-dark-divider-border-2">
              {/* Table header */}
              <div role="row" className="flex">
                <div role="columnheader" className="mx-2 py-[11px] w-[52px]">
                  Status
                </div>
                <div 
                  role="columnheader" 
                  className="mx-2 py-[11px] w-[600px] cursor-pointer"
                  onClick={() => handleSort('title')}
                >
                  Title
                  {sortConfig?.field === 'title' && (
                    <span className="ml-1">
                      {sortConfig.order === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </div>
                <div 
                  role="columnheader" 
                  className="mx-2 py-[11px] w-[200px] cursor-pointer"
                  onClick={() => handleSort('companiesAsked')}
                >
                  No.Companies asked
                  {sortConfig?.field === 'companiesAsked' && (
                    <span className="ml-1">
                      {sortConfig.order === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </div>
                <div 
                  role="columnheader" 
                  className="mx-2 py-[11px] w-[84px] cursor-pointer"
                  onClick={() => handleSort('difficulty')}
                >
                  Difficulty
                  {sortConfig?.field === 'difficulty' && (
                    <span className="ml-1">
                      {sortConfig.order === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </div>
                <div role="columnheader" className="mx-2 py-[11px] w-[84px]">
                  AI solution
                </div>
              </div>
            </div>
            {/* Table body */}
            <div role="rowgroup">
              {sortedProblems.map((problem) => (
                <TableRow key={problem.id} problem={problem} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={setItemsPerPage}
      />
    </div>
  );
}
