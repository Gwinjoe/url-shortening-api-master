import { illustrationWorking } from "../assets";
import { cta, hero } from "../constants";

const Hero = () => {
  return (
    <section className="pl-40 max-md:pl-2 max-xl:pl-12 grid grid-cols-2 gap-4 max-md:gap-8 items-center max-md:grid-cols-1">
      <div className="flex flex-col gap-4 items-start max-md:order-1 max-md:px-8 max-md:justify-center max-md:text-center max-md:items-center">
        <h1 className="text-7xl max-lg:text-5xl max-md:text-4xl font-bold text-gray-900">
          {hero.heading}
        </h1>
        <p className="text-xl max-md:text-lg text-gray-500 max-w-lg max-lg:max-w-md">
          {hero.p}
        </p>
        <button className="bg-blue-400 px-5 mt-2 py-3 font-bold rounded-full text-white cursor-pointer hover:bg-blue-400/70">
          {cta.getStarted.label}
        </button>
      </div>
      <div className="z-10 overflow-hidden">
        <div className="-mr-20 -z-10 ">
          <img src={illustrationWorking} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
