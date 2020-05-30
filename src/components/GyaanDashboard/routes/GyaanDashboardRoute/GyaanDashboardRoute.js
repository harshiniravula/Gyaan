///*global await*/
import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx';
import { ALL_DOMAINS_PATH } from '../../constants/PathName';
import { LOGIN_PATH } from '../../../Authentication/constants/PathName';
import { withRouter } from 'react-router-dom';
import GyaanDashboard from '../../components/GyaanDashboard';
import Strings from '../../i18n/Strings.json'

@inject('gyaanStore')
@observer
class GyaanDashboardRoute extends React.Component {
   @observable navigateTo;
   constructor(props) {
      super(props);
      this.navigateTo = ALL_DOMAINS_PATH;

   }

   componentDidMount() {
      const { getGyaanDomainData } = this.props.gyaanStore;
      getGyaanDomainData({});
   }

   onClickFollowingDomain = (id) => {
      const { history } = this.props;
      history.replace(`/gyaan/followingDomains/${id}`);
   }


   render() {

      const {
         followingDomains,
         suggestedDomains,
         onClickFollowingDomain,
         getPostsResponse,
         getPostsAPIStatus,
         getPostsAPIError,
         getDomainPosts

      } = this.props.gyaanStore;
      return (
         <GyaanDashboard
         followingDomains={followingDomains}
         suggestedDomains={suggestedDomains}
         onClickFollowingDomain={this.onClickFollowingDomain}
         getPostsResponse={getPostsResponse}
         getPostsAPIStatus={getPostsAPIStatus}
         getPostsAPIError={getPostsAPIError}
         getDomainPosts={getDomainPosts}
         navigateTo={this.navigateTo}
         />
      )

   }
}
export default withRouter(GyaanDashboardRoute)
