import Logo from "../components/Logo.tsx";
import { navLinks, cta } from "../constants/";
const DesktopNav = () => {
  return (
    <nav className="max-md:hidden flex items-center justify-between">
      <div className="flex gap-8 items-center">
        <Logo className="cursor-pointer fill-gray-900" fill={false} />
        <ul className="flex gap-8">
          {navLinks.map(({ label, href }) => (
            <li className="hover:text-gray-900" key={label}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-8">
        <button className="cursor-pointer hover:text-gray-900">
          {cta.login.label}
        </button>
        <button className="bg-blue-400 px-4 py-2 rounded-full text-white cursor-pointer hover:bg-blue-400/70">
          {cta.signup.label}
        </button>
      </div>
    </nav>
  );
};

export default DesktopNav;
