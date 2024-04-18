import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
  className?: string;
}

interface ParagraphProps extends React.HTMLProps<HTMLParagraphElement> {
  className?: string;
}

export const H1: React.FC<HeadingProps> = ({ className, ...props }) => {
  return (
    <h1
      {...props}
      className={cn("text-5xl md:text-6xl lg:text-7xl font-bold", className)}
    />
  );
};

export const H2: React.FC<HeadingProps> = ({ className, ...props }) => {
  return (
    <h2
      {...props}
      className={cn("text-3xl md:text-4xl font-semibold", className)}
    />
  );
};

export const H3: React.FC<HeadingProps> = ({ className, ...props }) => {
  return (
    <h3
      {...props}
      className={cn("text-2xl lg:text-3xl font-semibold", className)}
    />
  );
};

export const P: React.FC<ParagraphProps> = ({ className, ...props }) => {
  return <p {...props} className={cn("text-xl", className)}></p>;
};
