import { observable, action } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import {
   setAccessToken,
   clearUserSession
}
from '../../../../utils/StorageUtils'
class AuthStore {
   @observable getUserSignInAPIStatus
   @observable getUserSignInAPIError
   constructor(authAPIService) {
      this.authAPIService = authAPIService
      this.init()
   }
   @action
   init() {
      this.getUserSignInAPIStatus = API_INITIAL
      this.getUserSignInAPIError = null
   }
   @action.bound
   clearStore() {
      this.init()
   }
   @action.bound
   setGetUserSignInAPIError(error) {
      this.getUserSignInAPIError = error;
   }

   @action.bound
   setUserSignInAPIResponse(Response) {
      const { access_token } = Response.access_token;
      setAccessToken(access_token)
   }
   @action.bound
   setGetUserSignInAPIStatus(apiStatus) {
      this.getUserSignInAPIStatus = apiStatus
   }

   @action.bound
   userSignOut() {
      clearUserSession()
   }

   @action.bound
   userSignIn(requestObject, onSuccess, onFailure) {
      const usersPromise = this.authAPIService.getUsersAPI(requestObject)
      return bindPromiseWithOnSuccess(usersPromise)
         .to(this.setGetUserSignInAPIStatus, props => {
            this.setUserSignInAPIResponse(props)
            return onSuccess()
         })
         .catch(props => {
            this.setGetUserSignInAPIError(props);
            return onFailure(props);
         })
   }
}

export default AuthStore
