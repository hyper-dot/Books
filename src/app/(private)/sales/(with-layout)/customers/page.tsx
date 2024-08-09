"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { data } from "@/__mockdata__/customers";
import { CircleEllipsis } from "lucide-react";
import toast from "react-hot-toast";

const page = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">SN</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Reg No.</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((d, idx) => (
          <TableRow key={idx}>
            <TableCell className="font-medium">{idx + 1}</TableCell>
            <TableCell>{d.date}</TableCell>
            <TableCell>{d.name}</TableCell>
            <TableCell>{d.email}</TableCell>
            <TableCell>{d.phone}</TableCell>
            <TableCell>{d.address}</TableCell>
            <TableCell>{d.regNo}</TableCell>
            <TableCell className="flex justify-end">
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
