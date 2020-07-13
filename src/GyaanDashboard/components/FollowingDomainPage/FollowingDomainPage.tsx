import React from 'react'
import { observer } from 'mobx-react'
import PostsPage from '../PostsPage'
import DomainSection from '../DomainSection'

import { StyledPostsSection } from './styledComponents'
import DomainModel from "../../stores/models/DomainModel"
interface Props{
   onClickLeaveDomain:()=>void
   onClickPost:()=>void
   domainData:DomainModel
}
@observer
class FollowingDomainPage extends React.Component<Props> {
   render() {
      const { domainData, onClickPost, onClickLeaveDomain } = this.props

      return (
         <React.Fragment>
            {domainData != undefined ? (
               <StyledPostsSection data-testid='followingDomainPage'>
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
