import React, { Component } from 'react'
import '../css/main.css'
import '../css/texts.css'
import '../css/util.css'

export default class CheckboxQuestion extends Component {
  _onChange = (e) => {
    const { handleCheckboxChange } = this.props
    handleCheckboxChange(e.target.value, e.target.checked)
  }

  render() {
    const { questionTxt, answers } = this.props
    return (
      <div>
        <span className="contact3-form-text-question">
          {questionTxt}
        </span>

        {answers.map((answer, index) => (
          <div className="wrap-contact3-form-radio m-r-42">
            <div className="contact3-form-radio m-r-42">
              <input
                className="input-radio3"
                type="checkbox"
                id={"checkbox-" + answer}
                value={answer}
                onChange={this._onChange}
              />
              <label className="label-radio3 contact3-form-text-answer" for={"checkbox-" + answer}>
                {answer}
              </label>
            </div>
          </div>
        ))}
      </div>
    )
  }
}