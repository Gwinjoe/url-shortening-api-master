import Linkshortener from "./Linkshortener";
import Statistics from "./Statistics";

const Features = () => {
  return (
    <div className="flex mb-20 flex-col justify-center items-center">
      <Linkshortener />
      <Statistics />
    </div>
  );
};

export default Features;
