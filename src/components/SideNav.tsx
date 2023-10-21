import React from "react";
import Link from "next/link";
import { BookText } from "lucide-react";

const SideNav = () => {
  return (
    <div className="h-screen border-r fixed px-4">
      <div>
        <h1 className="font-semibold text-3xl px-1">
          <Link className="flex gap-2 items-center" href="/">
            <BookText /> Books
          </Link>
        </h1>
      </div>
      <ul className="my-4 border-y p-4 flex flex-col gap-2">
        <h4 className="font-semibold ">Accounts</h4>
        <li>
          <Link href="/accounts">Go to Accounts</Link>
        </li>
        <li>
          <Link href="/purchase">Go to Purchase</Link>
        </li>
        <li>
          <Link href="/suppliers">Go to Suppliers</Link>
        </li>
        <li>
          <Link href="/customers">Go to Customers</Link>
        </li>
      </ul>

      <ul className="mb-4 border-b px-4 flex flex-col gap-2">
        <h4 className="font-semibold ">Products</h4>
        <li className="mb-4 flex flex-col gap-2">
          <Link href="/new_products">Add Product</Link>
          <Link href="/products">All Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
