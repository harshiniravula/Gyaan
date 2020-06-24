import React from 'react'
import { observer } from 'mobx-react'

import GyaanSideBar from '../GyaanSideBar'
import Header from '../Header'
import PostsPage from '../PostsPage'
import PostModel from '../../stores/models/BasicPostModel'
import { StyledGyaanDashboard, StyledRightSide } from './styledComponents'
type Props={
   getPostsAPIStatus:number,
         getPostsAPIError:unknown,
         getPosts:Array<PostModel>,
         onClickPost:()=>void,
         onClickLoadMore:()=>void
}
@observer
class GyaanDashboard extends React.Component<Props> {
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
         <StyledGyaanDashboard data-testid='homePage'>
            <PostsPage
               {...other}
               onClickLoadMore={onClickLoadMore}
               onClickPost={onClickPost}
               getPostsAPIStatus={getPostsAPIStatus}
               getPostsAPIError={getPostsAPIError}
               getPosts={getPosts}
            />{' '}
         </StyledGyaanDashboard>
      )
   }
}

export default GyaanDashboard
