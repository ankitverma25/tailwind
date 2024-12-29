import React, { useState } from 'react'
import { Search } from 'lucide-react'
import useWeather from '../context/Context'
import Searchcard from './Searchcard';

function Searchbar() {
    const {sethide,loading,setloading,err,seterr,searchcity, setsearchCity,searchdata, setsearchdata ,api_key} = useWeather();

    const handlesubmit=(e)=>{
        e.preventDefault()
        if (searchcity.trim()) {
            console.log(searchcity)
            setsearchdata(null); // Reset search data
            fetchweather(searchcity)
            setsearchCity('')        
        }
    }

    const fetchweather=async(city)=>{ 
        try {
            setloading(true)
            seterr('')
            sethide(false)

            const weather=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`)

            const weatherdata=await weather.json()

            if (weatherdata.cod !== 200 ) {
                throw new Error('City not found');
            }
            setsearchdata(weatherdata);
            console.log(weatherdata);
        } catch (error) {
            seterr('City not found')
            console.log(err)
        } finally {
            setloading(false)
        }    
    }

    const handlechange=(e)=>{
        setsearchCity(e.target.value)
    }

    return (
        <>
        <form onSubmit={handlesubmit}>
            <div className="flex flex-col justify-center items-center">
                <p className="text-zinc-900 font-bold pl-4 pr-3 text-center">Enter a city name to get the current weather and 5-day forecast</p>
                <br />
                <div className='flex flex-row gap-2 bg-slate-100 m-2 rounded-2xl p-1 w-[90%] md:w-[37%] focus-within:ring-2 focus-within:ring-blue-600'>
                    <Search className='text-blue-600'/>
                    <input type="text" className=' w-[90%] outline-none bg-slate-100' placeholder='Enter city name...' value={searchcity} onChange={handlechange}/>
                </div>
            </div>
        </form>
        <br />
      
        </>
    )
}

export default Searchbar