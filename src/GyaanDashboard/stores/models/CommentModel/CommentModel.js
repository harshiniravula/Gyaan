import { observable, action } from 'mobx'

import { API_INITIAL, API_SUCCESS } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

class CommentModel {

   @observable getCommentReactionAPIStatus
   @observable isReacted;
   constructor(comment, gyaanAPIService) {
      this.gyaanAPIService = gyaanAPIService;
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
      this.init();
   }
   @action.bound
   init() {
      this.getCommentReactionAPIStatus = API_INITIAL
      this.getCommentReactionAPIError = null;
   }
   @action.bound
   setGetCommentReactionAPIStatus(apiStatus) {
      this.getCommentReactionAPIStatus = apiStatus
   }
   @action.bound
   setGetCommentReactionResponse(response) {

   }
   @action.bound
   setGetCommentReactionAPIError(error) {
      this.getCommentReactionAPIError = error;
      this.changeReaction();
   }
   @action.bound
   changeReaction() {
      if (this.isReacted) {
         this.reactionsCount = this.reactionsCount - 1;
      }
      else {
         this.reactionsCount = this.reactionsCount + 1;
      }
      this.isReacted = !this.isReacted;
   }


   @action.bound
   onClickReaction() {
      this.changeReaction();
      const usersPromise = this.gyaanAPIService.onClickReaction('comment', this.commentId)
      return bindPromiseWithOnSuccess(usersPromise)
         .to(this.setGetCommentReactionAPIStatus, this.setGetCommentReactionResponse)
         .catch(this.setGetCommentReactionAPIError)
   }
}

export default CommentModel
