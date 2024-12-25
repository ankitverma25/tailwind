import { useState } from 'react'
import {WeatherProvider} from './context/Context'
import Weatherapp from './element/Weatherapp'



function App() {

  const [weatherdata,setweatherdata]=useState('')
  const[forecastdata,setforecastdata]=useState('')


  return (
    <WeatherProvider value={{weatherdata,forecastdata,setforecastdata,setweatherdata}}>
      <Weatherapp/>
    </WeatherProvider>
  )
}

export default App
