import { observable, action, computed, reaction } from 'mobx'
import { API_INITIAL, API_SUCCESS } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import BasicPostModel from '../models/BasicPostModel'
import DomainModel from '../models/DomainModel'
import SuggestDomainModel from '../models/SuggestDomainModel'

class GyaanStore {
   @observable getGyaanDomainsAPIStatus
   @observable getGyaanDomainsAPIError
   @observable followingDomains
   @observable suggestedDomains
   @observable pendingForReviewPosts
   @observable pendingPosts
   @observable getPostsAPIStatus
   @observable getPostsAPIError
   @observable getAllDomainsPostsResponse
   @observable offset
   @observable selectedDomainId
   @observable selectedPostId
   @observable getSelectedPostAPIStatus
   @observable getSelectedPostAPIError
   limit
   selectedPost
   constructor(gyaanAPIService) {
      this.init()
      this.gyaanAPIService = gyaanAPIService
   }
   @action.bound
   init() {
      this.selectedDomainId = undefined
      this.getSelectedPostAPIStatus = API_INITIAL
      this.getSelectedPostAPIError = null
      this.getGyaanDomainsAPIStatus = API_INITIAL
      this.getGyaanDomainsAPIError = null
      this.getPostsAPIStatus = API_INITIAL
      this.getPostsAPIError = null
      this.followingDomains = []
      this.suggestedDomains = []
      this.pendingForReviewPosts = []
      this.pendingPosts = []
      this.getAllDomainsPostsResponse = []
      this.limit = 10
      this.offset = 0
      this.selectedPostId = 0
      this.selectedPost = {}
   }
   @action.bound
   clearStore() {
      this.init()
   }

   @action.bound
   setSelectedDomainId(id) {
      this.selectedDomainId = id
   }

   disposer = reaction(
      () => this.selectedDomainId,
      id => {
         if (this.selectedDomainId !== null) {
            this.followingDomains
               .find(domain => domain.domainId === this.selectedDomainId)
               .onClickDomain({})
         }
      }
   )

   @action.bound
   setGetGyaanDomainResponse(response) {
      this.followingDomains = response.following_domains.map(eachDomain => {
         return new DomainModel(eachDomain, this.gyaanAPIService)
      })
      this.suggestedDomains = response.suggested_domains.map(eachDomain => {
         return new SuggestDomainModel(eachDomain, this.gyaanAPIService)
      })
   }

   @action.bound
   setGetGyaanDomainAPIError(error) {
      this.getGyaanDomainsAPIError = error
   }

   @action.bound
   onClickSuggestedDomain() {}

   @action.bound
   onClickAllDomains() {
      this.getDomainPosts({})
   }

   @action.bound
   setGetPostsResponse(response) {
      this.getAllDomainsPostsResponse = []
      if (response) {
         response.forEach(post => {
            this.getAllDomainsPostsResponse.push(
               new BasicPostModel(
                  post,
                  post.domain.domain_id,
                  post.domain.domain_name,
                  this.gyaanAPIService
               )
            )
         })
      }
   }

   @action.bound
   setSelectedPostId(id, domainId) {
      this.selectedDomainId = domainId
      this.selectedPostId = id
      this.getPostDetails()
   }

   @action.bound
   setGetPostsAPIError(error) {
      this.getPostsAPIError = error
   }

   @computed
   get postsApiStatus() {
      return this.getGyaanDomainsAPIStatus === API_SUCCESS ?
         this.getPostsAPIStatus :
         this.getGyaanDomainsAPIStatus
   }

   @action.bound
   setGetPostsAPIStatus(apiStatus) {
      this.getPostsAPIStatus = apiStatus
   }

   @action.bound
   setGetGyaanDomainAPIStatus(apiStatus) {
      this.getGyaanDomainsAPIStatus = apiStatus
   }

   @action.bound
   setGetPostDetailsAPIStatus(apiStatus) {
      this.getSelectedPostAPIStatus = apiStatus
   }
   @action.bound
   setGetPostDetailsAPIResponse(response) {
      this.selectedPost = new BasicPostModel(
         response,
         response.domain.domain_id,
         response.domain.domain_name,
         this.gyaanAPIService);
   }
   @action.bound
   setGetPostDetailsAPIError(error) {
      this.getSelectedPostAPIError = error
   }

   @action.bound
   getPostDetails() {
      const usersPromise = this.gyaanAPIService.getSelectedPostAPI({})
      console.log(usersPromise)
      return bindPromiseWithOnSuccess(usersPromise)
         .to(this.setGetPostDetailsAPIStatus, this.setGetPostDetailsAPIResponse)
         .catch(this.setGetPostDetailsAPIError)
   }

   @action.bound
   getDomainPosts(requestObject) {
      const usersPromise = this.gyaanAPIService.getPostsAPI(requestObject)
      return bindPromiseWithOnSuccess(usersPromise)
         .to(this.setGetPostsAPIStatus, this.setGetPostsResponse)
         .catch(this.setGetPostsAPIError)
   }

   @action.bound
   getGyaanDomainData(requestObject) {
      const usersPromise = this.gyaanAPIService.getDomainsAPI(requestObject)
      return bindPromiseWithOnSuccess(usersPromise)
         .to(this.setGetGyaanDomainAPIStatus, this.setGetGyaanDomainResponse)
         .catch(this.setGetGyaanDomainAPIError)
   }
}

export default GyaanStore
