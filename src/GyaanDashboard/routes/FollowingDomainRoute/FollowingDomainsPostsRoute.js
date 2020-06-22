///*global await*/
import React from 'react'
import { observer, inject } from 'mobx-react'
import { computed } from 'mobx'
import { withRouter } from 'react-router-dom'
import { API_INITIAL, API_FETCHING, API_SUCCESS } from '@ib/api-constants'
import { getLoadingStatus } from '@ib/api-utils';

import LoadingWrapperWithFailure from '../../../Common/LoadingWrapperWithFailure';
import { goToGyaanHome } from '../../utils/NavigationUtils/NavigationUtils'
import WithSideBarAndHeader from '../../components/Common/WithSideBarAndHeader'
import FollowingDomainPage from '../../components/FollowingDomainPage'

@inject('gyaanStore')
@observer
class FollowingDomainRoute extends React.Component {

   onClickLeaveDomain = () => {
      const { history } = this.props;
      goToGyaanHome(history)
   }

   componentDidMount() {
      const { match, gyaanStore } = this.props
      const domainId = +match.params.domainId

      gyaanStore.setSelectedDomainId(domainId)

   }
   componentWillUnmunt() {
      this.domainData.clearPosts();
   }

   @computed
   get domainData() {
      const { followingDomains, selectedDomainId } = this.props.gyaanStore
      return followingDomains.find(
         domain => domain.domainId === selectedDomainId
      )
   }

   @computed
   get apiStatus() {
      if (!this.domainData) {
         return API_FETCHING
      }
      else {
         const { getPostsAPIStatus, getDomainDataAPIStatus } = this.domainData
         return getLoadingStatus(getPostsAPIStatus, getDomainDataAPIStatus)
      }

   }
   @computed
   get apiError() {
      return null;

   }

   renderFollowingDomainPage = observer(() => {
      const { onClickPost } = this.props
      return (
         <FollowingDomainPage
            onClickLeaveDomain={this.onClickLeaveDomain}
            onClickFollowingDomain={this.onClickFollowingDomain}
            domainData={this.domainData}
            onClickPost={onClickPost}
            onClickAllDomains={this.onClickAllDomains}
            onClickWritePost={this.onClickWritePost}
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
      );

   }
}
export default withRouter(WithSideBarAndHeader(FollowingDomainRoute))
