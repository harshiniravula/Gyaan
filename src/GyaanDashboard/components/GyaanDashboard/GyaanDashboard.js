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
            getPostsAPIStatus,
            getPostsAPIError,
            getPosts,
            getGyaanDomainsAPIStatus,
            getGyaanDomainsAPIError,
            onClickAllDomains

        } = this.props;



        return (
            <StyledGyaanDashboard>


            <GyaanSideBar
            followingDomains={followingDomains}
            suggestedDomains={suggestedDomains}
            getGyaanDomainsAPIError={getGyaanDomainsAPIError}
            getGyaanDomainsAPIStatus = { getGyaanDomainsAPIStatus }
            onClickAllDomains={onClickAllDomains}
            onClickFollowingDomain = { onClickFollowingDomain}/>

            <StyledRightSide>
             <Header/>

            <PostsPage
            getPostsAPIStatus={getPostsAPIStatus}
            getPostsAPIError={getPostsAPIError}
            getPosts={getPosts}/>

            </StyledRightSide >

            </StyledGyaanDashboard>
        );
    }
}

export default GyaanDashboard;
