import { cn } from "@/lib/utils";
import {
  Banknote,
  BookmarkCheck,
  ClipboardList,
  TrendingUp,
  University,
} from "lucide-react";
import React from "react";

const statistics = [
  {
    title: "Sales",
    total: "66,000",
    growthRate: "4.5",
    icon: <BookmarkCheck />,
    iconBg: "bg-green-300 dark:bg-green-600",
    background: "bg-green-100 dark:bg-secondary",
  },
  {
    title: "Purchase",
    total: "25,000",
    growthRate: "2.5",
    icon: <ClipboardList />,
    iconBg: "bg-orange-300 dark:bg-orange-400",
    background: "bg-rose-100 dark:bg-secondary",
  },

  {
    title: "Bank",
    total: "70,000",
    growthRate: "6.5",
    icon: <University />,
    iconBg: "bg-purple-300 dark:bg-purple-400",
    background: "bg-purple-100 dark:bg-secondary",
  },
  {
    title: "Cash",
    total: "70,000",
    growthRate: "6.5",
    icon: <Banknote />,
    iconBg: "bg-blue-300 dark:bg-blue-500",
    background: "bg-blue-100 dark:bg-secondary",
  },
];

const StatCards = () => {
  return (
    <div className="mt-4 flex max-w-[100vw] px-4 items-center gap-8 overflow-auto">
      {statistics.map((stat, idx) => {
        return (
          <div
            key={idx}
            className={cn(
              "flex w-[200px] flex-col gap-2 rounded-xl p-4 border",
              stat.background,
            )}
          >
            <span className={cn(stat.iconBg, "w-fit rounded-md p-1")}>
              {stat.icon}
            </span>
            <span className="flex items-center gap-4">
              <p className="text-2xl text-black font-semibold dark:text-white">
                {stat.total}
              </p>
              <span className=" flex items-center gap-2 rounded-md p-1 border">
                <TrendingUp size={16} className="text-green-600" />
                <p className=" text-xs font-semibold text-muted-foreground">
                  {stat.growthRate}%
                </p>
              </span>
            </span>
            <p className="text-sm font-semibold tracking-wide text-muted-foreground">
              {stat.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default StatCards;
