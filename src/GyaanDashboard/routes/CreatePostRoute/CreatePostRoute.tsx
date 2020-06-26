import React from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter,RouteComponentProps } from 'react-router-dom'
import { observable } from 'mobx'

import { goToGyaanHome } from '../../utils/NavigationUtils/NavigationUtils'
import CreatePostPage from '../../components/CreatePostPage'
import WithSideBarAndHeader from '../../components/Common/WithSideBarAndHeader'
import GyaanStore from "../../stores/GyaanStore"

interface InjectedProps extends RouteComponentProps{
   gyaanStore:GyaanStore
   onClickPost:()=>void
}
@inject('gyaanStore')
@observer
class CreatePostRoute extends React.Component<RouteComponentProps>{
   @observable content:string
   @observable title:string
   @observable selectedDomainId:number|null
   @observable selectedTags:Array<number>
   constructor(props) {
      super(props)
      this.title = ''
      this.content = ''
      this.selectedDomainId = null
      this.selectedTags = []
   }

   onSelectTag = e => {
      if (e === null) {
         this.selectedTags = []
      } else {
         e.forEach(tag => {
            this.selectedTags.push(tag.id)
         })
      }
   }
   onChangeTitle = e => {
      this.title = e.target.value
   }
   onChangeContent = e => {
      this.content = e.target.value
   }
   onChangeDomainId = e => {
      this.selectedDomainId = +e.id
      const { followingDomains } = this.props.gyaanStore
      followingDomains
         .find(domain => domain.domainId === this.selectedDomainId)
         .getTags()
   }

   onClickSubmit = () => {
      const { followingDomains } = this.props.gyaanStore
      const followingDomain = followingDomains.find(
         domain => domain.domainId === this.selectedDomainId
      )
      const { createPost } = followingDomain
      createPost(
         {
            title: this.title,
            content: this.content,
            tags: this.selectedTags
         },
         this.selectedDomainId,
         this.onSuccess,
         this.onFailure
      )
   }

   onSuccess = response => {
      const { history } = this.props
      goToGyaanHome(history)
   }
   onFailure = error => {}

   render() {
      const { gyaanStore } = this.props

      const { followingDomains } = gyaanStore

      return (
         <CreatePostPage
            followingDomains={followingDomains}
            content={this.content}
            title={this.title}
            onChangeDomainId={this.onChangeDomainId}
            onChangeContent={this.onChangeContent}
            onChangeTitle={this.onChangeTitle}
            selectedDomainId={this.selectedDomainId}
            onClickSubmit={this.onClickSubmit}
            onSelectTag={this.onSelectTag}
         />
      )
   }
}
export default withRouter(WithSideBarAndHeader(CreatePostRoute))
