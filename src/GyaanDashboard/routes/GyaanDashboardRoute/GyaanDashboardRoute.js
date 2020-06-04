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
   constructor(props) {
      super(props)
   }

   componentDidMount() {
      const {
         getDomainPosts,
         setSelectedDomainId,
         followingDomains
      } = this.props.gyaanStore
      getDomainPosts({})
      setSelectedDomainId(null)
   }

   render() {
      const { gyaanStore, onClickPost } = this.props

      const {
         getPostsResponse,
         postsApiStatus,
         getPostsAPIError,
         getAllDomainsPostsResponse
      } = gyaanStore

      return (
         <GyaanDashboard
            onClickFollowingDomain={this.onClickFollowingDomain}
            getPostsResponse={getPostsResponse}
            getPostsAPIStatus={postsApiStatus}
            getPostsAPIError={getPostsAPIError}
            getPosts={getAllDomainsPostsResponse}
            onClickPost={onClickPost}
            onClickAllDomains={this.onClickAllDomains}
            onClickWritePost={this.onClickWritePost}
         />
      )
   }
}
export default withRouter(WithSideBarAndHeader(GyaanDashboardRoute))
