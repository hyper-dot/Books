import {
  Banknote,
  BookmarkCheck,
  ClipboardList,
  TrendingUp,
  University,
} from "lucide-react";
import { cn } from "@/lib/utils";

const cardsData = [
  {
    id: 2,
    title: "Sales",
    icon: <ClipboardList />,
    bg: "bg-yellow-100/20",
    iconBg: "bg-yellow-200 dark:bg-yellow-200/20",
    number: "10293",
    percentage: "1.3%",
    desc: "Up from past week",
  },
  {
    id: 3,
    title: "Bank",
    icon: <University />,
    bg: "bg-emerald-100/20",
    iconBg: "bg-emerald-200 dark:bg-emerald-200/20",
    number: "89,000",
    percentage: "4.3%",
    desc: "Down from yesterday",
  },
  {
    id: 1,
    title: "Purchase",
    icon: <BookmarkCheck />,
    bg: "bg-purple-100/20",
    iconBg: "bg-purple-200 dark:bg-purple-200/20",
    number: "40,689",
    percentage: "8.5%",
    desc: "Up from yesterday",
  },
  {
    id: 4,
    title: "Cash",
    icon: <Banknote />,
    bg: "bg-orange-100/20",
    iconBg: "bg-orange-200 dark:bg-orange-200/20",
    number: "2040",
    percentage: "1.8%",
    desc: "Up from yesterday",
  },
];

const DashboardCard = ({
  title,
  icon,
  bg,
  iconBg,
  number,
  percentage,
  desc,
}: any) => {
  return (
    <div
      className={cn(
        bg,
        "dark:bg-secondary w-[262px] rounded-[14px] flex-shrink-0 border p-4",
      )}
    >
      <div className="flex justify-between">
        <div>
          <div className="text-sm font-medium text-[#202224]/70 dark:text-white/80">
            {title}
          </div>
          <div className="mt-3 text-[1.8rem] font-semibold">{number}</div>
        </div>
        <div>
          <div className={cn("rounded-[23px] p-4 text-primary/70", iconBg)}>
            {icon}
          </div>
        </div>
      </div>
      <div className="mt-7 flex text-sm gap-1">
        <TrendingUp className="text-green-600" />
        <span className="mr-1 text-green-600">{percentage}</span>
        <span className="text-muted-foreground font-medium">{desc}</span>
      </div>
    </div>
  );
};

export const CardsContainer = () => {
  return (
    <div className="flex overflow-auto max-w-[93vw] gap-4">
      {cardsData.map((item) => (
        <DashboardCard
          key={item.id}
          title={item.title}
          icon={item.icon}
          bg={item.bg}
          iconBg={item.iconBg}
          number={item.number}
          percentage={item.percentage}
          desc={item.desc}
        />
      ))}
    </div>
  );
};
