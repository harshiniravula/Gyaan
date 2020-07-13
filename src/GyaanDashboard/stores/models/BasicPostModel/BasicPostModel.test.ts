import Cookie from 'js-cookie'

/*global jest,expect*/

import {
   API_SUCCESS,
   API_FAILED,
   API_FETCHING,
   API_INITIAL
} from '@ib/api-constants'
import { waitFor } from '@testing-library/react'

import GyaanService from '../../../services/GyaanService/GyaanAPI'
import GetPostsData from '../../../fixtures/GetPostsData.json'
import GetDomainData from '../../../fixtures/GetDomainData.json'
import GetTags from '../../../fixtures/GetTags.json'

import PostModel from '.'

/* Mocking js-cookie library */

let mockSetCookie = jest.fn()
let mockRemoveCookie = jest.fn()

Cookie.set = mockSetCookie
Cookie.remove = mockRemoveCookie

describe('PostModel Tests', () => {
   let gyaanService
   let postModel

   beforeEach(() => {
      gyaanService = new GyaanService()
      postModel = new PostModel(
         GetPostsData[0],
         GetPostsData[0].domain.domain_id,
         GetPostsData[0].domain.domain_name,
         gyaanService
      )
   })

   it('should test initialising gyaan store', () => {
      expect(postModel.getCommentReactionAPIStatus).toBe(API_INITIAL)
      expect(postModel.getCommentReactionAPIError).toBe(null)
   })
   it('should test getting gyaan Domain API data fetching state', () => {
      const requestObject = {}
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockDomainsAPI = jest.fn()
      mockDomainsAPI.mockReturnValue(mockLoadingPromise)
      gyaanService.onClickReaction = mockDomainsAPI
      postModel.isReacted = true
      postModel.reactionsCount = 10

      postModel.onClickReaction(requestObject)
      expect(postModel.isReacted).toBe(false)
      expect(postModel.reactionsCount).toBe(9)
      expect(postModel.getCommentReactionAPIStatus).toBe(API_FETCHING)
   })

   it('should test gyaan Domain API success state', async () => {
      const requestObject = {}
      const mockSuccessPromise = Promise.resolve()
      const mockDomainsAPI = jest.fn()
      mockDomainsAPI.mockReturnValue(mockSuccessPromise)
      gyaanService.onClickReaction = mockDomainsAPI

      await postModel.onClickReaction(requestObject)
      expect(postModel.getCommentReactionAPIStatus).toBe(API_SUCCESS)
   })
   it('should test get domains API failure state', async () => {
      jest
         .spyOn(gyaanService, 'onClickReaction')
         .mockImplementation(() => Promise.reject())
      postModel.isReacted = true
      postModel.reactionsCount = 10

      postModel.onClickReaction()
      expect(postModel.isReacted).toBe(false)
      expect(postModel.reactionsCount).toBe(9)
      waitFor(() => {
         expect(postModel.getCommentReactionAPIStatus).toBe(API_FAILED)
         expect(postModel.isReacted).toBe(true)
         expect(postModel.reactionsCount).toBe(10)
      })
   })
})
