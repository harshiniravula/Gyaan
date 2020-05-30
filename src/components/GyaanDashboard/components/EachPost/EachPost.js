import React from 'react';

import TitleSection from '../TitleSection';
import ApprovedComment from '../ApprovedComment';
import Comment from '../Comment';

import {
    StyledPost
}
from './styledComponents';

class EachPost extends React.Component {

    render() {
        const {
            title,
            postDomainName,
            tags,
            reactionsCount,
            isReacted,
            commentsCount,
            postedAt,
            postedBy,
            comments
        } = this.props.postData;
        const {
            approvedComment,
            unapprovedComments
        } = comments;
        return (
            <StyledPost>

                <TitleSection tags={tags}
                isReacted={isReacted}
                commentsCount={commentsCount}
                postedAt={postedAt}
                postedBy={postedBy}
                reactionsCount={reactionsCount}
                postTitle={title}
                domainName={postDomainName}/>



                <ApprovedComment
                commentData={approvedComment}
                postedBy={postedBy}/>
                {
                    unapprovedComments.map(comment=>{
                        return <Comment key={comment.commentId}commentData={comment}/>
                    })
                }

            </StyledPost>)
    }
}
export default EachPost;
