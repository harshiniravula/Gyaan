import { observable, action } from 'mobx'

import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

class SuggesttedDomainModel {
   @observable isRequested;
   constructor(domainDetails, gyaanAPIService) {
      this.domainId = domainDetails.domain_id;
      this.domainName = domainDetails.domain_name;
      this.isRequested = domainDetails.is_requested;
      this.gyaanAPIService = gyaanAPIService;
   }
   @action.bound
   setGetFollowAPIStatus(status) {
      this.getFollowAPIStatus = status;
   }
   @action.bound
   setGetFollowResponse(response) {
      this.isRequested = !this.isRequested;
   }
   @action.bound
   setGetFollowAPIError(error) {
      this.getFollowAPIError = error;
   }

   @action.bound
   onClickFollowOrCancel() {
      const status = (this.isRequested ? 'cancel' : 'follow');
      const usersPromise = this.gyaanAPIService.followOrCancelDomainRequest(status, this.domainId);
      return bindPromiseWithOnSuccess(usersPromise)
         .to(this.setGetFollowAPIStatus, this.setGetFollowResponse)
         .catch(this.setGetFollowAPIError)
   }
}

export default SuggesttedDomainModel
