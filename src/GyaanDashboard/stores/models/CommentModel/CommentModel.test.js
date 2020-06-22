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
import GetSelectedPostData from '../../../fixtures/GetSelectedPostData.json'

import CommentModel from '.'

/* Mocking js-cookie library */

let mockSetCookie = jest.fn()
let mockRemoveCookie = jest.fn()

Cookie.set = mockSetCookie
Cookie.remove = mockRemoveCookie

describe('CommentModel Tests', () => {
   let gyaanService
   let commentModel

   beforeEach(() => {
      gyaanService = new GyaanService()
      commentModel = new CommentModel(
         GetSelectedPostData.comments[0],
         gyaanService)
   })

   it('should test initialising gyaan store', () => {
      expect(commentModel.getCommentReactionAPIStatus).toBe(API_INITIAL)
      expect(commentModel.getCommentReactionAPIError).toBe(null)
   })
   it('should test getting gyaan Domain API data fetching state', () => {
      const requestObject = {}
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockDomainsAPI = jest.fn()
      mockDomainsAPI.mockReturnValue(mockLoadingPromise)
      gyaanService.onClickReaction = mockDomainsAPI
      commentModel.isReacted = true;
      commentModel.reactionsCount = 10;

      commentModel.onClickReaction(requestObject)
      expect(commentModel.isReacted).toBe(false);
      expect(commentModel.reactionsCount).toBe(9);
      expect(commentModel.getCommentReactionAPIStatus).toBe(API_FETCHING)
   })

   it('should test gyaan Domain API success state', async() => {
      const requestObject = {}
      const mockSuccessPromise = Promise.resolve()
      const mockDomainsAPI = jest.fn()
      mockDomainsAPI.mockReturnValue(mockSuccessPromise)
      gyaanService.onClickReaction = mockDomainsAPI

      await commentModel.onClickReaction(requestObject)
      expect(commentModel.getCommentReactionAPIStatus).toBe(API_SUCCESS)
   })
   it('should test get domains API failure state', async() => {
      jest
         .spyOn(gyaanService, 'onClickReaction')
         .mockImplementation(() => Promise.reject())
      commentModel.isReacted = true;
      commentModel.reactionsCount = 10;

      commentModel.onClickReaction()
      expect(commentModel.isReacted).toBe(false);
      expect(commentModel.reactionsCount).toBe(9);
      waitFor(() => {
         expect(commentModel.getCommentReactionAPIStatus).toBe(API_FAILED)
         expect(commentModel.isReacted).toBe(true);
         expect(commentModel.reactionsCount).toBe(10);
      })
   })


})
