import React, { useContext } from 'react'
import { StoreContext } from '../store'
import { weatherIcons, toCamelCase, currentDay } from './utils'
console.log(currentDay)

const Forecast = () => {
  //Grabs forecast from context
  const context = useContext(StoreContext)
  const { forecast } = context

  //Today's forecast
  const today = forecast.consolidated_weather
    ? forecast.consolidated_weather[0]
    : ''
  const todaysWeatherState = forecast.consolidated_weather
    ? toCamelCase(today.weather_state_name)
    : ''

  console.log('FORECAST', forecast)
  return (
    <div>
      {forecast.consolidated_weather ? (
        <div id="forecast">
          <div id="forecast-today">
            <div id="forecast-today-temp">
              <div id="temp-info">
                <h3>{currentDay}</h3>
                <h2>{forecast.title}</h2>
                <h1>{Math.round(today.the_temp)}°C</h1>
              </div>
              <i id="temp-icon" className={weatherIcons[todaysWeatherState]} />
            </div>
            <div id="forecast-today-details">
              <h3>Humidity: {today.humidity}%</h3>
              <h3>Air Pressure: {today.air_pressure.toFixed(1)} MB</h3>
              <h3>Wind: {Math.round(today.wind_speed)} MPH</h3>
              <h3>Sunrise: {forecast.sun_rise.slice(0, 7)}</h3>
              <h3>Sunset: {forecast.sun_set.slice(0, 7)}</h3>
            </div>
          </div>
          <div id="forecast-week">
            {forecast.consolidated_weather.map(day => {
              const { min_temp, max_temp, weather_state_name, id } = day

              const min = Math.round(min_temp)
              const max = Math.round(max_temp)
              const weatherState = toCamelCase(weather_state_name)
              return (
                <div id="forecast-week-day" key={id}>
                  <h2>SUN</h2>
                  <div id="forecast-week-day-temps">
                    <h3>{min}°</h3>
                    <h3>{max}°</h3>
                  </div>
                  <i className={weatherIcons[weatherState]} />
                  <h3>{day.weather_state_name}</h3>
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <img src="https://www.ubykotex.com/Assets/images/loading-image.gif" />
      )}
    </div>
  )
}

export default Forecast
