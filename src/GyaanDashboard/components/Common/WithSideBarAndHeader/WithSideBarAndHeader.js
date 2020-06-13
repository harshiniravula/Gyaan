import React from 'react'
import { observer, inject } from 'mobx-react'
import { computed } from 'mobx'

import {
   goToGyaanHome,
   goToPostPage,
   goToSpecificDomain,
   goToSpecificPostInSpecificDomain
}
from '../../../utils/NavigationUtils/NavigationUtils.js'
import Header from '../../Header'
import GyaanSideBar from '../../GyaanSideBar'
import { StyledGyaanDashboard, StyledRightSide } from './styledComponents'

function WithSideBarAndHeader(WrappedComponent) {
   @inject('gyaanStore')
   @observer
   class SideBarData extends React.Component {
      componentDidMount() {
         this.doNetworkCalls()
      }
      doNetworkCalls() {
         const { getGyaanDomainData, followingDomains } = this.props.gyaanStore
         if (followingDomains.length === 0) {
            getGyaanDomainData({})
         }
      }
      onClickWritePost = () => {
         const { history } = this.props
         goToPostPage(history);
      }
      onClickFollowingDomain = id => {
         const { history } = this.props;
         goToSpecificDomain(history, id)

      }
      onClickAllDomains = () => {
         const { history, gyaanStore } = this.props
         goToGyaanHome(history)
      }
      onClickPost = (id, domainId) => {
         const { history } = this.props;
         goToSpecificPostInSpecificDomain(history, domainId, id);

      }
      @computed
      get selectedDomainRequestes() {
         const { selectedDomainId, followingDomains } = this.props.gyaanStore

         if (selectedDomainId != null) {
            const selectedDomain = followingDomains.find(
               domain => domain.domainId === selectedDomainId
            )

            if (selectedDomain) {
               return {
                  domainRequestedUsersCount: selectedDomain.domainRequestedUsersCount,
                  domainRequestedUsers: selectedDomain.domainRequestedUsers
               }
            }
         }
         return null
      }
      render() {
         const {
            getGyaanDomainsAPIStatus,
            getGyaanDomainsAPIError,
            followingDomains,
            selectedDomainId,
            suggestedDomains,
            onClickSuggestedDomain
         } = this.props.gyaanStore
         return (
            <StyledGyaanDashboard>
               <GyaanSideBar
                  selectedDomainId={selectedDomainId}
                  followingDomains={followingDomains}
                  getGyaanDomainsAPIError={getGyaanDomainsAPIError}
                  getGyaanDomainsAPIStatus={getGyaanDomainsAPIStatus}
                  doNetworkCalls={this.doNetworkCalls}
                  onClickAllDomains={this.onClickAllDomains}
                  suggestedDomains={suggestedDomains}
                  onClickSuggestedDomain={onClickSuggestedDomain}
                  selectedDomainRequestes={this.selectedDomainRequestes}
                  onClickFollowingDomain={this.onClickFollowingDomain}
               />
               <StyledRightSide>
                  <Header onClickWritePost={this.onClickWritePost} />
                  {followingDomains.length ? (
                     <WrappedComponent
                        {...this.props}
                        onClickPost={this.onClickPost}
                     />
                  ) : null}
               </StyledRightSide>
            </StyledGyaanDashboard>
         )
      }
   }
   return SideBarData
}

export default WithSideBarAndHeader
