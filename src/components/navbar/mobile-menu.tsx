"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GithubIcon } from "@/components/icons";
import { GITHUB_REPO_URL } from "@/config/constants";
import {
  AltArrowRightIcon,
  SquareTopDownIcon,
  CloseIcon,
} from "@solar-icons/react/linear";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navlinks } from "./navlinks.data";
import Logo from "../logo";

const itemClass =
  "flex min-h-11 w-full items-center justify-between rounded-sm px-3 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* No asChild — SheetTrigger renders the button itself */}
      <SheetTrigger
        aria-label="Open navigation menu"
        className="flex size-11 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <svg
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-72 p-4 bg-background"
        showCloseButton={false}
      >
        <SheetHeader className="flex flex-row items-center justify-between border-b border-border p-0 pb-4">
          <Logo isLink={false} />

          <SheetClose
            className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Close navigation menu"
          >
            <CloseIcon size={20} />
          </SheetClose>

          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <SheetDescription className="sr-only">
            Site navigation links
          </SheetDescription>
        </SheetHeader>

        <nav aria-label="Mobile" className="mt">
          <ul className="space-y-0.5">
            {navlinks.map((link) => {
              const isActive =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(itemClass, isActive && "bg-muted")}
                  >
                    <span>{link.label}</span>
                    <AltArrowRightIcon
                      aria-hidden="true"
                      className="text-muted-foreground/60"
                      size={16}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <hr className="my-3 border-border/60" />

          <Link
            href={GITHUB_REPO_URL}
            onClick={() => setOpen(false)}
            target="_blank"
            rel="noopener noreferrer"
            className={itemClass}
          >
            <span className="flex items-center gap-2.5">
              <GithubIcon size={17} aria-hidden="true" />
              <span>Contribute</span>
            </span>
            <SquareTopDownIcon
              aria-hidden="true"
              className="text-muted-foreground/60"
              size={16}
            />
            <span className="sr-only">(opens GitHub in a new tab)</span>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
