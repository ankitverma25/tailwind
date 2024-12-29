import { createContext, useContext } from "react";

const Weatherapi = createContext({
    info: null,
    forecastdata: null,
    api_key: '',
    searchdata: null,
    searchforecast: null,
    searchcity: '',
    err: '',
    loading: false,
    hide: false,
    setinfo: () => {},
    setforecastdata: () => {},
    setsearchdata: () => {},
    setsearchforecast: () => {},
    setsearchCity: () => {},
    seterr: () => {},
    setloading: () => {},
    sethide: () => {}
})

export const WeatherProvider = ({ children, value }) => {
    return <Weatherapi.Provider value={value}>{children}</Weatherapi.Provider>;
};

export default function useWeather() {
    return useContext(Weatherapi);
}