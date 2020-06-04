import React from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { GYAAN_PATH } from '../../constants/PathName'
import CreatePostPage from '../../components/CreatePostPage'
import WithSideBarAndHeader from '../../components/Common/WithSideBarAndHeader'
//import WithDomainsData from '../../common/hocs/WithDomainsData'

@inject('gyaanStore')
@observer
class CreatePostRoute extends React.Component {
   constructor(props) {
      super(props)
   }

   componentDidMount() {
      const { getDomainPosts } = this.props.gyaanStore
      getDomainPosts({})
   }

   onClickFollowingDomain = id => {
      const { history } = this.props
      history.replace(`/gyaan/followingDomains/${id}`)
   }
   onClickAllDomains = () => {
      const { history } = this.props
      history.replace(GYAAN_PATH)
   }

   render() {
      const { gyaanStore } = this.props

      const {
         getPostsResponse,
         getPostsAPIStatus,
         getPostsAPIError,
         getAllDomainsPostsResponse
      } = gyaanStore

      return (
         <CreatePostPage
            onClickFollowingDomain={this.onClickFollowingDomain}
            getPostsResponse={getPostsResponse}
            getPostsAPIStatus={getPostsAPIStatus}
            getPostsAPIError={getPostsAPIError}
            getPosts={getAllDomainsPostsResponse}
            onClickAllDomains={this.onClickAllDomains}
         />
      )
   }
}
export default withRouter(WithSideBarAndHeader(CreatePostRoute))
