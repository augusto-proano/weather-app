import React, { useState } from 'react'
import axios from 'axios'

const Input = () => {
  //State Hooks
  const [location, setLocation] = useState('')
  const [forecast, setForecast] = useState({})

  const handleLocation = e => {
    const { value } = e.target
    setLocation(value)
  }
  const fetchForecast = async () => {
    try {
      const res = await axios.post('/api/forecast', { location })
    setForecast(res.data)
    console.log('RES', res.data)
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div>
      <h1>Weather 7 Days Forecast</h1>
      <h2>Input your city or zip code</h2>
      <input onChange={handleLocation} />
      <div>
        <h2>Token:</h2>
        <input />
        <button>Free Token</button>
      </div>
      <button onClick={fetchForecast}>Forecast</button>
    </div>
  )
}

export default Input
