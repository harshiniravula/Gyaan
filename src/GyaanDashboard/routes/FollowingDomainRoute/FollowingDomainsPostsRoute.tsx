import React from 'react'
import { observer, inject } from 'mobx-react'
import { computed } from 'mobx'
import { withRouter,RouteComponentProps } from 'react-router-dom'
import {  API_FETCHING } from '@ib/api-constants'
import { getLoadingStatus } from '@ib/api-utils'

import LoadingWrapperWithFailure from '../../../Common/LoadingWrapperWithFailure'
import { goToGyaanHome } from '../../utils/NavigationUtils/NavigationUtils'
import WithSideBarAndHeader from '../../components/Common/WithSideBarAndHeader'
import FollowingDomainPage from '../../components/FollowingDomainPage'
import GyaanStore from "../../stores/GyaanStore"

interface InjectedProps extends RouteComponentProps{
   gyaanStore:GyaanStore
   onClickPost:()=>void
}
@inject('gyaanStore')
@observer
class FollowingDomainRoute extends React.Component<RouteComponentProps> {

   componentDidMount() {
      this.doNetworkCalls()
   }
   componentWillUnmunt() {
      this.domainData.clearPosts()
   }

   @computed
   get domainData() {
      const {gyaanStore:{ followingDomains, selectedDomainId }} = this.getInjectedProps()
      return followingDomains.find(
         domain => domain.domainId === selectedDomainId
      )
   }

   @computed
   get apiStatus() {
      if (!this.domainData) {
         return API_FETCHING
      } else {
         const { getPostsAPIStatus, getDomainDataAPIStatus } = this.domainData
         return getLoadingStatus(getPostsAPIStatus, getDomainDataAPIStatus)
      }
   }
   @computed
   get apiError() {
      return {}
   }
   doNetworkCalls=()=>{
      const {match}=this.props
      const { gyaanStore } = this.getInjectedProps()
      const domainId = +match.params.domainId

      gyaanStore.setSelectedDomainId(domainId)
   }

   getInjectedProps = (): InjectedProps => this.props as InjectedProps
   onClickLeaveDomain = () => {
      const { history } = this.props
      goToGyaanHome(history)
   }

   renderFollowingDomainPage = observer(() => {
      const { onClickPost } = this.getInjectedProps()
      return (
         <FollowingDomainPage
            onClickLeaveDomain={this.onClickLeaveDomain}
            
            domainData={this.domainData}
            onClickPost={onClickPost}
            
         />
      )
   })

   render() {
      return (
         <LoadingWrapperWithFailure
            apiStatus={this.apiStatus}
            apiError={this.apiError}
            onRetryClick={this.doNetworkCalls}
            renderSuccessUI={this.renderFollowingDomainPage}
         />
      )
   }
}
export default withRouter(WithSideBarAndHeader(FollowingDomainRoute))
