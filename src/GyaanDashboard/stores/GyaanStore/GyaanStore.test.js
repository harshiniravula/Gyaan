import Cookie from 'js-cookie'

/*global jest,expect*/

import {
   API_SUCCESS,
   API_FAILED,
   API_FETCHING,
   API_INITIAL
}
from '@ib/api-constants'

import GyaanService from '../../services/GyaanService/GyaanAPI'
import GetUserDomainData from '../../fixtures/GetUserDomainData.json'
import GetPostsData from '../../fixtures/GetPostsData.json'

import GyaanStore from '.'

/* Mocking js-cookie library */

let mockSetCookie = jest.fn()
let mockRemoveCookie = jest.fn()

Cookie.set = mockSetCookie
Cookie.remove = mockRemoveCookie

describe('GyaanStore Tests', () => {
   let gyaanService
   let gyaanStore

   beforeEach(() => {
      gyaanService = new GyaanService()
      gyaanStore = new GyaanStore(gyaanService)
   })

   it('should test initialising gyaan store', () => {
      expect(gyaanStore.getGyaanDomainsAPIStatus).toBe(API_INITIAL)
      expect(gyaanStore.getGyaanDomainsAPIError).toBe(null)
      expect(gyaanStore.getPostsAPIStatus).toBe(API_INITIAL)
      expect(gyaanStore.getPostsAPIError).toBe(null)
   })
   it('should test getting gyaan Domain API data fetching state', () => {
      const requestObject = {}
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockDomainsAPI = jest.fn()
      mockDomainsAPI.mockReturnValue(mockLoadingPromise)
      gyaanService.getDomainsAPI = mockDomainsAPI

      gyaanStore.getGyaanDomainData(requestObject)
      expect(gyaanStore.getGyaanDomainsAPIStatus).toBe(API_FETCHING)
   })

   it('should test gyaan Domain API success state', async() => {
      const requestObject = {}
      const mockSuccessPromise = Promise.resolve(GetUserDomainData)
      const mockDomainsAPI = jest.fn()
      mockDomainsAPI.mockReturnValue(mockSuccessPromise)
      gyaanService.getDomainsAPI = mockDomainsAPI

      await gyaanStore.getGyaanDomainData(requestObject)
      expect(gyaanStore.getGyaanDomainsAPIStatus).toBe(API_SUCCESS)
   })

   it('should test get domains API failure state', async() => {
      jest
         .spyOn(gyaanService, 'getDomainsAPI')
         .mockImplementation(() => Promise.reject())

      await gyaanStore.getGyaanDomainData()
      expect(gyaanStore.getGyaanDomainsAPIStatus).toBe(API_FAILED)
   })





   it('should test getting gyaan all domains posts API data fetching state', () => {
      const requestObject = {}
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockDomainsAPI = jest.fn()
      mockDomainsAPI.mockReturnValue(mockLoadingPromise)
      gyaanService.getPostsAPI = mockDomainsAPI

      gyaanStore.getDomainPosts(requestObject)
      expect(gyaanStore.getPostsAPIStatus).toBe(API_FETCHING)
   })

   it('should test gyaan all domains posts  API success state', async() => {
      const requestObject = {}
      const mockSuccessPromise = Promise.resolve(GetPostsData)
      const mockDomainsAPI = jest.fn()
      mockDomainsAPI.mockReturnValue(mockSuccessPromise)
      gyaanService.getPostsAPI = mockDomainsAPI


      await gyaanStore.getDomainPosts(requestObject)
      expect(gyaanStore.getPostsAPIStatus).toBe(API_SUCCESS)
   })

   it('should test gyaan all domains posts  API failure state', async() => {
      jest
         .spyOn(gyaanService, 'getPostsAPI')
         .mockImplementation(() => Promise.reject())

      await gyaanStore.getDomainPosts()
      expect(gyaanStore.getPostsAPIStatus).toBe(API_FAILED)
   })


})
