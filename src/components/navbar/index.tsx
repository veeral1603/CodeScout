import React from "react";
import Logo from "../logo";
import ContributeBtn from "./contribute-btn";
import Navlinks from "./navlinks";
import MobileMenu from "./mobile-menu";

export default function Navbar() {
  return (
    <header className="border-b border-border bg-background">
      <div className="container-6xl flex items-center justify-between py-3">
        {/* Logo  */}
        <Logo isLink={true} />

        <div className="hidden items-center gap-7 md:flex">
          <Navlinks />
          <ContributeBtn />
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
