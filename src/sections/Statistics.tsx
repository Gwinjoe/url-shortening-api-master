import { advancedStatistics } from "../constants";

const Statistics = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-20 overflow-hidden">
      <div className="text-center">
        <h2 className="text-5xl mb-10 max-md:mb-4 font-bold text-gray-900 max-md:text-3xl">
          {advancedStatistics.heading.h1}
        </h2>
        <p className="max-w-xl text-md text-gray-500">
          {advancedStatistics.heading.p}
        </p>
      </div>
      <div className="relative flex justify-center">
        <div className="h-3 bg-blue-400 max-md:h-full max-md:w-3 absolute top-36 w-full"></div>
        <div className="flex max-md:flex-col gap-10 items-start z-2">
          {advancedStatistics.section.map((section) => (
            <div
              key={section.title}
              className="px-8 pb-8 bg-white  flex flex-col nth-[3]:mt-20 nth-[2]:mt-10 max-md:justify-center max-md:items-center rounded-md justify-start items-start"
            >
              <div className="bg-purple-950 rounded-full p-6 relative -top-12">
                <img src={section.img} className="" />
              </div>
              <div className=" flex flex-col gap-5 -mt-7">
                <h3 className="text-gray-950 text-xl max-md:text-center font-bold">
                  {section.title}
                </h3>
                <p className="text-gray-500 text-base max-md:text-center">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
