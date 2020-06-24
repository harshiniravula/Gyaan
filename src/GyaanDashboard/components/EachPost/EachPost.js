import React from 'react'
import { observer } from 'mobx-react'
import TitleSection from '../TitleSection'
import ApprovedComment from '../ApprovedComment'
import Comment from '../Comment'
import InputWithPostIcon from '../Common/InputWithPostIcon'
import Card from '../../../Common/Card'

@observer
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
         domainPic,
         getCommentReactionAPIStatus,
         onClickReaction,
         postContent
      } = this.props.postData
      const { approvedComment, unapprovedComments } = comments
      return (
         <Card id={id} onClick={this.onClickPost} data-testid='post'>
            <TitleSection
               tags={tags}
               postContent={postContent}
               status={getCommentReactionAPIStatus}
               isReacted={isReacted}
               commentsCount={commentsCount}
               postedAt={postedAt}
               postedBy={postedBy}
               reactionsCount={reactionsCount}
               postTitle={title}
               domainName={postDomainName}
               domainPic={domainPic}
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
