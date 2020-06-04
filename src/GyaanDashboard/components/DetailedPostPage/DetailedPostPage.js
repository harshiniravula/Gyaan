import React from 'react'
import { observer } from 'mobx-react';

import LoadingWrapperWithFailure from '../../../Common/LoadingWrapperWithFailure';
import Tag from '../../common/Tag';

import {
    StyledPostTitle,
    StyledPostContainer,
    StyledWrapper,
    StyledRightPart,
    StyledPostedAt,
    StyledTags,
    StyledContent
}
from './styledComponents';

@observer
class DetailedPostPage extends React.Component {
    renderPostDetails = observer(() => {
        const { selectedPost } = this.props;
        const {
            title,
            postedAt,
            tags
        } = selectedPost;
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
                    </StyledContent>
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
