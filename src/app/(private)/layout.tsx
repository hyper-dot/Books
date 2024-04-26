import SideNav from "@/components/dashboard/SideNav";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <SideNav />
      {children}
    </div>
  );
};

export default layout;
