import React, { useState, useContext } from 'react'
import axios from 'axios'
import history from '../history'
import { StoreContext } from '../store'

const Input = () => {
  //State and setState func
  const [location, setLocation] = useState('')

  // Grabs setForecast func from context
  const context = useContext(StoreContext)
  const { setForecast } = context

  //Updates location on state
  const handleInput = e => {
    const { value } = e.target
    setLocation(value)
  }

  const fetchForecast = async () => {
    try {
      history.push('/forecast')
      const res = await axios.post('/api/forecast', { location })
      setForecast(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div id="input">
      <h1>WEATHER FORECAST</h1>
      <h2>ENTER CITY OR ZIP CODE</h2>
      <input id="input-location" onChange={handleInput} />
      <div id="input-token">
        <h2>Token:</h2>
        <input />
        <button>Free Token</button>
      </div>
      <button onClick={fetchForecast}>Forecast</button>
    </div>
  )
}

export default Input
