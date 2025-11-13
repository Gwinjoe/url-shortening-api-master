import { useEffect, useState } from "react";
import DesktopShorten from "../components/DesktopShorten";
import MobileShorten from "../components/MobileShorten";
import { shorten } from "../constants";
import ShortLink from "../components/ShortLink";

interface Data {
  url: string;
  shortenedurl: string;
}

const Linkshortener = () => {
  const [error, setError] = useState(false);
  const [errorData, setErrorData] = useState("");
  const [longUrl, setLongUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [shortendata, setShortendata] = useState(() => {
    const data = localStorage.getItem("data");
    if (data && data.length) {
      return JSON.parse(data);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(shortendata));
  }, [shortendata]);

  const endpoint = import.meta.env.VITE_ENDPOINT;
  const localendpoint = import.meta.env.VITE_LOCALENDPOINT;
  const handleSubmit = async () => {
    if (!longUrl && !longUrl.length) {
      setError(true);
      return;
    } else {
      setLoading(true);
      const json = await fetch(`${endpoint}/shorten`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: longUrl,
        }),
      });
      const response = await json.json();
      setShortendata((data: Data[]) => [
        ...data,
        { url: longUrl, shortenedurl: response.result_url },
      ]);
      setLoading(false);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLongUrl(e.target.value);
  };

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
            value={longUrl}
            onChange={handleInput}
          />
          {error && (
            <p className="text-red-400 italic text-sm ml-2">
              {errorData ? errorData : shorten.input.error}
            </p>
          )}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-400 px-5 h-16 max-md:h-12 text-nowrap font-bold max-md:w-full z-3 rounded-xl text-white cursor-pointer hover:bg-blue-400/70"
        >
          {loading ? "loading" : shorten.btnLabel}
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {shortendata.map((data: Data) => (
          <div key={data.url}>
            <ShortLink data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Linkshortener;
