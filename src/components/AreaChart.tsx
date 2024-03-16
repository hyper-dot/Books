"use client";
import { AreaChart } from "@tremor/react";

function generateRandomData(numEntries: number) {
  const chartdata = [];

  for (let i = 0; i < numEntries; i++) {
    const month = Math.floor(Math.random() * 12) + 1; // Random month between 1 and 12
    const day = Math.floor(Math.random() * 28) + 1; // Random day between 1 and 28 (assuming all months have 28 days for simplicity)
    const date = `${month.toString().padStart(2, "0")} ${day.toString().padStart(2, "0")}`;

    const income = Math.floor(Math.random() * 5000) + 1000; // Random income between 1000 and 5999

    // Generate expenses as a percentage of income, ranging from 50% to 150%
    const expensePercentage = Math.floor(Math.random() * 101) + 50; // Random percentage between 50 and 150
    const expenses = Math.floor(income * (expensePercentage / 100));

    chartdata.push({
      date: date,
      Income: income,
      Expenses: expenses,
    });
  }

  return chartdata;
}

const dataFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`;

const AreaChartHero = () => {
  return (
    <AreaChart
      className="h-96"
      data={generateRandomData(10)}
      index="date"
      categories={["Income", "Expenses"]}
      colors={["green", "red"]}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />
  );
};

export default AreaChartHero;
