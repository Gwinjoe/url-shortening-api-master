import { useState } from "react";
import DesktopShorten from "../components/DesktopShorten";
import MobileShorten from "../components/MobileShorten";
import { shorten } from "../constants";
import ShortLink from "../components/ShortLink";

const Linkshortener = () => {
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = () => {
    alert("i'll work when you work on me");
  };

  const shortendata = [
    {
      url: "https://frontendmentor.io",
      shortenedurl: "https://rel.link/kafj",
    },
    {
      url: "https://google.com",
      shortenedurl: "https://rel.link/asdfa",
    },
    {
      url: "https://younevercantell.com",
      shortenedurl: "https://rel.link/eftsa",
    },
  ];

  return (
    <div className="w-full -top-28 relative flex flex-col  gap-6">
      <div className="bg-purple-950 flex gap-5 max-md:flex-col  rounded-md px-14 py-14 max-md:p-8 ">
        <div className="absolute top-0 right-0 left-0 rounded-md overflow-hidden">
          <DesktopShorten className="w-fit max-md:hidden rounded-md" />
          <MobileShorten className="w-fit md:hidden float-right rounded-md" />
        </div>
        <div className="z-3 w-full">
          <input
            className={`${error && "border-red-400 border-3 text-red-400/50"} bg-white px-5 h-16 max-md:h-12 w-full text-gray-500 rounded-md `}
            placeholder={shorten.input.placeholder}
          />
          {error && (
            <p className="text-red-400 italic text-sm ml-2">
              {shorten.input.error}
            </p>
          )}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-400 px-5 h-16 max-md:h-12 text-nowrap font-bold max-md:w-full z-3 rounded-xl text-white cursor-pointer hover:bg-blue-400/70"
        >
          {shorten.btnLabel}
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {shortendata.map((data) => (
          <div key={data.url}>
            <ShortLink data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Linkshortener;
