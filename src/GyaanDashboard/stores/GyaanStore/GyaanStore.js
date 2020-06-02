import { observable, action, autorun } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import Strings from '../../i18n/Strings.json'
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
   @observable selectedDomainId;
   limit
   constructor(gyaanAPIService, authStore) {
      this.init()
      this.gyaanAPIService = gyaanAPIService
      this.authStore = authStore
   }
   @action.bound
   init() {
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
   }
   @action.bound
   clearStore() {
      this.init()
   }

   @action.bound
   setSelectedDomainId(id) {
      this.selectedDomainId = id;
   }

   disposer = autorun(
      () => {
         if (this.selectedDomainId === null) {
            this.getDomainPosts({});
         }
         else {
            this.followingDomains.find(domain =>
               domain.domainId === this.selectedDomainId).onClickDomain({});

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

      this.pendingForReviewPosts = response.pending_for_review_posts
      this.pendingPosts = response.pendingPosts
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
      if (response) {
         response.forEach(post => {
            this.getAllDomainsPostsResponse.push(
               new BasicPostModel(
                  post,
                  post.domain.domain_name,
                  post.domain.domain_pic
               )
            )
         })
      }
   }
   @action.bound
   setGetPostsAPIError(error) {
      console.log(error)
      this.getPostsAPIError = error
   }

   @action.bound
   setGetPostsAPIStatus(apiStatus) {
      console.log(apiStatus);
      this.getPostsAPIStatus = apiStatus
   }

   @action.bound
   setGetGyaanDomainAPIStatus(apiStatus) {
      this.getGyaanDomainsAPIStatus = apiStatus
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
