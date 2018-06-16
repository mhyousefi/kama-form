import React, { Component } from 'react'
import TextField from '../components/TextField'
import PersianDict from '../utils/PersianDict'
import QuestionInfo from '../utils/QuestionInfo'
import RadioQuestion from '../components/RadioQuestion'
import CheckboxQuestion from '../components/CheckboxQuestion'
import CollegeEduInfo from '../components/CollegeEduInfo'
import BackgroundInfo from '../components/BackgroundInfo'
import ClassTimingInfo from '../components/ClassTimingInfo'
import { addFormEntryApi } from '../api/FormEntryApis'
import { CircularProgress, MuiThemeProvider } from 'material-ui'
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

      submissionStatus: 'NOT_SUBMITTED',
    }
  }

  _allDataProvided = () => {
    const { firstName, lastName, email, nationalId, phoneNumber,
            collegeEduStatus, otherUnivInfo, isBachelor, isMaster, isPhd,
            bachelorsId, bachelorsClass, masterId, masterClass, masterInfo, phdId, phdClass, phdInfo,
            areasOfInterest, areasOfInterestMoreInfo,
            isWeekly, weeklyHours, isWorkshop, workshopDuration,
            hasExperience, experienceDetail } = this.state

    let status = true

    if (firstName === '' || lastName === '' || nationalId === '' || phoneNumber === '' || email === '') {
      status = false
      console.log('SDADSADSADSADDSA')
    }

    if (collegeEduStatus === 'NONE') {
      status = false
      console.log('1')
    } if (collegeEduStatus === 'OTHER' && otherUnivInfo === '') {
      status = false
      console.log('2')
    } else if (collegeEduStatus === 'UT' && areasOfInterestMoreInfo === '') {
      if (!isBachelor && !isMaster && !isPhd) {
        status = false
        console.log('3')
      }

      if (isBachelor) {
        if (bachelorsId === '' || bachelorsClass === '') {
          status = false
          console.log('4')
        }
      }

      if (isMaster) {
        if (masterId === '' || masterClass === '') {
          status = false
          console.log('5')
        }
      }

      if (isPhd) {
        if (phdId === '' || phdClass === '') {
          status = false
          console.log('6')
        }
      }
    }

    if (areasOfInterest.length === 0 && areasOfInterestMoreInfo === '') {
      console.log('areasOfInterest.length === 0')
      status = false
    }

    if (!isWeekly && !isWorkshop) {
      status = false
      console.log('!isWeekly && !isWorkshop')
    } else {
      if (isWeekly) {
        console.log('isWeekly')
        console.log(weeklyHours)
        let allEmpty = true
        weeklyHours.forEach((item) => {
          if (item !== '') {
            allEmpty = false
          }
        })
        if (allEmpty) {
          console.log('allEmpty')
          status = false
        }
      }

      if (isWorkshop && workshopDuration === 0) {
        console.log('workshopDuration === 0')
        status = false
      }
    }

    if (hasExperience && experienceDetail === '') {
      console.log('experienceDetail === ')
      status = false
    }

    let resumeFileInput = document.getElementById('resumeFile')
    let resume = resumeFileInput.files[0]

    if (!resume) {
      console.log('!resume')
      status = false
    }

    return status
  }

  _sendFormData = (event) => {
    event.preventDefault()

    if (!this._allDataProvided()) {
      this._invalidSubmit()
      return
    }

    this.setState({submissionStatus: "SUBMITTING"})

    let resumeFileInput = document.getElementById('resumeFile')
    let resume = resumeFileInput.files[0]

    let newEntry = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      nationalId: this.state.nationalId,
      phoneNumber: this.state.phoneNumber,

      isUtStudent: this.state.collegeEduStatus === 'UT',
      bachelorsId: this.state.bachelorsId,
      bachelorsClass: this.state.bachelorsClass,
      masterId: this.state.masterId,
      masterClass: this.state.masterClass,
      masterInfo: this.state.masterInfo,
      phdId: this.state.phdId,
      phdClass: this.state.phdClass,
      phdInfo: this.state.phdInfo,
      otherUnivInfo: this.state.otherUnivInfo,

      areasOfInterest: this.state.areasOfInterest,
      areasOfInterestMoreInfo: this.state.areasOfInterestMoreInfo,

      isWeekly: this.state.isWeekly,
      weeklyHours: this.state.weeklyHours,
      isWorkshop: this.state.isWorkshop,
      workshopDuration: this.state.workshopDuration,

      hasExperience: this.state.hasExperience,
      experienceDetail: this.state.experienceDetail,
    }

    addFormEntryApi(newEntry, resume).then((response) => {
      if (response === true) {
        this._successfulSubmit()
      } else {
        this._failedSubmit()
      }
    })
  }

  _successfulSubmit = () => {
    this.setState({submissionStatus: 'SUCCESS'})
    // alert(PersianDict['success msg'])
  }

  _invalidSubmit = () => {
    this.setState({submissionStatus: 'FAIL'})
    alert(PersianDict['failure msg'])
  }

  _failedSubmit = () => {
    this.setState({submissionStatus: 'FAIL'})
    alert(PersianDict['server error msg'])
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
    console.log(this.state.submissionStatus)
    if (this.state.submissionStatus === 'SUCCESS') {
      return (
        <div className="bg-contact3">
          <div className="container-contact3">
            <div className="wrap-contact3 rtl">
              <div className="contact3-form-text-question f-s-24">{PersianDict['success msg_line1']}</div>
              <div className="contact3-form-text-question f-s-24">{PersianDict['success msg_line2']}</div>
            </div>
          </div>
        </div>
      )
    } else {
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

                {this.state.submissionStatus === 'SUBMITTING' && <MuiThemeProvider className="rtl">
                  <CircularProgress size={100} thickness={7} style={{ color: 'purple' }}/>
                </MuiThemeProvider>}

                <br/><br/>

                <div className="container-contact3-form-btn">
                  <button className="contact3-form-btn" onClick={this._sendFormData}>
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
}
