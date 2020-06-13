import React from 'react'
import { observer } from 'mobx-react'
import { observable, computed } from 'mobx'

import colors from '../../../themes/Colors.json'
import WithToggle from '../../common/WithToggle'
import strings from '../../i18n/Strings.json'
import Request from '../Request'
import {
   StyledRequests,
   StyledRequestsTitle,
   StyledTitle,
   StyledCount,
   StyledListItem
}
from './styledComponents'
@observer
class Requests extends React.Component {
   @observable text
   @observable hasClickedSeeAll
   constructor(props) {
      super(props)
      this.hasClickedSeeAll = false
      this.limitOnShowingDomains = 2
      this.text = strings.seeAll
   }
   @computed
   get listOfItems() {
      const { domainRequestedUsers } = this.props
      if (domainRequestedUsers == undefined) {
         return []
      }
      else if (this.hasClickedSeeAll) {
         return domainRequestedUsers
      }
      else {
         let showListOfItems =
            domainRequestedUsers.slice(0, this.limitOnShowingDomains)
         return showListOfItems
      }
   }

   toggleSeeAll = () => {
      this.hasClickedSeeAll = !this.hasClickedSeeAll
      this.text =
         this.text === strings.seeAll ?
         strings.showLess : strings.seeAll
   }

   render() {
      const { domainRequestedUsersCount, domainRequestedUsers } = this.props
      if (domainRequestedUsers) {
         return (
            <WithToggle
         text={this.text}
         hasClickedSeeAll={this.hasClickedSeeAll}>
         {(state)=>
            <StyledRequests >
            <StyledRequestsTitle
            isExpanded={!state.toggleStatus}
                     onClick={state.onToggle}>
               <StyledTitle>
                  Requests
               </StyledTitle>
               <StyledCount>
                  {domainRequestedUsersCount}
               </StyledCount>
            </StyledRequestsTitle>
            {!state.toggleStatus  &&
            domainRequestedUsersCount > 0 &&
               this.listOfItems.map(request => (
                  <Request
                     request={request}
                     key={request.userId}
                     onClickCancel={this.onClickCancel}
                     onClickFollow={this.onClickFollow}
                  />
               ))}
               {domainRequestedUsersCount>0?
                           this.limitOnShowingDomains && (
                           <StyledListItem onClick={this.toggleSeeAll}>
                              {this.text}
                           </StyledListItem>
                        ):null}
         </StyledRequests>
         }
         </WithToggle>

         )
      }
      return null
   }
}
export default Requests
