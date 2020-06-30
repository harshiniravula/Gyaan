import { observable, action, computed, reaction } from 'mobx'
import { API_INITIAL, API_SUCCESS } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

import GyaanService from '../../services/GyaanService/GyaanFixture'
import BasicPostModel from '../models/BasicPostModel'
import DomainModel from '../models/DomainModel'
import SuggestedDomainModel from '../models/SuggestedDomainModel'

class GyaanStore {
   @observable getGyaanDomainsAPIStatus!: number
   @observable getGyaanDomainsAPIError: any
   @observable followingDomains!: any
   @observable suggestedDomains!: Array<SuggestedDomainModel>
   @observable getPostsAPIStatus!: number
   @observable getPostsAPIError!: Error | null
   @observable offset!: number
   @observable selectedDomainId!: number | null
   @observable selectedPostId!: number
   @observable getSelectedPostAPIStatus!: number
   @observable getSelectedPostAPIError!: Error | null
   getAllDomainsPostsResponse!: Array<BasicPostModel>
   tags
   limit
   selectedPost
   gyaanAPIService: GyaanService
   constructor(gyaanAPIService: GyaanService) {
      this.init()
      this.gyaanAPIService = gyaanAPIService
   }
   @action.bound
   init() {
      this.selectedDomainId = null
      this.getSelectedPostAPIStatus = API_INITIAL
      this.getSelectedPostAPIError = null
      this.getGyaanDomainsAPIStatus = API_INITIAL
      this.getGyaanDomainsAPIError = null
      this.getPostsAPIStatus = API_INITIAL
      this.getPostsAPIError = null
      this.followingDomains = []
      this.suggestedDomains = []
      this.getAllDomainsPostsResponse = []
      this.limit = 10
      this.offset = 0
      this.selectedPostId = 0
      this.selectedPost = {}
   }

   disposer = reaction(
      () => {
         return this.selectedDomainId
      },
      id => {
         if (id) {
            this.clearPosts()
            let domainModel = this.followingDomains.find(
               domain => domain.domainId === id
            )
            if (domainModel) {
               domainModel.onClickDomain()
            }
         }
      }
   )

   @action.bound
   onClickLoadMore() {
      this.offset = this.offset + this.limit
      this.getDomainPosts()
   }

   @action.bound
   setGetGyaanDomainResponse(response) {
      this.followingDomains = response.following_domains.map(eachDomain => {
         return new DomainModel(eachDomain, this.gyaanAPIService)
      })
      this.suggestedDomains = response.suggested_domains.map(eachDomain => {
         return new SuggestedDomainModel(eachDomain, this.gyaanAPIService)
      })
   }

   @action.bound
   setGetGyaanDomainAPIError(error) {
      this.getGyaanDomainsAPIError = error
   }

   @action.bound
   onClickAllDomains() {
      this.getDomainPosts()
   }

   @action.bound
   setGetPostsResponse(response) {
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
         console.table(this.getAllDomainsPostsResponse)
      }
   }

   @action.bound
   clearPosts() {
      this.getAllDomainsPostsResponse = []
   }

   @action.bound
   setSelectedPostId(id, domainId) {
      this.selectedDomainId = domainId
      this.selectedPostId = id
      this.getPostDetails(domainId, id)
   }

   @action.bound
   setGetPostsAPIError(error) {
      this.getPostsAPIError = error
   }

   @computed
   get postsApiStatus() {
      return this.getGyaanDomainsAPIStatus === API_SUCCESS
         ? this.getPostsAPIStatus
         : this.getGyaanDomainsAPIStatus
   }

   @action.bound
   setGetPostsAPIStatus(apiStatus) {
      this.getPostsAPIStatus = apiStatus
   }

   @action.bound
   setGetGyaanDomainAPIStatus(apiStatus: number) {
      this.getGyaanDomainsAPIStatus = apiStatus
   }

   @action.bound
   setGetPostDetailsAPIStatus(apiStatus: number) {
      this.getSelectedPostAPIStatus = apiStatus
   }
   @action.bound
   setGetPostDetailsAPIResponse(response: any) {
      this.selectedPost = new BasicPostModel(
         response,
         response.domain.domain_id,
         response.domain.domain_name,
         this.gyaanAPIService
      )
   }
   @action.bound
   setGetPostDetailsAPIError(error) {
      this.getSelectedPostAPIError = error
   }

   @action.bound
   getPostDetails(domainId: number, postId: number) {
      const usersPromise = this.gyaanAPIService.getSelectedPostAPI(
         {},
         domainId,
         postId
      )
      return bindPromiseWithOnSuccess(usersPromise)
         .to(this.setGetPostDetailsAPIStatus, this.setGetPostDetailsAPIResponse)
         .catch(this.setGetPostDetailsAPIError)
   }

   @action.bound
   getDomainPosts() {
      const usersPromise = this.gyaanAPIService.getPostsAPI(
         this.limit,
         this.offset
      )
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

   @action.bound
   setSelectedDomainId(id: number | null) {
      this.selectedDomainId = id
   }
}

export default GyaanStore
