import { prisma } from "@/lib/prisma";
import CustomersTable from "./CustomersTable";

const page = async () => {
  const customers = await prisma.customer.findMany({
    orderBy: { customer_name: "asc" },
  });
  return <CustomersTable data={customers} />;
};

export default page;
