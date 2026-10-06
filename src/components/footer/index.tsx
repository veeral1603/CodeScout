import React from "react";
import Link from "next/link";
import { CREATOR_TWITTER_URL, DATA_SOURCE_REPO_URL } from "@/config/constants";
import Logo from "../logo";
import ContributeBtn from "../navbar/contribute-btn";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-6xl py-10 sm:py-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <Logo />

              <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                Company-wise coding problems, organized for your interview
                preparation.
              </p>
            </div>

            <ContributeBtn />
          </div>

          <div>
            <div className="grid gap-6 text-sm sm:grid-cols-2">
              <div>
                <p className="font-medium text-foreground">Data source</p>

                <p className="mt-1.5 max-w-xl leading-6 text-muted-foreground">
                  Company tags and question data are adapted from{" "}
                  <Link
                    href={DATA_SOURCE_REPO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline underline-offset-4 hover:text-primary"
                  >
                    liquidslr/leetcode-company-wise-problems
                  </Link>
                  .
                </p>
              </div>

              <div>
                <p className="font-medium text-foreground">Disclaimer</p>

                <p className="mt-1.5 max-w-xl leading-6 text-muted-foreground">
                  CodeScout is an independent open-source project and is not
                  affiliated with, endorsed by, or sponsored by LeetCode.
                  LeetCode is a trademark of its respective owner.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 CodeScout. Open source.</span>

            <span>
              Built for developers, by{" "}
              <Link
                href={CREATOR_TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4 hover:text-primary"
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
