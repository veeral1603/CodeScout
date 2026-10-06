"use client";

import { useMemo, useState } from "react";
import {
  AltArrowRightIcon,
  Buildings2Icon,
  CodeIcon,
  MagnifierIcon,
} from "@solar-icons/react/linear";
import { companies, timeRanges } from "./hero-data";

export default function HeroPreview() {
  const [selectedCompany, setSelectedCompany] = useState("Google");
  const [selectedRange, setSelectedRange] = useState("All time");
  const [search, setSearch] = useState("");
  const [selectedProblem, setSelectedProblem] = useState("Two Sum");

  const company =
    companies.find((item) => item.name === selectedCompany) ?? companies[0];

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
    <div className="mx-auto max-w-5xl  pb-20 sm:pb-24">
      <div className="relative">
        <div className="absolute -inset-8 -z-10 rounded-4xl bg-primary/4 blur-3xl" />

        <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
          <div className="flex h-12 items-center justify-between border-b border-border px-4 sm:px-5">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-red-500" />
                <span className="size-2.5 rounded-full bg-yellow-600" />
                <span className="size-2.5 rounded-full bg-green-500" />
              </div>

              <span className="ml-2 hidden text-xs font-medium text-muted-foreground sm:block">
                CodeScout
              </span>
            </div>

            <div className="relative">
              <MagnifierIcon
                size={14}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground"
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
                className="h-8 w-32 rounded-md border border-border bg-muted/40 pl-8 pr-2 text-xs text-foreground outline-none transition-all placeholder:text-muted-foreground focus:w-44 focus:border-primary/40 focus:ring-2 focus:ring-primary/10 sm:w-40 sm:focus:w-52"
              />
            </div>
          </div>

          <div className="grid min-h-97.5 md:grid-cols-[190px_1fr]">
            <aside className="border-b border-border bg-muted/18 p-3 md:border-b-0 md:border-r md:p-4">
              <p className="mb-4 px-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
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
                      className={`group flex items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                        active
                          ? "bg-primary font-medium text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <span>{item.name}</span>
                      <span
                        className={
                          active
                            ? "text-primary-foreground/60"
                            : "text-muted-foreground/50"
                        }
                      >
                        {item.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </aside>

            <div className="min-w-0 p-4 sm:p-6">
              <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex size-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Buildings2Icon size={16} aria-hidden="true" />
                    </div>

                    <h2 className="text-sm font-semibold sm:text-base">
                      {company.name}
                    </h2>

                    <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      {company.count}
                    </span>
                  </div>

                  <p className="mt-1.5 text-xs text-muted-foreground">
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
                        className={`rounded-md px-2.5 py-1.5 text-[10px] font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                          active
                            ? "bg-background text-foreground shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {range}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-1">
                {filteredProblems.map((problem, index) => {
                  const active = problem.title === selectedProblem;

                  return (
                    <button
                      key={problem.title}
                      type="button"
                      onClick={() => setSelectedProblem(problem.title)}
                      aria-pressed={active}
                      className={`group flex w-full items-center gap-3 rounded-lg border px-3 py-3 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                        active
                          ? "border-primary/20 bg-primary/4.5"
                          : "border-transparent hover:border-border hover:bg-muted/50"
                      }`}
                    >
                      <span className="w-5 shrink-0 font-mono text-[10px] text-muted-foreground/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <CodeIcon
                        size={15}
                        className={`hidden shrink-0 sm:block ${
                          active ? "text-primary" : "text-muted-foreground/50"
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

                      <span className="hidden rounded-md bg-muted px-2 py-1 text-[10px] font-medium text-muted-foreground sm:block">
                        {problem.topic}
                      </span>

                      <span
                        className={`shrink-0 text-[10px] font-semibold ${
                          problem.difficulty === "Easy"
                            ? "text-emerald-600 dark:text-emerald-400"
                            : problem.difficulty === "Medium"
                              ? "text-amber-600 dark:text-amber-400"
                              : "text-red-600 dark:text-red-400"
                        }`}
                      >
                        {problem.difficulty}
                      </span>
                    </button>
                  );
                })}
              </div>

              {!filteredProblems.length && (
                <div className="flex min-h-40 flex-col items-center justify-center text-center">
                  <MagnifierIcon
                    size={22}
                    className="mb-2 text-muted-foreground/50"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-medium">No problems found</p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Try a different search term.
                  </p>
                </div>
              )}

              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="text-[11px] text-muted-foreground">
                  {filteredProblems.length} problems shown
                </span>

                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  Explore company
                  <AltArrowRightIcon size={13} aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
