import Link from "next/link";
import { AltArrowRightIcon } from "@solar-icons/react/linear";
import SectionHeading from "@/components/section-heading";
import FeaturedCompanyGrid from "./featured-compan-grid";
import "./companies.css";

export default function FeaturedCompaniesSection() {
  return (
    <section
      aria-labelledby="companies-heading"
      className="relative py-14 sm:py-16 lg:py-20"
    >
      <div className="container-6xl">
        <div className="companies-rise flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="companies-heading"
            title="Practice by company."
            description="Focus your preparation on the companies you're targeting with company-wise coding interview problems."
          />

          <Link
            href="/companies"
            className="group inline-flex w-fit shrink-0 items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="View all companies"
          >
            View all companies
            <AltArrowRightIcon
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="mt-8 sm:mt-10">
          <FeaturedCompanyGrid />
        </div>
      </div>
    </section>
  );
}
