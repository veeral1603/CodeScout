export type Difficulty = "Easy" | "Medium" | "Hard";

export type HeroProblem = {
  title: string;
  difficulty: Difficulty;
  topic: string;
  /** Relative ask-frequency (0–100) used by the preview's frequency bar. */
  frequency: number;
};

export type HeroCompany = {
  name: string;
  count: string;
  problems: HeroProblem[];
};

export const companies: HeroCompany[] = [
  {
    name: "Google",
    count: "300+",
    problems: [
      { title: "Two Sum", difficulty: "Easy", topic: "Array", frequency: 92 },
      {
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        topic: "Hash Table",
        frequency: 78,
      },
      {
        title: "Merge Intervals",
        difficulty: "Medium",
        topic: "Sorting",
        frequency: 66,
      },
      { title: "Word Ladder", difficulty: "Hard", topic: "BFS", frequency: 41 },
    ],
  },
  {
    name: "Amazon",
    count: "400+",
    problems: [
      { title: "Two Sum", difficulty: "Easy", topic: "Array", frequency: 96 },
      {
        title: "Number of Islands",
        difficulty: "Medium",
        topic: "BFS",
        frequency: 84,
      },
      {
        title: "LRU Cache",
        difficulty: "Medium",
        topic: "Design",
        frequency: 72,
      },
      {
        title: "Trapping Rain Water",
        difficulty: "Hard",
        topic: "Two Pointers",
        frequency: 58,
      },
    ],
  },
  {
    name: "Microsoft",
    count: "250+",
    problems: [
      {
        title: "Valid Parentheses",
        difficulty: "Easy",
        topic: "Stack",
        frequency: 88,
      },
      {
        title: "Product of Array Except Self",
        difficulty: "Medium",
        topic: "Array",
        frequency: 70,
      },
      {
        title: "Course Schedule",
        difficulty: "Medium",
        topic: "Graph",
        frequency: 61,
      },
      {
        title: "Serialize and Deserialize Binary Tree",
        difficulty: "Hard",
        topic: "Tree",
        frequency: 44,
      },
    ],
  },
  {
    name: "Meta",
    count: "200+",
    problems: [
      {
        title: "Valid Palindrome",
        difficulty: "Easy",
        topic: "Two Pointers",
        frequency: 90,
      },
      { title: "3Sum", difficulty: "Medium", topic: "Array", frequency: 76 },
      {
        title: "Binary Tree Level Order Traversal",
        difficulty: "Medium",
        topic: "Tree",
        frequency: 64,
      },
      {
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        topic: "Binary Search",
        frequency: 39,
      },
    ],
  },
];

export const timeRanges = ["30 days", "60 days", "90 days", "All time"];

/** Scales the frequency bars so switching the range visibly responds. */
export const rangeFactor: Record<string, number> = {
  "30 days": 0.55,
  "60 days": 0.75,
  "90 days": 0.9,
  "All time": 1,
};