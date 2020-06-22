import Cookie from 'js-cookie'

/*global jest,expect*/

import {
   API_SUCCESS,
   API_FAILED,
   API_FETCHING,
   API_INITIAL
}
from '@ib/api-constants'
import { waitFor } from '@testing-library/react'

import GyaanService from '../../../services/GyaanService/GyaanAPI'
import GetDomainData from '../../../fixtures/GetDomainData.json'

import Request from '.'

/* Mocking js-cookie library */

let mockSetCookie = jest.fn()
let mockRemoveCookie = jest.fn()

Cookie.set = mockSetCookie
Cookie.remove = mockRemoveCookie

describe('Request Tests', () => {
   let gyaanService
   let requestModel

   beforeEach(() => {
      gyaanService = new GyaanService()
      requestModel = new Request(
         GetDomainData.domain_requested_users.users[0],
         gyaanService)
   })

   it('should test initialising gyaan store', () => {
      expect(requestModel.getRequestAPIStatus).toBe(API_INITIAL)
      expect(requestModel.getRequestAPIError).toBe(null)
   })
   it('should test accepting or rejecting a request fetching state', () => {
      const requestObject = {

         "request_id": 0,
         "accept_status": "rejected"

      }
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockDomainsAPI = jest.fn()
      mockDomainsAPI.mockReturnValue(mockLoadingPromise)
      gyaanService.acceptOrRejectRequest = mockDomainsAPI


      requestModel.acceptOrRejectRequest(requestObject)

      expect(requestModel.getRequestAPIStatus).toBe(API_FETCHING)
   })

   it('should test accepting or rejecting  a request success state', async() => {
      const requestObject = {

         "request_id": 0,
         "accept_status": "rejected"

      }
      const mockSuccessPromise = Promise.resolve()
      const mockDomainsAPI = jest.fn()
      mockDomainsAPI.mockReturnValue(mockSuccessPromise)
      gyaanService.acceptOrRejectRequest = mockDomainsAPI

      await requestModel.acceptOrRejectRequest(requestObject)
      expect(requestModel.getRequestAPIStatus).toBe(API_SUCCESS)
   })
   it('should test accepting or rejecting a failure state', async() => {
      const requestObject = {

         "request_id": 0,
         "accept_status": "rejected"

      }
      jest
         .spyOn(gyaanService, 'acceptOrRejectRequest')
         .mockImplementation(() => Promise.reject())

      await requestModel.acceptOrRejectRequest(requestObject)
      expect(requestModel.getRequestAPIStatus).toBe(API_FAILED)
   })


})
