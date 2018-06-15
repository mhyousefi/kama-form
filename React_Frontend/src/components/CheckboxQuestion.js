import React, { Component } from 'react'
import '../css/main.css'
import '../css/texts.css'
import '../css/util.css'

export default class CheckboxQuestion extends Component {
  _onChange = (e) => {
    const {handleCheckboxChange} = this.props
    handleCheckboxChange(e.target.value, e.target.checked)
  }

  render () {
    const {questionTxt, answers} = this.props
    return (
      <div>
        <span className="contact3-form-text-question fs-24">
          {questionTxt}
        </span>

        <div className="wrap-contact3-form-radio m-r-42">
          {answers.map((answer, index) => (
            <div className="contact3-form-radio m-r-42" key={index}>
              <input
                className="input-radio3"
                type="checkbox"
                id={`checkbox-${questionTxt}-${answer}`}
                value={answer}
                onChange={this._onChange}
              />
              <label className="label-radio3 contact3-form-text-answer fs-18" htmlFor={`checkbox-${questionTxt}-${answer}`}>
                {answer}
              </label>
            </div>
          ))}
        </div>
      </div>
    )
  }
}