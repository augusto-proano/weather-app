import React, { useState, useContext } from 'react'
import axios from 'axios'
import history from '../history'
import { StoreContext } from '../store'

const Input = () => {
  //States and setStates func
  const [location, setLocation] = useState('')
  const [token, setToken] = useState('')

  // Grabs setForecast func from context
  const context = useContext(StoreContext)
  const { setForecast } = context

  //Adds token to headers requests
  axios.defaults.headers.common['access-token'] = token
    ? token
    : sessionStorage.getItem('token')
  console.log(token)

  //Handles locaion input from user
  const handleLocationInput = e => {
    const { value } = e.target
    setLocation(value)
  }

  //Handles manuel token input from user
  const handleTokenInput = e => {
    const { value } = e.target
    setToken(value)
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

  const getToken = async () => {
    try {
      const credential = 'helloworld'
      const res = await axios.post('/auth', { credential })
      const token = res.data

      //Stores token in localStorage and localState
      sessionStorage.setItem('token', token)
      setToken(token)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div id="input">
      <h1>WEATHER FORECAST</h1>
      <h2>ENTER CITY OR ZIP CODE</h2>
      <input id="input-location" onChange={handleLocationInput} />
      <div id="input-token">
        <h2>Token:</h2>
        <input onChange={handleTokenInput} value={token} />
        <button onClick={getToken}>Free Token</button>
      </div>
      <button onClick={fetchForecast}>Forecast</button>
    </div>
  )
}

export default Input
