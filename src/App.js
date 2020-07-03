import React, { useEffect, useState } from 'react';
import { ChartPage } from './ChartPage';

function App() {
  const [fetchData, setFetchData] = useState()
  const [series, setSeries] = useState([])
  const [options, setOptions] = useState({})
  const newSeries = []

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/db.json');
      if (response.ok) {
        let result = await response.json();

        //series
        const newDataSeries = Object.values(result)[1]
        const newData = Object.values(newDataSeries)[0].data
        const data = newData.map((s) => {
          return s
        });
        newSeries.push({ data: data });

        //options
        const newDataOptions = Object.values(result)[0]
        console.log(newDataOptions)

        setFetchData(data)
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
      <ChartPage fetchData={fetchData} series={series} options={options} />
    </>
  );
}

export default App;
