import React from "react";
import SectionHeading from "@/components/section-heading";
import CompaniesSection from "@/components/pages/companies/companies-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company-Wise Coding Interview Problems",
  description:
    "Prepare for technical interviews with company-wise coding problems from hundreds of companies. Explore problems by company or topic with CodeScout.",
  openGraph: {
    title: "CodeScout — Company-Wise Coding Interview Problems",
    description:
      "Prepare for technical interviews with company-wise coding problems from hundreds of companies.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeScout — Company-Wise Coding Interview Problems",
    description:
      "Prepare for technical interviews with company-wise coding problems from hundreds of companies.",
  },
};

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
