import { observable, action } from 'mobx'

import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

import GyaanService from '../../../services/GyaanService/GyaanFixture'

import CommentModel from '../CommentModel'

type Comments={
   approvedComment:CommentModel|null,
   unapprovedComments:Array<CommentModel>
}

export type Tag={
   tagId:number,
   tagName:string
}

export type PostedBy={
   userId: number,
   username: string,
   profilePic: string
}
class BasicPostModel {
   @observable getCommentReactionAPIStatus!:number
   @observable getCommentReactionAPIError!:Error|null
   @observable isReacted!:boolean
   gyaanAPIService:GyaanService
   postContent!:string
   postId!:number
   title!:string
   postDomainId!:number
   postDomainName!:string
   postedAt!:string
   reactionsCount!:number
   isLatestVersionAvailable?:boolean
   postedBy!:PostedBy
   commentsCount!:number
   tags!:Array<Tag>
   comments!:Comments
   constructor(post:any,
       postDomainId:number, domainName:string, gyaanAPIService:GyaanService) {
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
         approvedComment: post.solution
            ? new CommentModel(post.solution, this.gyaanAPIService)
            : null,
         unapprovedComments: post.comments.map(
            comment => new CommentModel(comment, this.gyaanAPIService)
         )
      }
      this.isLatestVersionAvailable = post.is_latest_verison_available
      this.init()
   }

   @action.bound
   init() {
      this.getCommentReactionAPIStatus = API_INITIAL
      this.getCommentReactionAPIError = null
   }

   @action.bound
   setGetCommentReactionAPIStatus(apiStatus:number) {
      this.getCommentReactionAPIStatus = apiStatus
   }

   @action.bound
   setGetCommentReactionResponse(response) {}
   @action.bound
   setGetCommentReactionAPIError(error) {
      this.getCommentReactionAPIError = error
      this.changeReaction()
   }
   @action.bound
   changeReaction() {
      if (this.isReacted) {
         this.reactionsCount = this.reactionsCount - 1
      } else {
         this.reactionsCount = this.reactionsCount + 1
      }
      this.isReacted = !this.isReacted
   }

   @action.bound
   onClickReaction() {
      this.changeReaction()
      const usersPromise = this.gyaanAPIService.onClickReaction(
         'post',
         this.postId
      )
      return bindPromiseWithOnSuccess(usersPromise)
         .to(
            this.setGetCommentReactionAPIStatus,
            this.setGetCommentReactionResponse
         )
         .catch(this.setGetCommentReactionAPIError)
   }
}

export default BasicPostModel
