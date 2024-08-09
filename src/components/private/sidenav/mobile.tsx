import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HiMenuAlt2 } from "react-icons/hi";
import SideNavContent from "./content";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const MobileSideNav = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname().split("/").splice(1);
  return (
    <>
      <ul className="capitalize hidden md:flex gap-1 font-semibold text-sm cursor-default">
        {pathName.map((k, idx) => (
          <li key={idx} className="after:contents">
            {k} {idx !== pathName.length - 1 ? "/" : ""}
          </li>
        ))}
      </ul>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <div>
            <button className="inline px-2 md:hidden">
              <HiMenuAlt2 size={32} />
            </button>
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="flex h-full w-[300px] flex-col">
          <SideNavContent setState={setOpen} />
        </SheetContent>
      </Sheet>
    </>
  );
};
