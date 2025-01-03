"use client";

import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "@/assets/icons";
import { SearchBar } from "./SearchBar";

interface TableHeaderProps {
  onSearch: (query: string) => void;
}

export function TableHeader({ onSearch }: TableHeaderProps) {
  return (
    <div className="mb-3 flex flex-col">
      <div className="flex w-full flex-wrap gap-2">
        <div className="relative flex-1">
          <Button variant="outline" className="w-full justify-between">
            Status
            <ChevronDownIcon />
          </Button>
        </div>

        <div className="relative flex-1">
          <Button variant="outline" className="w-full justify-between">
            Difficulty
            <ChevronDownIcon />
          </Button>
        </div>

        <div className="flex min-w-[300px] flex-[4_4_0%] gap-2">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </div>
  );
}
