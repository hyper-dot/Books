"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function BarDiagram() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          className="border-muted-foreground stroke-neutral-300 dark:stroke-neutral-600"
        />
        <XAxis dataKey="name" className="text-xs" />
        <YAxis className="text-xs" />
        <Tooltip
          content={({ label, payload }) => {
            if (!label || !payload || !payload.length) return null;
            return (
              <div className="bg-primary-foreground text-primary p-2 rounded-md border text-sm">
                <p>
                  <span className="font-semibold">{label}</span>{" "}
                  {`: ${payload[0].value}`}
                </p>
              </div>
            );
          }}
        />
        <Bar dataKey="uv" className="fill-emerald-500/80 dark:fill-[#82ca9d]" />
      </BarChart>
    </ResponsiveContainer>
  );
}
