import React, { Component } from 'react'
import QuestionInfo from '../utils/QuestionInfo'
import BachelorInfo from './BachelorInfo'
import MasterInfo from './MasterInfo'
import PhDInfo from './PhDInfo'

export default class CollegeEduInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      bachelorChecked: false,
      masterChecked: false,
      phdChecked: false,
    }
  }

  _onBachelorChange = (e) => {
    this.setState({bachelorChecked: e.target.checked})
    const { handleStudyLevelChange } = this.props
    handleStudyLevelChange(e.target.value, e.target.checked)
  }

  _onMasterChange = (e) => {
    this.setState({masterChecked: e.target.checked})
    const { handleStudyLevelChange } = this.props
    handleStudyLevelChange(e.target.value, e.target.checked)
  }

  _onPhdChange = (e) => {
    this.setState({phdChecked: e.target.checked})
    const { handleStudyLevelChange } = this.props
    handleStudyLevelChange(e.target.value, e.target.checked)
  }

  render () {
    const {question, answers} = QuestionInfo['study level']
    const { handleBachelorIdChange, handleBachelorClassChange,
            handleMasterIdChange, handleMasterClassChange, handleMasterInfoChange,
            handlePhdIdChange, handlePhdClassChange, handlePhdInfoChange } = this.props

    return (
      <div>
        <span className="contact3-form-text-question">
          {question}
        </span>

        <div className="wrap-contact3-form-radio m-r-42">
          <div className="contact3-form-radio m-r-42">
            <input
              className="input-radio3"
              type="checkbox"
              id='checkbox-0'
              value={answers[0]}
              onChange={this._onBachelorChange}
            />
            <label className="label-radio3 contact3-form-text-answer" htmlFor='checkbox-0'>
              {answers[0]}
            </label>
          </div>


          {this.state.bachelorChecked && <BachelorInfo
            handleIdChange={handleBachelorIdChange}
            handleClassChange={handleBachelorClassChange}
          />}

          <br/><br/>

          <div className="contact3-form-radio m-r-42">
            <input
              className="input-radio3"
              type="checkbox"
              id='checkbox-1'
              value={answers[1]}
              onChange={this._onMasterChange}
            />
            <label className="label-radio3 contact3-form-text-answer" htmlFor='checkbox-1'>
              {answers[1]}
            </label>
          </div>

          {this.state.masterChecked && <MasterInfo
            handleIdChange={handleMasterIdChange}
            handleClassChange={handleMasterClassChange}
            handleInfoChange={handleMasterInfoChange}
          />}

          <br/><br/>

          <div className="contact3-form-radio m-r-42">
            <input
              className="input-radio3"
              type="checkbox"
              id='checkbox-2'
              value={answers[2]}
              onChange={this._onPhdChange}
            />
            <label className="label-radio3 contact3-form-text-answer" htmlFor='checkbox-2'>
              {answers[2]}
            </label>
          </div>

          {this.state.phdChecked && <PhDInfo
            handleIdChange={handlePhdIdChange}
            handleClassChange={handlePhdClassChange}
            handleInfoChange={handlePhdInfoChange}
          />}

          <br/><br/>
        </div>
      </div>
    )
  }
}