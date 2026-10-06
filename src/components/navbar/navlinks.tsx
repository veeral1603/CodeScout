import React from "react";
import { navlinks } from "./navlinks.data";
import Navlink from "./navlink";

export default function Navlinks() {
  return (
    <div className="flex items-center gap-4 md:gap-6">
      {navlinks.map((link) => (
        <Navlink key={link.label} link={link} />
      ))}
    </div>
  );
}
