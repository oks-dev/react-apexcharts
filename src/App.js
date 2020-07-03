import React, { useEffect, useState } from 'react';
import { ChartPage } from './ChartPage';

const url = 'http://localhost:3000/db.json';

const App = () => {
  const [series, setSeries] = useState([])
  const [options, setOptions] = useState({})

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const newSeries = []
      if (response.ok) {
        let result = await response.json();

        //series
        const newDataSeries = Object.values(result)[1]
        const newData = Object.values(newDataSeries)[0].data
        const data = newData.map(s => s);
        newSeries.push({ data: data });

        //options
        const newDataOptions = Object.values(result)[0]

        setSeries(newSeries)
        setOptions(newDataOptions)
      } else {
        console.log("Ошибка HTTP: " + response.status);
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <h1>React Chart</h1>
      <ChartPage series={series} options={options} />
    </>
  );
}

export default App;
