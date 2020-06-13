import React from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import DetailedPostPage from '../../components/DetailedPostPage';
import WithSideBarAndHeader from '../../components/Common/WithSideBarAndHeader'
@inject('gyaanStore')
@observer
class PostDisplayRoute extends React.Component {
    componentDidMount() {
        const { match, gyaanStore } = this.props
        const selectedPostDomainId = +match.params.domainId
        const selectedPostId = +match.params.postId
        gyaanStore.setSelectedPostId(selectedPostId, selectedPostDomainId)
    }

    render() {
        const {
            getSelectedPostAPIStatus,
            getSelectedPostAPIError,
            selectedPost,
            getPostDetails,
            followingDomains
        } = this.props.gyaanStore;

        return <DetailedPostPage
                getSelectedPostAPIStatus={getSelectedPostAPIStatus}
                getSelectedPostAPIError={getSelectedPostAPIError}
                selectedPost={selectedPost}
                getPostDetails={getPostDetails}
                followingDomains={followingDomains}
        />
    }
}
export default withRouter(WithSideBarAndHeader(PostDisplayRoute))
