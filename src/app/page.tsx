import AreaChartHero from "@/components/AreaChart";
import H1 from "@/components/typography/H1";
import React from "react";

const page = async () => {
  return (
    <div className="flex flex-col gap-2">
      <H1 className="py-4">Hello, John Doe !!</H1>
      <AreaChartHero />
    </div>
  );
};

export default page;
