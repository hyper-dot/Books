"use client";
import Lottie from "lottie-react";

export default function BenifitsCard({
  title,
  desc,
  mainTitle,
  json,
}: {
  title: string;
  desc: string;
  mainTitle: string;
  json: any;
}) {
  return (
    <div className="flex z-10 py-10 sticky top-10 hover:scale-105 transition-all flex-col lg:flex-row bg-primary-foreground p-6 rounded-3xl max-w-7xl mx-auto border">
      <div className="lg:w-1/2 pr-6 mb-6 lg:mb-0 flex flex-col justify-center">
        <h2 className="mb-8">{mainTitle}</h2>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-muted-foreground mb-6">{desc}</p>
      </div>
      <div className="lg:w-1/2 rounded-xl p-4 h-[400px] overflow-hidden hidden md:block">
        <Lottie height={300} animationData={json} loop={true} autoplay={true} />
      </div>
    </div>
  );
}
