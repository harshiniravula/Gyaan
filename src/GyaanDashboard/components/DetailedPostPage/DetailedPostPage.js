import React from 'react'
import { observer } from 'mobx-react';
import InputWithPostIcon from '../Common/InputWithPostIcon'
import LoadingWrapperWithFailure from '../../../Common/LoadingWrapperWithFailure';
import Tag from '../../common/Tag';
import ApprovedComment from '../ApprovedComment';
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
}
from './styledComponents';

@observer
class DetailedPostPage extends React.Component {
    renderPostDetails = observer(() => {
        const { selectedPost } = this.props;
        const {
            title,
            postedAt,
            tags,
            postContent,
            postedBy,
            comments
        } = selectedPost;
        const { approvedComment, unapprovedComments } = comments;
        console.log(selectedPost)
        return (
            <StyledWrapper>

                <StyledPostContainer>
                    <StyledPostTitle>
                            {title}
                    </StyledPostTitle>
                    <StyledPostedAt>
                    {postedAt}
                    </StyledPostedAt>
                    <StyledTags>
                    {
                        tags.map((tag,index)=>
                        <Tag id={tag.id} key={tag.tagId}
                        color={[255-(index+1)*100,200,(index+1)*100]}
                        name={tag.tagName}/>)
                    }
                    </StyledTags>
                    <StyledContent>
                    {postContent}
                    </StyledContent>
                    <ApprovedComment postedBy={postedBy} commentData={approvedComment}/>
                    <StyledReplies>
                    {
                        approvedComment.replies.map(
                        reply=>
                         <Comment id={reply.commentId}
                        commentData={reply}
                        key={reply.commentId}/>
                        )
                    }
                    </StyledReplies>
                    {
                      unapprovedComments.map(comment=>
                        <Comment id={comment.commentId}
                        commentData={comment}
                        key={comment.commentId}/>
                         )
                    }
                    <InputWithPostIcon />

                </StyledPostContainer>

                <StyledRightPart>
                </StyledRightPart>
            </StyledWrapper>
        )

    })
    render() {
        const {
            getSelectedPostAPIStatus,
            getSelectedPostAPIError,
            selectedPost,
            getPostDetails
        } = this.props;

        return (
            <LoadingWrapperWithFailure
            apiStatus={getSelectedPostAPIStatus}
            apiError={getSelectedPostAPIError}
            onClickRetry={getPostDetails}
            renderSuccessUI={this.renderPostDetails}
         />)
    }

}
export default DetailedPostPage
