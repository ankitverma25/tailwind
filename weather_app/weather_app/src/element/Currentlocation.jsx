import React, { useEffect, useState } from 'react'
import useWeather from '../context/Context'
import Currentcard from '../components/Currentcard';

function Currentlocation() {
    const { api_key } = useWeather();
    const [city,setcity]=useState('');
    const {info,setinfo}=useWeather();
    const[errormsg,seterrormsg]=useState('')
    
        const fetchweather= async (latitude, longitude, api_key) => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`);
                
                if (!response.ok) {
                    console.log('error')
                    throw new Error('Network response was not ok')
                }
                const data = await response.json();

                setinfo(data)
                console.log(data)

                console.log("get weather location ", data.name);
                setcity(data.name)
                
            }
            catch (error) {
                console.log(error)
                seterror(errormsg.message)
            }
        }
        
    const error = (e) => {
        console.log(e);
        seterrormsg('please enable location service')

        
    }

        
    const success = (pos) => {
        const loc = pos.coords;
        const latitude=loc.latitude;
        const longitude=loc.longitude ;

        fetchweather(latitude,longitude,api_key)
      

    }
    
    
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(success, error);
    }, [])
    


    return (
        <>
        {/* <div className="animate-zoom-in p-5 bg-slate-300 m-3" id="location"> */}
        {errormsg ? (
          <p className="text-red-500 text-center">{errormsg}</p>
        ) : city ? (
          <Currentcard/>
         
        ) : (
            <p className="text-gray-400 text-center">Fetching location...</p>
        )}
      {/* </div> */}
  
            </>
    )

}

export default Currentlocation