import { observable, action } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import {
   setAccessToken,
   clearUserSession
}
from '../../../utils/StorageUtils'
class AuthStore {
   @observable getUserSignInAPIStatus
   @observable getUserSignInAPIError
   getRole;
   constructor(authAPIService) {
      this.authAPIService = authAPIService;

      this.init();

   }
   @action
   init() {
      this.getUserSignInAPIStatus = API_INITIAL
      this.getUserSignInAPIError = null;
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
   setUserSignInAPIResponse(response) {

      const { access_token } = response.access_token;
      setAccessToken(access_token);
      this.getRole = response.role;
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
   userSignUp(requestObject, onSuccess, onFailure) {

      const usersPromise = this.authAPIService.postUsersAPI(requestObject)
      return bindPromiseWithOnSuccess(usersPromise)
         .to(this.setGetUserSignInAPIStatus, response => {
            this.setUserSignInAPIResponse(response);
            onSuccess();
         })
         .catch(error => {
            this.setGetUserSignInAPIError(error);
            onFailure(error);
         })

   }

   @action.bound
   userSignIn(requestObject, onSuccess, onFailure) {
      const usersPromise = this.authAPIService.getUsersAPI(requestObject)
      return bindPromiseWithOnSuccess(usersPromise)
         .to(this.setGetUserSignInAPIStatus, response => {
            this.setUserSignInAPIResponse(response);
            onSuccess();
         })
         .catch(error => {
            this.setGetUserSignInAPIError(error);
            onFailure(error);
         })
   }
}

export default AuthStore
