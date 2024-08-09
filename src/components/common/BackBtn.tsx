"use client";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const BackBtn = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="group flex items-center gap-2 duration-100 text-blue-600"
    >
      <MoveLeft
        size={16}
        className="transition-transform duration-200 group-hover:-translate-x-1"
      />{" "}
      Back
    </button>
  );
};
