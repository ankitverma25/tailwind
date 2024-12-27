import React from 'react'
import useWeather from '../context/Context'

function Forecast() {
    const {api_key,forecastdata,setforecastdata}=useWeather()
    console.log(api_key,forecastdata,setforecastdata)





  return (
    <div className='m-4'>
        <div className="">



        </div>



    </div>
  )
}

export default Forecast