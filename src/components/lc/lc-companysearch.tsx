"use client";

import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Company {
  name: string;
  slug: string;
  problemCount: number;
}

export default function LcCompanySearch() {
  const [searchQuery, setSearchQuery] = useState("");

  const companies: Company[] = [
    {
      name: "Meta",
      slug: "facebook",
      problemCount: 957,
    },
    {
      name: "Google",
      slug: "google",
      problemCount: 1731,
    },
    {
      name: "Amazon",
      slug: "amazon",
      problemCount: 1744,
    },
    {
      name: "Microsoft",
      slug: "microsoft",
      problemCount: 1014,
    },
    {
      name: "Apple",
      slug: "apple",
      problemCount: 728,
    },
    {
      name: "Bloomberg",
      slug: "bloomberg",
      problemCount: 870,
    },
    {
      name: "Uber",
      slug: "uber",
      problemCount: 629,
    },
    {
      name: "Adobe",
      slug: "adobe",
      problemCount: 717,
    },
  ];

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-[100rem] mx-auto rounded-xl border border-zinc-800 bg-zinc-950 p-6">
      <div className="relative mb-6">
        <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
        <input
          type="text"
          placeholder="Search companies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-10 w-full rounded-lg border border-zinc-800 bg-zinc-900 pl-10 pr-4 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700"
        />
      </div>

      <div className="flex flex-row gap-3 overflow-x-auto">
        {filteredCompanies.map((company) => (
          <a
            key={company.slug}
            href={`/companies/${company.slug}`}
            className="group relative flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900 p-4 transition-all hover:border-zinc-700 hover:bg-zinc-800 whitespace-nowrap"
          >
            <div className="flex flex-col">
              <span className="font-medium text-zinc-100 group-hover:text-white">
                {company.name}
              </span>
              <span className="text-sm text-zinc-400">
                {company.problemCount} problems
              </span>
            </div>
          </a>
        ))}
      </div>

      {filteredCompanies.length === 0 && (
        <div className="mt-8 flex flex-col items-center justify-center py-12">
          <h3 className="mt-4 text-lg font-medium text-zinc-400">
            No companies found
          </h3>
          <p className="mt-2 text-sm text-zinc-500">
            Try adjusting your search
          </p>
        </div>
      )}
    </div>
  );
}
