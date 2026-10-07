import Link from "next/link";
import { AltArrowRightIcon } from "@solar-icons/react/linear";
import HeroPreview from "./hero-preview";
import HeroOSBadge from "./hero-os-badge";
import "./hero.css";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="hero-orb absolute left-1/2 -top-24 h-125 w-176 rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute left-[8%] top-112 h-72 w-72 rounded-full bg-primary/4 blur-[110px]" />
        <div className="absolute right-[6%] top-40 h-64 w-64 rounded-full bg-primary/4 blur-[100px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[72px_72px] opacity-[0.22] mask-[radial-gradient(ellipse_70%_60%_at_50%_0%,black_10%,transparent_75%)]" />

        <div className="hero-noise absolute inset-0 opacity-[0.07]" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background to-transparent" />
      </div>

      <div className="container-6xl">
        <div className="mx-auto flex max-w-5xl flex-col items-start pb-16 pt-24 text-left sm:items-center sm:pb-20 sm:pt-32 sm:text-center lg:pt-36">
          <HeroOSBadge />

          <h1
            id="hero-heading"
            className="hero-rise max-w-4xl text-balance bg-linear-to-b from-foreground to-foreground/70 bg-clip-text text-[3rem] font-bold leading-[0.94] tracking-[-0.055em] text-transparent [--delay:80ms] sm:text-6xl sm:leading-[0.98] lg:text-7xl"
          >
            Prepare for the companies{" "}
            <span className="hero-accent">you actually want.</span>
          </h1>

          <p className="hero-rise mt-7 max-w-2xl text-pretty text-base leading-7 text-muted-foreground [--delay:180ms] sm:text-lg sm:leading-8">
            Explore company-wise coding interview problems, discover what
            companies ask, and focus your preparation where it matters most.
          </p>

          <div className="hero-rise mt-10 flex w-full flex-col items-start gap-3 [--delay:280ms] sm:w-auto sm:flex-row sm:items-center">
            <Link
              href="/companies"
              className="group relative inline-flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset,0_10px_30px_-10px_var(--primary)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset,0_18px_40px_-12px_var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0 sm:w-auto"
            >
              <span className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/15 to-transparent" />
              <span className="relative">Explore companies</span>
              <AltArrowRightIcon
                size={17}
                className="relative transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/topics"
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-border bg-background/60 px-6 text-sm font-semibold text-foreground shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0 sm:w-auto"
            >
              Explore topics
              <AltArrowRightIcon
                size={17}
                className="text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-foreground"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        <HeroPreview />
      </div>
    </section>
  );
}
