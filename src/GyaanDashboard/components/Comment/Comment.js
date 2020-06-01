import React from 'react';
import Strings from '../../i18n/Strings.json';
import BasicComment from '../../common/BasicComment';
import ReactionIcon from '../../common/ReactionIcon';
import CommentIcon from '../../common/CommentIcon';
import {
    StyledComment,
    StyledFooter

}
from './styledComponents';

class Comment extends React.Component {
    render() {

        const {
            commenter,
            commentAt,
            commentContent,
            isReacted,
            reactionsCount,
            repliesCount,
        } = this.props.commentData;


        return (
            <StyledComment>
                <BasicComment
                commenter={commenter}
                commentAt={commentAt}
                commentContent={commentContent}/>

            <StyledFooter>


                <ReactionIcon isReacted={isReacted} count={`${reactionsCount} ${Strings.Reactions}`}/>

                <CommentIcon  count={`${repliesCount} ${Strings.Replys}`}/>
            </StyledFooter>
            </StyledComment>
        );
    }
}
export default Comment;
