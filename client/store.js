import React, { createContext, useState } from 'react'

export const StoreContext = createContext()

export const StoreProvider = props => {
  //State and setState func
  const [forecast, setForecast] = useState({})

  return (
    <StoreContext.Provider value={{ forecast, setForecast }}>
      {props.children}
    </StoreContext.Provider>
  )
}
