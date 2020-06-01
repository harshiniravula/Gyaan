///*global await*/
import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx';
import { withRouter } from 'react-router-dom';

import { LOGIN_PATH } from '../../../Authentication/constants/PathName';
import { ALL_DOMAINS_PATH } from '../../constants/PathName';
import GyaanDashboard from '../../components/GyaanDashboard';
import WithDomainsData from '../../common/hocs/WithDomainsData'

@inject('gyaanStore')
@observer
class GyaanDashboardRoute extends React.Component {
   constructor(props) {
      super(props);

   }

   componentDidMount() {
      const { getDomainPosts } = this.props.gyaanStore;
      getDomainPosts({});
   }

   onClickFollowingDomain = (id) => {
      const { history } = this.props;
      history.replace(`/gyaan/followingDomains/${id}`);
   }
   onClickAllDomains = () => {
      const { history } = this.props;
      history.replace(`/gyaan`);
   }


   render() {
      const {
         gyaanStore
      } = this.props;

      const {
         getPostsResponse,
         getPostsAPIStatus,
         getPostsAPIError,
         getAllDomainsPostsResponse
      } = gyaanStore;

      return (
         <WithDomainsData gyaanStore={gyaanStore}>
         {(followingDomains,
         suggestedDomains,
         getGyaanDomainsAPIStatus,
         getGyaanDomainsAPIError)=>
         <GyaanDashboard
                  followingDomains={followingDomains}
                  suggestedDomains={suggestedDomains}
                  onClickFollowingDomain={this.onClickFollowingDomain}
                  getPostsResponse={getPostsResponse}
                  getPostsAPIStatus={getPostsAPIStatus}
                  getPostsAPIError={getPostsAPIError}
                  getGyaanDomainsAPIError={getGyaanDomainsAPIError}
                  getGyaanDomainsAPIStatus={getGyaanDomainsAPIStatus}
                  getPosts={getAllDomainsPostsResponse}
                  onClickAllDomains={this.onClickAllDomains}
                  />
         }
         </WithDomainsData>
      )

   }
}
export default withRouter(GyaanDashboardRoute)
