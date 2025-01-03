import { SearchIcon } from "@/assets/icons";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="flex-1">
      <div className="relative rounded-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="Search questions"
          onChange={(e) => onSearch(e.target.value)}
          className="block w-full pl-9 pr-3 py-1.5 rounded-md border-none bg-fill-3 dark:bg-dark-fill-3 focus:bg-fill-2 dark:focus:bg-dark-fill-2"
        />
      </div>
    </div>
  );
} 