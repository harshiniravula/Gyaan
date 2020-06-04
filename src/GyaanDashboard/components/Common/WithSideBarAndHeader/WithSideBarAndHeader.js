import React from 'react'
import { observer, inject } from 'mobx-react'
import {
   GYAAN_PATH,
   CREATE_POST_PATH,
   POST_PATH
} from '../../../constants/PathName'
import { computed } from 'mobx'
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
         history.replace(CREATE_POST_PATH)
      }
      onClickFollowingDomain = id => {
         const { history } = this.props
         history.replace(`/gyaan/followingDomains/${id}`)
      }
      onClickAllDomains = () => {
         const { history } = this.props
         history.replace(GYAAN_PATH)
      }
      onClickPost = (id, domainId) => {
         const { history } = this.props
         history.replace(`/gyaan/followingDomains/${domainId}/posts/${id}`)
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
            selectedDomainId
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
