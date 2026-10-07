import React from "react";
import SectionHeading from "@/components/section-heading";

export default function CompaniesPage() {
  return (
    <div className="flex flex-col container-6xl pt-24">
      <SectionHeading
        title="Explore 490+ Companies"
        description="Browse LeetCode questions by company, sorted by interview frequency. Filter by topic and difficulty. No paywall. No account."
      />
    </div>
  );
}
