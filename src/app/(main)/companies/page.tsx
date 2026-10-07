import React from "react";
import SectionHeading from "@/components/section-heading";
import CompaniesSection from "@/components/pages/companies/companies-section";

interface CompaniesPageProps {
  searchParams: Promise<{
    page?: string;
    q?: string;
  }>;
}

export default async function CompaniesPage({
  searchParams,
}: CompaniesPageProps) {
  const params = await searchParams;

  const page = Math.max(1, Number(params.page) || 1);
  const query = params.q?.trim() || "";

  return (
    <div className="flex flex-col container-6xl pt-24">
      <SectionHeading
        title="Explore 400+ Companies"
        description="Browse LeetCode questions by company, sorted by interview frequency. Filter by topic and difficulty. No paywall. No account."
      />

      <CompaniesSection page={page} query={query} />
    </div>
  );
}
