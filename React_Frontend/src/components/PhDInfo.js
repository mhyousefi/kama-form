import React, { Component } from 'react'
import TextField from './TextField'
import PersianDict from '../utils/PersianDict'
import '../css/main.css'
import '../css/texts.css'
import '../css/util.css'


export default class PhDInfo extends Component {
  render() {
    const { handleIdChange, handleClassChange, handleInfoChange } = this.props
    return (
      <div>
        <span className="contact3-form-text-question">
          {PersianDict['phd info']}
        </span>
        <br/>
        <TextField
          placeholder={PersianDict['student id']}
          handleTxtChange={handleIdChange}
        />
        <TextField
          placeholder={PersianDict['class']}
          handleTxtChange={handleClassChange}
        />
        <TextField
          placeholder={PersianDict['more info']}
          handleTxtChange={handleInfoChange}
        />
      </div>
    )
  }
}