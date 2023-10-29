import React from "react";
import Link from "next/link";
import {
  BookText,
  LayoutDashboard,
  PackagePlus,
  ScrollText,
  Truck,
  Users2,
  Wallet,
  Tag,
} from "lucide-react";
import { UserCircle2, ShoppingBag } from "lucide-react";
import ThemeToggleButton from "./ThemeToggleButton";

const SideNav = () => {
  return (
    <div className="min-h-screen h-full border-r px-4 hidden xl:block w-full sticky">
      <div>
        <h1 className="font-semibold text-3xl px-1 py-2 flex justify-between border-b">
          <Link className="flex gap-2 items-center" href="/">
            <BookText /> Books
          </Link>
          <ThemeToggleButton />
        </h1>
      </div>
      <ul className="my-4 border-b p-4 flex flex-col gap-2 text-sm">
        <li>
          <Link href="/" className="flex gap-1 items-center">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
        </li>
      </ul>

      <ul className="mb-4 border-b pb-4 px-4 flex flex-col gap-4 text-sm">
        <h4 className="font-semibold ">Accounts</h4>
        <li>
          <Link href="/accounts" className="flex gap-1 items-center">
            <UserCircle2 size={20} />
            Create Accounts
          </Link>
        </li>
        <li>
          <Link href="/purchase" className="flex gap-1 items-center">
            <ShoppingBag size={20} />
            Add Purchase Record
          </Link>
        </li>
        <li>
          <Link href="/sales" className="flex gap-1 items-center">
            <Tag size={20} />
            Add Sales Record
          </Link>
        </li>
        <li>
          <Link href="/suppliers" className="flex gap-1 items-center">
            <Truck size={20} />
            All suppliers
          </Link>
        </li>
        <li>
          <Link href="/customers" className="flex gap-1 items-center">
            <Users2 size={20} />
            All Customers
          </Link>
        </li>
      </ul>

      <div className="px-4 border-b pb-4">
        <h4 className="font-semibold mb-2">Products</h4>
        <ul className=" flex flex-col gap-4 text-sm">
          <li className="">
            <Link href="/new_products" className="flex gap-1 items-center">
              <PackagePlus size={20} />
              Add Product
            </Link>
          </li>
          <li>
            <Link href="/products" className="flex gap-1 items-center">
              <ScrollText size={20} />
              Inventory
            </Link>
          </li>
        </ul>
      </div>
      <div className="px-4 border-b pb-4">
        <h4 className="font-semibold my-2">Products</h4>
        <ul className=" flex flex-col gap-1 text-sm">
          <li className="">
            <Link href="/cash" className="flex gap-1 items-center">
              <Wallet size={20} />
              Cash account
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
