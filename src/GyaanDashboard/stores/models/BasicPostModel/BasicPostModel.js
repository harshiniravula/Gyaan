import { observable, action } from 'mobx'

import CommentModel from '../CommentModel'
class BasicPostModel {
   constructor(post, domainName, domainPic) {
      this.domainPic = domainPic
      this.postDomainName = domainName
      this.postId = post.post_version_id
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
   }
}
// [{
//     "post_id": 0,
//     "title": "seergtghy",
//     "posted_by": {
//         "user_id": 0,
//         "username": "string",
//         "profile_pic": "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/24b298cd-a56f-4492-b098-36c4b6f1ac7e.svg"
//     },
//     "domain": {
//         "domain_id": 0,
//         "domain_name": "UI/UX Design"
//     },
//     "is_reacted": true,
//     "posted_at": "06/20/2019 at 6:43 PM",
//     "post_content": "string",
//     "reactions": {
//         "reactions_count": 1
//     },

//     "solution": {

//         "comment_id": 64,
//         "commenter": {
//             "user_id": 64,
//             "username": "comenter1",
//             "profile_pic": "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/24b298cd-a56f-4492-b098-36c4b6f1ac7e.svg"

//         },
//         "comment_at": "string",
//         "comment_content": "string wieguohhrt weroijhpklu gyyfwehjyuk fwgy9er46 e9h;u eoug4jpi ygyouln4 ",
//         "is_reacted": true,

//         "replies": [{

//                 "comment_id": 6,
//                 "commenter": {
//                     "user_id": 64,
//                     "username": "comenter1",
//                     "profile_pic": "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/24b298cd-a56f-4492-b098-36c4b6f1ac7e.svg"

//                 },
//                 "comment_at": "string",
//                 "comment_content": "string wieguohhrt weroijhpklu gyyfwehjyuk fwgy9er46 e9h;u eoug4jpi ygyouln4 ",
//                 "is_reacted": true,
//                 "reactions_count": 3

//             },

//             {
//                 "comment_id": 7,
//                 "commenter": {
//                     "user_id": 6,
//                     "username": "comenter2",
//                     "profile_pic": "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/24b298cd-a56f-4492-b098-36c4b6f1ac7e.svg"

//                 },
//                 "comment_at": "string",
//                 "comment_content": "string wieguohhrt weroijhpklu gyyfwehjyuk fwgy9er46 e9h;u eoug4jpi ygyouln4 ",
//                 "is_reacted": true,
//                 "reactions_count": 3
//             }
//         ],
//         "replies_count": 2,
//         "reactions_count": 64
//     },
//     "comments": [{

//         "comment_id": 64,
//         "commenter": {
//             "user_id": 64,
//             "username": "comenter1",
//             "profile_pic": "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/24b298cd-a56f-4492-b098-36c4b6f1ac7e.svg"

//         },
//         "comment_at": "string",
//         "comment_content": "string wieguohhrt weroijhpklu gyyfwehjyuk fwgy9er46 e9h;u eoug4jpi ygyouln4 ",
//         "is_reacted": true,

//         "replies": [{

//                 "comment_id": 6,
//                 "commenter": {
//                     "user_id": 64,
//                     "username": "comenter1",
//                     "profile_pic": "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/24b298cd-a56f-4492-b098-36c4b6f1ac7e.svg"

//                 },
//                 "comment_at": "string",
//                 "comment_content": "string wieguohhrt weroijhpklu gyyfwehjyuk fwgy9er46 e9h;u eoug4jpi ygyouln4 ",
//                 "is_reacted": true,
//                 "reactions_count": 3

//             },

//             {
//                 "comment_id": 7,
//                 "commenter": {
//                     "user_id": 6,
//                     "username": "comenter2",
//                     "profile_pic": "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/24b298cd-a56f-4492-b098-36c4b6f1ac7e.svg"

//                 },
//                 "comment_at": "string",
//                 "comment_content": "string wieguohhrt weroijhpklu gyyfwehjyuk fwgy9er46 e9h;u eoug4jpi ygyouln4 ",
//                 "is_reacted": true,
//                 "reactions_count": 3
//             }
//         ],
//         "replies_count": 2,
//         "reactions_count": 64
//     }, {

//         "comment_id": 64,
//         "commenter": {
//             "user_id": 64,
//             "username": "comenter1",
//             "profile_pic": "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/24b298cd-a56f-4492-b098-36c4b6f1ac7e.svg"

//         },
//         "comment_at": "string",
//         "comment_content": "string wieguohhrt weroijhpklu gyyfwehjyuk fwgy9er46 e9h;u eoug4jpi ygyouln4 ",
//         "is_reacted": true,

//         "replies": [{

//                 "comment_id": 6,
//                 "commenter": {
//                     "user_id": 64,
//                     "username": "comenter1",
//                     "profile_pic": "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/24b298cd-a56f-4492-b098-36c4b6f1ac7e.svg"

//                 },
//                 "comment_at": "string",
//                 "comment_content": "string wieguohhrt weroijhpklu gyyfwehjyuk fwgy9er46 e9h;u eoug4jpi ygyouln4 ",
//                 "is_reacted": true,
//                 "reactions_count": 3

//             },

//             {
//                 "comment_id": 7,
//                 "commenter": {
//                     "user_id": 6,
//                     "username": "comenter2",
//                     "profile_pic": "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/24b298cd-a56f-4492-b098-36c4b6f1ac7e.svg"

//                 },
//                 "comment_at": "string",
//                 "comment_content": "string wieguohhrt weroijhpklu gyyfwehjyuk fwgy9er46 e9h;u eoug4jpi ygyouln4 ",
//                 "is_reacted": true,
//                 "reactions_count": 3
//             }
//         ],
//         "replies_count": 2,
//         "reactions_count": 64
//     }]
// }]

export default BasicPostModel
