import Link from "next/link";
import { AltArrowRightIcon, StarIcon } from "@solar-icons/react/bold";
import { GITHUB_REPO_URL } from "@/config/constants";

export default function HeroOSBadge() {
  return (
    <Link
      href={GITHUB_REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="hero-rise hero-sheen group relative mb-8 inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-border/80 bg-card/60 py-1.5 pl-2 pr-3.5 text-xs font-medium text-muted-foreground shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_8px_24px_-12px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label="Give CodeScout a star on GitHub (opens in a new tab)"
    >
      <span className="flex size-5 items-center justify-center rounded-full bg-yellow-400/15 ring-1 ring-yellow-400/30">
        <StarIcon
          size={12}
          className="text-yellow-400 transition-transform duration-300 group-hover:rotate-24 group-hover:scale-125"
          aria-hidden="true"
        />
      </span>

      <span className="transition-colors group-hover:text-foreground">
        Give us a star on GitHub
      </span>

      <AltArrowRightIcon
        size={12}
        className="-ml-1 opacity-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
        aria-hidden="true"
      />
    </Link>
  );
}
