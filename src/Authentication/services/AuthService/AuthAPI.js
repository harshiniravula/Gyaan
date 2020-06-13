import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'
import endPoints from '../endPoints'

class AuthService {
   api
   constructor() {
      this.api = create({
         baseURL: 'https://2f876d98d912.ngrok.io/api/gyaan/'
      })
   }

   postUsersAPI(requestObject) {

      return networkCallWithApisauce(
         this.api,
         endPoints.signUp,
         requestObject,
         apiMethods.post
      )
   }

   getUsersAPI(requestObject) {

      return networkCallWithApisauce(
         this.api,
         endPoints.logIn,
         requestObject,
         apiMethods.post
      )
   }
}

export default AuthService
