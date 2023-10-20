import { purchaseAccountAction } from "@/actions/purchaseAccount";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Link href="/purchase">Go to Purchase</Link>
      <Link href="/accounts">Go to Accounts</Link>
    </div>
  );
};

export default page;
