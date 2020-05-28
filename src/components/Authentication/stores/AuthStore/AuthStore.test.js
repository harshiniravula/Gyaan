import Cookie from 'js-cookie'

/*global jest,expect*/

import {
   API_SUCCESS,
   API_FAILED,
   API_FETCHING,
   API_INITIAL
} from '@ib/api-constants'

import AuthService from '../../services/AuthService/AuthAPI'
import getUserSignInResponse from '../../fixtures/getUserSignInResponse.json'

import AuthStore from '.'

/* Mocking js-cookie library */

let mockSetCookie = jest.fn()
let mockRemoveCookie = jest.fn()

Cookie.set = mockSetCookie
Cookie.remove = mockRemoveCookie

describe('AuthStore Tests', () => {
   let authService
   let authStore

   beforeEach(() => {
      authService = new AuthService()
      authStore = new AuthStore(authService)
   })

   it('should test initialising auth store', () => {
      expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL)
      expect(authStore.getUserSignInAPIError).toBe(null)
   })

   it('should test userSignInAPI data fetching state', () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()

      const requestObject = {
         username: 'test-user',
         password: 'test-password'
      }

      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockLoadingPromise)
      authService.signInAPI = mockSignInAPI

      authStore.userSignIn(requestObject, onSuccess, onFailure)
      expect(authStore.getUserSignInAPIStatus).toBe(API_FETCHING)
   })

   it('should test userSignInAPI success state', async () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()

      const requestObject = {
         username: 'test-user',
         password: 'test-password'
      }

      const mockSuccessPromise = Promise.resolve(getUserSignInResponse)
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockSuccessPromise)
      authService.signInAPI = mockSignInAPI

      await authStore.userSignIn(requestObject, onSuccess, onFailure)
      expect(authStore.getUserSignInAPIStatus).toBe(API_SUCCESS)
      expect(mockSetCookie).toBeCalled()
      expect(onSuccess).toBeCalled()
   })

   it('should test userSignInAPI failure state', async () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()
      const requestObject = {
         username: 'test-user',
         password: 'test-password'
      }

      jest
         .spyOn(authService, 'getUsersAPI')
         .mockImplementation(() => Promise.reject())
      await authStore.userSignIn(requestObject, onSuccess, onFailure)
      expect(authStore.getUserSignInAPIStatus).toBe(API_FAILED)
      expect(onFailure).toBeCalled()
   })

   it('should test user sign-out', () => {
      authStore.userSignOut()
      expect(mockRemoveCookie).toBeCalled()
      expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL)
      expect(authStore.getUserSignInAPIError).toBe(null)
   })
})
