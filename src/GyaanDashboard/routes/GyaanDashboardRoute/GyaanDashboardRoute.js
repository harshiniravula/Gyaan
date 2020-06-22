///*global await*/
import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { withRouter } from 'react-router-dom'

import { LOGIN_PATH } from '../../../Authentication/constants/PathName'
import { GYAAN_PATH, CREATE_POST_PATH } from '../../constants/PathName'
import GyaanDashboard from '../../components/GyaanDashboard'
import WithSideBarAndHeader from '../../components/Common/WithSideBarAndHeader'

@inject('gyaanStore')
@observer
class GyaanDashboardRoute extends React.Component {

   componentDidMount() {
      const {
         getDomainPosts,
         setSelectedDomainId
      } = this.props.gyaanStore

      getDomainPosts({})
      setSelectedDomainId(null)
   }


   render() {
      const { gyaanStore, onClickPost } = this.props;

      const {
         getPostsResponse,
         postsApiStatus,
         getPostsAPIError,
         getAllDomainsPostsResponse,
         onClickLoadMore
      } = gyaanStore

      return (
         <GyaanDashboard
            
            onClickLoadMore={onClickLoadMore}
            getPostsResponse={getPostsResponse}
            getPostsAPIStatus={postsApiStatus}
            getPostsAPIError={getPostsAPIError}
            getPosts={getAllDomainsPostsResponse}
            onClickPost={onClickPost}
         />

      )
   }
}
export default withRouter(WithSideBarAndHeader(GyaanDashboardRoute))
