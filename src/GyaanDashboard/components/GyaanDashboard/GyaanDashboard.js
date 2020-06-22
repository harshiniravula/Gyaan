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
               getPostsAPIStatus,
               getPostsAPIError,
               getPosts,
               onClickPost,
               onClickLoadMore,
               ...other
            } = this.props
            return (

                  <StyledGyaanDashboard data-testid='homePage' >
         <PostsPage
               {...other}
               onClickLoadMore={onClickLoadMore}
               onClickPost={onClickPost}
               getPostsAPIStatus={getPostsAPIStatus}
               getPostsAPIError={getPostsAPIError}
               getPosts={getPosts}
            /> </StyledGyaanDashboard>
      )
   }
}

export default GyaanDashboard
