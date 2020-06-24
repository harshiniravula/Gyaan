import { create } from 'apisauce'

import GetDomainPostsData from '../../fixtures/GetDomainPostsData.json'
import GetSelectedPostData from '../../fixtures/GetSelectedPostData.json'
import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'
import endPoints from '../endPoints'
class GyaanService {
   api
   constructor() {
      this.api = create({
         baseURL: 'https://2f876d98d912.ngrok.io/api/gyaan/'
      })
   }
   getPostsAPI(limit, offset) {
      const endPoint = `users/posts/v1/?offset=${offset}&limit=${limit}`
      return networkCallWithApisauce(this.api, endPoint, {}, apiMethods.get)
   }

   getDomainsAPI(requestObject) {
      return networkCallWithApisauce(
         this.api,
         endPoints.sidebar,
         requestObject,
         apiMethods.get
      )
   }

   getTags(domainId) {
      const endPoint = `domains/${domainId}/tags/v1/`
      return networkCallWithApisauce(this.api, endPoint, {}, apiMethods.get)
   }

   createPost(requestObject, domainId) {
      const endPoint = `domains/${domainId}/posts/v1/`
      return networkCallWithApisauce(
         this.api,
         endPoint,
         requestObject,
         apiMethods.post
      )
   }
   getSelectedPostAPI(requestObject,domainId,postId) {
      return new Promise((resolve, reject) => {
         resolve(GetSelectedPostData)
      })
   }

   getFollowingDomainPostsAPI(requestObject) {
      return new Promise((resolve, reject) => {
         resolve(GetDomainPostsData)
      })
   }
   getFollowingDomainDetailsAPI(domainId) {
      const endPoint = `domains/${domainId}/v1/`
      return networkCallWithApisauce(this.api, endPoint, {}, apiMethods.get)
   }
   followOrCancelDomainRequest(status, domainId) {
      const endPoint = `users/domains/${domainId}/request/v1/`
      return networkCallWithApisauce(
         this.api,
         endPoint,
         {
            request_type: status
         },
         apiMethods.post
      )
   }

   leaveDomain(domainId) {
      const endPoint = `domains/${domainId}/leave/v1/`
      return networkCallWithApisauce(this.api, endPoint, {}, apiMethods.post)
   }
   acceptOrRejectRequest(requestObject) {
      const endPoint = `domain_experts/domains/requests/v1/`
      return networkCallWithApisauce(
         this.api,
         endPoint,
         requestObject,
         apiMethods.post
      )
   }
   onClickReaction(type, id) {
      return new Promise(resolve => {
         resolve('aceepted/rejected')
      })
   }
}

export default GyaanService
