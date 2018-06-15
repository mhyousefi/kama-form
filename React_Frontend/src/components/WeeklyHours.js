import React, { Component } from 'react'
import PersianDict from '../utils/PersianDict'
import '../css/main.css'
import '../css/texts.css'
import '../css/util.css'
import TextField from './TextField'

const weekDays = ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday']

export default class WeeklyHours extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sat: false,
      sun: false,
      mon: false,
      tue: false,
      wed: false,
      thu: false,
    }
  }

  _onSatClick = (e) => {
    this.setState({sat: e.target.checked})
  }

  _onSunClick = (e) => {
    this.setState({sun: e.target.checked})
  }

  _onMonClick = (e) => {
    this.setState({mon: e.target.checked})
  }

  _onTueClick = (e) => {
    this.setState({tue: e.target.checked})
  }

  _onWedClick = (e) => {
    this.setState({wed: e.target.checked})
  }

  _onThuClick = (e) => {
    this.setState({thu: e.target.checked})
  }

  _onSatHoursChange = (newValue) => {
    this.props.handleWeeklyHoursChange(0, newValue)
  }

  _onSunHoursChange = (newValue) => {
    this.props.handleWeeklyHoursChange(1, newValue)
  }

  _onMonHoursChange = (newValue) => {
    this.props.handleWeeklyHoursChange(2, newValue)
  }

  _onTueHoursChange = (newValue) => {
    this.props.handleWeeklyHoursChange(3, newValue)
  }

  _onWedHoursChange = (newValue) => {
    this.props.handleWeeklyHoursChange(4, newValue)
  }

  _onThuHoursChange = (newValue) => {
    this.props.handleWeeklyHoursChange(5, newValue)
  }

  render () {
    return (
      <div>
        <span className='contact3-form-text-question'>
          {PersianDict['your available days']}
        </span>

        <div className="wrap-contact3-form-radio m-r-42">
          <div className="contact3-form-radio m-r-42">
            <input
              className="input-radio3"
              type="checkbox"
              id={`checkbox-0-${weekDays[0]}`}
              value={weekDays[0]}
              onChange={this._onSatClick}
            />
            <label className="label-radio3 contact3-form-text-answer" htmlFor={`checkbox-0-${weekDays[0]}`}>
              {PersianDict[weekDays[0]]}
            </label>
          </div>
        </div>

        {this.state.sat && <TextField
          placeholder={PersianDict['hours available']}
          handleTxtChange={this._onSatHoursChange}
        />}

        <div className="wrap-contact3-form-radio m-r-42">
          <div className="contact3-form-radio m-r-42">
            <input
              className="input-radio3"
              type="checkbox"
              id={`checkbox-1-${weekDays[1]}`}
              value={weekDays[1]}
              onChange={this._onSunClick}
            />
            <label className="label-radio3 contact3-form-text-answer" htmlFor={`checkbox-1-${weekDays[1]}`}>
              {PersianDict[weekDays[1]]}
            </label>
          </div>
        </div>

        {this.state.sun && <TextField
          placeholder={PersianDict['hours available']}
          handleTxtChange={this._onSunHoursChange}
        />}

        <div className="wrap-contact3-form-radio m-r-42">
          <div className="contact3-form-radio m-r-42">
            <input
              className="input-radio3"
              type="checkbox"
              id={`checkbox-2-${weekDays[2]}`}
              value={weekDays[2]}
              onChange={this._onMonClick}
            />
            <label className="label-radio3 contact3-form-text-answer" htmlFor={`checkbox-2-${weekDays[2]}`}>
              {PersianDict[weekDays[2]]}
            </label>
          </div>
        </div>

        {this.state.mon && <TextField
          placeholder={PersianDict['hours available']}
          handleTxtChange={this._onMonHoursChange}
        />}

        <div className="wrap-contact3-form-radio m-r-42">
          <div className="contact3-form-radio m-r-42">
            <input
              className="input-radio3"
              type="checkbox"
              id={`checkbox-3-${weekDays[3]}`}
              value={weekDays[3]}
              onChange={this._onTueClick}
            />
            <label className="label-radio3 contact3-form-text-answer" htmlFor={`checkbox-3-${weekDays[3]}`}>
              {PersianDict[weekDays[3]]}
            </label>
          </div>
        </div>

        {this.state.tue && <TextField
          placeholder={PersianDict['hours available']}
          handleTxtChange={this._onTueHoursChange}
        />}

        <div className="wrap-contact3-form-radio m-r-42">
          <div className="contact3-form-radio m-r-42">
            <input
              className="input-radio3"
              type="checkbox"
              id={`checkbox-4-${weekDays[4]}`}
              value={PersianDict[weekDays[4]]}
              onChange={this._onWedClick}
            />
            <label className="label-radio3 contact3-form-text-answer" htmlFor={`checkbox-4-${weekDays[4]}`}>
              {PersianDict[weekDays[4]]}
            </label>
          </div>
        </div>

        {this.state.wed && <TextField
          placeholder={PersianDict['hours available']}
          handleTxtChange={this._onWedHoursChange}
        />}

        <div className="wrap-contact3-form-radio m-r-42">
          <div className="contact3-form-radio m-r-42">
            <input
              className="input-radio3"
              type="checkbox"
              id={`checkbox-5-${weekDays[5]}`}
              value={PersianDict[weekDays[5]]}
              onChange={this._onThuClick}
            />
            <label className="label-radio3 contact3-form-text-answer" htmlFor={`checkbox-5-${weekDays[5]}`}>
              {PersianDict[weekDays[5]]}
            </label>
          </div>
        </div>

        {this.state.thu && <TextField
          placeholder={PersianDict['hours available']}
          handleTxtChange={this._onThuHoursChange}
        />}
      </div>
    )
  }
}