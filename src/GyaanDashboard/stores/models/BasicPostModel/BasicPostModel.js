import { observable, action } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import CommentModel from '../CommentModel'
class BasicPostModel {
   @observable getCommentReactionAPIStatus
   @observable isReacted;
   constructor(post, postDomainId, domainName, gyaanAPIService) {
      console.log(post.post_content)
      this.postContent = post.post_content
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

      this.reactionsCount = post.reactions.reactions_count
      this.tags = post.tags.map(tag => {
         return {
            tagId: tag.tag_id,
            tagName: tag.tag_name
         }
      })
      this.comments = {
         approvedComment: post.solution ? new CommentModel(post.solution, this.gyaanAPIService) : null,
         unapprovedComments: post.comments.map(
            comment => new CommentModel(comment, this.gyaanAPIService)
         )
      }
      this.isLatestVersionAvailable = post.is_latest_verison_available
      this.init();
   }

   @action.bound
   init() {
      this.getCommentReactionAPIStatus = API_INITIAL
      this.getCommentReactionAPIError = null;
   }

   @action.bound
   onClickPost() {
      this.getPostDetails()
   }

   @action.bound
   setGetCommentReactionAPIStatus(apiStatus) {
      this.getCommentReactionAPIStatus = apiStatus
   }
   
   @action.bound
   setGetCommentReactionResponse(response) {
      
      if (this.isReacted) {
         this.reactionsCount = this.reactionsCount - 1;
      }
      else {
         this.reactionsCount = this.reactionsCount + 1;
      }
      this.isReacted = !this.isReacted;
   }
   @action.bound
   setGetCommentReactionAPIError(error) {
      this.getCommentReactionAPIError = error;
   }


   @action.bound
   onClickReaction() {
      const usersPromise = this.gyaanAPIService.onClickReaction('post', this.postId)
      return bindPromiseWithOnSuccess(usersPromise)
         .to(this.setGetCommentReactionAPIStatus, this.setGetCommentReactionResponse)
         .catch(this.setGetCommentReactionAPIError)
   }
}

export default BasicPostModel
