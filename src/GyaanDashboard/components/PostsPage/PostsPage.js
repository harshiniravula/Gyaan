import React from 'react';
import { observer } from 'mobx-react';

import LoadingWrapperWithFailure from '../../../Common/LoadingWrapperWithFailure';
import EachPost from '../EachPost';
import {
    StyledPostsPage
}
from './styledComponents';

@observer
class PostsPage extends React.Component {

    renderPostsList = observer(() => {
        const { getPosts } = this.props;


        return (
            <StyledPostsPage>
                {
                getPosts.map(
                eachPost=>{

                return <EachPost id={eachPost.postId} key={eachPost.postId} postData={eachPost}/>
                }
                )

                }
            </StyledPostsPage>)
    })
    render() {
        const {


            getPostsAPIStatus,
            getPostsAPIError,
            getPosts
        } = this.props;


        return (
            <LoadingWrapperWithFailure
                apiStatus={getPostsAPIStatus}
                apiError={getPostsAPIError}

                renderSuccessUI={this.renderPostsList}/>
        )
    }

}

export default PostsPage;
