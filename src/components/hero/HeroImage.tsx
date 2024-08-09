"use client";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const HeroImage = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <div>
      <motion.img
        style={{ scale }}
        src="/hero.png"
        className="dark:hidden w-full md:w-[70%] mx-auto"
        alt=""
      />
      <motion.img
        style={{ scale }}
        src="/hero-dark.png"
        className="hidden dark:block w-full md:w-[70%]  mx-auto"
        alt=""
      />
    </div>
  );
};

export default HeroImage;
