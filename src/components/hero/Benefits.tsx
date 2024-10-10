import BenifitsCard from "./BenifitCard";
import { data } from "@/__data__/benefits";

export default function Component() {
  return (
    <div className="relative mt-10 bg-[url('/patterns/dots.svg')] space-y-[10%] max-w-full before:absolute before:top-0 before:left-0 before:w-full before:h-16 before:bg-gradient-to-b before:from-background before:to-transparent after:absolute after:bottom-0 after:left-0 after:w-full after:h-16 after:bg-gradient-to-t after:from-background after:to-transparent">
      <div className="bg-background absolute inset-0 opacity-95 dark:opacity-0"></div>
      {data.map((item, idx) => (
        <BenifitsCard
          title={item.title}
          mainTitle={item.mainTitle}
          json={item.image}
          desc={item.description}
          key={idx}
        />
      ))}
    </div>
  );
}
