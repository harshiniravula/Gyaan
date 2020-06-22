import React from 'react'
/*global jest,expect*/
import { render, fireEvent, waitFor } from '@testing-library/react'
import { Router, withRouter, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { Provider } from 'mobx-react'

import { SIGN_UP_PATH, LOGIN_PATH } from '../../constants/PathName'
import { GYAAN_PATH } from '../../../GyaanDashboard/constants/PathName'

import AuthAPI from '../../services/AuthService/AuthAPI'
import AuthStore from '../../stores/AuthStore'
import getUserLogInResponse from '../../fixtures/getUserLogInResponse.json'

import LoginRoute from '.'
const LocationDisplay = withRouter(({ location }) => (
   <div data-testid='location-display'>{location.pathname}</div>
))

describe('LoginRoute Tests', () => {
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
                     <LoginRoute authStore={authStore} />
                  </Router>
      )
      const loginButton = getByRole('button', { name: 'LOGIN' })

      fireEvent.click(loginButton)

      getByText(/Please enter username/i)
   })

   it('should render password empty error message', () => {
      const { getByText, getByTestId, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <LoginRoute authStore={authStore} />
         </Router>
      )
      const username = 'test-user'
      const usernameField = getByTestId('username')
      const loginButton = getByRole('button', { name: 'LOGIN' })

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.click(loginButton)

      getByText(/Please enter password/i)
   })

   it('should submit sign-in on press enter', () => {
      const { getByLabelText, getByTestId, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <LoginRoute authStore={authStore} />
         </Router>
      )
      const username = 'test-user'
      const password = 'test-password'

      const usernameField = getByTestId('username')
      const passwordField = getByTestId('password')
      const logInButton = getByRole('button', { name: 'LOGIN' })

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.keyPress(logInButton, { key: 'Enter', code: 'Enter' })

      waitFor(() => getByLabelText('audio-loading'))
   })

   it('should render signInRoute loading state', async() => {
      const { getByLabelText, queryByRole, getByTestId, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <LoginRoute authStore={authStore} />
         </Router>
      )
      const username = 'test-user'
      const password = 'test-password'

      const usernameField = getByTestId('username')
      const passwordField = getByTestId('password')
      const logInButton = getByRole('button', { name: 'LOGIN' })

      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockLoadingPromise)
      authAPI.getUsersAPI = mockSignInAPI

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.click(logInButton)

      getByLabelText('audio-loading')


      expect(
         getByRole('button', { disabled: true }))

   })
   it('should render signInRoute success state', async() => {
      const history = createMemoryHistory()
      const route = LOGIN_PATH
      history.push(route)

      const { getByRole, queryByRole, getByTestId } = render(
         <Provider authStore={authStore}>
            <Router history={history}>
               <Route path={LOGIN_PATH}>
                  <LoginRoute />
               </Route>
               <Route path={GYAAN_PATH}>
                  <LocationDisplay />
               </Route>
            </Router>
         </Provider>
      )

      const username = 'test-user'
      const password = 'test-password'

      const usernameField = getByTestId('username')
      const passwordField = getByTestId('password')
      const logInButton = getByRole('button', { name: 'LOGIN' })

      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve(getUserLogInResponse)
      })
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockSuccessPromise)
      authAPI.getUsersAPI = mockSignInAPI

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.click(logInButton)

      waitFor(() => {
         expect(
            queryByRole('button', { name: 'LOGIN' })
         ).not.toBeInTheDocument()
         expect(getByTestId('location-display')).toHaveTextContent(GYAAN_PATH)
      })
   })
   it('should render signInRoute failure state', () => {
      const { getByText, getByTestId, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <LoginRoute authStore={authStore} />
         </Router>
      )

      const username = 'test-user'
      const password = 'test-password'

      const usernameField = getByTestId('username')
      const passwordField = getByTestId('password')
      const logInButton = getByRole('button', { name: 'LOGIN' })

      const mockFailurePromise = new Promise(function(resolve, reject) {
         reject(new Error('error'))
      }).catch(() => {})
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockFailurePromise)
      authAPI.getUsersAPI = mockSignInAPI

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.click(logInButton)

      waitFor(() => {
         getByText('network error')
      })
   })
})
