import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { SortConfig } from "./types/lc-types";

interface SortButtonProps {
  label: string;
  sortKey: SortConfig["key"];
  currentSort: SortConfig;
  onSort: (key: SortConfig["key"]) => void;
  className?: string;
}

export default function LcSortButton({
  label,
  sortKey,
  currentSort,
  onSort,
  className = "",
}: SortButtonProps) {
  const getSortIcon = () => {
    if (currentSort.key !== sortKey)
      return <ArrowUpDown className="h-4 w-4 ml-1" />;
    if (currentSort.direction === "desc")
      return <ArrowDown className="h-4 w-4 ml-1" />;
    if (currentSort.direction === "asc")
      return <ArrowUp className="h-4 w-4 ml-1" />;
    return <ArrowUpDown className="h-4 w-4 ml-1" />;
  };

  return (
    <button
      className={`flex items-center ${className}`}
      onClick={() => onSort(sortKey)}
    >
      {label} {getSortIcon()}
    </button>
  );
}
