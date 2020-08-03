import React from "react";
import Chart from "react-apexcharts";

export const Donut = ({ donutSeries, donutOptions }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Chart
        options={donutOptions}
        series={donutSeries}
        type="donut"
      />
    </div>
  );
}
