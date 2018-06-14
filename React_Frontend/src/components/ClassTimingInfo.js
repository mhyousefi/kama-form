import React, { Component } from 'react'
import PersianDict from '../utils/PersianDict'
import QuestionInfo from '../utils/QuestionInfo'
import TextField from './TextField'
import WeeklyHours from './WeeklyHours'
import '../css/main.css'
import '../css/texts.css'
import '../css/util.css'

export default class ClassTimingInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isWeekly: false,
      isWorkshop: false,
    }
  }

  _onIsWeeklyChange = (e) => {
    this.setState({isWeekly: e.target.checked})
    const { handleIsWeeklyChange } = this.props
    handleIsWeeklyChange(e.target.checked)
  }

  _onIsWorkshopChange = (e) => {
    this.setState({isWorkshop: e.target.checked})
    const { handleIsWorkshopChange } = this.props
    handleIsWorkshopChange(e.target.checked)
  }

  _handleWorkShopDurationChange = (newValue) => {
    const {handleWorkshopDurationChange} = this.props
    handleWorkshopDurationChange(newValue)
  }

  render () {
    const { question, answers } = QuestionInfo['class timing']
    const { handleWeeklyHoursChange } = this.props
    return (
      <div>
        <span className="contact3-form-text-question fs-24">
          {question}
        </span>

        <div className="wrap-contact3-form-radio m-r-42">
          <div className="contact3-form-radio m-r-42">
            <input
              className="input-radio3"
              type="checkbox"
              id={'checkbox-' + answers[0]}
              value={answers[0]}
              onChange={this._onIsWeeklyChange}
            />
            <label className="label-radio3 contact3-form-text-answer fs-18 text-grey" htmlFor={'checkbox-' + answers[0]}>
              {answers[0]}
            </label>
          </div>

          {this.state.isWeekly && <WeeklyHours
            handleWeeklyHoursChange={handleWeeklyHoursChange}
          />}

          <br/>

          <div className="contact3-form-radio m-r-42">
            <input
              className="input-radio3"
              type="checkbox"
              id={'checkbox-' + answers[1]}
              value={answers[1]}
              onChange={this._onIsWorkshopChange}
            />
            <label className="label-radio3 contact3-form-text-answer fs-18 text-grey" htmlFor={'checkbox-' + answers[1]}>
              {answers[1]}
            </label>
          </div>

          {this.state.isWorkshop && <TextField
            placeholder={PersianDict['workshop duration']}
            handleTxtChange={this._handleWorkShopDurationChange}
          />}
        </div>
      </div>
    )
  }
}