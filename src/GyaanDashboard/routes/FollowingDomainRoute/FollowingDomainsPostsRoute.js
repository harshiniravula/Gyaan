///*global await*/
import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx';
import { withRouter } from 'react-router-dom';

import { LOGIN_PATH } from '../../../Authentication/constants/PathName';
import { ALL_DOMAINS_PATH } from '../../constants/PathName';
import FollowingDomainPage from '../../components/FollowingDomainPage';
import WithDomainsData from '../../common/hocs/WithDomainsData'

@inject('gyaanStore')
@observer
class FollowingDomainRoute extends React.Component {
   constructor(props) {
      super(props);

   }

   componentDidMount() {
      const { getDomainPosts } = this.props.gyaanStore;
      //console.log();
      const { match } = this.props;
      this.domainId = +match.params.domainId;
      const domainObject = this.followingDomains.find(domain => domain.domainId === this.domainId);
      console.log(this.props.gyaanStore.followingDomains);
      //domainObject.onClickDomain({});
      //getDomainPosts({});
   }

   onClickFollowingDomain = (id) => {
      const { history } = this.props;
      history.replace(`/gyaan/followingDomains/${id}`);
   }

   renderFollowingDomaisPage = (followingDomains,
      suggestedDomains,
      getGyaanDomainsAPIStatus,
      getGyaanDomainsAPIError) => {
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
         <FollowingDomainPage
                  followingDomains={followingDomains}
                  suggestedDomains={suggestedDomains}
                  onClickFollowingDomain={this.onClickFollowingDomain}
                  getPostsResponse={getPostsResponse}
                  getPostsAPIStatus={getPostsAPIStatus}
                  getPostsAPIError={getPostsAPIError}
                  getGyaanDomainsAPIError={getGyaanDomainsAPIError}
                  getGyaanDomainsAPIStatus={getGyaanDomainsAPIStatus}
                  getPosts={getAllDomainsPostsResponse}
                  />
      )

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

             this.renderFollowingDomaisPage(followingDomains,
         suggestedDomains,
         getGyaanDomainsAPIStatus,
         getGyaanDomainsAPIError)
         }
         </WithDomainsData>
      )

   }
}
export default withRouter(FollowingDomainRoute)




// import React from 'react'
// import { observer, inject } from 'mobx-react'
// import { observable, computed } from 'mobx';
// import { withRouter } from 'react-router-dom';

// import { LOGIN_PATH } from '../../../Authentication/constants/PathName';
// import { ALL_DOMAINS_PATH } from '../../constants/PathName';
// import FollowingDomainPage from '../../components/FollowingDomainPage';
// import WithDomainsData from '../../common/hocs/WithDomainsData'

// @inject('gyaanStore')
// @observer
// class FollowingDomainsPostsRoute extends React.Component {
//    @observable domainId;
//    @observable followingDomains;
//    constructor(props) {
//       super(props);
//    }

//    componentDidMount() {
//       const { match } = this.props;
//       this.domainId = +match.params.domainId;
//       //const domainObject = this.followingDomains.find(domain => domain.domainId === this.domainId);
//       //console.log(this.followingDomains);
//       //domainObject.onClickDomain({});
//    }

//    // @computed
//    // get domainData() {
//    //    const { followingDomains } = this.props.gyaanStore;
//    //    return followingDomains.find(domain => domain.domainId === this.domainId);
//    // }
//    onClickFollowingDomain = (id) => {
//       const { history } = this.props;
//       history.replace(`/gyaan/followingDomains/${id}`);
//    }


//    render() {
//       const {
//          gyaanStore
//       } = this.props;

//       const {
//          getPostsResponse,
//          getPostsAPIStatus,
//          getPostsAPIError,
//          getAllDomainsPostsResponse
//       } = gyaanStore;


//       return (
//          <WithDomainsData gyaanStore={gyaanStore}>
//          {(followingDomains,suggestedDomains)=>
//          <FollowingDomainPage
//                   followingDomains={followingDomains}
//                   suggestedDomains={suggestedDomains}
//                   onClickFollowingDomain={this.onClickFollowingDomain}
//                   />

//          }
//          </WithDomainsData>
//       )

//    }
// }
// export default withRouter(FollowingDomainsPostsRoute)
