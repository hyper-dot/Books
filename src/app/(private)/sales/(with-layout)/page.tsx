"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { data } from "@/__mockdata__/sales";
import { CircleEllipsis } from "lucide-react";
import toast from "react-hot-toast";

const page = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">SN</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Payment Method</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((d, idx) => (
          <TableRow key={idx}>
            <TableCell className="font-medium">{idx + 1}</TableCell>
            <TableCell>{d.date}</TableCell>
            <TableCell>{d.customer}</TableCell>
            <TableCell>{d.paymentMethod}</TableCell>
            <TableCell>{d.amount}</TableCell>
            <TableCell className="flex items-center justify-end">
              <CircleEllipsis
                size={18}
                onClick={() => {
                  toast.success("Clicked successfully !!");
                }}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default page;
