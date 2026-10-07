import { RoundedMagnifierIcon } from "@solar-icons/react/linear";
import { Input } from "@/components/ui/input";

interface CompanySearchProps {
  query?: string;
}

export default function CompanySearch({ query = "" }: CompanySearchProps) {
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
          id="company-search"
          name="q"
          type="search"
          placeholder="Search companies..."
          defaultValue={query}
          autoComplete="off"
          spellCheck={false}
          className="h-10 pl-9"
        />
      </div>
    </form>
  );
}
