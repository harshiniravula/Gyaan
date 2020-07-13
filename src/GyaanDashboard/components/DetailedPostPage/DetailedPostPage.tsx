import React from 'react'
import { observer } from 'mobx-react'
import InputWithPostIcon from '../Common/InputWithPostIcon'
import LoadingWrapperWithFailure from '../../../Common/LoadingWrapperWithFailure'
import BasicPostModel from "../../stores/models/BasicPostModel"
import Tag from '../../common/Tag'
import ApprovedComment from '../ApprovedComment'
import Comment from '../Comment'

import {
   StyledPostTitle,
   StyledPostContainer,
   StyledWrapper,
   StyledRightPart,
   StyledPostedAt,
   StyledTags,
   StyledContent,
   StyledReplies
} from './styledComponents'


interface PostProps{
   selectedPost:BasicPostModel
   getSelectedPostAPIStatus:number
   getSelectedPostAPIError:Error
   getPostDetails:()=>void
}
@observer
class DetailedPostPage extends React.Component <PostProps>{
   renderPostDetails = observer(() => {
      const { selectedPost } = this.props
      const {
         title,
         postedAt,
         tags,
         postContent,
         postedBy,
         comments
      } = selectedPost
      const { approvedComment, unapprovedComments } = comments
      return (
         <StyledWrapper>
            <StyledPostContainer data-testid={'detailedPostPage'}>
               <StyledPostTitle>{title}</StyledPostTitle>
               <StyledPostedAt>{postedAt}</StyledPostedAt>
               <StyledTags>
                  {tags.map((tag, index) => (
                     <Tag
                     id={tag.tagId}
                        key={tag.tagId}
                        color={[
                           255 - (index + 1) * 100,
                           200,
                           (index + 1) * 100
                        ]}
                        name={tag.tagName}
                     />
                  ))}
               </StyledTags>
               <StyledContent>{postContent}</StyledContent>
               <ApprovedComment
                  postedBy={postedBy}
                  commentData={approvedComment}
               />
               <StyledReplies>
                  {approvedComment && approvedComment.replies.map(reply => (
                     <Comment
                        commentData={reply}
                        key={reply.commentId}
                     />
                  ))}
               </StyledReplies>
               {unapprovedComments.map(comment => (
                  <Comment
               
                     commentData={comment}
                     key={comment.commentId}
                  />
               ))}
               <InputWithPostIcon />
            </StyledPostContainer>

            <StyledRightPart></StyledRightPart>
         </StyledWrapper>
      )
   })
   render() {
      const {
         getSelectedPostAPIStatus,
         getSelectedPostAPIError,
         getPostDetails
      } = this.props

      return (
         <LoadingWrapperWithFailure
            apiStatus={getSelectedPostAPIStatus}
            apiError={getSelectedPostAPIError}
            onRetryClick={getPostDetails}
            renderSuccessUI={this.renderPostDetails}
         />
      )
   }
}
export default DetailedPostPage
