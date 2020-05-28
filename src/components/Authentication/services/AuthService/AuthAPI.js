import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'
import endPoints from '../endPoints'

class AuthService {
   api
   constructor() {
      this.api = create({
         baseURL: 'gyaan'
      })
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
