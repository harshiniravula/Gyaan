import React from 'react'
import { observer } from 'mobx-react'
import Strings from '../i18n/Strings.json'
import CommentModel from '../stores/models/CommentModel'
import BasicComment from '../components/BasicComment'
import ReactionIcon from './ReactionIcon'
import CommentIcon from './CommentIcon'
import {
   StyledComment,
   StyledFooter
} from '../components/Comment/styledComponents'

interface Props {
   commentData: CommentModel
}

@observer
class Comment extends React.Component<Props> {
   onClickReaction = e => {
      e.stopPropagation()
      const { onClickReaction } = this.props.commentData
      onClickReaction()
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
                  data-testid={'reaction'}
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
