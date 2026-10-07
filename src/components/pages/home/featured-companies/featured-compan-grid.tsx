import { featuredCompanies } from "./featured-companies-data";
import FeaturedCompanyCard from "./featured-company-card";

export default function FeaturedCompanyGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {featuredCompanies.map((company, index) => (
        <FeaturedCompanyCard
          key={company.slug}
          {...company}
          className="companies-card-in"
          style={{ "--delay": `${index * 70}ms` } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
