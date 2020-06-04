import React from 'react'
import LoadingWrapperWithFailure from '../../../Common/LoadingWrapperWithFailure'
import IBHubsLogo from '../../../Common/IBHubsLogo'
import Strings from '../../i18n/Strings.json'
import FollowingDomains from '../FollowingDomains'
import SuggestedDomains from '../SuggestedDomains'
import { observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import Requests from '../Requests'
import { StyledSideBarWrapper, StyledAllDomains } from './styledComponents'
@observer
class GyaanSideBar extends React.Component {
   renderSideBar = observer(() => {
      const {
         selectedDomainRequestes,
         onClickAllDomains,
         onClickFollowingDomain,
         followingDomains,
         selectedDomainId
      } = this.props
      return (
         <StyledSideBarWrapper>
            <IBHubsLogo
               isSelected={selectedDomainId}
               size={Strings.ibHubsLogoSize}
            />
            <StyledAllDomains onClick={onClickAllDomains}>
               {Strings.AllDomains}
            </StyledAllDomains>
            <FollowingDomains
               selectedDomainId={selectedDomainId}
               onClickFollowingDomain={onClickFollowingDomain}
               title={Strings.followingDomains}
               listOfItems={followingDomains}
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
