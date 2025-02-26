import React from 'react'
import LoadingWrapperWithFailure from '../../../Common/LoadingWrapperWithFailure'
import IBHubsLogo from '../../../Common/IBHubsLogo'
import strings from '../../i18n/Strings.json'
import FollowingDomains from '../FollowingDomains'
import SuggestedDomains from '../SuggestedDomains'
import { observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import Requests from '../Requests'
import { StyledSideBarWrapper, StyledAllDomains } from './styledComponents'

type SideBarProps ={
   selectedDomainRequestes,
   onClickAllDomains,
   onClickFollowingDomain,
   followingDomains,
   selectedDomainId,
   suggestedDomains,
   getGyaanDomainsAPIStatus,
   getGyaanDomainsAPIError,
   doNetworkCalls
}

@observer
class GyaanSideBar extends React.Component <SideBarProps>{
   renderSideBar = observer(() => {
      const {
         selectedDomainRequestes,
         onClickAllDomains,
         onClickFollowingDomain,
         followingDomains,
         selectedDomainId,
         suggestedDomains
      } = this.props
      return (
         <StyledSideBarWrapper>
            <IBHubsLogo
               isSelected={selectedDomainId}
               size={strings.ibHubsLogoSize}
            />
            <StyledAllDomains
               isSelected={selectedDomainId?false:true}
               onClick={onClickAllDomains}
            >
               {strings.AllDomains}
            </StyledAllDomains>
            <FollowingDomains
               selectedDomainId={selectedDomainId}
               onClickFollowingDomain={onClickFollowingDomain}
               title={strings.followingDomains}
               listOfItems={followingDomains}
            />
            <SuggestedDomains
               title={strings.suggestDomains}
               suggestedDomains={suggestedDomains}
            />
            {selectedDomainRequestes ? (
               <Requests
                  domainRequestedUsersCount={
                     selectedDomainRequestes.domainRequestedUsersCount
                  }
                  domainRequestedUsers={
                     selectedDomainRequestes.domainRequestedUsers
                  }
               />
            ) : null}
         </StyledSideBarWrapper>
      )
   })
   render() {
      const {
         getGyaanDomainsAPIStatus,
         getGyaanDomainsAPIError,
         doNetworkCalls
      } = this.props
      return (
         <LoadingWrapperWithFailure
            apiStatus={getGyaanDomainsAPIStatus}
            apiError={getGyaanDomainsAPIError}
            onRetryClick={doNetworkCalls}
            renderSuccessUI={this.renderSideBar}
         />
      )
   }
}

export default withRouter(GyaanSideBar)
