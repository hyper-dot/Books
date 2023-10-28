import React from "react";
import { Skeleton } from "./ui/skeleton";

const TableSkeleton = () => {
  return (
    <div className="w-full">
      <Skeleton className="w-1/2" />
      <div className="flex flex-col gap-4">
        <Skeleton className="w-full h-10" />
        <Skeleton className="w-full h-10" />
        <Skeleton className="w-full h-10" />
        <Skeleton className="w-full h-10" />
        <Skeleton className="w-full h-10" />
        <Skeleton className="w-full h-10" />
      </div>
    </div>
  );
};

export default TableSkeleton;
