///*global await*/
import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { Redirect, withRouter } from 'react-router-dom'
import SignUpPage from '../../components/SignUpPage'
import Strings from '../../i18n/Strings.json'
import { LOGIN_PATH } from '../../constants/PathName'
import { EmailIdPattern } from '../../constants/RegexConstants'
import { GYAAN_PATH } from '../../../GyaanDashboard/constants/PathName'

@inject('authStore')
@observer
class LoginRoute extends React.Component {
   @observable userName
   @observable password
   @observable isLoading
   @observable errorMessage
   @observable userNameError
   @observable passwordError
   @observable confirmPasswordError
   signInRef = React.createRef()
   constructor(props) {
      super(props)
      this.userName = ''
      this.isLoading = false
      this.password = ''
      this.userNameError = null
      this.passwordError = null
      this.confirmPasswordError = null
   }

   componentWillUnmount() {
      this.isLoading = false
   }

   onChangeConfirmPassword = event => {
      this.confirmPassword = event.target.value
      this.confirmPasswordError = null
   }
   onChangeUserName = event => {
      this.userName = event.target.value
      this.userNameError = null
   }

   onChangePassword = event => {
      this.password = event.target.value
      this.passwordError = null
   }
   onClickLink = () => {
      const { history } = this.props
      history.replace(LOGIN_PATH)
   }

   makeErrorsNull = () => {
      this.userNameError = null
      this.passwordError = null
      this.confirmPasswordError = null
   }
   onClickSignIn = event => {
      event.stopPropagation()
      this.makeErrorsNull()

      if (this.userName === '') {
         this.userNameError = Strings.UserNameError
         this.signInRef.current.userNameRef.current.focus()
      } else if (!this.userName.match(EmailIdPattern)) {
         this.userNameError = Strings.InValidUserName
         this.signInRef.current.userNameRef.current.focus()
      } else if (this.password == '') {
         this.passwordError = Strings.PasswordError
         this.signInRef.current.passwordRef.current.focus()
      } else if (this.confirmPassword !== this.password) {
         this.confirmPasswordError = Strings.InValidConfirmPassword
         this.signInRef.current.passwordRef.current.focus()
      } else {
         this.isLoading = true
         this.userNameError = null
         this.passwordError = null
         this.errorMessage = ''
         const { authStore } = this.props
         const { userSignUp } = authStore

         userSignUp(
            {
               userName: this.userName,
               password: this.password
            },
            this.onSuccess,
            this.onFailure
         )
      }
   }

   onSuccess = () => {
      const { history } = this.props
      history.replace(GYAAN_PATH)
   }
   onFailure = error => {
      if (typeof error === 'string') {
         this.errorMessage = error
      } else {
         this.errorMessage = JSON.parse(error).originalError.message
      }
   }

   render() {
      return (
         <SignUpPage
            userName={this.userName}
            password={this.password}
            errorField={this.errorField}
            onChangeUserName={this.onChangeUserName}
            onChangePassword={this.onChangePassword}
            onChangeConfirmPassword={this.onChangeConfirmPassword}
            onClickSignIn={this.onClickSignIn}
            isLoading={this.isLoading}
            ref={this.signInRef}
            userNameError={this.userNameError}
            passwordError={this.passwordError}
            confirmPasswordError={this.confirmPasswordError}
            serverError={this.errorMessage}
            onClickLink={this.onClickLink}
         />
      )
   }
}
export default withRouter(LoginRoute)
