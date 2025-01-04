"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

interface Company {
  name: string;
  slug: string;
  problemCount: number;
}

export default function LcCompanySearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const { theme } = useTheme();

  const companies: Company[] = [
    { name: "Meta", slug: "facebook", problemCount: 957 },
    { name: "Google", slug: "google", problemCount: 1731 },
    { name: "Amazon", slug: "amazon", problemCount: 1744 },
    { name: "Microsoft", slug: "microsoft", problemCount: 1014 },
    { name: "Apple", slug: "apple", problemCount: 728 },
    { name: "Bloomberg", slug: "bloomberg", problemCount: 870 },
    { name: "Uber", slug: "uber", problemCount: 629 },
    { name: "Adobe", slug: "adobe", problemCount: 717 },
    // Add more companies as needed
  ];

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-dark-layer-1 shadow-dark-down-01"
          : "bg-layer-1 shadow-down-01"
      } rounded-lg px-4 pb-1 pt-2`}
    >
      <div className="flex h-[36px] items-center justify-between">
        <div
          className={`text-sm font-medium ${
            theme === "dark" ? "text-dark-label-2" : "text-label-2"
          }`}
        >
          Company Specific Questions
        </div>
      </div>
      <div className="mt-2 mb-4">
        <input
          type="text"
          placeholder="Search companies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`w-full px-3 py-2 rounded-md border ${
            theme === "dark"
              ? "border-gray-600 bg-dark-layer-2 focus:ring-dark-brand-orange"
              : "border-gray-300 bg-white focus:ring-brand-orange"
          } text-sm focus:outline-none focus:ring-2`}
        />
      </div>
      <div className="mt-0">
        <div className="flex flex-wrap gap-2 py-4">
          {filteredCompanies.map((company) => (
            <a
              key={company.slug}
              href={`/lt/${company.slug}`}
              className="mb-4 mr-3"
            >
              <span
                className={`inline-flex items-center px-2 whitespace-nowrap text-xs leading-6 rounded-full ${
                  theme === "dark"
                    ? "text-dark-label-3 bg-dark-fill-3 hover:bg-dark-fill-2"
                    : "text-label-3 bg-fill-3 hover:bg-fill-2"
                }`}
              >
                <span
                  className={`max-w-[200px] overflow-hidden overflow-ellipsis font-medium ${
                    theme === "dark" ? "text-dark-label-2" : "text-label-2"
                  }`}
                >
                  {company.name}
                </span>
                <span
                  className={`ml-1 rounded-full px-1.5 text-xs font-normal ${
                    theme === "dark"
                      ? "bg-dark-brand-orange text-dark-label-r"
                      : "bg-brand-orange text-label-r"
                  }`}
                >
                  {company.problemCount}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
