import React from "react";
import Chart from "react-apexcharts";

export const ChartPage = ({ options, series }) => {
  return (
    <div className="mixed-chart">
      <Chart
        options={options}
        series={series}
        type="bar"
      />
    </div>
  );
}