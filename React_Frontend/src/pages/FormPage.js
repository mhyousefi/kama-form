import React, { Component } from 'react'
import TextField from '../components/TextField'
import PersianDict from '../utils/PersianDict'
import QuestionInfo from '../utils/QuestionInfo'
import RadioQuestion from '../components/RadioQuestion'
import CheckboxQuestion from '../components/CheckboxQuestion'
import BachelorInfo from '../components/BachelorInfo'
import CollegeEduInfo from '../components/CollegeEduInfo'
import BackgroundInfo from '../components/BackgroundInfo'
import ClassTimingInfo from '../components/ClassTimingInfo'

import '../css/main.css'
import '../css/texts.css'
import '../css/util.css'

export default class FormPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      nationalId: '',
      phoneNumber: '',
      collegeEduStatus: 'NONE',
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
      otherUnivInfo: '',
      areasOfInterest: [],
      areasOfInterestMoreInfo: '',

      isWeekly: false,
      weeklyHours: ['', '', '', '', '', ''],
      isWorkshop: false,
      workshopDuration: 0,

      hasExperience: false,
      experienceDetail: '',
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

  _handleCollegeEduStatusChange = (newValue) => {
    if (newValue === PersianDict['yes']) {
      this.setState({collegeEduStatus: 'UT'})
    } else if (newValue === PersianDict['no']) {
      this.setState({collegeEduStatus: 'OTHER'})
    }
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

  _handleOtherUnivInfoChange = (newValue) => {
    this.setState({otherUnivInfo: newValue})
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

  _handleAreasOfInterestMoreInfoChange = (newValue) => {
    this.setState({areasOfInterestMoreInfo: newValue})
  }

  _handleHasExperienceChange = (newValue) => {
    this.setState({hasExperience: newValue})
  }

  _handleExperienceDetailChange = (newValue) => {
    this.setState({experienceDetail: newValue})
  }

  _handleIsWeeklyChange = (newValue) => {
    this.setState({isWeekly: newValue})
  }

  _handleIsWorkshopChange = (newValue) => {
    this.setState({isWorkshop: newValue})
  }

  _handleWorkshopDurationChange = (newValue) => {
    this.setState({workshopDuration: newValue})
  }

  _handleWeeklyHoursChange = (index, newValue) => {
    let newWeeklyHours = this.state.weeklyHours
    newWeeklyHours[index] = newValue
    this.setState({weeklyHours: newWeeklyHours})
  }

  render () {
    const { collegeEduStatus, isBachelor, isMaster, isPhd } = this.state
    return (
      <div className="bg-contact3">
        <div className="container-contact3">
          <div className="wrap-contact3">
            <form className="contact3-form validate-form">
              <span className="contact3-form-text-title">
                {PersianDict['form title']}
              </span>

              <TextField
                placeholder={PersianDict['first name']}
                handleTxtChange={this._handleFirstNameChange}
              />
              <TextField
                placeholder={PersianDict['last name']}
                handleTxtChange={this._handleLastNameChange}
              />
              <TextField
                placeholder={PersianDict['national code']}
                handleTxtChange={this._handleNationalIdChange}
              />
              <TextField
                placeholder={PersianDict['phone number']}
                handleTxtChange={this._handlePhoneNumberChange}
              />
              <TextField
                placeholder={PersianDict['email']}
                handleTxtChange={this._handleEmailChange}
              />

              <br/><br/>

              <RadioQuestion
                questionTxt={QuestionInfo['are you from UT']['question']}
                answers={QuestionInfo['are you from UT']['answers']}
                handleRadioChange={this._handleCollegeEduStatusChange}
              />

              {this.state.collegeEduStatus === 'UT' && <CollegeEduInfo
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

              {this.state.collegeEduStatus === 'OTHER' && <TextField
                placeholder={PersianDict['enter your edu info']}
                handleTxtChange={this._handleOtherUnivInfoChange}
              />}

              <br/><br/>

              <CheckboxQuestion
                questionTxt={QuestionInfo['areas of interest']['question']}
                answers={QuestionInfo['areas of interest']['answers']}
                handleCheckboxChange={this._handleAreasOfInterestChange}
              />

              <TextField
                placeholder={PersianDict['more info']}
                handleTxtChange={this._handleAreasOfInterestMoreInfoChange}
              />

              <br/><br/>

              <ClassTimingInfo
                handleIsWeeklyChange={this._handleIsWeeklyChange}
                handleIsWorkshopChange={this._handleIsWorkshopChange}
                handleWorkshopDurationChange={this._handleWorkshopDurationChange}
                handleWeeklyHoursChange={this._handleWeeklyHoursChange}
              />

              <br/><br/>

              <BackgroundInfo
                handleHasExperienceChange={this._handleHasExperienceChange}
                handleExperienceDetailChange={this._handleExperienceDetailChange}
              />

              <br/><br/>

              <div className="container-contact3-form-btn">
                <button className="contact3-form-btn">
                  {PersianDict['send info']}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}