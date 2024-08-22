import Image from "next/image";
import { H3 } from "../ui/typography";

const data = [
  "apple.svg",
  "cocacola.svg",
  "meta.svg",
  "oracle.svg",
  "wallmart.svg",
  "toyota.svg",
  "sony.svg",
  "tata.svg",
  "alibaba.svg",
  "amazon.svg",
  "microsoft.svg",
];

const Brands = () => {
  return (
    <div className="h-screen pt-20 text-center">
      <H3>Used by the best trading communites in the world</H3>
      <div className="flex">
        <ul className="pt-20 flex-shrink-0 gap-20 flex items-center scroller bg-blue-100">
          {data.map((d, idx) => (
            <li key={idx} className="flex-shrink-0">
              <Image
                width={200}
                height={100}
                src={`/logo/${d}`}
                alt={d}
                priority
              />
            </li>
          ))}
        </ul>
        <ul className="pt-20 bg-red-100 flex-shrink-0 gap-20 flex items-center scroller">
          {data.map((d, idx) => (
            <li key={idx} className="flex-shrink-0">
              <Image
                width={200}
                height={100}
                src={`/logo/${d}`}
                alt={d}
                priority
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Brands;
