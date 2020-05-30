///*global await*/
import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { Redirect, withRouter } from 'react-router-dom';
import FollowingDomainPage from '../../components/FollowingDomainPage';
import Strings from '../../i18n/Strings.json'

@inject('gyaanStore')
@observer
class FollowingDomainsPostsRoute extends React.Component {
   @observable domain;
   constructor(props) {
      super(props);
      this.domain = null;
   }

   componentDidMount() {
      const { match, gyaanStore } = this.props;
      const { followingDomains } = gyaanStore;
      const domainId = +match.params.domainId;
      this.domain = followingDomains.find(domain => domain.dominId === domainId);
      console.log(domainId, followingDomains);
      //this.domain.getDomainDetails({});
   }
   doNetworkCalls = () => {
      const { getDomainPosts } = this.props;
      getDomainPosts({});
   }

   onClickFollowingDomain = (id) => {

   }


   render() {
      const {

         getPostsResponse,
         getPostsAPIStatus,
         getPostsAPIError,


      } = this.props.gyaanStore;

      const {
         followingDomains,
         suggestedDomains
      } = this.props.gyaanStore;
      return (<div>ertyju</div>)
      // <FollowingDomainPage
      // followingDomains={followingDomains}
      // suggestedDomains={suggestedDomains}
      // onClickFollowingDomain={this.onClickFollowingDomain}
      // domainData={this.domain}

      // />
      // )

   }
}
export default withRouter(FollowingDomainsPostsRoute)
