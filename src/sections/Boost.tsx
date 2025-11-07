import DesktopBoost from "../components/DesktopBoost";
import MobileBoost from "../components/MobileBoost";
import { boost } from "../constants";

const Boost = () => {
  return (
    <section className="relative overflow-hidden flex flex-col justify-center items-center text-white">
      <div className="absolute z-0 top-0 right-0 bottom-0 left-0">
        <DesktopBoost className="max-md:hidden" />
        <MobileBoost className="md:hidden" />
      </div>
      <div className="z-2 flex flex-col justify-center py-12 max-md:py-20 items-center gap-5">
        <h3 className="text-4xl max-md:text-3xl font-bold text-center">
          {boost.h1}
        </h3>
        <a
          className="bg-blue-400 hover:bg-blue-400/70 text-white font-bold px-5 py-4 rounded-full"
          href={boost.cta.href}
        >
          {boost.cta.label}
        </a>
      </div>
    </section>
  );
};

export default Boost;
