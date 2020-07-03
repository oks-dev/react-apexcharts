import React, { Component } from "react";
import Chart from "react-apexcharts";

class ChartPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          height: 350,
          type: 'bar',
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: 'Ajax Example',
        },
        noData: {
          text: 'Loading...'
        }
      },
      series: []
    };
  }

  render() {
    return (
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={this.state.options}
            series={this.props.series}
            type="bar"
            width="500"
          />
        </div>
      </div>
    );
  }
}

export default ChartPage;