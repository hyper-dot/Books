"use client";
import Link from "next/link";
import { Gauge, Library, NotebookPen, Package, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const menus = [
  { title: "Dashboard", to: "/dashboard", icon: <Gauge size={20} /> },
  { title: "Parties", to: "/parties", icon: <Users size={20} /> },
  { title: "Records", to: "/records", icon: <NotebookPen size={20} /> },
  { title: "Inventory", to: "/inventory", icon: <Package size={20} /> },
  { title: "Accounts", to: "/accounts", icon: <Library size={20} /> },
];

const SideNav = () => {
  const pathName = usePathname();

  return (
    <div className="bg-secondary pt-2 px-2 md:min-w-[250px] h-screen sticky top-0 left-0">
      <Link href="/" className="flex gap-2 items-center">
        <img src="/logo.svg" alt="" height={25} width={25} />
        <span className="font-bold text-2xl">Books</span>
      </Link>

      <ul className="pt-10 space-y-5">
        {menus.map((m, idx) => (
          <li key={idx}>
            <Link
              href={m.to}
              className={cn(
                "flex transition-all duration-200 rounded-md hover:bg-accent-foreground/10 py-2 px-1 items-center gap-2",
                pathName.startsWith(m.to)
                  ? "bg-primary font-semibold text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                  : "",
              )}
            >
              {m.icon}
              {m.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
