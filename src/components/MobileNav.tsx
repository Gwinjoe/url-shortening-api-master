import Logo from "../components/Logo.tsx";
import { navLinks } from "../constants/";
import Hamburger from "../components/Hamburger.tsx";
const MobileNav = () => {
  return (
    <nav className="md:hidden flex justify-between items-center">
      <Logo className="cursor-pointer" />
      <div>
        <Hamburger className="cursor-pointer size-7" />
      </div>
    </nav>
  );
};

export default MobileNav;
