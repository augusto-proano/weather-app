import React, { useContext } from 'react'
import { StoreContext } from '../store'
import { weatherIcons, toCamelCase } from './utils'

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
        <div>
          <div>
            <div>
              <div>
                <h3>{forecast.time}</h3>
                <h2>{forecast.title}</h2>
                <h1>{today.the_temp}</h1>
              </div>
              <div>
                <i className={weatherIcons[todaysWeatherState]} />
                <h3>{today.weather_state_name}</h3>
              </div>
            </div>
            <div>
              <h3>Humidity: {today.humidity}%</h3>
              <h3>Air Pressure: {today.air_pressure} MB</h3>
              <h3>Wind: {today.wind_speed} MPH</h3>
              <h3>Sunrise: {forecast.sun_rise}</h3>
              <h3>Sunset: {forecast.sun_set}</h3>
            </div>
          </div>
          <div>
            {forecast.consolidated_weather.map(day => {
              const { min_temp, max_temp, weather_state_name } = day

              const min = Math.round(min_temp)
              const max = Math.round(max_temp)
              const weatherState = toCamelCase(weather_state_name)
              return (
                <div>
                  <h2>{day.applicable_date.slice(0, 4)}</h2>
                  <div>
                    <h3>{min}°</h3>
                    <h3>{max}°</h3>
                    <i className={weatherIcons[weatherState]} />
                    <h3>{day.weather_state_name}</h3>
                  </div>
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
