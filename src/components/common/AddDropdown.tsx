"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { CircleEllipsis, CirclePlus, HandCoins, Wallet } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const AddDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          className="flex font-medium items-center gap-1 outline-none rounded-full border border-primary"
        >
          Add Record <CirclePlus size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <HandCoins className="mr-2 h-4 w-4" />
            <span>Sales</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Add Sales</DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/sales/new/product">Add Product</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/sales/new/customer">Add Customer</Link>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Wallet className="mr-2 h-4 w-4" />
              <span>Purchase</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Add Purchase</DropdownMenuItem>
                <DropdownMenuItem>Add Supplier</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <CircleEllipsis className="mr-2 h-4 w-4" />
              <span>Others</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Add Bank Transaction</DropdownMenuItem>
                <DropdownMenuItem>Add Cash Transaction</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddDropdown;
