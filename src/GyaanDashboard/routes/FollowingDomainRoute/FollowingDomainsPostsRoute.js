///*global await*/
import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable, computed, reaction } from 'mobx';
import { withRouter } from 'react-router-dom';

import { LOGIN_PATH } from '../../../Authentication/constants/PathName';
import { ALL_DOMAINS_PATH } from '../../constants/PathName';
import FollowingDomainPage from '../../components/FollowingDomainPage';
import WithDomainsData from '../../common/hocs/WithDomainsData'

@inject('gyaanStore')
@observer
class FollowingDomainRoute extends React.Component {
   @observable followingDomains;
   @observable domainId;
   constructor(props) {
      super(props);
      this.followingDomains = [];

   }

   componentDidMount() {
      const { match } = this.props;
      this.domainId = +match.params.domainId;
   }
   @computed
   get domainData() {
      const { followingDomains } = this.props.gyaanStore;
      return followingDomains.find(domain => domain.domainId === this.domainId);
   }


   onClickFollowingDomain = (id) => {
      const { history } = this.props;
      alert(id);

      history.replace(`/gyaan/followingDomains/${id}`);
      history.go();
   }

   onClickAllDomains = () => {
      const { history } = this.props;
      history.replace(`/gyaan`);
   }

   disposer = reaction(() => this.props.gyaanStore.followingDomains,
      (followingDomains) => {
         const domainObj = followingDomains.find(domain => domain.domainId === this.domainId);
         domainObj.onClickDomain({});
      })


   render() {
      const {
         gyaanStore,
         getPostsAPIStatus,
         getPostsAPIError
      } = this.props;

      return (
         <WithDomainsData gyaanStore={gyaanStore}>
         {(followingDomains,
         suggestedDomains,
         getGyaanDomainsAPIStatus,
         getGyaanDomainsAPIError)=>
            <FollowingDomainPage
                  followingDomains={followingDomains}
                  suggestedDomains={suggestedDomains}
                  onClickFollowingDomain={this.onClickFollowingDomain}
                  getGyaanDomainsAPIError={getGyaanDomainsAPIError}
                  getGyaanDomainsAPIStatus={getGyaanDomainsAPIStatus}
                  domainData={this.domainData}
                  getPostsAPIError={getPostsAPIError}
                  getPostsAPIStatus={getPostsAPIStatus}
                  onClickAllDomains={this.onClickAllDomains}
                  />
         }
         </WithDomainsData>
      )

   }
}
export default withRouter(FollowingDomainRoute)
