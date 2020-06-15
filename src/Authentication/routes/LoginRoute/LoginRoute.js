///*global await*/
import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { Redirect, withRouter } from 'react-router-dom'
import LoginPage from '../../components/LoginPage'
import Strings from '../../i18n/Strings.json'
import { SIGN_UP_PATH } from '../../constants/PathName'
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
   signInRef = React.createRef()
   constructor(props) {
      super(props)
      this.userName = ''
      this.isLoading = false
      this.password = ''
      this.userNameError = null
      this.passwordError = null
      this.errorMessage = null
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
      history.replace(SIGN_UP_PATH)
   }
   onClickSignIn = event => {

      event.preventDefault();
      if (this.userName == '') {
         this.userNameError = Strings.UserNameError
         this.passwordError = null
         this.signInRef.current.userNameRef.current.focus()
      }
      else if (this.password == '') {
         this.userNameError = null
         this.passwordError = Strings.PasswordError
         this.signInRef.current.passwordRef.current.focus()
      }
      else {
         this.isLoading = true
         this.userNameError = null
         this.passwordError = null
         this.errorMessage = ''
         const { authStore } = this.props
         const { userSignIn } = authStore

         userSignIn({
               username: this.userName,
               password: this.password
            },
            this.onSuccess,
            this.onFailure
         )
      }
   }

   onSuccess = () => {
      const { history } = this.props
      history.replace(GYAAN_PATH);
      this.isLoading = false;
   }
   onFailure = error => {
      if (typeof error === 'object') {
         this.errorMessage = JSON.parse(error).data.response;
      }
      this.isLoading = false;
   }

   render() {
      return (

         <LoginPage
            userName={this.userName}
            password={this.password}
            errorField={this.errorField}
            onChangeUserName={this.onChangeUserName}
            onChangePassword={this.onChangePassword}
            onClickSignIn={this.onClickSignIn}
            isLoading={this.isLoading}
            ref={this.signInRef}
            userNameError={this.userNameError}
            passwordError={this.passwordError}
            serverError={this.errorMessage}
            onClickLink={this.onClickLink}
         />

      )
   }
}
export default withRouter(LoginRoute)
