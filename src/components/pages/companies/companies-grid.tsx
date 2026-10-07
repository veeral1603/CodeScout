import React from "react";
import type { CompanyMeta } from "@/types";
import { cn } from "@/lib/utils";
import { BuildingsIcon } from "@solar-icons/react/linear";
import CompanyCard from "./company-card";

interface CompanyGridProps {
  companies: CompanyMeta[];
  query?: string;
}

export default function CompaniesGrid({ companies, query }: CompanyGridProps) {
  if (companies.length === 0) {
    return <EmptyState query={query} />;
  }

  return (
    <div
      className={cn("grid gap-3", "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ")}
      role="list"
      aria-label={`Companies`}
    >
      {companies.map((companyMeta) => (
        <CompanyCard key={companyMeta.id} companyMeta={companyMeta} />
      ))}
    </div>
  );
}

function EmptyState({ query }: { query?: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-3 py-20 text-center"
      role="status"
      aria-live="polite"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
        <BuildingsIcon className="h-5 w-5 text-muted-foreground" aria-hidden />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium text-foreground">
          No companies found
        </p>
        {query && (
          <p className="text-xs text-muted-foreground max-w-[22ch]">
            No results for{" "}
            <span className="font-medium text-foreground">
              &ldquo;{query}&rdquo;
            </span>
            . Try a different search.
          </p>
        )}
      </div>
    </div>
  );
}
