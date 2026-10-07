import React from "react";
import Link from "next/link";
import { CREATOR_TWITTER_URL, DATA_SOURCE_REPO_URL } from "@/config/constants";
import Logo from "../logo";
import ContributeBtn from "../navbar/contribute-btn";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-foreground/15 to-transparent"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 size-64 -translate-x-1/2 rounded-full bg-primary/4 blur-[110px]"
        aria-hidden="true"
      />

      <div className="container-6xl py-10 sm:py-12">
        <div className="flex min-w-0 flex-col gap-8">
          <div className="flex min-w-0 flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <Logo />

              <p className="mt-2.5 max-w-sm text-sm leading-6 text-muted-foreground">
                Company-wise coding problems, organized for your interview
                preparation.
              </p>
            </div>

            <ContributeBtn />
          </div>

          <div className="min-w-0 rounded-xl border border-border/70 bg-card/40 p-5 backdrop-blur-sm sm:p-6">
            <div className="grid min-w-0 gap-6 text-sm sm:grid-cols-2">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-foreground">
                  Data source
                </p>

                <p className="mt-2 max-w-xl wrap-break-words leading-6 text-muted-foreground">
                  Company tags and question data are adapted from{" "}
                  <Link
                    href={DATA_SOURCE_REPO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary/40"
                  >
                    liquidslr/leetcode-company-wise-problems
                  </Link>
                  .
                </p>
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-foreground">
                  Disclaimer
                </p>

                <p className="mt-2 max-w-xl leading-6 text-muted-foreground">
                  CodeScout is an independent open-source project and is not
                  affiliated with, endorsed by, or sponsored by LeetCode.
                  LeetCode is a trademark of its respective owner.
                </p>
              </div>
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-2 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 CodeScout. Open source.</span>

            <span className="wrap-break-word">
              Built for developers, by{" "}
              <Link
                href={CREATOR_TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary/40"
              >
                @veeerzzz
              </Link>
              .
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
