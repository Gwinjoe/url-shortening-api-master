import DesktopNav from "../components/DesktopNav.tsx";
import MobileNav from "../components/MobileNav.tsx";
const Header = () => {
  return (
    <header className="padding-x padding-y text-gray-500  text-base font-bold">
      <DesktopNav />
      <MobileNav />
    </header>
  );
};

export default Header;
