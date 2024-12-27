import React from 'react'
import Currentlocation from './Currentlocation'
import Forecast from '../components/Forecast'

function Weatherapp() {
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
                <div className=" flex flex-wrap ">
                <Currentlocation/>
                <Forecast/>


                </div>

            
            </div>



        </>
    )
}

export default Weatherapp