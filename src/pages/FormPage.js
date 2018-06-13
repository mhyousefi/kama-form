import React, { Component } from 'react'
import TextField from '../components/TextField'
import PersianDict from '../utils/PersianDict'
import QuestionInfo from '../utils/QuestionInfo'
import '../css/main.css'
import '../css/texts.css'
import '../css/util.css'
import RadioQuestion from '../components/RadioQuestion'
import CheckboxQuestion from '../components/CheckboxQuestion'
import BachelorInfo from '../components/BachelorInfo'
import MasterInfo from '../components/MasterInfo'
import PhDInfo from '../components/PhDInfo'
import CollegeEduInfo from '../components/CollegeEduInfo'

export default class FormPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      nationalId: '',
      phoneNumber: '',
      isUtStudent: false,
      isBachelor: false,
      isMaster: false,
      isPhd: false,
      bachelorsId: '',
      bachelorsClass: '',
      masterId: '',
      masterClass: '',
      masterInfo: '',
      phdId: '',
      phdClass: '',
      phdInfo: '',
      areasOfInterest: [],
    }
  }

  _handleFirstNameChange = (newValue) => {
    this.setState({firstName: newValue})
  }

  _handleLastNameChange = (newValue) => {
    this.setState({lastName: newValue})
  }

  _handleNationalIdChange = (newValue) => {
    this.setState({nationalId: newValue})
  }

  _handleEmailChange = (newValue) => {
    this.setState({email: newValue})
  }

  _handlePhoneNumberChange = (newValue) => {
    this.setState({phoneNumber: newValue})
  }

  _handleIsUtStudentChange = (newValue) => {
    this.setState({isUtStudent: newValue === 'بله'})
  }

  _handleStudyLevelCheckboxClick = (studyLevel, checkedState) => {
    if (studyLevel === PersianDict['bachelor']) {
      this.setState({isBachelor: checkedState})
    } else if (studyLevel === PersianDict['master']) {
      this.setState({isMaster: checkedState})
    } else if (studyLevel === PersianDict['phd']) {
      this.setState({isPhd: checkedState})
    }
  }

  _handleBachelorIdChange = (newValue) => {
    this.setState({bachelorsId: newValue})
  }

  _handleBachelorClassChange = (newValue) => {
    this.setState({bachelorsClass: newValue})
  }

  _handleMasterIdChange = (newValue) => {
    this.setState({masterId: newValue})
  }

  _handleMasterClassChange = (newValue) => {
    this.setState({masterClass: newValue})
  }

  _handleMasterInfoChange = (newValue) => {
    this.setState({masterInfo: newValue})
  }

  _handlePhdIdChange = (newValue) => {
    this.setState({phdId: newValue})
  }

  _handlePhdClassChange = (newValue) => {
    this.setState({phdClass: newValue})
  }

  _handlePhdInfoChange = (newValue) => {
    this.setState({phdInfo: newValue})
  }

  _handleAreasOfInterestChange = (area, checked) => {
    const { areasOfInterest } = this.state
    let newAreasOfInterest = []
    if (checked) {
      if (!areasOfInterest.includes(area)) {
        newAreasOfInterest = areasOfInterest
        newAreasOfInterest.push(area)
        this.setState({areasOfInterest: newAreasOfInterest})
      }
    } else {
      let index = areasOfInterest.indexOf(area)
      if (index !== -1) {
        newAreasOfInterest = areasOfInterest
        newAreasOfInterest.splice(index, 1)
        this.setState({areasOfInterest: newAreasOfInterest})
      }
    }
  }

  render () {
    const { isUtStudent, isBachelor, isMaster, isPhd } = this.state
    let x = (isUtStudent && isBachelor) ? <BachelorInfo
      handleIdChange={this._handleBachelorsIdChange}
      handleClassChange={this._handleBachelorsClassChange}
    /> : <div/>
    return (
      <div className="bg-contact3">
        <div className="container-contact3">
          <div className="wrap-contact3">
            <form className="contact3-form validate-form">
              <span className="contact3-form-text-title">
                {PersianDict['form title']}
              </span>

              {this.state.areasOfInterest.map((elem, key) => (
                <div>{elem}</div>
              ))}

              <TextField
                placeholder={PersianDict['first name']}
                handleChange={this._handleFirstNameChange}
              />
              <TextField
                placeholder={PersianDict['last name']}
                handleChange={this._handleLastNameChange}
              />
              <TextField
                placeholder={PersianDict['national code']}
                handleChange={this._handleNationalIdChange}
              />
              <br/>

              <RadioQuestion
                questionTxt={QuestionInfo['are you from UT']['question']}
                answers={QuestionInfo['are you from UT']['answers']}
                handleRadioChange={this._handleIsUtStudentChange}
              />

              {this.state.isUtStudent && <CollegeEduInfo
                handleStudyLevelChange={this._handleStudyLevelCheckboxClick}
                handleBachelorIdChange={this._handleBachelorIdChange}
                handleBachelorClassChange={this._handleBachelorClassChange}
                handleMasterIdChange={this._handleMasterIdChange}
                handleMasterClassChange={this._handleMasterClassChange}
                handleMasterInfoChange={this._handleMasterInfoChange}
                handlePhdIdChange={this._handlePhdIdChange}
                handlePhdClassChange={this._handlePhdClassChange}
                handlePhdInfoChange={this._handlePhdInfoChange}
              />}

              <br/><br/>

              <TextField
                placeholder={PersianDict['phone number']}
                handleChange={this._handlePhoneNumberChange}
              />
              <TextField
                placeholder={PersianDict['email']}
                handleChange={this._handleEmailChange}
              />
              <br/>

              <CheckboxQuestion
                questionTxt={QuestionInfo['areas of interest']['question']}
                answers={QuestionInfo['areas of interest']['answers']}
                handleCheckboxChange={this._handleAreasOfInterestChange}
              />

              <div className="wrap-input3 validate-input" data-validate="Message is required">
                <textarea className="input3" name="message" placeholder="پیام شما"></textarea>
                <span className="focus-input3"></span>
              </div>

              <label className="custom-file">
                <input type="file" id="file" className="custom-file-input"/>
                <span className="custom-file-control"></span>
              </label>

              <div className="container-contact3-form-btn">
                <button className="contact3-form-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}