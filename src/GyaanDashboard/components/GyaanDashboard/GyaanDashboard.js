import React from 'react'
import { observer } from 'mobx-react'

import GyaanSideBar from '../GyaanSideBar'
import Header from '../Header'
import PostsPage from '../PostsPage'

import { StyledGyaanDashboard, StyledRightSide } from './styledComponents'

@observer
class GyaanDashboard extends React.Component {
   render() {
      const {
         onClickFollowingDomain,
         getPostsAPIStatus,
         getPostsAPIError,
         getPosts,
         onClickAllDomains,
         onClickWritePost
      } = this.props

      return (
         <StyledGyaanDashboard>
            <GyaanSideBar
               onClickAllDomains={onClickAllDomains}
               onClickFollowingDomain={onClickFollowingDomain}
            />

            <StyledRightSide>
               <Header onClickWritePost={onClickWritePost} />

               <PostsPage
                  getPostsAPIStatus={getPostsAPIStatus}
                  getPostsAPIError={getPostsAPIError}
                  getPosts={getPosts}
               />
            </StyledRightSide>
         </StyledGyaanDashboard>
      )
   }
}

export default GyaanDashboard
