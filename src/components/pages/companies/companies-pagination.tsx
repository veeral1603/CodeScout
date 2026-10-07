import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

interface CompaniesPaginationProps {
  currentPage: number;
  totalPages: number;
  query?: string;
  className?: string;
}

function getHref(page: number, query?: string) {
  const params = new URLSearchParams();

  if (query) params.set("q", query);
  params.set("page", String(page));

  return `/companies?${params.toString()}`;
}

export default function CompaniesPagination({
  currentPage,
  totalPages,
  query = "",
  className,
}: CompaniesPaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <Pagination className={cn(className)}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={getHref(currentPage - 1, query)}
            aria-disabled={currentPage === 1}
            className={
              currentPage === 1 ? "pointer-events-none opacity-40" : ""
            }
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href={getHref(1, query)} isActive={currentPage === 1}>
            1
          </PaginationLink>
        </PaginationItem>

        {currentPage > 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {Array.from({ length: totalPages }, (_, index) => index + 1)
          .filter((page) => {
            if (page === 1 || page === totalPages) return false;
            return Math.abs(page - currentPage) <= 1;
          })
          .map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href={getHref(page, query)}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

        {currentPage < totalPages - 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {totalPages > 1 && (
          <PaginationItem>
            <PaginationLink
              href={getHref(totalPages, query)}
              isActive={currentPage === totalPages}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            href={getHref(currentPage + 1, query)}
            aria-disabled={currentPage === totalPages}
            className={
              currentPage === totalPages ? "pointer-events-none opacity-40" : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
