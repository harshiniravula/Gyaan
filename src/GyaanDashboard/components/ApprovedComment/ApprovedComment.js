import React from 'react'
import { observer } from 'mobx-react'
import GreenTick from '../../../Common/Icons/GreenTick'
import Strings from '../../i18n/Strings.json'
import BasicComment from '../../common/BasicComment'
import ReactionIcon from '../../common/ReactionIcon'
import CommentIcon from '../../common/CommentIcon'

import {
   StyledApprovedComment,
   StyledFooter,
   StyledApproved,
   StyledRight,
   StyledLeft,
   StyledName
} from './styledComponents'

@observer
class ApprovedComment extends React.Component {
   onClickReaction = e => {
      e.stopPropagation()
      const { onClickReaction } = this.props.commentData
      onClickReaction()
   }
   render() {
      const { commentData, postedBy } = this.props
      const { username } = postedBy

      if (commentData) {
         const {
            commenter,
            commentAt,
            commentContent,
            isReacted,
            reactionsCount,
            repliesCount,
            getCommentReactionAPIStatus
         } = commentData

         return (
            <StyledApprovedComment>
               <BasicComment
                  commenter={commenter}
                  commentAt={commentAt}
                  commentContent={commentContent}
               />

               <StyledFooter>
                  <StyledLeft>
                     <GreenTick />
                     <StyledApproved>{Strings.ApprovedBy}</StyledApproved>
                     <StyledName>{username}</StyledName>
                  </StyledLeft>
                  <StyledRight>
                     <ReactionIcon
                        data-testid={'reaction'}
                        status={getCommentReactionAPIStatus}
                        onClick={this.onClickReaction}
                        isReacted={isReacted}
                        count={`${reactionsCount} ${Strings.Reactions}`}
                     />

                     <CommentIcon count={`${repliesCount} ${Strings.Replys}`} />
                  </StyledRight>
               </StyledFooter>
            </StyledApprovedComment>
         )
      } else {
         return null
      }
   }
}
export default ApprovedComment
