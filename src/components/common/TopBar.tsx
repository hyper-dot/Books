"use client";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { MobileSideNav } from "../private/sidenav/mobile";
import { ModeToggle } from "./ModeToggle";
import AddDropdown from "./AddDropdown";
import Image from "next/image";
import Head from "next/head";
const TopBar = () => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          as="image"
        />
      </Head>
      <header className="sticky top-0 border-b h-14 bg-secondary px-2">
        <div className="h-full w-full flex items-center justify-between">
          <MobileSideNav />

          <div className="flex items-center gap-5">
            <AddDropdown />
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-4 outline-none">
                <p className="font-semibold text-sm leading-none text-left hidden md:block">
                  Roshan Paudel <br />{" "}
                  <span className="text-muted-foreground font-normal text-sm">
                    @roshan
                  </span>
                </p>
                <Image
                  src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                  alt=""
                  height={80}
                  width={80}
                  className="h-[40px] w-[40px] object-cover rounded-full"
                />
                <ChevronDown size={20} className="hidden md:block" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopBar;
