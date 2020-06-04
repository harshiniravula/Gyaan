import React from 'react'
import { observer } from 'mobx-react'
import PostsPage from '../PostsPage'
import DomainSection from '../DomainSection'

import { StyledPostsSection } from './styledComponents'

@observer
class GyaanDashboard extends React.Component {
   render() {
      const { domainData, onClickPost } = this.props

      return (
         <React.Fragment>
            {domainData != undefined ? (
               <StyledPostsSection>
                  <DomainSection
                     domainName={domainData.domainName}
                     domainId={domainData.domainId}
                     starsCount={domainData.starsCount}
                     postsCount={domainData.postsCount}
                     followersCount={domainData.followersCount}
                     domainPic={domainData.domainPic}
                     domainDescription={domainData.domainDescription}
                     domainExperts={domainData.domainExperts}
                  />
                  <PostsPage
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

export default GyaanDashboard
