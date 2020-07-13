import {resolveWithTimeout} from '../../../utils/TestUtils'

import GetUserDomainData from '../../fixtures/GetUserDomainData.json'
import GetPostsData from '../../fixtures/GetPostsData.json'
import GetDomainPostsData from '../../fixtures/GetDomainPostsData.json'
import GetDomainData from '../../fixtures/GetDomainData.json'
import GetSelectedPostData from '../../fixtures/GetSelectedPostData.json'
import GetTags from '../../fixtures/GetTags.json'

import PostsService from '.'

class GyaanService implements PostsService{
   getPostsAPI(limit, offset) {
      return resolveWithTimeout(GetPostsData)
   }
   
   getTags(domainId) {
      return resolveWithTimeout(GetTags)
   }
   
   getSelectedPostAPI(requestObject,domainId,postId) {
      return resolveWithTimeout(GetSelectedPostData)
   }

   getDomainsAPI(requestObject) {
      return resolveWithTimeout(GetUserDomainData)
   }

   getFollowingDomainPostsAPI(domainId,limit,offset) {
      return resolveWithTimeout(GetDomainPostsData)
     
   }

   getFollowingDomainDetailsAPI(domainId) {
      return resolveWithTimeout(GetDomainData)
      
   }

   followOrCancelDomainRequest(status, domainId) {
      return resolveWithTimeout('resolve')
      
   }

   createPost(requestObject, domainId) {
      return resolveWithTimeout('resolve')
   }

   leaveDomain(domainId) {
      return resolveWithTimeout('resolve')
   }

   acceptOrRejectRequest(requestObject) {
      return resolveWithTimeout('resolve')
   }

   onClickReaction(type, id) {
      return resolveWithTimeout('resolve')
   }
}

export default GyaanService
/*  "pending_posts": {
        "total_count": 10,
        "domains": [{
                "domain_id": 3,
                "domain_name": "React",
                "posts_count": 5
            },
            {
                "domain_id": 1,
                "domain_name": "video editing",
                "posts_count": 3
            },
            {
                "domain_id": 2,
                "domain_name": "Jabango",
                "posts_count": 2
            }
        ]
    },

    "pending_for_review_posts": {
        "total_count": 7,
        "domains": [{
                "domain_id": 3,
                "domain_name": "React",
                "posts_count": 2
            },
            {
                "domain_id": 1,
                "domain_name": "Jabango",
                "posts_count": 3
            },
            {
                "domain_id": 2,
                "domain_name": "Javascript",
                "posts_count": 2
            }
        ]
    }
*/