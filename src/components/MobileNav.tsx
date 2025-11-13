import Logo from "../components/Logo.tsx";
import { navLinks, cta } from "../constants/";
import Hamburger from "../components/Hamburger.tsx";
import { useState } from "react";
import { closeIcon } from "../assets/index.ts";
const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="md:hidden flex h-10 justify-between items-center">
        <Logo className="cursor-pointer" />
        <div onClick={() => setOpen((prev) => !prev)}>
          {!open ? (
            <Hamburger className="cursor-pointer size-7" />
          ) : (
            <img src={closeIcon} className="size-10" />
          )}
        </div>
      </nav>
      <div
        className={` ${!open && "hidden"} rounded-lg mt-10 py-8 flex flex-col z-20 px-8 gap-6 absolute w-full bg-purple-950 text-white items-center justify-center`}
      >
        <ul className="flex flex-col gap-8 items-center">
          {navLinks.map(({ label, href }) => (
            <li className="hover:text-gray-900" key={label}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="border border-gray-600 w-full"></div>
        <div className="flex gap-8 flex-col items-center w-full">
          <button className="cursor-pointer hover:text-gray-900">
            {cta.login.label}
          </button>
          <button className="bg-blue-400 w-full py-4 rounded-full text-white cursor-pointer hover:bg-blue-400/70">
            {cta.signup.label}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
