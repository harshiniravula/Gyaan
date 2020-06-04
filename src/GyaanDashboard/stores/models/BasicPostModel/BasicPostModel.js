import { observable, action } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import CommentModel from '../CommentModel'
class BasicPostModel {
   constructor(post, postDomainId, domainName, gyaanAPIService) {
      this.gyaanAPIService = gyaanAPIService
      this.postDomainId = postDomainId
      this.postDomainName = domainName
      this.postId = post.post_id
      this.title = post.title
      this.postedBy = {
         userId: post.posted_by.user_id,
         username: post.posted_by.username,
         profilePic: post.posted_by.profile_pic
      }
      this.commentsCount = post.comments_count
      this.isReacted = post.is_reacted
      this.postedAt = post.posted_at
      this.postContent = post.post_content
      this.reactionsCount = post.reactions.reactions_count
      this.tags = post.tags.map(tag => {
         return {
            tagId: tag.tag_id,
            tagName: tag.tag_name
         }
      })
      this.comments = {
         approvedComment: new CommentModel(post.solution),
         unapprovedComments: post.comments.map(
            comment => new CommentModel(comment)
         )
      }
      this.isLatestVersionAvailable = post.is_latest_verison_available
   }
   @action.bound
   onClickPost() {
      this.getPostDetails()
   }
}

export default BasicPostModel
/* comment_id: 3

      commenter: Object

      user_id: 1

      username: "John Doe"

      profile_pic: "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/68a651c6-01d6-4b32-909a-3211d5f278a9.png"

      comment_at: "10/6/2020"

      comment_content: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

      is_reacted: true

      reactions_count: 2

      replies: Array[1]

      0: Object

      comment_id: 1

      commenter: Object

      user_id: 2

      username: "Sara"

      profile_pic: "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/563fb7a4-92d2-40d4-9cc0-b0c8456cc843@3x.png"

      comment_at: "10/12/2020"

      comment_content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat fa"

      is_reacted: false

      reactions_count: 2

      replies_count: 3

      comments: Array[1]

      0: Object

      comment_id: 1

      commenter: Object

      user_id: 2

      username: "Paul"

      profile_pic: "Paul.jpg"

      comment_at: "10/12/2020"

      comment_content: "Zero UI is a style that’s been looming in the shadow for some time, but is just now emerging. The idea is easy to understand — the less the user has to think about the interface, the better and more natural it feels. John Brownlee explains the specifics,and how this style is changing everything. "

      is_reacted: true

      reactions_count: 3

      replies: Array[1]

      0: Object

      comment_id: 1

      commenter: Object

      user_id: 2

      username: "Sara"

      profile_pic: "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/563fb7a4-92d2-40d4-9cc0-b0c8456cc843@3x.png"

      comment_at: "9/12/2020"

      comment_content: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself"

      is_reacted: true

      reactions_count: 3

      replies_count: 3

      comments_count: 2

      tags: Array[1]

      0: Object

      tag_id: 0

      tag_name: "ui design"

      is_latest_verison_available: true*/
