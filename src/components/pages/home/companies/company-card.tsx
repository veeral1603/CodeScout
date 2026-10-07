import Link from "next/link";
import { AltArrowRightIcon } from "@solar-icons/react/linear";
import CompanyLogo from "@/components/company-logo";

interface CompanyCardProps {
  name: string;
  slug: string;
  problemCount?: number;
  style?: React.CSSProperties;
  className?: string;
}

export default function CompanyCard({
  name,
  slug,
  problemCount,
  style,
  className = "",
}: CompanyCardProps) {
  return (
    <Link
      href={`/companies/${slug}`}
      aria-label={`Explore ${name} coding interview problems`}
      style={style}
      className={`group relative flex min-h-27 items-center gap-4 overflow-hidden rounded-xl border border-border bg-card px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.6)] ${className}`}
    >
      <span
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(140px circle at var(--x,50%) var(--y,50%), color-mix(in oklab, var(--primary) 7%, transparent), transparent 70%)",
        }}
        aria-hidden="true"
      />

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

      <span className="flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground/40 transition-all duration-300 group-hover:bg-primary/10 group-hover:text-primary">
        <AltArrowRightIcon
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
