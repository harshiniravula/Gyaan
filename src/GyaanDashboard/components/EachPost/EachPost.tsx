import React from 'react'
import { observer } from 'mobx-react'
import TitleSection from '../TitleSection'
import ApprovedComment from '../ApprovedComment'
import Comment from '../Comment'
import InputWithPostIcon from '../Common/InputWithPostIcon'
import Card from '../../../Common/Card'
import BasicPostModel from "../../stores/models/BasicPostModel"

interface EachPostProps{
   postData:BasicPostModel
   postId
   onClickPost
}
@observer
class EachPost extends React.Component <EachPostProps>{
   onClickPost = e => {
      const { onClickPost, postId, postData } = this.props
      const { postDomainId } = postData
      onClickPost(postId, postDomainId)
   }
   render() {
      const {
         title,
         postId,
         postDomainName,
         tags,
         reactionsCount,
         isReacted,
         commentsCount,
         postedAt,
         postedBy,
         comments,
         getCommentReactionAPIStatus,
         onClickReaction,
         postContent
      } = this.props.postData
      const { approvedComment, unapprovedComments } = comments
      return (
         <Card id={postId} onClick={this.onClickPost} data-testid='post'>
            <TitleSection
               tags={tags}
               postContent={postContent}
               getCommentReactionAPIStatus
               ={getCommentReactionAPIStatus}
               isReacted={isReacted}
               commentsCount={commentsCount}
               postedAt={postedAt}
               postedBy={postedBy}
               reactionsCount={reactionsCount}
               postTitle={title}
               domainName={postDomainName}
               onClickReaction={onClickReaction}
            />

            <ApprovedComment
               commentData={approvedComment}
               postedBy={postedBy}
            />
            {unapprovedComments.map(comment => {
               return <Comment key={comment.commentId} commentData={comment} />
            })}
            <InputWithPostIcon />
         </Card>
      )
   }
}
export default EachPost
