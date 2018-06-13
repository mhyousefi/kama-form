import React, { Component } from 'react'
import TextField from '../components/TextField'
import PersianDict from '../utils/PersianDict'
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
      areasToParticipate: [],

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

  render () {
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

              <span className="contact3-form-text-question">
                آیا دانشجو یا فارغ التحصیل معماری دانشگاه تهران هستید؟
              </span>

              <div className="wrap-contact3-form-radio">
                <div className="contact3-form-radio m-r-42">
                  <input className="input-radio3" id="radio1" type="radio" name="choice" value="yes"/>
                  <label className="label-radio3 contact3-form-text-answer" for="radio1">
                    بله
                  </label>
                </div>

                <div className="contact3-form-radio">
                  <input className="input-radio3" id="radio2" type="radio" name="choice" value="no"/>
                  <label className="label-radio3 contact3-form-text-answer" for="radio2">
                    خیر
                  </label>
                </div>
              </div>

              <span className="contact3-form-text-question">
                در چه زمینه ای علاقه مند به تدریس هستید؟
              </span>

              <div className="wrap-contact3-form-radio m-r-42">
                <div className="contact3-form-radio m-r-42">
                  <input className="input-radio3" id="checkbox1" type="checkbox" name="ch11"/>
                  <label className="label-radio3 contact3-form-text-answer" for="checkbox1">
                    AutoCAD 2D
                  </label>
                </div>

                <div className="contact3-form-radio">
                  <input className="input-radio3" id="checkbox2" type="checkbox" name="ch12"/>
                  <label className="label-radio3 contact3-form-text-answer" for="checkbox2">
                    AutoCAD 3D
                  </label>
                </div>

                <div className="contact3-form-radio">
                  <input className="input-radio3" id="checkbox3" type="checkbox" name="choice13" value="get-quote"/>
                  <label className="label-radio3 contact3-form-text-answer" for="checkbox3">
                    Photoshop PostPorduction
                  </label>
                </div>

                <div className="contact3-form-radio">
                  <input className="input-radio3" id="checkbox4" type="checkbox" name="choice14" value="get-quote"/>
                  <label className="label-radio3 contact3-form-text-answer" for="checkbox4">
                    Photoshop شیت بندی
                  </label>
                </div>

                <div className="contact3-form-radio">
                  <input className="input-radio3" id="checkbox5" type="checkbox" name="choice13" value="get-quote"/>
                  <label className="label-radio3 contact3-form-text-answer" for="checkbox5">
                    Illustrator
                  </label>
                </div>

                <div className="contact3-form-radio">
                  <input className="input-radio3" id="checkbox6" type="checkbox" name="choice13" value="get-quote"/>
                  <label className="label-radio3 contact3-form-text-answer" for="checkbox6">
                    Coreldraw
                  </label>
                </div>

                <div className="contact3-form-radio">
                  <input className="input-radio3" id="checkbox7" type="checkbox" name="choice13" value="get-quote"/>
                  <label className="label-radio3 contact3-form-text-answer" for="checkbox7">
                    Sketch Up
                  </label>
                </div>
              </div>

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