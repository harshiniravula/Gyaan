import Cookie from 'js-cookie'

/*global jest,expect*/

import {
   API_SUCCESS,
   API_FAILED,
   API_FETCHING,
   API_INITIAL
} from '@ib/api-constants'
import GyaanService from '../../../services/GyaanService/GyaanAPI'
import GetUserDomainData from '../../../fixtures/GetUserDomainData.json'
import GetPostsData from '../../../fixtures/GetPostsData.json'
import GetDomainPostsData from '../../../fixtures/GetDomainPostsData.json'
import GetDomainData from '../../../fixtures/GetDomainData.json'
import GetSelectedPostData from '../../../fixtures/GetSelectedPostData.json'
import GetTags from '../../../fixtures/GetTags.json'

import DomainModel from '.'

/* Mocking js-cookie library */

let mockSetCookie = jest.fn()
let mockRemoveCookie = jest.fn()

Cookie.set = mockSetCookie
Cookie.remove = mockRemoveCookie

describe('GyaanStore Tests', () => {
   let gyaanService
   let domainModel

   beforeEach(() => {
      gyaanService = new GyaanService()
      domainModel = new DomainModel(
         GetUserDomainData.following_domains[0],
         gyaanService
      )
   })

   it('should test initialising gyaan store', () => {
      expect(domainModel.offset).toBe(0)
      expect(domainModel.limit).toBe(5)
      expect(domainModel.getTagsAPIError).toBe(null)
      expect(domainModel.getTagsAPIStatus).toBe(API_INITIAL)
      expect(domainModel.tags).toEqual([])
      expect(domainModel.getLeaveDomainAPIStatus).toBe(API_INITIAL)
      expect(domainModel.getLeaveDomainAPIError).toBe(null)
      expect(domainModel.getPostsAPIStatus).toBe(API_INITIAL)
      expect(domainModel.getPostsAPIError).toBe(null)
      expect(domainModel.getDomainDataAPIStatus).toBe(API_INITIAL)
      expect(domainModel.getDomainDataAPIError).toBe(null)
      expect(domainModel.getDomainPosts).toEqual([])
      expect(domainModel.domainExperts).toEqual([])
      expect(domainModel.starsCount).toBe(0)
      expect(domainModel.followersCount).toBe(0)
      expect(domainModel.postsCount).toBe(0)
      expect(domainModel.domainPic).toBe(null)
      expect(domainModel.domainDescription).toBe(null)
      expect(domainModel.domainRequestedUsers).toBe(null)
      expect(domainModel.domainRequestedUsersCount).toBe(0)
   })
   it('should test getting gyaan following Domain posts API data fetching state', () => {
      const requestObject = {}
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockDomainsAPI = jest.fn()
      mockDomainsAPI.mockReturnValue(mockLoadingPromise)
      gyaanService.getFollowingDomainDetailsAPI = mockDomainsAPI

      domainModel.getDomainDetails(requestObject)
      expect(domainModel.getDomainDataAPIStatus).toBe(API_FETCHING)
   })

   it('should test gyaan following Domain posts API success state', async () => {
      const requestObject = {}
      const mockSuccessPromise = Promise.resolve(GetDomainData)
      const mockDomainsAPI = jest.fn()
      mockDomainsAPI.mockReturnValue(mockSuccessPromise)
      gyaanService.getFollowingDomainDetailsAPI = mockDomainsAPI

      await domainModel.getDomainDetails(requestObject)
      expect(domainModel.getDomainDataAPIStatus).toBe(API_SUCCESS)
   })

   it('should test get following domain posts API failure state', async () => {
      jest
         .spyOn(gyaanService, 'getFollowingDomainDetailsAPI')
         .mockImplementation(() => Promise.reject())

      await domainModel.getDomainDetails()
      expect(domainModel.getDomainDataAPIStatus).toBe(API_FAILED)
   })

   it('should test getting gyaan following Domains API data fetching state', () => {
      const requestObject = {}
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockDomainsAPI = jest.fn()
      mockDomainsAPI.mockReturnValue(mockLoadingPromise)
      gyaanService.getFollowingDomainPostsAPI = mockDomainsAPI

      domainModel.getPosts(requestObject)
      expect(domainModel.getPostsAPIStatus).toBe(API_FETCHING)
   })

   it('should test gyaan following Domains API success state', async () => {
      const requestObject = {}
      const mockSuccessPromise = Promise.resolve(GetDomainPostsData)
      const mockDomainsAPI = jest.fn()
      mockDomainsAPI.mockReturnValue(mockSuccessPromise)
      gyaanService.getFollowingDomainPostsAPI = mockDomainsAPI

      await domainModel.getPosts(requestObject)
      expect(domainModel.getPostsAPIStatus).toBe(API_SUCCESS)
   })

   it('should test get following domains API failure state', async () => {
      jest
         .spyOn(gyaanService, 'getFollowingDomainPostsAPI')
         .mockImplementation(() => Promise.reject())

      await domainModel.getPosts()
      expect(domainModel.getPostsAPIStatus).toBe(API_FAILED)
   })

   it('should test getting gyaan domain tags API data fetching state', () => {
      const requestObject = {}
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockDomainsAPI = jest.fn()
      mockDomainsAPI.mockReturnValue(mockLoadingPromise)
      gyaanService.getTags = mockDomainsAPI

      domainModel.getTags(requestObject)
      expect(domainModel.getTagsAPIStatus).toBe(API_FETCHING)
   })

   it('should test gyaan domain tags API success state', async () => {
      const requestObject = {}
      const mockSuccessPromise = Promise.resolve(GetTags)
      const mockDomainsAPI = jest.fn()
      mockDomainsAPI.mockReturnValue(mockSuccessPromise)
      gyaanService.getTags = mockDomainsAPI

      await domainModel.getTags(requestObject)
      expect(domainModel.getTagsAPIStatus).toBe(API_SUCCESS)
   })

   it('should test get domain tags API failure state', async () => {
      jest
         .spyOn(gyaanService, 'getTags')
         .mockImplementation(() => Promise.reject())

      await domainModel.getTags()
      expect(domainModel.getTagsAPIStatus).toBe(API_FAILED)
   })

   it('should test getting create post API posting state', () => {
      const requestObject = {
         title: 'sample title',
         post: 'sample post content'
      }
      const domainId = 2
      const onSuccess = jest.fn()
      const onFailure = jest.fn()
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockDomainsAPI = jest.fn()
      mockDomainsAPI.mockReturnValue(mockLoadingPromise)
      gyaanService.createPost = mockDomainsAPI

      domainModel.createPost(requestObject, domainId, onSuccess, onFailure)
      expect(domainModel.createPostAPIStatus).toBe(API_FETCHING)
      expect(onSuccess).not.toBeCalled()
      expect(onFailure).not.toBeCalled()
   })

   it('should test gyaan create post API success state', async () => {
      const requestObject = {
         title: 'sample title',
         post: 'sample post content'
      }
      const domainId = 2
      const onSuccess = jest.fn()
      const onFailure = jest.fn()
      const mockSuccessPromise = Promise.resolve()
      const mockDomainsAPI = jest.fn()
      mockDomainsAPI.mockReturnValue(mockSuccessPromise)
      gyaanService.createPost = mockDomainsAPI

      await domainModel.createPost(
         requestObject,
         domainId,
         onSuccess,
         onFailure
      )
      expect(domainModel.createPostAPIStatus).toBe(API_SUCCESS)
      expect(onSuccess).toBeCalled()
      expect(onFailure).not.toBeCalled()
   })

   it('should test get create post API failure state', async () => {
      const requestObject = {
         title: 'sample title',
         post: 'sample post content'
      }
      const domainId = 2
      const onSuccess = jest.fn()
      const onFailure = jest.fn()
      jest
         .spyOn(gyaanService, 'createPost')
         .mockImplementation(() => Promise.reject())

      await domainModel.createPost(
         requestObject,
         domainId,
         onSuccess,
         onFailure
      )
      expect(domainModel.createPostAPIStatus).toBe(API_FAILED)
      expect(onSuccess).not.toBeCalled()
      expect(onFailure).toBeCalled()
   })

   it('should test leave domiain api state', () => {
      const onSuccess = jest.fn()
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockDomainsAPI = jest.fn()
      mockDomainsAPI.mockReturnValue(mockLoadingPromise)
      gyaanService.leaveDomain = mockDomainsAPI

      domainModel.leaveDomain(onSuccess)
      expect(domainModel.getLeaveDomainAPIStatus).toBe(API_FETCHING)
      expect(onSuccess).not.toBeCalled()
   })

   it('should test gyaan leave domiain api success state', async () => {
      const onSuccess = jest.fn()
      const mockSuccessPromise = Promise.resolve(GetTags)
      const mockDomainsAPI = jest.fn()
      mockDomainsAPI.mockReturnValue(mockSuccessPromise)
      gyaanService.leaveDomain = mockDomainsAPI

      await domainModel.leaveDomain(onSuccess)
      expect(domainModel.getLeaveDomainAPIStatus).toBe(API_SUCCESS)
      expect(onSuccess).toBeCalled()
   })

   it('should test leave domiain api failure state', async () => {
      jest
         .spyOn(gyaanService, 'leaveDomain')
         .mockImplementation(() => Promise.reject())
      const onSuccess = jest.fn()
      await domainModel.leaveDomain(onSuccess)
      expect(domainModel.getLeaveDomainAPIStatus).toBe(API_FAILED)
      expect(onSuccess).not.toBeCalled()
   })
})
