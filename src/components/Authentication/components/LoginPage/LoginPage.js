import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import ReactLoading from 'react-loading'

import InputElement from '../../../common/InputElement'
import Button from '../../../common/Button'
import IBHubsLogo from '../../../common/IBHubsLogo';
import Strings from '../../i18n/Strings.json';

import {
   StyledSignInPage,
   StyledError,
   StyledSignInWrapper,
   StyledHeading,
   StyledLabel,
   StyledBreak,
   StyledBottomContent,
   StyledBottomLink,
   StyledInputError
}
from './styledComponents.js'

@observer
class LoginPage extends React.Component {
   userNameRef = React.createRef()
   passwordRef = React.createRef()
   componentDidMount() {
      this.userNameRef.current.focus()
   }
   render() {
      const {
         userName,
         password,
         serverError,
         onChangeUserName,
         onChangePassword,
         userNameError,
         passwordError,
         onClickSignIn,
         isLoading,
         onClickLink
      } = this.props

      return (
         <StyledSignInWrapper>
            <StyledSignInPage>
               <IBHubsLogo size={Strings.ibHubsLogoSizeInAuthentication} />

               <StyledHeading>{Strings.LoginPageTitle}</StyledHeading>

               <StyledLabel>
                  {Strings.SignInUserNameLabel}
                  <StyledBreak />
                  <InputElement
                     data-testid="username"
                     inputRef={this.userNameRef}
                     defaultValue={userName}
                     onChange={onChangeUserName}
                     type='text'
                     error={userNameError}
                     placeholder=''
                  />
                  {userNameError && <StyledError>{userNameError}</StyledError>}
               </StyledLabel>
               <StyledLabel>
                  {Strings.SignInPasswordLabel}
                  <StyledBreak />
                  <InputElement
                       data-testid="password"
                     inputRef={this.passwordRef}
                     defaultValue={password}
                     onChange={onChangePassword}
                     error={passwordError}
                     type='password'
                     placeholder=''
                  />

                  {passwordError && <StyledError>{passwordError}</StyledError>}
               </StyledLabel>
               <Button
                  btnType='primary'
                  type='button'
                  role='button'
                  data-testid='sign-in-button'
                  onClick={onClickSignIn}
               >
                  {isLoading ? (
                     <ReactLoading
                        aria-label='audio-loading'
                        type={'spin'}
                        color={'white'}
                        height={'24px'}
                        width={'24px'}
                     />
                  ) : (
                     'LOGIN'
                  )}
               </Button>
               <StyledBottomContent>
                  {Strings.DontHaveAnAccount}
                  <StyledBottomLink onClick={onClickLink}>
                     {Strings.SignUp}
                  </StyledBottomLink>


               </StyledBottomContent>
                <StyledError>{serverError}</StyledError>
            </StyledSignInPage>
         </StyledSignInWrapper>
      )
   }
}

export default LoginPage
