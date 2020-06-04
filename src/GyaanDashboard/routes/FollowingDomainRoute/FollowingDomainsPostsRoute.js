///*global await*/
import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable, computed } from 'mobx'
import { withRouter } from 'react-router-dom'
import WithSideBarAndHeader from '../../components/Common/WithSideBarAndHeader'
import FollowingDomainPage from '../../components/FollowingDomainPage'

@inject('gyaanStore')
@observer
class FollowingDomainRoute extends React.Component {
   @observable followingDomains
   constructor(props) {
      super(props)
      this.followingDomains = []
   }

   componentDidMount() {
      const { match, gyaanStore } = this.props
      const domainId = +match.params.domainId
      gyaanStore.setSelectedDomainId(domainId)
   }
   @computed
   get domainData() {
      const { followingDomains, selectedDomainId } = this.props.gyaanStore
      return followingDomains.find(
         domain => domain.domainId === selectedDomainId
      )
   }

   render() {
      const { onClickPost } = this.props
      return (
         <FollowingDomainPage
            onClickFollowingDomain={this.onClickFollowingDomain}
            domainData={this.domainData}
            onClickPost={onClickPost}
            onClickAllDomains={this.onClickAllDomains}
            onClickWritePost={this.onClickWritePost}
         />
      )
   }
}
export default withRouter(WithSideBarAndHeader(FollowingDomainRoute))
