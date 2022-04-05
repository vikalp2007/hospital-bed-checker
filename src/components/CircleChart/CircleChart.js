import React from "react";
import DonutChart from "react-donut-chart";


const CircleChart = ({data, height, width}) => {
  return <DonutChart data={data} height={(height?height:400)} legend={false} width={(width?width:400)} />;
};

export default CircleChart;
