import { Book, Gauge, Home } from "lucide-react";
import React from "react";

const SideNav = () => {
  return (
    <div className="bg-secondary pt-2 pl-2 md:min-w-[250px] h-screen">
      <div className="flex gap-2 items-center">
        <img src="/logo.svg" alt="" className="h-12 w-12" />
        <span className="font-bold text-2xl">Books</span>
      </div>

      <ul className="pt-10 space-y-5">
        <li className="flex items-center gap-2">
          <Gauge className="hover:fill-black" />
          Dashboard
        </li>
        <li className="flex items-center gap-2">
          <Home className="hover:fill-black" />
          Home
        </li>
        <li className="flex items-center gap-2">
          <Home className="hover:fill-black" />
          Home
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
