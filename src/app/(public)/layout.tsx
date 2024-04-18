import React, { ReactNode } from "react";
import NavBar from "@/components/Navigation";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavBar />
      <main className="2xl:container">{children}</main>
    </>
  );
};

export default layout;
