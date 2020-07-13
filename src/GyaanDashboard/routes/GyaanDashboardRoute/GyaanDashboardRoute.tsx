import React from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter,RouteComponentProps } from 'react-router-dom'

import GyaanStore from '../../stores/GyaanStore'
import GyaanDashboard from '../../components/GyaanDashboard'
import WithSideBarAndHeader from '../../components/Common/WithSideBarAndHeader'


interface InjectedProps extends RouteComponentProps{
   gyaanStore:GyaanStore
   onClickPost:()=>void
}

@inject('gyaanStore')
@observer
class GyaanDashboardRoute extends React.Component<RouteComponentProps> {
   componentDidMount() {
      const { getDomainPosts, setSelectedDomainId } = this.getInjectedProps().gyaanStore
      getDomainPosts()
      setSelectedDomainId(null)
   }
   getInjectedProps = (): InjectedProps => this.props  as InjectedProps

   render() {
      const { gyaanStore } = this.getInjectedProps();
      const {onClickPost}=this.props

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
