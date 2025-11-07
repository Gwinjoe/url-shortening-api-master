import Logo from "../components/Logo";
import { socials } from "../constants";
import { navLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-gray-950 w-full text-gray-500 flex items-start justify-between gap-10 max-md:items-center max-md:text-center max-md:flex-col padding-x py-20">
      <div className="">
        <Logo className="fill-white" fill={true} />
      </div>
      <div className="flex justify-between max-md:flex-col gap-16">
        {navLinks.map((link) => (
          <ul className="text-base flex-col gap-2 flex">
            <a className="text-white font-bold mb-4" href={link.href}>
              {link.label}
            </a>
            {link.extras.map((extra) => (
              <li>
                <a className="hover:text-blue-400" href={`#${extra}`}>
                  {extra}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="flex gap-5 items-center">
        {socials.map((social) => (
          <a href={social.href}>
            {<social.icon className="fill-white hover:fill-blue-400" />}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
