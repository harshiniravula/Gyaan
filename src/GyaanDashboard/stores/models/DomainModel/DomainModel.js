import { observable, action } from 'mobx'

import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

import BasicPostModel from '../BasicPostModel'
class DomainModel {
   @observable getPostsAPIStatus
   @observable getPostsAPIError
   @observable getDomainDataAPIStatus
   @observable getDomainDataAPIError
   @observable getDomainPosts
   @observable domainExperts
   @observable starsCount
   @observable followersCount
   @observable domainPic
   @observable domainDescription
   @observable domainRequestedUsers
   @observable domainRequestedUsersCount
   constructor(domainDetails, gyaanAPIService) {
      this.gyaanAPIService = gyaanAPIService
      this.domainId = domainDetails.domain_id
      this.domainName = domainDetails.domain_name
      this.init()
   }

   @action.bound
   init() {
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

      this.domainRequestedUsersCount =
         response.domain_requested_users.total_requests
      this.domainRequestedUsers = response.domain_requested_users
         ? response.domain_requested_users.users.length
            ? response.domain_requested_users.users.map(user => {
                 return {
                    userId: user.user_id,
                    username: user.username,
                    profilePic: user.profile_pic
                 }
              })
            : []
         : null
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
      this.getDomainPosts = response.map(
         post =>
            new BasicPostModel(
               post,
               this.domainId,
               this.domainName,
               this.gyaanAPIService
            )
      )
   }
   @action.bound
   setGetDomainDetailsAPIError(error) {
      this.getDomainDataAPIError = error
   }
   @action.bound
   getPosts(requestObject) {
      const usersPromise = this.gyaanAPIService.getFollowingDomainPostsAPI(
         requestObject
      )
      return bindPromiseWithOnSuccess(usersPromise)
         .to(this.setGetPostsAPIStatus, this.setGetPostsResponse)
         .catch(this.setGetPostsAPIError)
   }

   @action.bound
   getDomainDetails(requestObject) {
      const usersPromise = this.gyaanAPIService.getFollowingDomainDetailsAPI(
         requestObject
      )
      return bindPromiseWithOnSuccess(usersPromise)
         .to(
            this.setGetDomainDetailsAPIStatus,
            this.setGetDomainDetailsResponse
         )
         .catch(this.setGetDomainDetailsAPIError)
   }
}

export default DomainModel
