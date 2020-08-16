import React, { useEffect, useState } from 'react'
import { ChartPage } from './ChartPage'
import { HorizontalChart } from './HorizontalChart'
import { Donut } from './Donut'
import { Map } from './Map'

const url = 'https://coatceatl.github.io/react-apexcharts/db.json';

const App = () => {
  const [series, setSeries] = useState([])
  const [options, setOptions] = useState({})
  const [horizontalSeries, setHorizontalSeries] = useState([])
  const [horizontalOptions, setHorizontalOptions] = useState({})
  //Donut
  const [donutSeries, setDonutSeries] = useState([])
  const [donutOptions, setDonutOptions] = useState({})
  //Map
  const [mapData, setMapData] = useState([])

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

        //Donut
        const newDonutChartDataSeries = Object.values(result.donutChart)[0]
        const dataDonut = newDonutChartDataSeries.map(s => s)
        const newDonutOptions = Object.values(result.donutChart)[1]

        //Map
        const newMapData = Object.values(result.mapData.svg)
        const mapArray = newMapData.map(m => {
          const data = Object.values(m)
          return data
        })


        setDonutSeries(dataDonut)
        setDonutOptions(newDonutOptions)
        setSeries(newSeries)
        setOptions(newOptions)
        setHorizontalSeries(dataHorizontal)
        setHorizontalOptions(newHorizontalOptions)
        setMapData(mapArray)
      } else {
        console.log("Ошибка HTTP: " + response.status);
      }
    }
    fetchData();
  }, [])

  return (
    <div className='wrap'>
      <div className='card'>
        <ChartPage series={series} options={options} />
      </div>
      <div className='card'>
        <HorizontalChart
          horizontalSeries={horizontalSeries}
          horizontalOptions={horizontalOptions}
        />
      </div>
      <div className='card'>
        <Donut donutSeries={donutSeries} donutOptions={donutOptions} />
      </div>
      <div className='card'>
        <Map mapData={mapData} />
      </div>
    </div>
  );
}

export default App;
