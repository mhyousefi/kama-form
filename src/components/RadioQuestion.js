import React, { Component } from 'react'
import '../css/main.css'
import '../css/texts.css'
import '../css/util.css'

export default class  extends Component {
  _onRadioClick = (e) => {
    const { handleRadioChange } = this.props
    handleRadioChange(e.target.value)
  }

  render () {
    const {questionTxt, answers} = this.props
    return (
      <div>
        <span className="contact3-form-text-question">
          {questionTxt}
        </span>

        <div className="wrap-contact3-form-radio">
          {answers.map((answer, index) => (
            <div className="contact3-form-radio m-r-42">
              <input
                className="input-radio3"
                type="radio"
                id={'radio-' + index}
                name={'choice'}
                onChange={this._onRadioClick}
                value={answer}
              />
              <label className="label-radio3 contact3-form-text-answer" for={'radio-' + index}>
                {answer}
              </label>
            </div>
          ))}
        </div>
      </div>
    )
  }
}