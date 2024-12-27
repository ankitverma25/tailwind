import React from 'react'
import {Thermometer,Droplets,Cloud,Wind,MapPinned} from 'lucide-react'
import useWeather from '../context/Context'


function Currentcard() {

    const {info}=useWeather();


  return (
           <div className="animate-zoom-in bg-white rounded-xl shadow-lg p-6 w-full max-w-md m-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800"><MapPinned />{info.name}</h2>
          <p className="text-gray-600 mt-1">{info.weather[0].description}</p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`}
          alt={info.weather[0].description}
          className="w-20 h-20"
        />
      </div>
      <div className="text-5xl font-bold text-gray-800 mb-8">
        {Math.round(info.main.temp)}°C
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <Thermometer className="text-blue-500" />
          <div>
            <p className="text-sm text-gray-600">Feels like</p>
            <p className="font-semibold">{Math.round(info.main.feels_like)}°C</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Droplets className="text-blue-500" />
          <div>
            <p className="text-sm text-gray-600">Humidity</p>
            <p className="font-semibold">{info.main.humidity}%</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Wind className="text-blue-500" />
          <div>
            <p className="text-sm text-gray-600">Wind Speed</p>
            <p className="font-semibold">{info.wind.speed} m/s</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Cloud className="text-blue-500" />
          <div>
            <p className="text-sm text-gray-600">Pressure</p>
            <p className="font-semibold">{info.main.pressure} hPa</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Currentcard