///*global await*/
import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable, computed } from 'mobx'
import { withRouter } from 'react-router-dom'
import { GYAAN_PATH, CREATE_POST_PATH } from '../../constants/PathName'
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
      gyaanStore.setSelectedDomainId(domainId);

   }
   @computed
   get domainData() {
      const { followingDomains, selectedDomainId } = this.props.gyaanStore;
      return followingDomains.find(domain => domain.domainId === selectedDomainId);
   }

   onClickFollowingDomain = id => {
      const { history } = this.props
      history.replace(`/gyaan/followingDomains/${id}`)
   }
   onClickWritePost = () => {
      const { history } = this.props
      history.replace(CREATE_POST_PATH)
   }

   onClickAllDomains = () => {
      const { history } = this.props
      history.replace(GYAAN_PATH)
   }

   render() {
      return (
         <FollowingDomainPage
                  onClickFollowingDomain={this.onClickFollowingDomain}
                  domainData={this.domainData}

                  onClickAllDomains={this.onClickAllDomains}
                  onClickWritePost={this.onClickWritePost}
               />

      )
   }
}
export default withRouter(FollowingDomainRoute)
