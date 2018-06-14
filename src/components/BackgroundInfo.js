import React, { Component } from 'react'
import QuestionInfo from '../utils/QuestionInfo'
import PersianDict from '../utils/PersianDict'
import RadioQuestion from './RadioQuestion'
import TextField from './TextField'

export default class BackgroundInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hasExperience: false,
    }
  }

  _handleHasExperienceChange = (newValue) => {
    const newHasExperience = newValue === PersianDict['yes']
    this.setState({hasExperience: newHasExperience})
    const { handleHasExperienceChange } = this.props
    handleHasExperienceChange(newHasExperience)
  }

  _handleExperienceDetailsChange = (newValue) => {
    const { handleExperienceDetailChange } = this.props
    handleExperienceDetailChange(newValue)
  }

  render () {
    const {question, answers} = QuestionInfo['teaching experience']
    return (
      <div>
        <RadioQuestion
          questionTxt={question}
          answers={answers}
          handleRadioChange={this._handleHasExperienceChange}
        />

        <br/>

        {this.state.hasExperience && <TextField
          placeholder={PersianDict['more info']}
          handleChange={this._handleExperienceDetailsChange}
        />}

        <br/><br/>

        <span className='contact3-form-text-question fs-22 text-right'>
          {PersianDict['send your resume']}
        </span>

        <br/>

        <label className="custom-file">
          <input type="file" id="file" className="custom-file-input"/>
          <span className="custom-file-control"></span>
        </label>

        <br/><br/>

        <span className='contact3-form-text-question fs-20 text-right'>
          {PersianDict['file should include']}
        </span>

        <br/>

        <span className='contact3-form-text-answer fs-16 rtl m-r-20'>
          {PersianDict['specs description']}
        </span>

        <br/>

        <span className='contact3-form-text-answer fs-16 rtl m-r-20'>
          {PersianDict['background description']}
        </span>
      </div>
    )
  }
}