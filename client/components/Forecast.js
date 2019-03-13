import React, { useContext } from 'react'
import { StoreContext } from '../store'

const Forecast = props => {
  //Grabs forecast from context
  const context = useContext(StoreContext)
  const { forecast } = context

  const today = forecast.consolidated_weather
    ? forecast.consolidated_weather[0]
    : ''

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
                <h1>here goes img</h1>
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
              const min = Math.round(day.min_temp)
              const max = Math.round(day.max_temp)
              return (
                <div>
                  <h2>{day.applicable_date.slice(0, 4)}</h2>
                  <div>
                    <h3>{min}°</h3>
                    <h3>{max}°</h3>
                    <h3>{day.weather_state_name}</h3>
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
