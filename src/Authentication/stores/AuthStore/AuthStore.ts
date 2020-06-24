import { observable, action } from 'mobx'

import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

import { setAccessToken } from '../../../utils/StorageUtils'
import AuthService from '../../services/AuthService/AuthFixture'

class AuthStore {
   @observable getUserSignInAPIStatus!: number
   @observable getUserSignInAPIError:any
   authAPIService:AuthService
   constructor(authAPIService:AuthService) {
      this.authAPIService = authAPIService
      this.init()
   }
   @action
   init() {
      this.getUserSignInAPIStatus = API_INITIAL
      this.getUserSignInAPIError = null
   }
   
   @action.bound
   setGetUserSignInAPIStatus(apiStatus:number) {
      this.getUserSignInAPIStatus = apiStatus
   }

   @action.bound
   setUserSignInAPIResponse(response) {
      const { access_token } = response
      setAccessToken(access_token)
   }

   @action.bound
   setGetUserSignInAPIError(error:unknown) {
      this.getUserSignInAPIError = error
   }
  
   @action.bound
   userSignUp(requestObject:object, onSuccess:()=>void, onFailure:Function):any {
      const usersPromise = this.authAPIService.getUsersAPI(requestObject)
      return bindPromiseWithOnSuccess(usersPromise)
         .to(this.setGetUserSignInAPIStatus,(response)=> {
            this.setUserSignInAPIResponse(response)
            onSuccess()
         })
         .catch((error:unknown) => {
            this.setGetUserSignInAPIError(error)
            onFailure(error)
         })
   }

   @action.bound
   userSignIn(requestObject:object, onSuccess:()=>void, onFailure:Function):any {
      const usersPromise = this.authAPIService.getUsersAPI(requestObject)
      return bindPromiseWithOnSuccess(usersPromise)
         .to(this.setGetUserSignInAPIStatus, (response:unknown) => {
            this.setUserSignInAPIResponse(response)
            onSuccess()
         })
         .catch((error:unknown) => {
            this.setGetUserSignInAPIError(error)
            onFailure(error)
         })
   }

   @action.bound
   clearStore() {
      this.init()
   }
}

export default AuthStore
