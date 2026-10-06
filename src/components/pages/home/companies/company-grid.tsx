import CompanyCard from "./company-card";
import { featuredCompanies } from "./companies-data";

export default function CompanyGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {featuredCompanies.map((company) => (
        <CompanyCard key={company.slug} {...company} />
      ))}
    </div>
  );
}
