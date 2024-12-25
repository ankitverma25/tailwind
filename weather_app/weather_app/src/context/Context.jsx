import { createContext, useContext } from "react";


const Weatherapi=createContext({
    weatherData:'sunny',
    forecastdata:'sunny',
})

export const WeatherProvider = ({ children, value }) => {
    return <Weatherapi.Provider value={value}>{children}</Weatherapi.Provider>;
  };
  
export default function useWeather(){
     return useContext(Weatherapi);
}