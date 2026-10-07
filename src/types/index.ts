export type Difficulty = "EASY" | "MEDIUM" | "HARD";

export type Timeframe =
  | "thirty_days"
  | "three_months"
  | "six_months"
  | "more_than_six_months"
  | "all";

export interface Question {
  title: string;
  difficulty: Difficulty;
  frequency: number;
  acceptance: string;
  link: string;
  topics: string[];
}

export interface CompanyMeta {
  id: string;
  name: string;
  count: number;
  breakdown?: {
    easy: number;
    medium: number;
    hard: number;
  };
  topTopics?: string[];
}

export type SortKey = "name" | "count" | "easy" | "medium" | "hard";
export type SortDir = "asc" | "desc";
