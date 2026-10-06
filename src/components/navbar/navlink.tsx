"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { Navlink as NavlinkType } from "./navlinks.data";

interface NavlinkProps {
  link: NavlinkType;
  className?: string;
  activeClassName?: string;
}

export default function Navlink({
  link,
  className,
  activeClassName = "text-foreground",
}: NavlinkProps) {
  const pathname = usePathname();
  const isActive =
    pathname === link.href || pathname.startsWith(`${link.href}/`);

  return (
    <Link
      href={link.href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "rounded-sm text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        isActive && activeClassName,
        className,
      )}
    >
      {link.label}
    </Link>
  );
}
