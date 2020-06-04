import { observable, action } from 'mobx'

class CommentModel {
   constructor(comment) {
      this.commentId = comment.comment_id

      this.commenter = {
         userId: comment.commenter.user_id,

         username: comment.commenter.username,

         profilePic: comment.commenter.profile_pic
      }
      this.commentAt = comment.comment_at

      this.commentContent = comment.comment_content

      this.isReacted = comment.is_reacted

      this.repliesCount = comment.replies_count

      this.reactionsCount = comment.reactions_count

      this.replies = comment.replies ?
         comment.replies.map(reply => {

            return {
               commentId: reply.comment_id,

               commenter: {
                  userId: reply.commenter.user_id,
                  username: reply.commenter.username,
                  profilePic: reply.commenter.profile_pic
               },

               commentAt: reply.comment_at,
               commentContent: reply.comment_content,
               isReacted: reply.is_reacted,
               reactionsCount: reply.reactions_count
            }
         }) :
         null
   }
}

export default CommentModel
