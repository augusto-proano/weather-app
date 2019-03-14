import React, { useContext } from 'react'
import { StoreContext } from '../store'
import { weatherIcons, toCamelCase, currentDay, weekDays } from './utils'

const Forecast = () => {
  //Grabs forecast from context
  const context = useContext(StoreContext)
  const { forecast } = context

  //Today's forecast variables
  const today = forecast.consolidated_weather
    ? forecast.consolidated_weather[0]
    : ''
  const todaysWeatherState = forecast.consolidated_weather
    ? toCamelCase(today.weather_state_name)
    : ''
  const sunRise = forecast.sun_rise
    ? `${forecast.sun_rise.slice(11, 16)} AM`
    : ''
  const sunSet = forecast.sun_set ? `${forecast.sun_set.slice(11, 16)} PM` : ''

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
              <div>
                <h2>Humidity: </h2>
                <h3> {today.humidity}%</h3>
              </div>
              <div>
                <h2>Air Pressure:</h2>
                <h3> {today.air_pressure.toFixed(1)} MB</h3>
              </div>
              <div>
                <h2>Wind:</h2>
                <h3> {Math.round(today.wind_speed)} MPH</h3>
              </div>
              <div>
                <h2>Sunrise:</h2>
                <h3> {sunRise}</h3>
              </div>
              <div>
                <h2>Sunset:</h2>
                <h3> {sunSet}</h3>
              </div>
            </div>
          </div>
          <div id="forecast-week">
            {forecast.consolidated_weather.map(day => {
              const {
                min_temp,
                max_temp,
                weather_state_name,
                applicable_date,
                id
              } = day

              //Gets weekdays initials
              const date = new Date(applicable_date)
              const weekDay = weekDays[date.getDay()].slice(0, 3).toUpperCase()

              const min = Math.round(min_temp)
              const max = Math.round(max_temp)
              const weatherState = toCamelCase(weather_state_name)

              return (
                <div id="forecast-week-day" key={id}>
                  <h2>{weekDay}</h2>
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
        <img id="loading-img" src="/img/loading-image.gif" />
      )}
    </div>
  )
}

export default Forecast
