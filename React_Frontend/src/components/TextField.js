import React, { Component } from 'react'
import '../css/main.css'
import '../css/texts.css'
import '../css/util.css'

export default class TextField extends Component {
  _onTextChange = (e) => {
    const { handleTxtChange } = this.props
    handleTxtChange(e.target.value)
  }

  render () {
    const { placeholder } = this.props
    return (
      <div className="wrap-input3 validate-input" data-validate="Name is required">
        <input
          className="input3"
          type="text"
          name="name"
          placeholder={placeholder}
          onChange={this._onTextChange}
        />
        <span className="focus-input3"></span>
      </div>
    )
  }
}