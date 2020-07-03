import React from 'react'
import { observer, inject } from 'mobx-react'
import { computed } from 'mobx'
import { RouteComponentProps } from 'react-router-dom'

import {
   goToGyaanHome,
   goToPostPage,
   goToSpecificDomain,
   goToSpecificPostInSpecificDomain
} from '../../../utils/NavigationUtils/NavigationUtils'

import GyaanStore from '../../../stores/GyaanStore'

import Header from '../../Header'
import GyaanSideBar from '../../GyaanSideBar'

import { StyledGyaanDashboard, StyledRightSide } from './styledComponents'

interface InjectedProps extends RouteComponentProps {
   gyaanStore: GyaanStore
}

function WithSideBarAndHeader<T>(WrappedComponent: React.ComponentType<T>) {
   @inject('gyaanStore')
   @observer
   class SideBarData extends React.Component<RouteComponentProps, T> {
      componentDidMount() {
         this.doNetworkCalls()
      }
      doNetworkCalls() {
         const { getGyaanDomainData, followingDomains } = this.props.gyaanStore
         if (followingDomains.length === 0) {
            getGyaanDomainData({})
         }
      }
      getInjectedProps = (): InjectedProps => this.props as InjectedProps
      onClickWritePost = () => {
         const { history } = this.props
         goToPostPage(history)
      }
      onClickFollowingDomain = (id: number) => {
         const { history } = this.props
         goToSpecificDomain(history, id)
      }
      onClickAllDomains = () => {
         const { history } = this.props
         goToGyaanHome(history)
      }
      onClickPost = (id: number, domainId: number) => {
         const { history } = this.props
         goToSpecificPostInSpecificDomain(history, domainId, id)
      }
      @computed
      get selectedDomainRequestes() {
         const {
            gyaanStore: { selectedDomainId, followingDomains }
         } = this.getInjectedProps()

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
