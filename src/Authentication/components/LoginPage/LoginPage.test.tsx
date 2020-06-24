import React from 'react'
import { render } from '@testing-library/react'

/*global expect*/

import LoginPage from '.'



describe('SignInForm', () => {
   it('should render typed username', () => {
      const username = 'test-user'
      const { getByTestId } = render(
         <LoginPage userName={username}
         onChangeUserName={()=>{}}
   onChangePassword={()=>{}}
         />
      )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
      const usernameField = getByTestId('username')
      expect(usernameField.value).toBe(username)
   })

   it('should render typed password', () => {
      const password = 'test-password'
      const { getByTestId } = render(
         <LoginPage password={password} />
      )
      const passwordField = getByTestId('password')
      console.log(passwordField)
      expect(passwordField.value).toBe(password)
   })

   it('should render given error message', () => {
      const { getByText } = render(
         <LoginPage userNameError='Please enter username' />
      )
      getByText(/Please enter username/i)
   })
   it('should render given error message', () => {
      const { getByText } = render(
         <LoginPage passwordError='Please enter password' />
      )
      getByText(/Please enter password/i)
   })
})
