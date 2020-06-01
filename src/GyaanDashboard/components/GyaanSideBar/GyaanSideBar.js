import React from 'react';
import LoadingWrapperWithFailure from '../../../Common/LoadingWrapperWithFailure';
import IBHubsLogo from '../../../Common/IBHubsLogo';
import Strings from '../../i18n/Strings.json';
import FollowingDomains from '../FollowingDomains';
import SuggestedDomains from '../SuggestedDomains';
import { observer } from "mobx-react";

import {
    StyledSideBarWrapper,
    StyledAllDomains,

}
from './styledComponents';

@observer
class GyaanSideBar extends React.Component {
    renderSideBar = observer(() => {
        const {
            followingDomains,
            suggestedDomains,
            onClickFollowingDomain,
            onCkickAllDomains
        } = this.props;
        return (
            <StyledSideBarWrapper>
                <IBHubsLogo size={Strings.ibHubsLogoSize}/>
                <StyledAllDomains onClick={onCkickAllDomains}>{Strings.AllDomains}</StyledAllDomains>
                <FollowingDomains
                    onClickFollowingDomain={onClickFollowingDomain}
                    title={Strings.followingDomains}
                    listOfItems={followingDomains} />
                <SuggestedDomains
                onClickSuggestedDomain
                title={Strings.SuggestDomains}
                    listOfItems={suggestedDomains} />
            </StyledSideBarWrapper>
        )

    })
    render() {
        const {

            getGyaanDomainsAPIStatus,
            getGyaanDomainsAPIError
        } = this.props;
        return (
            <LoadingWrapperWithFailure
                apiStatus={getGyaanDomainsAPIStatus}
                apiError={getGyaanDomainsAPIError}

                renderSuccessUI={this.renderSideBar}/>

        );
    }
}

export default GyaanSideBar;
