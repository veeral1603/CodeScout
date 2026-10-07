"use client";

import { useMemo, useState } from "react";
import {
  AltArrowRightIcon,
  Buildings2Icon,
  CodeIcon,
  MagnifierIcon,
} from "@solar-icons/react/linear";
import { companies, rangeFactor, timeRanges } from "./hero-data";

const difficultyStyles = {
  Easy: "bg-emerald-500/10 text-emerald-600 ring-emerald-500/20 dark:text-emerald-400",
  Medium:
    "bg-amber-500/10 text-amber-600 ring-amber-500/20 dark:text-amber-400",
  Hard: "bg-red-500/10 text-red-600 ring-red-500/20 dark:text-red-400",
} as const;

const barStyles = {
  Easy: "bg-emerald-500/70",
  Medium: "bg-amber-500/70",
  Hard: "bg-red-500/70",
} as const;

export default function HeroPreview() {
  const [selectedCompany, setSelectedCompany] = useState("Google");
  const [selectedRange, setSelectedRange] = useState("All time");
  const [search, setSearch] = useState("");
  const [selectedProblem, setSelectedProblem] = useState("Two Sum");

  const company =
    companies.find((item) => item.name === selectedCompany) ?? companies[0];
  const factor = rangeFactor[selectedRange] ?? 1;

  const filteredProblems = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return company.problems;

    return company.problems.filter(
      (problem) =>
        problem.title.toLowerCase().includes(query) ||
        problem.topic.toLowerCase().includes(query) ||
        problem.difficulty.toLowerCase().includes(query),
    );
  }, [company, search]);

  function selectCompany(name: string) {
    setSelectedCompany(name);
    setSelectedProblem("");
    setSearch("");
  }

  return (
    <div className="mx-auto max-w-5xl px-4 pb-12 sm:pb-16">
      <div className="hero-preview-in relative">
        {/* Ambient glow */}
        <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-primary/[0.07] blur-3xl" />
        <div className="absolute inset-x-12 -bottom-6 -z-10 h-24 rounded-full bg-primary/10 blur-3xl" />

        {/* Gradient hairline frame */}
        <div className="hero-frame rounded-[1.1rem] p-px shadow-[0_40px_100px_-30px_rgba(0,0,0,0.45)]">
          <div className="overflow-hidden rounded-2xl bg-card">
            {/* Window chrome */}
            <div className="flex h-12 items-center justify-between gap-3 border-b border-border bg-muted/20 px-4 sm:px-5">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="size-2.5 rounded-full bg-red-500/90" />
                  <span className="size-2.5 rounded-full bg-yellow-500/90" />
                  <span className="size-2.5 rounded-full bg-green-500/90" />
                </div>
              </div>

              <div className="hidden items-center gap-1.5 rounded-md border border-border/70 bg-background/60 px-3 py-1 text-[11px] text-muted-foreground md:flex">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                codescout.app/companies/
                <span className="font-medium text-foreground">
                  {company.name.toLowerCase()}
                </span>
              </div>

              <div className="group relative">
                <MagnifierIcon
                  size={14}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary"
                  aria-hidden="true"
                />

                <label htmlFor="hero-problem-search" className="sr-only">
                  Search problems
                </label>

                <input
                  id="hero-problem-search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search problems"
                  className="h-8 w-32 rounded-md border border-border bg-background/70 pl-8 pr-2 text-xs text-foreground outline-none transition-all placeholder:text-muted-foreground focus:w-44 focus:border-primary/40 focus:ring-2 focus:ring-primary/10 sm:w-40 sm:focus:w-52"
                />
              </div>
            </div>

            <div className="grid min-h-100 md:grid-cols-[200px_1fr]">
              {/* Sidebar */}
              <aside className="border-b border-border bg-muted/20 p-3 md:border-b-0 md:border-r md:p-4">
                <p className="mb-3 px-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Companies
                </p>

                <div className="grid grid-cols-2 gap-1 md:grid-cols-1">
                  {companies.map((item) => {
                    const active = item.name === selectedCompany;

                    return (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => selectCompany(item.name)}
                        aria-pressed={active}
                        className={`group relative flex items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                          active
                            ? "bg-primary font-medium text-primary-foreground shadow-[0_6px_18px_-6px_var(--primary)]"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        <span>{item.name}</span>
                        <span
                          className={`text-xs tabular-nums ${
                            active
                              ? "text-primary-foreground/70"
                              : "text-muted-foreground/50"
                          }`}
                        >
                          {item.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </aside>

              {/* Main */}
              <div className="flex min-w-0 flex-col p-4 sm:p-6">
                <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15">
                        <Buildings2Icon size={16} aria-hidden="true" />
                      </div>

                      <h2 className="text-sm font-semibold tracking-tight sm:text-base">
                        {company.name}
                      </h2>

                      <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium tabular-nums text-muted-foreground">
                        {company.count}
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-muted-foreground">
                      Frequently asked interview problems
                    </p>
                  </div>

                  <div
                    className="flex w-fit items-center rounded-lg border border-border bg-muted/40 p-0.5"
                    role="group"
                    aria-label="Problem time range"
                  >
                    {timeRanges.map((range) => {
                      const active = range === selectedRange;

                      return (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setSelectedRange(range)}
                          aria-pressed={active}
                          className={`rounded-md px-2.5 py-1.5 text-[10px] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                            active
                              ? "bg-background text-foreground shadow-sm ring-1 ring-border/60"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {range}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Column labels */}
                <div className="mb-1 hidden items-center gap-3 px-3 text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground/60 sm:flex">
                  <span className="w-5">#</span>
                  <span className="w-3.75" />
                  <span className="flex-1">Problem</span>
                  <span className="w-20 text-right">Frequency</span>
                  <span className="w-24 text-center">Topic</span>
                  <span className="w-14.5 text-right">Level</span>
                </div>

                {/* Rows — keyed by company so they re-animate on switch */}
                <div key={company.name} className="space-y-1">
                  {filteredProblems.map((problem, index) => {
                    const active = problem.title === selectedProblem;
                    const width = Math.round(problem.frequency * factor);

                    return (
                      <button
                        key={problem.title}
                        type="button"
                        onClick={() => setSelectedProblem(problem.title)}
                        aria-pressed={active}
                        style={
                          {
                            "--delay": `${index * 55}ms`,
                          } as React.CSSProperties
                        }
                        className={`hero-row-in group relative flex w-full items-center gap-3 rounded-lg border px-3 py-3 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                          active
                            ? "border-primary/25 bg-primary/5 shadow-[0_0_0_1px_var(--primary)_inset] shadow-primary/5"
                            : "border-transparent hover:border-border hover:bg-muted/50"
                        }`}
                      >
                        {active && (
                          <span className="absolute inset-y-2 left-0 w-0.5 rounded-full bg-primary" />
                        )}

                        <span className="w-5 shrink-0 font-mono text-[10px] text-muted-foreground/50">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <CodeIcon
                          size={15}
                          className={`hidden shrink-0 transition-colors sm:block ${
                            active
                              ? "text-primary"
                              : "text-muted-foreground/50 group-hover:text-muted-foreground"
                          }`}
                          aria-hidden="true"
                        />

                        <span
                          className={`min-w-0 flex-1 truncate text-xs sm:text-sm ${
                            active ? "font-semibold" : "font-medium"
                          }`}
                        >
                          {problem.title}
                        </span>

                        <span
                          className="hidden w-20 items-center justify-end sm:flex"
                          aria-label={`Asked frequency ${width} percent`}
                        >
                          <span className="h-1 w-full overflow-hidden rounded-full bg-muted">
                            <span
                              className={`hero-bar block h-full rounded-full ${barStyles[problem.difficulty]}`}
                              style={{ width: `${width}%` }}
                            />
                          </span>
                        </span>

                        <span className="hidden w-24 justify-center sm:flex">
                          <span className="truncate rounded-md bg-muted px-2 py-1 text-[10px] font-medium text-muted-foreground">
                            {problem.topic}
                          </span>
                        </span>

                        <span
                          className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ring-inset ${difficultyStyles[problem.difficulty]}`}
                        >
                          {problem.difficulty}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {!filteredProblems.length && (
                  <div className="flex min-h-40 flex-1 flex-col items-center justify-center text-center">
                    <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-muted">
                      <MagnifierIcon
                        size={18}
                        className="text-muted-foreground"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-xs font-medium">No problems found</p>
                    <p className="mt-1 text-[11px] text-muted-foreground">
                      Try a different search term.
                    </p>
                  </div>
                )}

                <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                  <span
                    className="text-[11px] text-muted-foreground"
                    aria-live="polite"
                  >
                    {filteredProblems.length} problems shown
                    <span className="mx-1.5 text-border">•</span>
                    {selectedRange.toLowerCase()}
                  </span>

                  <span className="group inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    Explore {company.name}
                    <AltArrowRightIcon
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
