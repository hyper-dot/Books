import { Navigation } from "@/components/common/Navigation";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default layout;
