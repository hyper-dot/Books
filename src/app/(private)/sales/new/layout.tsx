import { BackBtn } from "@/components/common/BackBtn";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-4">
      <div className="pb-2">
        <BackBtn />
      </div>
      {children}
    </div>
  );
};

export default layout;
