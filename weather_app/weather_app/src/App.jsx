import { useState } from 'react'
import {WeatherProvider} from './context/Context'
import Weatherapp from './element/Weatherapp'



function App() {

  const [info,setinfo]=useState('')
  const[forecastdata,setforecastdata]=useState('')
  const api_key = "75496d48e783bfe8258fbc49f1dedffa";
  const [searchcity, setsearchCity] = useState("");
  const [searchdata, setsearchdata]= useState('')
  const [searchforecast, setsearchforecast]= useState('')
  const[err,seterr]= useState();
  const[loading,setloading]=useState(false);
  const[hide,sethide]=useState(false)

  









  return (
    <WeatherProvider value={{hide,sethide,err,seterr,loading,setloading,searchforecast,setsearchforecast,info,forecastdata,api_key,setforecastdata,setinfo,searchcity,setsearchCity,searchdata,setsearchdata}}>
      <Weatherapp/>
    </WeatherProvider>
  )
}

export default App
