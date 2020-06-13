import React from 'react'
import { observer } from 'mobx-react'
import Button from '../../../Common/Button';
import strings from '../../i18n/Strings.json';
import LoadingWrapperWithFailure from '../../../Common/LoadingWrapperWithFailure'
import EachPost from '../EachPost'
import { StyledPostsPage } from './styledComponents'

@observer
class PostsPage extends React.Component {
   renderPostsList = observer(() => {
      const { getPosts, onClickPost, onClickLoadMore } = this.props

      return (
         <StyledPostsPage>
            {getPosts.map(eachPost => {
               return (
                  <EachPost
                     onClickPost={onClickPost}
                     postId={eachPost.postId}
                     key={eachPost.postId}
                     postData={eachPost}
                  />
               )
            })}

            <Button 
            onClick={onClickLoadMore}
            kind={Button.kind.primary} 
            size={Button.size.full} 
            children={strings.loadMore}/>
         </StyledPostsPage>
      )
   })
   render() {
      const { getPostsAPIStatus, getPostsAPIError, getPosts } = this.props

      return (
         <LoadingWrapperWithFailure
            apiStatus={getPostsAPIStatus}
            apiError={getPostsAPIError}
            renderSuccessUI={this.renderPostsList}
         />
      )
   }
}

export default PostsPage
