import React from 'react';
import { observer } from 'mobx-react';

import LoadingWrapperWithFailure from '../../../common/LoadingWrapperWithFailure';
import EachPost from '../EachPost';
import {
    StyledPostsPage
}
from './styledComponents';

@observer
class PostsPage extends React.Component {

    renderPostsList = observer(() => {
        const { getPostsResponse } = this.props;

        return (
            <StyledPostsPage>
                {
                getPostsResponse.map(
                eachPost=><EachPost id={eachPost.postId} key={eachPost.postId} postData={eachPost}/>
                )

                }
            </StyledPostsPage>)
    })
    render() {
        const {


            getPostsAPIStatus,
            getPostsAPIError
        } = this.props;

        return (
            <LoadingWrapperWithFailure
                apiStatus={getPostsAPIStatus}
                apiError={getPostsAPIError}
                onRetryClick={this.doNetworkCalls}
                renderSuccessUI={this.renderPostsList}/>
        )
    }

}

export default PostsPage;
