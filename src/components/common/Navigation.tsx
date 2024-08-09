"use client";
import Link from "next/link";
import { LogIn, LogOutIcon } from "lucide-react";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";
import { useSession } from "@/providers/SessionProvider";
import { HiMenuAlt2 } from "react-icons/hi";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "../ui/button";
import LogoutAlert from "./LogoutAlert";

const menus = [
  { title: "Home", to: "/" },
  { title: "About", to: "/about" },
  { title: "Services", to: "/services" },
  { title: "Contact", to: "/contact" },
];

export const Navigation = () => {
  const { session } = useSession();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(false);
  };

  return (
    <div className="flex items-center justify-between px-4 py-4">
      <Logo size="lg" />
      <ul className="hidden md:flex gap-8 font-semibold">
        {menus.map((m, idx) => (
          <li key={idx}>
            <Link
              className={cn(
                "border-b-2 border-transparent",
                pathname === m.to ? "text-accent-2 border-accent-2" : "",
              )}
              href={m.to}
            >
              {m.title}
            </Link>
          </li>
        ))}

        <ModeToggle />
      </ul>
      <div className="hidden md:flex ">
        {session ? (
          <>
            <LogoutAlert>
              <Button className="font-medium gap-2">
                Log Out
                <LogOutIcon size={16} />
              </Button>
            </LogoutAlert>
          </>
        ) : (
          <Button asChild>
            <Link href="/login" className="gap-2 font-medium">
              Log In
              <LogIn size={16} />
            </Link>
          </Button>
        )}
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="md:hidden">
          <HiMenuAlt2 size={32} />
        </SheetTrigger>
        <SheetContent side="left">
          <Logo size="sm" />
          <ul className="flex flex-col h-full justify-center items-center gap-10 text-3xl font-medium">
            {menus.map((m, idx) => (
              <li key={idx}>
                <Link
                  onClick={() => setOpen(false)}
                  className={cn(
                    "border-b-2 border-transparent",
                    pathname === m.to ? "text-accent-2 border-accent-2" : "",
                  )}
                  href={m.to}
                >
                  {m.title}
                </Link>
              </li>
            ))}

            {session ? (
              <div className="flex gap-2">
                <Button className="w-full" asChild>
                  <Link href="/dashboard" onClick={handleMenuClick}>
                    Dashboard
                  </Link>
                </Button>
                <LogoutAlert>
                  <Button variant="destructive" className="w-full">
                    Log Out
                  </Button>
                </LogoutAlert>
              </div>
            ) : (
              <Button onClick={handleMenuClick} className="w-full" asChild>
                <Link href="/login">Login</Link>
              </Button>
            )}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};
