import React from 'react'
import { observer } from 'mobx-react'

import GyaanSideBar from '../GyaanSideBar'
import Header from '../Header'
import PostsPage from '../PostsPage'
import DomainSection from '../DomainSection'

import {
   StyledGyaanDashboard,
   StyledRightSide,
   StyledPostsSection
}
from './styledComponents'

@observer
class GyaanDashboard extends React.Component {
   render() {
      const {
         suggestedDomains,
         onClickFollowingDomain,
         domainData,
         onClickAllDomains,
         onClickWritePost
      } = this.props;

      return (
         <StyledGyaanDashboard>
            <GyaanSideBar
              onClickAllDomains={onClickAllDomains}
               onClickFollowingDomain={onClickFollowingDomain}
               domainRequestedUsersCount={
                  domainData ? domainData.domainRequestedUsersCount : null
               }
               domainRequestedUsers={
                  domainData ? domainData.domainRequestedUsers : null
               }
            />
            <StyledRightSide>
               <Header onClickWritePost={onClickWritePost} />
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
                        getPostsAPIStatus={domainData.getPostsAPIStatus}
                        getPostsAPIError={domainData.getPostsAPIError}
                        getPosts={domainData.getdomainPosts}
                     />
                  </StyledPostsSection>
               ) : null}
            </StyledRightSide>
         </StyledGyaanDashboard>
      )
   }
}

export default GyaanDashboard
