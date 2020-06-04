import React from 'react'

import TitleSection from '../TitleSection'
import ApprovedComment from '../ApprovedComment'
import Comment from '../Comment'

import { StyledPost } from './styledComponents'

class EachPost extends React.Component {
   onClickPost = e => {
      const { onClickPost, postId, postData } = this.props
      const { postDomainId } = postData
      onClickPost(postId, postDomainId)
   }
   render() {
      const {
         title,
         id,
         postDomainName,
         tags,
         reactionsCount,
         isReacted,
         commentsCount,
         postedAt,
         postedBy,
         comments,
         domainPic
      } = this.props.postData
      const { approvedComment, unapprovedComments } = comments
      return (
         <StyledPost id={id} onClick={this.onClickPost}>
            <TitleSection
               tags={tags}
               isReacted={isReacted}
               commentsCount={commentsCount}
               postedAt={postedAt}
               postedBy={postedBy}
               reactionsCount={reactionsCount}
               postTitle={title}
               domainName={postDomainName}
               domainPic={domainPic}
            />

            <ApprovedComment
               commentData={approvedComment}
               postedBy={postedBy}
            />
            {unapprovedComments.map(comment => {
               return <Comment key={comment.commentId} commentData={comment} />
            })}
         </StyledPost>
      )
   }
}
export default EachPost
