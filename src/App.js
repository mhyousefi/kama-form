import React, { Component } from 'react'
import './css/main.css'
import './css/texts.css'
import './css/util.css'

class App extends Component {
  constructor (props) {
      super(props)
      this.state = {
        name: "",
        email: "",
        nationalId: ""
      }
   }

  render () {
    return (
      <div className="bg-contact3">
        <div className="container-contact3">
          <div className="wrap-contact3">
            <form className="contact3-form validate-form">
              <span className="contact3-form-text-title">
                فرم ثبت نام مدرسین کاما - تابستان ۹۷
              </span>

              <div className="wrap-input3 validate-input" data-validate="Name is required">
                <input className="input3" type="text" name="name" placeholder="نام و نام خانوادگی"/>
                <span className="focus-input3"></span>
              </div>

              <div className="wrap-input3 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input3" type="text" name="email" placeholder="ایمیل"/>
                <span className="focus-input3"></span>
              </div>

              <div className="wrap-input3 validate-input" data-validate="Name is required">
                <input className="input3" type="text" name="name" placeholder="کد ملی"/>
                <span className="focus-input3 contact3-form-text-answer"></span>
              </div>

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

export default App
