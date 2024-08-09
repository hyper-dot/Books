"use client";
import Link from "next/link";
import {
  Gauge,
  HandCoins,
  Library,
  Package,
  Settings,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Logo from "@/components/common/Logo";

const menus = [
  {
    title: "Dashboard",
    to: "/dashboard",
    icon: <Gauge size={20} className="text-blue-400 dark:text-blue-300" />,
  },
  {
    title: "Sales",
    to: "/sales",
    icon: (
      <HandCoins size={20} className="text-purple-400 dark:text-purple-300" />
    ),
  },
  {
    title: "Expenses",
    to: "/expenses",
    icon: <Wallet size={20} className="text-orange-400 dark:text-orange-200" />,
  },
  {
    title: "Inventory",
    to: "/inventory",
    icon: (
      <Package size={20} className="text-emerald-500 dark:text-emerald-200" />
    ),
  },
  {
    title: "Accounts",
    to: "/accounts",
    icon: <Library size={20} className="text-red-400 dark:text-red-300" />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: (
      <Settings size={20} className="text-fuchsia-500 dark:text-fuchsia-300" />
    ),
  },
];

const SideNavContent = ({
  setState,
}: {
  setState?: (state: boolean) => void;
}) => {
  const pathName = usePathname();

  return (
    <>
      <Logo size="sm" />
      <ul className="space-y-3 pt-10">
        {menus.map((m, idx) => (
          <li key={idx}>
            <Link
              onClick={() => {
                if (setState) {
                  setState(false);
                }
              }}
              href={m.to}
              className={cn(
                "flex items-center gap-2 px-2 rounded-r-sm py-2 transition-all border-l-4 border-transparent duration-100 hover:bg-accent-foreground/5",
                pathName.startsWith(m.to)
                  ? "bg-accent-foreground/5 text-blue-600 dark:text-blue-300 border-blue-500"
                  : "",
              )}
            >
              {m.icon}
              {m.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SideNavContent;
