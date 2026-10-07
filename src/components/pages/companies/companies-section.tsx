import { cn } from "@/lib/utils";
import { getCompanies } from "@/lib/data/companies";
import CompaniesGrid from "@/components/pages/companies/companies-grid";
import CompaniesPagination from "@/components/pages/companies/companies-pagination";
import CompanySearch from "./company-search";

interface CompaniesSectionProps {
  className?: string;
  page?: number;
  query?: string;
}

export default async function CompaniesSection({
  className,
  page = 1,
  query = "",
}: CompaniesSectionProps) {
  const response = await getCompanies(30, page, query);

  return (
    <section className={cn("my-12", className)} aria-label="Companies">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <CompanySearch query={query} />

        <CompaniesPagination
          currentPage={response.currentPage}
          totalPages={response.totalPages}
          query={query}
          className="mx-0! w-max!"
        />
      </div>

      <CompaniesGrid companies={response.companies} query={query} />

      <CompaniesPagination
        currentPage={response.currentPage}
        totalPages={response.totalPages}
        query={query}
        className="mt-10"
      />
    </section>
  );
}
