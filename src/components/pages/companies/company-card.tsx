import Link from "next/link";
import { AltArrowRightIcon, CodeIcon } from "@solar-icons/react/linear";
import type { CompanyMeta } from "@/types";
import CompanyLogo from "@/components/company-logo";

interface CompanyCardProps {
  companyMeta: CompanyMeta;
}

export default function CompanyCard({ companyMeta }: CompanyCardProps) {
  const { easy, medium, hard } = companyMeta.breakdown ?? {
    easy: 0,
    medium: 0,
    hard: 0,
  };

  const topTopics = companyMeta.topTopics?.slice(0, 3) ?? [];

  return (
    <Link
      href={`/companies/${companyMeta.id}`}
      aria-label={`Explore ${companyMeta.name} interview questions`}
      className="group relative flex min-h-45 flex-col overflow-hidden rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg hover:shadow-black/4 dark:hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <CompanyLogo name={companyMeta.id} />

          <div className="min-w-0">
            <h2 className="truncate text-sm font-semibold tracking-tight text-foreground sm:text-base">
              {companyMeta.name}
            </h2>

            <p className="mt-0.5 text-xs text-muted-foreground">
              {companyMeta.count} interview problems
            </p>
          </div>
        </div>

        <span className="flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground/40 transition-all duration-200 group-hover:bg-muted group-hover:text-foreground">
          <AltArrowRightIcon
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>

      <div className="mt-5 flex min-h-9 items-center gap-1.5 overflow-hidden">
        {topTopics.map((topic) => (
          <span
            key={topic}
            className="truncate rounded-md border border-border bg-muted/40 px-2 py-1 text-[10px] font-medium text-muted-foreground"
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="mt-auto border-t border-border pt-3">
        <div className="flex items-center gap-4 text-[10px] font-medium">
          <span className="inline-flex items-center gap-1.5 text-easy">
            <span className="size-1.5 rounded-full bg-current" />
            {easy} Easy
          </span>

          <span className="inline-flex items-center gap-1.5 text-medium">
            <span className="size-1.5 rounded-full bg-current" />
            {medium} Medium
          </span>

          <span className="inline-flex items-center gap-1.5 text-hard">
            <span className="size-1.5 rounded-full bg-current" />
            {hard} Hard
          </span>

          <CodeIcon
            size={14}
            className="ml-auto text-muted-foreground/30 transition-colors group-hover:text-primary/60"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
}
