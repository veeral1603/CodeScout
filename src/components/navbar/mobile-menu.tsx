"use client";

import React from "react";
import Link from "next/link";
import { GithubIcon } from "@/components/icons";
import {
  AltArrowRightIcon,
  SquareTopDownIcon,
} from "@solar-icons/react/linear";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { navlinks } from "./navlinks.data";

export default function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Open navigation menu"
        className="flex size-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <span className="text-lg leading-none">☰</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-60 rounded-2xl border-border/80 bg-card p-1.5 shadow-xl"
      >
        <div className="space-y-0.5">
          {navlinks.map((link) => (
            <DropdownMenuItem
              key={link.href}
              className="h-11 cursor-pointer rounded-xl px-3 text-sm font-medium outline-none transition-colors focus:bg-muted"
            >
              <Link
                href={link.href}
                className="flex w-full items-center justify-between"
              >
                <span>{link.label}</span>
                <AltArrowRightIcon className="text-muted-foreground/60" />
              </Link>
            </DropdownMenuItem>
          ))}
        </div>

        <DropdownMenuSeparator className="my-1.5 bg-border/60" />

        <DropdownMenuItem className="h-11 cursor-pointer rounded-xl px-3 text-sm font-medium outline-none transition-colors focus:bg-muted">
          <a
            href="https://github.com/your-username/codescout"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-between"
          >
            <span className="flex items-center gap-2.5">
              <GithubIcon size={17} />
              <span>Contribute</span>
            </span>

            <SquareTopDownIcon className="text-muted-foreground/60" />
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
