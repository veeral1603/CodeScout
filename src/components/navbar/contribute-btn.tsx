import Link from "next/link";
import { GithubIcon } from "@/components/icons";
import { GITHUB_REPO_URL } from "@/config/constants";
import { SquareTopDownIcon } from "@solar-icons/react/linear";

export default function ContributeBtn() {
  return (
    <Link
      href={GITHUB_REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center w-max gap-2 rounded-sm px-2 py-2 text-sm font-medium transition-colors duration-200 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:px-3"
    >
      <GithubIcon size={18} aria-hidden="true" />
      <span>Contribute</span>
      <SquareTopDownIcon
        size={12}
        aria-hidden="true"
        className="text-muted-foreground"
      />
      <span className="sr-only">(opens GitHub in a new tab)</span>
    </Link>
  );
}
