///*global await*/
import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { withRouter } from 'react-router-dom'

import {GyaanStoreType} from '../../stores/GyaanStore'
import { LOGIN_PATH } from '../../../Authentication/constants/PathName'
import { GYAAN_PATH, CREATE_POST_PATH } from '../../constants/PathName'
import GyaanDashboard from '../../components/GyaanDashboard'
import WithSideBarAndHeader from '../../components/Common/WithSideBarAndHeader'

interface Props extends GyaanStoreType{
   onClickPost:()=>void
}

@inject('gyaanStore')
@observer
class GyaanDashboardRoute extends React.Component<Props> {
   componentDidMount() {
      const { getDomainPosts, setSelectedDomainId } = this.props.gyaanStore

      getDomainPosts()
      setSelectedDomainId(null)
   }

   render() {
      const { gyaanStore, onClickPost } = this.props

      const {
         
         postsApiStatus,
         getPostsAPIError,
         getAllDomainsPostsResponse,
         onClickLoadMore
      } = gyaanStore

      return (
         <GyaanDashboard
            onClickLoadMore={onClickLoadMore}
            getPostsAPIStatus={postsApiStatus}
            getPostsAPIError={getPostsAPIError}
            getPosts={getAllDomainsPostsResponse}
            onClickPost={onClickPost}
         />
      )
   }
}
export default withRouter(WithSideBarAndHeader(GyaanDashboardRoute))
