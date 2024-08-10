"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import Head from "next/head";

const HeroImage = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <>
      <Head>
        <link rel="preload" href="/path/to/image.ext" as="image" />
      </Head>
      <div>
        <motion.img
          style={{ scale }}
          src="/hero.png"
          className="dark:hidden w-full md:w-[70%] mx-auto min-h-[500px]"
          alt=""
        />
        <motion.img
          style={{ scale }}
          src="/hero-dark.png"
          className="hidden dark:block w-full md:w-[70%]  mx-auto"
          alt=""
        />
      </div>
    </>
  );
};

export default HeroImage;
