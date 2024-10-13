import { cookies } from "next/headers";
import { Navigation } from "@/components/common/Navigation";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  const cookieJar = cookies();
  const token = cookieJar.get("token")?.value;
  return (
    <>
      <Navigation token={token!} />
      {children}
    </>
  );
};

export default layout;
