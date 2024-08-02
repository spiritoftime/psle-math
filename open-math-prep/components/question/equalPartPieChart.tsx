"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const COLORS: string[] = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#82CA9D",
];

interface DataItem {
  name: string;
  value: number;
}

interface PieChartComponentProps {
  slices: number;
  title?: string;
}

export const EqualPartPieChartComponent: React.FC<PieChartComponentProps> = ({
  slices = 2,
  title,
}) => {
  const data: DataItem[] = Array.from({ length: slices }, (_, index) => ({
    name: `Slice ${index + 1}`,
    value: 100 / slices,
  }));

  return (
    <Card className="border-none w-[300px]">
      <CardHeader className="py-0">
        <CardTitle className="text-center py-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
