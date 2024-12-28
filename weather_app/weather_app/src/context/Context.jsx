import { createContext, useContext } from "react";


const Weatherapi=createContext({
    info:'null',
    forecastdata:'null',
    api_key:'',
    searchdata:'',
    
})

export const WeatherProvider = ({ children, value }) => {
    return <Weatherapi.Provider value={value}>{children}</Weatherapi.Provider>;
  };
  
export default function useWeather(){
     return useContext(Weatherapi);
}