"use client";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    sales: 4000,
    revenue: 24000,
  },
  {
    name: "February",
    sales: 3000,
    revenue: 13980,
  },
  {
    name: "March",
    sales: 2000,
    revenue: 9800,
  },
  {
    name: "April",
    sales: 2780,
    revenue: 39080,
  },
  {
    name: "May",
    sales: 1890,
    revenue: 48000,
  },
  {
    name: "June",
    sales: 2390,
    revenue: 38000,
  },
  {
    name: "July",
    sales: 3490,
    revenue: 43000,
  },
  {
    name: "August",
    sales: 3000,
    revenue: 13980,
  },
  {
    name: "September",
    sales: 2000,
    revenue: 9800,
  },
  {
    name: "October",
    sales: 2780,
    revenue: 39080,
  },
  {
    name: "November",
    sales: 1890,
    revenue: 48000,
  },
  {
    name: "December",
    sales: 2390,
    revenue: 38000,
  },
];

export default class SalesRevenueChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          {/* <Tooltip cursor={false} /> */}

          <Tooltip
            cursor={{ fill: "hsl(var(--accent))" }}
            content={({ label, payload }) => {
              if (!label || !payload || !payload.length) return null;
              return (
                <div className="bg-primary-foreground text-primary p-2 rounded-md border text-sm">
                  <p>
                    <span className="font-semibold">{label}</span>{" "}
                  </p>
                  <p>Sales {`: ${payload[0].value}`} unit(s)</p>
                  <p>Revenue: Rs.{`${payload[1].value?.toLocaleString()}`}</p>
                </div>
              );
            }}
          />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" name="Sales (units)" />
          <Bar dataKey="revenue" fill="#82ca9d" name="Revenue ($)" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
