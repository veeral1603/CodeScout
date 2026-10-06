import Link from "next/link";
import { StarIcon } from "@solar-icons/react/bold";
import { GITHUB_REPO_URL } from "@/config/constants";

export default function HeroOSBadge() {
  return (
    <Link
      href={GITHUB_REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label="Give CodeScout a star on GitHub (opens in a new tab)"
    >
      <StarIcon
        size={16}
        className="transition-transform duration-200 group-hover:rotate-12 group-hover:scale-110 text-yellow-400"
        aria-hidden="true"
      />
      <span className="group-hover:text-foreground">
        Give us a star on GitHub
      </span>
    </Link>
  );
}
