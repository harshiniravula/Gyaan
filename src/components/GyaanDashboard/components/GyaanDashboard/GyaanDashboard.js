import React from 'react';
import { observer } from 'mobx-react';



import GyaanSideBar from '../GyaanSideBar';
import Header from '../Header';
import AllDomainsPostsRoute from '../../routes/AllDomainsPostsRoute';


import {
    StyledGyaanDashboard,
    StyledRightSide
}
from './styledComponents';

@observer
class GyaanDashboard extends React.Component {


    showPosts = () => {


        return (
            <AllDomainsPostsRoute />
        )

    }
    render() {

        const {
            followingDomains,
            suggestedDomains,
            onClickFollowingDomain


        } = this.props;



        return (
            <StyledGyaanDashboard>


            <GyaanSideBar
            followingDomains={followingDomains}
            suggestedDomains={suggestedDomains}
            onClickFollowingDomain={onClickFollowingDomain}/>
            <StyledRightSide>
             <Header/>

             {
                 this.showPosts()
             }

            </StyledRightSide >

            </StyledGyaanDashboard>
        );
    }
}

export default GyaanDashboard;
