///*global await*/
import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { withRouter } from 'react-router-dom'

import { LOGIN_PATH } from '../../../Authentication/constants/PathName'
import { GYAAN_PATH, CREATE_POST_PATH } from '../../constants/PathName'
import GyaanDashboard from '../../components/GyaanDashboard'

@inject('gyaanStore')
@observer
class GyaanDashboardRoute extends React.Component {
   constructor(props) {
      super(props)
   }

   componentDidMount() {
      const { getDomainPosts, setSelectedDomainId } = this.props.gyaanStore;
      setSelectedDomainId(null);
   }

   onClickFollowingDomain = id => {
      const { history } = this.props
      history.replace(`/gyaan/followingDomains/${id}`)
   }
   onClickAllDomains = () => {
      const { history } = this.props
      history.replace(GYAAN_PATH)
   }
   onClickWritePost = () => {
      const { history } = this.props
      history.replace(CREATE_POST_PATH)
   }

   render() {
      const { gyaanStore } = this.props

      const {
         getPostsResponse,
         getPostsAPIStatus,
         getPostsAPIError,
         getAllDomainsPostsResponse
      } = gyaanStore

      return (


         <GyaanDashboard
                  onClickFollowingDomain={this.onClickFollowingDomain}
                  getPostsResponse={getPostsResponse}
                  getPostsAPIStatus={getPostsAPIStatus}
                  getPostsAPIError={getPostsAPIError}
                  getPosts={getAllDomainsPostsResponse}
                  onClickAllDomains={this.onClickAllDomains}
                  onClickWritePost={this.onClickWritePost}
               />

      )
   }
}
export default withRouter(GyaanDashboardRoute)
