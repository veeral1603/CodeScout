import React from "react";
import type { Navlink as NavlinkType } from "./navlinks.data";
import Link from "next/link";

interface NavlinkProps {
  link: NavlinkType;
}

export default function Navlink({ link }: NavlinkProps) {
  return (
    <Link
      href={link.href}
      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
    >
      {link.label}
    </Link>
  );
}
