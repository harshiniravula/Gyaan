import { observable, action } from 'mobx'

import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

import GyaanService from '../../../services/GyaanService/GyaanFixture'

class SuggesttedDomainModel {
   @observable isRequested!:boolean
   @observable getFollowAPIStatus!:number
   @observable getFollowAPIError:unknown
   domainId!:number
   domainName!:string
   gyaanAPIService!:GyaanService
   constructor(domainDetails:any, gyaanAPIService:GyaanService) {
      this.domainId = domainDetails.domain_id
      this.domainName = domainDetails.domain_name
      this.isRequested = domainDetails.is_requested
      this.gyaanAPIService = gyaanAPIService
      this.init()
   }
   @action.bound
   init() {
      this.getFollowAPIStatus = API_INITIAL
      this.getFollowAPIError = null
   }
   @action.bound
   setGetFollowAPIStatus(status:number) {
      this.getFollowAPIStatus = status
   }
   @action.bound
   setGetFollowResponse() {
      this.isRequested = !this.isRequested
   }
   @action.bound
   setGetFollowAPIError(error:unknown) {
      this.getFollowAPIError = error
   }

   @action.bound
   onClickFollowOrCancel() {
      const status = this.isRequested ? 'cancel' : 'follow'
      const usersPromise = this.gyaanAPIService.followOrCancelDomainRequest(
         status,
         this.domainId
      )
      return bindPromiseWithOnSuccess(usersPromise)
         .to(this.setGetFollowAPIStatus, this.setGetFollowResponse)
         .catch(this.setGetFollowAPIError)
   }
}

export default SuggesttedDomainModel
