import GetUserDomainData from '../../fixtures/GetUserDomainData.json'
import GetPostsData from '../../fixtures/GetPostsData.json'
import GetDomainPostsData from '../../fixtures/GetDomainPostsData.json'
import GetDomainData from '../../fixtures/GetDomainData.json'
import GetSelectedPostData from '../../fixtures/GetSelectedPostData.json'
import GetTags from '../../fixtures/GetTags.json'
class GyaanService {
   getPostsAPI(requestObject) {
      return new Promise((resolve, reject) => {
         resolve(GetPostsData)
      })
   }
   getTags() {
      return new Promise((resolve, reject) => {
         console.log(GetTags);
         resolve(GetTags)
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
   followOrCancelDomainRequest(status, domainId) {
      return new Promise((resolve, reject) => {
         resolve(status);
      })
   }

   createPost(requestObject, domainId) {
      return new Promise(resolve => {
         resolve();
      })
   }

   leaveDomain(domainId) {
      return new Promise((resolve, reject) => {
         resolve('left domain');
      })
   }
   acceptOrRejectRequest(requestObject) {
      return new Promise(resolve => {
         resolve('aceepted/rejected')
      })
   }
   onClickReaction(type, id) {
      return new Promise(resolve => {
         resolve('aceepted/rejected')
      })
   }
}

export default GyaanService;
