"use client";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export const BackBtn = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="flex group hover:text-muted-foreground duration-100 items-center gap-2"
    >
      <MoveLeft
        size={16}
        className="group-hover:-translate-x-1 duration-200 transition-transform"
      />{" "}
      Go Back
    </button>
  );
};
