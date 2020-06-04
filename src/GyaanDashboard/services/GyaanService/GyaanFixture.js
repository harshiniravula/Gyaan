import GetUserDomainData from '../../fixtures/GetUserDomainData.json'
import GetPostsData from '../../fixtures/GetPostsData.json'
import GetDomainPostsData from '../../fixtures/GetDomainPostsData.json'
import GetDomainData from '../../fixtures/GetDomainData.json'
import GetSelectedPostData from '../../fixtures/GetSelectedPostData.json'
class LogInService {
   getPostsAPI(requestObject) {
      return new Promise((resolve, reject) => {
         resolve(GetPostsData)
      })
   }
   getSelectedPostAPI(requestObject) {
      return new Promise((resolve, reject) => {
         resolve(GetSelectedPostData)
      })
   }
   getDomainsAPI(requestObject) {
      return new Promise((resolve, reject) => {
         resolve(GetUserDomainData)
      })
   }
   getFollowingDomainPostsAPI(requestObject) {
      return new Promise((resolve, reject) => {
         resolve(GetDomainPostsData)
      })
   }
   getFollowingDomainDetailsAPI(requestObject) {
      return new Promise((resolve, reject) => {
         resolve(GetDomainData)
      })
   }
}

export default LogInService
