import React from 'react'
import { observer } from 'mobx-react'
import Strings from '../../i18n/Strings.json'
import BasicComment from '../../common/BasicComment'
import ReactionIcon from '../../common/ReactionIcon'
import CommentIcon from '../../common/CommentIcon'
import { StyledComment, StyledFooter } from './styledComponents'

@observer
class Comment extends React.Component {
   onClickReaction = (e) => {
      e.stopPropagation();
      const { onClickReaction } = this.props.commentData;
      onClickReaction();
   }
   render() {
      const {
         commenter,
         commentAt,
         commentContent,
         isReacted,
         reactionsCount,
         repliesCount,
         getCommentReactionAPIStatus
      } = this.props.commentData

      return (
         <StyledComment>
            <BasicComment
               commenter={commenter}
               commentAt={commentAt}
               commentContent={commentContent}
            />

            <StyledFooter>
               <ReactionIcon
                  status={getCommentReactionAPIStatus}
                  onClick={this.onClickReaction}
                  isReacted={isReacted}
                  count={`${reactionsCount} ${Strings.Reactions}`}
               />

               <CommentIcon count={`${repliesCount} ${Strings.Replys}`} />
            </StyledFooter>
         </StyledComment>
      )
   }
}
export default Comment
