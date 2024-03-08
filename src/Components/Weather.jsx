import React, { useState } from 'react'
import './Weather.css'
import searchicon from '../Assets/search.png'
import clearicon from '../Assets/clear.png'
import cloudicon from '../Assets/cloud.png'
import drizzleicon from '../Assets/drizzle.png'
import rainicon from '../Assets/rain.png'
import snowicon from '../Assets/snow.png'
import windicon from '../Assets/wind.png'
import humidityicon from '../Assets/humidity.png'

export const Weather = () => {
   
    let api_key = "8925e014bb7aff2c5cdcb5274ab4c3ef";
    const [wicon, setwicon] = useState(cloudicon);

    const search  = async () => {
         const element = document.getElementsByClassName("cityInput")
         if(element[0].value===""){
            return 0;
         }
        
         let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&unit=Metric&appid=${api_key}`;  
         
         let response = await fetch(url);
         let data = await response.json();
         const humidity = document.getElementsByClassName("humidity-percent");
         const wind = document.getElementsByClassName("wind-rate")
         const temperature = document.getElementsByClassName("weather-temp");
         const location = document.getElementsByClassName("weather-location");

         humidity[0].innerHTML = data.main.humidity + "%";
         wind[0].innerHTML = data.wind.speed + "km/hr";
         temperature[0].innerHTML = +
         +99+3+9
         +data.main.temp + "K";
         location[0].innerHTML = data.name;

         if(data.weather[0].icon==='01d' ||data.weather[0].icon==='01n' ){
            setwicon(clearicon);
         }
         else if(data.weather[0].icon==='02d' ||data.weather[0].icon==='02n' ){
            setwicon(cloudicon);
         }
         else if(data.weather[0].icon==='03d' ||data.weather[0].icon==='03n' ){
            setwicon(drizzleicon);
         }
         else if(data.weather[0].icon==='09d' ||data.weather[0].icon==='09n' ){
            setwicon(rainicon);
         }
         else if(data.weather[0].icon==='13d' ||data.weather[0].icon==='13n' ){
            setwicon(snowicon);
         }
         else{
            setwicon(cloudicon)
         }
    }

  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className='cityInput' placeholder='search'/>
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={searchicon} alt="" />
            </div>
        </div>
        <div className="weather-image">
            <img src={wicon} alt="" />
        </div>
        <div className="weather-temp">24°C</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidityicon} alt="" className='icon'/>
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={windicon} alt="" className='icon'/>
                <div className="data">
                    <div className="wind-rate">18 km/h</div>
                    <div className="text">Wind Speeed</div>
                </div>
            </div>
        </div>
    </div>
  )
}
