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


    showPosts = () => {

        //const { domainPosts } = this.props.domainData;
        return (
            null
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

            </StyledRightSide>

            </StyledGyaanDashboard>
        );
    }
}

export default GyaanDashboard;
