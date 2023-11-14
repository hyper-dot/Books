import { prisma } from "@/lib/prisma";
import ProductTable from "./ProductTable";

const page = async () => {
  const data = await prisma.item.findMany();
  if (data) {
    return <ProductTable data={data} />;
  }
};

export default page;
