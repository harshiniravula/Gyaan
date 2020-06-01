import React from 'react';
import { observer } from 'mobx-react';



import GyaanSideBar from '../GyaanSideBar';
import Header from '../Header';
import PostsPage from '../PostsPage';


import {
    StyledGyaanDashboard,
    StyledRightSide
}
from './styledComponents';

@observer
class GyaanDashboard extends React.Component {
    render() {

        const {
            followingDomains,
            suggestedDomains,
            onClickFollowingDomain,
            getGyaanDomainsAPIError,
            getGyaanDomainsAPIStatus
        } = this.props;



        return (
            <StyledGyaanDashboard>
            <GyaanSideBar
            followingDomains={followingDomains}
            getGyaanDomainsAPIError={getGyaanDomainsAPIError}
            getGyaanDomainsAPIStatus={getGyaanDomainsAPIStatus}
            suggestedDomains={suggestedDomains}
            onClickFollowingDomain={onClickFollowingDomain}/>
            <StyledRightSide>
            <Header/>

            </StyledRightSide>

            </StyledGyaanDashboard>
        );
    }
}

export default GyaanDashboard;
