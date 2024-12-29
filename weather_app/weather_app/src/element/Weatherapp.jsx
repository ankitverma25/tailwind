import React from 'react'
import Currentlocation from './Currentlocation'
import Forecast from '../components/Forecast'
import Searchbar from '../components/Searchbar'
import Searchcard from '../components/Searchcard'
import useWeather from '../context/Context'
import Searchforecast from '../components/Searchforecast'

function Weatherapp() {
    const { loading, err, searchdata } = useWeather();
    return (
        <>
            <div className="bg-gradient-to-bl from-blue-100 to-blue-300 min-h-screen" id='bg'>

                <div className=" flex gap-2 lg:gap-8 justify-center items-center" id="iconbody">
                    <lord-icon
                        src="https://cdn.lordicon.com/xvuzxnig.json"
                        trigger="loop"
                        stroke="bold"
                        state="loop-cycle"
                        style={{ width: '80px', height: '80px' }}>
                    </lord-icon>

                    <h1 className="text-2xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-black to-blue-800 ">WEATHER FORECAST</h1>
                </div>
                <Searchbar/>     
                <div className=" flex flex-wrap md:flex-col">

                {loading && <p className="text-blue-500 text-center">Loading...</p>}
                {err && <p className="text-red-500 text-center">{err}</p>}
                {searchdata && <Searchcard />}
                <Currentlocation/>
                <Forecast/>
            


                </div>
            </div>



        </>
    )
}

export default Weatherapp