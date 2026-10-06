import Link from "next/link";
import { AltArrowRightIcon } from "@solar-icons/react/linear";
import CompanyLogo from "@/components/company-logo";

interface CompanyCardProps {
  name: string;
  slug: string;
  problemCount?: number;
}

export default function CompanyCard({
  name,
  slug,
  problemCount,
}: CompanyCardProps) {
  return (
    <Link
      href={`/companies/${slug}`}
      aria-label={`Explore ${name} coding interview problems`}
      className="group flex min-h-27 items-center gap-4 rounded-xl border border-border bg-card px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md hover:shadow-black/4 dark:hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <CompanyLogo name={name} />

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-semibold tracking-tight text-foreground sm:text-base">
          {name}
        </h3>

        <p className="mt-1 text-xs text-muted-foreground">
          {problemCount
            ? `${problemCount}+ interview problems`
            : "Interview problems"}
        </p>
      </div>

      <span className="flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground/40 transition-all duration-200 group-hover:bg-muted group-hover:text-foreground">
        <AltArrowRightIcon
          size={17}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
