import fs from "node:fs/promises";
import path from "node:path";
import { DATA_DIR } from "@/config/constants";
import type { CompanyMeta } from "@/types";

const filePath = path.join(process.cwd(), DATA_DIR, "_companies.json");

interface GetCompaniesResponse {
  companies: CompanyMeta[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export async function getCompanies(
  limit = 30,
  page = 1,
  query = "",
): Promise<GetCompaniesResponse> {
  const file = await fs.readFile(filePath, "utf-8");
  const companies: CompanyMeta[] = JSON.parse(file);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredCompanies = normalizedQuery
    ? companies.filter((company) =>
        company.name.toLowerCase().includes(normalizedQuery),
      )
    : companies;

  const totalCount = filteredCompanies.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / limit));

  const currentPage = Math.min(Math.max(page, 1), totalPages);

  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedCompanies = filteredCompanies.slice(startIndex, endIndex);

  return {
    companies: paginatedCompanies,
    totalCount,
    currentPage,
    totalPages,
    hasNextPage: currentPage < totalPages,
    hasPreviousPage: currentPage > 1,
  };
}

interface GetAllCompaniesResponse {
  companies: CompanyMeta[];
  count: number;
}

export async function getAllCompanies(): Promise<GetAllCompaniesResponse> {
  const file = await fs.readFile(filePath, "utf-8");
  const companies: CompanyMeta[] = JSON.parse(file);

  return {
    companies,
    count: companies.length,
  };
}
