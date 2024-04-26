import React from "react";
import ExpenditureChart from "@/components/dashboard/Chart";

const page = () => {
  return (
    <div>
      <div className="w-[500px] h-[500px]">
        <ExpenditureChart />
      </div>
    </div>
  );
};

export default page;
