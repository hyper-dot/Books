import { cn } from "@/lib/utils";
import React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> { }

const H1: React.FC<HeadingProps> = (props) => {
  return (
    <h1 {...props} className={cn("text-3xl font-semibold", props?.className)} />
  );
};

export default H1;
