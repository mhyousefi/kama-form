import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import FormPage from './pages/FormPage'


class App extends Component {
  constructor (props) {
      super(props)
  }

  _renderFormPage = () => {
    return (
      <FormPage/>
    )
  }

  render () {
    return (
      <Switch>
        <Route
          path="/"
          render={this._renderFormPage}
        />
      </Switch>
    )
  }
}

export default App

