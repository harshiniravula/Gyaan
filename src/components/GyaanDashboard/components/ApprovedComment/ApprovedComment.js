import React from 'react';
import Strings from '../../i18n/Strings.json';
import BasicComment from '../../common/BasicComment';
import ReactionIcon from '../../common/ReactionIcon';
import CommentIcon from '../../common/CommentIcon';
import {
    StyledApprovedComment,
    StyledFooter,
    StyledApproved,
    StyledRight

}
from './styledComponents';

class ApprovedComment extends React.Component {
    render() {
        const {
            username
        } = this.props.postedBy;
        const {
            commenter,
            commentAt,
            commentContent,
            isReacted,
            reactionsCount,
            repliesCount,
        } = this.props.commentData;


        return (
            <StyledApprovedComment>
                <BasicComment
                commenter={commenter}
                commentAt={commentAt}
                commentContent={commentContent}/>

            <StyledFooter>
            <StyledApproved>{Strings.ApprovedBy} {username}</StyledApproved>
            <StyledRight>

                <ReactionIcon isReacted={isReacted} count={`${reactionsCount} ${Strings.Reactions}`}/>

                <CommentIcon  count={`${repliesCount} ${Strings.Replys}`}/>
                </StyledRight>
            </StyledFooter>
            </StyledApprovedComment>
        );
    }
}
export default ApprovedComment;

// this.commentId = comment.comment_id;

// commenter: {

//     userId: comment.user_id;

//     username: comment.userName;

//     profilePic: comment.profile_pic;
// }
// this.commentAt = comment.comment_at;

// this.commentContent = comment.comment_content;

// this.isReacted = comment.is_reacted;

// this.repliesCount = comment.replies_count

// this.reactionsCount = comment.reactions_count
