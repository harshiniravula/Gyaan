import React from 'react'
import { render } from '@testing-library/react'

/*global expect*/

import SignInPage from '.'

describe('SignInForm', () => {
   it('should render typed username', () => {
      const username = 'test-user'
      const { getByPlaceholderText } = render(
         <SignInPage userName={username} onChangeUsername={() => {}} />
      )

      const usernameField = getByPlaceholderText('Username')

      expect(usernameField.value).toBe(username)
   })

   it('should render typed password', () => {
      const password = 'test-password'
      const { getByPlaceholderText } = render(
         <SignInPage password={password} onChan={() => {}} />
      )

      const passwordField = getByPlaceholderText('Password')

      expect(passwordField.value).toBe(password)
   })

   it('should render given error message', () => {
      const { getByText } = render(
         <SignInPage errorMessage='Please enter username' />
      )

      getByText(/Please enter username/i)
   })
})
