import React from 'react'
import { Input, Forecast } from './components'
import { withRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Input} />
      <Route path="/forecast" component={Forecast} />
    </Switch>
  )
}

// The withRouter wrapper makes sure that updates are not blocked when the url changes
export default withRouter(App)
