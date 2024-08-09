"use client";
import {
  LineChart,
  Line,
  Legend,
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

export default function AreaChartDiagram() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
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
            console.log(payload);
            return (
              <div className="bg-primary-foreground text-primary p-2 rounded-md border text-sm">
                <p className="font-bold">{label}</p>
                {payload.map((p, idx) => (
                  <p key={idx}>
                    <span className="font-semibold">{p.name}</span>{" "}
                    {`: ${p.value}`}
                  </p>
                ))}
              </div>
            );
          }}
        />
        {/* 
        <Legend className="text-xs" /> */}
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          strokeWidth={5}
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" strokeWidth={5} dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
