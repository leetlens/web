export interface Problem {
  id: string;
  isCompleted: boolean;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  statistics: {
    totalAccepted: number;
    totalSubmitted: number;
  };
  companies: {
    name: string;
    logo: string;
  }[];
}

export type SortConfig = {
  key:
    | keyof Problem
    | "acceptance"
    | "totalAccepted"
    | "totalSubmitted"
    | "companiesCount"
    | null;
  direction: "asc" | "desc" | null;
};
