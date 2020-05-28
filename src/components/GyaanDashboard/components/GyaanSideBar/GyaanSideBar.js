import React from 'react';

import IBHubsLogo from '../../../common/IBHubsLogo';
import DomainsList from '../../common/DomainsList';
import Strings from '../../i18n/Strings.json';
import { inject, observer } from "mobx-react";

import {
    StyledSideBarWrapper,
    StyledAllDomains,

}
from './styledComponents';

@inject('gyaanStore')
@observer
class GyaanSideBar extends React.Component {
    render() {
        const {
            following_domains,
            suggest_domains,
            pending_reviews,
        } = this.props.gyaanStore;

        return (
            <StyledSideBarWrapper>
                <IBHubsLogo size={Strings.ibHubsLogoSize}/>
                <StyledAllDomains>{Strings.AllDomains}</StyledAllDomains>
                <DomainsList title={Strings.followingDomains}
                    listOfItems={following_domains} />
                <DomainsList title={Strings.SuggestDomains}
                    listOfItems={suggest_domains} />
            </StyledSideBarWrapper>
        );
    }
}

export default GyaanSideBar;
