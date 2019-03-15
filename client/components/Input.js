import React, { useState, useContext } from 'react'
import axios from 'axios'
import history from '../history'
import { StoreContext } from '../store'

const Input = () => {
  //States and setStates func
  const [location, setLocation] = useState('')
  const [token, setToken] = useState('')
  const [validation, setValidation] = useState('')

  // Grabs setForecast func from context
  const context = useContext(StoreContext)
  const { setForecast } = context

  //Adds token to headers requests
  const accessToken = token ? token : sessionStorage.getItem('token')
  axios.defaults.headers.common['access-token'] = accessToken

  //Handles locaion input from user
  const handleLocationInput = e => {
    const { value } = e.target
    setLocation(value)
  }

  //Handles manual token input from user
  const handleTokenInput = e => {
    const { value } = e.target
    setToken(value)
  }

  const fetchForecast = async () => {
    try {
      //Gets city's name if zipcode is given
      let newCity = ''
      if (!isNaN(Number(location))) {
        const res = await axios.post('/api/zipcodes', { location })
        newCity = res.data
      }

      //Retrieves forecast
      const city = !isNaN(Number(location)) ? newCity : location
      const res = await axios.post('/api/forecast', { city })
      console.log("RES", res.data)
      //Validations
      if (res.data === 'Invalid Token' || res.data === 'Location Not Found')
        setValidation(res.data)
      else {
        setForecast(res.data)
        history.push('/forecast')
      }
    } catch (err) {
      
      setValidation('Invalid Token')
      console.log("EEEEEEEEE", err)
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
      <input
        id="input-location"
        value={location}
        onChange={handleLocationInput}
      />
      <div id="input-token">
        <h2>Token:</h2>
        <input onChange={handleTokenInput} value={accessToken} />
        <button onClick={getToken}>Free Token</button>
      </div>
      <button onClick={fetchForecast}>Forecast</button>
      {validation ? <h3 className="alert">{validation}</h3> : <></>}
    </div>
  )
}

export default Input
