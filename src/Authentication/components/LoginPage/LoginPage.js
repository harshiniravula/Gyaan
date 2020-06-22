import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import ReactLoading from 'react-loading'

import InputElement from '../../../Common/InputElement'
import Button from '../../../Common/Button'
import IBHubsLogo from '../../../Common/IBHubsLogo'
import strings from '../../i18n/Strings.json'

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
               <IBHubsLogo size={strings.ibHubsLogoSizeInAuthentication} />

               <StyledHeading>{strings.LoginPageTitle}</StyledHeading>

               <StyledLabel>
                  {strings.SignInUserNameLabel}
                  <StyledBreak />
                  <InputElement
                     data-testid = 'username'
                     inputRef={this.userNameRef}
                     defaultValue={userName}
                     onChange={onChangeUserName}
                     type='text'
                     hasError={userNameError}
                     placeholder=''
                  />
                  {userNameError && <StyledError>{userNameError}</StyledError>}
               </StyledLabel>
               <StyledLabel>
                  {strings.SignInPasswordLabel}
                  <StyledBreak />
                  <InputElement
                     data-testid='password'
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
                  kind={Button.kind.primary}
                  size={Button.size.full}
                  shape={Button.shape.default}
                  type='submit'
                  role='button'
                  data-testid='sign-in-button'
                  onClick={onClickSignIn}
                  disabled={isLoading}
               >
                  {isLoading ?
                     <ReactLoading
                        aria-label='audio-loading'
                        type={'spin'}
                        color={'white'}
                        height={'24px'}
                        width={'24px'}
                     />
                  : strings.login
                  }
               </Button>
               

               <StyledBottomContent>
                  {strings.DontHaveAnAccount}
                  <StyledBottomLink onClick={onClickLink}>
                     {strings.SignUp}
                  </StyledBottomLink>
               </StyledBottomContent>
               <StyledError>{serverError}</StyledError>
            </StyledSignInPage>
            
         </StyledSignInWrapper>
      )
   }
}

export default LoginPage
