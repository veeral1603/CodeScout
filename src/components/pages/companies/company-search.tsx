import Link from "next/link";
import {
  CloseCircleIcon,
  RoundedMagnifierIcon,
} from "@solar-icons/react/linear";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface CompanySearchProps {
  query?: string;
}

export default function CompanySearch({ query = "" }: CompanySearchProps) {
  const hasQuery = query.trim().length > 0;

  return (
    <form
      action="/companies"
      method="GET"
      role="search"
      className="w-full max-w-md"
    >
      <label htmlFor="company-search" className="sr-only">
        Search companies
      </label>

      <div className="relative">
        <RoundedMagnifierIcon
          size={16}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />

        <Input
          key={query}
          id="company-search"
          name="q"
          type="search"
          placeholder="Search companies..."
          defaultValue={query}
          autoComplete="off"
          spellCheck={false}
          className={cn(
            "h-10 pl-9",
            hasQuery && "pr-10",
            "[&::-webkit-search-cancel-button]:appearance-none",
            "[&::-webkit-search-decoration]:appearance-none",
          )}
        />

        {hasQuery && (
          <Link
            href="/companies"
            aria-label="Clear company search"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <CloseCircleIcon size={16} aria-hidden="true" />
          </Link>
        )}
      </div>
    </form>
  );
}
