import AreaChartDiagram from "@/components/private/dashboard/AreaChart";
import BarDiagram from "@/components/private/dashboard/BarChart";
import { CardsContainer } from "@/components/private/dashboard/DashboardCard";
import SalesRevenueChart from "@/components/private/dashboard/SalesRevenue";

const page = () => {
  return (
    <div className="pt-10 px-2 md:px-4 w-full">
      <CardsContainer />

      <div className="grid md:grid-cols-2 gap-y-4 gap-x-10 pb-10">
        <div className="mt-10 dark:bg-secondary rounded-3xl border py-4">
          <h1 className="px-8 text-xl pb-5">Sales</h1>
          <div className="h-[200px] sm:h-[300px]">
            <BarDiagram />
          </div>
        </div>
        <div className=" mt-10 dark:bg-secondary rounded-3xl border py-4">
          <h1 className="px-8 text-xl pb-5">Trending Products</h1>
          <div className="h-[200px] sm:h-[300px]">
            <AreaChartDiagram />
          </div>
        </div>
      </div>
      <div className="dark:bg-secondary rounded-3xl border py-4">
        <h1 className="px-8 text-xl pb-5">Sales & Revenue Report</h1>
        <div className="h-[200px] sm:h-[300px]">
          <SalesRevenueChart />
        </div>
      </div>
    </div>
  );
};

export default page;
