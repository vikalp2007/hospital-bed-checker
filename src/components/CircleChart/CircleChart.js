import React from "react";
import DonutChart from "react-donut-chart";

const data = [
  { label: "Occupied Beds", value: 2120 },
  { label: "Vacant Beds", value: 7880 },
];

const CircleChart = () => {
  return <DonutChart data={data} height={400} width={550} />;
};

export default CircleChart;
