import SideNav from "@/components/dashboard/SideNav";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default layout;
