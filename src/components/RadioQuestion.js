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
        <span className="contact3-form-text-question fs-24">
          {questionTxt}
        </span>

        <div className="wrap-contact3-form-radio">
          {answers.map((answer, index) => (
            <div className="contact3-form-radio m-r-42">
              <input
                className="input-radio3"
                type="radio"
                id={`radio-${questionTxt}-${index}`}
                name={'choice'}
                onChange={this._onRadioClick}
                value={answer}
              />
              <label className="label-radio3 contact3-form-text-answer fs-18" for={`radio-${questionTxt}-${index}`}>
                {answer}
              </label>
            </div>
          ))}
        </div>
      </div>
    )
  }
}