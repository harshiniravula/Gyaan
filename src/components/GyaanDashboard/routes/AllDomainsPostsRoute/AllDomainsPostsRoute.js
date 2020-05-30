///*global await*/
import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { Redirect, withRouter } from 'react-router-dom';
import PostsPage from '../../components/PostsPage';
import Strings from '../../i18n/Strings.json'

@inject('gyaanStore')
@observer
class AllDomainsPostsRoute extends React.Component {

   constructor(props) {
      super(props)
   }

   componentDidMount() {
      this.doNetworkCalls()

   }
   doNetworkCalls = () => {
      const { getDomainPosts } = this.props.gyaanStore;
      getDomainPosts({});
   }


   render() {

      const {

         getPostsResponse,
         getPostsAPIStatus,
         getPostsAPIError,


      } = this.props.gyaanStore;
      return (
         <PostsPage
         getPostsResponse={getPostsResponse}
          getPostsAPIStatus={getPostsAPIStatus}
            getPostsAPIError={getPostsAPIError}
         />
      )
   }
}
export default withRouter(AllDomainsPostsRoute)
