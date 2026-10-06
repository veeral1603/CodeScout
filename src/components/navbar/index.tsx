import Logo from "../logo";
import ContributeBtn from "./contribute-btn";
import Navlinks from "./navlinks";
import MobileMenu from "./mobile-menu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/70">
      <div className="container-6xl flex items-center justify-between py-3">
        <Logo isLink={true} />

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          <Navlinks />
          <ContributeBtn />
        </nav>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
