import React from 'react'
/*global jest,expect*/
import { render, fireEvent, waitFor } from '@testing-library/react'
import { Router, withRouter, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { Provider } from 'mobx-react'

import { SIGN_UP_PATH, LOGIN_PATH } from '../../constants/PathName'
import { GYAAN_PATH } from '../../../GyaanDashboard/constants/PathName';

import AuthAPI from '../../services/AuthService/AuthAPI'
import AuthStore from '../../stores/AuthStore'
import getUserLogInResponse from '../../fixtures/getUserLogInResponse.json'

import SignUpRoute from '.'

const LocationDisplay = withRouter(({ location }) => (
   <div data-testid='location-display'>{location.pathname}</div>
))

describe('SignUpRoute Tests', () => {
   let authAPI
   let authStore

   beforeEach(() => {
      authAPI = new AuthAPI()
      authStore = new AuthStore(authAPI)
   })

   afterEach(() => {
      jest.resetAllMocks()
   })

   it('should render username empty error message', () => {
      const { getByText, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <SignUpRoute authStore={authStore} />
         </Router>
      )
      const SignUpButton = getByRole('button', { name: 'SIGN UP' })

      fireEvent.click(SignUpButton)

      getByText(/Please enter username/i)
   })

   it('should render username invalid error message', () => {
      const { getByTestId, getByText, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <SignUpRoute authStore={authStore} />
         </Router>
      )

      const username = 'test-user'
      const usernameField = getByTestId('username')
      const SignUpButton = getByRole('button', { name: 'SIGN UP' })

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.click(SignUpButton)

      getByText(/Invalid userName/i)
   })


   it('should render password empty error message', () => {
      const { getByText, getByTestId, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <SignUpRoute authStore={authStore} />
         </Router>
      )
      const username = 'testuser@rg.co'
      const usernameField = getByTestId('username')
      const SignUpButton = getByRole('button', { name: 'SIGN UP' })

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.click(SignUpButton)

      getByText(/Please enter password/i)
   })

   it('should submit sign-in on press enter', () => {
      const { getByLabelText, getByTestId, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <SignUpRoute authStore={authStore} />
         </Router>
      )
      const username = 'testuser@er.co'
      const password = 'test-password'

      const usernameField = getByTestId('username')
      const passwordField = getByTestId('password')
      const SignUpButton = getByRole('button', { name: 'SIGN UP' })

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.keyPress(SignUpButton, { key: 'Enter', code: 'Enter' })

      waitFor(() => getByLabelText('audio-loading'))
   })

   it('should render signInRoute loading state', async() => {
      const { getByLabelText, getByTestId, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <SignUpRoute authStore={authStore} />
         </Router>
      )
      const username = 'testuser@wegr.co'
      const password = 'test-password'
      const confirmPassword = 'test-password'

      const usernameField = getByTestId('username')
      const passwordField = getByTestId('password')
      const confirmPasswordField = getByTestId('confirmPassword')
      const SignUpButton = getByRole('button', { name: 'SIGN UP' })

      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockLoadingPromise)
      authAPI.postUsersAPI = mockSignInAPI

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.change(confirmPasswordField, { target: { value: confirmPassword } })
      fireEvent.click(SignUpButton)

      getByLabelText('audio-loading')
      getByRole('button', { disabled: true })


   })

   it('handling invalid confirm password', async() => {
      const { getByText, getByTestId, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <SignUpRoute authStore={authStore} />
         </Router>
      )
      const username = 'testuser@wegr.co'
      const password = 'test-password'
      const confirmPassword = 'test-passwou,'

      const usernameField = getByTestId('username')
      const passwordField = getByTestId('password')
      const confirmPasswordField = getByTestId('confirmPassword')
      const SignUpButton = getByRole('button', { name: 'SIGN UP' })

      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockLoadingPromise)
      authAPI.postUsersAPI = mockSignInAPI

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.change(confirmPasswordField, { target: { value: confirmPassword } })
      fireEvent.click(SignUpButton)

      getByText(/Invalid confirm password/i)



   })

   it('should render signInRoute success state', async() => {
      const history = createMemoryHistory()
      const route = SIGN_UP_PATH
      history.push(route)

      const {
         getByRole,
         queryByRole,
         getByTestId
      } = render(
         <Provider authStore={authStore}>
            <Router history={history}>
               <Route path={SIGN_UP_PATH}>
                  <SignUpRoute />
               </Route>
               <Route path={GYAAN_PATH}>
                  <LocationDisplay />
               </Route>
            </Router>
         </Provider>
      )

      const username = 'testuser@sdewr.cew'
      const password = 'test-password'
      const confirmPassword = 'test-password'

      const usernameField = getByTestId('username')
      const passwordField = getByTestId('password')
      const confirmPasswordField = getByTestId('password')
      const SignUpButton = getByRole('button', { name: 'SIGN UP' })

      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve(getUserLogInResponse)
      })
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockSuccessPromise)
      authAPI.getUsersAPI = mockSignInAPI

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.change(confirmPasswordField, { target: { value: confirmPassword } })
      fireEvent.click(SignUpButton)

      waitFor(() => {
         expect(
            queryByRole('button', { name: 'SIGN UP' })
         ).not.toBeInTheDocument()
         expect(getByTestId('location-display')).toHaveTextContent(
            GYAAN_PATH
         )
      })
   })
   it('should render signInRoute failure state', () => {
      const { getByText, getByTestId, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <SignUpRoute authStore={authStore} />
         </Router>
      )

      const username = 'test-user'
      const password = 'test-password'
      const confirmPassword = 'test-password'

      const usernameField = getByTestId('username')
      const passwordField = getByTestId('password')
      const confirmPasswordField = getByTestId('password')
      const SignUpButton = getByRole('button', { name: 'SIGN UP' })

      const mockFailurePromise = new Promise(function(resolve, reject) {
         reject(new Error('error'))
      }).catch(() => {})
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockFailurePromise)
      authAPI.postUsersAPI = mockSignInAPI

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.change(confirmPasswordField, { target: { value: confirmPassword } })
      fireEvent.click(SignUpButton)

      waitFor(() => {
         getByText('network error')
      })
   })
})
