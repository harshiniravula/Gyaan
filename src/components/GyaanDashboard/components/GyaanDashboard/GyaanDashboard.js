import React from 'react';
import DomainsList from '../../common/DomainsList';
import GyaanSideBar from '../GyaanSideBar';
import Header from '../Header';
class GyaanDashboard extends React.Component {
    render() {

        return (
            <div>
            <Header/>
            <GyaanSideBar/>
            </div>
        );
    }
}

export default GyaanDashboard;
