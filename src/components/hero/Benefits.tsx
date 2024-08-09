"use client";
import { H1, H2 } from "../ui/typography";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { benefits } from "@/__data__/benefits";
import { cn } from "@/lib/utils";

const Benifits = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  return (
    <div className="py-20 w-full" id="benifits">
      <h4 className="text-xl text-accent-2 font-semibold text-center">
        Benifits
      </h4>
      <H1 className="text-center">
        What Can You <span className="text-accent-2">Expect</span>
      </H1>
      <div className="space-y-20 mt-10 2xl:container px-4 md:px-10 2xl:px-0">
        {benefits.map((item, idx) => (
          <div key={idx} className="grid md:grid-cols-2 md:gap-[5%]">
            <motion.img
              style={{ scale }}
              src={item.image}
              alt={item.heading}
              className={cn("w-2/3 mx-auto", idx % 2 == 0 ? "md:order-1" : "")}
            />

            <div className="flex flex-col justify-center w-[80%] mx-auto">
              <H2 className="py-10 font-bold relative">
                {item.heading}
                <span className="absolute left-0 bottom-8 w-[50%] h-[2px] bg-accent-2"></span>
              </H2>
              <ul className="space-y-9 text-xl text-muted-foreground list-disc list-inside">
                {item.benefits.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benifits;
