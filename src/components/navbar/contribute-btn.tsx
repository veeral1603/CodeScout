import React from "react";
import Link from "next/link";
import { GithubIcon } from "@/components/icons";
import { GITHUB_REPO_URL } from "@/config/constants";

export default function ContributeBtn() {
  return (
    <Link
      href={GITHUB_REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="py-2 px-2 md:px-3 hover:bg-muted rounded-sm transition-colors duration-200 flex items-center gap-2 text-sm font-medium"
    >
      <GithubIcon size={18} />
      <p>Contribute</p>
    </Link>
  );
}
