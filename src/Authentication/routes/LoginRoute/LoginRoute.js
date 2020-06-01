///*global await*/
import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { Redirect, withRouter } from 'react-router-dom'
import LoginPage from '../../components/LoginPage'
import Strings from '../../i18n/Strings.json'
import { SIGN_UP_PATH } from '../../constants/PathName'
import { GYAAN_PATH } from '../../../GyaanDashboard/constants/PathName';

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
      this.userName = '';
      this.isLoading = false;
      this.password = '';
      this.userNameError = null;
      this.passwordError = null;
      this.errorMessage = null;
   }

   componentWillUnmount() {
      this.isLoading = false
   }
   onChangeUserName = event => {
      this.userName = event.target.value
   }

   onChangePassword = event => {
      this.password = event.target.value
   }
   onClickLink = () => {
      const { history } = this.props
      history.replace(SIGN_UP_PATH)
   }
   onClickSignIn = event => {
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
         event.target.disabled = true
         const { authStore } = this.props
         const { userSignIn } = authStore
         userSignIn({
               userName: this.userName,
               password: this.password
            },
            this.onSuccess,
            this.onFailure)
      }
   }

   onSuccess = () => {
      const { history } = this.props
      history.replace(GYAAN_PATH)
   }
   onFailure = error => {
      if (typeof error === 'string') {
         this.errorMessage = error;

      }
      else {
         this.errorMessage = JSON.parse(error).originalError.message
      }
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
