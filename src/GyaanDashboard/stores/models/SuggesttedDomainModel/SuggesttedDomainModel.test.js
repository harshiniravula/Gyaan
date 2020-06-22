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
import GetUserDomainData from '../../../fixtures/GetUserDomainData.json'

import SuggesttedDomainModel from '.'

/* Mocking js-cookie library */

let mockSetCookie = jest.fn()
let mockRemoveCookie = jest.fn()

Cookie.set = mockSetCookie
Cookie.remove = mockRemoveCookie

describe('SuggesttedDomainModel Tests', () => {
   let gyaanService
   let suggestedDomainModel

   beforeEach(() => {
      gyaanService = new GyaanService()
      suggestedDomainModel = new SuggesttedDomainModel(
         GetUserDomainData.suggested_domains[0],
         gyaanService)
   })

   it('should test initialising gyaan store', () => {
      expect(suggestedDomainModel.getFollowAPIStatus).toBe(API_INITIAL)
      expect(suggestedDomainModel.getFollowAPIError).toBe(null)
   })
   it('should test accepting or rejecting a request fetching state', () => {

      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockDomainsAPI = jest.fn()
      mockDomainsAPI.mockReturnValue(mockLoadingPromise)
      gyaanService.followOrCancelDomainRequest = mockDomainsAPI


      suggestedDomainModel.onClickFollowOrCancel()

      expect(suggestedDomainModel.getFollowAPIStatus).toBe(API_FETCHING)
   })

   it('should test accepting or rejecting  a request success state', async() => {

      const mockSuccessPromise = Promise.resolve()
      const mockDomainsAPI = jest.fn()
      mockDomainsAPI.mockReturnValue(mockSuccessPromise)
      gyaanService.followOrCancelDomainRequest = mockDomainsAPI

      await suggestedDomainModel.onClickFollowOrCancel()
      expect(suggestedDomainModel.getFollowAPIStatus).toBe(API_SUCCESS)
   })
   it('should test accepting or rejecting a failure state', async() => {

      jest
         .spyOn(gyaanService, 'followOrCancelDomainRequest')
         .mockImplementation(() => Promise.reject())

      await suggestedDomainModel.onClickFollowOrCancel()
      expect(suggestedDomainModel.getFollowAPIStatus).toBe(API_FAILED)
   })


})
