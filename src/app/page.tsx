import React from "react";
import Link from "next/link";

const page = async () => {
  return (
    <div className="flex flex-col gap-2">
      <Link href="/purchase">Go to Purchase</Link>
      <Link href="/accounts">Go to Accounts</Link>
      <Link href="/suppliers">Go to Suppliers</Link>
      <Link href="/customers">Go to Customers</Link>
      <Link href="/products">Go to products</Link>
    </div>
  );
};

export default page;
