import React from 'react'
import { observer, inject } from 'mobx-react'
import { computed } from 'mobx'
import {History} from 'history'

import {
   goToGyaanHome,
   goToPostPage,
   goToSpecificDomain,
   goToSpecificPostInSpecificDomain
} from '../../../utils/NavigationUtils/NavigationUtils'

import  {GyaanStoreType} from '../../../stores/GyaanStore'

import Header from '../../Header'
import GyaanSideBar from '../../GyaanSideBar'

import { StyledGyaanDashboard, StyledRightSide } from './styledComponents'


interface Props extends GyaanStoreType{
   history:History
}
function WithSideBarAndHeader(WrappedComponent) {
   @inject('gyaanStore')
   @observer
   class SideBarData extends React.Component<Props> {
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
         goToPostPage(history)
      }
      onClickFollowingDomain = id => {
         const { history } = this.props
         goToSpecificDomain(history, id)
      }
      onClickAllDomains = () => {
         const { history, gyaanStore } = this.props
         goToGyaanHome(history)
      }
      onClickPost = (id, domainId) => {
         const { history } = this.props
         goToSpecificPostInSpecificDomain(history, domainId, id)
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
                  domainRequestedUsersCount:
                     selectedDomain.domainRequestedUsersCount,
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
            suggestedDomains
         } = this.props.gyaanStore
         return (
            <StyledGyaanDashboard data-testid='headerAndSidebar'>
               <GyaanSideBar
                  selectedDomainId={selectedDomainId}
                  followingDomains={followingDomains}
                  getGyaanDomainsAPIError={getGyaanDomainsAPIError}
                  getGyaanDomainsAPIStatus={getGyaanDomainsAPIStatus}
                  doNetworkCalls={this.doNetworkCalls}
                  onClickAllDomains={this.onClickAllDomains}
                  suggestedDomains={suggestedDomains}
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
