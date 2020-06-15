import React from 'react'
import { observer } from 'mobx-react'
import PostsPage from '../PostsPage'
import DomainSection from '../DomainSection'

import { StyledPostsSection } from './styledComponents'

@observer
class FollowingDomainPage extends React.Component {
   render() {
      const { domainData, onClickPost, onClickLeaveDomain } = this.props

      return (
         <React.Fragment>
            {domainData != undefined ? (
               <StyledPostsSection>
                  <DomainSection
                     domainData={domainData}
                     onClickLeaveDomain={onClickLeaveDomain}
                  />
                  <PostsPage
                     onClickLoadMore={domainData.onClickLoadMore}
                     onClickPost={onClickPost}
                     getPostsAPIStatus={domainData.getPostsAPIStatus}
                     getPostsAPIError={domainData.getPostsAPIError}
                     getPosts={domainData.getDomainPosts}
                  />
               </StyledPostsSection>
            ) : null}
         </React.Fragment>
      )
   }
}

export default FollowingDomainPage
