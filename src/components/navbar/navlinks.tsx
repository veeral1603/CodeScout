import { navlinks } from "./navlinks.data";
import Navlink from "./navlink";

export default function Navlinks() {
  return (
    <ul className="flex items-center gap-4 md:gap-6">
      {navlinks.map((link) => (
        <li key={link.href}>
          <Navlink link={link} />
        </li>
      ))}
    </ul>
  );
}
