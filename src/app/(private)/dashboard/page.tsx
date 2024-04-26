import React from "react";
import { ExpenditureChart, BarC } from "@/components/dashboard/Chart";

const page = () => {
  return (
    <div className="relative">
      <div className="w-full h-[500px]">
        <ExpenditureChart />
      </div>
      <div>
        <div className="grid min-h-[500px] grid-cols-2">
          <BarC />
        </div>
      </div>
    </div>
  );
};

export default page;
