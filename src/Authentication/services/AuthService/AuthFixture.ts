import getUserLogInResponse from '../../fixtures/getUserLogInResponse.json'
import ResponseType from ".";
class LogInService {
   getUsersAPI(requestObject:object) {
      return new Promise((resolve, reject) => {
         resolve(getUserLogInResponse)
      })
   }
   postUsersAPI(requestObject:object) {
      return new Promise((resolve, reject) => {
         resolve(getUserLogInResponse)
      })
   }
}

export default LogInService
