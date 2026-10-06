import Link from "next/link";
import {
  AltArrowRightIcon,
  CodeSquareIcon,
  StarsMinimalisticIcon,
} from "@solar-icons/react/linear";
import { GithubIcon } from "@/components/icons";
import { GITHUB_REPO_URL } from "@/config/constants";

const contributionItems = [
  {
    icon: StarsMinimalisticIcon,
    title: "Spot something missing?",
    description: "Help improve the company and problem data.",
  },
  {
    icon: CodeSquareIcon,
    title: "Have an idea?",
    description: "Suggest improvements to the project.",
  },
  {
    icon: GithubIcon,
    title: "Want to build?",
    description: "Contribute code and help shape CodeScout.",
  },
];

export default function ContributeSection() {
  return (
    <section
      aria-labelledby="contribute-heading"
      className=" py-14 sm:py-16 lg:py-20"
    >
      <div className="container-6xl">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div
            className="pointer-events-none absolute -right-32 -top-32 size-80 rounded-full bg-primary/8 blur-[100px]"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[40px_40px] opacity-[0.08] mask-[radial-gradient(ellipse_at_top_right,black,transparent_65%)]"
            aria-hidden="true"
          />

          <div className="relative grid gap-8 p-5 sm:gap-10 sm:p-8 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:p-12">
            <div className="flex flex-col justify-center">
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
                <GithubIcon size={14} aria-hidden="true" />
                Open source
              </div>

              <h2
                id="contribute-heading"
                className="max-w-xl text-balance text-3xl font-bold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-4xl lg:text-[2.75rem]"
              >
                Help make interview prep{" "}
                <span className="text-primary">a little better.</span>
              </h2>

              <p className="mt-4 max-w-lg text-pretty text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                CodeScout is built in the open. Found something missing, have an
                idea, or want to contribute? We&apos;d love to have you
                involved.
              </p>

              <Link
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex h-11 w-fit items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label="Contribute to CodeScout on GitHub (opens in a new tab)"
              >
                Contribute on GitHub
                <AltArrowRightIcon
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <div className="min-w-0">
              <div className="overflow-hidden rounded-xl border border-border bg-background/80 shadow-sm backdrop-blur-sm">
                <div className="flex h-10 items-center gap-2 border-b border-border px-3.5 sm:px-4">
                  <span
                    className="size-2 rounded-full bg-primary/70"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-medium text-muted-foreground">
                    ways-to-contribute
                  </span>
                </div>

                <div className="divide-y divide-border">
                  {contributionItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="group flex items-start gap-2.5 px-3.5 py-3.5 transition-colors hover:bg-muted/40 sm:items-center sm:gap-3 sm:px-4 sm:py-4"
                      >
                        <span className="mt-1 w-4 shrink-0 font-mono text-[9px] text-muted-foreground/35 sm:mt-0 sm:w-5 sm:text-[10px]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/40 text-muted-foreground transition-colors group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-primary sm:size-9">
                          <Icon size={16} aria-hidden="true" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold tracking-tight text-foreground sm:text-sm">
                            {item.title}
                          </p>
                          <p className="mt-0.5 text-[11px] leading-4 text-muted-foreground sm:text-xs sm:leading-5">
                            {item.description}
                          </p>
                        </div>

                        <AltArrowRightIcon
                          size={14}
                          className="mt-1 shrink-0 text-muted-foreground/25 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-foreground sm:mt-0"
                          aria-hidden="true"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
