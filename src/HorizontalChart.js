import React from "react";
import Chart from "react-apexcharts";

export const HorizontalChart = ({ horizontalSeries, horizontalOptions }) => {
  return (
    <div id="chart" style={{ height: "100%" }}>
      <Chart
        options={horizontalOptions}
        series={horizontalSeries}
        type="bar"
        height="90%"
      />
    </div>
  )
}