import { useState } from "react";

const ShortLink = ({ data }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (!copied) {
        await navigator.clipboard.write(data.shortenedurl);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      }
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className="flex justify-between max-md:flex-col gap-3 max-md:py-4 bg-white max-md:p-0 pl-10 pr-4 py-3 rounded-xl">
      <div className="w-full flex items-center max-md:px-4">
        <p className="text-gray-900">{data.url}</p>
      </div>
      <div className="md:hidden border border-gray-500 bg-gray-500"></div>
      <div className="flex gap-5 items-center max-md:items-start max-md:flex-col max-md:px-4 max-md:w-full">
        <p className="text-blue-400 text-nowrap">{data.shortenedurl}</p>
        <button
          onClick={handleCopy}
          className={`w-25 max-md:w-full py-2 rounded-md font-bold cursor-pointer hover:bg-blue-400/70 ${copied ? "bg-purple-950 hover:bg-purple-950/70" : "bg-blue-400"} text-white `}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default ShortLink;
