import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LogInIcon } from "lucide-react";

const menus = [
  { title: "Home", to: "/" },
  { title: "About", to: "/about" },
  { title: "Services", to: "/services" },
  { title: "Contact", to: "/contact" },
];

const NavBar = () => {
  return (
    <div className="flex py-4 items-center justify-between px-4">
      <div className="flex gap-2 items-center">
        <img src="/logo.svg" alt="" className="h-12 w-12" />
        <span className="font-bold text-2xl">Books</span>
      </div>
      <ul className="flex gap-3 font-medium">
        {menus.map((m, idx) => (
          <li key={idx}>
            <Link href={m.to}>{m.title}</Link>
          </li>
        ))}
      </ul>
      <div>
        <Button asChild>
          <Link className="flex gap-2" href="/signin">
            Login
            <LogInIcon size={16} />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
