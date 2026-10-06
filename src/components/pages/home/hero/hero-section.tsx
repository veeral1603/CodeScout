import Link from "next/link";
import { AltArrowRightIcon } from "@solar-icons/react/linear";
import HeroPreview from "./hero-preview";
import HeroOSBadge from "./hero-os-badge";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-125 w-175 -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[72px_72px] opacity-[0.18] mask-[linear-gradient(to_bottom,black_0%,transparent_75%)]" />
      </div>

      <div className="container-6xl">
        <div className="mx-auto flex max-w-5xl flex-col items-start pb-16 pt-24 text-left sm:items-center sm:pb-20 sm:pt-32 sm:text-center lg:pt-36">
          <HeroOSBadge />

          <h1
            id="hero-heading"
            className="max-w-4xl text-balance text-[3rem] font-bold leading-[0.94] tracking-[-0.055em] text-foreground sm:text-6xl sm:leading-[0.98] lg:text-7xl"
          >
            Prepare for the companies{" "}
            <span className="text-primary">you actually want.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Explore company-wise coding interview problems, discover what
            companies ask, and focus your preparation where it matters most.
          </p>
          <div className="mt-9 flex w-full flex-col items-start gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href="/companies"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
            >
              Explore companies
              <AltArrowRightIcon size={17} aria-hidden="true" />
            </Link>

            <Link
              href="/topics"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-border bg-background/80 px-5 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
            >
              Explore topics
              <AltArrowRightIcon size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <HeroPreview />
      </div>
    </section>
  );
}
