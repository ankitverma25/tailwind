import React from 'react'
import useWeather from '../context/Context'

function Forecast() {
    const {api_key,forecastdata,setforecastdata,info}=useWeather()
    // console.log(api_key,forecastdata,setforecastdata)
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${info.name}&units=metric&appid=${api_key}`;






  return (
    <div className='m-4'>
        <div className="">



        </div>



    </div>
  )
}

export default Forecast