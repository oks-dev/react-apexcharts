import React, { useEffect, useState } from 'react';
import { ChartPage } from './ChartPage';
import { HorizontalChart } from './HorizontalChart'

const url = 'http://localhost:3000/db.json';

const App = () => {
  const [series, setSeries] = useState([])
  const [options, setOptions] = useState({})
  const [horizontalSeries, setHorizontalSeries] = useState([])
  const [horizontalOptions, setHorizontalOptions] = useState({})

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      if (response.ok) {
        let result = await response.json();
        //Horizontal
        const newHorizontalChartSeries = Object.values(result.horizontalChart)[0]
        const newHorizontalChartData = Object.values(newHorizontalChartSeries)
        const dataHorizontal = newHorizontalChartData.map(s => s)
        //options
        const newHorizontalOptions = Object.values(result.horizontalChart)[1]

        //Chart Page
        const newSeries = Object.values(result.chart)[1]
        const newOptions = Object.values(result.chart)[0]

        setSeries(newSeries)
        setOptions(newOptions)
        setHorizontalSeries(dataHorizontal)
        setHorizontalOptions(newHorizontalOptions)
      } else {
        console.log("Ошибка HTTP: " + response.status);
      }
    }
    fetchData();
  }, [])

  return (
    <div className='wrap'>
      <h1>React Chart</h1>
      <div className='card'>
        <ChartPage series={series} options={options} />
      </div>
      <div className='card'>
        <HorizontalChart
          horizontalSeries={horizontalSeries}
          horizontalOptions={horizontalOptions}
        />
      </div>
    </div>
  );
}

export default App;
