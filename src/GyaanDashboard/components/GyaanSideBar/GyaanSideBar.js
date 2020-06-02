import React from 'react'
import LoadingWrapperWithFailure from '../../../Common/LoadingWrapperWithFailure'
import IBHubsLogo from '../../../Common/IBHubsLogo'
import Strings from '../../i18n/Strings.json'
import FollowingDomains from '../FollowingDomains'
import SuggestedDomains from '../SuggestedDomains'
import { observer, inject } from 'mobx-react'
import Requests from '../Requests'
import { StyledSideBarWrapper, StyledAllDomains } from './styledComponents'
@inject('gyaanStore')
@observer
class GyaanSideBar extends React.Component {
   componentDidMount() {
      this.doNetworkCalls();
   }
   doNetworkCalls = () => {
      const { getGyaanDomainData } = this.props.gyaanStore;
      getGyaanDomainData({});
   }
   onClickFollowingDomain = (id) => {
      const { onClickFollowingDomain } = this.props;
      onClickFollowingDomain(id);
   }

   renderSideBar = () => {
      const {
         followingDomains,
      } = this.props.gyaanStore;
      const {
         onClickFollowingDomain,
         domainRequestedUsersCount,
         domainRequestedUsers,
         onClickAllDomains
      } = this.props;
      return (
         <StyledSideBarWrapper>
            <IBHubsLogo size={Strings.ibHubsLogoSize} />
            <StyledAllDomains onClick={onClickAllDomains}>
               {Strings.AllDomains}
            </StyledAllDomains>
            <FollowingDomains
               onClickFollowingDomain={this.onClickFollowingDomain}
               title={Strings.followingDomains}
               listOfItems={followingDomains}
            />
            {domainRequestedUsers ? (
               <Requests
                  domainRequestedUsersCount={domainRequestedUsersCount}
                  domainRequestedUsers={domainRequestedUsers}
               />
            ) : null}
         </StyledSideBarWrapper>
      )
   }
   render() {
      const {
         getGyaanDomainsAPIStatus,
         getGyaanDomainsAPIError
      } = this.props.gyaanStore;
      return (
         <LoadingWrapperWithFailure
            apiStatus={getGyaanDomainsAPIStatus}
            apiError={getGyaanDomainsAPIError}
            onRetryClick={this.doNetworkCalls}
            renderSuccessUI={this.renderSideBar}
         />
      )
   }
}

export default GyaanSideBar
