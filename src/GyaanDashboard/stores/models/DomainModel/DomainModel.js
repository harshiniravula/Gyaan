import { observable, action } from 'mobx'

import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import BasicPostModel from '../BasicPostModel'
import Request from '../Request'

class DomainModel {
   @observable getPostsAPIStatus
   @observable getPostsAPIError
   @observable getDomainDataAPIStatus
   @observable getDomainDataAPIError
   @observable getLeaveDomainAPIStatus;
   @observable getLeaveDomainAPIError;
   @observable getTagsAPIError
   @observable getTagsAPIStatus
   getDomainPosts
   domainExperts
   starsCount
   followersCount
   domainPic
   domainDescription
   @observable domainRequestedUsers
   @observable domainRequestedUsersCount
   @observable createPostAPIStatus
   @observable offset
   limit
   constructor(domainDetails, gyaanAPIService) {
      this.gyaanAPIService = gyaanAPIService
      this.domainId = domainDetails.domain_id
      this.domainName = domainDetails.domain_name
      this.init();
   }

   @action.bound
   init() {
      this.offset = 0;
      this.limit = 5;
      this.getTagsAPIError = null
      this.getTagsAPIStatus = API_INITIAL
      this.tags = [];
      this.getLeaveDomainAPIStatus = API_INITIAL
      this.getLeaveDomainAPIError = null
      this.getPostsAPIStatus = API_INITIAL
      this.getPostsAPIError = null
      this.getDomainDataAPIStatus = API_INITIAL
      this.getDomainDataAPIError = null
      this.getDomainPosts = []
      this.domainExperts = []
      this.starsCount = 0
      this.followersCount = 0
      this.postsCount = 0
      this.domainPic = null
      this.domainDescription = null
      this.domainRequestedUsers = null
      this.domainRequestedUsersCount = 0
   }

   @action.bound
   onClickDomain() {
      this.getDomainDetails({})
      this.getPosts({})
   }

   @action.bound
   setGetPostsAPIStatus(apiStatus) {
      this.getPostsAPIStatus = apiStatus
   }

   @action.bound
   setGetDomainDetailsResponse(response) {
      this.domainExperts = response.domain_experts.map(expert => {
         return {
            id: expert.user_id,
            name: expert.username,
            profilePic: expert.profile_pic
         }
      })
      this.starsCount = response.stars_count
      this.followersCount = response.followers_count
      this.postsCount = response.posts_count
      this.domainPic = response.domain_pic
      this.domainExpertsCount = response.domain_experts_count
      this.domainDescription = response.domain_description


      this.domainRequestedUsersCount = response.domain_requested_users ?
         response.domain_requested_users.total_requests : null
      this.domainRequestedUsers = response.domain_requested_users ?
         response.domain_requested_users.users.length ?
         response.domain_requested_users.users.map(user =>
            new Request(user, this.gyaanAPIService)
         ) : [] :
         null
   }

   @action.bound
   setGetPostsAPIError(error) {
      this.getPostsAPIError = error
   }

   @action.bound
   setGetDomainDetailsAPIStatus(apiStatus) {
      this.getDomainDataAPIStatus = apiStatus
   }
   @action.bound
   setGetPostsResponse(response) {
      response.forEach(
         post => {
            this.getDomainPosts.push(new BasicPostModel(
               post,
               this.domainId,
               this.domainName,
               this.gyaanAPIService
            ))
         }
      )

   }
   @action.bound
   setGetDomainDetailsAPIError(error) {
      this.getDomainDataAPIError = error
   }
   @action.bound
   getPosts(requestObject) {
      const usersPromise = this.gyaanAPIService.getFollowingDomainPostsAPI(
         this.domainId, this.limit, this.offset
      )
      return bindPromiseWithOnSuccess(usersPromise)
         .to(this.setGetPostsAPIStatus, this.setGetPostsResponse)
         .catch(this.setGetPostsAPIError)
   }

   @action.bound
   onClickLoadMore() {
      this.offset = this.offset + this.limit;
      this.getPosts();

   }
   @action.bound
   clearPosts() {
      this.getDomainPosts = [];
   }

   @action.bound
   getDomainDetails(requestObject) {
      const usersPromise = this.gyaanAPIService.getFollowingDomainDetailsAPI(
         this.domainId
      )
      return bindPromiseWithOnSuccess(usersPromise)
         .to(
            this.setGetDomainDetailsAPIStatus,
            this.setGetDomainDetailsResponse
         )
         .catch(this.setGetDomainDetailsAPIError)
   }

   @action.bound
   setGetLeaveDomainAPIStatus(apiStatus) {
      this.getLeaveDomainAPIStatus = apiStatus;
   }

   @action.bound
   setGetLeaveDomainAPIResponse(response) {}
   @action.bound
   setGetLeaveDomainAPIError(error) {
      this.getLeaveDomainAPIError = error;
   }

   @action.bound
   leaveDomain(onSuccess) {
      const leavePromise = this.gyaanAPIService.leaveDomain(
         this.domainId
      )
      return bindPromiseWithOnSuccess(leavePromise)
         .to(
            this.setGetLeaveDomainAPIStatus,
            onSuccess
         )
         .catch(this.setGetLeaveDomainAPIError)
   }
   @action.bound
   getTags() {
      const domainTagsPromise = this.gyaanAPIService.getTags(this.domainId);
      return bindPromiseWithOnSuccess(domainTagsPromise)
         .to(this.setGetTagsAPIStatus, this.setGetTagsAPIResponse)
         .catch(this.setGetTagsAPIError)
   }


   @action.bound
   setGetTagsAPIStatus(apiStatus) {
      this.getTagsAPIStatus = apiStatus;
   }


   @action.bound
   setGetTagsAPIError(error) {
      this.getTagsAPIError = error;
   }

   @action.bound
   setGetTagsAPIResponse(response) {
      this.tags = response.tags.map(tag => {
         return {
            tagId: tag.tag_id,
            tagName: tag.tag_name
         }
      })
   }


   @action.bound
   createPost(requestObject, domainId, onSuccess, onFailure) {
      const usersPromise = this.gyaanAPIService.createPost(requestObject, domainId)
      return bindPromiseWithOnSuccess(usersPromise)
         .to(this.setCreatePostAPIStatus, onSuccess)
         .catch(onFailure)
   }

   @action.bound
   setCreatePostAPIStatus(apiStatus) {
      this.createPostAPIStatus = apiStatus;
   }
}

export default DomainModel
